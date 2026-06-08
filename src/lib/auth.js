import crypto from 'crypto'

const SECRET = process.env.ADMIN_JWT_SECRET || 'change_this_secret'
const ALGO = 'sha256'

function base64url(input) {
  return Buffer.from(input).toString('base64').replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, '')
}

function sign(data) {
  return crypto.createHmac(ALGO, SECRET).update(data).digest('base64').replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, '')
}

export function createToken(payload = {}, expiresInSec = 60 * 60 * 24) {
  const header = { alg: 'HS256', typ: 'JWT' }
  const iat = Math.floor(Date.now() / 1000)
  const exp = iat + expiresInSec
  const full = { ...payload, iat, exp }
  const data = `${base64url(JSON.stringify(header))}.${base64url(JSON.stringify(full))}`
  const signature = sign(data)
  return `${data}.${signature}`
}

export function verifyToken(token) {
  if (!token) return null
  const parts = token.split('.')
  if (parts.length !== 3) return null
  const [headerB64, payloadB64, sig] = parts
  const data = `${headerB64}.${payloadB64}`
  const expected = sign(data)
  if (sig !== expected) return null
  try {
    const payload = JSON.parse(Buffer.from(payloadB64, 'base64').toString())
    const now = Math.floor(Date.now() / 1000)
    if (payload.exp && payload.exp < now) return null
    return payload
  } catch (e) {
    return null
  }
}
