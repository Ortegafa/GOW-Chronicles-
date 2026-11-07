import { useId, useState } from 'react'
import { useLanguage } from '../i18n/LanguageContext'
import Icon from './Icon'

const LONG_QUOTE = 280

export default function QuoteGloss({ quote, lang = 'en' }: { quote: string; lang?: string }) {
  const [expanded, setExpanded] = useState(false)
  const { t } = useLanguage()
  const id = useId()
  const long = quote.length > LONG_QUOTE

  return (
    <figure className="max-w-[58ch] border-y border-parchment-edge py-5">
      <Icon name="quill" className="size-5 text-blood" />
      <blockquote
        id={id}
        lang={lang}
        className={`mt-2 text-base leading-relaxed text-ink-soft italic ${long && !expanded ? 'line-clamp-4' : ''}`}
      >
        {quote}
      </blockquote>
      {long && (
        <button
          type="button"
          onClick={() => setExpanded((value) => !value)}
          aria-expanded={expanded}
          aria-controls={id}
          className="mt-2 min-h-11 cursor-pointer text-sm font-semibold text-blood underline decoration-1 underline-offset-4 hover:text-blood-bright"
        >
          {expanded ? t.detail.quoteLess : t.detail.quoteMore}
        </button>
      )}
    </figure>
  )
}
