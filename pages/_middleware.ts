import { NextResponse } from "next/server"

const signedinPages = ['/', '/playlist', '/library']

// All this happens on edge. Don't need to add anywhere, just runs.
export default function middleware(req) {
	if (signedinPages.find((p) => p === req.nextUrl.pathname)) {
		const token = req.cookies.SCHLOOBIFY_ACCESS_TOKEN

		if (!token) {
			return NextResponse.redirect(new URL('/signin', req.url))
		}
	}
}