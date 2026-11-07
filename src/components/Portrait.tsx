import { useState } from 'react'
import type { Character } from '../../api/_types'
import { useLanguage } from '../i18n/LanguageContext'
import Seal from './Seal'

interface PortraitProps {
  character: Character
  className?: string
  zoom?: boolean
}

export default function Portrait({ character, className = '', zoom = false }: PortraitProps) {
  const [failed, setFailed] = useState(false)
  const { t } = useLanguage()

  if (!character.image || failed) {
    return (
      <div
        role="img"
        aria-label={t.card.noPortrait(character.name)}
        className={`grid place-items-center bg-binder-high ${className}`}
      >
        <Seal mythology={character.mythology} size="lg" />
      </div>
    )
  }

  return (
    <div className={`overflow-hidden bg-leather-deep ${className}`}>
      <img
        src={character.image}
        alt={t.card.portraitAlt(character.name)}
        loading="lazy"
        decoding="async"
        referrerPolicy="no-referrer"
        onError={() => setFailed(true)}
        className={`size-full object-cover object-top ${
          zoom ? 'transition-transform duration-500 ease-out group-hover:scale-[1.03]' : ''
        }`}
      />
    </div>
  )
}
