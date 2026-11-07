import { writeFileSync } from 'node:fs'

const API = 'https://godofwar.fandom.com/api.php'
const REPO_CHARACTERS = 'https://raw.githubusercontent.com/gdscwce/God-of-war-api/main/characters/characters.json'
const REALM_PAGES = { griega: 'Mount Olympus', nordica: 'Nine Realms' }
const CATEGORIES = {
  'God of War III': 'Category:God of War III Characters',
  'God of War (2018)': 'Category:God of War (2018) Characters',
  'God of War Ragnarök': 'Category:God of War Ragnarök Characters',
}

async function api(params) {
  const url = `${API}?${new URLSearchParams({ format: 'json', formatversion: '2', ...params })}`
  const response = await fetch(url, { headers: { 'User-Agent': 'gow-explorer (proyecto académico)' } })
  if (!response.ok) throw new Error(`${response.status} en ${url}`)
  return response.json()
}

const chunk = (list, size) => Array.from({ length: Math.ceil(list.length / size) }, (_, i) => list.slice(i * size, i * size + size))

function scanTemplates(text, onTopLevel) {
  let depth = 0
  let start = -1
  for (let i = 0; i < text.length; i++) {
    if (text.startsWith('{{', i)) {
      if (depth === 0) start = i
      depth++
      i++
    } else if (text.startsWith('}}', i) && depth > 0) {
      depth--
      i++
      if (depth === 0) onTopLevel(start, i + 1)
    }
  }
}

function removeTopLevelTemplates(text) {
  const ranges = []
  scanTemplates(text, (start, end) => ranges.push([start, end]))
  let out = ''
  let last = 0
  for (const [start, end] of ranges) {
    out += text.slice(last, start)
    last = end
  }
  return out + text.slice(last)
}

function findTemplate(text, name) {
  let found = null
  scanTemplates(text, (start, end) => {
    const body = text.slice(start + 2, end - 2)
    const head = body.trimStart().replace(/_/g, ' ').toLowerCase()
    if (!found && head.startsWith(name.toLowerCase())) found = body
  })
  return found
}

function splitParams(body) {
  const parts = []
  let depth = 0
  let current = ''
  for (let i = 0; i < body.length; i++) {
    const two = body.slice(i, i + 2)
    if (two === '{{' || two === '[[') {
      depth++
      current += two
      i++
    } else if ((two === '}}' || two === ']]') && depth > 0) {
      depth--
      current += two
      i++
    } else if (body[i] === '|' && depth === 0) {
      parts.push(current)
      current = ''
    } else current += body[i]
  }
  parts.push(current)
  const params = {}
  for (const part of parts.slice(1)) {
    const eq = part.indexOf('=')
    if (eq > 0) params[part.slice(0, eq).trim().toLowerCase()] = part.slice(eq + 1).trim()
  }
  return params
}

function clean(text = '') {
  let out = text
    .replace(/<!--[\s\S]*?-->/g, '')
    .replace(/<gallery[\s\S]*?<\/gallery>/gi, '')
    .replace(/<ref[^>]*\/>/g, '')
    .replace(/<ref[^>]*>[\s\S]*?<\/ref>/g, '')
    .replace(/<br\s*\/?>/gi, '\n')
    .replace(/\{\{\s*c\s*\|([^{}]*)\}\}/gi, '($1)')
    .replace(/\{\{\s*Scrollbox\s*\|\s*content\s*=((?:[^{}]|\{\{[^{}]*\}\})*)\}\}/gi, '$1')
  for (let i = 0; i < 3; i++) out = out.replace(/\{\{[^{}]*\}\}/g, '')
  return out
    .replace(/\[\[(?:File|Image|Archivo):[^\]]*\]\]/gi, '')
    .replace(/\[\[[^\]|]*\|([^\]]*)\]\]/g, '$1')
    .replace(/\[\[([^\]]*)\]\]/g, '$1')
    .replace(/\[https?:\/\/\S+ ([^\]]*)\]/g, '$1')
    .replace(/'''?/g, '')
    .replace(/<[^>]+>/g, '')
    .replace(/&nbsp;/g, ' ')
    .replace(/[ \t]+/g, ' ')
    .replace(/ ?\n ?/g, '\n')
    .trim()
}

const toList = (text) =>
  clean(text)
    .split('\n')
    .map((line) => line.replace(/^[*#:\s]+/, '').trim())
    .filter(Boolean)

function intro(sectionZero) {
  const paragraphs = clean(removeTopLevelTemplates(sectionZero))
    .split(/\n{1,}/)
    .map((p) => p.trim())
    .filter((p) => p.length > 40)
  const text = paragraphs[0] ?? ''
  if (text.length <= 600) return text
  const cut = text.slice(0, 600)
  return cut.slice(0, Math.max(cut.lastIndexOf('. ') + 1, 300))
}

function firstQuote(wikitext) {
  const body = findTemplate(wikitext, 'Quote|')
  if (!body) return null
  const [, text, speaker] = body.split(/\|(?![^[]*\]\])/)
  const quote = clean(text ?? '').replace(/\s+/g, ' ')
  if (!quote) return null
  const who = clean(speaker ?? '').replace(/\s+/g, ' ')
  return who ? `${quote} –${who}` : quote
}

const NORSE_WORDS = /aesir|vanir|j[öo]tunn|jötnar|dwarf|elf|valkyrie|norse|huldra|draugr|einherj|midgard|asgard|fae/i
const GREEK_WORDS = /olympian|titan|greek|spart|gorgon|athen|cyclop|centaur|satyr|harpy|siren|fury|furies/i
const NORSE_CITIZENSHIP = /\b(ASG|MID|VAN|JOT|ALF|SVA|HEL|NIF|MUS)\b|norse/i
const GREEK_CITIZENSHIP = /\b(GRE)\b|greek|athenian|spartan/i
const GREEK_ERA = new Set(['God of War III'])

function resolveMythology(wikitext, info, species, gameList, nativeNames) {
  if (/\{\{\s*GreekMyth/i.test(wikitext)) return 'griega'
  if (/\{\{\s*NorseMyth/i.test(wikitext)) return 'nordica'
  if (nativeNames.greek) return 'griega'
  if (nativeNames.runes) return 'nordica'
  const origin = `${info.nationality ?? ''} ${info.citizenship ?? ''}`
  if (GREEK_CITIZENSHIP.test(origin)) return 'griega'
  if (NORSE_CITIZENSHIP.test(origin)) return 'nordica'
  const speciesText = species.join(' ')
  if (NORSE_WORDS.test(speciesText)) return 'nordica'
  if (GREEK_WORDS.test(speciesText)) return 'griega'
  return gameList.every((game) => GREEK_ERA.has(game)) ? 'griega' : 'nordica'
}

async function categoryMembers(category) {
  const titles = []
  let cont = {}
  do {
    const data = await api({ action: 'query', list: 'categorymembers', cmtitle: category, cmlimit: '500', cmnamespace: '0', ...cont })
    titles.push(...data.query.categorymembers.map((m) => m.title))
    cont = data.continue ?? null
  } while (cont)
  return titles
}

const nativeNames = (sectionZero) => ({
  runes: sectionZero.match(/Nordic:\s*'''([ᚠ-᛿\s]+)'''/)?.[1]?.trim() ?? null,
  greek: sectionZero.match(/Greek:\s*'''?([Ͱ-Ͽἀ-῿\s]+)'''?/)?.[1]?.trim() ?? null,
})

const games = new Map()
const repoCharacters = await (await fetch(REPO_CHARACTERS)).json()
for (const c of repoCharacters) {
  const title = c.character.trim().replace(/^./, (ch) => ch.toUpperCase())
  games.set(title, [])
}
console.error(`${games.size} nombres tomados del repo original`)

for (const [game, category] of Object.entries(CATEGORIES)) {
  for (const title of await categoryMembers(category)) {
    games.set(title, [...(games.get(title) ?? []), game])
  }
}
console.error(`${games.size} páginas en las tres categorías`)

const pages = new Map()
for (const titles of chunk([...games.keys()], 50)) {
  const data = await api({
    action: 'query',
    prop: 'revisions|pageimages',
    rvprop: 'content',
    rvslots: 'main',
    piprop: 'thumbnail',
    pithumbsize: '700',
    pilimit: '50',
    titles: titles.join('|'),
  })
  for (const page of data.query.pages) {
    pages.set(page.title, {
      wikitext: page.revisions?.[0]?.slots?.main?.content ?? '',
      image: page.thumbnail?.source ?? null,
    })
  }
}

const characters = []
const skipped = []
for (const [title, gameList] of games) {
  const page = pages.get(title)
  const infoboxBody = page && findTemplate(page.wikitext, 'Infobox Character')
  if (!infoboxBody) {
    skipped.push(title)
    continue
  }
  const info = splitParams(infoboxBody)
  const sectionZero = page.wikitext.split(/\n==[^=]/)[0]
  const species = toList(info.species ?? '')
  const photo = page.wikitext.match(/\{\{CharacterPicture[^}]*\|\s*photo\s*=\s*([^|}\n]+)/i)?.[1]
  const { runes, greek } = nativeNames(sectionZero)

  characters.push({
    title,
    games: gameList,
    mythology: resolveMythology(page.wikitext, info, species, gameList, { greek, runes }),
    runes,
    greek,
    image: page.image,
    imageFile: page.image ? null : (info.image?.trim() || photo?.trim() || null),
    gender: toList(info.gender ?? '')[0] ?? null,
    species,
    aliases: toList(info.alias ?? info.aliases ?? ''),
    voiceActor: toList(info['voice actor'] ?? info['voice'] ?? '')[0] ?? null,
    appearsIn: toList(info['appears in'] ?? info.appearances ?? '').filter(
      (item) => !/^(main story|tie-in media.*|\(.*\))$/i.test(item),
    ),
    about: intro(sectionZero) || null,
    quote: firstQuote(page.wikitext),
  })
}

const missing = characters.filter((c) => c.imageFile)
for (const group of chunk(missing, 50)) {
  const data = await api({
    action: 'query',
    prop: 'imageinfo',
    iiprop: 'url',
    iiurlwidth: '700',
    titles: group.map((c) => `File:${c.imageFile}`).join('|'),
  })
  const urls = new Map()
  const normalized = new Map((data.query.normalized ?? []).map((n) => [n.to, n.from]))
  for (const page of data.query.pages) {
    const info = page.imageinfo?.[0]
    if (info) urls.set(normalized.get(page.title) ?? page.title, info.thumburl ?? info.url)
  }
  for (const c of group) c.image = urls.get(`File:${c.imageFile}`) ?? null
}
for (const c of characters) delete c.imageFile

const realmData = await api({
  action: 'query',
  prop: 'revisions|pageimages',
  rvprop: 'content',
  rvslots: 'main',
  piprop: 'thumbnail',
  pithumbsize: '900',
  titles: Object.values(REALM_PAGES).join('|'),
})
const mythologies = Object.entries(REALM_PAGES).map(([id, title]) => {
  const page = realmData.query.pages.find((p) => p.title === title)
  const sectionZero = (page.revisions?.[0]?.slots?.main?.content ?? '').split(/\n==[^=]/)[0]
  return { id, realm: title, ...nativeNames(sectionZero), image: page.thumbnail?.source ?? null, about: intro(sectionZero) }
})

writeFileSync(
  new URL('./wiki-data.json', import.meta.url),
  JSON.stringify({ source: API, mythologies, characters }, null, 2) + '\n',
)
console.error(`${characters.length} personajes guardados; ${skipped.length} páginas sin ficha de personaje omitidas:`)
console.error(skipped.join(' | '))
