import { NextResponse } from 'next/server'

// Returns latest app version and optional download URL
export async function GET() {
  const latest = process.env.LATEST_APP_VERSION || '1.1.0'
  const url = process.env.APP_DOWNLOAD_URL || ''
  return NextResponse.json({ latestVersion: latest, downloadUrl: url })
}
