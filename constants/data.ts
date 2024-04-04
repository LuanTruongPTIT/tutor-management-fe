import { Icons } from "@/components/icons";
import { NavItem, SidebarNavItem } from "@/types";
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

export type Employee = {
  id: number;
  first_name: string;
  last_name: string;
  email: string;
  phone: string;
  gender: string;
  date_of_birth: string; // Consider using a proper date type if possible
  street: string;
  city: string;
  state: string;
  country: string;
  zipcode: string;
  longitude?: number; // Optional field
  latitude?: number; // Optional field
  job: string;
  profile_picture?: string | null; // Profile picture can be a string (URL) or null (if no picture)
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
    title: "Inbox",
    href: "/admin/mail",
    icon: "inbox",
    label: "Inbox",
  },
  {
    title: "Tutor",
    href: "/admin/tutor",
    icon: "user",
    label: "tuor",
  },
  {
    title: "Student",
    href: "/admin/student",
    icon: "employee",
    label: "students",
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
    title: "Attendance",
    href: "/admin/attendance",
    icon: "attendance",
    label: "attendance",
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
