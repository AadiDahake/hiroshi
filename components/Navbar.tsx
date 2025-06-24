"use client";

import { MenuIcon } from "lucide-react";
import Link from "next/link";
// import ExportedImage from "next-image-export-optimizer";
import React, { useEffect, useRef } from "react";

import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerHeader,
  DrawerTrigger,
} from "@/components/ui/drawer";

export default function Navbar({
  currentPage,
  ...props
}: {
  currentPage?: "About" | "Menu" | "Kitchen" | "Reservations" | "Contact";
} & React.HTMLAttributes<HTMLElement>) {
  const navRef = useRef<HTMLElement>(null);

  const LINKS = [
    {
      name: "About",
      href: "/about",
    },
    {
      name: "Menu",
      href: "/menu",
    },
    {
      name: "Kitchen",
      href: "/kitchen",
    },
    {
      name: "Reservations",
      href: "/reservations",
    },
    {
      name: "Contact",
      href: "/contact",
    },
  ];

  useEffect(() => {
    const changeNavBackgroundOnScroll = () => {
      if (navRef.current === null) return;

      const bgColor =
        currentPage === "About" || currentPage === "Menu"
          ? "bg-shiso-900/75"
          : "bg-bianca-200/15";

      if (window.scrollY > 0) {
        navRef.current.classList.remove("backdrop-blur-[2px]");
        navRef.current.classList.add("backdrop-blur-md", bgColor);
      } else {
        navRef.current.classList.remove("backdrop-blur-md", bgColor);
        navRef.current.classList.add("backdrop-blur-[2px]");
      }
    };

    changeNavBackgroundOnScroll();

    window.addEventListener("scroll", changeNavBackgroundOnScroll);

    return () =>
      window.removeEventListener("scroll", changeNavBackgroundOnScroll);
  }, [navRef, currentPage]);

  return (
    <header
      {...props}
      ref={navRef}
      className={`fixed top-0 z-50 flex w-full px-[6%] py-4 text-sm backdrop-blur-[2px] transition-all duration-500 md:flex md:flex-nowrap md:items-center md:justify-between ${props.className}`}
    >
      <div className="flex w-full items-center justify-between md:w-auto md:gap-2">
        <Link
          className={`text-2_5xl font-extrabold ${
            currentPage === "About" || currentPage === "Menu"
              ? "text-bianca-700 hover:text-aka-600"
              : "text-shiso-900 hover:text-bianca-800"
          } text-nowrap`}
          href="/"
        >
          Hiroshi Ramen
        </Link>
        <Drawer direction="right">
          <DrawerTrigger className="md:hidden">
            <MenuIcon className="size-5 shrink-0" />
          </DrawerTrigger>
          <DrawerContent className="bg-bianca-100">
            <DrawerHeader>
              <DrawerDescription className="flex flex-col gap-5 pt-3 font-medium text-neutral-800 dark:text-neutral-200">
                <div className="flex flex-col gap-5 pt-1 pl-12 text-xl font-medium text-center">
                  {LINKS.map(({ name, href }) => (
                    <Link
                      key={name}
                      href={href}
                      className={`${
                        currentPage === name
                          ? "text-bianca-300"
                          : "text-neutral-800"
                      } hover:text-bianca-400`}
                    >
                      {name}
                    </Link>
                  ))}
                </div>
              </DrawerDescription>
            </DrawerHeader>
          </DrawerContent>
        </Drawer>
      </div>
      <nav
        className="hidden grow basis-full items-center justify-end gap-8 overflow-hidden ps-5 text-right font-semibold md:flex 2xl:text-base"
        aria-label="Navigation Links"
      >
        {LINKS.map(({ name, href }) =>
          currentPage === "About" || currentPage === "Menu" ? (
            <Link
              key={name}
              href={href}
              className={`${
                currentPage === name
                  ? "text-bianca-700 underline underline-offset-4"
                  : "text-neutral-200"
              } hover:text-bianca-500`}
            >
              {name}
            </Link>
          ) : (
            <Link
              key={name}
              href={href}
              className={`${
                currentPage === name
                  ? "text-shiso-700 underline underline-offset-4"
                  : "text-neutral-800"
              } hover:text-shiso-500`}
            >
              {name}
            </Link>
          )
        )}
      </nav>
    </header>
  );
}
