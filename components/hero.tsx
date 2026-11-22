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

  const AiIcons = [
    {
      icons: 'assets/logo/openai-legacy-dark.svg',
      nameAlt: 'openai'
    },
    {
      icons: 'assets/logo/gemini.svg',
      nameAlt: 'gemini'
    },
    {
      icons: 'assets/logo/claude.svg',
      nameAlt: 'claude'
    },
    {
      icons: 'assets/logo/codex-dark.svg',
      nameAlt: 'claude'
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
        <div className="inline-flex flex-col gap-2.5 pt-4">
          <div className="flex flex-wrap items-center gap-4">
            <span className="text-text-heading text-2xl font-bold tracking-tight">
              Jom Oteyza
            </span>

            <span className="inline-flex w-fit items-center gap-2 rounded-full border border-blue-500/20 bg-blue-500/5 px-3 py-1 text-xs text-blue-400">
              <span className="h-1.5 w-1.5 rounded-full bg-blue-400" />
              Available
            </span>
          </div>

          <span className="text-text-navbar text-sm">
            trust the process, stay in motion.
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
                  className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />

                <span className="bg-border-line group-hover:bg-text-highlight absolute bottom-0 left-0 h-px w-full origin-left transition-colors duration-300" />
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Description */}
      <div className="w-full py-6">
        <div className="inline-flex flex-col pr-6">
          <p className="text-text-highlight pr-4 text-[14.5px] leading-relaxed font-medium">
            Sup, I’m jom! 👋🏻
          </p>
          <p className="text-text-primary pt-2.5 pr-4 text-[14.5px] leading-[1.6] font-medium">
            I wrote my first lines of code in senior high at{' '}
            <span className="text-text-highlight ml-0.5 cursor-pointer whitespace-nowrap">
              <Image
                src="/richmindale.svg"
                width={18}
                height={18}
                alt=""
                className="mr-[3.5px] inline-block align-[-3px]"
              />
              Richmindale
            </span>
            , and I was hooked the first time I built something with my own
            hands and saw it work. I kept learning through{' '}
            <span className="text-text-highlight cursor-pointer whitespace-nowrap">
              <Image
                src="/youtube.svg"
                width={18}
                height={18}
                alt=""
                className="mr-[3.5px] inline-block align-[-3px]"
              />
              YouTube,
            </span>{' '}
            <span className="text-text-highlight">certifications, </span>
            and plenty of{' '}
            <span className="text-text-highlight cursor-pointer">
              broken projects,{' '}
            </span>
            then sharpened it at
            <span className="text-text-highlight ml-1 cursor-pointer whitespace-nowrap">
              <Image
                src="/mapua.webp"
                width={18}
                height={18}
                alt=""
                className="mr-[3.5px] inline-block align-[-3px]"
              />
              Mapúa University.
            </span>{' '}
          </p>

          <p className="text-text-primary pt-2.5 pr-4 text-[14.5px] leading-[1.6] font-medium">
            My first real job was at{' '}
            <span className="text-text-highlight ml-0.5 cursor-pointer whitespace-nowrap">
              <Image
                src="/reroas_logo.svg"
                width={16.5}
                height={16.5}
                alt=""
                className="mr-[3.5px] inline-block align-[-3px]"
              />
              TrueRoas,
            </span>{' '}
            where I was mentored as a junior,{' '}
            <span className="text-text-highlight cursor-pointer">
              shipped features
            </span>{' '}
            and fixed bugs for real users, and learned to write code other
            developers could review and build on.
          </p>

          <p className="text-text-primary pt-2.5 pr-4 text-[14.5px] leading-[1.6] font-medium">
            Now I’m a{' '}
            <span className="cursor-pointer text-mist-500 underline">
              freelance
            </span>{' '}
            <span className="text-text-highlight cursor-pointer">
              frontend engineer,
            </span>{' '}
            building websites and web apps with React, Next.js, and Supabase. I
            use AI{' '}
            <span className="group inline-flex flex-row align-middle">
              {AiIcons.map((ai, id) => (
                <span
                  key={id}
                  className="-ml-2 rounded-lg bg-[#232729] p-1 shadow-sm transition-all duration-300 ease-out group-hover:ml-1 group-hover:rotate-0 first:ml-0 first:-rotate-6 group-hover:first:ml-0 last:rotate-6"
                >
                  <Image
                    src={ai.icons}
                    width={16.5}
                    height={16.5}
                    alt={ai.nameAlt}
                    className="block"
                  />
                </span>
              ))}
            </span>{' '}
            to speed up my workflow, but I still craft every detail with my own
            hands.
          </p>
          <p className="text-text-primary pt-2.5 pr-4 text-[14.5px] leading-[1.6] font-medium">
            Off the clock, you’ll find me competing in dota 2, running, at the
            gym, or on a trip with friends.
          </p>
        </div>
        <a
          href="#contact"
          className="group text-text-primary hover:text-text-highlight focus-visible:text-text-highlight mt-6 flex w-fit flex-row items-center gap-1 transition-colors duration-300"
        >
          <span className="relative pb-1 text-[15px]">
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
