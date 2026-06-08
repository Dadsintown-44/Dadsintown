import { NextResponse } from 'next/server'
import supabaseServer from '../../../src/lib/supabaseServer'
import crypto from 'crypto'

const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD || 'DeepakJain44'
const MOBILE_SECRET = process.env.MOBILE_API_SECRET || ''

function hmac(data, secret) {
  return crypto.createHmac('sha256', secret).update(data).digest('hex')
}

function verifyMobileAuth(request, bodyString) {
  const apiPassword = request.headers.get('x-api-password') || ''
  if (apiPassword && apiPassword === ADMIN_PASSWORD) return true
  const ts = request.headers.get('x-api-ts') || ''
  const sig = request.headers.get('x-api-signature') || ''
  if (!MOBILE_SECRET || !ts || !sig) return false
  const now = Math.floor(Date.now() / 1000)
  const tsNum = parseInt(ts, 10)
  if (isNaN(tsNum) || Math.abs(now - tsNum) > 300) return false
  const expected = hmac(bodyString + '|' + ts, MOBILE_SECRET)
  return expected === sig
}

function validateReview(body) {
  if (!body) return 'Missing body'
  if (typeof body.rating !== 'number' && typeof body.rating !== 'string') return 'Missing rating'
  const rating = Number(body.rating)
  if (Number.isNaN(rating) || rating < 0 || rating > 5) return 'Invalid rating'
  if (!body.review || typeof body.review !== 'string') return 'Missing review text'
  return null
}

export async function POST(request) {
  try {
    const bodyText = await request.text()
    if (!verifyMobileAuth(request, bodyText)) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    const body = JSON.parse(bodyText || '{}')

    const v = validateReview(body)
    if (v) return NextResponse.json({ error: v }, { status: 400 })

    const payload = {
      rating: Number(body.rating) || null,
      name: body.name || null,
      role: body.role || null,
      review: body.review || null,
      suggestions: body.suggestions || null,
      mobile_device: body.mobileDevice || null,
      app_version: body.appVersion || null,
      received_at: new Date().toISOString(),
      meta: body.meta || null,
    }

    const { data, error } = await supabaseServer.from('reviews').insert([payload])
    if (error) {
      console.error('Supabase insert error', error)
      return NextResponse.json({ error: error.message }, { status: 500 })
    }
    return NextResponse.json({ ok: true, data })
  } catch (err) {
    console.error(err)
    return NextResponse.json({ error: 'Server error' }, { status: 500 })
  }
}
