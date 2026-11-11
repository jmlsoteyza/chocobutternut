import Image from 'next/image';
import { certificationsData } from '../data/certificationsData';

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
                href={items.link}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`View ${items.courseTitle} certificate`}
                className="text-text-highlight self-start pt-3 text-sm underline-offset-4 hover:underline"
              >
                View certificate ↗
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
