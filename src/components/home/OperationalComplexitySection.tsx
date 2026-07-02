import type { LucideIcon } from 'lucide-react';
import { Layers, SlidersHorizontal, Sparkles } from 'lucide-react';
import { useHomepageCopy } from '../../i18n/useHomepageCopy';

function FeatureCard({
  icon: Icon,
  title,
  description,
  titleClassName = '',
  showDivider = false,
}: {
  icon: LucideIcon;
  title: string;
  description: string;
  titleClassName?: string;
  showDivider?: boolean;
}) {
  return (
    <div
      className={`flex min-w-0 flex-col px-0 py-8 md:min-w-[11.5rem] md:px-6 md:py-0 lg:min-w-[13rem] lg:px-8 xl:min-w-[14.5rem] xl:px-10 ${
        showDivider ? 'md:border-l md:border-white/10' : ''
      }`}
    >
      <Icon className="mb-8 h-5 w-5 text-white" strokeWidth={1.5} aria-hidden />
      <h3
        className={`complexity-feature-title mb-4 text-base font-medium leading-tight text-white md:text-lg ${titleClassName}`}
      >
        {title}
      </h3>
      <p className="complexity-feature-description text-base leading-relaxed md:text-lg">
        {description}
      </p>
    </div>
  );
}

export function OperationalComplexitySection() {
  const copy = useHomepageCopy();

  const features = [
    {
      id: 'customizable',
      icon: SlidersHorizontal,
      title: copy.complexity.customizableTitle,
      description: copy.complexity.customizableDesc,
    },
    {
      id: 'no-silos',
      icon: Layers,
      title: copy.complexity.noSilosTitle,
      description: copy.complexity.noSilosDesc,
    },
    {
      id: 'copilot',
      icon: Sparkles,
      title: copy.complexity.copilotTitle,
      description: copy.complexity.copilotDesc,
    },
  ] as const;

  return (
    <section
      aria-labelledby="operational-complexity-heading"
      className="complexity-section border-t border-white/5 bg-black py-20 md:py-24 lg:py-28"
    >
      <div className="px-30">
        <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-12 lg:gap-10 xl:gap-14">
          <div className="text-left lg:col-span-4">
            <div className="mb-8 flex items-center gap-2.5">
              <span className="h-2 w-2 shrink-0 rounded-full bg-orange-500" aria-hidden />
              <span className="text-[11px] font-medium uppercase tracking-[0.22em] text-white">
                {copy.complexity.eyebrow}
              </span>
            </div>
            <h2
              id="operational-complexity-heading"
              className="complexity-heading max-w-sm text-[2.75rem] leading-[1.05] text-white md:text-5xl lg:text-[3.25rem]"
            >
              {copy.complexity.headingLine1}
              <br />
              {copy.complexity.headingLine2}
            </h2>
          </div>

          <div className="flex justify-start lg:col-span-8 lg:justify-end">
            <div className="grid w-full grid-cols-1 gap-2 md:grid-cols-3 md:gap-0">
              {features.map((feature, index) => (
                <FeatureCard
                  key={feature.id}
                  icon={feature.icon}
                  title={feature.title}
                  description={feature.description}
                  showDivider={index > 0}
                  titleClassName={feature.id === 'customizable' ? 'whitespace-nowrap' : ''}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
