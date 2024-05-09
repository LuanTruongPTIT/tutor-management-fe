// import Sidebar from "@/components/layout/sidebar";
import React from "react";
import Providers from "@/redux/Providers";
import Header from "@/components/header/Header";
function TechLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />
      {children}
    </>
  );
}

export default TechLayout;
