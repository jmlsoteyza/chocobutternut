import { ArrowUpRight } from 'lucide-react';
import Image from 'next/image';

export default function Navbar() {
  const navbarList = [
    { label: 'Home', link: '#home' },
    { label: 'About', link: '#about' },
    { label: 'Service', link: '#service' },
    { label: 'Projects', link: '#projects' },
    { label: 'Skills', link: '#skills' },
    { label: 'Blog', link: '#blog' }
  ];

  return (
    <nav className="sticky top-4 z-50 w-full pt-4">
      <div className="relative mx-auto flex max-w-4xl items-center justify-between">
        <a href="#home">
          <Image src="/mylogo2.svg" width={42} height={42} alt="Logo" />
        </a>

        <div className="absolute left-1/2 -translate-x-1/2 flex items-center gap-6 text-[15px] bg-[rgba(20,20,22,0.72)] border border-[rgba(255,255,255,0.1)] rounded-full py-2 px-4">
          {navbarList.map((item) => (
            <a key={item.label} href={item.link}>
              {item.label}
            </a>
          ))}
        </div>

        <button className="inline-flex items-center gap-2 rounded-full border border-[rgba(255,255,255,0.1)] bg-[rgba(20,20,22,0.72)] px-3.5 py-2 font-medium">
          <span className="text-[15px]">Let's talk</span>
          <ArrowUpRight strokeWidth={1.5} width={18} />
        </button>
      </div>
    </nav>
  );
}
