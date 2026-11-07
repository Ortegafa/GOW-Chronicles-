import { useState } from 'react'
import { Link, NavLink } from 'react-router'
import { useFavorites } from '../context/FavoritesContext'
import { useLanguage } from '../i18n/LanguageContext'
import Icon from './Icon'
import LanguageSwitch from './LanguageSwitch'

const linkClass = ({ isActive }: { isActive: boolean }) =>
  `flex min-h-11 items-center gap-2 px-4 small-caps text-lg transition-colors duration-200 ${
    isActive ? 'bg-blood text-blood-pale shadow-[inset_0_0_0_1px_var(--color-gold)]' : 'text-dust hover:bg-binder hover:text-bone'
  }`

export default function SiteHeader() {
  const [open, setOpen] = useState(false)
  const { favorites } = useFavorites()
  const { t } = useLanguage()
  const close = () => setOpen(false)

  const links = [
    { to: '/', label: t.nav.home, end: true },
    { to: '/explore', label: t.nav.explore, end: false },
    { to: '/favorites', label: t.nav.favorites, end: false },
    { to: '/contact', label: t.nav.contact, end: false },
  ]

  return (
    <header className="sticky top-0 z-40 bg-leather/95 shadow-[0_4px_20px_rgb(0_0_0/0.6)] backdrop-blur-sm">
      <nav aria-label={t.nav.main} className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-4 px-4 sm:px-8">
        <Link to="/" onClick={close} className="flex min-w-0 items-center gap-3">
          <svg viewBox="0 0 32 32" aria-hidden="true" className="h-8 w-8 shrink-0">
            <path d="M8 4h16v24l-8-5-8 5z" fill="var(--color-blood)" stroke="var(--color-gold)" strokeWidth="1.5" />
          </svg>
          <span className="truncate font-display text-lg leading-none font-semibold text-gold-bright sm:text-xl">
            {t.brand}
          </span>
        </Link>

        <div className="flex items-center gap-2 lg:hidden">
          <LanguageSwitch />
          <button
            type="button"
            onClick={() => setOpen((value) => !value)}
            aria-expanded={open}
            aria-controls="main-menu"
            aria-label={open ? t.nav.closeMenu : t.nav.openMenu}
            className="grid size-11 cursor-pointer place-items-center text-dust hover:text-bone"
          >
            <Icon name={open ? 'close' : 'menu'} className="size-6" />
          </button>
        </div>

        <div
          id="main-menu"
          className={`${
            open ? 'flex' : 'hidden'
          } absolute inset-x-0 top-16 flex-col gap-1 bg-leather p-4 shadow-[0_12px_24px_rgb(0_0_0/0.6)] lg:static lg:flex lg:flex-row lg:items-center lg:gap-4 lg:bg-transparent lg:p-0 lg:shadow-none`}
        >
          <ul className="flex flex-col gap-1 lg:flex-row">
            {links.map((link) => (
              <li key={link.to}>
                <NavLink to={link.to} end={link.end} onClick={close} className={linkClass}>
                  {link.label}
                  {link.to === '/favorites' && favorites.length > 0 && (
                    <span className="min-w-6 bg-gold px-1.5 text-center font-code text-xs leading-5 text-ink tabular-nums">
                      {favorites.length}
                      <span className="sr-only"> {t.nav.saved}</span>
                    </span>
                  )}
                </NavLink>
              </li>
            ))}
          </ul>
          <div className="hidden lg:block">
            <LanguageSwitch />
          </div>
        </div>
      </nav>
    </header>
  )
}
