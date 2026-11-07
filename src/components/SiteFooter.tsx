import { useLanguage } from '../i18n/LanguageContext'

export default function SiteFooter() {
  const { t } = useLanguage()
  return (
    <footer className="mt-24 bg-leather-deep">
      <div className="mx-auto flex max-w-7xl flex-col gap-3 px-4 py-8 text-marginalia text-ash sm:flex-row sm:items-center sm:justify-between sm:px-8">
        <p>
          {t.footer.source}{' '}
          <a href="https://godofwar.fandom.com/" className="underline hover:text-gold-bright">
            God of War Wiki
          </a>{' '}
          {t.footer.served}{' '}
          <a href="https://github.com/gdscwce/God-of-war-api" className="underline hover:text-gold-bright">
            God-of-war-api
          </a>
          .
        </p>
        <p>{t.footer.legal}</p>
      </div>
    </footer>
  )
}
