import { NextRequest, NextResponse } from 'next/server'

const PUBLIC_FILE = /\.(.*)$/

export function middleware(req: NextRequest) {
  const locale = req.headers.get('accept-language')?.split(',')?.[0] || 'en-US'

  // Only rewrite files that don't have a file extension
  if (!PUBLIC_FILE.test(req.nextUrl.locale)) {
    req.nextUrl.locale = `ko`
    return NextResponse.rewrite(req.nextUrl)
  }
}
