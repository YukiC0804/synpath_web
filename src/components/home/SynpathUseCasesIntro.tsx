import { useEffect, useRef, useState } from 'react';
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
const PAUSE_MS = 1000;
const SLIDE_MS = 500;
const ITEM_HEIGHT = 80;
const VISIBLE_HEIGHT = ITEM_HEIGHT * 7;
const LOOP_ITEMS = [...synpathUseCases, ...synpathUseCases, ...synpathUseCases];
const LOOP_START = CASE_COUNT;
const BASE_TRANSLATE_Y = VISIBLE_HEIGHT / 2 - ITEM_HEIGHT / 2;

const FONT_SIZES_REM = [3.35, 1.85, 1.5, 1.25, 1];
const OPACITIES = [1, 0.58, 0.42, 0.3, 0.2];

function easeInOutCubic(t: number) {
  return t < 0.5 ? 4 * t * t * t : 1 - (-2 * t + 2) ** 3 / 2;
}

function lerp(a: number, b: number, t: number) {
  return a + (b - a) * t;
}

function sampleStops(stops: number[], distance: number) {
  const clamped = Math.min(distance, stops.length - 1);
  const index = Math.floor(clamped);
  const fraction = clamped - index;
  const next = Math.min(index + 1, stops.length - 1);
  return lerp(stops[index], stops[next], fraction);
}

function getItemStyle(index: number, scrollOffset: number) {
  const distance = Math.abs(index - scrollOffset);
  const fontSizeRem = sampleStops(FONT_SIZES_REM, distance);
  const opacity = sampleStops(OPACITIES, distance);
  const isActive = distance < 0.35;

  return {
    height: ITEM_HEIGHT,
    fontSize: `${fontSizeRem}rem`,
    lineHeight: 1,
    opacity,
    fontFamily: 'var(--font-serif)',
    fontWeight: isActive ? 500 : 400,
    letterSpacing: '-0.02em',
    color: '#fff',
  } as const;
}

function UseCasesStepper() {
  const [scrollOffset, setScrollOffset] = useState<number>(LOOP_START);
  const scrollOffsetRef = useRef<number>(LOOP_START);
  const rafRef = useRef<number | null>(null);
  const timeoutsRef = useRef<number[]>([]);

  useEffect(() => {
    let cancelled = false;

    const clearTimers = () => {
      timeoutsRef.current.forEach((id) => window.clearTimeout(id));
      timeoutsRef.current = [];
      if (rafRef.current !== null) {
        window.cancelAnimationFrame(rafRef.current);
        rafRef.current = null;
      }
    };

    const schedule = (fn: () => void, delay: number) => {
      const id = window.setTimeout(() => {
        if (!cancelled) {
          fn();
        }
      }, delay);
      timeoutsRef.current.push(id);
    };

    const snapOffset = (value: number) => {
      scrollOffsetRef.current = value;
      setScrollOffset(value);
    };

    const animateTo = (target: number, onDone: () => void) => {
      const start = scrollOffsetRef.current;
      const startTime = performance.now();

      const tick = (now: number) => {
        if (cancelled) {
          return;
        }

        const elapsed = now - startTime;
        const progress = Math.min(elapsed / SLIDE_MS, 1);
        const eased = easeInOutCubic(progress);
        const current = start + (target - start) * eased;

        scrollOffsetRef.current = current;
        setScrollOffset(current);

        if (progress < 1) {
          rafRef.current = window.requestAnimationFrame(tick);
          return;
        }

        rafRef.current = null;
        onDone();
      };

      rafRef.current = window.requestAnimationFrame(tick);
    };

    const runCycle = () => {
      schedule(() => {
        const next = scrollOffsetRef.current + 1;

        animateTo(next, () => {
          if (cancelled) {
            return;
          }

          if (next >= CASE_COUNT * 2) {
            snapOffset(next - CASE_COUNT);
          }

          runCycle();
        });
      }, PAUSE_MS);
    };

    runCycle();

    return () => {
      cancelled = true;
      clearTimers();
    };
  }, []);

  const translateY = BASE_TRANSLATE_Y - scrollOffset * ITEM_HEIGHT;

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
        className="use-cases-stepper-track"
        style={{ transform: `translate3d(0, ${translateY}px, 0)` }}
      >
        {LOOP_ITEMS.map((item, index) => (
          <li
            key={`${item}-${index}`}
            className="flex w-full items-center justify-center whitespace-nowrap text-center"
            style={getItemStyle(index, scrollOffset)}
          >
            {item}
          </li>
        ))}
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
