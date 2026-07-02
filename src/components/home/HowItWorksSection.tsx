const featureRows = [
  {
    id: 'adapt',
    title: 'Instantly adapt to your unique organization, processes, and business rules',
    description: 'A truly flexible platform with process builder and AI rule capture',
    detail:
      'Manufacturing order and sales order workflows connected in one system, with AI rules and agents handling shipment batching and delivery notes.',
    image: '/build-specification.png',
    imageAlt: 'Operational workflow configuration interface placeholder',
  },
  {
    id: 'deploy',
    title: 'Deploy in 3 to 10 weeks',
    description:
      'With AI data migration, instantaneous customization, and easy adoption by users, Synpath is built for manufacturers that need to move fast.',
    image: '/profile-drawing.png',
    imageAlt: 'Deployment and onboarding workflow placeholder',
  },
  {
    id: 'automate',
    title: 'Automate your business with a modern platform',
    description:
      'Factory software that listens to your instructions and executes daunting tasks on your behalf — not just cloud software, but AI-native operations.',
    image: '/hero-manufacturing.png',
    imageAlt: 'Shop floor automation and production workflow placeholder',
  },
  {
    id: 'teams',
    title: 'Manufacturing software your teams will love',
    description: 'An industrial platform with best-in-class UI and UX design for operators and managers.',
    image: '/build-specification.png',
    imageAlt: 'Operator-friendly manufacturing software interface placeholder',
  },
] as const;

const valueProps = [
  {
    id: 'next-gen',
    title: 'A next-generation platform',
    description:
      'Automate the most daunting tasks with AI agents, built directly into Synpath — operating under your supervision.',
  },
  {
    id: 'simplify',
    title: 'Simplify your operations',
    description:
      'Synpath handles order management, inventory, purchasing, planning, production, quality, logistics, and more in one connected system.',
  },
  {
    id: 'control-tower',
    title: 'Factory Control Tower',
    description: 'Design, monitor, and supervise your AI-driven operations in real time.',
  },
  {
    id: 'analyze',
    title: 'Analyze & Decide',
    description:
      'Custom dashboards and AI-powered analysis, built directly into your operational system.',
  },
] as const;

function FeatureVisual({
  image,
  imageAlt,
}: {
  image: string;
  imageAlt: string;
}) {
  return (
    <div className="overflow-hidden rounded-[1.75rem] border border-white/10 bg-[#0d0d0d] shadow-[0_24px_80px_rgba(0,0,0,0.45)]">
      <img
        src={image}
        alt={imageAlt}
        className="aspect-[4/3] h-full w-full object-cover object-center"
        loading="lazy"
      />
    </div>
  );
}

function FeatureCopy({
  title,
  description,
  detail,
}: {
  title: string;
  description: string;
  detail?: string;
}) {
  return (
    <div className="max-w-xl lg:max-w-lg">
      <h3 className="mb-5 text-3xl font-medium leading-[1.12] tracking-tight text-white md:text-4xl lg:text-[2.6rem]">
        {title}
      </h3>
      <p className="text-base leading-relaxed text-white/70 md:text-lg">{description}</p>
      {detail ? (
        <p className="mt-4 text-sm leading-relaxed text-white/55 md:text-base">{detail}</p>
      ) : null}
    </div>
  );
}

export function HowItWorksSection() {
  return (
    <section id="how-it-works" aria-labelledby="how-it-works-heading" className="bg-black">
      <div className="border-t border-white/5 py-20 md:py-24 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="mb-4 text-sm font-medium uppercase tracking-[0.18em] text-white/55">
            How it works
          </p>
          <h2
            id="how-it-works-heading"
            className="max-w-4xl text-4xl font-medium leading-[1.08] tracking-tight text-white md:text-5xl lg:text-6xl"
          >
            Operations that move as fast as your ambition
          </h2>
          <p className="mt-6 max-w-3xl text-lg leading-relaxed text-white/70 md:text-xl">
            Manufacturing operations are more complex than ever. Synpath is built to work for that
            reality.
          </p>
        </div>
      </div>

      <div className="border-t border-white/5">
        {featureRows.map((row, index) => {
          const reversed = index % 2 === 1;

          return (
            <div
              key={row.id}
              className="border-b border-white/5 py-16 md:py-20 lg:py-24"
            >
              <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:gap-16 lg:px-8 xl:gap-20">
                <div className={reversed ? 'lg:order-2' : ''}>
                  <FeatureCopy
                    title={row.title}
                    description={row.description}
                    detail={'detail' in row ? row.detail : undefined}
                  />
                </div>
                <div className={reversed ? 'lg:order-1' : ''}>
                  <FeatureVisual image={row.image} imageAlt={row.imageAlt} />
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <div className="border-t border-white/5 py-20 md:py-24 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="mb-4 text-sm font-medium uppercase tracking-[0.18em] text-white/55">
            Our value proposition
          </p>
          <h2 className="max-w-4xl text-4xl font-medium leading-[1.08] tracking-tight text-white md:text-5xl lg:text-6xl">
            The manufacturing platform that fits how you work, and works while you sleep
          </h2>

          <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-4">
            {valueProps.map((item) => (
              <article
                key={item.id}
                className="flex min-h-full flex-col rounded-2xl border border-white/10 bg-[#0b0b0b] p-6 md:p-7"
              >
                <h3 className="mb-4 text-xl font-medium leading-snug text-white md:text-2xl">
                  {item.title}
                </h3>
                <p className="flex-1 text-sm leading-relaxed text-white/65 md:text-base">
                  {item.description}
                </p>
                <span className="mt-6 inline-flex text-sm font-medium text-white/80">
                  Read more
                </span>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
