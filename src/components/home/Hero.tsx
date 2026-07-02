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
        className="pointer-events-none absolute inset-0 bg-gradient-to-r from-black/80 via-black/65 to-black/55"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/85 via-transparent to-black/40"
        aria-hidden
      />

      <div className="relative z-10 mx-auto flex min-h-[calc(100vh-5rem)] max-w-[88rem] items-center px-4 py-16 sm:px-6 lg:px-10 lg:py-24">
        <div className="w-full max-w-4xl text-left">
          <motion.h1
            id="hero-heading"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            className="mb-5 text-4xl font-semibold tracking-tighter text-white md:text-5xl lg:text-6xl xl:text-7xl"
          >
            AI that listens and executes for you.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.08, ease: 'easeOut' }}
            className="mb-8 max-w-2xl text-lg leading-relaxed text-white/90 md:text-xl lg:mb-10"
          >
            Runs your factory with real time data.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.14, ease: 'easeOut' }}
            className="mb-10 max-w-3xl text-xl font-medium tracking-tight text-white md:text-2xl lg:mb-12 lg:text-3xl"
          >
            Purpose Built for Manufacturing Operations
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: 'easeOut' }}
            className="mb-12 grid max-w-3xl grid-cols-1 gap-4 sm:grid-cols-3"
          >
            {heroStats.map((stat) => (
              <div
                key={stat.id}
                className="rounded-2xl border border-white/15 bg-black/40 px-5 py-5 backdrop-blur-md"
              >
                <p className="mb-3 text-sm font-medium leading-snug text-white/85">{stat.label}</p>
                <p className="text-3xl font-semibold tracking-tight text-emerald-400 md:text-4xl">
                  {stat.value}
                </p>
              </div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.28, ease: 'easeOut' }}
            className="flex flex-col gap-4 sm:flex-row sm:items-center"
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
              className="inline-flex min-w-[200px] items-center justify-center rounded-lg border border-white/20 bg-white/10 px-8 py-4 font-medium text-white backdrop-blur-sm transition-colors hover:border-white/30 hover:bg-white/15"
            >
              Explore product
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
