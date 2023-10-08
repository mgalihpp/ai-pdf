import Link from "next/link";
import MaxWidthWrapper from "./MaxWidthWrapper";
import { buttonVariants } from "@/components/ui/button";
import {
  LoginLink,
  getKindeServerSession,
} from "@kinde-oss/kinde-auth-nextjs/server";
import { Github } from "lucide-react";
import UserAccountNav from "./UserAccountNav";
import MobileNav from "./MobileNav";
import ToggleTheme from "./ToggleTheme";

const Navbar = () => {
  const { getUser } = getKindeServerSession();
  const user = getUser();
  return (
    <nav className="sticky h-14 inset-x-0 z-30 w-full border-b border-gray-200 dark:border-zinc-700 bg-background backdrop-blur-lg transition-all">
      <MaxWidthWrapper>
        <div className="flex h-14 items-center justify-between border-b border-zinc-200 dark:border-zinc-700">
          <Link
            href="/"
            className="flex z-40 font-semibold items-center justify-center"
          >
            <span
              className={buttonVariants({
                variant: "ghost",
                size: "sm",
              })}
            >
              ai-pdf
            </span>
          </Link>
          {/* mobile nav */}
          <MobileNav isAuth={!!user}/>

          <div className="hidden items-center space-x-4 sm:flex">
            <Link
              href="https://github.com/mgalihpp/ai-pdf"
              target="_blank"
              className={buttonVariants({
                variant: "outline",
                size: "sm",
              })}
            >
              <Github className="h-4 w-4 mr-1.5 dark:text-white text-black rounded-full" />
              Github
            </Link>
            <ToggleTheme />
            {!user ? (
              <>
                <Link
                  href="/pricing"
                  className={buttonVariants({
                    variant: "ghost",
                    size: "sm",
                  })}
                >
                  Pricing
                </Link>
                <LoginLink
                  className={buttonVariants({
                    size: "sm",
                  })}
                >
                  Sign in
                </LoginLink>
              </>
            ) : (
              <>
                <Link
                  href="/dashboard"
                  className={buttonVariants({
                    variant: "ghost",
                    size: "sm",
                  })}
                >
                  Dashboard
                </Link>
                <UserAccountNav
                  name={
                    !user.given_name || !user.family_name
                      ? "Your Account"
                      : `${user.given_name} ${user.family_name}`
                  }
                  email={user.email ?? ""}
                  imageUrl={user.picture ?? ""}
                />
              </>
            )}
          </div>
        </div>
      </MaxWidthWrapper>
    </nav>
  );
};

export default Navbar;
