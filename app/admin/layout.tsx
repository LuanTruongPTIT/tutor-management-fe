import Header from "@/components/layout/header";
import Providers from "@/components/layout/provider";
import Sidebar from "@/components/layout/sidebar";
import { Toaster } from "@/components/ui/toaster";
import { Inter } from "next/font/google";
import React from "react";

const inter = Inter({ subsets: ["latin"] });
export default async function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className={`${inter.className} overflow-hidden`}>
      <Providers>
        <Toaster />
        <Header />
        <div className="flex h-screen overflow-hidden">
          <Sidebar />
          <main className="w-full pt-16">{children}</main>
        </div>
      </Providers>
    </div>
  );
}
