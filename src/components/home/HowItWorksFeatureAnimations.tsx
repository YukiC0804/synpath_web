import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import {
  Activity,
  Bot,
  CheckCircle2,
  ClipboardList,
  Cog,
  Database,
  FileText,
  LayoutDashboard,
  Lock,
  MessageSquare,
  Sparkles,
  Table2,
  Users,
} from 'lucide-react';

function AnimationShell({
  label,
  children,
  aspectClass = 'aspect-[4/3]',
}: {
  label: string;
  children: React.ReactNode;
  aspectClass?: string;
}) {
  return (
    <div
      className="overflow-hidden rounded-[1.75rem] border border-white/10 bg-[#0d0d0d] shadow-[0_24px_80px_rgba(0,0,0,0.45)]"
      role="img"
      aria-label={label}
    >
      <div
        className={`relative w-full overflow-hidden bg-[radial-gradient(circle_at_50%_0%,rgba(255,255,255,0.06),transparent_55%)] p-4 sm:p-5 md:p-6 ${aspectClass}`}
      >
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:24px_24px] opacity-40" />
        {children}
      </div>
    </div>
  );
}

function PanelChrome({
  title,
  badge,
}: {
  title: string;
  badge?: string;
}) {
  return (
    <div className="mb-2 flex items-center justify-between gap-2 sm:mb-3">
      <div className="flex items-center gap-2">
        <span className="h-2 w-2 rounded-full bg-emerald-400/80" />
        <span className="text-[11px] font-medium uppercase tracking-[0.14em] text-white/45 sm:text-xs">
          {title}
        </span>
      </div>
      {badge ? (
        <span className="rounded-full border border-white/10 bg-white/[0.04] px-2 py-0.5 text-[10px] text-white/55 sm:text-[11px]">
          {badge}
        </span>
      ) : null}
    </div>
  );
}

const fragmentedSources = [
  { id: 'mes', label: 'MES', icon: Activity, top: '4%', left: '2%', floatDelay: 0 },
  { id: 'erp', label: 'ERP', icon: Database, top: '16%', left: '28%', floatDelay: 0.4 },
  { id: 'machine', label: 'Machine Data', icon: Cog, top: '30%', left: '0%', floatDelay: 0.8 },
  { id: 'paper', label: 'Paperwork', icon: FileText, top: '44%', left: '22%', floatDelay: 1.2 },
  { id: 'tribal', label: 'Tribal Knowledge', icon: Users, top: '58%', left: '4%', floatDelay: 0.6 },
  { id: 'excel', label: 'Excel', icon: Table2, top: '72%', left: '26%', floatDelay: 1.0 },
  { id: 'sop', label: 'SOPs', icon: ClipboardList, top: '86%', left: '8%', floatDelay: 1.4 },
] as const;

const hubLabels = ['Clean', 'Connect', 'Structure', 'Validate'] as const;

const truthInsights = [
  'Live production status',
  'Unified order data',
  'Accurate capacity view',
  'Planning decisions',
  'Team-wide visibility',
] as const;

const sourceLineYs = [8, 20, 34, 48, 62, 76, 90];

function FragmentedSourceCard({
  label,
  icon: Icon,
  top,
  left,
  floatDelay,
  index,
}: {
  label: string;
  icon: React.ComponentType<{ className?: string }>;
  top: string;
  left: string;
  floatDelay: number;
  index: number;
}) {
  return (
    <motion.div
      className="absolute z-10 max-w-[88%] rounded-xl border border-dashed border-white/20 bg-white/[0.04] px-2.5 py-2 shadow-[0_4px_24px_rgba(0,0,0,0.25)] backdrop-blur-sm sm:px-3 sm:py-2.5"
      style={{ top, left }}
      animate={{ y: [0, -5, 0], x: [0, index % 2 === 0 ? 2 : -2, 0] }}
      transition={{
        duration: 3.6 + floatDelay,
        repeat: Infinity,
        ease: 'easeInOut',
        delay: floatDelay,
      }}
    >
      <div className="flex items-center gap-2">
        <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-lg border border-white/10 bg-black/30">
          <Icon className="h-3 w-3 text-white/55" />
        </div>
        <span className="text-[10px] font-medium text-white/70 sm:text-[11px]">{label}</span>
      </div>
      <div className="mt-1.5 h-px w-full border-t border-dotted border-white/15" />
    </motion.div>
  );
}

function SynpathHub() {
  return (
    <div className="relative flex flex-col items-center justify-center py-4 lg:py-0">
      <div className="relative flex h-28 w-28 items-center justify-center sm:h-32 sm:w-32">
        <motion.div
          className="absolute inset-0 rounded-full bg-emerald-500/20 blur-2xl"
          animate={{ opacity: [0.25, 0.5, 0.25], scale: [0.92, 1.06, 0.92] }}
          transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute inset-2 rounded-full border border-emerald-400/20"
          animate={{ opacity: [0.35, 0.7, 0.35] }}
          transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut' }}
        />

        {hubLabels.map((label, index) => {
          const angle = (index / hubLabels.length) * Math.PI * 2 - Math.PI / 2;
          const radius = 58;
          const x = Math.cos(angle) * radius;
          const y = Math.sin(angle) * radius;

          return (
            <span
              key={label}
              className="absolute rounded-full border border-white/10 bg-black/50 px-1.5 py-0.5 text-[8px] font-medium uppercase tracking-[0.1em] text-white/45 sm:text-[9px]"
              style={{ transform: `translate(${x}px, ${y}px)` }}
            >
              {label}
            </span>
          );
        })}

        <div className="relative z-10 flex h-16 w-16 flex-col items-center justify-center rounded-full border border-emerald-400/40 bg-gradient-to-b from-emerald-500/20 to-emerald-500/5 shadow-[0_0_32px_rgba(52,211,153,0.25)] sm:h-[4.5rem] sm:w-[4.5rem]">
          <Sparkles className="mb-0.5 h-4 w-4 text-emerald-300" />
          <span className="text-[9px] font-semibold text-emerald-200 sm:text-[10px]">Synpath</span>
        </div>
      </div>
    </div>
  );
}

function FragmentedSourcesColumn() {
  return (
    <>
      <div className="grid grid-cols-2 gap-2 lg:hidden">
        {fragmentedSources.map((source) => {
          const Icon = source.icon;
          return (
            <motion.div
              key={source.id}
              className="rounded-xl border border-dashed border-white/20 bg-white/[0.04] px-2.5 py-2 backdrop-blur-sm"
              animate={{ y: [0, -4, 0] }}
              transition={{
                duration: 3.6 + source.floatDelay,
                repeat: Infinity,
                ease: 'easeInOut',
                delay: source.floatDelay,
              }}
            >
              <div className="flex items-center gap-2">
                <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-lg border border-white/10 bg-black/30">
                  <Icon className="h-3 w-3 text-white/55" />
                </div>
                <span className="text-[10px] font-medium text-white/70">{source.label}</span>
              </div>
              <div className="mt-1.5 h-px w-full border-t border-dotted border-white/15" />
            </motion.div>
          );
        })}
      </div>

      <div className="relative mt-5 hidden h-[calc(100%-1rem)] min-h-[17rem] lg:block">
        {fragmentedSources.map((source, index) => (
          <FragmentedSourceCard
            key={source.id}
            label={source.label}
            icon={source.icon}
            top={source.top}
            left={source.left}
            floatDelay={source.floatDelay}
            index={index}
          />
        ))}
      </div>
    </>
  );
}

function DesktopFlowOverlay() {
  return (
    <svg
      className="pointer-events-none absolute inset-0 z-0 hidden h-full w-full overflow-visible lg:block"
      viewBox="0 0 100 100"
      preserveAspectRatio="none"
      aria-hidden
    >
      {sourceLineYs.map((y, index) => (
        <g key={y}>
          <motion.path
            d={`M 18 ${y} C 36 ${y}, 44 50, 50 50`}
            fill="none"
            stroke="rgba(52,211,153,0.28)"
            strokeWidth="0.7"
            strokeLinecap="round"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 1, delay: index * 0.1 }}
          />
          <motion.circle
            r="0.9"
            fill="#34d399"
            animate={{ opacity: [0, 0.85, 0], offsetDistance: ['0%', '100%'] }}
            transition={{
              duration: 2.4,
              repeat: Infinity,
              delay: index * 0.35,
              ease: 'linear',
            }}
            style={{ offsetPath: `path("M 18 ${y} C 36 ${y}, 44 50, 50 50")` }}
          />
        </g>
      ))}
      <motion.path
        d="M 50 50 C 56 50, 64 50, 82 50"
        fill="none"
        stroke="rgba(52,211,153,0.45)"
        strokeWidth="0.8"
        strokeLinecap="round"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 0.8, delay: 0.5 }}
      />
      <motion.circle
        r="1"
        fill="#34d399"
        animate={{ opacity: [0, 1, 0], offsetDistance: ['0%', '100%'] }}
        transition={{ duration: 2, repeat: Infinity, ease: 'linear', delay: 0.8 }}
        style={{ offsetPath: 'path("M 50 50 C 56 50, 64 50, 82 50")' }}
      />
    </svg>
  );
}

function TruthPanel({ highlightIndex }: { highlightIndex: number }) {
  return (
    <motion.div
      className="relative overflow-hidden rounded-2xl border border-emerald-400/25 bg-gradient-to-br from-white/[0.07] to-white/[0.02] p-3 shadow-[0_8px_40px_rgba(0,0,0,0.35)] backdrop-blur-md sm:p-4"
      animate={{ boxShadow: ['0 8px 40px rgba(0,0,0,0.35)', '0 8px 48px rgba(52,211,153,0.12)', '0 8px 40px rgba(0,0,0,0.35)'] }}
      transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
    >
      <motion.div
        key={highlightIndex}
        className="pointer-events-none absolute inset-0 bg-gradient-to-r from-transparent via-emerald-400/10 to-transparent"
        initial={{ x: '-100%' }}
        animate={{ x: '100%' }}
        transition={{ duration: 1.2, ease: 'easeInOut' }}
      />

      <div className="relative mb-3 flex items-center justify-between gap-2 border-b border-white/10 pb-2.5">
        <div>
          <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-emerald-300/90 sm:text-[11px]">
            One Source of Truth
          </p>
          <p className="mt-0.5 text-[9px] text-white/45 sm:text-[10px]">Unified operating layer</p>
        </div>
        <div className="flex h-8 w-8 items-center justify-center rounded-lg border border-emerald-400/30 bg-emerald-500/10">
          <Lock className="h-3.5 w-3.5 text-emerald-300" />
        </div>
      </div>

      <ul className="relative space-y-1.5 sm:space-y-2">
        {truthInsights.map((item, index) => {
          const isActive = index === highlightIndex;

          return (
            <motion.li
              key={item}
              className={`flex items-center gap-2 rounded-lg border px-2.5 py-2 sm:px-3 ${
                isActive
                  ? 'border-emerald-400/35 bg-emerald-500/[0.08]'
                  : 'border-white/[0.08] bg-black/20'
              }`}
              animate={isActive ? { opacity: [0.85, 1, 0.85] } : { opacity: 0.9 }}
              transition={{ duration: 2.5, repeat: isActive ? Infinity : 0 }}
            >
              <CheckCircle2
                className={`h-3.5 w-3.5 shrink-0 ${isActive ? 'text-emerald-300' : 'text-white/35'}`}
              />
              <span className="text-[10px] font-medium text-white/80 sm:text-[11px]">{item}</span>
            </motion.li>
          );
        })}
      </ul>
    </motion.div>
  );
}

export function SourceOfTruthAnimation() {
  const [highlightIndex, setHighlightIndex] = useState(0);

  useEffect(() => {
    const interval = window.setInterval(() => {
      setHighlightIndex((current) => (current + 1) % truthInsights.length);
    }, 2500);
    return () => window.clearInterval(interval);
  }, []);

  return (
    <AnimationShell
      label="Connect fragmented manufacturing data into one reliable source of truth"
      aspectClass="min-h-[32rem] lg:min-h-0 lg:aspect-[16/10]"
    >
      <div className="relative flex h-full flex-col gap-8 lg:grid lg:grid-cols-[minmax(0,1fr)_9rem_minmax(0,1fr)] lg:items-center lg:gap-3">
        <DesktopFlowOverlay />

        <div className="relative z-10">
          <p className="mb-2 text-[9px] font-medium uppercase tracking-[0.14em] text-white/35">
            Fragmented sources
          </p>
          <FragmentedSourcesColumn />
        </div>

        <div className="relative z-10 flex flex-col items-center justify-center py-2">
          <SynpathHub />
          <div className="flex flex-col items-center gap-1 pt-3 lg:hidden">
            <motion.div
              className="h-6 w-px bg-gradient-to-b from-emerald-400/50 to-emerald-400/10"
              animate={{ opacity: [0.4, 1, 0.4] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
            <span className="text-[8px] uppercase tracking-[0.12em] text-white/35">Orchestrating</span>
            <motion.div
              className="h-6 w-px bg-gradient-to-b from-emerald-400/10 to-emerald-400/50"
              animate={{ opacity: [0.4, 1, 0.4] }}
              transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
            />
          </div>
        </div>

        <div className="relative z-10">
          <p className="mb-2 text-[9px] font-medium uppercase tracking-[0.14em] text-white/35">
            Trusted layer
          </p>
          <TruthPanel highlightIndex={highlightIndex} />
        </div>
      </div>
    </AnimationShell>
  );
}

const prompt = 'Build a WIP dashboard for Line 3 with late jobs highlighted';

export function AgentsToolsAnimation() {
  const [typed, setTyped] = useState('');
  const [showWidgets, setShowWidgets] = useState(false);

  useEffect(() => {
    let index = 0;
    let typingTimer = 0;
    let resetTimer = 0;

    const typeNext = () => {
      if (index <= prompt.length) {
        setTyped(prompt.slice(0, index));
        index += 1;
        typingTimer = window.setTimeout(typeNext, 28);
        return;
      }

      setShowWidgets(true);
      resetTimer = window.setTimeout(() => {
        index = 0;
        setTyped('');
        setShowWidgets(false);
        typingTimer = window.setTimeout(typeNext, 400);
      }, 2800);
    };

    typingTimer = window.setTimeout(typeNext, 500);

    return () => {
      window.clearTimeout(typingTimer);
      window.clearTimeout(resetTimer);
    };
  }, []);

  const widgets = [
    { id: 'dash', label: 'WIP Dashboard', icon: LayoutDashboard },
    { id: 'agent', label: 'Late Job Agent', icon: Bot },
    { id: 'alert', label: 'Escalation Rule', icon: Sparkles },
  ] as const;

  return (
    <AnimationShell
      label="Animated AI agent building operational tools from natural language"
      aspectClass="aspect-[4/3.6] sm:aspect-[4/3.3]"
    >
      <PanelChrome title="Agent Workspace" badge="Building" />

      <div className="flex h-[calc(100%-1.75rem)] flex-col gap-2">
        <div className="shrink-0 rounded-xl border border-white/10 bg-black/50 p-2 sm:rounded-2xl sm:p-2.5">
          <div className="mb-1 flex items-center gap-1.5 text-[9px] uppercase tracking-[0.12em] text-white/40 sm:text-[10px]">
            <MessageSquare className="h-3 w-3" />
            Natural language
          </div>
          <p className="min-h-[2rem] text-[11px] leading-snug text-white/80 sm:text-xs">
            {typed}
            <motion.span
              className="ml-0.5 inline-block h-3.5 w-0.5 bg-white/70 align-middle"
              animate={{ opacity: [1, 0, 1] }}
              transition={{ duration: 0.8, repeat: Infinity }}
            />
          </p>
        </div>

        <div className="grid min-h-0 flex-1 grid-cols-3 gap-1.5 sm:gap-2">
          {widgets.map((widget, index) => {
            const Icon = widget.icon;
            return (
              <motion.div
                key={widget.id}
                className="flex min-h-0 flex-col rounded-xl border border-white/10 bg-[#101010] p-2 sm:rounded-2xl"
                initial={{ opacity: 0, y: 12, scale: 0.96 }}
                animate={
                  showWidgets
                    ? { opacity: 1, y: 0, scale: 1 }
                    : { opacity: 0.35, y: 0, scale: 1 }
                }
                transition={{ duration: 0.45, delay: showWidgets ? index * 0.15 : 0 }}
              >
                <Icon className="mb-1 h-3.5 w-3.5 shrink-0 text-emerald-300/90" />
                <p className="shrink-0 text-[9px] font-medium leading-tight text-white/85 sm:text-[10px]">
                  {widget.label}
                </p>
                <div className="mt-1.5 flex min-h-0 flex-1 items-end">
                  <div className="flex h-6 w-full items-end gap-0.5 rounded-md bg-white/[0.04] px-1 pb-0.5 sm:h-7">
                    {[40, 65, 48, 80, 55].map((height, barIndex) => (
                      <motion.span
                        key={barIndex}
                        className="flex-1 rounded-sm bg-emerald-400/70"
                        style={{ height: `${height}%` }}
                        animate={showWidgets ? { opacity: [0.5, 1, 0.5] } : { opacity: 0.3 }}
                        transition={{
                          duration: 1.2,
                          delay: barIndex * 0.1,
                          repeat: showWidgets ? Infinity : 0,
                        }}
                      />
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </AnimationShell>
  );
}

const deploySteps = [
  { week: 'Week 1–2', label: 'AI data migration', progress: 35 },
  { week: 'Week 3–5', label: 'Customization & agents', progress: 70 },
  { week: 'Week 6–8', label: 'Go live & adoption', progress: 100 },
] as const;

export function GoLiveAnimation() {
  const [activeStep, setActiveStep] = useState(0);

  useEffect(() => {
    const interval = window.setInterval(() => {
      setActiveStep((current) => (current + 1) % (deploySteps.length + 1));
    }, 1800);
    return () => window.clearInterval(interval);
  }, []);

  const progress =
    activeStep >= deploySteps.length
      ? 100
      : deploySteps[activeStep].progress;

  return (
    <AnimationShell label="Animated rapid deployment timeline from migration to go-live">
      <PanelChrome title="Deployment Timeline" badge="3–8 weeks" />

      <div className="flex h-[calc(100%-2rem)] flex-col rounded-2xl border border-white/10 bg-black/40 p-3 sm:p-4">
        <div className="mb-4">
          <div className="mb-2 flex items-center justify-between text-[10px] text-white/50 sm:text-[11px]">
            <span>Overall progress</span>
            <motion.span
              key={progress}
              initial={{ opacity: 0, y: 4 }}
              animate={{ opacity: 1, y: 0 }}
              className="font-medium text-emerald-300"
            >
              {progress}%
            </motion.span>
          </div>
          <div className="h-2 overflow-hidden rounded-full bg-white/10">
            <motion.div
              className="h-full rounded-full bg-gradient-to-r from-emerald-500/80 to-emerald-300"
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.7, ease: 'easeOut' }}
            />
          </div>
        </div>

        <div className="space-y-2.5">
          {deploySteps.map((step, index) => {
            const isComplete = activeStep > index;
            const isActive = activeStep === index;

            return (
              <motion.div
                key={step.week}
                className={`flex items-center gap-3 rounded-xl border px-3 py-2.5 ${
                  isActive
                    ? 'border-emerald-400/35 bg-emerald-400/[0.06]'
                    : 'border-white/10 bg-white/[0.02]'
                }`}
                animate={isActive ? { scale: [1, 1.01, 1] } : { scale: 1 }}
                transition={{ duration: 1.4, repeat: isActive ? Infinity : 0 }}
              >
                <div
                  className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full border ${
                    isComplete
                      ? 'border-emerald-400/50 bg-emerald-400/15 text-emerald-300'
                      : isActive
                        ? 'border-white/25 bg-white/[0.04] text-white/70'
                        : 'border-white/10 bg-transparent text-white/35'
                  }`}
                >
                  {isComplete ? (
                    <CheckCircle2 className="h-4 w-4" />
                  ) : (
                    <span className="text-[11px] font-medium">{index + 1}</span>
                  )}
                </div>
                <div className="min-w-0 flex-1">
                  <p className="text-[10px] uppercase tracking-[0.12em] text-white/40 sm:text-[11px]">
                    {step.week}
                  </p>
                  <p className="truncate text-xs text-white/80 sm:text-sm">{step.label}</p>
                </div>
                {isActive ? (
                  <motion.span
                    className="rounded-full bg-emerald-400/15 px-2 py-0.5 text-[10px] text-emerald-300"
                    animate={{ opacity: [0.5, 1, 0.5] }}
                    transition={{ duration: 1.2, repeat: Infinity }}
                  >
                    In progress
                  </motion.span>
                ) : null}
              </motion.div>
            );
          })}
        </div>
      </div>
    </AnimationShell>
  );
}

const animationByFeatureId = {
  truth: SourceOfTruthAnimation,
  agents: AgentsToolsAnimation,
  deploy: GoLiveAnimation,
} as const;

export function HowItWorksFeatureAnimation({ featureId }: { featureId: keyof typeof animationByFeatureId }) {
  const Component = animationByFeatureId[featureId];
  return <Component />;
}
