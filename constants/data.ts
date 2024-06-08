import { Icons } from "@/components/icons";
import { NavItem, SidebarNavItem } from "@/types";
import { faker } from "@faker-js/faker";
import { Inbox } from "lucide-react";

export type User = {
  id: number;
  name: string;
  company: string;
  role: string;
  verified: boolean;
  status: string;
};
export const users: User[] = [
  {
    id: 1,
    name: "Truong Luan",
    company: "VNG",
    role: "",
    verified: true,
    status: "Active",
  },
];
export type CoursesStudent = {
  id: number;
  subject: string;
  teacher: string;
  attendance: string;
  start_date: string;
  end_date: string;
};
export const StudentsCourses: CoursesStudent[] = [
  {
    id: 1,
    subject: "Math",
    teacher: "Truong Luan",
    attendance: "55%",
    start_date: "21-4-2024",
    end_date: "21-6-2024",
  },
];
export type Employee = {
  id: number;
  fullName: string;
  status: string;
  email: string;
  role: string;
  createdAt: Date;
};
//  icon: Inbox,
export const navItems: NavItem[] = [
  {
    title: "Dashboard",
    href: "/admin",
    icon: "dashboard",
    label: "Dashboard",
  },
  {
    title: "Application",
    href: "/admin/application",
    icon: "inbox",
    label: "Inbox",
  },
  {
    title: "Tutor",
    href: "/admin/tutor",
    icon: "user",
    label: "tutor",
  },
  {
    title: "Student",
    href: "/admin/student",
    icon: "employee",
    label: "students",
  },
  {
    title: "Team members",
    href: "/admin/member",
    icon: "user",
    label: "members",
  },
  {
    title: "Employee",
    href: "/admin/employee",
    icon: "user",
    label: "employee",
  },
  {
    title: "Profile",
    href: "/admin/profile",
    icon: "profile",
    label: "profile",
  },
  {
    title: "Kanban",
    href: "/admin/kanban",
    icon: "kanban",
    label: "kanban",
  },
  {
    title: "Stream",
    href: "/admin/stream",
    icon: "attendance",
    label: "attendance",
  },
  {
    title: "Attendance",
    href: "/admin/attendance",
    icon: "attendance",
    label: "attendance",
  },
  {
    title: "Meeting",
    href: "/admin/meeting",
    icon: "meeting",
    label: "meeting",
  },
];

export type Student = {
  id: number;
  name: string;
  school: string;
  role: string;
  verified: boolean;
  status: string;
  code: string;
  class: string;
  mother: string;
  Gender: string;
  phone: string;
  address: string;
};

export type Tutor = {
  id: number;
  fullName: string;
  imagePhoto: string;
  status: string;
  address: string;
  phone_number: string;
  email: string;
  city: string;
  role: string;
  country: string;
};

export const students: Student[] = [
  {
    id: 1,
    name: "luan truong",
    school: "PTIT",
    role: "student",
    verified: true,
    status: "active",
    code: "456760",
    class: "d19cqat01-n",
    mother: "truong luan",
    Gender: "female",
    phone: "0822036246",
    address: "17 street no.9",
  },
];
// export const TutorDetail
