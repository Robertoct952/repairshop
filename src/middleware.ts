import { withAuth } from "@kinde-oss/kinde-auth-nextjs/middleware"
import { NextRequest } from "next/server";

export default withAuth(
    async function middleware(request: NextRequest) {

    }, {
        isReturnToCurrentPage: true,
    }
)

export const config = {
    matcher: [
        /*
        * - api (API routes)
        * - _next/image
        * - _next/static
        * - auth
        * - 
        */
        '/((?!api|_next/static|_next/image|auth|favicon.ico|robots.txt|images|login|$).*)'
    ]
}