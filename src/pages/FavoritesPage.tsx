import { useState } from 'react'
import { Link } from 'react-router'
import FolioGrid from '../components/FolioGrid'
import SealDialog from '../components/SealDialog'
import StatePlate from '../components/StatePlate'
import { useFavorites } from '../context/FavoritesContext'
import { useToast } from '../context/ToastContext'
import { useLanguage } from '../i18n/LanguageContext'
import { btnPrimary, btnSecondary } from '../lib/ui'

export default function FavoritesPage() {
  const { favorites, clearFavorites } = useFavorites()
  const { showToast } = useToast()
  const { t } = useLanguage()
  const [confirmClear, setConfirmClear] = useState(false)
  const greek = favorites.filter((c) => c.mythology === 'griega').length

  return (
    <div className="mx-auto max-w-7xl px-4 pt-12 sm:px-8">
      <div className="mb-10 flex flex-wrap items-end justify-between gap-6">
        <div>
          <h1 className="font-display text-5xl font-bold text-bone">{t.favorites.title}</h1>
          <p className="mt-2 text-dust">
            {favorites.length === 0
              ? t.favorites.none
              : t.favorites.summary(favorites.length, greek, favorites.length - greek)}
          </p>
        </div>
        {favorites.length > 0 && (
          <button type="button" onClick={() => setConfirmClear(true)} className={btnSecondary}>
            {t.favorites.clear}
          </button>
        )}
      </div>

      {favorites.length === 0 ? (
        <StatePlate
          tone="empty"
          title={t.favorites.emptyTitle}
          action={
            <Link to="/explore" className={btnPrimary}>
              {t.favorites.explore}
            </Link>
          }
        >
          {t.favorites.emptyBody}
        </StatePlate>
      ) : (
        <FolioGrid characters={favorites} />
      )}

      <SealDialog
        open={confirmClear}
        title={t.favorites.clearTitle}
        confirmLabel={t.favorites.clearConfirm}
        cancelLabel={t.common.keep}
        onConfirm={() => {
          clearFavorites()
          setConfirmClear(false)
          showToast('info', t.favorites.cleared)
        }}
        onCancel={() => setConfirmClear(false)}
      >
        {t.favorites.clearBody(favorites.length)}
      </SealDialog>
    </div>
  )
}
