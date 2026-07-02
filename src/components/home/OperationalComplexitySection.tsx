import type { LucideIcon } from 'lucide-react';
import { Layers, SlidersHorizontal, Sparkles } from 'lucide-react';

const features = [
  {
    id: 'customizable',
    icon: SlidersHorizontal,
    title: 'Extremely Customizable',
    description: 'Fine-tune every nuance to match your operations reality',
  },
  {
    id: 'no-silos',
    icon: Layers,
    title: 'No data silos',
    description:
      'Replace point solutions, legacy systems, and spreadsheets with one platform that scales.',
  },
  {
    id: 'copilot',
    icon: Sparkles,
    title: 'Built-in Copilot',
    description: 'AI helps you build any dashboards/custom agents you want',
  },
] as const;

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
              Custom Agents
            </span>
          </div>
          <h2
            id="operational-complexity-heading"
            className="complexity-heading max-w-sm text-[2.75rem] leading-[1.05] text-white md:text-5xl lg:text-[3.25rem]"
          >
            Built to handle
            <br />
            complexity
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
