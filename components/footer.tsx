import type { IconType } from 'react-icons';
import { FiGithub, FiLinkedin, FiMail } from 'react-icons/fi';

interface TextIconsItems {
  name: string;
  link: string;
  icon: IconType;
}

export default function Footer() {
  const texticons: TextIconsItems[] = [
    {
      name: 'Github',
      link: 'https://github.com/jmlsoteyza',
      icon: FiGithub
    },
    {
      name: 'LinkedIn',
      link: 'https://www.linkedin.com/in/jom-luis-oteyza',
      icon: FiLinkedin
    },
    {
      name: 'Email',
      link: 'mailto:your-email@example.com',
      icon: FiMail
    }
  ];

  return (
    <>
      <section className="mx-auto flex w-full max-w-3xl flex-col px-10 pt-20">
        <div className="flex flex-col pb-7">
          <hr className="border-border-line w-full" />
          <div className="flex flex-row justify-between pt-5">
            <div className="inline-flex flex-col">
              <span className="text-text-highlight text-sm font-medium">
                Jmlsoteyza
              </span>
              <span className="text-sm">frontend engineer in uae.</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-sm">say hi on</span>
              {texticons.map((item) => {
                const Icon = item.icon;
                const isEmail = item.name === 'Email';
                return (
                  <a
                    key={item.name}
                    href={item.link}
                    target={isEmail ? undefined : '_blank'}
                    rel={isEmail ? undefined : 'noopener noreferrer'}
                    aria-label={item.name}
                    className="border-border-line text-text-primary hover:text-text-highlight hover:border-text-highlight inline-flex h-8 w-8 items-center justify-center rounded-lg border transition-colors duration-300"
                  >
                    <Icon size={15} />
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
