import { existsSync, readFileSync, writeFileSync } from 'node:fs'

const wiki = JSON.parse(readFileSync(new URL('./wiki-data.json', import.meta.url), 'utf8'))

const RUNES = {
  th: 'ᚦ', ng: 'ᛜ', þ: 'ᚦ', ð: 'ᚦ', a: 'ᚨ', b: 'ᛒ', c: 'ᚲ', d: 'ᛞ', e: 'ᛖ', f: 'ᚠ', g: 'ᚷ',
  h: 'ᚺ', i: 'ᛁ', j: 'ᛃ', k: 'ᚲ', l: 'ᛚ', m: 'ᛗ', n: 'ᚾ', o: 'ᛟ', p: 'ᛈ', q: 'ᚲ', r: 'ᚱ',
  s: 'ᛊ', t: 'ᛏ', u: 'ᚢ', v: 'ᚹ', w: 'ᚹ', x: 'ᚲᛊ', y: 'ᛁ', z: 'ᛉ', ǫ: 'ᛟ', æ: 'ᚨ', œ: 'ᛟ', ø: 'ᛟ',
  ' ': '᛫',
}

const toRunes = (name) => {
  const text = name.toLowerCase().replace(/[áàâä]/g, 'a').replace(/[éè]/g, 'e')
    .replace(/[íì]/g, 'i').replace(/[óòö]/g, 'o').replace(/[úù]/g, 'u').replace(/ý/g, 'y')
    .replace(/&/g, ' ').replace(/\s+/g, ' ')
  let out = ''
  for (let i = 0; i < text.length; i++) {
    const pair = text.slice(i, i + 2)
    const rune = RUNES[pair] ? (i++, RUNES[pair]) : RUNES[text[i]] ?? ''
    if (rune && !out.endsWith(rune)) out += rune
  }
  return out
}

const GREEK_LETTERS = [
  ['ph', 'φ'], ['th', 'θ'], ['ch', 'χ'], ['ps', 'ψ'], ['rh', 'ρ'], ['ou', 'ου'], ['ae', 'αι'],
  ['a', 'α'], ['b', 'β'], ['c', 'κ'], ['d', 'δ'], ['e', 'ε'], ['f', 'φ'], ['g', 'γ'], ['h', ''],
  ['i', 'ι'], ['j', 'ι'], ['k', 'κ'], ['l', 'λ'], ['m', 'μ'], ['n', 'ν'], ['o', 'ο'], ['p', 'π'],
  ['q', 'κ'], ['r', 'ρ'], ['s', 'σ'], ['t', 'τ'], ['u', 'υ'], ['v', 'β'], ['w', 'ου'], ['x', 'ξ'],
  ['y', 'υ'], ['z', 'ζ'],
]

const toGreek = (name) =>
  name
    .split(/(\s+)/)
    .map((word) => {
      let text = word.normalize('NFD').replace(/[̀-ͯ]/g, '').toLowerCase()
      let out = ''
      while (text) {
        const [latin, greek] = GREEK_LETTERS.find(([l]) => text.startsWith(l)) ?? [text[0], text[0]]
        out += greek
        text = text.slice(latin.length)
      }
      return out.replace(/υσ$/, 'ος').replace(/σ$/, 'ς').replace(/^./, (c) => c.toUpperCase())
    })
    .join('')

const capitalize = (text) => text.replace(/^./, (c) => (c.toUpperCase().length === 1 ? c.toUpperCase() : c))

const slugify = (name) =>
  name.normalize('NFD').replace(/[̀-ͯ]/g, '').toLowerCase()
    .replace(/ø/g, 'o').replace(/æ/g, 'ae').replace(/œ/g, 'oe').replace(/ð/g, 'd').replace(/þ/g, 'th')
    .replace(/ǫ/g, 'o').replace(/&/g, 'and').replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '')

const MISSING = new Set(['NA', 'N/A', 'None', 'Unknown', ''])
const clean = (value) =>
  value == null || MISSING.has(value.trim()) || /voice actors$/i.test(value.trim()) ? null : value.trim()

const realms = Object.fromEntries(wiki.mythologies.map((m) => [m.id, m.realm]))

const IMAGE_OVERRIDES = {
  kratos: 'https://static.wikia.nocookie.net/godofwar/images/b/bc/Kratos_Greek_Era3.jpg/revision/latest?cb=20230118133505',
  mimir: 'https://static.wikia.nocookie.net/godofwar/images/9/9c/Mimir_photo_mode_1.png/revision/latest?cb=20180704210814',
}
const translationsUrl = new URL('./translations-es.json', import.meta.url)
const es = existsSync(translationsUrl) ? JSON.parse(readFileSync(translationsUrl, 'utf8')) : null

const SECOND_PANTHEON = { kratos: 'nordica' }
const PANTHEON_SUFFIX = { griega: 'greek', nordica: 'norse' }
const wikiImages = new Map()
const translationKeys = new Map()

const translateCharacter = (character) => {
  if (!es) return undefined
  const text = es.characters[translationKeys.get(character.slug) ?? character.slug] ?? {}
  return {
    realm: es.realms[character.mythology].realm,
    about: text.about ?? null,
    quote: text.quote ?? null,
    species: character.species.map((s) => es.species[s] ?? s),
    gender: es.genders[character.gender] ?? character.gender,
    aliases: text.aliases?.length === character.aliases.length ? text.aliases : character.aliases,
  }
}

const seen = new Set()

const characters = []
for (const w of wiki.characters) {
  const name = w.title.replace(/\s*\([^)]*\)$/, '')
  const slug = slugify(name)
  if (seen.has(slug)) continue
  seen.add(slug)
  wikiImages.set(slug, w.image)

  characters.push({
    id: characters.length + 1,
    slug,
    name,
    mythology: w.mythology,
    realm: realms[w.mythology],
    nativeName:
      w.mythology === 'griega' ? (w.greek ? capitalize(w.greek) : toGreek(name)) : (w.runes ?? toRunes(name)),
    image: IMAGE_OVERRIDES[slug] ?? w.image,
    voiceActor: clean(w.voiceActor),
    gender: w.gender ?? 'Unknown',
    species: w.species,
    aliases: w.aliases,
    appearsIn: w.appearsIn,
    about: w.about,
    quote: w.quote,
  })
}

for (const [slug, mythology] of Object.entries(SECOND_PANTHEON)) {
  const index = characters.findIndex((c) => c.slug === slug)
  if (index === -1) continue
  const base = characters[index]
  const twin = {
    ...base,
    id: characters.length + 1,
    slug: `${slug}-${PANTHEON_SUFFIX[mythology]}`,
    mythology,
    realm: realms[mythology],
    nativeName: mythology === 'griega' ? toGreek(base.name) : toRunes(base.name),
    image: wikiImages.get(slug) ?? base.image,
  }
  translationKeys.set(twin.slug, slug)
  characters.splice(index + 1, 0, twin)
}

for (const character of characters) {
  const translated = translateCharacter(character)
  if (translated) character.es = translated
}

const mythologies = wiki.mythologies.map((m) => ({
  id: m.id,
  realm: m.realm,
  nativeName: m.greek ?? m.runes ?? null,
  image: m.image,
  about: m.about,
  characterCount: characters.filter((c) => c.mythology === m.id).length,
  ...(es && { es: es.realms[m.id] }),
}))

const output = `import type { Character, MythologyInfo } from './_types.js'

export const source = ${JSON.stringify(wiki.source)}

export const mythologies: MythologyInfo[] = ${JSON.stringify(mythologies, null, 2)}

export const characters: Character[] = ${JSON.stringify(characters, null, 2)}
`
writeFileSync(new URL('../api/_data.ts', import.meta.url), output)
console.log(
  `${characters.length} personajes (${mythologies.map((m) => `${m.characterCount} ${m.id}`).join(', ')}); ` +
    `${characters.filter((c) => !c.about).length} sin descripción, ${characters.filter((c) => !c.image).length} sin imagen`,
)
