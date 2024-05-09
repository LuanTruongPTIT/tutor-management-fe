"use client";
import Image from "next/image";
import React, { useState } from "react";
import { Button } from "../ui/button";
import Link from "next/link";
import { LoginButton } from "../auth/login-button";
import { useUser } from "@/context/app.context";
import { UserNav } from "../layout/user-nav";
import { usePathname } from "next/navigation";

export default function Header() {
  const { isAuthenticated } = useUser();

  const isAuthenticatedCheck = isAuthenticated();
  const pathname = usePathname();

  const Menu = [
    {
      id: 1,
      name: "Find tutors",
      path: "",
    },
    {
      id: 2,
      name: "Become a tutor",
      path: "/tutor/become",
    },
  ];
  const renderMenuItem = () => {
    let newMenu = Menu.filter((item) => item.path !== pathname);

    return newMenu;
  };

  return (
    <>
      <div className=" flex items-center justify-between p-4 shadow-sm">
        <div className="flex items-center gap-10">
          <Image src="/logo.svg" alt="logo" width={102} height={80} />
          <ul className="md:flex gap-8 hidden">
            {renderMenuItem().map((item, index) => {
              return (
                <Link href={item.path} key={index}>
                  <li
                    className="hover:text-primary
                  cursor-pointer hover:scale-105
                  transition-all ease-in-out"
                  >
                    {item.name}
                  </li>
                </Link>
              );
            })}
          </ul>
        </div>
        {isAuthenticatedCheck ? (
          <UserNav />
        ) : (
          <LoginButton mode="modal">
            <Button>Login</Button>
          </LoginButton>
        )}
      </div>
    </>
  );
}
