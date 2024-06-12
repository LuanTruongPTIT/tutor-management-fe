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

  // Redirect to login page if trying to access private paths without a token
  if (privatePaths.some((path) => pathname.startsWith(path)) && !token) {
    return NextResponse.redirect(new URL("/auth/login", request.url));
  }

  // Handle admin paths access
  if (adminPaths.some((path) => pathname.startsWith(path))) {
    if (!token) {
      return NextResponse.redirect(new URL("/auth/login", request.url));
    } else if (role === "user") {
      return NextResponse.redirect(new URL("/landing-page", request.url));
    } else if (role !== "SUPER_ADMIN") {
      return NextResponse.redirect(new URL("/landing-page", request.url));
    }
  }

  // Redirect authenticated users away from auth paths
  if (authPaths.some((path) => pathname.startsWith(path)) && token) {
    console.log("vao auth path");
    if (role === "admin" || role === "SUPER_ADMIN") {
      return NextResponse.redirect(new URL("/admin", request.url));
    }
    return NextResponse.redirect(new URL("/landing-page", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    "/auth/login",
    "/auth/register",
    "/admin",
    "/admin/application",
    "/tutor/become",
    "/",
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
  ],
};
