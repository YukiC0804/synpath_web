import { useEffect, useLayoutEffect, useRef, useState } from 'react';
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

function BorderlessAnimationCanvas({
  label,
  children,
  className = '',
}: {
  label: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`relative w-full overflow-visible ${className}`}
      role="img"
      aria-label={label}
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(255,255,255,0.05),transparent_58%)]" />
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.028)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.028)_1px,transparent_1px)] bg-[size:24px_24px] opacity-[0.35]" />
      <div className="relative">{children}</div>
    </div>
  );
}

type FlowPaths = {
  inbound: string[];
  outbound: string;
};

const fragmentedSources = [
  { id: 'mes', label: 'MES', icon: Activity, floatDelay: 0 },
  { id: 'erp', label: 'ERP', icon: Database, floatDelay: 0.4 },
  { id: 'machine', label: 'Machine Data', icon: Cog, floatDelay: 0.8 },
  { id: 'paper', label: 'Paperwork', icon: FileText, floatDelay: 1.2 },
  { id: 'tribal', label: 'Tribal Knowledge', icon: Users, floatDelay: 0.6 },
  { id: 'excel', label: 'Excel', icon: Table2, floatDelay: 1.0 },
  { id: 'sop', label: 'SOPs', icon: ClipboardList, floatDelay: 1.4 },
] as const;

const truthInsights = [
  'Live production status',
  'Unified order data',
  'Accurate capacity view',
  'Planning decisions',
  'Team-wide visibility',
] as const;

function FragmentedSourceCard({
  label,
  icon: Icon,
  floatDelay,
  index,
  cardRef,
}: {
  label: string;
  icon: React.ComponentType<{ className?: string }>;
  floatDelay: number;
  index: number;
  cardRef?: (element: HTMLDivElement | null) => void;
}) {
  return (
    <motion.div
      ref={cardRef}
      className="relative z-20 w-full rounded-xl border border-dashed border-white/20 bg-white/[0.04] px-3 py-2 shadow-[0_4px_24px_rgba(0,0,0,0.25)] backdrop-blur-sm sm:px-3.5 sm:py-2.5"
      animate={{ y: [0, -3, 0], x: [0, index % 2 === 0 ? 1 : -1, 0] }}
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
        <span className="whitespace-nowrap text-[10px] font-medium text-white/70 sm:text-[11px]">{label}</span>
      </div>
      <div className="mt-1.5 h-px w-full border-t border-dotted border-white/15" />
    </motion.div>
  );
}

function SynpathHub({ hubRef }: { hubRef: React.Ref<HTMLDivElement> }) {
  return (
    <div className="relative z-30 flex min-h-[28rem] items-center justify-center self-stretch px-2 lg:px-3 xl:min-h-[30rem]">
      <div className="relative flex h-24 w-24 items-center justify-center sm:h-28 sm:w-28">
        <motion.div
          className="absolute inset-0 rounded-full bg-emerald-500/20 blur-2xl"
          animate={{ opacity: [0.25, 0.5, 0.25], scale: [0.94, 1.04, 0.94] }}
          transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute inset-2 rounded-full border border-emerald-400/20"
          animate={{ opacity: [0.35, 0.7, 0.35] }}
          transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut' }}
        />

        <div
          ref={hubRef}
          className="relative z-30 flex h-16 w-16 flex-col items-center justify-center rounded-full border border-emerald-400/40 bg-gradient-to-b from-emerald-500/20 to-emerald-500/5 shadow-[0_0_32px_rgba(52,211,153,0.25)] sm:h-[4.5rem] sm:w-[4.5rem]"
        >
          <Sparkles className="mb-0.5 h-4 w-4 text-emerald-300" />
          <span className="text-[9px] font-semibold text-emerald-200 sm:text-[10px]">Synpath</span>
        </div>
      </div>
    </div>
  );
}

function ConnectionLinesLayer({ paths }: { paths: FlowPaths | null }) {
  if (!paths) {
    return null;
  }

  return (
    <svg
      className="pointer-events-none absolute inset-0 z-10 hidden h-full w-full overflow-visible lg:block"
      aria-hidden
    >
      {paths.inbound.map((path, index) =>
        path ? (
          <g key={fragmentedSources[index]?.id ?? index}>
            <path
              d={path}
              fill="none"
              stroke="rgba(52,211,153,0.22)"
              strokeWidth="1.2"
              strokeLinecap="round"
            />
            <motion.path
              d={path}
              fill="none"
              stroke="#6ee7b7"
              strokeWidth="1.6"
              strokeLinecap="round"
              pathLength={1}
              strokeDasharray="0.14 0.86"
              initial={{ strokeDashoffset: 1 }}
              animate={{ strokeDashoffset: [1, 0] }}
              transition={{
                duration: 2.2,
                repeat: Infinity,
                ease: 'linear',
                delay: index * 0.22,
              }}
            />
          </g>
        ) : null,
      )}
      <motion.path
        d={paths.outbound}
        fill="none"
        stroke="rgba(52,211,153,0.5)"
        strokeWidth="1.4"
        strokeLinecap="round"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.45 }}
      />
      <motion.circle
        r="2.4"
        fill="#34d399"
        animate={{ opacity: [0, 1, 0], offsetDistance: ['0%', '100%'] }}
        transition={{ duration: 2.1, repeat: Infinity, ease: 'linear', delay: 0.7 }}
        style={{ offsetPath: `path("${paths.outbound}")` }}
      />
    </svg>
  );
}

function TruthPanel({
  highlightIndex,
  panelRef,
}: {
  highlightIndex: number;
  panelRef: React.Ref<HTMLDivElement>;
}) {
  return (
    <motion.div
      ref={panelRef}
      className="relative z-20 flex min-h-[28rem] w-full min-w-0 max-w-[250px] flex-col overflow-visible rounded-2xl border border-emerald-400/25 bg-gradient-to-br from-white/[0.07] to-white/[0.02] p-3.5 shadow-[0_8px_40px_rgba(0,0,0,0.35)] backdrop-blur-md sm:p-4 xl:min-h-[30rem]"
      animate={{
        boxShadow: [
          '0 8px 40px rgba(0,0,0,0.35)',
          '0 8px 48px rgba(52,211,153,0.12)',
          '0 8px 40px rgba(0,0,0,0.35)',
        ],
      }}
      transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
    >
      <motion.div
        key={highlightIndex}
        className="pointer-events-none absolute inset-0 overflow-hidden rounded-2xl"
      >
        <motion.div
          className="absolute inset-y-0 w-1/2 bg-gradient-to-r from-transparent via-emerald-400/10 to-transparent"
          initial={{ x: '-120%' }}
          animate={{ x: '260%' }}
          transition={{ duration: 1.2, ease: 'easeInOut' }}
        />
      </motion.div>

      <div className="relative mb-3 flex shrink-0 items-center justify-between gap-2 border-b border-white/10 pb-2.5">
        <div className="min-w-0">
          <p className="whitespace-nowrap text-[10px] font-semibold uppercase tracking-[0.1em] text-emerald-300/90 sm:text-[11px]">
            One Source of Truth
          </p>
          <p className="mt-0.5 text-[10px] text-white/45 sm:text-[11px]">Unified operating layer</p>
        </div>
        <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg border border-emerald-400/30 bg-emerald-500/10">
          <Lock className="h-3.5 w-3.5 text-emerald-300" />
        </div>
      </div>

      <ul className="relative flex flex-1 flex-col justify-between gap-1.5 py-0.5">
        {truthInsights.map((item, index) => {
          const isActive = index === highlightIndex;

          return (
            <motion.li
              key={item}
              className={`flex flex-1 items-center gap-2.5 rounded-lg border px-3 py-2 sm:px-3.5 sm:py-2.5 ${
                isActive
                  ? 'border-emerald-400/35 bg-emerald-500/[0.08]'
                  : 'border-white/[0.08] bg-black/20'
              }`}
              animate={isActive ? { opacity: [0.85, 1, 0.85] } : { opacity: 0.92 }}
              transition={{ duration: 2.5, repeat: isActive ? Infinity : 0 }}
            >
              <CheckCircle2
                className={`h-4 w-4 shrink-0 ${isActive ? 'text-emerald-300' : 'text-white/35'}`}
              />
              <span className="text-[11px] font-medium leading-snug text-white/85 sm:text-xs">{item}</span>
            </motion.li>
          );
        })}
      </ul>
    </motion.div>
  );
}

function useFlowPaths(
  containerRef: React.RefObject<HTMLDivElement | null>,
  hubRef: React.RefObject<HTMLDivElement | null>,
  cardRefs: React.MutableRefObject<(HTMLDivElement | null)[]>,
  panelRef: React.RefObject<HTMLDivElement | null>,
) {
  const [paths, setPaths] = useState<FlowPaths | null>(null);

  useLayoutEffect(() => {
    const updatePaths = () => {
      const container = containerRef.current;
      const hub = hubRef.current;
      const panel = panelRef.current;

      if (!container || !hub || !panel || window.innerWidth < 1024) {
        setPaths(null);
        return;
      }

      const containerRect = container.getBoundingClientRect();
      const hubRect = hub.getBoundingClientRect();
      const panelRect = panel.getBoundingClientRect();

      const hubLeftX = hubRect.left - containerRect.left;
      const hubRightX = hubRect.right - containerRect.left;
      const hubCenterY = hubRect.top - containerRect.top + hubRect.height / 2;
      const panelX = panelRect.left - containerRect.left;

      const inbound = fragmentedSources.map((_, index) => {
        const card = cardRefs.current[index];
        if (!card) {
          return '';
        }

        const cardRect = card.getBoundingClientRect();
        const startX = cardRect.right - containerRect.left;
        const startY = cardRect.top + cardRect.height / 2 - containerRect.top;
        const targetX = hubLeftX;
        const targetY = hubCenterY;
        const deltaX = targetX - startX;
        const control1X = startX + deltaX * 0.45;
        const control2X = startX + deltaX * 0.75;

        return `M ${startX} ${startY} C ${control1X} ${startY}, ${control2X} ${targetY}, ${targetX} ${targetY}`;
      });

      const outboundStartX = hubRightX;
      const outboundY = hubCenterY;
      const outboundEndX = panelX;
      const outboundControlX = outboundStartX + (outboundEndX - outboundStartX) * 0.5;

      setPaths({
        inbound,
        outbound: `M ${outboundStartX} ${outboundY} C ${outboundControlX} ${outboundY}, ${outboundControlX} ${outboundY}, ${outboundEndX} ${outboundY}`,
      });
    };

    const frame = window.requestAnimationFrame(updatePaths);
    updatePaths();

    const resizeObserver = new ResizeObserver(updatePaths);
    const observed = [containerRef.current, hubRef.current, panelRef.current].filter(Boolean);

    for (const element of observed) {
      resizeObserver.observe(element as Element);
    }

    window.addEventListener('resize', updatePaths);

    return () => {
      window.cancelAnimationFrame(frame);
      resizeObserver.disconnect();
      window.removeEventListener('resize', updatePaths);
    };
  }, [cardRefs, containerRef, hubRef, panelRef]);

  return paths;
}

export function SourceOfTruthAnimation() {
  const [highlightIndex, setHighlightIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const hubRef = useRef<HTMLDivElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const paths = useFlowPaths(containerRef, hubRef, cardRefs, panelRef);

  useEffect(() => {
    const interval = window.setInterval(() => {
      setHighlightIndex((current) => (current + 1) % truthInsights.length);
    }, 2500);
    return () => window.clearInterval(interval);
  }, []);

  return (
    <BorderlessAnimationCanvas
      label="Connect fragmented manufacturing data into one reliable source of truth"
      className="min-h-[34rem] py-2 lg:min-h-[28rem] lg:py-4 xl:min-h-[30rem]"
    >
      <div
        ref={containerRef}
        className="relative flex flex-col gap-10 lg:grid lg:grid-cols-[minmax(0,26%)_minmax(5rem,16%)_minmax(0,1fr)] lg:items-stretch lg:gap-x-5 lg:gap-y-10 xl:gap-x-6"
      >
        <ConnectionLinesLayer paths={paths} />

        <div className="relative z-20 flex flex-col lg:h-full">
          <p className="mb-3 shrink-0 whitespace-nowrap text-[9px] font-medium uppercase tracking-[0.14em] text-white/35">
            Fragmented sources
          </p>

          <div className="flex flex-col gap-2 lg:hidden">
            {fragmentedSources.map((source) => {
              const Icon = source.icon;
              return (
                <motion.div
                  key={source.id}
                  className="rounded-xl border border-dashed border-white/20 bg-white/[0.04] px-2.5 py-2 backdrop-blur-sm"
                  animate={{ y: [0, -3, 0] }}
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
                </motion.div>
              );
            })}
          </div>

          <div className="hidden min-h-[28rem] flex-1 flex-col justify-between gap-1.5 lg:flex xl:min-h-[30rem]">
            {fragmentedSources.map((source, index) => (
              <FragmentedSourceCard
                key={source.id}
                label={source.label}
                icon={source.icon}
                floatDelay={source.floatDelay}
                index={index}
                cardRef={(element) => {
                  cardRefs.current[index] = element;
                }}
              />
            ))}
          </div>
        </div>

        <SynpathHub hubRef={hubRef} />

        <div className="relative z-20 flex flex-col lg:h-full">
          <p className="mb-3 shrink-0 text-[9px] font-medium uppercase tracking-[0.14em] text-white/35">
            Trusted layer
          </p>
          <TruthPanel highlightIndex={highlightIndex} panelRef={panelRef} />

          <div className="mt-4 flex flex-col items-center gap-1 lg:hidden">
            <motion.div
              className="h-6 w-px bg-gradient-to-b from-emerald-400/50 to-emerald-400/10"
              animate={{ opacity: [0.4, 1, 0.4] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
            <span className="text-[8px] uppercase tracking-[0.12em] text-white/35">Unified output</span>
          </div>
        </div>
      </div>
    </BorderlessAnimationCanvas>
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
    <BorderlessAnimationCanvas
      label="Animated AI agent building operational tools from natural language"
      className="aspect-[4/3.6] sm:aspect-[4/3.3]"
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
    </BorderlessAnimationCanvas>
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
    <BorderlessAnimationCanvas
      label="Animated rapid deployment timeline from migration to go-live"
      className="aspect-[4/3.2] sm:aspect-[4/3]"
    >
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
    </BorderlessAnimationCanvas>
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
