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

const sources = [
  { id: 'machines', label: 'Machines', icon: Cog },
  { id: 'erp', label: 'ERP', icon: Database },
  { id: 'mes', label: 'MES', icon: Activity },
  { id: 'sheets', label: 'Spreadsheets', icon: Table2 },
  { id: 'paper', label: 'Paperwork', icon: FileText },
  { id: 'tribal', label: 'Tribal Knowledge', icon: Users },
  { id: 'sop', label: 'SOPs', icon: ClipboardList },
] as const;

const truthRows = [
  ['WO-1842', 'Work Orders', 'Running'],
  ['INV-208', 'Inventory', 'Available'],
  ['NC-044', 'Quality', 'Review'],
  ['PO-9921', 'Procurement', 'Running'],
  ['MRP-118', 'Planning', 'Scheduled'],
  ['SO-3310', 'Shipping', 'Synced'],
  ['BOM-552', 'Engineering', 'Released'],
  ['LOT-903', 'Traceability', 'Synced'],
  ['QC-077', 'Inspection', 'Review'],
  ['AGT-014', 'Automation', 'Running'],
] as const;

export function SourceOfTruthAnimation() {
  const sourceCount = sources.length;
  const hubY = 50;

  return (
    <AnimationShell
      label="Synpath unifies fragmented manufacturing data into one operating layer"
      aspectClass="aspect-[5/4] sm:aspect-[4/3.15]"
    >
      <PanelChrome title="Synpath Data Layer" badge="Unified" />

      <div className="relative h-[calc(100%-1.75rem)]">
        <div className="grid h-full grid-cols-[minmax(0,0.68fr)_56px_minmax(0,1.32fr)] items-center gap-2">
          <div className="relative z-10 flex h-full flex-col justify-center gap-1">
            {sources.map((source) => {
              const Icon = source.icon;

              return (
                <div
                  key={source.id}
                  className="flex items-center gap-1.5 rounded-lg border border-emerald-400/30 bg-emerald-500/[0.07] px-1.5 py-1"
                >
                  <Icon className="h-2.5 w-2.5 shrink-0 text-emerald-300" />
                  <span className="text-[8px] leading-tight text-white/85 sm:text-[9px]">{source.label}</span>
                </div>
              );
            })}
          </div>

          <div className="relative flex h-full items-center justify-center overflow-visible">
            <svg
              className="pointer-events-none absolute right-1/2 top-0 h-full w-[120%] overflow-visible"
              viewBox="0 0 100 100"
              preserveAspectRatio="none"
              aria-hidden
            >
              {sources.map((source, index) => {
                const sourceY = 8 + (index / (sourceCount - 1)) * 84;
                return (
                  <motion.path
                    key={source.id}
                    d={`M 0 ${sourceY} C 36 ${sourceY}, 60 ${hubY}, 100 ${hubY}`}
                    fill="none"
                    stroke="rgba(52,211,153,0.45)"
                    strokeWidth="1.2"
                    strokeLinecap="round"
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={{ pathLength: 1, opacity: 0.7 }}
                    transition={{ duration: 0.65, delay: index * 0.07 }}
                  />
                );
              })}
            </svg>

            <div className="relative z-10 flex flex-col items-center">
              <motion.div
                className="pointer-events-none absolute h-16 w-16 rounded-full bg-emerald-500/20 blur-xl"
                animate={{ opacity: [0.3, 0.55, 0.3] }}
                transition={{ duration: 2.8, repeat: Infinity }}
              />
              <div className="relative flex h-10 w-10 items-center justify-center rounded-xl border border-emerald-400/40 bg-emerald-400/15 shadow-[0_0_20px_rgba(52,211,153,0.2)] sm:h-11 sm:w-11">
                <Database className="h-4 w-4 text-emerald-300" />
              </div>
              <span className="mt-1 text-[7px] font-medium uppercase tracking-[0.12em] text-emerald-300/90">
                Synpath
              </span>
              <motion.div
                className="absolute left-full top-1/2 h-[1.5px] w-3 -translate-y-1/2 bg-emerald-400/70"
                initial={{ scaleX: 0, opacity: 0 }}
                animate={{ scaleX: 1, opacity: 0.85 }}
                transition={{ duration: 0.45, delay: 0.55 }}
                style={{ transformOrigin: 'left center' }}
              />
            </div>
          </div>

          <div className="flex min-h-0 flex-col overflow-hidden rounded-xl border border-white/10 bg-[#0a0a0a]">
            <div className="shrink-0 border-b border-white/10 px-2 py-1.5 text-[9px] uppercase tracking-[0.12em] text-white/45 sm:text-[10px]">
              Single Source of Truth
            </div>
            <div className="min-h-0 flex-1 overflow-y-auto">
              <table className="w-full text-left text-[8px] sm:text-[9px]">
                <thead className="sticky top-0 z-10 bg-[#0a0a0a]">
                  <tr className="text-white/40">
                    <th className="px-2 py-1 font-medium">Record</th>
                    <th className="px-2 py-1 font-medium">Domain</th>
                    <th className="px-2 py-1 font-medium">Status</th>
                  </tr>
                </thead>
                <tbody>
                  {truthRows.map((row) => (
                    <tr key={row[0]} className="border-t border-white/5 text-white/75">
                      <td className="px-2 py-0.5 sm:py-1">{row[0]}</td>
                      <td className="px-2 py-0.5 sm:py-1">{row[1]}</td>
                      <td className="px-2 py-0.5 text-emerald-300/90 sm:py-1">{row[2]}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
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
