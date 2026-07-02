import type { ReactNode } from 'react';
import { SynpathUseCasesIntro } from './SynpathUseCasesIntro';
import { HowItWorksFeatureAnimation } from './HowItWorksFeatureAnimations';

const featureRows = [
  {
    id: 'truth' as const,
    title: 'Build One Source of Truth',
    description:
      'Connect machine data, software, paperwork, and tribal knowledge into one reliable operating layer.',
  },
  {
    id: 'agents' as const,
    title: 'Create Agents & Tools',
    description: (
      <>
        Use natural language to create AI agents, dashboards,
        <br />
        and apps that execute daunting tasks for you.
      </>
    ),
  },
  {
    id: 'deploy' as const,
    title: 'Go Live in 3–8 Weeks',
    description:
      'With AI data migration, fast customization, and easy user adoption, Synpath is built for rapid deployment.',
  },
];

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

function FeatureCopy({
  title,
  description,
}: {
  title: string;
  description: ReactNode;
}) {
  return (
    <div className="max-w-xl">
      <h3 className="mb-5 text-2xl font-medium leading-[1.12] tracking-tight text-white md:text-3xl lg:text-[2rem]">
        {title}
      </h3>
      <p className="text-lg font-normal leading-relaxed text-white/70 md:text-xl">{description}</p>
    </div>
  );
}

export function HowItWorksSection() {
  return (
    <section id="how-it-works" aria-labelledby="how-it-works-heading" className="bg-black">
      <SynpathUseCasesIntro />

      <div className="border-t border-white/5">
        {featureRows.map((row, index) => {
          const reversed = index % 2 === 1;

          return (
            <div
              key={row.id}
              className="border-b border-white/5 py-16 md:py-20 lg:py-24"
            >
              <div className="px-30">
                <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-16 xl:gap-20">
                  <div className={reversed ? 'lg:order-2' : ''}>
                    <FeatureCopy title={row.title} description={row.description} />
                  </div>
                  <div className={reversed ? 'lg:order-1' : ''}>
                    <HowItWorksFeatureAnimation featureId={row.id} />
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <div className="border-t border-white/5 py-20 md:py-24 lg:py-28">
        <div className="px-30">
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
