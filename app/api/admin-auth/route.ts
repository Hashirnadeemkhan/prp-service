import { NextRequest, NextResponse } from "next/server";

const ADMIN_PASSWORD = "WKroof2024";
const AUTH_TOKEN = "wk-admin-ok-2024";

export async function POST(req: NextRequest) {
  const { password } = await req.json();
  if (password !== ADMIN_PASSWORD) {
    return NextResponse.json({ error: "Galat password" }, { status: 401 });
  }
  const res = NextResponse.json({ ok: true });
  res.cookies.set("admin_auth", AUTH_TOKEN, {
    httpOnly: true,
    path: "/",
    maxAge: 60 * 60 * 24 * 7,
    sameSite: "lax",
  });
  return res;
}

export async function GET(req: NextRequest) {
  const res = NextResponse.redirect(new URL("/admin/login", req.url));
  res.cookies.delete("admin_auth");
  return res;
}
