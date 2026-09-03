"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { navItems } from "@/lib/site";

function NavLinks({
  stacked,
  onNavigate,
}: {
  stacked?: boolean;
  onNavigate?: () => void;
}) {
  return (
    <ul
      className={
        stacked
          ? "flex flex-col gap-6 p-0"
          : "m-0 flex list-none items-center gap-8 p-0"
      }
    >
      {navItems.map((item) => (
        <li key={item.href} className="list-none">
          <Link
            href={item.href}
            onClick={onNavigate}
            className="inline-block cursor-pointer text-sm font-semibold uppercase tracking-[0.18em] text-white no-underline transition-colors duration-150 hover:text-navy"
          >
            {item.label}
          </Link>
        </li>
      ))}
    </ul>
  );
}

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  if (pathname.startsWith("/preview")) {
    return null;
  }

  return (
    <>
      <nav className="fixed z-20 hidden w-full justify-center border-b-4 border-navy bg-brand px-8 py-4 lg:flex">
        <NavLinks />
      </nav>

      <button
        type="button"
        aria-label={open ? "Close menu" : "Open menu"}
        aria-expanded={open}
        className="hit fixed top-5 left-5 z-30 flex h-10 w-10 cursor-pointer flex-col items-center justify-center gap-1.5 border-4 border-navy bg-brand p-0 lg:hidden"
        onClick={() => setOpen((value) => !value)}
      >
        <span
          className={`block h-0.5 w-5 origin-center rounded bg-white transition-transform duration-300 ${
            open ? "translate-y-2 rotate-45" : ""
          }`}
        />
        <span
          className={`block h-0.5 w-5 rounded bg-white transition-opacity duration-300 ${
            open ? "opacity-0" : ""
          }`}
        />
        <span
          className={`block h-0.5 w-5 origin-center rounded bg-white transition-transform duration-300 ${
            open ? "-translate-y-2 -rotate-45" : ""
          }`}
        />
      </button>

      {open ? (
        <div className="fixed inset-0 z-20 flex flex-col justify-center bg-brand p-10 lg:hidden">
          <NavLinks stacked onNavigate={() => setOpen(false)} />
        </div>
      ) : null}
    </>
  );
}
