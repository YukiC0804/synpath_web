import type { LucideIcon } from 'lucide-react';
import { Bot, Layers, SlidersHorizontal } from 'lucide-react';

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
    icon: Bot,
    title: 'Built-in Copilot',
    description: 'AI helps you build any dashboards/custom agents you want',
  },
] as const;

function FeatureCard({
  icon: Icon,
  title,
  description,
}: {
  icon: LucideIcon;
  title: string;
  description: string;
}) {
  return (
    <div className="flex flex-col">
      <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl border border-white/15 bg-white/5">
        <Icon className="h-6 w-6 text-white" aria-hidden />
      </div>
      <h3 className="mb-3 text-lg font-semibold text-white md:text-xl">{title}</h3>
      <p className="text-sm leading-relaxed text-white/85 md:text-base">{description}</p>
    </div>
  );
}

export function OperationalComplexitySection() {
  return (
    <section
      aria-labelledby="operational-complexity-heading"
      className="border-t border-white/5 bg-black py-16 md:py-20 lg:py-24"
    >
      <div className="mx-auto grid max-w-[88rem] grid-cols-1 items-start gap-10 px-4 sm:px-6 lg:grid-cols-12 lg:gap-12 lg:px-10">
        <div className="lg:col-span-4">
          <h2
            id="operational-complexity-heading"
            className="max-w-sm text-3xl font-medium leading-tight tracking-tight text-white md:text-4xl lg:text-[2.5rem]"
          >
            Built to handle operational complexity
          </h2>
        </div>

        <div className="lg:col-span-8">
          <div className="grid grid-cols-1 gap-10 md:grid-cols-3 md:gap-8 lg:max-w-[75%] lg:gap-10">
            {features.map((feature) => (
              <FeatureCard
                key={feature.id}
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
