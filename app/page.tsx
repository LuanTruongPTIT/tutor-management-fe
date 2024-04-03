import { Button } from "@/components/ui/button";
import Image from "next/image";
import { Outfit, Poppins } from "next/font/google";
import { cn } from "@/lib/utils";
import Header from "@/components/header/Header";
import Hero from "@/components/hero/Hero";
import CategorySearch from "./_components/CategorySearch";
const outfit = Outfit({ subsets: ["latin"] });
export default function Home() {
  return (
    <div>
      <Header />
      <Hero />
      <CategorySearch />
    </div>
  );
}
