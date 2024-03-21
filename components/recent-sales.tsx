import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";

export function RecentSales() {
  return (
    <div className="space-y-8">
      <div className="flex items-center">
        <Avatar className="h-9 w-9">
          <AvatarImage alt="Avatar" />
          <AvatarFallback>OM</AvatarFallback>
        </Avatar>
        <div className="ml-4 space-y-1">
          <p className="text-sm font-medium leading-none">Truong Luan</p>
          <p className="text-sm text-muted-foreground">truongluan@gmail.com</p>
        </div>
        <div className="ml-auto font-medium">$1,990.00</div>
      </div>
      <div className="flex items-center">
        <Avatar className="h-9 w-9">
          <AvatarImage alt="Avatar" />
          <AvatarFallback>OM</AvatarFallback>
        </Avatar>
        <div className="ml-4 space-y-1">
          <p className="text-sm font-medium leading-none">Truong Luan</p>
          <p className="text-sm text-muted-foreground">truongluan@gmail.com</p>
        </div>
        <div className="ml-auto font-medium">$1,990.00</div>
      </div>
      <div className="flex items-center">
        <Avatar className="h-9 w-9">
          <AvatarImage alt="Avatar" />
          <AvatarFallback>OM</AvatarFallback>
        </Avatar>
        <div className="ml-4 space-y-1">
          <p className="text-sm font-medium leading-none">Truong Luan</p>
          <p className="text-sm text-muted-foreground">truongluan@gmail.com</p>
        </div>
        <div className="ml-auto font-medium">$1,990.00</div>
      </div>
      <div className="flex items-center">
        <Avatar className="h-9 w-9">
          <AvatarImage alt="Avatar" />
          <AvatarFallback>OM</AvatarFallback>
        </Avatar>
        <div className="ml-4 space-y-1">
          <p className="text-sm font-medium leading-none">Truong Luan</p>
          <p className="text-sm text-muted-foreground">truongluan@gmail.com</p>
        </div>
        <div className="ml-auto font-medium">$1,990.00</div>
      </div>
      <div className="flex items-center">
        <Avatar className="h-9 w-9">
          <AvatarImage alt="Avatar" />
          <AvatarFallback>OM</AvatarFallback>
        </Avatar>
        <div className="ml-4 space-y-1">
          <p className="text-sm font-medium leading-none">Truong Luan</p>
          <p className="text-sm text-muted-foreground">truongluan@gmail.com</p>
        </div>
        <div className="ml-auto font-medium">$1,990.00</div>
      </div>
    </div>
  );
}
