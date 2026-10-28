import Image from 'next/image';
import { ArrowUpRight, ChevronRight } from 'lucide-react';

interface TextIconsItems {
  name: string;
  link: string;
}

export default function Hero() {
  const texticons: TextIconsItems[] = [
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

      {/* Description */}
      <div className="w-full py-6">
        <div className="inline-flex flex-col gap-4 pr-6">
          <p className="text-text-primary pr-4 leading-relaxed tracking-[-0.2px]">
            Sup, I’m Jom! a{' '}
            <span className="text-text-highlight">frontend engineer</span> who
            enjoys building great websites and web apps, with a care for{' '}
            <span className="text-text-highlight">craftsmanship</span> and the
            quality of my work. I usually focus on{' '}
            <span className="text-text-highlight">system design first</span>,
            then{' '}
            <span className="text-text-highlight">
              translate those architectural decisions into clean code
            </span>
            .
          </p>

          <p className="text-text-primary pr-4 leading-relaxed tracking-[-0.2px]">
            As a freelancer, I build interfaces that reflect each client’s
            vision and the needs of their users. I handle{' '}
            <span className="text-text-highlight">both design and code</span>,
            so{' '}
            <span className="text-text-highlight">
              what you sign off on is what gets built
            </span>
            .
          </p>

          <p className="text-text-primary leading-relaxed tracking-[-0.2px]">
            In my downtime, I compete in dota2, running, the gym, and trips with
            friends.
          </p>
        </div>
        <a
          href="#contact"
          className="group text-text-primary hover:text-text-highlight focus-visible:text-text-highlight mt-6 flex w-fit flex-row items-center gap-1 transition-colors duration-300"
        >
          <span className="relative pb-1">
            Let&apos;s get in touch
            <span className="bg-border-line absolute inset-x-0 bottom-0 h-px" />
            <span className="absolute inset-x-0 bottom-0 h-px origin-left scale-x-0 bg-white transition-transform duration-300 group-hover:scale-x-100 group-focus-visible:scale-x-50" />
          </span>
          <ChevronRight
            size={19}
            className="transition-transform duration-300 group-hover:translate-x-1 group-focus-visible:translate-x-1"
          />
        </a>
      </div>
    </section>
  );
}
