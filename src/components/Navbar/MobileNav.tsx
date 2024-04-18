import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import { NavLinks } from "@/constants";
import { cn } from "@/lib/utils";

import Link from "next/link";
import { usePathname } from "next/navigation";

const MobileNav = () => {
  const pathname = usePathname();
  return (
    <nav className="flex lg:hidden justify-center items-center ">
      <Sheet>
        <SheetTrigger>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="40"
            height="40"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="#ffff"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M4 6l16 0" />
            <path d="M4 12l16 0" />
            <path d="M4 18l16 0" />
          </svg>
        </SheetTrigger>
        <SheetContent className="border-none flex flex-col justify-center">
          <SheetClose asChild>
            <div className="flex flex-col justify-center gap-8 uppercase font-sans text-sm font-bold tracking-[3px] h-full py-14">
              {NavLinks.map((item) => {
                return (
                  <SheetClose asChild key={item.route}>
                    <Link
                      href={item.route}
                      key={item.label}
                      className="text-center navlink"
                    >
                      {item.label}
                    </Link>
                  </SheetClose>
                );
              })}
              <SheetClose asChild key={"/sing-up"}>
                <Link
                  href={"/sing-up"}
                  className={cn(
                    "bg-secondary font-sans text-white px-6 py-3 uppercase rounded-full tracking-[2px] hover:bg-primary hover:text-yellow hover:transition-colors hover:duration-300 font-medium hover:shadow-md text-center",
                    {
                      "hover:bg-yellow hover:text-primary hover:transition-colors hover:duration-300 hover:shadow-md":
                        pathname !== "/" ? true : false,
                    }
                  )}
                >
                  Comenzar
                </Link>
              </SheetClose>
            </div>
          </SheetClose>
        </SheetContent>
      </Sheet>
    </nav>
  );
};

export default MobileNav;
