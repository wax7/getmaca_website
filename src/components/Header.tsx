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
  ja: 'ダウンロード',
  'zh-Hans': '下载',
  'zh-Hant': '下載',
  ar: 'تحميل',
  ru: 'Скачать',
  nl: 'Download',
  tr: 'İndir',
  sv: 'Ladda ner',
  da: 'Download',
  ko: '다운로드',
  nb: 'Last ned',
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
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
    try { window.scrollTo({ top: 0, behavior: 'smooth' }); } catch {}
    const isOnHomePage = location.pathname === `/${currentLang}` || location.pathname === `/${currentLang}/`;
    if (!isOnHomePage) {
      navigate(`/${currentLang}`);
    }
  };

  return (
    <>
      <motion.header
        className="fixed top-0 left-0 right-0 z-50 shadow-[0_0.5px_0_rgba(0,0,0,0.1)]"
        style={{
          backgroundColor: isDarkMode ? '#1d1d1f' : '#f5f5f7',
          backdropFilter: 'saturate(180%) blur(40px)',
          WebkitBackdropFilter: 'saturate(180%) blur(40px)',
        }}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
        role="banner"
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-2.5 sm:py-3">
          <nav className="flex items-center justify-between" aria-label="Main navigation">
            {/* Logo */}
            <Link
              to={`/${currentLang}`}
              className="flex items-center gap-2.5 hover:opacity-80 transition-opacity"
              onClick={handleLogoClick}
              aria-label="MACA - Back to home"
            >
              <ImageWithFallback
                src={macaAppLogo}
                alt="MACA App Icon"
                className="w-8 h-8 sm:w-9 sm:h-9 rounded-[22%] flex-shrink-0"
                width={36}
                height={36}
                style={{ boxShadow: '0 1px 4px rgba(0,0,0,0.12)' }}
              />
              <div className="flex flex-col">
                <span className="text-base sm:text-lg font-semibold text-[#1d1d1f] dark:text-[#f5f5f7] tracking-tight leading-tight">MACA</span>
                {badge && <span className="text-xs text-[#86868b] leading-tight">{badge}</span>}
              </div>
            </Link>

            {/* Right side controls */}
            <div className="flex items-center gap-1.5 sm:gap-2">
              {/* Download CTA */}
              <a
                href={appStoreUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="hidden lg:flex items-center gap-1.5 px-4 py-1.5 bg-[#007AFF] hover:bg-[#0071E3] text-white rounded-full transition-colors text-sm font-medium"
              >
                <Download className="w-3.5 h-3.5" />
                <span>{downloadLabels[currentLang] || 'Download'}</span>
              </a>

              {/* Dark Mode */}
              {onToggleDarkMode && (
                <button
                  onClick={onToggleDarkMode}
                  className="hidden md:flex w-8 h-8 rounded-full items-center justify-center hover:bg-black/5 dark:hover:bg-white/10 transition-colors"
                  aria-label={isDarkMode ? 'Switch to light mode' : 'Switch to dark mode'}
                >
                  {isDarkMode ? (
                    <Sun className="w-[18px] h-[18px] text-[#FFD60A]" />
                  ) : (
                    <Moon className="w-[18px] h-[18px] text-[#86868b]" />
                  )}
                </button>
              )}

              {/* Language */}
              <div className="hidden md:block">{children}</div>

              {/* Menu button */}
              <button
                onClick={() => setIsMenuOpen(true)}
                className="w-9 h-9 rounded-full flex items-center justify-center bg-[#1d1d1f] dark:bg-[#f5f5f7] hover:opacity-80 transition-opacity"
                aria-label="Open menu"
              >
                <Menu className="w-4 h-4 text-white dark:text-[#1d1d1f]" />
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