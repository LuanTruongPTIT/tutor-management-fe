import { Icons } from "@/components/icons";
import { NavItem, SidebarNavItem } from "@/types";

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
    role: "tutor",
    verified: true,
    status: "Active",
  },
  {
    id: 2,
    name: "Truong Luan",
    company: "VNG",
    role: "tutor",
    verified: true,
    status: "Active",
  },
  {
    id: 3,
    name: "Truong Luan",
    company: "VNG",
    role: "tutor",
    verified: true,
    status: "Active",
  },
  {
    id: 4,
    name: "Truong Luan",
    company: "VNG",
    role: "tutor",
    verified: true,
    status: "Active",
  },
  {
    id: 5,
    name: "Truong Luan",
    company: "VNG",
    role: "tutor",
    verified: true,
    status: "Active",
  },
  {
    id: 6,
    name: "Truong Luan",
    company: "VNG",
    role: "tutor",
    verified: true,
    status: "Active",
  },
  {
    id: 7,
    name: "Truong Luan",
    company: "VNG",
    role: "tutor",
    verified: true,
    status: "Active",
  },
  {
    id: 8,
    name: "Truong Luan",
    company: "VNG",
    role: "tutor",
    verified: true,
    status: "Active",
  },
  {
    id: 9,
    name: "Truong Luan",
    company: "VNG",
    role: "tutor",
    verified: true,
    status: "Active",
  },
  {
    id: 10,
    name: "Truong Luan",
    company: "VNG",
    role: "tutor",
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

export const navItems: NavItem[] = [
  {
    title: "Dashboard",
    href: "/admin",
    icon: "dashboard",
    label: "Dashboard",
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
