import { Link } from 'react-router'
import { useLanguage } from '../i18n/LanguageContext'
import { btnPrimary } from '../lib/ui'

export default function NotFoundPage() {
  const { t } = useLanguage()
  return (
    <div className="mx-auto max-w-2xl px-4 pt-16 sm:px-8">
      <div className="vellum px-8 py-14 text-center sm:px-14">
        <p aria-hidden="true" className="font-display text-8xl leading-none font-bold text-blood">
          404
        </p>
        <h1 className="mt-4 font-display text-4xl font-semibold text-ink">{t.notFound.title}</h1>
        <p className="mx-auto mt-3 max-w-[45ch] text-ink-soft">{t.notFound.body}</p>
        <Link to="/" className={`${btnPrimary} mt-8`}>
          {t.notFound.back}
        </Link>
      </div>
    </div>
  )
}
