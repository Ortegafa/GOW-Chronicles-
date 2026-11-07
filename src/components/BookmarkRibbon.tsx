import type { Character } from '../../api/_types'
import { useLanguage } from '../i18n/LanguageContext'
import { PANTHEONS } from '../lib/pantheon'

interface BookmarkRibbonProps {
  character: Character
  marked: boolean
  onToggle: (character: Character) => void
  className?: string
}

export default function BookmarkRibbon({ character, marked, onToggle, className = '' }: BookmarkRibbonProps) {
  const { t } = useLanguage()
  const label = marked ? t.card.remove(character.name) : t.card.add(character.name)
  return (
    <button
      type="button"
      onClick={() => onToggle(character)}
      aria-pressed={marked}
      aria-label={label}
      title={label}
      className={`group/ribbon flex h-16 w-11 cursor-pointer justify-center focus-visible:outline-offset-0 ${className}`}
    >
      <span
        aria-hidden="true"
        className={`block w-6 shadow-[0_4px_8px_rgb(0_0_0/0.6)] transition-[height,background-color] duration-300 ease-out [clip-path:polygon(0_0,100%_0,100%_100%,50%_calc(100%-8px),0_100%)] ${
          marked
            ? `h-14 ${PANTHEONS[character.mythology].ribbon}`
            : 'h-7 bg-binder-high group-hover/ribbon:h-9 group-hover/ribbon:bg-ash/60'
        }`}
      />
    </button>
  )
}
