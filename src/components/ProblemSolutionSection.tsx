import { motion } from 'motion/react';
import { AlertCircle, Sparkles, CheckCircle } from 'lucide-react';

interface ProblemSolutionSectionProps {
  problemTitle: string;
  problems: string[];
  solutionTitle: string;
  solutionSubtitle: string;
  statOneClick?: string;
  statOneClickLabel?: string;
  statApps?: string;
  statAppsLabel?: string;
}

export function ProblemSolutionSection({
  problemTitle,
  problems,
  solutionTitle,
  solutionSubtitle,
  statOneClick = '1 Click',
  statOneClickLabel = 'Instant Control',
  statApps = '∞ Apps',
  statAppsLabel = 'No Limits',
}: ProblemSolutionSectionProps) {
  return (
    <section className="relative py-14 sm:py-20 px-4 sm:px-6 mac-bg" style={{ zIndex: 2 }}>
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-6 md:gap-10 items-start">

          {/* ── Problem side ── */}
          <motion.div
            initial={{ opacity: 0, x: -16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            {/* macOS window frame */}
            <div className="mac-window overflow-hidden">
              <div className="mac-titlebar">
                <div className="mac-dot mac-dot-red" />
                <div className="mac-dot mac-dot-yellow" />
                <span className="text-xs text-[#86868b] ml-2 truncate">{problemTitle}</span>
              </div>

              <div className="p-5 sm:p-6 space-y-2.5">
                {problems.map((problem, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -8 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.06 }}
                    className="flex gap-3 p-3 rounded-lg bg-[#ff3b30]/[0.04] dark:bg-[#ff453a]/[0.06] border border-[#ff3b30]/[0.08] dark:border-[#ff453a]/[0.1]"
                  >
                    <AlertCircle className="w-4 h-4 text-[#ff3b30] dark:text-[#ff453a] mt-0.5 flex-shrink-0" />
                    <p className="text-[#1d1d1f]/70 dark:text-[#f5f5f7]/60 leading-relaxed" style={{ fontSize: 'var(--text-sm)' }}>
                      {problem}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* ── Solution side ── */}
          <motion.div
            initial={{ opacity: 0, x: 16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            {/* Solution card */}
            <div className="mac-window overflow-hidden">
              <div className="mac-titlebar">
                <div className="mac-dot mac-dot-red" />
                <div className="mac-dot mac-dot-yellow" />
                <span className="text-xs text-[#86868b] ml-2 truncate">{solutionTitle}</span>
              </div>

              <div className="p-5 sm:p-6 bg-gradient-to-br from-[#007AFF]/[0.03] to-transparent dark:from-[#0A84FF]/[0.04]">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-[#007AFF]/10 dark:bg-[#0A84FF]/15 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Sparkles className="w-4 h-4 text-[#007AFF] dark:text-[#0A84FF]" />
                  </div>
                  <p className="text-[#1d1d1f] dark:text-[#f5f5f7] leading-relaxed" style={{ fontSize: 'var(--text-base)' }}>
                    {solutionSubtitle}
                  </p>
                </div>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-3">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.15 }}
                className="mac-surface rounded-xl p-4 text-center"
              >
                <div className="text-2xl sm:text-3xl font-bold text-[#007AFF] dark:text-[#0A84FF] mb-0.5">
                  {statOneClick}
                </div>
                <div className="text-sm text-[#86868b]">{statOneClickLabel}</div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="mac-surface rounded-xl p-4 text-center"
              >
                <div className="text-2xl sm:text-3xl font-bold text-[#007AFF] dark:text-[#0A84FF] mb-0.5">
                  {statApps}
                </div>
                <div className="text-sm text-[#86868b]">{statAppsLabel}</div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}