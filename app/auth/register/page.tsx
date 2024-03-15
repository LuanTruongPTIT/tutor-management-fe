import RegisterForm from "@/components/auth/register-form";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Poppins } from "next/font/google";
import React from "react";

const font = Poppins({
  subsets: ["latin"],
  weight: ["600"],
});
export default function register() {
  return <RegisterForm />;
}
