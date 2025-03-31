import { NextRequest, NextResponse } from "next/server";
import { getToken } from "next-auth/jwt";

export async function middleware(request: NextRequest) {
    const token = await getToken({ req: request, secret: process.env.NEXTAUTH_SECRET });

    //verifica se um usuário logado esta tentando acessar login
    if (request.nextUrl.pathname === "/login") {
        if (token) {
            if(token.isAdmin)
                return NextResponse.redirect(new URL('/admin/dashboard', request.url));
            return NextResponse.redirect(new URL('/user/dashboard', request.url));
        }
    }

    // Verifica se a rota é protegida por admin
    if (request.nextUrl.pathname.startsWith('/admin')) {
        if (!token || !token.isAdmin) {
            return NextResponse.redirect(new URL('/login', request.url));
        }
    }

    // Verifica se a rota é protegida por usuário comum
    if (request.nextUrl.pathname.startsWith('/user')) {
        if (!token || token.isAdmin) {
            return NextResponse.redirect(new URL('/login', request.url));
        }
    }


    return NextResponse.next();
}