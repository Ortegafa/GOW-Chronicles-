import type { Character, MythologyInfo } from '../../api/_types'
import CodexSpread from '../components/CodexSpread'
import OracleDialog from '../components/OracleDialog'
import StatePlate from '../components/StatePlate'
import { useFetch } from '../hooks/useFetch'
import { useLanguage } from '../i18n/LanguageContext'
import { btnSecondary } from '../lib/ui'

export default function HomePage() {
  const realms = useFetch<MythologyInfo[]>('/api/mythologies')
  const characters = useFetch<Character[]>('/api/characters')
  const { t } = useLanguage()
  const total = characters.data ? new Set(characters.data.map((c) => c.name)).size : undefined

  return (
    <div className="mx-auto max-w-7xl px-4 pt-12 sm:px-8 sm:pt-16">
      <header className="max-w-4xl">
        <h1 className="font-display text-5xl leading-[1.05] font-bold text-bone sm:text-7xl">{t.brand}</h1>
        <p className="mt-5 max-w-[60ch] text-lg leading-relaxed text-dust">{t.home.intro(total)}</p>
      </header>

      <div className="mt-12">
        {realms.error ? (
          <StatePlate
            tone="error"
            title={t.home.errorTitle}
            action={
              <button type="button" onClick={realms.reload} className={btnSecondary}>
                {t.common.retry}
              </button>
            }
          >
            {t.common.apiDown}
          </StatePlate>
        ) : realms.data ? (
          <CodexSpread realms={realms.data} characters={characters.data} />
        ) : (
          <div role="status" className="binding grid gap-6 p-3 sm:p-5 lg:grid-cols-2 lg:gap-12">
            <span className="sr-only">{t.home.loading}</span>
            <div aria-hidden="true" className="shimmer h-[34rem]" />
            <div aria-hidden="true" className="shimmer h-[34rem]" />
          </div>
        )}
      </div>
      <OracleDialog />
    </div>
  )
}
