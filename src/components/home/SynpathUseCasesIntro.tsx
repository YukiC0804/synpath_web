import { useEffect, useState } from 'react';
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

const STEP_MS = 2200;
const TRANSITION_MS = 700;
const ITEM_HEIGHT = 88;
const VISIBLE_HEIGHT = 440;

function getItemClassName(distance: number) {
  if (distance === 0) {
    return 'synpath-use-case-active text-[2.35rem] font-medium leading-none text-white md:text-[2.85rem] lg:text-[3.35rem]';
  }
  if (distance === 1) {
    return 'text-2xl font-normal text-white/40 md:text-[1.75rem]';
  }
  if (distance === 2) {
    return 'text-xl font-normal text-white/20 md:text-2xl';
  }
  return 'text-lg font-normal text-white/10';
}

function UseCasesStepper() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [transitionEnabled, setTransitionEnabled] = useState(true);
  const displayItems = [...synpathUseCases, synpathUseCases[0]];

  useEffect(() => {
    const intervalId = window.setInterval(() => {
      setActiveIndex((current) => current + 1);
    }, STEP_MS);

    return () => window.clearInterval(intervalId);
  }, []);

  useEffect(() => {
    if (activeIndex !== synpathUseCases.length) {
      return;
    }

    const timeoutId = window.setTimeout(() => {
      setTransitionEnabled(false);
      setActiveIndex(0);
      requestAnimationFrame(() => {
        requestAnimationFrame(() => setTransitionEnabled(true));
      });
    }, TRANSITION_MS);

    return () => window.clearTimeout(timeoutId);
  }, [activeIndex]);

  const translateY = VISIBLE_HEIGHT / 2 - activeIndex * ITEM_HEIGHT - ITEM_HEIGHT / 2;

  return (
    <div
      className="relative mx-auto h-[27.5rem] w-full max-w-xl overflow-hidden"
      aria-live="polite"
      aria-atomic="true"
    >
      <div
        className="pointer-events-none absolute inset-x-0 top-0 z-10 h-24 bg-gradient-to-b from-black via-black/90 to-transparent"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 z-10 h-24 bg-gradient-to-t from-black via-black/90 to-transparent"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-x-0 top-1/2 z-0 h-[88px] -translate-y-1/2 border-y border-white/10"
        aria-hidden
      />

      <ul
        className={transitionEnabled ? 'use-cases-stepper-track' : 'use-cases-stepper-track use-cases-stepper-track--instant'}
        style={{ transform: `translateY(${translateY}px)` }}
      >
        {displayItems.map((item, index) => {
          const distance = Math.abs(index - activeIndex);

          return (
            <li
              key={`${item}-${index}`}
              className={`flex h-[88px] items-center whitespace-nowrap transition-all duration-700 ${getItemClassName(distance)}`}
            >
              {item}
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export function SynpathUseCasesIntro() {
  return (
    <div className="border-t border-white/5 py-16 md:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <p className="mb-10 text-sm font-medium uppercase tracking-[0.18em] text-white/55 md:mb-12">
          How It Works
        </p>

        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.2fr)_auto] lg:gap-12 xl:gap-16">
          <h2
            id="how-it-works-heading"
            className="max-w-sm text-2xl font-normal leading-snug text-white md:text-3xl lg:text-[2rem]"
          >
            The top manufacturing teams use Synpath for
          </h2>

          <UseCasesStepper />

          <a
            href="#platform-capabilities"
            className="inline-flex w-fit items-center justify-center rounded-full border border-white/25 px-6 py-3 text-sm font-medium text-white transition-colors hover:border-white/40 hover:bg-white/5 md:px-7 md:py-3.5 md:text-base lg:justify-self-end"
          >
            Explore Platform
            <ArrowRight className="ml-2 h-4 w-4" aria-hidden />
          </a>
        </div>
      </div>
    </div>
  );
}
