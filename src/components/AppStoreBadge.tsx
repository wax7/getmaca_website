import { AppleIcon } from 'lucide-react';

interface AppStoreBadgeProps {
  link: string;
}

export function AppStoreBadge({ link }: AppStoreBadgeProps) {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-3 px-8 py-4 bg-black text-white rounded-2xl hover:bg-slate-900 transition-all duration-300 shadow-xl hover:shadow-2xl hover:-translate-y-1"
    >
      <AppleIcon className="w-10 h-10" />
      <div className="text-left">
        <div className="text-xs opacity-90">Download on the</div>
        <div className="text-xl font-semibold -mt-0.5">Mac App Store</div>
      </div>
    </a>
  );
}
