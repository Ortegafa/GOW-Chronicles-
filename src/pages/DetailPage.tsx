import { useEffect } from 'react'
import { Link, useParams } from 'react-router'
import type { Character } from '../../api/_types'
import Icon from '../components/Icon'
import NativeName from '../components/NativeName'
import Portrait from '../components/Portrait'
import QuoteGloss from '../components/QuoteGloss'
import Seal from '../components/Seal'
import StatePlate from '../components/StatePlate'
import { useFavorites } from '../context/FavoritesContext'
import { useToast } from '../context/ToastContext'
import { useFavoriteToggle } from '../hooks/useFavoriteToggle'
import { HttpError, useFetch } from '../hooks/useFetch'
import { useLanguage } from '../i18n/LanguageContext'
import { localizeCharacter } from '../i18n/localize'
import { toRoman } from '../lib/pantheon'
import { btnPrimary, btnSecondary } from '../lib/ui'

export default function DetailPage() {
  const { id = '' } = useParams()
  const { data: character, loading, error, reload } = useFetch<Character>(`/api/characters/${encodeURIComponent(id)}`)
  const { isFavorite } = useFavorites()
  const { toggle, dialog } = useFavoriteToggle()
  const { showToast } = useToast()
  const { t } = useLanguage()
  const notFound = error instanceof HttpError && error.status === 404

  useEffect(() => {
    if (error && !notFound) showToast('error', t.detail.errorToast)
  }, [error, notFound, showToast, t])

  useEffect(() => {
    if (!character) return
    document.title = `${character.name} · ${t.brand}`
    return () => {
      document.title = t.brand
    }
  }, [character, t])

  return (
    <div className="mx-auto max-w-7xl px-4 pt-10 sm:px-8">
      <Link to="/explore" className="inline-flex min-h-11 items-center gap-2 text-dust transition-colors hover:text-gold-bright">
        <Icon name="back" />
        {t.detail.back}
      </Link>

      <div className="mt-6">
        {loading && (
          <div role="status" className="binding grid gap-6 p-3 sm:p-5 lg:grid-cols-2 lg:gap-12">
            <span className="sr-only">{t.detail.loading}</span>
            <div aria-hidden="true" className="shimmer h-[40rem]" />
            <div aria-hidden="true" className="shimmer h-[40rem]" />
          </div>
        )}
        {notFound && (
          <StatePlate
            tone="empty"
            title={t.detail.notFoundTitle}
            action={
              <Link to="/explore" className={btnSecondary}>
                {t.detail.seeAll}
              </Link>
            }
          >
            {t.detail.notFoundBody(id)}
          </StatePlate>
        )}
        {error && !notFound && (
          <StatePlate
            tone="error"
            title={t.detail.errorTitle}
            action={
              <button type="button" onClick={reload} className={btnSecondary}>
                {t.common.retry}
              </button>
            }
          >
            {t.common.apiDown}
          </StatePlate>
        )}
        {character && <Folio character={character} marked={isFavorite(character.id)} onToggle={toggle} />}
      </div>
      {dialog}
    </div>
  )
}

interface FolioProps {
  character: Character
  marked: boolean
  onToggle: (character: Character) => void
}

function Folio({ character, marked, onToggle }: FolioProps) {
  const { t, lang } = useLanguage()
  const view = localizeCharacter(character, lang)
  const folioLabel = character.mythology === 'griega' ? t.pantheon.greekFolio : t.pantheon.norseFolio
  const facts: [string, string, string][] = [
    [t.detail.species, view.species.join(', ') || t.detail.notRecorded, view.dataLang],
    [t.detail.gender, view.gender, view.dataLang],
    [t.detail.voice, character.voiceActor ?? t.detail.noVoice, lang],
    [t.detail.realm, view.realm, view.dataLang],
  ]

  return (
    <article aria-labelledby="folio-title" className="binding relative grid gap-6 p-3 sm:p-5 lg:grid-cols-2 lg:gap-12">
      <div className="bg-binder p-5 shadow-folio sm:p-8">
        <div className="lg:sticky lg:top-24">
          <div className="relative">
            <Portrait
              character={character}
              className="aspect-[4/3] w-full shadow-[2px_6px_14px_rgb(0_0_0/0.55)] sm:aspect-[4/5]"
            />
            <Seal mythology={character.mythology} size="lg" className="absolute -bottom-6 left-5" />
          </div>
          <dl className="mt-10 grid grid-cols-2 gap-2 sm:mt-12 sm:gap-3">
            {facts.map(([label, value, valueLang]) => (
              <div key={label} className="bg-leather-deep px-3 py-2.5 inlay sm:px-4 sm:py-3">
                <dt className="small-caps text-sm text-ash sm:text-base">{label}</dt>
                <dd lang={valueLang} className="mt-0.5 font-display text-lg leading-snug text-bone sm:text-xl">
                  {value}
                </dd>
              </div>
            ))}
          </dl>
          <p className="mt-6 font-code text-sm text-ash tabular-nums">
            {t.detail.folio(folioLabel, toRoman(character.id))}
          </p>
        </div>
      </div>

      <div className="vellum flex flex-col px-6 py-9 sm:px-11 sm:py-12">
        <NativeName character={character} surface="vellum" className="text-xl" />
        <h1 id="folio-title" className="mt-1 font-display text-5xl leading-none font-bold text-ink sm:text-6xl">
          {character.name}
        </h1>

        {view.about ? (
          <p lang={view.aboutLang} className="drop-cap mt-8 max-w-[62ch] text-lg leading-[1.75] text-ink">
            {view.about}
          </p>
        ) : (
          <p className="mt-8 text-ink-soft italic">{t.detail.noAbout}</p>
        )}

        {view.quote && (
          <div className="mt-8">
            <QuoteGloss key={lang} quote={view.quote} lang={view.quoteLang} />
          </div>
        )}

        <section aria-labelledby="games-title" className="mt-10">
          <h2 id="games-title" className="font-display text-2xl font-semibold text-ink">
            {t.detail.appearsIn}
          </h2>
          <ul lang="en" className="mt-3 flex flex-wrap gap-2">
            {character.appearsIn.map((game) => (
              <li key={game} className="border border-parchment-edge bg-parchment px-3 py-1 text-sm text-ink">
                {game}
              </li>
            ))}
          </ul>
        </section>

        {view.aliases.length > 0 && (
          <section aria-labelledby="aliases-title" className="mt-10">
            <h2 id="aliases-title" className="font-display text-2xl font-semibold text-ink">
              {t.detail.aliases}
            </h2>
            <ul lang={view.dataLang} className="mt-3 columns-1 gap-8 text-ink-soft sm:columns-2">
              {view.aliases.map((alias) => (
                <li key={alias} className="flex break-inside-avoid gap-2 py-0.5">
                  <span aria-hidden="true" className="mt-2.5 size-1.5 shrink-0 rotate-45 bg-gold" />
                  <span>{alias}</span>
                </li>
              ))}
            </ul>
          </section>
        )}

        <div className="mt-auto pt-12">
          <button
            type="button"
            onClick={() => onToggle(character)}
            aria-pressed={marked}
            className={marked ? btnSecondary : btnPrimary}
          >
            <Icon name="bookmark" className="size-5" />
            {marked ? t.detail.remove : t.detail.add}
          </button>
        </div>
      </div>

      <div aria-hidden="true" className="pointer-events-none absolute inset-y-0 left-1/2 hidden w-6 -translate-x-1/2 lg:block">
        <div className="mx-auto h-full w-1.5 bg-gradient-to-b from-blood via-binder-high to-blood" />
      </div>
    </article>
  )
}
