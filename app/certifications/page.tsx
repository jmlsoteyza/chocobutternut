import Image from 'next/image';
import { certificationsData } from '../data/certificationsData';
import { ArrowUpRight } from 'lucide-react';

export default function page() {
  return (
    <section className="mx-auto w-full max-w-3xl px-10 pt-16 pb-20">
      <h3 className="text-text-heading pb-4 text-2xl">Certifications</h3>
      <p className="pb-12">
        These are all the certificates that I accumulate throughout my career
        and schools.
      </p>
      <div className="grid w-full grid-cols-3 gap-x-4 gap-y-6">
        {certificationsData.map((items) => (
          <div
            className="border-border-line flex flex-col rounded-lg border bg-white/[0.03] px-3 py-3.5"
            key={items.id}
          >
            <div className="relative aspect-[4/3] w-full shrink-0 overflow-hidden rounded-md bg-white/5">
              <Image
                src={items.image}
                alt={items.courseTitle}
                fill
                sizes="(max-width: 768px) 50vw, 300px"
                className="object-contain"
              />
            </div>
            <div className="inline-flex flex-col">
              <span className="text-text-highlight min-h-14 pt-4 text-sm font-medium">
                {items.courseTitle}
              </span>
              <span className="pt-2 text-sm">{items.schoolTitle}</span>
              <span className="pt-1 text-sm">{items.completed}</span>
              <a
                className="group text-text-highlight relative inline-flex items-center gap-0.5 self-start pt-4.5 text-[14.5px] transition-colors duration-300"
                href={items.link}
              >
                Verify
                <ArrowUpRight
                  size={14}
                  className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
                <span className="bg-text-highlight absolute right-0 bottom-0 left-0 h-px origin-left scale-x-0 transition-transform duration-300 group-hover:scale-x-100" />
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
