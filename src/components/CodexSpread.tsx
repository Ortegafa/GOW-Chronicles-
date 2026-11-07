import { Link } from 'react-router'
import type { Character, MythologyInfo } from '../../api/_types'
import { useLanguage } from '../i18n/LanguageContext'
import { localizeRealm } from '../i18n/localize'
import { PANTHEON_PARAM, PANTHEONS } from '../lib/pantheon'
import { btnPrimary, btnSecondary } from '../lib/ui'
import Portrait from './Portrait'
import Seal from './Seal'

const FEATURED = 3

interface RealmFolioProps {
  realm: MythologyInfo
  characters: Character[] | null
  side: 'left' | 'right'
}

function RealmFolio({ realm, characters, side }: RealmFolioProps) {
  const pantheon = PANTHEONS[realm.id]
  const { t, lang } = useLanguage()
  const view = localizeRealm(realm, lang)
  const featured = (characters ?? [])
    .map((character, order) => ({ character, order }))
    .sort((a, b) => b.character.aliases.length - a.character.aliases.length || a.order - b.order)
    .slice(0, FEATURED)
    .map(({ character }) => character)

  return (
    <section
      aria-labelledby={`folio-${realm.id}`}
      className={`relative flex flex-col bg-binder p-6 shadow-folio sm:p-10 ${side === 'left' ? 'lg:unfold-left' : 'lg:unfold-right'}`}
    >
      <div className="flex items-start justify-between gap-4">
        <div>
          <h2 id={`folio-${realm.id}`} className="font-display text-4xl leading-tight font-semibold text-bone sm:text-5xl">
            {view.realm}
          </h2>
          {realm.nativeName && <p className={`mt-1 ${pantheon.native}`}>{realm.nativeName}</p>}
        </div>
        <Seal mythology={realm.id} size="lg" />
      </div>

      <ul aria-label={t.home.featured} className="mt-8 grid grid-cols-3 gap-3">
        {featured.map((character) => (
          <li key={character.id}>
            <Link to={`/explore/${character.slug}`} className="group block">
              <Portrait character={character} zoom className="aspect-[3/4] w-full shadow-[2px_4px_10px_rgb(0_0_0/0.5)]" />
              <span className="mt-2 block truncate font-display text-lg text-dust group-hover:text-gold-bright">
                {character.name}
              </span>
            </Link>
          </li>
        ))}
        {!characters &&
          Array.from({ length: FEATURED }, (_, i) => (
            <li key={i} aria-hidden="true">
              <div className="shimmer aspect-[3/4] w-full" />
              <div className="shimmer mt-2 h-4 w-2/3" />
            </li>
          ))}
      </ul>

      <p lang={view.aboutLang} className="drop-cap mt-8 max-w-[60ch] text-lg leading-[1.75] text-dust">
        {view.about}
      </p>

      <div className="mt-auto flex flex-wrap items-center gap-x-6 gap-y-3 pt-10">
        <Link
          to={`/explore?pantheon=${PANTHEON_PARAM[realm.id]}`}
          className={realm.id === 'griega' ? btnPrimary : btnSecondary}
        >
          {t.home.seeAll(realm.characterCount)}
        </Link>
      </div>
    </section>
  )
}

interface CodexSpreadProps {
  realms: MythologyInfo[]
  characters: Character[] | null
}

export default function CodexSpread({ realms, characters }: CodexSpreadProps) {
  return (
    <div className="binding relative grid gap-6 p-3 sm:p-5 lg:grid-cols-2 lg:gap-12">
      {realms.map((realm, index) => (
        <RealmFolio
          key={realm.id}
          realm={realm}
          side={index === 0 ? 'left' : 'right'}
          characters={characters?.filter((c) => c.mythology === realm.id) ?? null}
        />
      ))}
      <div aria-hidden="true" className="pointer-events-none absolute inset-y-0 left-1/2 hidden w-6 -translate-x-1/2 lg:block">
        <div className="mx-auto h-full w-1.5 bg-gradient-to-b from-blood via-binder-high to-blood shadow-[0_0_10px_rgb(139_30_30/0.5)]" />
        <div className="absolute top-0 left-1/2 h-24 w-4 -translate-x-1/2 bg-blood shadow-[0_6px_12px_rgb(0_0_0/0.6)] [clip-path:polygon(0_0,100%_0,100%_100%,50%_calc(100%-6px),0_100%)]" />
      </div>
    </div>
  )
}
