import { useState } from 'react'
import type { Character } from '../../api/_types'
import SealDialog from '../components/SealDialog'
import { useFavorites } from '../context/FavoritesContext'
import { useToast } from '../context/ToastContext'
import { useLanguage } from '../i18n/LanguageContext'

export function useFavoriteToggle() {
  const { isFavorite, addFavorite, removeFavorite } = useFavorites()
  const { showToast } = useToast()
  const { t } = useLanguage()
  const [pending, setPending] = useState<Character | null>(null)

  const toggle = (character: Character) => {
    if (isFavorite(character.id)) {
      setPending(character)
    } else {
      addFavorite(character)
      showToast('success', t.favoriteToggle.added(character.name))
    }
  }

  const confirmRemove = () => {
    if (!pending) return
    removeFavorite(pending.id)
    showToast('info', t.favoriteToggle.removed(pending.name))
    setPending(null)
  }

  const dialog = (
    <SealDialog
      open={pending !== null}
      title={t.favoriteToggle.title}
      confirmLabel={t.favoriteToggle.confirm}
      cancelLabel={t.common.keep}
      onConfirm={confirmRemove}
      onCancel={() => setPending(null)}
    >
      <strong className="font-semibold text-bone">{pending?.name}</strong>
      {t.favoriteToggle.body}
    </SealDialog>
  )

  return { toggle, dialog }
}
