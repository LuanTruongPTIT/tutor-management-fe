"use client";

import React, { useState, useEffect } from "react";

import Logo from "./_components/logo";
import { Menu } from "./_components/menu";
import ActionButtons from "./_components/action-button";

const Navbar = () => {
  const [hasScrolled, setHasScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setHasScrolled(true);
      } else {
        setHasScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navbarClasses = `
    flex items-center justify-between space-x-10 bg-white  h-14
    sticky top-0 z-50 border-b border-gray-200
  `;

  return (
    <div className={navbarClasses}>
      <div className="flex items-center justify-center pl-3 gap-2">
        <Logo />
        <Menu />
      </div>
      <ActionButtons />
    </div>
  );
};

export default Navbar;
