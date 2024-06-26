import { navItems } from "@/constants/data";
import { cn } from "@/lib/utils";
import { DashboardNav } from "../dashboard-nav";

export default function Sidebar() {
  return (
    <nav
      className={cn(
        `relative hidden h-[1000px] border-r box-border pt-16 lg:block w-72`
      )}
    >
      <div className="space-y-4 py-4">
        <div className="px-3 py-2">
          <div className="space-y-1">
            <h2 className="px-4 mb-2 text-xl font-semibold tracking-tight">
              Overview
            </h2>
            <DashboardNav items={navItems} />
          </div>
        </div>
      </div>
    </nav>
  );
}
