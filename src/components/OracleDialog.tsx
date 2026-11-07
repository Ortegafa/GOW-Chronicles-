import { useEffect, useRef, useState } from 'react'
import { useToast } from '../context/ToastContext'
import { useLanguage } from '../i18n/LanguageContext'

const SEEN_KEY = 'codex-oracle-seen'
const DELAY_MS = 5000

/**
 * ⚠️ DARK PATTERN INTENCIONAL (con fines didácticos) ⚠️
 *
 * Este modal de "suscripción" reúne a propósito varios patrones oscuros de UX, para
 * reconocerlos y NO usarlos en productos reales:
 *
 * 1. Interrupción no solicitada: aparece solo, a los pocos segundos, sin que nadie lo pida.
 * 2. Falsa urgencia / escasez: "quedan 3 lugares" es mentira; no existe ningún límite.
 * 3. Casilla preseleccionada: el permiso para compartir datos con terceros ya viene marcado,
 *    así que quien no lee acepta sin querer.
 * 4. Interferencia visual: aceptar es un botón grande con el estilo principal; rechazar es un
 *    texto pequeño y de bajo contraste, fácil de pasar por alto.
 * 5. Confirmshaming: para rechazar hay que pulsar una frase que hace sentir mal a la persona.
 * 6. Sin botón de cerrar visible: obliga a elegir una de las dos opciones.
 *
 * Por accesibilidad la tecla Escape sigue cerrándolo, y no se guarda ni se envía ningún dato.
 * La versión honesta sería un aviso opcional y discreto, con "Subscribe" y "No thanks" del
 * mismo peso visual, la casilla desmarcada y una X para cerrar.
 */
export default function OracleDialog() {
  const dialogRef = useRef<HTMLDialogElement>(null)
  const [shareData, setShareData] = useState(true) // (3) preseleccionada a propósito
  const { showToast } = useToast()
  const { t } = useLanguage()

  useEffect(() => {
    let seen = false
    try {
      seen = sessionStorage.getItem(SEEN_KEY) === '1'
    } catch {
      // Sin sessionStorage aparece una vez por carga
    }
    if (seen) return
    const timer = setTimeout(() => dialogRef.current?.showModal(), DELAY_MS) // (1)
    return () => clearTimeout(timer)
  }, [])

  const close = (accepted: boolean) => {
    dialogRef.current?.close()
    try {
      sessionStorage.setItem(SEEN_KEY, '1')
    } catch {
      // ignorar
    }
    showToast(accepted ? 'success' : 'info', accepted ? t.oracle.accepted : t.oracle.declined)
  }

  return (
    <dialog
      ref={dialogRef}
      aria-labelledby="oracle-title"
      onCancel={() => close(false)}
      className="m-auto w-[min(94vw,30rem)] bg-binder p-0 text-bone shadow-seal outline outline-1 -outline-offset-6 outline-gold"
    >
      <div className="px-7 pt-9 pb-7 text-center sm:px-10">
        <h2 id="oracle-title" className="font-display text-4xl leading-tight font-bold text-gold-bright">
          {t.oracle.title}
        </h2>
        <p className="mt-3 text-dust">{t.oracle.body}</p>
        {/* (2) Falsa urgencia */}
        <p className="mt-5 bg-blood/40 px-3 py-2 small-caps text-lg text-blood-pale">{t.oracle.urgency}</p>

        <label htmlFor="oracle-share" className="mt-6 flex items-start gap-2 text-left text-xs text-ash">
          <input
            id="oracle-share"
            type="checkbox"
            checked={shareData}
            onChange={(event) => setShareData(event.target.checked)}
            className="mt-0.5 accent-blood"
          />
          {t.oracle.consent}
        </label>

        {/* (4) Aceptar: grande, con el estilo de acción principal */}
        <button
          type="button"
          onClick={() => close(true)}
          autoFocus
          className="chamfer mt-6 w-full cursor-pointer bg-blood py-4 small-caps text-2xl text-blood-pale shadow-[inset_0_0_0_1px_var(--color-gold-bright)] transition-colors hover:bg-blood-bright active:translate-y-px"
        >
          {t.oracle.accept}
        </button>
        {/* (4) + (5) Rechazar: pequeño, de bajo contraste y con confirmshaming */}
        <button
          type="button"
          onClick={() => close(false)}
          className="mt-4 cursor-pointer text-xs text-binder-high hover:underline"
        >
          {t.oracle.decline}
        </button>
      </div>
    </dialog>
  )
}
