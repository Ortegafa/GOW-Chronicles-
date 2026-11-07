import type { ReactNode } from 'react'
import Icon, { type IconName } from './Icon'

interface StatePlateProps {
  tone: 'error' | 'empty'
  title: string
  children: ReactNode
  action?: ReactNode
}

const TONES: Record<StatePlateProps['tone'], { icon: IconName; color: string }> = {
  error: { icon: 'alert', color: 'text-blood-pale' },
  empty: { icon: 'bookmark', color: 'text-gold' },
}

export default function StatePlate({ tone, title, children, action }: StatePlateProps) {
  const { icon, color } = TONES[tone]
  return (
    <div
      role={tone === 'error' ? 'alert' : undefined}
      className="mx-auto flex max-w-xl flex-col items-start gap-4 bg-binder px-8 py-10 shadow-folio sm:flex-row sm:gap-6"
    >
      <span className={`grid size-12 shrink-0 place-items-center bg-leather-deep inlay ${color}`}>
        <Icon name={icon} className="size-6" />
      </span>
      <div>
        <h2 className="font-display text-2xl font-semibold text-bone">{title}</h2>
        <div className="mt-2 max-w-prose text-dust">{children}</div>
        {action && <div className="mt-6">{action}</div>}
      </div>
    </div>
  )
}
