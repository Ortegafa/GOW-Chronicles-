const base =
  'chamfer inline-flex min-h-11 cursor-pointer items-center justify-center gap-2 px-5 py-2 small-caps text-lg transition duration-200 ease-out active:translate-y-px focus-visible:outline-offset-[-6px] disabled:cursor-not-allowed disabled:opacity-45 disabled:active:translate-y-0'

export const btnPrimary = `${base} bg-blood text-blood-pale shadow-[inset_0_0_0_1px_var(--color-gold)] hover:bg-blood-bright hover:shadow-[inset_0_0_0_1px_var(--color-gold-bright),inset_0_0_16px_rgb(201_151_56/0.35)] disabled:hover:bg-blood`

export const btnSecondary = `${base} bg-iron text-frost-pale shadow-[inset_0_0_0_1px_var(--color-frost)] hover:bg-iron-high hover:shadow-[inset_0_0_0_1px_var(--color-frost-pale),inset_0_0_16px_rgb(56_142_156/0.4)]`

export const fieldClass =
  'w-full bg-leather-deep px-4 py-3 font-body text-bone placeholder:text-ash placeholder:italic shadow-[inset_0_2px_6px_rgb(0_0_0/0.7)] outline-1 outline-transparent transition-[outline-color] duration-200 focus-visible:outline-2 focus-visible:outline-offset-0 focus-visible:outline-gold-bright aria-invalid:outline-blood-bright'
