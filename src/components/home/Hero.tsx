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

export function Hero() {
  return (
    <section
      aria-labelledby="hero-heading"
      className="relative min-h-[calc(100vh-5rem)] overflow-hidden border-b border-white/5"
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
      <div
        className="pointer-events-none absolute inset-0 bg-black/35"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/25 via-black/30 to-black/45"
        aria-hidden
      />

      <div className="relative z-10 mx-auto flex min-h-[calc(100vh-5rem)] max-w-5xl flex-col items-center justify-center px-4 py-16 text-center sm:px-6 lg:px-8 lg:py-24">
        <motion.h1
          id="hero-heading"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="mb-6 max-w-4xl text-4xl font-semibold tracking-tighter text-white md:text-5xl lg:mb-8 lg:text-6xl xl:text-7xl"
        >
          AI that listens and executes for you.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1, ease: 'easeOut' }}
          className="mb-12 max-w-3xl text-xl font-medium tracking-tight text-white md:text-2xl lg:mb-14 lg:text-3xl"
        >
          Purpose Built for Manufacturing Operations
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.18, ease: 'easeOut' }}
          className="mb-12 grid w-full max-w-3xl grid-cols-1 gap-4 sm:grid-cols-3 sm:gap-6"
        >
          {heroStats.map((stat) => (
            <div
              key={stat.id}
              className="rounded-2xl border border-white/20 bg-black/25 px-5 py-6 backdrop-blur-sm"
            >
              <p className="mb-3 text-sm font-medium leading-snug text-white md:text-base">
                {stat.label}
              </p>
              <p className="text-3xl font-semibold tracking-tight text-emerald-400 md:text-4xl">
                {stat.value}
              </p>
            </div>
          ))}
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
            href="#platform-capabilities"
            className="inline-flex min-w-[200px] items-center justify-center rounded-lg border border-white/25 bg-white/10 px-8 py-4 font-medium text-white backdrop-blur-sm transition-colors hover:border-white/35 hover:bg-white/15"
          >
            Explore product
          </a>
        </motion.div>
      </div>
    </section>
  );
}
