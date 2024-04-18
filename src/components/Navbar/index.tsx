"use client";
import { NavLinks } from "@/constants";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import MobileNav from "./MobileNav";

const Navbar = () => {
  const pathname = usePathname();

  return (
    <header
      className={cn("fixed z-50 w-full text-white", {
        "bg-primary shadow-md": pathname !== "/" ? true : false,
      })}
    >
      <div className="flex justify-between items-center py-4 container">
        <Link
          href={"/"}
          className="font-amaranth tracking-[1px] text-3xl flex items-start gap-1"
        >
          <Image src={"/logo.svg"} width={30} height={30} alt="logo" />
          TuCasaYa<span className="text-yellow">!</span>
        </Link>
        <nav className="hidden lg:flex justify-between items-center gap-8 uppercase font-sans text-sm font-bold tracking-[3px]">
          {NavLinks.map((item) => {
            const isActive =
              pathname === item.route || pathname.startsWith(`${item.route}/`);

            return (
              <Link
                href={item.route}
                key={item.label}
                className={cn("relative navlink ", {
                  "text-yellow": isActive,
                })}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>
        <div className="flex justify-between items-center gap-x-2">
          <Link
            href={"/sing-up"}
            className={cn(
              "bg-secondary font-sans text-white px-6 py-3 uppercase rounded-full tracking-[2px] hover:bg-primary hover:text-yellow hover:transition-colors hover:duration-300 font-medium hover:shadow-md hidden lg:block",
              {
                "hover:bg-yellow hover:text-primary hover:transition-colors hover:duration-300 hover:shadow-md":
                  pathname !== "/" ? true : false,
              }
            )}
          >
            Comenzar
          </Link>

          <MobileNav />
        </div>
      </div>
    </header>
  );
};

export default Navbar;
