import { motion } from 'motion/react';
import { Volume2, VolumeX } from 'lucide-react';

interface AppMockupProps {
  title: string;
  subtitle: string;
}

export function AppMockup({ title, subtitle }: AppMockupProps) {
  return (
    <section className="py-20 px-6 bg-gradient-to-br from-slate-100 to-slate-200 dark:from-slate-800 dark:to-slate-900">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl mb-6 text-slate-900 dark:text-white">{title}</h2>
          <p className="text-2xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">{subtitle}</p>
        </motion.div>

        {/* Mockup of MACA Menu Bar Popup */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 40 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative"
        >
          {/* Menu Bar Indicator */}
          <div className="flex justify-center mb-4">
            <div className="flex items-center gap-2 px-4 py-2 bg-slate-800 dark:bg-slate-700 rounded-full shadow-lg">
              <Volume2 className="w-5 h-5 text-white" />
              <span className="text-white text-sm font-semibold">MACA</span>
            </div>
          </div>

          {/* Popup Window */}
          <div className="bg-white dark:bg-slate-800 rounded-3xl shadow-2xl border-2 border-slate-300 dark:border-slate-700 overflow-hidden max-w-md mx-auto">
            {/* Header */}
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-6">
              <div className="flex items-center justify-between text-white">
                <h3 className="text-xl font-bold">Audio Mixer</h3>
                <button className="px-4 py-1.5 bg-white/20 hover:bg-white/30 rounded-lg text-sm font-medium transition-colors">
                  Focus Mode
                </button>
              </div>
            </div>

            {/* App Volume Controls */}
            <div className="p-6 space-y-6">
              {/* Spotify */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="space-y-2"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-green-500 rounded-lg flex items-center justify-center">
                      <span className="text-white font-bold text-xs">S</span>
                    </div>
                    <span className="font-semibold text-slate-900 dark:text-white">Spotify</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-sm text-slate-500 dark:text-slate-400">30%</span>
                    <button className="p-1.5 hover:bg-slate-100 dark:hover:bg-slate-700 rounded-lg transition-colors">
                      <Volume2 className="w-5 h-5 text-slate-600 dark:text-slate-300" />
                    </button>
                  </div>
                </div>
                <div className="relative h-2 bg-slate-200 dark:bg-slate-700 rounded-full overflow-hidden">
                  <div className="absolute inset-y-0 left-0 w-[30%] bg-gradient-to-r from-green-500 to-green-600 rounded-full" />
                </div>
              </motion.div>

              {/* Zoom */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="space-y-2"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-blue-500 rounded-lg flex items-center justify-center">
                      <span className="text-white font-bold text-xs">Z</span>
                    </div>
                    <span className="font-semibold text-slate-900 dark:text-white">Zoom</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-sm text-slate-500 dark:text-slate-400">100%</span>
                    <button className="p-1.5 hover:bg-slate-100 dark:hover:bg-slate-700 rounded-lg transition-colors">
                      <Volume2 className="w-5 h-5 text-slate-600 dark:text-slate-300" />
                    </button>
                  </div>
                </div>
                <div className="relative h-2 bg-slate-200 dark:bg-slate-700 rounded-full overflow-hidden">
                  <div className="absolute inset-y-0 left-0 w-full bg-gradient-to-r from-blue-500 to-blue-600 rounded-full" />
                </div>
              </motion.div>

              {/* Chrome */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="space-y-2"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-slate-400 rounded-lg flex items-center justify-center">
                      <span className="text-white font-bold text-xs">C</span>
                    </div>
                    <span className="font-semibold text-slate-900 dark:text-white opacity-50">Chrome</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-sm text-slate-400">0%</span>
                    <button className="p-1.5 hover:bg-slate-100 dark:hover:bg-slate-700 rounded-lg transition-colors">
                      <VolumeX className="w-5 h-5 text-red-500" />
                    </button>
                  </div>
                </div>
                <div className="relative h-2 bg-slate-200 dark:bg-slate-700 rounded-full overflow-hidden">
                  <div className="absolute inset-y-0 left-0 w-0 bg-gradient-to-r from-slate-400 to-slate-500 rounded-full" />
                </div>
              </motion.div>
            </div>

            {/* Footer */}
            <div className="border-t border-slate-200 dark:border-slate-700 p-4 bg-slate-50 dark:bg-slate-900/50">
              <div className="flex items-center justify-between text-xs text-slate-500 dark:text-slate-400">
                <span>3 apps active</span>
                <button className="text-blue-600 dark:text-blue-400 font-medium hover:underline">
                  Settings
                </button>
              </div>
            </div>
          </div>

          {/* Decorative Elements */}
          <div className="absolute -top-20 -left-20 w-40 h-40 bg-blue-500/10 dark:bg-blue-500/5 rounded-full blur-3xl" />
          <div className="absolute -bottom-20 -right-20 w-40 h-40 bg-purple-500/10 dark:bg-purple-500/5 rounded-full blur-3xl" />
        </motion.div>
      </div>
    </section>
  );
}
