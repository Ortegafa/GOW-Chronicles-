import type { Character } from '../../api/_types'
import { useFavorites } from '../context/FavoritesContext'
import { useFavoriteToggle } from '../hooks/useFavoriteToggle'
import FolioCard from './FolioCard'

export default function FolioGrid({ characters }: { characters: Character[] }) {
  const { isFavorite } = useFavorites()
  const { toggle, dialog } = useFavoriteToggle()

  return (
    <>
      <ul className="grid grid-cols-1 gap-x-5 gap-y-7 min-[480px]:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4">
        {characters.map((character) => (
          <li key={character.id}>
            <FolioCard character={character} marked={isFavorite(character.id)} onToggleFavorite={toggle} />
          </li>
        ))}
      </ul>
      {dialog}
    </>
  )
}
