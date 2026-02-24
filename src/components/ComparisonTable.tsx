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
    <section className="py-20 px-4 sm:px-6 bg-gradient-to-br from-slate-100 to-slate-200 dark:from-slate-900 dark:to-slate-800">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl md:text-6xl mb-6 text-slate-900 dark:text-white">{title}</h2>
          <p className="text-lg sm:text-xl text-slate-600 dark:text-slate-300">{subtitle}</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="rounded-3xl shadow-2xl border border-slate-200 dark:border-slate-700 overflow-hidden"
        >
          {/* Horizontal scroll wrapper — allows scroll on tiny screens instead of clipping */}
          <div className="overflow-x-auto">
            <div style={{ minWidth: '420px' }}>

              {/* Table Header */}
              <div className="grid grid-cols-3 gap-3 p-5 sm:p-8 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-slate-800 dark:to-slate-700 border-b border-slate-200 dark:border-slate-600">
                <div />
                <div className="text-center">
                  <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full text-sm sm:text-base font-semibold shadow-lg whitespace-nowrap">
                    {maca}
                  </div>
                </div>
                <div className="text-center">
                  <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-2 bg-slate-200 dark:bg-slate-600 text-slate-600 dark:text-slate-200 rounded-full text-sm sm:text-base font-semibold whitespace-nowrap">
                    {others}
                  </div>
                </div>
              </div>

              {/* Table Rows */}
              <div className="bg-white dark:bg-slate-800">
                {comparisonData.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 + index * 0.08 }}
                    className={`grid grid-cols-3 gap-3 px-5 sm:px-8 py-4 sm:py-6 items-center ${
                      index !== comparisonData.length - 1
                        ? 'border-b border-slate-100 dark:border-slate-700'
                        : ''
                    }`}
                  >
                    {/* Feature name */}
                    <div className="text-slate-700 dark:text-slate-200 font-medium text-sm sm:text-base leading-snug pr-2">
                      {item.feature}
                    </div>

                    {/* MACA column */}
                    <div className="flex justify-center">
                      {item.maca ? (
                        <div className="w-9 h-9 sm:w-10 sm:h-10 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center shadow-lg flex-shrink-0">
                          <Check className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                        </div>
                      ) : (
                        <div className="w-9 h-9 sm:w-10 sm:h-10 bg-slate-200 dark:bg-slate-700 rounded-full flex items-center justify-center flex-shrink-0">
                          <X className="w-5 h-5 sm:w-6 sm:h-6 text-slate-400" />
                        </div>
                      )}
                    </div>

                    {/* Others column */}
                    <div className="flex justify-center">
                      {item.others ? (
                        <div className="w-9 h-9 sm:w-10 sm:h-10 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center shadow-lg flex-shrink-0">
                          <Check className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                        </div>
                      ) : (
                        <div className="w-9 h-9 sm:w-10 sm:h-10 bg-slate-200 dark:bg-slate-700 rounded-full flex items-center justify-center flex-shrink-0">
                          <X className="w-5 h-5 sm:w-6 sm:h-6 text-slate-400 dark:text-slate-500" />
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
