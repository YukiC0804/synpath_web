import { ArrowRight } from 'lucide-react';

const synpathUseCases = [
  'Production Scheduling',
  'Demand Forecasting',
  'Order Entry',
  'Inventory Management',
  'Sales and Operations Execution',
  'Sales and Operations Planning',
  'Procurement Automation',
  'Order-to-Cash Automation',
  'Client Prospecting',
  'Data Analytics',
  'Quoting',
  'Estimating',
  'AR Tracking',
] as const;

function UseCasesScroller() {
  const items = [...synpathUseCases, ...synpathUseCases];

  return (
    <div className="use-cases-scroller relative h-[22rem] overflow-hidden sm:h-[26rem] md:h-[30rem]">
      <div
        className="pointer-events-none absolute inset-x-0 top-0 z-10 h-20 bg-gradient-to-b from-black via-black/80 to-transparent"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 z-10 h-20 bg-gradient-to-t from-black via-black/80 to-transparent"
        aria-hidden
      />
      <div className="use-cases-track flex flex-col gap-5 md:gap-6">
        {items.map((item, index) => (
          <p
            key={`${item}-${index}`}
            className="use-cases-item whitespace-nowrap text-3xl font-medium tracking-tight text-white/30 md:text-4xl lg:text-[2.75rem]"
          >
            {item}
          </p>
        ))}
      </div>
    </div>
  );
}

export function SynpathUseCasesIntro() {
  return (
    <div className="border-t border-white/5 py-20 md:py-24 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <p className="mb-8 text-sm font-medium uppercase tracking-[0.18em] text-white/55">
          How It Works
        </p>

        <div className="grid items-end gap-12 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)] lg:gap-16 xl:gap-24">
          <div>
            <h2
              id="how-it-works-heading"
              className="max-w-xl text-4xl font-medium leading-[1.08] tracking-tight text-white md:text-5xl lg:text-[3.25rem]"
            >
              The top manufacturing teams use Synpath for
            </h2>
            <a
              href="#platform-capabilities"
              className="mt-10 inline-flex items-center gap-2 text-base font-medium text-white transition-colors hover:text-white/80 md:text-lg"
            >
              Explore Platform
              <ArrowRight className="h-4 w-4" aria-hidden />
            </a>
          </div>

          <UseCasesScroller />
        </div>
      </div>
    </div>
  );
}
