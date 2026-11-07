import { useToast, type ToastType } from '../context/ToastContext'
import { useLanguage } from '../i18n/LanguageContext'
import Icon, { type IconName } from './Icon'

const TYPES: Record<ToastType, { icon: IconName; color: string }> = {
  success: { icon: 'check', color: 'text-gold-bright' },
  error: { icon: 'alert', color: 'text-blood-pale' },
  info: { icon: 'info', color: 'text-frost-pale' },
}

export default function ToastStack() {
  const { toasts, dismissToast } = useToast()
  const { t } = useLanguage()

  return (
    <div className="pointer-events-none fixed top-20 right-4 z-50 flex w-[min(92vw,22rem)] flex-col gap-2">
      {toasts.map((toast) => {
        const type = TYPES[toast.type]
        return (
          <div
            key={toast.id}
            role={toast.type === 'error' ? 'alert' : 'status'}
            className="toast-in pointer-events-auto flex items-start gap-3 bg-iron px-4 py-3 text-sm text-bone shadow-seal"
          >
            <Icon name={type.icon} className={`mt-0.5 size-5 shrink-0 ${type.color}`} />
            <p className="flex-1">
              <span className="sr-only">{t.toast[toast.type]}: </span>
              {toast.message}
            </p>
            <button
              type="button"
              onClick={() => dismissToast(toast.id)}
              aria-label={t.toast.dismiss}
              className="-m-2 grid size-9 shrink-0 cursor-pointer place-items-center text-ash transition-colors hover:text-bone"
            >
              <Icon name="close" className="size-4" />
            </button>
          </div>
        )
      })}
    </div>
  )
}
