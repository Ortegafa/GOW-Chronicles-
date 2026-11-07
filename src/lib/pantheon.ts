import type { Mythology } from '../../api/_types'

interface Pantheon {
  seal: string
  native: string
  nativeOnVellum: string
  accent: string
  tag: string
  sealBg: string
  ribbon: string
}

export const PANTHEONS: Record<Mythology, Pantheon> = {
  griega: {
    seal: 'Ω',
    native: 'font-display italic text-gold-bright',
    nativeOnVellum: 'font-display italic text-blood',
    accent: 'text-gold-bright',
    tag: 'border-blood-bright text-blood-pale',
    sealBg: 'bg-blood',
    ribbon: 'bg-blood',
  },
  nordica: {
    seal: 'ᛟ',
    native: 'font-rune tracking-[0.2em] text-frost-pale',
    nativeOnVellum: 'font-rune tracking-[0.2em] text-frost-deep',
    accent: 'text-frost-pale',
    tag: 'border-frost text-frost-pale',
    sealBg: 'bg-iron',
    ribbon: 'bg-frost',
  },
}

const ROMAN: [number, string][] = [
  [1000, 'M'], [900, 'CM'], [500, 'D'], [400, 'CD'], [100, 'C'], [90, 'XC'],
  [50, 'L'], [40, 'XL'], [10, 'X'], [9, 'IX'], [5, 'V'], [4, 'IV'], [1, 'I'],
]

export function toRoman(value: number): string {
  let rest = value
  let out = ''
  for (const [n, letters] of ROMAN) {
    while (rest >= n) {
      out += letters
      rest -= n
    }
  }
  return out
}

export const PANTHEON_PARAM: Record<Mythology, string> = { griega: 'greek', nordica: 'norse' }

export const mythologyFromParam = (value: string | null): Mythology | null =>
  value === 'greek' ? 'griega' : value === 'norse' ? 'nordica' : null
