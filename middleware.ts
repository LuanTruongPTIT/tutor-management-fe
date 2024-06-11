import { NextResponse, type NextRequest } from "next/server";

const privatePaths = ["/tutor/become"];
const adminPaths = [
  "/admin",
  "/admin/member",
  "/admin/member/[memberId]",
  "/admin/application",
  "/admin/attendance",
  "/admin/calendar",
  "/admin/courses",
  "/admin/courses/",
  "/admin/courses/[courseId]",
  "/admin/courses/employee",
  "/admin/member/",
  "/admin/member/[memberId]",
  "/admin/application/",
  "/admin/application/[applicationId]",
  "/admin/attendance/",
  "/admin/attendance/[attendanceId]",
  "/admin/calendar/",
  "/admin/calendar/[calendarId]",
  "/admin/profile",
  "/admin/room",
  "/admin/room/[roomId]",
  "/admin/schedule/",
  "/admin/student",
  "/admin/student/[studentId]",
  "/admin/tutor",
  "/admin/tutor/[tutorId]",
];
const authPaths = ["/auth/login", "/auth/register"];
const publicPaths = ["/landing-page"];
export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  console.log("pathname", pathname);
  const token = request.cookies.get("accesstoken")?.value;
  console.log("token", token);
  const role = request.cookies.get("role")?.value;
  if (privatePaths.some((path) => pathname.startsWith(path)) && !token) {
    return NextResponse.redirect(new URL("/auth/login", request.url));
  }

  if (adminPaths.some((path) => pathname.startsWith(path))) {
    if (token && role !== "SUPER_ADMIN") {
      return NextResponse.redirect(new URL("/landing-page", request.url));
    } else if (!token) {
      return NextResponse.redirect(new URL("/auth/login", request.url));
    } else if (token && role === "admin") {
      return NextResponse.next();
    }
  }

  if (authPaths.some((path) => pathname.startsWith(path)) && token) {
    console.log("vao ay");
    if ((token && role == "admin") || role == "SUPER_ADMIN") {
      return NextResponse.redirect(new URL("/admin", request.url));
    }
    return NextResponse.redirect(new URL("/landing-page", request.url));
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
