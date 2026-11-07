const PATHS = {
  search: 'M10.5 17a6.5 6.5 0 1 0 0-13 6.5 6.5 0 0 0 0 13ZM15.5 15.5 21 21',
  bookmark: 'M6 3h12v18l-6-4-6 4V3Z',
  close: 'M5 5l14 14M19 5 5 19',
  menu: 'M3 6h18M3 12h18M3 18h18',
  back: 'M10 6 4 12l6 6M4 12h16',
  alert: 'M12 3 22 20H2L12 3ZM12 10v4M12 17v.5',
  check: 'M4 12.5 9.5 18 20 6',
  info: 'M12 22a10 10 0 1 0 0-20 10 10 0 0 0 0 20ZM12 11v6M12 7v.5',
  quill: 'M20 4C12 4 7 9 5 19l-1 2M20 4c0 7-4 11-11 12M20 4 9 15',
  seal: 'M12 3 14.5 5.5 18 5l.5 3.5L21 11l-2.5 2.5.5 3.5-3.5.5L13 20l-1-1-3 2-1-3.5L4.5 17l.5-3.5L3 11l2.5-2.5L5 5l3.5.5L12 3Z',
} as const

export type IconName = keyof typeof PATHS

interface IconProps {
  name: IconName
  className?: string
}

export default function Icon({ name, className = 'size-5' }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="square"
      strokeLinejoin="miter"
      aria-hidden="true"
      className={className}
    >
      <path d={PATHS[name]} />
    </svg>
  )
}
