import { characters, mythologies } from './_data.js'
import type { ApiError, Character, Mythology, MythologyInfo } from './_types.js'

export interface ApiResult {
  status: number
  body: Character | Character[] | MythologyInfo | MythologyInfo[] | ApiError
}

const normalize = (text: string) =>
  text.normalize('NFD').replace(/[̀-ͯ]/g, '').toLowerCase().trim()

const notFound = (what: string, id: string): ApiResult => ({
  status: 404,
  body: { error: `No existe ${what} con id "${id}"` },
})

export function resolveCharacters(url: URL): ApiResult {
  const id = url.searchParams.get('id') ?? url.pathname.match(/^\/api\/characters\/([^/]+)\/?$/)?.[1]

  if (id) {
    const key = normalize(decodeURIComponent(id))
    const character = characters.find((c) => String(c.id) === key || c.slug === key)
    return character ? { status: 200, body: character } : notFound('un personaje', id)
  }

  const search = normalize(url.searchParams.get('search') ?? '')
  const mythology = url.searchParams.get('mythology') as Mythology | null

  const result = characters.filter(
    (c) =>
      (!mythology || c.mythology === mythology) &&
      (!search || normalize(c.name).includes(search) || c.aliases.some((a) => normalize(a).includes(search))),
  )
  return { status: 200, body: result }
}

export function resolveMythologies(url: URL): ApiResult {
  const id = url.searchParams.get('id') ?? url.pathname.match(/^\/api\/mythologies\/([^/]+)\/?$/)?.[1]
  if (!id) return { status: 200, body: mythologies }

  const mythology = mythologies.find((m) => m.id === normalize(decodeURIComponent(id)))
  return mythology ? { status: 200, body: mythology } : notFound('una mitología', id)
}
