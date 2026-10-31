import { useTheme } from 'next-themes';
import Image from 'next/image';
import { useEffect, useState } from 'react';

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  return (
    <button onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}>
      {theme === 'dark' ? (
        <Image src="/light.svg" width={23} height={23} alt="Switch theme" />
      ) : (
        <Image src="/dark.svg" width={18} height={18} alt="dark theme" />
      )}
    </button>
  );
}
