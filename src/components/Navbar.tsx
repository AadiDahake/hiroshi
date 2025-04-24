"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import Icon from "@mdi/react";
import { mdiMenu } from "@mdi/js";
import navData from "@/data/nav";

export default function Navbar() {
  const pathName = usePathname();

  return (
    <nav>
      <button className="md:hidden">
        <Icon path={mdiMenu} size={2} className="text-accent" />
      </button>

      <div className="hidden md:flex md:items-center md:justify-between md:px-6 md:py-4">
        <h2 className="italic uppercase md:flex-1 md:text-2xl lg:text-3xl">
          Elevato
        </h2>

        <div className="uppercase md:flex-2 md:flex md:items-center md:justify-center md:gap-6">
          {navData.map((item, index) => (
            <Link
              key={index}
              href={item.href}
              className=
              {`transition-colors hover:text-accent ${pathName === item.href ? "text-primary" : "text-secondary"}`}
            >
              {item.label}
            </Link>
          ))}
        </div>

        <div className="md:flex-1 md:flex md:justify-end md:items-center md:gap-6">
          <Link
            href="/signup"
            className="border rounded-sm uppercase py-2 md:px-5"
          >
            Sign up
          </Link>
          <Link
            href="/reserve"
            className="border rounded-sm uppercase py-2 border-accent text-accent md:px-5"
          >
            Reserve
          </Link>
        </div>
      </div>

      <hr className="hidden md:block border-accent" />
    </nav>
  );
}
