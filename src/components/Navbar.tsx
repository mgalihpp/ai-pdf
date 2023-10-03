import Link from "next/link";
import MaxWidthWrapper from "./MaxWidthWrapper";
import { buttonVariants } from "@/components/ui/button";
import { LoginLink, RegisterLink } from "@kinde-oss/kinde-auth-nextjs/server";
import { ArrowRight } from "lucide-react";

const Navbar = () => {
  return (
    <nav className="sticky h-14 inset-x-0 z-30 w-full border-b border-gray-200 dark:border-zinc-700 bg-background backdrop-blur-lg transition-all">
      <MaxWidthWrapper>
        <div className="flex h-14 items-center justify-between border-b border-zinc-200 dark:border-zinc-700">
          <Link href="/" className="flex z-40 font-semibold items-center justify-center">
            <span className={buttonVariants({
              variant: 'ghost',
              size: "sm",
            })}>ai-pdf</span>
          </Link>
          {/* mobile nav */}
          <div className="hidden items-center space-x-4 sm:flex">
            <>
              <Link
                href="/"
                className={buttonVariants({
                  variant: "ghost",
                  size: "sm",
                })}
              >
                Pricing
              </Link>
              <LoginLink
                className={buttonVariants({
                  variant: "ghost",
                  size: "sm",
                })}
              >
                Sign in
              </LoginLink>
              <RegisterLink className={buttonVariants({
                size: "sm"
              })}>
                Get Started <ArrowRight className="ml-1.5 h-5 w-5"/>
              </RegisterLink>
            </>
          </div>
        </div>
      </MaxWidthWrapper>
    </nav>
  );
};

export default Navbar;
