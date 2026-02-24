import { motion } from 'motion/react';
import { AlertCircle, Rocket, CheckCircle } from 'lucide-react';

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
    <section className="py-16 px-6 bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Problem Side */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 bg-red-100 dark:bg-red-900/30 rounded-xl">
                <AlertCircle className="w-8 h-8 text-red-600 dark:text-red-400" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white">
                {problemTitle}
              </h2>
            </div>
            <div className="space-y-4">
              {problems.map((problem, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex gap-3 p-4 bg-white dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700/50 hover:border-red-300 dark:hover:border-red-700/50 transition-colors"
                >
                  <div className="flex-shrink-0 w-2 h-2 mt-2 bg-red-500 rounded-full" />
                  <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
                    {problem}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Solution Side */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl shadow-lg">
                <Rocket className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white">
                {solutionTitle}
              </h2>
            </div>
            <div className="p-8 bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl shadow-xl">
              <div className="flex items-start gap-4">
                <CheckCircle className="w-10 h-10 text-white flex-shrink-0 mt-1" />
                <div>
                  <p className="text-xl text-white leading-relaxed">
                    {solutionSubtitle}
                  </p>
                </div>
              </div>
            </div>
            
            {/* Visual Benefits */}
            <div className="grid grid-cols-2 gap-4 mt-6">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="p-4 bg-white dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700/50 text-center"
              >
                <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-1">
                  {statOneClick}
                </div>
                <div className="text-sm text-slate-600 dark:text-slate-400">
                  {statOneClickLabel}
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="p-4 bg-white dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700/50 text-center"
              >
                <div className="text-3xl font-bold text-purple-600 dark:text-purple-400 mb-1">
                  {statApps}
                </div>
                <div className="text-sm text-slate-600 dark:text-slate-400">
                  {statAppsLabel}
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}