import { motion } from 'motion/react';
import { Volume2, Moon, Sun, Star, Menu } from 'lucide-react';
import { ReactNode, useState } from 'react';
import { Link, useParams } from 'react-router';
import type { Language } from '../locales/translations';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { NavigationMenu } from './NavigationMenu';
import macaAppLogo from 'figma:asset/7726871357dffca8a1c72824ee6fcf70b91dc923.png';

interface HeaderProps {
  scrolled: boolean;
  currentLang: Language;
  children: ReactNode;
  isDarkMode?: boolean;
  onToggleDarkMode?: () => void;
  badge?: string;
}

export function Header({ scrolled, currentLang, children, isDarkMode, onToggleDarkMode, badge }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <motion.header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled 
            ? 'bg-white/90 dark:bg-slate-900/90 backdrop-blur-xl shadow-lg border-b border-slate-200/50 dark:border-slate-700/50' 
            : 'bg-transparent'
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-6">
              <Link to={`/${currentLang}`} className="flex items-center gap-3 hover:opacity-80 transition-opacity">
                <ImageWithFallback
                  src={macaAppLogo}
                  alt="MACA"
                  className="w-11 h-11 rounded-[22%] shadow-lg"
                />
                <div className="flex flex-col">
                  <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">MACA</span>
                  <span className="text-xs text-slate-500 dark:text-slate-400 -mt-1">{badge}</span>
                </div>
              </Link>
            </div>
            <div className="flex items-center gap-3">
              {onToggleDarkMode && (
                <button
                  onClick={onToggleDarkMode}
                  className="p-2.5 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 transition-all duration-200 shadow-sm"
                  aria-label="Toggle dark mode"
                >
                  {isDarkMode ? (
                    <Sun className="w-5 h-5 text-amber-500" />
                  ) : (
                    <Moon className="w-5 h-5 text-slate-700" />
                  )}
                </button>
              )}
              {children}
              <button
                onClick={() => setIsMenuOpen(true)}
                className="p-2.5 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 transition-all duration-200 shadow-lg hover:shadow-xl hover:scale-105"
                aria-label="Open menu"
              >
                <Menu className="w-5 h-5 text-white" />
              </button>
            </div>
          </div>
        </div>
      </motion.header>

      <NavigationMenu
        isOpen={isMenuOpen}
        onClose={() => setIsMenuOpen(false)}
        currentLang={currentLang}
        isDarkMode={isDarkMode || false}
      />
    </>
  );
}