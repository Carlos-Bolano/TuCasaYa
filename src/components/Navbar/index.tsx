import { NavLinks } from "@/constants";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  return (
    <header className=" fixed z-50 w-full  text-white">
      <div className="flex justify-between items-center py-4 container">
        <Link
          href={"/"}
          className="font-amaranth text-3xl flex items-start gap-1"
        >
          <Image src={"/logo.svg"} width={30} height={30} alt="logo" />
          TuCasaYa<span className="text-yellow">!</span>
        </Link>
        <nav className="flex between gap-8 uppercase font-sans text-sm font-bold  ">
          {NavLinks.map((link) => (
            <Link key={link.route} href={link.route}>
              {link.label}
            </Link>
          ))}
        </nav>
        <div>
          <Link
            href={"/sing-up"}
            className="bg-secondary font-sans text-white px-6 py-3 uppercase
           rounded-full tracking-[2px] hover:bg-primary hover:text-yellow hover:transition-colors
           hover:duration-300 font-medium"
          >
            Comenzar
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
