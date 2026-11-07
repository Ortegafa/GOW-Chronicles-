import { useLanguage } from '../i18n/LanguageContext'
import type { Lang } from '../i18n/strings'

export default function LanguageSwitch() {
  const { lang, setLang, t } = useLanguage()
  const options: { value: Lang; short: string; label: string }[] = [
    { value: 'en', short: 'EN', label: t.nav.english },
    { value: 'es', short: 'ES', label: t.nav.spanish },
  ]

  return (
    <div role="group" aria-label={t.nav.language} className="flex bg-leather-deep p-0.5 inlay">
      {options.map((option) => (
        <button
          key={option.value}
          type="button"
          onClick={() => setLang(option.value)}
          aria-pressed={lang === option.value}
          aria-label={option.label}
          title={option.label}
          className={`min-h-9 min-w-11 cursor-pointer px-2.5 font-code text-xs font-bold tracking-wider transition-colors duration-200 ${
            lang === option.value ? 'bg-gold text-ink' : 'text-ash hover:text-bone'
          }`}
        >
          {option.short}
        </button>
      ))}
    </div>
  )
}
