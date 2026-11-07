import { useCallback, useEffect, useState } from 'react'

export class HttpError extends Error {
  constructor(
    message: string,
    public status: number,
  ) {
    super(message)
  }
}

interface FetchState<T> {
  data: T | null
  loading: boolean
  error: HttpError | Error | null
  reload: () => void
}

export function useFetch<T>(url: string): FetchState<T> {
  const [data, setData] = useState<T | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<HttpError | Error | null>(null)
  const [attempt, setAttempt] = useState(0)

  useEffect(() => {
    const controller = new AbortController()

    const load = async () => {
      setLoading(true)
      setError(null)
      try {
        const response = await fetch(url, { signal: controller.signal })
        const body = await response.json().catch(() => null)
        if (!response.ok) {
          throw new HttpError(body?.error ?? `Error ${response.status}`, response.status)
        }
        setData(body as T)
      } catch (err) {
        if (controller.signal.aborted) return
        setData(null)
        setError(err instanceof Error ? err : new Error('Error desconocido'))
      } finally {
        if (!controller.signal.aborted) setLoading(false)
      }
    }

    load()
    return () => controller.abort()
  }, [url, attempt])

  const reload = useCallback(() => setAttempt((n) => n + 1), [])

  return { data, loading, error, reload }
}
