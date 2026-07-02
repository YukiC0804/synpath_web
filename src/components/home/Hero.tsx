import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const heroStats = [
  {
    id: 'otif',
    label: 'On-Time, In-Full',
    value: '+15%',
  },
  {
    id: 'wip',
    label: 'WIP',
    value: '↓18%',
  },
  {
    id: 'costs',
    label: 'Avoided staff costs',
    value: '↓$1M',
  },
] as const;

function useUnevenAgentQueries(initialValue: number) {
  const [count, setCount] = useState(initialValue);

  useEffect(() => {
    let timeoutId = 0;

    const scheduleNext = () => {
      const addTwo = Math.random() < 0.45;
      const increment = addTwo ? 2 : 1;
      const baseDelay = addTwo ? 1750 : 750;
      const jitter = Math.floor(Math.random() * 280) - 140;
      const delay = Math.max(500, baseDelay + jitter);

      timeoutId = window.setTimeout(() => {
        setCount((current) => current + increment);
        scheduleNext();
      }, delay);
    };

    scheduleNext();
    return () => window.clearTimeout(timeoutId);
  }, []);

  return count;
}

function formatCount(value: number) {
  return value.toLocaleString('en-US');
}

function StatCard({
  label,
  value,
  valueClassName = 'text-emerald-400',
}: {
  label: string;
  value: string;
  valueClassName?: string;
}) {
  return (
    <div className="rounded-2xl border border-white/20 bg-black/25 px-4 py-5 backdrop-blur-sm sm:px-5 sm:py-6">
      <p className="mb-3 text-xs font-medium leading-snug text-white sm:text-sm">{label}</p>
      <p className={`text-2xl font-semibold tracking-tight sm:text-3xl md:text-4xl ${valueClassName}`}>
        {value}
      </p>
    </div>
  );
}

export function Hero() {
  const agentQueries = useUnevenAgentQueries(1032);

  return (
    <section
      aria-labelledby="hero-heading"
      className="hero-section relative min-h-[calc(100vh-5rem)] overflow-hidden border-b border-white/5"
    >
      <img
        src="/hero-manufacturing.png"
        alt=""
        aria-hidden
        width={1920}
        height={1080}
        className="absolute inset-0 h-full w-full object-cover object-center"
        loading="eager"
        fetchPriority="high"
      />
      <div className="pointer-events-none absolute inset-0 bg-black/35" aria-hidden />
      <div
        className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/25 via-black/30 to-black/45"
        aria-hidden
      />

      <div className="relative z-10 mx-auto flex min-h-[calc(100vh-5rem)] w-full max-w-[96rem] flex-col items-center justify-center px-4 py-16 text-center sm:px-6 lg:px-8 lg:py-24">
        <motion.h1
          id="hero-heading"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="hero-headline mx-auto mb-12 w-fit max-w-full text-center lg:mb-14"
        >
          <span className="hero-title-line">AI that listens and executes for you.</span>
          <span className="hero-title-line mt-2 md:mt-3">
            Purpose Built for Manufacturing Operations.
          </span>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.18, ease: 'easeOut' }}
          className="mb-12 w-full max-w-6xl"
        >
          <p className="mb-4 text-left text-sm font-medium tracking-wide text-white/75">
            For our customers:
          </p>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 xl:gap-5">
            <StatCard label="Agent queries" value={formatCount(agentQueries)} />
            {heroStats.map((stat) => (
              <StatCard key={stat.id} label={stat.label} value={stat.value} />
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.26, ease: 'easeOut' }}
          className="flex flex-col items-center justify-center gap-4 sm:flex-row"
        >
          <Link
            to="/book-demo"
            className="inline-flex min-w-[200px] items-center justify-center rounded-lg bg-white px-8 py-4 font-medium text-black transition-colors hover:bg-neutral-200"
          >
            Book a demo
            <ArrowRight className="ml-2 h-4 w-4" aria-hidden />
          </Link>
          <a
            href="#build-one-source-of-truth"
            className="inline-flex min-w-[200px] items-center justify-center rounded-lg border border-white/25 bg-white/10 px-8 py-4 font-medium text-white backdrop-blur-sm transition-colors hover:border-white/35 hover:bg-white/15"
          >
            Explore product
          </a>
        </motion.div>
      </div>
    </section>
  );
}
