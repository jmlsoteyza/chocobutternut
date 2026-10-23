import Image from 'next/image';
import { ArrowUpRight } from 'lucide-react';

export default function Hero() {
  const texticons = [
    {
      name: 'Github',
      link: 'https://github.com/jmlsoteyza'
    },
    {
      name: 'LinkedIn',
      link: 'https://www.linkedin.com/in/jom-luis-oteyza'
    },
    {
      name: 'Email',
      link: 'mailto:your-email@example.com'
    }
  ];

  return (
    <section className="w-full">
      <div className="flex flex-row gap-12">
        {/* Left image */}
        <div className="flex h-45 w-45 shrink-0 items-center justify-center rounded-xl border border-[#1F1F20]">
          <Image
            src="/testimage.png"
            width={165}
            height={165}
            alt="Profile picture"
            className="rounded-xl object-cover"
          />
        </div>

        {/* Right text */}
        <div className="inline-flex flex-col gap-4 pt-4">
          <div className="flex flex-wrap items-center gap-4">
            <span className="text-text-heading text-2xl font-bold tracking-tight">
              Jom Oteyza
            </span>

            <span className="inline-flex w-fit items-center gap-2 rounded-full border border-blue-500/20 bg-blue-500/5 px-3 py-1 text-xs text-blue-400">
              <span className="h-1.5 w-1.5 rounded-full bg-blue-400" />
              Available
            </span>
          </div>

          <span className="text-text-navbar pr-8 text-sm italic">
            "Focus on the craft. Trust the Process."
          </span>

          <div className="mt-auto mb-2 flex items-center gap-4">
            {texticons.map((smicon) => (
              <a
                key={smicon.name}
                href={smicon.link}
                target={smicon.name === 'Email' ? undefined : '_blank'}
                rel={
                  smicon.name === 'Email' ? undefined : 'noopener noreferrer'
                }
                className="group text-text-primary hover:text-text-highlight relative inline-flex items-center gap-0.5 pb-1 text-sm transition-colors duration-300"
              >
                {smicon.name}

                <ArrowUpRight
                  size={12}
                  className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />

                <span className="bg-border-line group-hover:bg-text-highlight absolute bottom-0 left-0 h-px w-full origin-left transition-colors duration-300" />
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="py-6">
        <hr className="border-border-line" />
      </div>

      {/* Description */}
      <div className="w-full">
        <div>
          <p className="text-text-primary">
            Hey, I'm Jom. I'm a frontend engineer and I build modern websites
            and web apps with React, Next.js, Tailwind CSS, and Supabase, with
            clean design and SEO built in.
          </p>
        </div>

        <div className="mt-4 flex items-center gap-3">
          <a
            href="#projects"
            className="bg-text-highlight text-background text-semibold rounded-md px-4 py-2 transition-colors hover:opacity-90"
          >
            View projects
          </a>

          <button className="text-text-highlight hover:bg-text-highlight/5 rounded-md border border-[#3A3A3A] px-4 py-2 transition-colors">
            Get in touch
          </button>
        </div>
      </div>
    </section>
  );
}
