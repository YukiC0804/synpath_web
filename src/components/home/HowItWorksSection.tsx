import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Bot, Link2, Settings2, ShieldCheck } from 'lucide-react';

const steps = [
  {
    id: 'connect',
    label: 'Connect systems',
    title: 'Connect your operational systems',
    description:
      'Plug Synpath into your ERP, shop-floor systems, spreadsheets, and tribal knowledge without ripping out what already works.',
    icon: Link2,
  },
  {
    id: 'rules',
    label: 'Define rules',
    title: 'Define how your plant runs',
    description:
      'Capture policies, workflows, and business rules in plain language so agents understand your real operating reality.',
    icon: Settings2,
  },
  {
    id: 'execute',
    label: 'Agents execute',
    title: 'Agents listen and execute',
    description:
      'Custom AI agents monitor live data, make decisions, and run operational work across planning, production, and support flows.',
    icon: Bot,
  },
  {
    id: 'review',
    label: 'Review & improve',
    title: 'Review exceptions and improve',
    description:
      'Stay in control with supervision, exception handling, and continuous refinement as your operations evolve.',
    icon: ShieldCheck,
  },
] as const;

function StepDemo({ stepIndex }: { stepIndex: number }) {
  const step = steps[stepIndex];
  const Icon = step.icon;

  return (
    <div className="flex h-full min-h-[320px] flex-col justify-between p-6 md:min-h-[380px] md:p-8">
      <div>
        <p className="mb-3 text-xs font-medium uppercase tracking-[0.2em] text-white/55">
          Step {stepIndex + 1}
        </p>
        <h3 className="mb-4 max-w-xl text-2xl font-medium tracking-tight text-white md:text-3xl">
          {step.title}
        </h3>
        <p className="max-w-2xl text-sm leading-relaxed text-white/70 md:text-base">
          {step.description}
        </p>
      </div>

      <div className="mt-8 rounded-2xl border border-white/10 bg-white/[0.03] p-6 md:p-8">
        <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl border border-white/10 bg-white/5">
          <Icon className="h-6 w-6 text-white" strokeWidth={1.5} aria-hidden />
        </div>
        <p className="text-sm text-white/55">Demo preview placeholder</p>
        <p className="mt-2 max-w-lg text-base text-white/80">
          Replace this panel with screenshots, workflow UI, or product demos for this step.
        </p>
      </div>
    </div>
  );
}

export function HowItWorksSection() {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <section
      id="how-it-works"
      aria-labelledby="how-it-works-heading"
      className="border-t border-white/5 bg-neutral-950 py-20 md:py-24 lg:py-28"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 max-w-3xl">
          <p className="mb-3 text-sm font-medium uppercase tracking-[0.18em] text-white/55">
            How it works
          </p>
          <h2
            id="how-it-works-heading"
            className="text-3xl font-medium tracking-tight text-white md:text-4xl lg:text-5xl"
          >
            From trigger to outcome.
          </h2>
        </div>

        <div className="mx-auto mb-8 w-full max-w-5xl overflow-hidden rounded-2xl border border-white/10 bg-[#0b0b0b]">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeStep}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.3, ease: 'easeOut' }}
            >
              <StepDemo stepIndex={activeStep} />
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="flex flex-wrap justify-center gap-3 px-2">
          {steps.map((step, index) => (
            <button
              key={step.id}
              type="button"
              onClick={() => setActiveStep(index)}
              className={`rounded-full border px-6 py-2.5 text-sm font-medium whitespace-nowrap transition-all duration-300 ${
                activeStep === index
                  ? 'border-white bg-white text-black shadow-[0_0_15px_rgba(255,255,255,0.12)]'
                  : 'border-white/10 bg-black/40 text-white/75 hover:border-white/25 hover:bg-white/5 hover:text-white'
              }`}
            >
              {step.label}
            </button>
          ))}
        </div>

        <div className="mt-14 grid grid-cols-1 gap-8 border-t border-white/10 pt-12 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, index) => (
            <button
              key={`${step.id}-summary`}
              type="button"
              onClick={() => setActiveStep(index)}
              className="text-left transition-opacity hover:opacity-90"
            >
              <p className="mb-3 text-xs font-medium uppercase tracking-[0.18em] text-white/45">
                Step {index + 1}
              </p>
              <h3 className="mb-3 text-lg font-medium text-white">{step.label}</h3>
              <p className="text-sm leading-relaxed text-white/65">{step.description}</p>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
