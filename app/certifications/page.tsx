'use client';

import Image from 'next/image';
import { certificationsData } from '../data/certificationsData';
import { ArrowUpRight } from 'lucide-react';
import { useState } from 'react';

export default function page() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <section className="mx-auto w-full max-w-3xl px-10 pt-16">
      <h3 className="text-text-heading pb-4 text-xl">Certifications</h3>
      <p className="pb-12 text-sm font-medium">
        These are all the certificates that I accumulate throughout my career
        and schools.
      </p>
      <div className="grid w-full grid-cols-3 gap-4">
        {certificationsData.map((items) => (
          <div
            className="border-border-line flex flex-col rounded-lg border bg-white/3 px-3 py-3.5"
            key={items.id}
          >
            <div
              className="group relative aspect-4/3 w-full shrink-0 cursor-pointer overflow-hidden rounded-md bg-white/5"
              onClick={() => setSelectedImage(items.image)}
            >
              <Image
                src={items.image}
                alt={items.courseTitle}
                fill
                sizes="(max-width: 768px) 50vw, 300px"
                className="object-contain transition-transform duration-300 ease-out group-hover:scale-107"
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
        {/* Modal code */}
        {selectedImage && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-6 backdrop-blur-sm"
            onClick={() => setSelectedImage(null)}
          >
            <div className="relative" onClick={(e) => e.stopPropagation()}>
              <Image
                src={selectedImage}
                alt="Certificate preview"
                width={600}
                height={464}
                className="h-auto max-h-[85vh] w-auto max-w-150 rounded-xl object-contain"
                sizes="(max-width: 600px) 90vw, 600px"
              />
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
