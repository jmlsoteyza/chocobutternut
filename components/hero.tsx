import Image from 'next/image';
import { ArrowUpRight } from 'lucide-react';

export default function Hero() {
  const texticons = [
    {
      name: 'Github',
      link: 'https://github.com/jmlsoteyza'
    },
    { name: 'LinkedIn', link: 'https://www.linkedin.com/in/jom-luis-oteyza' },
    { name: 'Email', link: 'mailto:your-email@example.com' }
  ];

  return (
    <>
      <section>
        <div className="flex flex-row gap-12">
          {/* Left image */}
          <div className="w-44 h-44 shrink-0 border border-[#2B2B2B] flex justify-center items-center rounded-xl">
            <Image
              src="/dp-pic.jpg"
              width={160}
              height={160}
              alt="profile pic pogi"
              className="object-cover rounded-xl"
            />
          </div>
          {/* Right text */}
          <div className="pt-4 inline-flex flex-col gap-4">
            <div className="flex flex-wrap items-center justify-center gap-4">
              <span className="text-3xl font-semibold tracking-tight">Jom Oteyza</span>

              <span className="inline-flex w-fit items-center gap-2 rounded-full border border-blue-500/20 bg-blue-500/5 px-3 py-1 text-xs text-blue-400">
                <span className="h-1.5 w-1.5 rounded-full bg-blue-400" />
                Available for freelance projects
              </span>
            </div>
            <span className="text-md text-[#A6A4A4] pr-8">
              I turn messy workflows into simple web apps.
            </span>
            <div className="flex items-center gap-4 pt-4">
              {texticons.map((smicon) => (
                <a
                  key={smicon.name}
                  href={smicon.link}
                  target={smicon.name === 'Email' ? undefined : '_blank'}
                  rel={smicon.name === 'Email' ? undefined : 'noopener noreferrer'}
                  className="group relative inline-flex items-center gap-0.5 pb-1 text-sm text-[#828282] transition-colors duration-300 hover:text-white"
                >
                  {smicon.name}

                  <ArrowUpRight
                    size={12}
                    className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  />

                  <span className="absolute bottom-0 left-0 h-px w-full origin-left scale-x-100 bg-[#2B2B2B] transition-colors duration-300 group-hover:bg-white" />
                </a>
              ))}
            </div>
          </div>
        </div>
        <div className="py-8">
          <hr className="border-[#2B2B2B]" />
        </div>
        {/* Down */}
        <div className="">
          <div>
            <h3 className="text-xl font-semibold">Frontend developer</h3>
            <p className="pt-4 max-w-lg text-[#A6A4A4]">
              I build websites and web apps with React, Next.js, and TypeScript, covering design,
              development, and SEO.
            </p>
          </div>
          <div className="mt-6 flex items-center gap-3">
            <a
              href="#projects"
              className="bg-white text-black px-4 py-2 rounded-md transition-colors hover:bg-white/90"
            >
              View projects
            </a>
            <button className="border border-[#3A3A3A] text-white px-4 py-2 rounded-md transition-colors hover:bg-white/5">
              Get in touch
            </button>
          </div>
        </div>
      </section>
    </>
  );
}

// A6A4A4,#828282, A0A0A8,
