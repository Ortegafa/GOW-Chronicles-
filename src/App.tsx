import { BrowserRouter, Route, Routes } from 'react-router'
import Layout from './components/Layout'
import { FavoritesProvider } from './context/FavoritesContext'
import { ToastProvider } from './context/ToastContext'
import { LanguageProvider } from './i18n/LanguageContext'
import ContactPage from './pages/ContactPage'
import DetailPage from './pages/DetailPage'
import ExplorePage from './pages/ExplorePage'
import FavoritesPage from './pages/FavoritesPage'
import HomePage from './pages/HomePage'
import NotFoundPage from './pages/NotFoundPage'

export default function App() {
  return (
    <LanguageProvider>
      <ToastProvider>
        <FavoritesProvider>
          <BrowserRouter>
            <Routes>
              <Route element={<Layout />}>
                <Route index element={<HomePage />} />
                <Route path="explore" element={<ExplorePage />} />
                <Route path="explore/:id" element={<DetailPage />} />
                <Route path="favorites" element={<FavoritesPage />} />
                <Route path="contact" element={<ContactPage />} />
                <Route path="*" element={<NotFoundPage />} />
              </Route>
            </Routes>
          </BrowserRouter>
        </FavoritesProvider>
      </ToastProvider>
    </LanguageProvider>
  )
}
