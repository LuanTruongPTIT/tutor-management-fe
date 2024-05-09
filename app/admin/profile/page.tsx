import { Separator } from "@/components/registry/new-york/ui/separator";
import { ProfileForm } from "./_components/profile-form";

export default function SettingsProfilePage() {
  return (
    <div className="ml-[20px] space-y-6">
      <div>
        <h3 className="text-lg font-medium">Profile</h3>
        <p className="text-sm text-muted-foreground">
          This is how others will see you on the site.
        </p>
      </div>
      <Separator />
      <div className="flex flex-col items-center">
        <ProfileForm />
      </div>
    </div>
  );
}
