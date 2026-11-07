export type Mythology = 'griega' | 'nordica'

export interface CharacterTranslation {
  realm: string
  about: string | null
  quote: string | null
  species: string[]
  gender: string
  aliases: string[]
}

export interface Character {
  id: number
  slug: string
  name: string
  mythology: Mythology
  realm: string
  nativeName: string
  image: string | null
  voiceActor: string | null
  gender: string
  species: string[]
  aliases: string[]
  appearsIn: string[]
  about: string | null
  quote: string | null
  es?: CharacterTranslation
}

export interface MythologyTranslation {
  realm: string
  about: string
}

export interface MythologyInfo {
  id: Mythology
  realm: string
  nativeName: string | null
  image: string | null
  about: string
  characterCount: number
  es?: MythologyTranslation
}

export interface ApiError {
  error: string
}
