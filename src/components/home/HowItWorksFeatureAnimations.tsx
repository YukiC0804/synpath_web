import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import {
  Activity,
  Bot,
  BrainCircuit,
  CheckCircle2,
  ClipboardList,
  Database,
  FileText,
  LayoutDashboard,
  MessageSquare,
  Package,
  Pencil,
  Radio,
  ShoppingCart,
  Sparkles,
  Truck,
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

function ProcessCardHeader({ title }: { title: string }) {
  return (
    <div className="mb-1 flex items-center justify-between gap-1 border-b border-white/10 pb-1">
      <p className="text-[9px] font-semibold text-white sm:text-[10px]">{title}</p>
      <Pencil className="h-2.5 w-2.5 text-white/35" />
    </div>
  );
}

function AgentTag({
  label,
  icon: Icon,
  tone = 'purple',
}: {
  label: string;
  icon: React.ComponentType<{ className?: string }>;
  tone?: 'purple' | 'orange';
}) {
  const tones = {
    purple: 'border-violet-500/30 bg-violet-500/10 text-violet-300',
    orange: 'border-amber-500/30 bg-amber-500/10 text-amber-300',
  };

  return (
    <span
      className={`inline-flex items-center gap-0.5 rounded border px-1 py-0.5 text-[7px] font-medium sm:text-[8px] ${tones[tone]}`}
    >
      <Icon className="h-2 w-2" />
      {label}
    </span>
  );
}

export function LearnOperationsAnimation() {
  const [phase, setPhase] = useState(0);

  useEffect(() => {
    const interval = window.setInterval(() => {
      setPhase((current) => (current + 1) % 5);
    }, 1500);
    return () => window.clearInterval(interval);
  }, []);

  const showConnection = phase >= 3;
  const pulseTarget = phase >= 4;

  const manufacturingSteps = [
    'Frame welding',
    'Electrical setup',
    'Electrical testing',
    'Case assembly',
  ];

  return (
    <AnimationShell
      label="Animated manufacturing and sales process mapping"
      aspectClass="aspect-[4/3.55] sm:aspect-[4/3.35]"
    >
      <div className="relative h-full origin-center scale-[0.92] sm:scale-[0.94]">
        <div className="grid h-full grid-cols-2 gap-1.5 sm:gap-2">
          <motion.div
            className="flex min-h-0 flex-col rounded-lg border border-white/10 bg-[#101010] p-1.5 shadow-[0_8px_32px_rgba(0,0,0,0.35)] sm:rounded-xl sm:p-2"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <ProcessCardHeader title="Manufacturing order" />

            <div className="min-h-0 flex-1 space-y-0.5">
              <motion.div
                className="rounded-md border border-emerald-500/25 bg-[#0a0a0a] p-1.5"
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: phase >= 0 ? 1 : 0, y: 0 }}
              >
                <span className="mb-0.5 inline-block rounded-full bg-emerald-500/15 px-1.5 py-0.5 text-[7px] font-medium text-emerald-300 sm:text-[8px]">
                  Components preparation
                </span>
                <p className="text-[7px] leading-snug text-white/55 sm:text-[8px]">
                  Check stock and create a procurement order if needed.
                </p>
                <div className="mt-1">
                  <AgentTag label="Procurement agent" icon={ShoppingCart} />
                </div>
              </motion.div>

              {manufacturingSteps.map((step, index) => (
                <motion.div
                  key={step}
                  className="rounded border border-white/[0.06] bg-white/[0.03] px-1.5 py-0.5 text-center text-[7px] font-medium text-emerald-300/90 sm:text-[8px]"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: phase >= 1 ? 1 : 0 }}
                  transition={{ delay: index * 0.07 }}
                >
                  {step}
                </motion.div>
              ))}

              <motion.div
                className={`relative rounded-md border px-1.5 py-1 text-center text-[7px] font-medium sm:text-[8px] ${
                  showConnection
                    ? 'border-emerald-400/60 bg-emerald-500/[0.08] text-emerald-200'
                    : 'border-white/10 bg-white/[0.03] text-white/85'
                }`}
                animate={showConnection ? { scale: [1, 1.015, 1] } : { scale: 1 }}
                transition={{ duration: 1.2, repeat: showConnection ? Infinity : 0 }}
              >
                Add to stock
                {showConnection ? (
                  <span className="absolute -right-0.5 top-1/2 h-1.5 w-1.5 -translate-y-1/2 rounded-full bg-emerald-400" />
                ) : null}
              </motion.div>
            </div>

            <div className="mt-1 rounded-md bg-white/[0.06] py-1 text-center text-[7px] font-medium text-white/40 sm:text-[8px]">
              Done
            </div>
          </motion.div>

          <motion.div
            className="flex min-h-0 flex-col rounded-lg border border-white/10 bg-[#101010] p-1.5 shadow-[0_8px_32px_rgba(0,0,0,0.35)] sm:rounded-xl sm:p-2"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.12 }}
          >
            <ProcessCardHeader title="Sales order process" />

            <div className="min-h-0 flex-1 space-y-0.5">
              <motion.div
                className="rounded-md border border-white/[0.08] bg-[#0a0a0a] p-1.5"
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: phase >= 1 ? 1 : 0, y: 0 }}
              >
                <div className="mb-0.5 flex items-center gap-1">
                  <Truck className="h-2 w-2 text-amber-400" />
                  <span className="rounded-full bg-amber-500/15 px-1.5 py-0.5 text-[7px] font-medium text-amber-300 sm:text-[8px]">
                    Shipment creation
                  </span>
                </div>
                <p className="text-[7px] leading-snug text-white/55 sm:text-[8px]">
                  Create the shipment record based on the validated sales order.
                </p>
              </motion.div>

              <motion.div
                className={`relative rounded-md border bg-[#0a0a0a] p-1.5 ${
                  pulseTarget
                    ? 'border-emerald-400/55 bg-emerald-500/[0.06]'
                    : 'border-white/[0.08]'
                }`}
                animate={pulseTarget ? { scale: [1, 1.015, 1] } : { scale: 1 }}
                transition={{ duration: 1.2, repeat: pulseTarget ? Infinity : 0 }}
              >
                {pulseTarget ? (
                  <span className="absolute -left-0.5 top-1/2 h-1.5 w-1.5 -translate-y-1/2 rounded-full bg-emerald-400" />
                ) : null}
                <div className="mb-0.5 flex items-center gap-1">
                  <Package className="h-2 w-2 text-emerald-300" />
                  <span className="rounded-full bg-emerald-500/15 px-1.5 py-0.5 text-[7px] font-medium text-emerald-300 sm:text-[8px]">
                    Batch preparation
                  </span>
                </div>
                <p className="text-[7px] leading-snug text-white/55 sm:text-[8px]">
                  Group and prepare items linked to outgoing orders.
                </p>
                <div className="mt-1">
                  <motion.span
                    className="inline-flex items-center gap-0.5 rounded border border-violet-500/30 bg-violet-500/10 px-1 py-0.5 text-[7px] font-medium text-violet-300 sm:text-[8px]"
                    animate={pulseTarget ? { opacity: [0.55, 1, 0.55] } : { opacity: 1 }}
                    transition={{ duration: 1.4, repeat: pulseTarget ? Infinity : 0 }}
                  >
                    <BrainCircuit className="h-2 w-2" />
                    AI rules applied
                  </motion.span>
                </div>
              </motion.div>

              <motion.div
                className="rounded-md border border-white/[0.08] bg-[#0a0a0a] p-1.5"
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: phase >= 2 ? 1 : 0, y: 0 }}
              >
                <div className="mb-0.5 flex items-center gap-1">
                  <FileText className="h-2 w-2 text-rose-400" />
                  <span className="rounded-full bg-rose-500/15 px-1.5 py-0.5 text-[7px] font-medium text-rose-300 sm:text-[8px]">
                    Delivery notes
                  </span>
                </div>
                <p className="text-[7px] leading-snug text-white/55 sm:text-[8px]">
                  Generate delivery notes with updated batch numbers.
                </p>
                <div className="mt-1">
                  <AgentTag label="Admin agent" icon={Bot} tone="orange" />
                </div>
              </motion.div>
            </div>

            <div className="mt-1 rounded-md bg-white/[0.06] py-1 text-center text-[7px] font-medium text-white/40 sm:text-[8px]">
              Done
            </div>
          </motion.div>
        </div>

        <svg
          className="pointer-events-none absolute inset-0 h-full w-full"
          viewBox="0 0 400 260"
          preserveAspectRatio="none"
          aria-hidden
        >
          <motion.path
            d="M 188 198 H 228 Q 248 198 248 168 V 128"
            fill="none"
            stroke="#34d399"
            strokeWidth="2.5"
            strokeLinecap="round"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{
              pathLength: showConnection ? 1 : 0,
              opacity: showConnection ? 1 : 0,
            }}
            transition={{ duration: 0.9, ease: 'easeInOut' }}
          />
          <motion.polygon
            points="248,118 248,138 258,128"
            fill="#34d399"
            initial={{ opacity: 0 }}
            animate={{ opacity: showConnection ? 1 : 0 }}
            transition={{ duration: 0.3, delay: 0.75 }}
          />
        </svg>
      </div>
    </AnimationShell>
  );
}

const sources = [
  { id: 'sensors', label: 'Sensors', icon: Radio },
  { id: 'mes', label: 'MES', icon: Activity },
  { id: 'erp', label: 'ERP', icon: Database },
  { id: 'paper', label: 'Paperwork', icon: FileText },
  { id: 'rules', label: 'Unwritten Rules', icon: Sparkles },
  { id: 'sop', label: 'SOP', icon: ClipboardList },
] as const;

const truthRows = [
  ['WO-1842', 'Line 3', 'In Progress'],
  ['PO-9921', 'Raw Materials', 'Received'],
  ['NC-044', 'Quality Hold', 'Review'],
  ['SO-3310', 'Shipping', 'Picked'],
  ['INV-208', 'Warehouse B', 'Available'],
  ['MRP-118', 'Planning', 'Scheduled'],
  ['QC-077', 'Inspection', 'Passed'],
  ['AGT-014', 'Procurement', 'Running'],
  ['BOM-552', 'Engineering', 'Released'],
  ['LOT-903', 'Traceability', 'Synced'],
] as const;

export function SourceOfTruthAnimation() {
  const [activeRow, setActiveRow] = useState(0);

  useEffect(() => {
    const interval = window.setInterval(() => {
      setActiveRow((current) => (current + 1) % truthRows.length);
    }, 900);
    return () => window.clearInterval(interval);
  }, []);

  const sourceLineYs = [12, 26, 40, 54, 68, 82];

  return (
    <AnimationShell
      label="Animated unified data layer connecting operational sources"
      aspectClass="aspect-[4/3.5] sm:aspect-[4/3.2]"
    >
      <PanelChrome title="Unified Operating Layer" badge="Syncing" />

      <div className="grid h-[calc(100%-1.75rem)] grid-cols-[0.82fr_auto_1.35fr] items-stretch gap-1.5 sm:gap-2">
        <div className="relative flex flex-col gap-0.5">
          {sources.map((source) => {
            const Icon = source.icon;

            return (
              <motion.div
                key={source.id}
                className="flex items-center gap-1.5 rounded-lg border border-emerald-400/35 bg-emerald-500/[0.08] px-1.5 py-1 sm:rounded-xl"
                animate={{ opacity: [0.82, 1, 0.82] }}
                transition={{ duration: 2.2, repeat: Infinity, ease: 'easeInOut' }}
              >
                <Icon className="h-2.5 w-2.5 shrink-0 text-emerald-300" />
                <span className="text-[8px] leading-tight text-white/85 sm:text-[9px]">{source.label}</span>
              </motion.div>
            );
          })}

          <svg
            className="pointer-events-none absolute inset-y-0 -right-3 w-8 sm:-right-4 sm:w-10"
            viewBox="0 0 40 100"
            preserveAspectRatio="none"
            aria-hidden
          >
            {sourceLineYs.map((y, index) => (
              <motion.line
                key={sources[index].id}
                x1="0"
                y1={y}
                x2="40"
                y2="50"
                stroke="rgba(52,211,153,0.55)"
                strokeWidth="1.2"
                strokeLinecap="round"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: [0.35, 0.85, 0.35] }}
                transition={{
                  pathLength: { duration: 1.2, delay: index * 0.08 },
                  opacity: { duration: 2, repeat: Infinity, delay: index * 0.12 },
                }}
              />
            ))}
          </svg>
        </div>

        <div className="relative flex items-center justify-center px-0.5">
          <motion.div
            className="z-10 flex h-10 w-10 items-center justify-center rounded-xl border border-emerald-400/40 bg-emerald-400/15 sm:h-11 sm:w-11"
            animate={{
              boxShadow: [
                '0 0 0 rgba(52,211,153,0)',
                '0 0 20px rgba(52,211,153,0.35)',
                '0 0 0 rgba(52,211,153,0)',
              ],
              opacity: [0.9, 1, 0.9],
            }}
            transition={{ duration: 2.2, repeat: Infinity }}
          >
            <Database className="h-4 w-4 text-emerald-300" />
          </motion.div>
        </div>

        <div className="flex min-h-0 flex-col overflow-hidden rounded-xl border border-white/10 bg-black/50 sm:rounded-2xl">
          <div className="shrink-0 border-b border-white/10 px-2 py-1 text-[9px] uppercase tracking-[0.12em] text-white/45 sm:text-[10px]">
            Single source of truth
          </div>
          <div className="min-h-0 flex-1 overflow-y-auto">
            <table className="w-full text-left text-[8px] sm:text-[9px]">
              <thead className="sticky top-0 z-10 bg-[#0a0a0a]">
                <tr className="text-white/40">
                  <th className="px-1.5 py-0.5 font-medium sm:px-2 sm:py-1">Record</th>
                  <th className="px-1.5 py-0.5 font-medium sm:px-2 sm:py-1">Area</th>
                  <th className="px-1.5 py-0.5 font-medium sm:px-2 sm:py-1">Status</th>
                </tr>
              </thead>
              <tbody>
                {truthRows.map((row, index) => {
                  const isActive = index === activeRow;

                  return (
                    <motion.tr
                      key={row[0]}
                      className={`border-t border-white/5 text-white/75 ${
                        isActive ? 'bg-emerald-500/[0.08]' : ''
                      }`}
                      animate={isActive ? { opacity: [0.7, 1, 0.7] } : { opacity: 0.85 }}
                      transition={{ duration: 0.9, repeat: isActive ? Infinity : 0 }}
                    >
                      <td className="px-1.5 py-0.5 sm:px-2 sm:py-1">{row[0]}</td>
                      <td className="px-1.5 py-0.5 sm:px-2 sm:py-1">{row[1]}</td>
                      <td className="px-1.5 py-0.5 text-emerald-300/90 sm:px-2 sm:py-1">{row[2]}</td>
                    </motion.tr>
                  );
                })}
              </tbody>
            </table>
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
  learn: LearnOperationsAnimation,
  truth: SourceOfTruthAnimation,
  agents: AgentsToolsAnimation,
  deploy: GoLiveAnimation,
} as const;

export function HowItWorksFeatureAnimation({ featureId }: { featureId: keyof typeof animationByFeatureId }) {
  const Component = animationByFeatureId[featureId];
  return <Component />;
}
