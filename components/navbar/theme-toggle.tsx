import { useTheme } from 'next-themes';
import Image from 'next/image';

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  return (
    <button
      className="flex h-6 w-6 cursor-pointer items-center justify-center"
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
    >
      <Image
        className="block dark:hidden"
        src="/dark.svg"
        width={18}
        height={18}
        alt="dark theme"
      />
      <Image
        className="hidden dark:block"
        src="/light.svg"
        width={23}
        height={23}
        alt="Switch theme"
      />
    </button>
  );
}
