import { Link } from 'react-router'
import type { Character } from '../../api/_types'
import { useLanguage } from '../i18n/LanguageContext'
import { localizeCharacter } from '../i18n/localize'
import { toRoman } from '../lib/pantheon'
import BookmarkRibbon from './BookmarkRibbon'
import FactionTag from './FactionTag'
import NativeName from './NativeName'
import Portrait from './Portrait'

interface FolioCardProps {
  character: Character
  marked: boolean
  onToggleFavorite: (character: Character) => void
}

export default function FolioCard({ character, marked, onToggleFavorite }: FolioCardProps) {
  const { t, lang } = useLanguage()
  const view = localizeCharacter(character, lang)
  return (
    <article className="group relative h-full bg-binder shadow-folio transition duration-200 ease-out hover:-translate-y-0.5 hover:shadow-[6px_10px_22px_rgb(0_0_0/0.55)]">
      <Link
        to={`/explore/${character.slug}`}
        className="flex h-full flex-col focus-visible:outline-offset-[-3px]"
      >
        <Portrait character={character} zoom className="aspect-[4/5] w-full" />
        <div className="flex flex-1 flex-col gap-1.5 px-4 pt-3 pb-4">
          <NativeName character={character} className="truncate text-sm" />
          <h3 className="font-display text-2xl leading-tight font-semibold text-bone group-hover:text-gold-bright">
            {character.name}
          </h3>
          <p className="line-clamp-1 text-sm text-ash">{view.species.join(', ') || t.card.noSpecies}</p>
          <div className="mt-auto flex items-end justify-between gap-2 pt-3">
            <FactionTag character={character} />
            <span className="font-code text-xs text-ash tabular-nums" aria-label={t.card.folioNumber(character.id)}>
              {toRoman(character.id)}
            </span>
          </div>
        </div>
      </Link>
      <BookmarkRibbon
        character={character}
        marked={marked}
        onToggle={onToggleFavorite}
        className="absolute top-0 right-3"
      />
    </article>
  )
}
