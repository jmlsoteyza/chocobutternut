import Image from 'next/image';

export default function Navbar() {
  const navbarList = [
    { label: 'About', link: '#about' },
    { label: 'Projects', link: '#projects' },
    { label: 'Skills', link: '#skills' },
    { label: 'Blog', link: '#blog' }
  ];
  return (
    <nav className="border-border-line z-50 w-full border-b">
      <div className="mx-auto flex max-w-3xl items-center justify-between gap-6 px-10 py-3.5">
        <a href="#home" className="shrink-0">
          <Image src="/mylogo2.svg" width={35} height={35} alt="Logo" />
        </a>

        <div className="flex shrink-0 items-center gap-6 px-4 py-2 text-[15px]">
          {navbarList.map((item) => (
            <a className="text-text-navbar" key={item.label} href={item.link}>
              {item.label}
            </a>
          ))}
        </div>
        <div className="shrink-0">
          <Image src="/light.svg" width={23} height={23} alt="Switch theme" />
        </div>
      </div>
    </nav>
  );
}
