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
  const { data, error } = await supabaseServer.from('projects').select('*').order('id', { ascending: false })
  if (error) return NextResponse.json({ error: error.message }, { status: 500 })
  return NextResponse.json({ data })
}

export async function PUT(request) {
  const token = getTokenFromRequest(request)
  const payload = verifyToken(token)
  if (!payload) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  const body = await request.json().catch(() => ({}))
  const { id, updates } = body
  if (!id || !updates) return NextResponse.json({ error: 'Missing id or updates' }, { status: 400 })

  const { data, error } = await supabaseServer.from('projects').update(updates).eq('id', id).select()
  if (error) return NextResponse.json({ error: error.message }, { status: 500 })
  return NextResponse.json({ data })
}
