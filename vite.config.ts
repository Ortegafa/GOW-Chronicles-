import { defineConfig, type Plugin } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { resolveCharacters, resolveMythologies, type ApiResult } from './api/_lib.js'

const ROUTES: Record<string, (url: URL) => ApiResult> = {
  '/api/characters': resolveCharacters,
  '/api/mythologies': resolveMythologies,
}

function localApi(): Plugin {
  return {
    name: 'local-api',
    configureServer(server) {
      for (const [path, resolve] of Object.entries(ROUTES)) {
        server.middlewares.use(path, (req, res) => {
          const url = new URL(`${path}${req.url === '/' ? '' : req.url}`, 'http://localhost')
          const { status, body } = resolve(url)
          res.statusCode = status
          res.setHeader('Content-Type', 'application/json; charset=utf-8')
          res.end(JSON.stringify(body))
        })
      }
    },
  }
}

export default defineConfig({
  plugins: [react(), tailwindcss(), localApi()],
})
