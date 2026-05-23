import { NextRequest, NextResponse } from "next/server";

const AUTH_TOKEN = "wk-admin-ok-2024";

export function middleware(req: NextRequest) {
  if (req.nextUrl.pathname === "/admin/login") return NextResponse.next();

  const auth = req.cookies.get("admin_auth")?.value;
  if (auth !== AUTH_TOKEN) {
    return NextResponse.redirect(new URL("/admin/login", req.url));
  }
  return NextResponse.next();
}

export const config = { matcher: ["/admin/:path*"] };
