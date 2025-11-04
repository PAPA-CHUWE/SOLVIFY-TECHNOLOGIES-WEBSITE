"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import Image from "next/image";
import { MenuItems } from "../constants/menuItems";
import { Menu as MenuIcon } from "lucide-react";

export default function NavBar() {
  const [scrolled, setScrolled] = useState(false);

  // Detect scroll
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#000066]/40 backdrop-blur-lg shadow-lg border-b border-[#00ffff]/30"
          : "bg-[#000066] shadow-none"
      }`}
    >
      <div className="flex py-4 px-4 sm:px-10 min-h-[70px] items-center justify-between">
        {/* Logo */}
        <Link href="/">
          <Image
            src="/logos/solvify.svg"
            alt="Solvify Logo"
            className="hidden sm:block w-36"
            width={130}
            height={100}
          />
          <Image
            src="/logos/solvify-short.svg"
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
              className={`font-medium transition-colors ${
                scrolled
                  ? "text-[#e3c53c] hover:text-cyan-400"
                  : "text-white hover:text-cyan-300"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Auth Buttons */}
        <div className="hidden lg:flex space-x-4">
          <Button
            variant="outline"
            size="sm"
            className={scrolled ? "border-[#00ffff] text-[#000066]" : ""}
          >
            Login
          </Button>
          <Button
            variant="default"
            size="sm"
            className={scrolled ? "bg-cyan-400 text-[#000066] hover:bg-cyan-300" : ""}
          >
            Sign Up
          </Button>
        </div>

        {/* Mobile Menu */}
        <Sheet>
          <SheetTrigger asChild>
            <Button
              size={"icon-lg"}
              variant={"ghost"}
              className="lg:hidden p-2 ring-2 ring-cyan-400"
            >
              <MenuIcon className="w-6 h-6 text-background" />
            </Button>
          </SheetTrigger>
          <SheetContent side="top" className="w-full h-full p-6">
            <div className="flex flex-col gap-4">
              {MenuItems.map((item) => (
                <Link
                  key={item.label}
                  href={item.path}
                  className="text-[#000066] font-medium hover:text-cyan-400"
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
      </div>
    </header>
  );
}
