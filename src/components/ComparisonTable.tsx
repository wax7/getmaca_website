import { motion } from 'motion/react';
import { Check, X } from 'lucide-react';

interface ComparisonFeature {
  easySetup: string;
  noDrivers: string;
  oneTimePurchase: string;
  profiles: string;
  nativeUI: string;
  lightweight: string;
}

interface ComparisonTableProps {
  title: string;
  subtitle: string;
  maca: string;
  others: string;
  features: ComparisonFeature;
}

export function ComparisonTable({ title, subtitle, maca, others, features }: ComparisonTableProps) {
  const comparisonData = [
    { feature: features.easySetup,       maca: true,  others: false },
    { feature: features.noDrivers,       maca: true,  others: false },
    { feature: features.oneTimePurchase, maca: true,  others: false },
    { feature: features.profiles,        maca: true,  others: false },
    { feature: features.nativeUI,        maca: true,  others: false },
    { feature: features.lightweight,     maca: true,  others: false },
  ];

  return (
    <section className="py-20 px-4 sm:px-6 mac-bg">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-bold mb-3 text-[#1d1d1f] dark:text-[#f5f5f7]" style={{ fontSize: 'var(--text-3xl)' }}>{title}</h2>
          <p className="text-[#86868b]" style={{ fontSize: 'var(--text-base)' }}>{subtitle}</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="mac-window overflow-hidden"
        >
          {/* macOS title bar */}
          <div className="mac-titlebar">
            <div className="mac-dot mac-dot-red" />
            <div className="mac-dot mac-dot-yellow" />
            <span className="text-xs text-[#86868b] ml-2">{title}</span>
          </div>

          {/* Horizontal scroll wrapper */}
          <div className="overflow-x-auto">
            <div style={{ minWidth: '420px' }}>

              {/* Table Header */}
              <div className="grid grid-cols-3 gap-3 p-5 sm:p-8 bg-[#f5f5f7]/60 dark:bg-[#2a2a2c]/40 border-b border-black/[0.04] dark:border-white/[0.06]">
                <div />
                <div className="text-center">
                  <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#007AFF] text-white rounded-full font-semibold shadow-[0_2px_8px_rgba(0,122,255,0.25)] whitespace-nowrap" style={{ fontSize: 'var(--text-sm)' }}>
                    {maca}
                  </div>
                </div>
                <div className="text-center">
                  <div className="inline-flex items-center gap-2 px-4 py-2 bg-black/[0.05] dark:bg-white/[0.08] text-[#86868b] rounded-full font-semibold whitespace-nowrap" style={{ fontSize: 'var(--text-sm)' }}>
                    {others}
                  </div>
                </div>
              </div>

              {/* Table Rows */}
              <div className="bg-white/85 dark:bg-[#2c2c2e]/65">
                {comparisonData.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 + index * 0.08 }}
                    className={`grid grid-cols-3 gap-3 px-5 sm:px-8 py-4 sm:py-5 items-center ${
                      index !== comparisonData.length - 1
                        ? 'border-b border-black/[0.04] dark:border-white/[0.06]'
                        : ''
                    }`}
                  >
                    {/* Feature name */}
                    <div className="text-[#1d1d1f] dark:text-[#f5f5f7] font-medium leading-snug pr-2" style={{ fontSize: 'var(--text-base)' }}>
                      {item.feature}
                    </div>

                    {/* MACA column */}
                    <div className="flex justify-center">
                      {item.maca ? (
                        <div className="w-9 h-9 sm:w-10 sm:h-10 bg-[#007AFF] rounded-full flex items-center justify-center shadow-[0_2px_8px_rgba(0,122,255,0.3)] flex-shrink-0">
                          <Check className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                        </div>
                      ) : (
                        <div className="w-9 h-9 sm:w-10 sm:h-10 bg-black/[0.05] dark:bg-white/[0.08] rounded-full flex items-center justify-center flex-shrink-0">
                          <X className="w-5 h-5 sm:w-6 sm:h-6 text-[#86868b]" />
                        </div>
                      )}
                    </div>

                    {/* Others column */}
                    <div className="flex justify-center">
                      {item.others ? (
                        <div className="w-9 h-9 sm:w-10 sm:h-10 bg-[#007AFF] rounded-full flex items-center justify-center shadow-[0_2px_8px_rgba(0,122,255,0.3)] flex-shrink-0">
                          <Check className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                        </div>
                      ) : (
                        <div className="w-9 h-9 sm:w-10 sm:h-10 bg-black/[0.05] dark:bg-white/[0.08] rounded-full flex items-center justify-center flex-shrink-0">
                          <X className="w-5 h-5 sm:w-6 sm:h-6 text-[#86868b]" />
                        </div>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>

            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
