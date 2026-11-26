import Image from 'next/image';
import { ArrowUpRight, ChevronRight } from 'lucide-react';
import HoverImageWord from './hero/hoverImage';

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
      nameAlt: 'Open AI'
    },
    {
      icons: 'assets/logo/gemini.svg',
      nameAlt: 'Gemini'
    },
    {
      icons: 'assets/logo/claude.svg',
      nameAlt: 'Claude'
    },
    {
      icons: 'assets/logo/codex-dark.svg',
      nameAlt: 'Codex'
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
          <div>
            <span className="text-text-heading text-2xl font-bold tracking-tight">
              Jom Oteyza
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
          <p className="text-text-highlight pr-4 text-[15px] leading-relaxed font-semibold">
            Sup, I’m jom! 👋🏻
          </p>
          <p className="text-text-primary pt-2.5 pr-4 text-[15px] leading-[1.6]">
            I wrote my first lines of code in senior high at{' '}
            <HoverImageWord
              isStyle={true}
              label="Richmindale,"
              icon="/assets/logo/richmindale.svg"
              previewSrc="/assets/coursera-images/datastructures.webp"
            />{' '}
            and I was hooked the first time I built something with my own hands
            and saw it work. I kept learning through
            <span className="ml-1 whitespace-nowrap">
              <Image
                src="/assets/logo/youtube.svg"
                width={18}
                height={18}
                alt=""
                className="mr-[3.5px] inline-block align-[-3px]"
              />
              YouTube,
            </span>{' '}
            <HoverImageWord
              isStyle={true}
              label="certifications,"
              icon=""
              previewSrc="/assets/coursera-images/datastructures.webp"
            />{' '}
            and plenty of{' '}
            <HoverImageWord
              label="broken projects,"
              previewSrc="/assets/coursera-images/datastructures.webp"
            />{' '}
            then sharpened it at
            <HoverImageWord
              label="Mapúa University"
              icon="/mapua.webp"
              previewSrc="/assets/coursera-images/datastructures.webp"
              isStyle={false}
            />
          </p>

          <p className="text-text-primary pt-2.5 pr-4 text-[15px] leading-[1.6]">
            My first real job was at{' '}
            <HoverImageWord
              label="TrueRoas,"
              icon="/reroas_logo.svg"
              previewSrc="/assets/coursera-images/datastructures.webp"
              isStyle={true}
            />{' '}
            where I was mentored as a junior,{' '}
            <HoverImageWord
              label="shipped features"
              previewSrc="/assets/coursera-images/datastructures.webp"
            />{' '}
            and fixed bugs for real users, and learned to write code other
            developers could review and build on.
          </p>

          <p className="text-text-primary pt-2.5 pr-4 text-[15px] leading-[1.6]">
            Now I’m a{' '}
            <span className="hover:text-text-highlight cursor-pointer font-medium underline">
              freelance
            </span>{' '}
            <HoverImageWord
              label="frontend engineer"
              previewSrc="/assets/coursera-images/datastructures.webp"
              customDesign={true}
            />{' '}
            building websites and web apps with React, Next.js, and Supabase. I
            use AI{' '}
            <span className="group inline-flex flex-row align-middle">
              {AiIcons.map((ai, id) => (
                <span
                  key={id}
                  className="group/chip relative -ml-2 cursor-pointer rounded-lg bg-[#232729] px-1.5 py-1.5 shadow-sm transition-all duration-300 ease-out group-hover:ml-1 group-hover:rotate-0 first:ml-0 first:-rotate-6 group-hover:first:ml-0 last:rotate-6 [&:nth-child(2)]:-rotate-2 [&:nth-child(3)]:rotate-2"
                >
                  <Image
                    src={ai.icons}
                    width={16}
                    height={16}
                    alt={ai.nameAlt}
                    className="block"
                  />
                  <span className="pointer-events-none absolute bottom-full left-1/2 z-10 mb-2 -translate-x-1/2 translate-y-1 rounded-md border-2 border-white/40 bg-[#111] px-3 py-1.5 text-[12px] leading-none font-semibold whitespace-nowrap text-white opacity-0 transition-all duration-150 group-hover/chip:translate-y-0 group-hover/chip:opacity-100 group-hover/chip:delay-150">
                    {ai.nameAlt}
                  </span>
                </span>
              ))}
            </span>{' '}
            to speed up my workflow, but I still craft every detail with my own
            hands.
          </p>
          <p className="text-text-primary pt-2.5 pr-4 text-[15px] leading-[1.6]">
            Off the clock, you’ll find me competing in dota 2, running, at the
            gym, or on a trip with friends.
          </p>
        </div>
        {/* <a
          href="mailto:your-email@example.com"
          className="group mt-6 inline-flex items-center gap-2 rounded-lg bg-white px-3.5 py-2.5 text-[15px] font-medium text-[#111]"
        >
          <span>Let's get in touch!</span>

          <ArrowUpRight
            size={18}
            className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
          />
        </a> */}
        {/* <a
          href="mailto:your-email@example.com"
          className="group mt-6 inline-flex items-center gap-2 rounded-lg border border-white/20 bg-[#111] px-3.5 py-2.5 text-[15px] text-[#fff]"
        >
          <span>Let's get in touch!</span>

          <ArrowUpRight
            size={18}
            className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
          />
        </a> */}
        <a
          href="#contact"
          className="group text-text-primary hover:text-text-highlight focus-visible:text-text-highlight mt-6 flex w-fit flex-row items-center gap-1 transition-colors duration-300 motion-reduce:transition-none"
        >
          <span className="text-text-highlight relative pb-0.5 text-[15px] font-medium tracking-tight uppercase">
            Let&rsquo;s get in touch
            <span className="bg-border-line absolute inset-x-0 bottom-0 h-px" />
            <span className="absolute inset-x-0 bottom-0 h-px origin-left scale-x-[0.4] bg-white transition-transform duration-300 group-hover:scale-x-100 group-focus-visible:scale-x-50 motion-reduce:transition-none" />
          </span>
          <ChevronRight
            strokeWidth={2}
            size={19}
            className="mb-1 transition-transform duration-300 group-hover:translate-x-1 group-focus-visible:translate-x-1 motion-reduce:transition-none"
          />
        </a>
      </div>
    </section>
  );
}
