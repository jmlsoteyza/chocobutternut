import { ArrowUpRight } from 'lucide-react';

interface ProjectItem {
  id: number;
  title: string;
  image: string;
  description: string;
  skills: string[];
  pageLink: string;
  caseStudyLink: string;
  githubLink: string;
}

const projectItems: ProjectItem[] = [
  {
    id: 1,
    title: 'TrueRoas Landing Page',
    image: 'Image first',
    description:
      'Sup, I’m Jom! a frontend engineer who enjoys building great websites and web apps, with a care for craftsmanship and the quality of my work.',
    skills: ['React', 'Nextjs', 'TypeScript'],
    pageLink: 'this is a page link to whole card',
    caseStudyLink: 'link',
    githubLink: 'links'
  }
];

export default function Projects() {
  return (
    <section>
      <div className="inline-flex flex-col gap-2 pb-6">
        <span className="text-[15px]">Projects</span>
        <h1 className="text-text-highlight text-xl font-medium tracking-tight">
          What I built
        </h1>
      </div>
      {projectItems.map((project) => (
        <div
          key={project.id}
          className="relative flex w-full flex-row gap-8 rounded-lg border border-white/[0.11] bg-[#14141a]/[0.44] px-6 py-6 text-sm shadow-[inset_0_1px_0_rgba(255,255,255,0.2),0_24px_48px_-28px_rgba(0,0,0,0.6)] backdrop-blur-lg backdrop-saturate-[1.6] after:pointer-events-none after:absolute after:inset-0 after:rounded-[inherit] after:content-[''] after:[background:linear-gradient(150deg,#ffffff1a,#fff0_34%,#fff0_70%,#ffffff0a)]"
        >
          <div className="h-20 w-32 max-w-32 shrink-0 rounded-md bg-white"></div>
          <div className="inline-flex flex-col">
            <span className="text-text-highlight text-base font-medium">
              {project.title}
            </span>
            <span className="pt-2">{project.description}</span>
            {/* 
            <div className="-ml-1 inline-flex flex-row gap-x-2 pt-4">
              <div className="border-border-line rounded-full border bg-black px-3 py-1 text-[14px] font-medium">
                Next.Js
              </div>
              <div className="border-border-line rounded-full border bg-black px-3 py-1 text-[14px] font-medium">
                TypeScript
              </div>
              <div className="border-border-line rounded-full border bg-black px-3 py-1 text-[14px] font-medium">
                React
              </div>
            </div> */}

            <div className="inline-flex flex-row gap-4 pt-4">
              <div className="group inline-flex cursor-pointer flex-row items-center gap-1">
                <span className="transition duration-200 group-hover:text-gray-50">
                  Case Study
                </span>
                <ArrowUpRight
                  size={12}
                  className="transition duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-gray-50"
                />
              </div>
              <div className="group inline-flex cursor-pointer flex-row items-center gap-1">
                <span className="cursor-pointer transition duration-200 group-hover:text-gray-50">
                  Github
                </span>
                <ArrowUpRight
                  size={12}
                  className="transition duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-gray-50"
                />
              </div>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
}
