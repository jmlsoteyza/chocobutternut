export default function Process() {
  const steps = [
    {
      id: '01',
      stepsItems: 'Understand',
      description:
        'We talk through what you need, who the site is for, and what you already have.'
    },
    {
      id: '02',
      stepsItems: 'Build',
      description:
        'I design and build it, and show you progress along the way so nothing is a surprise.'
    },
    {
      id: '03',
      stepsItems: 'Launch',
      description: 'I test it on real phones and browsers, then put it live.'
    },
    {
      id: '04',
      stepsItems: 'Support',
      description: 'If something breaks after launch, I fix it.'
    }
  ];

  return (
    <section>
      <div>
        <div className="pb-6">
          <span className="mb-3 block font-mono text-xs tracking-wide text-[#555555]">
            Process
          </span>
          <h1 className="text-text-highlight text-xl font-medium tracking-tight">
            How working with me goes.
          </h1>
        </div>
        <ol className="border-t-[0.5px] border-white/[0.08]">
          {steps.map(({ id, stepsItems, description }) => (
            <li
              key={id}
              className="grid grid-cols-[40px_minmax(0,1fr)] items-baseline gap-x-2 gap-y-1 border-b-[0.5px] border-white/[0.08] py-5 sm:grid-cols-[40px_120px_minmax(0,1fr)]"
            >
              <span className="font-mono text-xs text-[#555555]">{id}</span>
              <span className="text-base font-medium text-[#E8E8E8]">
                {stepsItems}
              </span>
              <p className="col-start-2 text-sm leading-[1.7] text-[#999999] sm:col-start-auto">
                {description}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
