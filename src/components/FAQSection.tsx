import { motion, AnimatePresence } from 'motion/react';
import { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQSectionProps {
  title: string;
  items: FAQItem[];
}

export function FAQSection({ title, items }: FAQSectionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div>
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-10"
      >
        <h2 className="font-bold text-[#1d1d1f] dark:text-[#f5f5f7]" style={{ fontSize: 'var(--text-3xl)' }}>{title}</h2>
      </motion.div>

      <div className="mac-window overflow-hidden">
        <div className="mac-titlebar">
          <div className="mac-dot mac-dot-red" />
          <div className="mac-dot mac-dot-yellow" />
          <span className="text-xs text-[#86868b] ml-2">FAQ</span>
        </div>

        <div className="divide-y divide-black/[0.04] dark:divide-white/[0.06]">
          {items.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.03 }}
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-center justify-between px-5 py-4 text-left hover:bg-black/[0.02] dark:hover:bg-white/[0.02] transition-colors"
              >
                <span className="text-sm sm:text-base font-medium text-[#1d1d1f] dark:text-[#f5f5f7] pr-4">
                  {item.question}
                </span>
                <span className="w-6 h-6 rounded-full bg-[#f5f5f7] dark:bg-[#2d2d2d] flex items-center justify-center flex-shrink-0">
                  {openIndex === index
                    ? <Minus className="w-3.5 h-3.5 text-[#86868b]" />
                    : <Plus className="w-3.5 h-3.5 text-[#86868b]" />
                  }
                </span>
              </button>

              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.2, ease: 'easeInOut' }}
                    className="overflow-hidden"
                  >
                    <div className="px-5 pb-4 text-sm sm:text-base text-[#86868b] leading-relaxed">
                      {item.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}