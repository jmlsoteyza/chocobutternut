import { ArrowUpRight } from 'lucide-react';
import Image from 'next/image';

interface ExperienceItem {
  id: number;
  company: string;
  year: string;
  role: string;
  link: string;
  description: string;
  logo: {
    width: number;
    height: number;
    src: string;
    alt: string;
  };
  skills: string[];
}

const experienceData: ExperienceItem[] = [
  {
    id: 1,
    company: 'House Of Inasal',
    year: '2023 - 2024',
    role: 'Fullstack Engineer',
    link: 'trueroas.com',
    description:
      'Sup, I’m Jom! a frontend engineer who enjoys building great websites and web apps, with a care for craftsmanship and the quality of my work. I usually focus on system design first, then translate those architectural decisions into clean code.',
    logo: {
      width: 20,
      height: 20,
      src: '/reroas_logo.svg',
      alt: 'trueroas logo'
    },
    skills: ['React', 'NextJS', 'Supabase']
  },
  {
    id: 2,
    company: 'TrueRoas',
    year: '2023 - 2024',
    role: 'Fullstack Engineer',
    link: 'trueroas.com',
    description:
      'Sup, I’m Jom! a frontend engineer who enjoys building great websites and web apps, with a care for craftsmanship and the quality of my work. I usually focus on system design first, then translate those architectural decisions into clean code.',
    logo: {
      width: 20,
      height: 20,
      src: '/reroas_logo.svg',
      alt: 'trueroas logo'
    },
    skills: ['React', 'NextJS', 'Supabase']
  },
  {
    id: 3,
    company: 'Anterior',
    year: '2023 - 2024',
    role: 'Frontend Engineer Intern',
    link: 'www.com',
    description:
      'Sup, I’m Jom! a frontend engineer who enjoys building great websites and web apps, with a care for craftsmanship and the quality of my work. I usually focus on system design first, then translate those architectural decisions into clean code.',
    logo: {
      width: 20,
      height: 20,
      src: '/reroas_logo.svg',
      alt: 'trueroas logo'
    },
    skills: ['React', 'NextJS', 'Supabase']
  }
];

export default function Experience() {
  return (
    <section>
      <div className="inline-flex w-full flex-col">
        <div className="pb-4">
          <span>Experience</span>
          <h1 className="text-text-highlight text-xl font-medium tracking-tight">
            What I experienced.
          </h1>
        </div>

        <div className="flex flex-col gap-6">
          {experienceData.map(
            ({ id, company, year, role, description, logo, skills }) => (
              <div
                key={id}
                className="group relative -mx-5 flex cursor-pointer gap-4 overflow-hidden rounded-xl p-5 text-sm transition duration-300 hover:border-white/20 hover:bg-white/[0.04]"
              >
                <div className="flex size-9.5 shrink-0 items-center justify-center rounded-lg border border-white/10 bg-[#111] transition-colors duration-300 group-hover:border-white/20">
                  <Image {...logo} />
                </div>
                <div className="flex w-full flex-col gap-1">
                  <div className="flex w-full items-start justify-between gap-4">
                    <div className="flex flex-col">
                      <div className="inline-flex items-center gap-1">
                        <h3 className="text-text-highlight text-base font-medium">
                          {role}
                        </h3>
                        <ArrowUpRight
                          size={16}
                          strokeWidth={2}
                          color="white"
                          className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                        />
                      </div>
                      <p>{company}</p>
                    </div>
                    <span className="shrink-0 text-xs">{year}</span>
                  </div>
                  <p className="pt-3 text-[15px] leading-relaxed">
                    {description}
                  </p>
                  <div className="flex flex-row gap-2 pt-2 text-xs">
                    {skills.map((skill) => (
                      <span
                        key={skill}
                        className="rounded-full border border-white/10 bg-white/5 px-4 py-1 text-[13px] font-medium text-white/80 transition-colors duration-300 group-hover:border-white/20 group-hover:bg-white/10"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            )
          )}
        </div>
      </div>
    </section>
  );
}

// save 2 card design

// <p>3</p>
// <div className="inline-flex w-full flex-col gap-2">
//   <span>Experience</span>
//   <h1 className="text-text-highlight text-2xl tracking-tight">
//     What I experienced.
//   </h1>
//   <div className="relative flex w-full cursor-pointer gap-4 rounded-xl border border-white/10 bg-[linear-gradient(to_bottom,rgba(255,255,255,0.06),rgba(255,255,255,0.01))] p-5 text-sm before:absolute before:inset-x-8 before:top-0 before:h-px before:bg-[linear-gradient(to_right,transparent,rgba(255,255,255,0.5),transparent)] before:content-['']">
//     <div className="flex size-9.5 shrink-0 items-center justify-center rounded-lg border border-white/10 bg-[#111]">
//       <Image
//         width={20}
//         height={20}
//         src="/reroas_logo.svg"
//         alt="trueroas logo"
//       />
//     </div>
//     <div className="flex w-full flex-col gap-1">
//       <div className="flex w-full items-start justify-between gap-4">
//         <div className="flex flex-col">
//           <h3 className="text-text-highlight text-base">
//             Fullstack Engineer
//           </h3>
//           <p>TrueRoas</p>
//         </div>
//         <span className="shrink-0 text-xs">2023 - 2024</span>
//       </div>
//       <p className="pt-3 leading-relaxed">
//         Sup, I’m Jom! a frontend engineer who enjoys building great
//         websites and web apps, with a care for craftsmanship and the
//         quality of my work. I usually focus on system design first, then
//         translate those architectural decisions into clean code.
//       </p>
//     </div>
//   </div>
// </div>

// save 2 design
{
  /* <p>2</p>
<div className="inline-flex w-full flex-col gap-2">
  <span>Experience</span>
  <h1 className="text-text-highlight text-2xl tracking-tight">
    What I experienced.
  </h1>
  <div className="group relative w-full cursor-pointer overflow-hidden rounded-xl border border-white/10 bg-white/[0.03] p-5 text-sm transition duration-300 hover:-translate-y-0.5 hover:border-white/20 hover:bg-white/[0.06]">
    <div className="pointer-events-none absolute -top-24 -right-24 size-48 rounded-full bg-indigo-500/20 opacity-0 blur-3xl transition-opacity duration-300 group-hover:opacity-100" />
    <div className="relative flex w-full flex-col gap-4">
      <div className="flex w-full flex-row items-center justify-between">
        <h3 className="text-text-highlight text-base">
          Fullstack Engineer
        </h3>
        <span className="text-xs">2023 - 2024</span>
      </div>
      <div className="inline-flex items-center gap-1.5">
        <p>TrueRoas</p>
        <Image
          width={15}
          height={15}
          src="/reroas_logo.svg"
          alt="trueroas logo"
        />
      </div>
      <p className="leading-relaxed">
        Sup, I’m Jom! a frontend engineer who enjoys building great
        websites and web apps, with a care for craftsmanship and the
        quality of my work. I usually focus on system design first, then
        translate those architectural decisions into clean code.
      </p>
    </div>
  </div>
</div> */
}
