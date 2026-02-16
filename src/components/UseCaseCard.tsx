import { motion } from 'motion/react';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface UseCaseCardProps {
  image: string;
  title: string;
  description: string;
  gradient: string;
  delay: number;
}

export function UseCaseCard({ image, title, description, gradient, delay }: UseCaseCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay, duration: 0.6 }}
      className="group relative overflow-hidden rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500"
    >
      <div className="relative h-80 overflow-hidden">
        <ImageWithFallback
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className={`absolute inset-0 bg-gradient-to-t ${gradient} opacity-60 group-hover:opacity-70 transition-opacity`} />
      </div>
      
      <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
        <h3 className="text-3xl mb-3 font-semibold">{title}</h3>
        <p className="text-lg text-white/90 leading-relaxed">{description}</p>
      </div>
    </motion.div>
  );
}
