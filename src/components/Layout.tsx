import { Outlet } from 'react-router'
import { useLanguage } from '../i18n/LanguageContext'
import SiteFooter from './SiteFooter'
import SiteHeader from './SiteHeader'
import ToastStack from './ToastStack'

export default function Layout() {
  const { t } = useLanguage()
  return (
    <div className="flex min-h-screen flex-col">
      <a
        href="#content"
        className="sr-only z-50 bg-gold px-4 py-2 text-ink focus:not-sr-only focus:fixed focus:top-2 focus:left-2"
      >
        {t.skip}
      </a>
      <SiteHeader />
      <main id="content" className="flex-1">
        <Outlet />
      </main>
      <SiteFooter />
      <ToastStack />
    </div>
  )
}
