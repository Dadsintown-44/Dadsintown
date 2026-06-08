import { NextResponse } from 'next/server'
import { createToken } from '../../../../src/lib/auth'

const ADMIN_ID = process.env.ADMIN_ID || 'admin'
const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD || 'DeepakJain44'

export async function POST(request) {
  const { adminId, password } = await request.json().catch(() => ({}))
  if (adminId !== ADMIN_ID || password !== ADMIN_PASSWORD) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  const token = createToken({ role: 'admin', adminId: ADMIN_ID }, 60 * 60 * 24)
  const res = NextResponse.json({ ok: true })
  res.cookies.set('admin_jwt', token, { httpOnly: true, path: '/', sameSite: 'lax' })
  return res
}
