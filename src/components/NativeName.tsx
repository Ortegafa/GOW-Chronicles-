import type { Character } from '../../api/_types'
import { PANTHEONS } from '../lib/pantheon'

interface NativeNameProps {
  character: Character
  surface?: 'dark' | 'vellum'
  className?: string
}

export default function NativeName({ character, surface = 'dark', className = '' }: NativeNameProps) {
  const pantheon = PANTHEONS[character.mythology]
  return (
    <p
      lang={character.mythology === 'griega' ? 'grc' : 'non-Runr'}
      className={`${surface === 'vellum' ? pantheon.nativeOnVellum : pantheon.native} ${className}`}
    >
      {character.nativeName}
    </p>
  )
}
