import { motion } from 'framer-motion';
import { ArrowRight, Sparkles, Calendar, Layers } from 'lucide-react';
import { Link } from 'react-router-dom';

const workflowCards = [
  {
    id: 'planner',
    label: 'AI Production Planner',
    icon: Sparkles,
    position: 'top-[8%] left-[4%] md:top-[10%] md:left-[6%]',
    delay: 0.35,
  },
  {
    id: 'quote',
    label: 'Quote generated from CAD + BOM',
    icon: Layers,
    position: 'top-[34%] right-[2%] md:top-[30%] md:right-[4%]',
    delay: 0.5,
  },
  {
    id: 'capacity',
    label: 'Capacity checked across workcentres',
    icon: Calendar,
    position: 'bottom-[28%] left-[2%] md:bottom-[26%] md:left-[5%]',
    delay: 0.65,
  },
  {
    id: 'schedule',
    label: 'Schedule optimized',
    icon: Sparkles,
    position: 'bottom-[12%] right-[6%] md:bottom-[14%] md:right-[8%]',
    delay: 0.8,
  },
  {
    id: 'risk',
    label: 'Supplier / material risk flagged',
    icon: Layers,
    position: 'top-[68%] left-[18%] md:top-[64%] md:left-[22%]',
    delay: 0.95,
  },
] as const;

function WorkflowCard({
  label,
  icon: Icon,
  position,
  delay,
}: (typeof workflowCards)[number]) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12, scale: 0.96 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.55, delay, ease: 'easeOut' }}
      className={`absolute ${position} z-20 max-w-[12.5rem] sm:max-w-[14rem] md:max-w-[15rem]`}
    >
      <div className="rounded-xl border border-white/15 bg-black/55 px-3.5 py-3 shadow-[0_8px_32px_rgba(0,0,0,0.45)] backdrop-blur-md sm:px-4 sm:py-3.5">
        <div className="mb-2 flex items-center gap-2">
          <span className="flex h-7 w-7 items-center justify-center rounded-md bg-white/10">
            <Icon className="h-4 w-4 text-emerald-400" aria-hidden />
          </span>
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-400/90" aria-hidden />
        </div>
        <p className="text-xs font-medium leading-snug text-white sm:text-sm">{label}</p>
      </div>
    </motion.div>
  );
}

export function Hero() {
  return (
    <section
      aria-labelledby="hero-heading"
      className="relative overflow-hidden border-b border-white/5 pt-14 pb-20 md:pt-20 md:pb-28"
    >
      <div
        className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top_left,_rgba(64,80,120,0.22)_0%,_transparent_55%),radial-gradient(ellipse_at_bottom_right,_rgba(30,40,60,0.18)_0%,_transparent_50%)]"
        aria-hidden
      />
      <div className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-b from-neutral-900/40 via-black to-black" aria-hidden />

      <div className="mx-auto max-w-[88rem] px-4 sm:px-6 lg:px-10">
        <motion.h1
          id="hero-heading"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="mb-12 text-center text-4xl font-semibold tracking-tighter text-white md:mb-16 md:text-5xl lg:text-6xl xl:text-7xl"
        >
          <span className="block">AI Automation</span>
          <span className="block">for Manufacturing Operation</span>
        </motion.h1>

        <div className="grid items-center gap-12 lg:grid-cols-[minmax(0,0.92fr)_minmax(0,1.18fr)] lg:gap-14 xl:gap-20">
          <div className="text-left lg:pr-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1, ease: 'easeOut' }}
              className="mb-10 max-w-xl space-y-4 text-lg leading-relaxed text-white md:text-xl"
            >
              <p>Synpath trains custom AI agents that runs your plant with real time data.</p>
              <p>Machines, software, paperwork, tribal knowledge, all connected.</p>
              <p>No rip-and-replace. No Firefighting</p>
              <p>We&apos;ve saved our customers millions in avoided staff costs.</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2, ease: 'easeOut' }}
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
                className="inline-flex min-w-[200px] items-center justify-center rounded-lg border border-white/15 bg-white/5 px-8 py-4 font-medium text-white transition-colors hover:border-white/25 hover:bg-white/10"
              >
                Explore product
              </a>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.75, delay: 0.15, ease: 'easeOut' }}
            className="relative w-full lg:min-h-[32rem] xl:min-h-[36rem]"
          >
            <div className="relative aspect-[5/4] w-full min-h-[18rem] overflow-hidden rounded-2xl border border-white/10 bg-neutral-950 shadow-[0_28px_96px_rgba(0,0,0,0.6)] sm:min-h-[22rem] lg:aspect-auto lg:h-full lg:min-h-[32rem] xl:min-h-[36rem]">
              <img
                src="/hero-manufacturing.png"
                alt="Precision CNC machining and robotic production line in a modern manufacturing facility"
                width={1200}
                height={900}
                className="h-full w-full object-cover object-center"
                loading="eager"
                fetchPriority="high"
              />
              <div
                className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-black/55 via-transparent to-black/20"
                aria-hidden
              />
              <div
                className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:28px_28px] opacity-30"
                aria-hidden
              />

              {workflowCards.map((card) => (
                <WorkflowCard key={card.id} {...card} />
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
