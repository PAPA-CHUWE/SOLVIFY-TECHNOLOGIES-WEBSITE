"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import Image from "next/image";
import { MenuItems } from "../constants/menuItems";
import { Menu as MenuIcon } from "lucide-react"; 

export default function NavBar() {
  return (
    <header className="flex shadow-none py-4 px-4 sm:px-10 bg-white min-h-[70px] items-center justify-between relative z-50">
      {/* Logo */}
      <Link href="/">
        <Image
          src="/logos/solvify.png"
          alt="Solvify Logo"
          className="hidden sm:block w-36"
          width={130}
          height={100}
        />
        <Image
          src="/logos/solvify-short.png"
          alt="Solvify Logo"
          className="sm:hidden w-9"
          width={130}
          height={100}
        />
      </Link>

      {/* Desktop Menu */}
      <nav className="hidden lg:flex gap-x-6">
        {MenuItems.map((item) => (
          <Link
            key={item.label}
            href={item.path}
            className="text-slate-900 font-medium hover:text-blue-700"
          >
            {item.label}
          </Link>
        ))}
      </nav>

      {/* Auth Buttons */}
      <div className="hidden lg:flex space-x-4">
        <Button variant="outline" size="sm">
          Login
        </Button>
        <Button variant="default" size="sm">
          Sign Up
        </Button>
      </div>

      {/* Mobile Menu */}
      <Sheet>
        <SheetTrigger asChild>
          <Button size={'icon-lg'} variant={'ghost'} className="lg:hidden p-2 ring-2 ring-ring">
            <MenuIcon className="w-6 h-6" />
          </Button>
        </SheetTrigger>
        <SheetContent side="top" className="w-full h-full p-6">
          <div className="flex flex-col gap-4">
            {MenuItems.map((item) => (
              <Link
                key={item.label}
                href={item.path}
                className="text-slate-900 font-medium hover:text-blue-700"
              >
                {item.label}
              </Link>
            ))}

            <div className="flex flex-col gap-2 mt-6">
              <Button variant="outline">Login</Button>
              <Button variant="default">Sign Up</Button>
            </div>
          </div>
        </SheetContent>
      </Sheet>
    </header>
  );
}
