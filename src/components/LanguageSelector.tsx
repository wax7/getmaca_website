import { useState, useRef, useEffect } from 'react';
import { Globe, Check } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { type Language, languageNames } from '../locales/translations';

interface LanguageSelectorProps {
  currentLang: Language;
  onLanguageChange: (lang: Language) => void;
}

export function LanguageSelector({ currentLang, onLanguageChange }: LanguageSelectorProps) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const languages: Language[] = ['en', 'de', 'es', 'fr', 'it', 'pt', 'ja', 'zh'];

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white/80 hover:bg-white border border-slate-200 hover:border-slate-300 transition-all duration-200 shadow-sm hover:shadow"
      >
        <Globe className="w-5 h-5 text-slate-600" />
        <span className="text-sm font-medium text-slate-700">{languageNames[currentLang]}</span>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="absolute right-0 mt-2 w-48 bg-white rounded-xl shadow-xl border border-slate-200 overflow-hidden"
          >
            <div className="py-2">
              {languages.map((lang) => (
                <button
                  key={lang}
                  onClick={() => {
                    onLanguageChange(lang);
                    setIsOpen(false);
                  }}
                  className={`w-full px-4 py-2 text-left flex items-center justify-between hover:bg-slate-50 transition-colors ${
                    currentLang === lang ? 'bg-blue-50' : ''
                  }`}
                >
                  <span className={`text-sm ${currentLang === lang ? 'text-blue-600 font-medium' : 'text-slate-700'}`}>
                    {languageNames[lang]}
                  </span>
                  {currentLang === lang && (
                    <Check className="w-4 h-4 text-blue-600" />
                  )}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}