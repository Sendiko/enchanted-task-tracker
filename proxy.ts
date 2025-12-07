import { NextRequest } from "next/server";
import { updateSession } from "@/lib/auth";

export async function proxy(request: NextRequest) {
    return await updateSession(request);
}

export const config = {
    matcher: [
        /*
         * Match all request paths except for the ones starting with:
         * - api (API routes)
         * - _next/static (static files)
         * - _next/image (image optimization files)
         * - favicon.ico (favicon file)
         * - login (login page - verify logic handled/not need protection, but we want session update?)
         * - signup (signup page)
         * - public files
         */
        "/((?!api|_next/static|_next/image|favicon.ico|login|signup).*)",
    ],
};
