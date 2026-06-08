import { NextResponse } from 'next/server'

import { verifyToken } from '../../../../src/lib/auth'

export async function GET(request) {
  const cookie = request.headers.get('cookie') || ''
  const match = cookie.match(/admin_jwt=([^;\s]+)/)
  const token = match ? decodeURIComponent(match[1]) : null
  const payload = verifyToken(token)
  if (!payload) return NextResponse.json({ authenticated: false }, { status: 401 })
  return NextResponse.json({ authenticated: true })
}
