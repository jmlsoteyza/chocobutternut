import { ArrowUpRight, ChevronRight } from 'lucide-react';
import Image from 'next/image';

interface CertificationsItems {
  id: number;
  courseTitle: string;
  schoolTitle: string;
  link: string;
  image: string;
}

export default function Certifications() {
  const certificationsItems: CertificationsItems[] = [
    {
      id: 1,
      courseTitle: 'Data Structures',
      schoolTitle: 'UC San Diego',
      link: 'https://www.coursera.org/account/accomplishments/verify/60PW1BTFEMC5',
      image: '/assets/coursera-images/datastructures.webp'
    },
    {
      id: 2,
      courseTitle: 'Introduction to Computer Programming',
      schoolTitle: 'University Of London',
      link: 'https://www.coursera.org/account/accomplishments/verify/MCY7Z8DIZE81',
      image: '/assets/coursera-images/datastructures.webp'
    },
    {
      id: 3,
      courseTitle: 'Data Structures',
      schoolTitle: 'UC San Diego',
      link: 'https://www.coursera.org/account/accomplishments/verify/60PW1BTFEMC5',
      image: '/assets/coursera-images/datastructures.webp'
    }
  ];

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
          <span className="group hover:text-text-highlight inline-flex cursor-pointer items-center gap-0.5 text-[13px] font-medium tracking-[0.1] transition-colors duration-200">
            VIEW MORE
            <ChevronRight
              size={15.5}
              className="transition-transform duration-200 group-hover:translate-x-1"
            />
          </span>
        </div>
        <div className="pt-4">
          {certificationsItems.map(
            ({ id, courseTitle, schoolTitle, link, image }) => (
              <div
                key={id}
                className="border-border-line relative border-b py-6"
              >
                <div className="flex gap-4">
                  {/* Image - Left */}{' '}
                  <div className="relative h-22 w-32 shrink-0 cursor-pointer overflow-hidden rounded-md">
                    {image && (
                      <div className="relative h-22 w-32 shrink-0 overflow-hidden rounded-md">
                        <Image
                          src={image}
                          fill
                          alt={`${courseTitle} certificate`}
                          sizes="256px"
                          className="object-contain"
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
            )
          )}
        </div>
      </div>
    </section>
  );
}
