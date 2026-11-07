import { useEffect, useId, useRef, type ReactNode } from 'react'
import { useLanguage } from '../i18n/LanguageContext'
import { btnPrimary, btnSecondary } from '../lib/ui'

interface SealDialogProps {
  open: boolean
  title: string
  children: ReactNode
  confirmLabel: string
  cancelLabel?: string
  onConfirm: () => void
  onCancel: () => void
}

export default function SealDialog({
  open,
  title,
  children,
  confirmLabel,
  cancelLabel,
  onConfirm,
  onCancel,
}: SealDialogProps) {
  const { t } = useLanguage()
  const dialogRef = useRef<HTMLDialogElement>(null)
  const titleId = useId()
  const bodyId = useId()

  useEffect(() => {
    const dialog = dialogRef.current
    if (!dialog) return
    if (open && !dialog.open) dialog.showModal()
    if (!open && dialog.open) dialog.close()
  }, [open])

  return (
    <dialog
      ref={dialogRef}
      aria-labelledby={titleId}
      aria-describedby={bodyId}
      onCancel={(event) => {
        event.preventDefault()
        onCancel()
      }}
      className="m-auto w-[min(92vw,28rem)] bg-binder p-0 text-bone shadow-seal outline outline-1 -outline-offset-6 outline-gold/60"
    >
      <div className="px-7 pt-8 pb-7">
        <h2 id={titleId} className="font-display text-3xl font-semibold text-gold-bright">
          {title}
        </h2>
        <div id={bodyId} className="mt-3 text-dust">
          {children}
        </div>
        <div className="mt-8 flex flex-col-reverse gap-3 sm:flex-row sm:justify-end">
          <button type="button" onClick={onCancel} className={btnSecondary}>
            {cancelLabel ?? t.common.cancel}
          </button>
          <button type="button" onClick={onConfirm} autoFocus className={btnPrimary}>
            {confirmLabel}
          </button>
        </div>
      </div>
    </dialog>
  )
}
