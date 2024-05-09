"use client";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { Outfit, Poppins } from "next/font/google";
import { cn } from "@/lib/utils";
import Header from "@/components/header/Header";
import Hero from "@/components/hero/Hero";
import CategorySearch from "./_components/CategorySearch";
import TutorList from "./_components/TutorList";
import { useEffect, useState } from "react";
import { socket } from "@/lib/socket";
import { fakeTutorList } from "./_components/data/data";

import { ToastContainer } from "react-toastify";
import { toast } from "sonner";

const outfit = Outfit({ subsets: ["latin"] });
export default function Home() {
  const [isConnected, setIsConnected] = useState(false);
  const [transport, setTransport] = useState("N/A");
  const [noti, setNoti] = useState<string>("");
  const userId = "2";
  // useEffect(() => {
  //   socket.on("connect_error", (err) => {
  //     console.log(err);
  //   });
  //   socket.on("connect", () => {
  //     console.log("connected");
  //   });
  //   socket.on("disconnect", (reason) => {
  //     console.log("reason", reason);
  //   });
  //   socket.emit("register", { userId });
  //   socket.emit("notificationPeddingTutor", { message: "Hello" });
  //   socket.on("notificationPeddingTutors", (data) => {
  //     toast(data.message);
  //   });
  //   return () => {
  //     socket.disconnect();
  //   };
  // });
  return (
    <div className="md:px-20">
      <Header />
      <Hero />
      <CategorySearch />
      <TutorList tutorlist={fakeTutorList} />
      <ToastContainer />
    </div>
  );
}
