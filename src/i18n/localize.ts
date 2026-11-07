import type { Character, MythologyInfo } from '../../api/_types'
import type { Lang } from './strings'

export function localizeCharacter(character: Character, lang: Lang) {
  const es = lang === 'es' ? character.es : undefined
  return {
    realm: es?.realm ?? character.realm,
    about: es ? es.about : character.about,
    aboutLang: es?.about ? 'es' : 'en',
    quote: es ? es.quote : character.quote,
    quoteLang: es?.quote ? 'es' : 'en',
    species: es?.species ?? character.species,
    gender: es?.gender ?? character.gender,
    aliases: es?.aliases ?? character.aliases,
    dataLang: es ? 'es' : 'en',
  }
}

export function localizeRealm(realm: MythologyInfo, lang: Lang) {
  const es = lang === 'es' ? realm.es : undefined
  return {
    realm: es?.realm ?? realm.realm,
    about: es?.about ?? realm.about,
    aboutLang: es ? 'es' : 'en',
  }
}
