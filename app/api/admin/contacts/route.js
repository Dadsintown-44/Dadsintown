import { NextResponse } from 'next/server'
import supabaseServer from '../../../../src/lib/supabaseServer'

import { verifyToken } from '../../../../src/lib/auth'

function getTokenFromRequest(request) {
  const cookie = request.headers.get('cookie') || ''
  const match = cookie.match(/admin_jwt=([^;\s]+)/)
  return match ? decodeURIComponent(match[1]) : null
}

export async function GET(request) {
  const token = getTokenFromRequest(request)
  const payload = verifyToken(token)
  if (!payload) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })

  const { data, error } = await supabaseServer.from('contacts').select('*').order('received_at', { ascending: false }).limit(500)
  if (error) return NextResponse.json({ error: error.message }, { status: 500 })
  return NextResponse.json({ data })
}
