import type { Mythology } from '../../api/_types'
import { PANTHEONS } from '../lib/pantheon'

interface SealProps {
  mythology: Mythology
  size?: 'sm' | 'lg'
  className?: string
}

export default function Seal({ mythology, size = 'sm', className = '' }: SealProps) {
  const pantheon = PANTHEONS[mythology]
  const dimensions = size === 'lg' ? 'size-16 text-3xl' : 'size-11 text-xl'
  return (
    <span
      aria-hidden="true"
      className={`grid shrink-0 place-items-center rounded-full p-1 shadow-seal ${pantheon.sealBg} ${dimensions} ${className}`}
    >
      <span
        className={`grid size-full place-items-center rounded-full bg-leather-deep/70 leading-none ${pantheon.accent} ${
          mythology === 'griega' ? 'font-display font-semibold' : 'font-rune'
        }`}
      >
        {pantheon.seal}
      </span>
    </span>
  )
}
