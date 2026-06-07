import { NextRequest, NextResponse } from "next/server";

const AUTH_TOKEN = "prp-admin-ok-2024";

export function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;
  const isAuthed = req.cookies.get("admin_auth")?.value === AUTH_TOKEN;

  // Protect the blog API's mutating methods (the public GET stays open).
  if (pathname.startsWith("/api/blog")) {
    if (req.method === "GET" || isAuthed) return NextResponse.next();
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  // Admin pages — login page itself is always reachable.
  if (pathname === "/admin/login") return NextResponse.next();
  if (!isAuthed) {
    return NextResponse.redirect(new URL("/admin/login", req.url));
  }
  return NextResponse.next();
}

export const config = { matcher: ["/admin/:path*", "/api/blog", "/api/blog/:path*"] };
