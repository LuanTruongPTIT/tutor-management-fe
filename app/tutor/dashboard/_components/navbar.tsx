import { Logo } from "@/components/logo/logo";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
// import { FormPopover } from "@/components/form/form-popover";
export default function Navbar() {
  return (
    <nav className="fixed z-50 top-0 px-4 w-full h-14 border-b bg-white flex items-center">
      <div className="flex items-center gap-x-4">
        <div className="hidden md:flex">
          <Logo />
        </div>
        <Button
          // variant="secondary"
          size="lg"
          className="rounded-sm hidden md:block h-auto py-1.5 px-2"
        >
          Create
        </Button>
        <Button size="sm">
          <Plus className="h-4 w-4" />
        </Button>
      </div>
    </nav>
  );
}
