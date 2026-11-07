import type { Mythology } from '../../api/_types'
import { useLanguage } from '../i18n/LanguageContext'
import { fieldClass } from '../lib/ui'
import Icon from './Icon'

export type PantheonFilter = Mythology | 'todos'

interface IndexPanelProps {
  search: string
  pantheon: PantheonFilter
  onSearchChange: (value: string) => void
  onPantheonChange: (value: PantheonFilter) => void
}

export default function IndexPanel({ search, pantheon, onSearchChange, onPantheonChange }: IndexPanelProps) {
  const { t } = useLanguage()
  const options: { value: PantheonFilter; label: string }[] = [
    { value: 'todos', label: t.explore.both },
    { value: 'griega', label: t.explore.greek },
    { value: 'nordica', label: t.explore.norse },
  ]

  return (
    <form role="search" onSubmit={(event) => event.preventDefault()} className="space-y-5 lg:space-y-7">
      <div>
        <label htmlFor="codex-search" className="mb-2 block small-caps text-base text-dust">
          {t.explore.searchLabel}
        </label>
        <div className="relative">
          <Icon name="search" className="pointer-events-none absolute top-1/2 left-3.5 size-5 -translate-y-1/2 text-ash" />
          <input
            id="codex-search"
            type="search"
            value={search}
            onChange={(event) => onSearchChange(event.target.value)}
            placeholder={t.explore.searchPlaceholder}
            autoComplete="off"
            className={`${fieldClass} pl-11`}
          />
        </div>
      </div>

      <fieldset>
        <legend className="mb-3 small-caps text-base text-dust">{t.explore.pantheon}</legend>
        <div className="flex flex-wrap gap-x-5 lg:block lg:space-y-1">
          {options.map((option) => (
            <label
              key={option.value}
              className="flex min-h-11 cursor-pointer items-center gap-3 px-1 text-bone transition-colors hover:text-gold-bright has-[:focus-visible]:outline-2 has-[:focus-visible]:outline-gold-bright"
            >
              <input
                type="radio"
                name="pantheon"
                value={option.value}
                checked={pantheon === option.value}
                onChange={() => onPantheonChange(option.value)}
                className="peer sr-only"
              />
              <span
                aria-hidden="true"
                className="grid size-4 rotate-45 place-items-center border border-ash bg-leather-deep transition-colors peer-checked:border-gold-bright peer-checked:*:opacity-100"
              >
                <span className="size-1.5 bg-gold-bright opacity-0 shadow-[0_0_8px_var(--color-gold)] transition-opacity" />
              </span>
              {option.label}
            </label>
          ))}
        </div>
      </fieldset>
    </form>
  )
}
