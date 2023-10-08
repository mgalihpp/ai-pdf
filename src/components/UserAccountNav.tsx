import { getUserSubscriptionPlan } from "@/lib/stripe";
import { Button } from "./ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import Link from "next/link";
import { Gem } from "lucide-react";
import { LogoutLink } from "@kinde-oss/kinde-auth-nextjs/server";
import UserAvatar from "./Avatar";

interface UserAccountProps {
  email: string | undefined;
  name: string;
  imageUrl: string;
}

const UserAccountNav = async ({ email, imageUrl, name }: UserAccountProps) => {
  const subscriptionPlan = await getUserSubscriptionPlan();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild className="overflow-visible">
        <Button className="rounded-full h-8 w-8 aspect-square bg-slate-400">
          <UserAvatar imageUrl={imageUrl} name={name}/>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="dark:bg-black" align="end">
        <div className="flex ic justify-start gap-2 p-2">
          <div className="flex flex-col space-y-0.5 leading-none">
            {name && (
              <p className="font-medium text-sm text-black dark:text-white">
                {name}
              </p>
            )}
            {email && (
              <p className="w-[200px] truncate text-xs text-zinc-700 dark:text-zinc-200">
                {email}
              </p>
            )}
          </div>
        </div>
        <DropdownMenuSeparator />
        <DropdownMenuItem asChild>
          <Link href="/dashboard">Dashboard</Link>
        </DropdownMenuItem>
        <DropdownMenuItem asChild>
          {subscriptionPlan.isSubscribed ? (
            <Link href="/dashboard/billing">Manage Subscription</Link>
          ) : (
            <Link href="/pricing">
              Upgrade{" "}
              <Gem className="text-black dark:text-white h-4 w-4 ml-1.5" />
            </Link>
          )}
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem className="cursor-pointer">
          <LogoutLink>Log out</LogoutLink>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default UserAccountNav;
