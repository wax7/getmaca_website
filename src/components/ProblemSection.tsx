import { motion } from 'motion/react';
import { X, AlertCircle } from 'lucide-react';

interface ProblemSectionProps {
  title: string;
  problems: string[];
}

export function ProblemSection({ title, problems }: ProblemSectionProps) {
  return (
    <section className="py-20 px-6 bg-white dark:bg-slate-900/50">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <AlertCircle className="w-16 h-16 text-red-500 dark:text-red-400 mx-auto mb-6" />
          <h2 className="text-5xl md:text-6xl mb-8 text-slate-900 dark:text-white">{title}</h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {problems.map((problem, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="flex items-start gap-4 p-6 bg-red-50 dark:bg-red-950/30 rounded-2xl border-2 border-red-200 dark:border-red-800/50"
            >
              <div className="w-8 h-8 bg-red-500 dark:bg-red-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                <X className="w-5 h-5 text-white" />
              </div>
              <p className="text-lg text-slate-700 dark:text-slate-300 leading-relaxed">{problem}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}