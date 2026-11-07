import { createContext, useContext, useEffect, useState, type ReactNode } from 'react'
import { DICTIONARIES, type Dictionary, type Lang } from './strings'

interface LanguageValue {
  lang: Lang
  t: Dictionary
  setLang: (lang: Lang) => void
}

const LanguageContext = createContext<LanguageValue | null>(null)
const STORAGE_KEY = 'codex-lang'

const readStored = (): Lang => {
  try {
    return localStorage.getItem(STORAGE_KEY) === 'es' ? 'es' : 'en'
  } catch {
    return 'en'
  }
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>(readStored)
  const t = DICTIONARIES[lang]

  useEffect(() => {
    document.documentElement.lang = lang
    document.title = t.brand
    document.querySelector('meta[name="description"]')?.setAttribute('content', t.description)
    try {
      localStorage.setItem(STORAGE_KEY, lang)
    } catch {
    }
  }, [lang, t])

  return <LanguageContext.Provider value={{ lang, t, setLang }}>{children}</LanguageContext.Provider>
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (!context) throw new Error('useLanguage must be used inside <LanguageProvider>')
  return context
}
