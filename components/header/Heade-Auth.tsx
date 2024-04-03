import Image from "next/image";
import React from "react";
import { Button } from "../ui/button";
import Link from "next/link";
import { LoginButton } from "../auth/login-button";

function Header() {
  const Menu = [
    {
      id: 1,
      name: "Find tutors",
      path: "",
    },
    {
      id: 2,
      name: "Become a tutor",
      path: "",
    },
  ];

  return (
    <div className=" flex items-center justify-between p-4 shadow-sm">
      <div className="flex items-center gap-10">
        <Image src="/logo.svg" alt="logo" width={102} height={80} />
        <ul className="md:flex gap-8 hidden">
          {Menu.map((item, index) => (
            <Link href={item.path} key={index}>
              <li
                className="hover:text-primary
                    cursor-pointer hover:scale-105
                    transition-all ease-in-out"
              >
                {item.name}
              </li>
            </Link>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Header;
