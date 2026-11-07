import { useDeferredValue, useEffect } from 'react'
import { useSearchParams } from 'react-router'
import type { Character } from '../../api/_types'
import CatalogSkeleton from '../components/CatalogSkeleton'
import FolioGrid from '../components/FolioGrid'
import IndexPanel, { type PantheonFilter } from '../components/IndexPanel'
import StatePlate from '../components/StatePlate'
import { useToast } from '../context/ToastContext'
import { useFetch } from '../hooks/useFetch'
import { useLanguage } from '../i18n/LanguageContext'
import { mythologyFromParam, PANTHEON_PARAM } from '../lib/pantheon'
import { btnSecondary } from '../lib/ui'

const normalize = (text: string) =>
  text.normalize('NFD').replace(/[̀-ͯ]/g, '').toLowerCase().trim()

export default function ExplorePage() {
  const { data, loading, error, reload } = useFetch<Character[]>('/api/characters')
  const { showToast } = useToast()
  const { t } = useLanguage()

  const [params, setParams] = useSearchParams()
  const search = params.get('q') ?? ''
  const pantheon: PantheonFilter = mythologyFromParam(params.get('pantheon')) ?? 'todos'
  const deferredSearch = useDeferredValue(search)

  const setParam = (key: string, value: string) =>
    setParams(
      (prev) => {
        const next = new URLSearchParams(prev)
        if (value) next.set(key, value)
        else next.delete(key)
        return next
      },
      { replace: true },
    )

  useEffect(() => {
    if (error) showToast('error', t.explore.errorToast)
  }, [error, showToast, t])

  const term = normalize(deferredSearch)
  const results = (data ?? []).filter(
    (c) =>
      (pantheon === 'todos' || c.mythology === pantheon) &&
      (!term || normalize(c.name).includes(term) || c.aliases.some((alias) => normalize(alias).includes(term))),
  )
  const pantheonName = pantheon === 'todos' ? null : pantheon === 'griega' ? t.explore.greek : t.explore.norse

  return (
    <div className="mx-auto grid max-w-7xl gap-10 px-4 pt-12 sm:px-8 lg:grid-cols-[17rem_1fr] lg:gap-14">
      <aside className="lg:sticky lg:top-24 lg:self-start">
        <h1 className="font-display text-5xl font-bold text-bone">{t.explore.title}</h1>
        <p className="mt-2 mb-6 text-dust lg:mb-8">{t.explore.intro}</p>
        <IndexPanel
          search={search}
          pantheon={pantheon}
          onSearchChange={(value) => setParam('q', value)}
          onPantheonChange={(value) => setParam('pantheon', value === 'todos' ? '' : PANTHEON_PARAM[value])}
        />
        {data && (
          <p role="status" className="mt-4 font-code text-sm text-ash tabular-nums lg:mt-8">
            {t.explore.count(results.length, data.length)}
          </p>
        )}
      </aside>

      <section aria-label={t.explore.results}>
        {loading && <CatalogSkeleton />}
        {error && (
          <StatePlate
            tone="error"
            title={t.explore.errorTitle}
            action={
              <button type="button" onClick={reload} className={btnSecondary}>
                {t.common.retry}
              </button>
            }
          >
            {t.explore.errorBody(error.message)}
          </StatePlate>
        )}
        {data && results.length === 0 && (
          <StatePlate
            tone="empty"
            title={t.explore.emptyTitle}
            action={
              <button type="button" onClick={() => setParams({}, { replace: true })} className={btnSecondary}>
                {t.explore.clear}
              </button>
            }
          >
            {t.explore.emptyBody(search, pantheonName)}
          </StatePlate>
        )}
        {data && results.length > 0 && <FolioGrid characters={results} />}
      </section>
    </div>
  )
}
