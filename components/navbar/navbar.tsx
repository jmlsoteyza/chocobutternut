'use client';

import Image from 'next/image';
import ThemeToggle from './theme-toggle';

export default function Navbar() {
  const navbarList = [
    { label: 'Projects', link: '#projects' },
    { label: 'Skills', link: '#skills' },
    { label: 'Experience', link: '#experience' },
    { label: 'Services', link: '#services' }

    // { label: 'Blog', link: '#blog' } soon!
  ];
  return (
    <nav className="border-border-line z-50 w-full border-b">
      <div className="mx-auto flex max-w-3xl items-center justify-between gap-6 px-10 py-3.5">
        <a href="#home" className="relative h-10 w-10 shrink-0">
          <Image
            className="absolute inset-0 opacity-100 transition-opacity duration-300 dark:opacity-0"
            src="/darkicon.svg"
            width={40}
            height={40}
            alt="Logo"
          />
          <Image
            className="absolute inset-0 opacity-0 transition-opacity duration-300 dark:opacity-100"
            src="/mylogo2.svg"
            width={40}
            height={40}
            alt=""
          />
        </a>

        <div className="flex shrink-0 items-center gap-6 px-4 py-2 text-[15px]">
          {navbarList.map((item) => (
            <a className="text-text-navbar" key={item.label} href={item.link}>
              {item.label}
            </a>
          ))}
        </div>
        <div className="shrink-0">
          <ThemeToggle />
        </div>
      </div>
    </nav>
  );
}
