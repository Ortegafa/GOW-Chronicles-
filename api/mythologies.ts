import { resolveMythologies } from './_lib.js'

export function GET(request: Request): Response {
  const { status, body } = resolveMythologies(new URL(request.url))
  return Response.json(body, {
    status,
    headers: { 'Access-Control-Allow-Origin': '*', 'Cache-Control': 's-maxage=3600' },
  })
}
