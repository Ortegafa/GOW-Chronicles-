import { createContext, useContext, useEffect, useState, type ReactNode } from 'react'
import type { Character } from '../../api/_types'

interface FavoritesValue {
  favorites: Character[]
  isFavorite: (id: number) => boolean
  addFavorite: (character: Character) => void
  removeFavorite: (id: number) => void
  clearFavorites: () => void
}

const FavoritesContext = createContext<FavoritesValue | null>(null)
const STORAGE_KEY = 'codex-marcadores'

const readStored = (): Character[] => {
  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEY) ?? '[]')
  } catch {
    return []
  }
}

export function FavoritesProvider({ children }: { children: ReactNode }) {
  const [favorites, setFavorites] = useState<Character[]>(readStored)

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(favorites))
    } catch {
    }
  }, [favorites])

  const value: FavoritesValue = {
    favorites,
    isFavorite: (id) => favorites.some((c) => c.id === id),
    addFavorite: (character) =>
      setFavorites((prev) => (prev.some((c) => c.id === character.id) ? prev : [...prev, character])),
    removeFavorite: (id) => setFavorites((prev) => prev.filter((c) => c.id !== id)),
    clearFavorites: () => setFavorites([]),
  }

  return <FavoritesContext.Provider value={value}>{children}</FavoritesContext.Provider>
}

export function useFavorites() {
  const context = useContext(FavoritesContext)
  if (!context) throw new Error('useFavorites must be used inside <FavoritesProvider>')
  return context
}
