import { NextRequest, NextResponse } from 'next/server'

const locales = ['ru', 'en']
const defaultLocale = 'ru'

export async function GET(request: NextRequest) {
    const { pathname } = request.nextUrl

    // проверяем, есть ли локаль в пути
    const pathnameHasLocale = locales.some(
        (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
    )

    if (pathnameHasLocale) {
        return NextResponse.next()
    }

    // если локали нет, редиректим на дефолтную
    const url = request.nextUrl.clone()
    url.pathname = `/${defaultLocale}${pathname}`
    return NextResponse.redirect(url)
}
