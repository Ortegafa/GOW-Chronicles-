import type { Character } from '../../api/_types'
import { useLanguage } from '../i18n/LanguageContext'
import { localizeCharacter } from '../i18n/localize'
import { PANTHEONS } from '../lib/pantheon'

export default function FactionTag({ character }: { character: Character }) {
  const { lang } = useLanguage()
  return (
    <span
      className={`inline-flex items-center border bg-leather-deep px-2 py-0.5 small-caps text-sm ${PANTHEONS[character.mythology].tag}`}
    >
      {localizeCharacter(character, lang).realm}
    </span>
  )
}
