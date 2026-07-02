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

const CASE_COUNT = synpathUseCases.length;
const STEP_MS = 2200;
const TRANSITION_MS = 700;
const ITEM_HEIGHT = 80;
const VISIBLE_ROWS = 7;
const VISIBLE_HEIGHT = ITEM_HEIGHT * VISIBLE_ROWS;
const ROW_OFFSETS = [-3, -2, -1, 0, 1, 2, 3] as const;
const BASE_TRANSLATE_Y = VISIBLE_HEIGHT / 2 - 3 * ITEM_HEIGHT - ITEM_HEIGHT / 2;

function modIndex(index: number) {
  return ((index % CASE_COUNT) + CASE_COUNT) % CASE_COUNT;
}

function getItemClassName(distance: number) {
  if (distance === 0) {
    return 'synpath-use-case-active text-[2.15rem] font-medium leading-none text-white md:text-[2.85rem] lg:text-[3.35rem]';
  }
  if (distance === 1) {
    return 'text-2xl font-normal text-white/58 md:text-[1.85rem]';
  }
  if (distance === 2) {
    return 'text-xl font-normal text-white/42 md:text-2xl';
  }
  if (distance === 3) {
    return 'text-lg font-normal text-white/30 md:text-xl';
  }
  return 'text-base font-normal text-white/20';
}

function UseCasesStepper() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [slideOffset, setSlideOffset] = useState(0);
  const [transitionEnabled, setTransitionEnabled] = useState(true);

  useEffect(() => {
    const intervalId = window.setInterval(() => {
      setSlideOffset(-ITEM_HEIGHT);
    }, STEP_MS);

    return () => window.clearInterval(intervalId);
  }, []);

  useEffect(() => {
    if (slideOffset === 0) {
      return;
    }

    const timeoutId = window.setTimeout(() => {
      setTransitionEnabled(false);
      setActiveIndex((current) => modIndex(current + 1));
      setSlideOffset(0);
      requestAnimationFrame(() => {
        requestAnimationFrame(() => setTransitionEnabled(true));
      });
    }, TRANSITION_MS);

    return () => window.clearTimeout(timeoutId);
  }, [slideOffset]);

  const translateY = BASE_TRANSLATE_Y + slideOffset;

  return (
    <div
      className="relative mx-auto h-[35rem] w-full max-w-4xl min-w-0 overflow-hidden"
      aria-live="polite"
      aria-atomic="true"
    >
      <div
        className="pointer-events-none absolute inset-x-0 top-0 z-10 h-14 bg-gradient-to-b from-black via-black/85 to-transparent"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 z-10 h-14 bg-gradient-to-t from-black via-black/85 to-transparent"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-x-0 top-1/2 z-0 h-20 -translate-y-1/2 border-y border-white/10"
        aria-hidden
      />

      <ul
        className={
          transitionEnabled
            ? 'use-cases-stepper-track'
            : 'use-cases-stepper-track use-cases-stepper-track--instant'
        }
        style={{ transform: `translateY(${translateY}px)` }}
      >
        {(slideOffset === 0 ? ROW_OFFSETS : [...ROW_OFFSETS, 4]).map((offset) => {
          const distance = Math.abs(offset);
          const label = synpathUseCases[modIndex(activeIndex + offset)];

          return (
            <li
              key={offset}
              className={`flex h-20 w-full items-center justify-center whitespace-nowrap text-center transition-all duration-700 ${getItemClassName(distance)}`}
            >
              {label}
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
      <div className="px-30">
        <p className="mb-10 text-sm font-medium uppercase tracking-[0.18em] text-white/55 md:mb-12">
          How It Works
        </p>

        <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-[minmax(0,0.72fr)_minmax(0,1.55fr)_auto] lg:gap-5 xl:gap-8">
          <h2
            id="how-it-works-heading"
            className="text-2xl font-normal leading-snug text-white md:text-3xl lg:text-[2rem]"
          >
            The top manufacturers
            <br />
            use Synpath for
          </h2>

          <UseCasesStepper />

          <a
            href="#platform-capabilities"
            className="inline-flex w-fit shrink-0 items-center justify-center self-center rounded-full border border-white/25 px-6 py-3 text-sm font-medium text-white transition-colors hover:border-white/40 hover:bg-white/5 md:px-7 md:py-3.5 md:text-base lg:justify-self-end lg:self-center"
          >
            Explore Platform
            <ArrowRight className="ml-2 h-4 w-4" aria-hidden />
          </a>
        </div>
      </div>
    </div>
  );
}
