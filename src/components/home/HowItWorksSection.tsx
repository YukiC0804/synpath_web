import type { ReactNode } from 'react';
import { SynpathUseCasesIntro } from './SynpathUseCasesIntro';
import { HowItWorksFeatureAnimation } from './HowItWorksFeatureAnimations';
import { useHomepageCopy } from '../../i18n/useHomepageCopy';

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
  const copy = useHomepageCopy();

  const featureRows = [
    {
      id: 'truth' as const,
      title: copy.howItWorks.truthTitle,
      description: copy.howItWorks.truthDesc,
    },
    {
      id: 'agents' as const,
      title: copy.howItWorks.agentsTitle,
      description: (
        <>
          {copy.howItWorks.agentsDescLine1}
          <br />
          {copy.howItWorks.agentsDescLine2}
        </>
      ),
    },
    {
      id: 'deploy' as const,
      title: copy.howItWorks.deployTitle,
      description: copy.howItWorks.deployDesc,
    },
  ];

  const valueProps = [
    {
      id: 'next-gen',
      title: copy.howItWorks.valueNextGenTitle,
      description: copy.howItWorks.valueNextGenDesc,
    },
    {
      id: 'simplify',
      title: copy.howItWorks.valueSimplifyTitle,
      description: copy.howItWorks.valueSimplifyDesc,
    },
    {
      id: 'control-tower',
      title: copy.howItWorks.valueControlTowerTitle,
      description: copy.howItWorks.valueControlTowerDesc,
    },
    {
      id: 'analyze',
      title: copy.howItWorks.valueAnalyzeTitle,
      description: copy.howItWorks.valueAnalyzeDesc,
    },
  ] as const;

  return (
    <section id="how-it-works" aria-labelledby="how-it-works-heading" className="bg-black">
      <SynpathUseCasesIntro />

      <div className="border-t border-white/5">
        {featureRows.map((row, index) => {
          const reversed = index % 2 === 1;

          return (
            <div
              id={row.id === 'truth' ? 'build-one-source-of-truth' : undefined}
              key={row.id}
              className={`border-b border-white/5 py-16 md:py-20 lg:py-24${row.id === 'truth' ? ' scroll-mt-24' : ''}`}
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
            {copy.howItWorks.valueEyebrow}
          </p>
          <h2 className="max-w-4xl text-4xl font-medium leading-[1.08] tracking-tight text-white md:text-5xl lg:text-6xl">
            {copy.howItWorks.valueHeading}
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
                <p className="text-sm leading-relaxed text-white/65 md:text-base">
                  {item.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
