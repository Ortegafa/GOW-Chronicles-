import { useLanguage } from '../i18n/LanguageContext'

export default function CatalogSkeleton({ count = 8 }: { count?: number }) {
  const { t } = useLanguage()
  return (
    <div role="status">
      <span className="sr-only">{t.explore.loading}</span>
      <ul aria-hidden="true" className="grid grid-cols-1 gap-x-5 gap-y-7 min-[480px]:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4">
        {Array.from({ length: count }, (_, i) => (
          <li key={i} className="bg-binder shadow-folio">
            <div className="shimmer aspect-[4/5] w-full" />
            <div className="space-y-2.5 px-4 pt-3 pb-4">
              <div className="shimmer h-3 w-1/3" />
              <div className="shimmer h-6 w-2/3" />
              <div className="shimmer h-3 w-1/2" />
              <div className="shimmer mt-4 h-5 w-24" />
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}
