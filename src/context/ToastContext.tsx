import { createContext, useCallback, useContext, useMemo, useState, type ReactNode } from 'react'

export type ToastType = 'success' | 'error' | 'info'

interface Toast {
  id: number
  type: ToastType
  message: string
}

interface ToastValue {
  toasts: Toast[]
  showToast: (type: ToastType, message: string) => void
  dismissToast: (id: number) => void
}

const ToastContext = createContext<ToastValue | null>(null)
const AUTO_DISMISS_MS = 3500
let nextId = 0

export function ToastProvider({ children }: { children: ReactNode }) {
  const [toasts, setToasts] = useState<Toast[]>([])

  const dismissToast = useCallback((id: number) => {
    setToasts((prev) => prev.filter((t) => t.id !== id))
  }, [])

  const showToast = useCallback(
    (type: ToastType, message: string) => {
      const id = ++nextId
      setToasts((prev) => [...prev, { id, type, message }])
      setTimeout(() => dismissToast(id), AUTO_DISMISS_MS)
    },
    [dismissToast],
  )

  const value = useMemo(() => ({ toasts, showToast, dismissToast }), [toasts, showToast, dismissToast])

  return <ToastContext.Provider value={value}>{children}</ToastContext.Provider>
}

export function useToast() {
  const context = useContext(ToastContext)
  if (!context) throw new Error('useToast must be used inside <ToastProvider>')
  return context
}
