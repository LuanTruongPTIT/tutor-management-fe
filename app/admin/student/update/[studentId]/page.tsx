import { Separator } from "@/components/registry/new-york/ui/separator";
import { AccountForm } from "../_components/update-student";

export default function SettingsAccountPage() {
  return (
    <div className="ml-[30px] space-y-6">
      <div>
        <h3 className="text-lg font-medium">Account</h3>
        <p className="text-sm text-muted-foreground">
          Update your account settings. Set your preferred language and
          timezone.
        </p>
      </div>
      <Separator />
      <AccountForm />
    </div>
  );
}
