import { NextResponse } from "next/server";

export function middleware(req, res, next) {
    if(req.nextUrl.pathname  === "/api") {
        return NextResponse.redirect(new URL("/", req.url))
    }
}

// export const config = {
//     matcher: "/api"
// }