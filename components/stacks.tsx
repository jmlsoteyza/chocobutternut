import type { IconType } from 'react-icons';
import { FaJava } from 'react-icons/fa';
import {
  SiCss,
  SiFigma,
  SiFirebase,
  SiFramer,
  SiGooglecloud,
  SiJavascript,
  SiMui,
  SiNextdotjs,
  SiNodedotjs,
  SiPostgresql,
  SiPython,
  SiRedux,
  SiSass,
  SiSupabase,
  SiTailwindcss,
  SiTypescript
} from 'react-icons/si';
import { VscVscode } from 'react-icons/vsc';

interface Stacks {
  icon: IconType;
  name: string;
  color?: string;
}

export default function Stacks() {
  const stackItems: Stacks[] = [
    { icon: SiNextdotjs, name: 'Next.js' },
    { icon: SiTailwindcss, name: 'Tailwind CSS', color: '#06B6D4' },
    { icon: SiJavascript, name: 'JavaScript', color: '#F7DF1E' },
    { icon: SiCss, name: 'CSS', color: '#1572B6' },
    { icon: SiTypescript, name: 'TypeScript', color: '#3178C6' },
    { icon: SiNodedotjs, name: 'NodeJs', color: '#5FA04E' },
    { icon: SiPostgresql, name: 'PostgreSQL', color: '#4169E1' },
    { icon: FaJava, name: 'Java', color: '#ED8B00' },
    { icon: SiPython, name: 'Python', color: '#3776AB' },
    { icon: SiSass, name: 'SCSS', color: '#CC6699' },
    { icon: SiSupabase, name: 'Supabase', color: '#3ECF8E' },
    { icon: SiFramer, name: 'Motion', color: '#0055FF' },
    { icon: SiMui, name: 'MUI', color: '#007FFF' },
    { icon: SiFigma, name: 'Figma', color: '#F24E1E' },
    { icon: SiGooglecloud, name: 'Google Cloud', color: '#4285F4' },
    { icon: SiFirebase, name: 'Firestore', color: '#FFCA28' },
    { icon: SiRedux, name: 'React Redux', color: '#764ABC' },
    { icon: VscVscode, name: 'VS Code', color: '#007ACC' }
  ];

  return (
    <section>
      <div>
        <div className="inline-flex flex-col gap-2 pb-6">
          <span className="text-[15px]">Tools & Stacks</span>
          <h1 className="text-text-highlight text-xl font-medium tracking-tight">
            What I usually use.
          </h1>
        </div>
        <div className="flex flex-wrap gap-2 gap-y-2.5">
          {stackItems.map(({ icon: Icon, name, color }) => (
            <div
              key={name}
              className="group border-border-line flex items-center gap-2 rounded-md border bg-black px-2.5 py-1.5 text-sm transition-colors"
            >
              <Icon size={16} color={color} />
              <span className="text-text-navbar font-medium transition-colors group-hover:text-gray-50">
                {name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
