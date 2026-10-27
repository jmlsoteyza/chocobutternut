export default function Experience() {
  return (
    <section>
      <div>
        <div className="inline-flex w-full flex-col gap-2">
          <span>Experience</span>
          <h1 className="text-text-highlight text-2xl tracking-tight">
            What I experienced.
          </h1>
          <div className="relative w-full cursor-pointer flex-col gap-4 rounded-md border border-white/[0.11] bg-[#14141a]/[0.44] p-4 text-sm shadow-[inset_0_1px_0_rgba(255,255,255,0.2),0_24px_48px_-28px_rgba(0,0,0,0.6)] backdrop-blur-lg backdrop-saturate-[1.6] after:pointer-events-none after:absolute after:inset-0 after:rounded-[inherit] after:content-[''] after:[background:linear-gradient(150deg,#ffffff1a,#fff0_34%,#fff0_70%,#ffffff0a)]">
            <div className="flex w-full flex-row justify-between">
              <div className="text-text-highlight inline-flex gap-1 text-xl">
                <h3>Fullstack Engineer</h3>
                <p>TrueRoas</p>
              </div>
              <span>2023 - 2024</span>
            </div>
            <p className="pt-4">
              Sup, I’m Jom! a frontend engineer who enjoys building great
              websites and web apps, with a care for craftsmanship and the
              quality of my work. I usually focus on system design first, then
              translate those architectural decisions into clean code.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
