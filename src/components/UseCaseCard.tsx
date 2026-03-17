import { motion } from 'motion/react';
import { type LucideIcon } from 'lucide-react';

interface UseCaseCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  gradient: string;
  iconGradient: string;
  delay: number;
  backgroundImage?: string;
  overlayColor?: string;
}

export function UseCaseCard({ icon: Icon, title, description, gradient, iconGradient, delay, backgroundImage, overlayColor }: UseCaseCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay, duration: 0.45 }}
      whileHover={{ y: -3, transition: { duration: 0.2 } }}
      className="group mac-window overflow-hidden"
    >
      {/* macOS title bar over the image */}
      <div className="relative h-48 sm:h-56 overflow-hidden">
        {backgroundImage ? (
          <>
            <img
              src={backgroundImage}
              alt=""
              aria-hidden="true"
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-black/30" />
          </>
        ) : (
          <div className={`absolute inset-0 bg-gradient-to-br ${gradient}`}>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="p-5 rounded-2xl bg-white/10 backdrop-blur-sm">
                <Icon className="w-12 h-12 text-white/90" strokeWidth={1.5} />
              </div>
            </div>
          </div>
        )}

        {/* Floating traffic lights on top of image */}
        <div className="absolute top-3 left-3 flex items-center gap-1.5 z-10">
          <div className="mac-dot mac-dot-red" style={{ width: 10, height: 10 }} />
          <div className="mac-dot mac-dot-yellow" style={{ width: 10, height: 10 }} />
        </div>
      </div>
      
      {/* Text content below image */}
      <div className="p-4 sm:p-5">
        <h3 className="font-semibold text-[#1d1d1f] dark:text-[#f5f5f7] mb-1" style={{ fontSize: 'var(--text-lg)' }}>{title}</h3>
        <p className="text-[#86868b] leading-relaxed" style={{ fontSize: 'var(--text-sm)' }}>{description}</p>
      </div>
    </motion.div>
  );
}