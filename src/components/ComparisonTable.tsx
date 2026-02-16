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
    { feature: features.easySetup, maca: true, others: false },
    { feature: features.noDrivers, maca: true, others: false },
    { feature: features.oneTimePurchase, maca: true, others: false },
    { feature: features.profiles, maca: true, others: false },
    { feature: features.nativeUI, maca: true, others: false },
    { feature: features.lightweight, maca: true, others: false },
  ];

  return (
    <section className="py-20 px-6 bg-gradient-to-br from-slate-100 to-slate-200">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl mb-6 text-slate-900">{title}</h2>
          <p className="text-xl text-slate-600">{subtitle}</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-slate-200"
        >
          {/* Header */}
          <div className="grid grid-cols-3 gap-4 p-8 bg-gradient-to-r from-blue-50 to-purple-50 border-b border-slate-200">
            <div></div>
            <div className="text-center">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full font-semibold shadow-lg">
                {maca}
              </div>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-slate-200 text-slate-600 rounded-full font-semibold">
                {others}
              </div>
            </div>
          </div>

          {/* Rows */}
          {comparisonData.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 + index * 0.1 }}
              className={`grid grid-cols-3 gap-4 p-6 items-center ${
                index !== comparisonData.length - 1 ? 'border-b border-slate-100' : ''
              }`}
            >
              <div className="text-slate-700 font-medium text-lg">{item.feature}</div>
              <div className="flex justify-center">
                {item.maca ? (
                  <div className="w-10 h-10 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center shadow-lg">
                    <Check className="w-6 h-6 text-white" />
                  </div>
                ) : (
                  <div className="w-10 h-10 bg-slate-200 rounded-full flex items-center justify-center">
                    <X className="w-6 h-6 text-slate-400" />
                  </div>
                )}
              </div>
              <div className="flex justify-center">
                {item.others ? (
                  <div className="w-10 h-10 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center shadow-lg">
                    <Check className="w-6 h-6 text-white" />
                  </div>
                ) : (
                  <div className="w-10 h-10 bg-slate-200 rounded-full flex items-center justify-center">
                    <X className="w-6 h-6 text-slate-400" />
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
