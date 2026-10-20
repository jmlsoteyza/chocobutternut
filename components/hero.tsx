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
    <section className="w-full px-10">
      <div className="flex flex-row gap-12">
        {/* Left image */}
        <div className="flex h-45 w-45 shrink-0 items-center justify-center rounded-xl border border-[#292929]">
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
            <span className="text-2xl font-bold tracking-tight text-text-heading">Jom Oteyza</span>

            <span className="inline-flex w-fit items-center gap-2 rounded-full border border-blue-500/20 bg-blue-500/5 px-3 py-1 text-xs text-blue-400">
              <span className="h-1.5 w-1.5 rounded-full bg-blue-400" />
              Available
            </span>
          </div>

          <span className="pr-8 text-sm italic text-text-navbar">
            "Focus on the craft. Trust the Process."
          </span>

          <div className="mt-auto mb-2 flex items-center gap-4">
            {texticons.map((smicon) => (
              <a
                key={smicon.name}
                href={smicon.link}
                target={smicon.name === 'Email' ? undefined : '_blank'}
                rel={smicon.name === 'Email' ? undefined : 'noopener noreferrer'}
                className="group relative inline-flex items-center gap-0.5 pb-1 text-sm text-text-primary transition-colors duration-300 hover:text-text-highlight"
              >
                {smicon.name}

                <ArrowUpRight
                  size={12}
                  className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />

                <span className="absolute bottom-0 left-0 h-px w-full origin-left bg-border-line transition-colors duration-300 group-hover:bg-text-highlight" />
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="py-8">
        <hr className="border-border-line" />
      </div>

      {/* Description */}
      <div>
        <div>
          <h3 className="text-xl font-semibold text-text-heading">Frontend developer</h3>

          <p className="max-w-lg pt-4 text-text-primary">
            I build websites and web apps with React, Next.js, and TypeScript, covering design,
            development, and SEO.
          </p>
        </div>

        <div className="mt-6 flex items-center gap-3">
          <a
            href="#projects"
            className="rounded-md bg-text-highlight px-4 py-2 text-background transition-colors hover:opacity-90"
          >
            View projects
          </a>

          <button className="rounded-md border border-[#3A3A3A] px-4 py-2 text-text-highlight transition-colors hover:bg-text-highlight/5">
            Get in touch
          </button>
        </div>
      </div>
    </section>
  );
}
