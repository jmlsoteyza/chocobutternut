interface Service {
  number: string;
  title: string;
  description: string;
}

export default function Services() {
  const services: Service[] = [
    {
      number: '01',
      title: 'Landing Page',
      description:
        'One page that explains what you offer and gets people to act.'
    },
    {
      number: '02',
      title: 'Business websites',
      description:
        'Multi-page sites for restaurants, clinics, shops, agencies, and other small businesses.'
    },
    {
      number: '03',
      title: 'Landing Page',
      description:
        'A home for your work, for developers, designers, photographers, and artists.'
    },
    {
      number: '04',
      title: 'Landing Page',
      description:
        'Fix layout, speed, mobile, and accessibility on a site you already have. Basic SEO included.'
    }
  ];

  return (
    <section>
      <div>
        <div className="pb-4">
          <span>Services</span>
          <h1 className="text-text-highlight text-xl font-medium tracking-tight">
            What I can build for you.
          </h1>
        </div>
        <div className="grid grid-cols-2 gap-4">
          {services.map(({ number, title, description }) => (
            <div
              key={number}
              className="group border-border-line rounded-xl border px-4 py-4"
            >
              <div className="flex size-9.5 items-center justify-center rounded-lg border border-white/10 bg-[#111] text-xs font-medium">
                {number}
              </div>
              <h2 className="text-text-heading pt-3 font-medium">{title}</h2>
              <p className="pt-2 text-[15px] tracking-tight">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
