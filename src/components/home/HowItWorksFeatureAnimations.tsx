import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import {
  Activity,
  Bot,
  CheckCircle2,
  Database,
  FileText,
  LayoutDashboard,
  MessageSquare,
  Radio,
  Sparkles,
} from 'lucide-react';

function AnimationShell({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div
      className="overflow-hidden rounded-[1.75rem] border border-white/10 bg-[#0d0d0d] shadow-[0_24px_80px_rgba(0,0,0,0.45)]"
      role="img"
      aria-label={label}
    >
      <div className="relative aspect-[4/3] w-full overflow-hidden bg-[radial-gradient(circle_at_50%_0%,rgba(255,255,255,0.06),transparent_55%)] p-4 sm:p-5 md:p-6">
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
    <div className="mb-3 flex items-center justify-between gap-2">
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

const fadeUp = {
  initial: { opacity: 0, y: 10 },
  animate: { opacity: 1, y: 0 },
};

export function LearnOperationsAnimation() {
  const nodes = [
    { id: 'orders', label: 'Order Entry', x: 14, y: 22, gap: false },
    { id: 'plan', label: 'Planning', x: 50, y: 12, gap: true },
    { id: 'prod', label: 'Production', x: 86, y: 24, gap: false },
    { id: 'inv', label: 'Inventory', x: 28, y: 72, gap: true },
    { id: 'qual', label: 'Quality', x: 72, y: 74, gap: false },
  ] as const;

  const edges = [
    ['orders', 'plan'],
    ['plan', 'prod'],
    ['orders', 'inv'],
    ['prod', 'qual'],
    ['inv', 'qual'],
  ] as const;

  const nodeById = Object.fromEntries(nodes.map((node) => [node.id, node]));

  return (
    <AnimationShell label="Animated operations mapping and process discovery">
      <PanelChrome title="Operations Discovery" badge="Live scan" />

      <div className="relative h-[calc(100%-2rem)] rounded-2xl border border-white/10 bg-black/40 p-3 sm:p-4">
        <motion.p
          className="mb-3 text-xs text-white/55 sm:text-sm"
          animate={{ opacity: [0.45, 1, 0.45] }}
          transition={{ duration: 2.4, repeat: Infinity, ease: 'easeInOut' }}
        >
          Mapping processes, data gaps, and automation opportunities...
        </motion.p>

        <div className="relative h-[78%]">
          <svg className="absolute inset-0 h-full w-full" viewBox="0 0 100 100" preserveAspectRatio="none">
            {edges.map(([from, to], index) => {
              const a = nodeById[from];
              const b = nodeById[to];
              return (
                <motion.line
                  key={`${from}-${to}`}
                  x1={a.x}
                  y1={a.y}
                  x2={b.x}
                  y2={b.y}
                  stroke="rgba(255,255,255,0.14)"
                  strokeWidth="0.35"
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={{ pathLength: 1, opacity: 1 }}
                  transition={{
                    duration: 0.8,
                    delay: 0.2 + index * 0.15,
                    repeat: Infinity,
                    repeatDelay: 4.2,
                    repeatType: 'loop',
                  }}
                />
              );
            })}
          </svg>

          {nodes.map((node, index) => (
            <motion.div
              key={node.id}
              className="absolute -translate-x-1/2 -translate-y-1/2"
              style={{ left: `${node.x}%`, top: `${node.y}%` }}
              initial={{ opacity: 0, scale: 0.85 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 0.45,
                delay: index * 0.12,
                repeat: Infinity,
                repeatDelay: 4.8,
              }}
            >
              <div className="relative rounded-xl border border-white/15 bg-[#111] px-2.5 py-1.5 text-[10px] text-white/85 shadow-lg sm:px-3 sm:py-2 sm:text-[11px]">
                {node.label}
                {node.gap ? (
                  <motion.span
                    className="absolute -right-1 -top-1 h-2.5 w-2.5 rounded-full bg-amber-400"
                    animate={{ scale: [1, 1.35, 1], opacity: [0.7, 1, 0.7] }}
                    transition={{ duration: 1.6, repeat: Infinity }}
                  />
                ) : null}
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-2 flex flex-wrap gap-2">
          {['2 data gaps', '3 bottlenecks', '5 automation targets'].map((item, index) => (
            <motion.span
              key={item}
              className="rounded-full border border-white/10 bg-white/[0.03] px-2 py-1 text-[10px] text-white/60 sm:text-[11px]"
              {...fadeUp}
              transition={{
                duration: 0.35,
                delay: 1.2 + index * 0.2,
                repeat: Infinity,
                repeatDelay: 4.5,
              }}
            >
              {item}
            </motion.span>
          ))}
        </div>
      </div>
    </AnimationShell>
  );
}

const sources = [
  { id: 'sensors', label: 'Sensors', icon: Radio },
  { id: 'mes', label: 'Machine Data', icon: Activity },
  { id: 'erp', label: 'ERP', icon: Database },
  { id: 'paper', label: 'Paperwork', icon: FileText },
] as const;

export function SourceOfTruthAnimation() {
  const [rowCount, setRowCount] = useState(0);
  const rows = [
    ['WO-1842', 'Line 3', 'In Progress'],
    ['PO-9921', 'Raw Materials', 'Received'],
    ['NC-044', 'Quality Hold', 'Review'],
  ] as const;

  useEffect(() => {
    let index = 0;
    const interval = window.setInterval(() => {
      index = (index + 1) % (rows.length + 2);
      setRowCount(index);
    }, 1100);
    return () => window.clearInterval(interval);
  }, [rows.length]);

  return (
    <AnimationShell label="Animated unified data layer connecting operational sources">
      <PanelChrome title="Unified Operating Layer" badge="Syncing" />

      <div className="grid h-[calc(100%-2rem)] grid-cols-[1fr_auto_1.2fr] items-center gap-2 sm:gap-3">
        <div className="flex flex-col gap-2">
          {sources.map((source, index) => {
            const Icon = source.icon;
            return (
              <motion.div
                key={source.id}
                className="flex items-center gap-2 rounded-xl border border-white/10 bg-black/50 px-2 py-2 sm:px-2.5"
                animate={{ borderColor: ['rgba(255,255,255,0.1)', 'rgba(52,211,153,0.35)', 'rgba(255,255,255,0.1)'] }}
                transition={{
                  duration: 1.8,
                  delay: index * 0.25,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
              >
                <Icon className="h-3.5 w-3.5 text-white/55" />
                <span className="text-[10px] text-white/75 sm:text-[11px]">{source.label}</span>
              </motion.div>
            );
          })}
        </div>

        <div className="relative flex h-full flex-col items-center justify-center">
          {[0, 1, 2, 3].map((index) => (
            <motion.span
              key={index}
              className="absolute h-1 w-1 rounded-full bg-emerald-400/80"
              animate={{ x: [0, 18, 36], opacity: [0, 1, 0] }}
              transition={{
                duration: 1.4,
                delay: index * 0.3,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            />
          ))}
          <motion.div
            className="z-10 flex h-14 w-14 items-center justify-center rounded-2xl border border-emerald-400/30 bg-emerald-400/10 sm:h-16 sm:w-16"
            animate={{ boxShadow: ['0 0 0 rgba(52,211,153,0)', '0 0 24px rgba(52,211,153,0.25)', '0 0 0 rgba(52,211,153,0)'] }}
            transition={{ duration: 2.2, repeat: Infinity }}
          >
            <Database className="h-5 w-5 text-emerald-300" />
          </motion.div>
        </div>

        <div className="overflow-hidden rounded-2xl border border-white/10 bg-black/50">
          <div className="border-b border-white/10 px-2 py-1.5 text-[10px] uppercase tracking-[0.12em] text-white/45 sm:text-[11px]">
            Single source of truth
          </div>
          <table className="w-full text-left text-[10px] sm:text-[11px]">
            <thead>
              <tr className="text-white/40">
                <th className="px-2 py-1.5 font-medium">Record</th>
                <th className="px-2 py-1.5 font-medium">Area</th>
                <th className="px-2 py-1.5 font-medium">Status</th>
              </tr>
            </thead>
            <tbody>
              {rows.map((row, index) => (
                <AnimatePresence key={row[0]}>
                  {index < rowCount ? (
                    <motion.tr
                      key={row[0]}
                      initial={{ opacity: 0, x: 8 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0 }}
                      className="border-t border-white/5 text-white/75"
                    >
                      <td className="px-2 py-1.5">{row[0]}</td>
                      <td className="px-2 py-1.5">{row[1]}</td>
                      <td className="px-2 py-1.5 text-emerald-300/90">{row[2]}</td>
                    </motion.tr>
                  ) : null}
                </AnimatePresence>
              ))}
            </tbody>
          </table>
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
    <AnimationShell label="Animated AI agent building operational tools from natural language">
      <PanelChrome title="Agent Workspace" badge="Building" />

      <div className="grid h-[calc(100%-2rem)] grid-rows-[auto_1fr] gap-3">
        <div className="rounded-2xl border border-white/10 bg-black/50 p-3">
          <div className="mb-2 flex items-center gap-2 text-[10px] uppercase tracking-[0.12em] text-white/40 sm:text-[11px]">
            <MessageSquare className="h-3.5 w-3.5" />
            Natural language
          </div>
          <p className="min-h-[2.5rem] text-xs leading-relaxed text-white/80 sm:text-sm">
            {typed}
            <motion.span
              className="ml-0.5 inline-block h-4 w-0.5 bg-white/70 align-middle"
              animate={{ opacity: [1, 0, 1] }}
              transition={{ duration: 0.8, repeat: Infinity }}
            />
          </p>
        </div>

        <div className="grid grid-cols-3 gap-2">
          {widgets.map((widget, index) => {
            const Icon = widget.icon;
            return (
              <motion.div
                key={widget.id}
                className="flex flex-col justify-between rounded-2xl border border-white/10 bg-[#101010] p-2.5 sm:p-3"
                initial={{ opacity: 0, y: 16, scale: 0.96 }}
                animate={
                  showWidgets
                    ? { opacity: 1, y: 0, scale: 1 }
                    : { opacity: 0.35, y: 0, scale: 1 }
                }
                transition={{ duration: 0.45, delay: showWidgets ? index * 0.15 : 0 }}
              >
                <Icon className="h-4 w-4 text-emerald-300/90" />
                <div>
                  <p className="text-[10px] font-medium text-white/85 sm:text-[11px]">{widget.label}</p>
                  <motion.div
                    className="mt-2 h-8 rounded-lg bg-white/[0.04]"
                    animate={showWidgets ? { opacity: [0.4, 1, 0.7] } : { opacity: 0.25 }}
                    transition={{ duration: 1.6, repeat: showWidgets ? Infinity : 0 }}
                  >
                    <div className="flex h-full items-end gap-1 px-1.5 pb-1">
                      {[40, 65, 48, 80, 55].map((height, barIndex) => (
                        <motion.span
                          key={barIndex}
                          className="w-1 rounded-sm bg-emerald-400/70"
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
                  </motion.div>
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
  learn: LearnOperationsAnimation,
  truth: SourceOfTruthAnimation,
  agents: AgentsToolsAnimation,
  deploy: GoLiveAnimation,
} as const;

export function HowItWorksFeatureAnimation({ featureId }: { featureId: keyof typeof animationByFeatureId }) {
  const Component = animationByFeatureId[featureId];
  return <Component />;
}
