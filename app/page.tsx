import Experience from '@/components/experience';
import Hero from '@/components/hero';

export default function Home() {
  return (
    <main className="mx-auto flex w-full max-w-3xl flex-col gap-32 px-10 pt-28 pb-20">
      <Hero />
      <Experience />
    </main>
  );
}
