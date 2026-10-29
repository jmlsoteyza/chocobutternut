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
        <div className="inline-flex flex-col gap-3.5 pb-4">
          <span className="text-[15px]">Process</span>
          <h1 className="text-text-highlight text-xl font-medium tracking-tight">
            How working with me goes.
          </h1>
        </div>
        <ol className="border-border-line border-t-[0.5px]">
          {steps.map(({ id, stepsItems, description }) => (
            <li
              key={id}
              className="border-border-line grid grid-cols-[40px_minmax(0,1fr)] items-baseline gap-x-2 gap-y-1 border-b-[0.5px] py-6 sm:grid-cols-[40px_120px_minmax(0,1fr)]"
            >
              <span className="text-xs">{id}</span>
              <span className="text-text-highlight text-base font-medium">
                {stepsItems}
              </span>
              <p className="col-start-2 text-[15px] leading-[1.7] sm:col-start-auto">
                {description}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
