# God of War: Chronicles of the Gods

Segundo frontend del Proyecto 01: el mismo explorador de personajes de God of War, sobre **la misma API**, con un diseño
nuevo basado en el sistema **Mythic Codex & Grimoire** generado en Stitch (`DESIGN.md`, referencia en `docs/`).

La interfaz está en **inglés** (idioma principal, igual que los datos de la API) y tiene un **modo español** con el
selector EN/ES de la cabecera; la elección se recuerda en el navegador. En español la app se llama
"God of War: Crónicas de los Dioses". Los textos de la interfaz están en `src/i18n/strings.ts`.

La API incluye además los **datos en español**: cada personaje trae un campo `es` con la descripción, la cita, la especie,
el género, los alias y el reino traducidos, y cada mitología trae su reino y descripción traducidos. El modo español los
usa; el inglés muestra los originales. La traducción está en `scripts/translations-es.json` y `npm run data` la
incorpora a la API. Se hizo a partir de los textos de la wiki (CC BY-SA); los nombres propios dentro
de los alias y los títulos de los juegos se dejan como en el original.

La API tiene 240 entradas para 239 personajes.

SPA en **React + TypeScript + Vite** con **Tailwind CSS v4** y **React Router**.

## Cómo correrlo

```bash
npm install
```

```bash
npm run dev
```

```bash
npm run build
```

## La API

Es la misma API del primer proyecto (carpeta `api/`): funciones serverless de Vercel cuyo contenido se genera desde la
God of War Wiki con `npm run wiki` y `npm run data`. En desarrollo la sirve el propio `npm run dev`.

| Endpoint | Respuesta |
| --- | --- |
| `GET /api/characters` | Los 239 personajes |
| `GET /api/characters/:id` | Un personaje por id o slug; 404 si no existe |
| `GET /api/mythologies` | Los dos reinos con descripción y cantidad de personajes |

## Requisitos del proyecto

| Requisito | Dónde |
| --- | --- |
| Rutas (interfaz en inglés): `/`, `/explore`, detalle `/explore/:id`, `/favorites`, `/contact`, 404 | `src/App.tsx`, `src/pages/` |
| Dos fetches: lista y detalle por ID | `ExplorePage.tsx`, `DetailPage.tsx`, `hooks/useFetch.ts` |
| Loading / error / empty | `CatalogSkeleton.tsx`, `StatePlate.tsx` |
| Búsqueda y filtro en tiempo real | `IndexPanel.tsx` + `ExplorePage.tsx` (`useDeferredValue`, sincronizado con la URL) |
| Favoritos que persisten entre rutas | `context/FavoritesContext.tsx` |
| Formulario controlado con validación y botón disabled | `LetterForm.tsx` |
| Toasts de éxito, error e info con auto-dismiss | `context/ToastContext.tsx`, `ToastStack.tsx` |
| Modal con `<dialog>` + `useRef` + `showModal()` | `SealDialog.tsx` (quitar favorito, vaciar favoritos, enviar formulario) |
| Modal con dark pattern intencional y comentario | `OracleDialog.tsx` |
| Tailwind responsive | prefijos `sm:` `md:` `lg:` `2xl:` |
| Accesibilidad | `alt`, `role`, `aria-*`, `htmlFor`, HTML semántico, foco visible, enlace para saltar al contenido |
| Mínimo 8 componentes `.tsx` | 19 en `src/components/` |

## Skills de diseño usadas

- **impeccable:** el brief de Stitch fija el mundo visual; se aplicó su piso de calidad (sin etiquetas sobre títulos,
  íconos SVG propios, contraste, foco y superficies del navegador tematizadas, un solo momento de animación).
- **ui-ux-pro-max:** reglas de UX (validación al salir del campo, toasts de 3 a 5 s, foco visible, `useDeferredValue`
  en la búsqueda, objetivos táctiles de 44 px).
- **design-taste-frontend:** microinteracciones al pasar el cursor (la tarjeta sube 2 px, la foto hace zoom 1.03,
  los botones se hunden al pulsar), sin animaciones atadas al scroll y sin violeta.
- **frontend-design:** plan de tokens y revisión contra los rasgos genéricos antes de construir.

## Créditos

Textos e imágenes: [God of War Wiki](https://godofwar.fandom.com/) (CC BY-SA), a través de la API, que amplía
[God-of-war-api](https://github.com/gdscwce/God-of-war-api). Proyecto académico sin fines de lucro.
