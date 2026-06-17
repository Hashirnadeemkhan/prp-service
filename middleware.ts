import { NextRequest, NextResponse } from "next/server";

const AUTH_TOKEN = "prp-admin-ok-2024";

export function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;
  const host = req.headers.get("host") || "";
  const isAuthed = req.cookies.get("admin_auth")?.value === AUTH_TOKEN;

  // Canonical host: redirect the apex (non-www) to www so Google only ever
  // sees one version of each URL. Prevents duplicate-content indexing issues.
  if (host === "prp-services.uk") {
    const url = req.nextUrl.clone();
    url.protocol = "https";
    url.host = "www.prp-services.uk";
    return NextResponse.redirect(url, 308);
  }

  // Protect the blog API's mutating methods (the public GET stays open).
  if (pathname.startsWith("/api/blog")) {
    if (req.method === "GET" || isAuthed) return NextResponse.next();
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  // Admin pages — login page itself is always reachable.
  if (pathname.startsWith("/admin")) {
    if (pathname === "/admin/login") return NextResponse.next();
    if (!isAuthed) {
      return NextResponse.redirect(new URL("/admin/login", req.url));
    }
  }

  return NextResponse.next();
}

// Run on all pages (for the host redirect) plus the protected routes, but skip
// Next internals and static assets (any path containing a dot, e.g. .js/.png).
export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico|.*\\.).*)"],
};
