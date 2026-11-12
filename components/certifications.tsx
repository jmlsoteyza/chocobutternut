'use client';

import { certificationsData } from '@/app/data/certificationsData';
import { ArrowUpRight, ChevronRight } from 'lucide-react';
import Image from 'next/image';
import { useState } from 'react';

export default function Certifications() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <section>
      <div className="pt-6">
        <div className="flex flex-row justify-between">
          <div className="inline-flex flex-col">
            <span className="text-[15px]">Certifications</span>
            <h1 className="text-text-highlight text-xl font-medium tracking-tight">
              Most of my certification
            </h1>
          </div>
          <a href="/certifications">
            <span className="group hover:text-text-highlight inline-flex cursor-pointer items-center gap-0.5 text-[13px] font-medium tracking-[0.1] transition-colors duration-200">
              VIEW MORE
              <ChevronRight
                size={15.5}
                className="transition-transform duration-200 group-hover:translate-x-1"
              />
            </span>
          </a>
        </div>
        <div className="pt-4">
          {certificationsData
            .slice(0, 3)
            .map(({ id, courseTitle, schoolTitle, link, image }) => (
              <div
                key={id}
                className="border-border-line relative border-b py-6 last:border-b-0"
              >
                <div className="flex gap-4">
                  {/* Image - Left */}{' '}
                  <div className="relative h-22 w-32 shrink-0 cursor-pointer overflow-hidden">
                    {image && (
                      <div
                        className="group relative h-22 w-32 shrink-0 overflow-hidden"
                        onClick={() => setSelectedImage(image)}
                      >
                        <Image
                          src={image}
                          fill
                          alt={`${courseTitle} certificate`}
                          sizes="256px"
                          className="object-contain transition-transform duration-300 ease-out group-hover:scale-103"
                          quality={100}
                        />
                      </div>
                    )}
                  </div>
                  {/* Text - Right */}
                  <div className="inline-flex flex-col">
                    <h3 className="text-text-heading text-base font-semibold">
                      {courseTitle}
                    </h3>
                    <span className="text-[14.5px]">{schoolTitle}</span>
                    <a
                      className="group text-text-highlight relative inline-flex items-center gap-0.5 self-start pt-4.5 text-[14.5px] transition-colors duration-300"
                      href={link}
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
      </div>
    </section>
  );
}
