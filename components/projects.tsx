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
  },
  {
    id: 2,
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
          What I built.
        </h1>
      </div>
      <div className="flex flex-col gap-8">
        {projectItems.map((project) => (
          <div
            key={project.id}
            className="relative flex w-full cursor-pointer flex-row gap-8 rounded-lg border border-transparent px-6 py-4 text-sm [background:linear-gradient(#0c0c0f,#0c0c0f)_padding-box,linear-gradient(160deg,rgba(255,255,255,0.2),rgba(255,255,255,0.03)_40%)_border-box] before:pointer-events-none before:absolute before:-inset-px before:rounded-[inherit] before:[mask-image:linear-gradient(#000_0_0),linear-gradient(#000_0_0)] before:[mask-composite:exclude] before:[mask-clip:content-box,border-box] before:p-px before:opacity-0 before:transition-opacity before:duration-300 before:[background:linear-gradient(160deg,rgba(255,255,255,0.5),rgba(255,255,255,0.1)_45%)] hover:before:opacity-100"
          >
            <div className="h-20 w-32 max-w-32 shrink-0 rounded-md bg-green-100"></div>
            <div className="inline-flex flex-col">
              <span className="text-base font-medium text-gray-50">
                {project.title}
              </span>
              <span className="pt-2 text-[15px] transition-colors duration-300 group-hover:text-gray-300">
                {project.description}
              </span>
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
      </div>
    </section>
  );
}
