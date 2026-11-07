import { useState, type FormEvent } from 'react'
import { useToast } from '../context/ToastContext'
import { useLanguage } from '../i18n/LanguageContext'
import type { Dictionary } from '../i18n/strings'
import { btnPrimary } from '../lib/ui'
import SealDialog from './SealDialog'

interface Letter {
  name: string
  email: string
  message: string
}

type Field = keyof Letter

const EMPTY: Letter = { name: '', email: '', message: '' }
const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
const FIELD_IDS: Field[] = ['name', 'email', 'message']

function validate(letter: Letter, t: Dictionary): Partial<Record<Field, string>> {
  const errors: Partial<Record<Field, string>> = {}
  if (letter.name.trim().length < 2) errors.name = t.contact.nameError
  if (!EMAIL.test(letter.email.trim())) errors.email = t.contact.emailError
  if (letter.message.trim().length < 10) errors.message = t.contact.messageError
  return errors
}

const inputClass = (invalid: boolean) =>
  `w-full border bg-parchment px-4 py-3 font-body text-ink placeholder:text-ink-soft/70 shadow-[inset_0_2px_5px_rgb(92_74_60/0.3)] transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blood ${
    invalid ? 'border-blood' : 'border-parchment-edge'
  }`

export default function LetterForm() {
  const [letter, setLetter] = useState<Letter>(EMPTY)
  const [touched, setTouched] = useState<Partial<Record<Field, boolean>>>({})
  const [confirming, setConfirming] = useState(false)
  const [sending, setSending] = useState(false)
  const { showToast } = useToast()
  const { t } = useLanguage()

  const labels: Record<Field, { label: string; hint: string }> = {
    name: { label: t.contact.name, hint: t.contact.nameHint },
    email: { label: t.contact.email, hint: t.contact.emailHint },
    message: { label: t.contact.message, hint: t.contact.messageHint },
  }
  const errors = validate(letter, t)
  const valid = Object.keys(errors).length === 0
  const [bodyStart, bodyName, bodyEnd] = t.contact.confirmBody(letter.name.trim(), letter.email.trim())

  const submit = (event: FormEvent) => {
    event.preventDefault()
    setTouched({ name: true, email: true, message: true })
    if (valid) setConfirming(true)
  }

  const send = async () => {
    setConfirming(false)
    setSending(true)
    await new Promise((resolve) => setTimeout(resolve, 900))
    showToast('success', t.contact.sent(letter.name.trim()))
    setSending(false)
    setLetter(EMPTY)
    setTouched({})
  }

  return (
    <>
      <form noValidate onSubmit={submit} aria-labelledby="letter-title" className="vellum px-6 py-10 sm:px-12">
        <h1 id="letter-title" className="font-display text-4xl font-semibold text-ink">
          {t.contact.title}
        </h1>
        <p className="mt-2 max-w-[55ch] text-ink-soft">{t.contact.intro}</p>

        <div className="mt-8 space-y-6">
          {FIELD_IDS.map((field) => {
            const id = `letter-${field}`
            const error = touched[field] ? errors[field] : undefined
            const props = {
              id,
              name: field,
              value: letter[field],
              onChange: (event: { target: { value: string } }) =>
                setLetter((prev) => ({ ...prev, [field]: event.target.value })),
              onBlur: () => setTouched((prev) => ({ ...prev, [field]: true })),
              'aria-invalid': Boolean(error),
              'aria-describedby': `${id}-help`,
              className: inputClass(Boolean(error)),
            }
            return (
              <div key={field}>
                <label htmlFor={id} className="mb-1.5 block small-caps text-lg text-ink">
                  {labels[field].label}
                </label>
                {field === 'message' ? (
                  <textarea {...props} rows={6} />
                ) : (
                  <input
                    {...props}
                    type={field === 'email' ? 'email' : 'text'}
                    autoComplete={field === 'email' ? 'email' : 'name'}
                  />
                )}
                <p id={`${id}-help`} className={`mt-1.5 text-sm ${error ? 'font-semibold text-blood' : 'text-ink-soft'}`}>
                  {error ?? labels[field].hint}
                </p>
              </div>
            )
          })}
        </div>

        <div className="mt-10 flex flex-wrap items-center gap-4">
          <button type="submit" disabled={!valid || sending} className={btnPrimary}>
            {sending ? t.contact.sending : t.contact.send}
          </button>
          {!valid && <p className="text-sm text-ink-soft">{t.contact.incomplete}</p>}
        </div>
      </form>

      <SealDialog
        open={confirming}
        title={t.contact.confirmTitle}
        confirmLabel={t.contact.confirm}
        cancelLabel={t.contact.keepEditing}
        onConfirm={send}
        onCancel={() => setConfirming(false)}
      >
        {bodyStart}
        <strong className="font-semibold text-bone">{bodyName}</strong>
        {bodyEnd}
      </SealDialog>
    </>
  )
}
