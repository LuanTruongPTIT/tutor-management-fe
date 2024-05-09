import { NextResponse, type NextRequest } from "next/server";

const privatePaths = ["/tutor/become"];
const adminPaths = ["/admin", "/admin/member", "/admin/member/[memberId]"];
const authPaths = ["/auth/login", "/auth/register"];
export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const token = request.cookies.get("accesstoken")?.value;
  const role = request.cookies.get("role")?.value;
  if (privatePaths.some((path) => pathname.startsWith(path)) && !token) {
    return NextResponse.redirect(new URL("/auth/login", request.url));
  }

  if (adminPaths.some((path) => pathname.startsWith(path))) {
    if (token && role !== "super_admin") {
      return NextResponse.redirect(new URL("/", request.url));
    } else if (!token) {
      return NextResponse.redirect(new URL("/auth/login", request.url));
    } else if (token && role === "admin") {
      return NextResponse.next();
    }
  }

  if (authPaths.some((path) => pathname.startsWith(path)) && token) {
    return NextResponse.redirect(new URL("/", request.url));
  }
}
export const config = {
  matcher: [
    "/auth/login",
    "/auth/register",
    "/admin",
    "/tutor/become",
    "/",
    "/admin/member",
    "/admin/member/[memberId]",
  ],
};
