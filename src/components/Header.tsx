import { motion } from 'motion/react';
import { Moon, Sun, Menu, Download } from 'lucide-react';
import { ReactNode, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router';
import type { Language } from '../locales/translations';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { NavigationMenu } from './NavigationMenu';
import macaAppLogo from 'figma:asset/7726871357dffca8a1c72824ee6fcf70b91dc923.png';

const downloadLabels: Record<Language, string> = {
  en: 'Download',
  de: 'Download',
  es: 'Descargar',
  fr: 'Télécharger',
  it: 'Scarica',
  pt: 'Baixar',
  ja: 'ダウンロード',
  zh: '下载',
};

interface HeaderProps {
  scrolled: boolean;
  currentLang: Language;
  children: ReactNode;
  isDarkMode?: boolean;
  onToggleDarkMode?: () => void;
  onLanguageChange?: (lang: Language) => void;
  badge?: string;
}

export function Header({ scrolled, currentLang, children, isDarkMode, onToggleDarkMode, onLanguageChange, badge }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const appStoreUrl = "https://apps.apple.com/us/app/maca-master-audio-control/id6759258773";

  const handleLogoClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    e.stopPropagation();
    
    // Direct assignment funktioniert in iframe - .scrollTo() nicht!
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
    
    // Fallback für normale Browser
    try { window.scrollTo({ top: 0, behavior: 'smooth' }); } catch {}
    
    // Nur navigieren wenn wir nicht schon auf der Hauptseite sind
    const isOnHomePage = location.pathname === `/${currentLang}` || location.pathname === `/${currentLang}/`;
    if (!isOnHomePage) {
      navigate(`/${currentLang}`);
    }
  };

  return (
    <>
      <motion.header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled 
            ? 'bg-white/95 dark:bg-slate-900/95 backdrop-blur-xl shadow-lg border-b border-slate-200/50 dark:border-slate-700/50' 
            : 'bg-white/90 dark:bg-slate-900/90 backdrop-blur-lg shadow-sm border-b border-slate-200/30 dark:border-slate-700/30'
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6 }}
        role="banner"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 sm:py-4">
          <nav className="flex items-center justify-between" aria-label="Main navigation">
            <div className="flex items-center gap-3 sm:gap-6 min-w-0">
              <Link
                to={`/${currentLang}`}
                className="flex items-center gap-2 sm:gap-3 hover:opacity-80 transition-opacity cursor-pointer"
                onClick={handleLogoClick}
                aria-label="MACA - Back to home"
              >
                <ImageWithFallback
                  src={macaAppLogo}
                  alt="MACA App Icon"
                  className="w-9 h-9 sm:w-11 sm:h-11 rounded-[22%] shadow-lg flex-shrink-0"
                  width={44}
                  height={44}
                />
                <div className="flex flex-col min-w-0">
                  <span className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">MACA</span>
                  <span className="text-xs text-slate-500 dark:text-slate-400 -mt-1 truncate">{badge}</span>
                </div>
              </Link>
            </div>
            <div className="flex items-center gap-2 sm:gap-3">
              {/* Download Button - nur auf großen Bildschirmen */}
              <a
                href={appStoreUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="hidden lg:flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white rounded-xl transition-all duration-200 shadow-md hover:shadow-lg hover:scale-105 text-sm font-medium"
              >
                <Download className="w-4 h-4" />
                <span>{downloadLabels[currentLang] || 'Download'}</span>
              </a>
              {/* Dark Mode Toggle - nur auf Desktop sichtbar */}
              {onToggleDarkMode && (
                <button
                  onClick={onToggleDarkMode}
                  className="hidden md:flex p-2 sm:p-2.5 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 transition-all duration-200 shadow-sm items-center justify-center"
                  aria-label={isDarkMode ? 'Switch to light mode' : 'Switch to dark mode'}
                >
                  {isDarkMode ? (
                    <Sun className="w-5 h-5 text-amber-500" />
                  ) : (
                    <Moon className="w-5 h-5 text-slate-700" />
                  )}
                </button>
              )}
              {/* LanguageSelector - nur auf Desktop sichtbar */}
              <div className="hidden md:block">
                {children}
              </div>
              <button
                onClick={() => setIsMenuOpen(true)}
                className="p-2.5 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 transition-all duration-200 shadow-lg hover:shadow-xl hover:scale-105 min-w-[44px] min-h-[44px] flex items-center justify-center"
                aria-label="Open menu"
              >
                <Menu className="w-5 h-5 text-white" />
              </button>
            </div>
          </nav>
        </div>
      </motion.header>

      <NavigationMenu
        isOpen={isMenuOpen}
        onClose={() => setIsMenuOpen(false)}
        currentLang={currentLang}
        isDarkMode={isDarkMode || false}
        onToggleDarkMode={onToggleDarkMode}
        onLanguageChange={onLanguageChange}
      />
    </>
  );
}