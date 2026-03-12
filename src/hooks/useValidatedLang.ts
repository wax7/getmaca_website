/**
 * useValidatedLang – centralised language validation for route params.
 *
 * Replaces the repeated pattern across all page components:
 *   const validLanguages: Language[] = ['en', 'de', ...];
 *   const currentLang = (lang && validLanguages.includes(requestedLang)) ? requestedLang : 'en';
 *   useEffect(() => { if (!valid) navigate(...); }, [lang]);
 *
 * Usage:
 *   const currentLang = useValidatedLang();            // redirects to /en on invalid
 *   const currentLang = useValidatedLang('privacy');    // redirects to /en/privacy on invalid
 */

import { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router';
import { type Language } from '../locales/translations';
import { SUPPORTED_LANGUAGES, DEFAULT_LANGUAGE } from '../utils/language-config';

export function useValidatedLang(pageSuffix?: string): Language {
  const { lang } = useParams<{ lang: string }>();
  const navigate = useNavigate();

  const isValid = !!lang && (SUPPORTED_LANGUAGES as readonly string[]).includes(lang);
  const currentLang: Language = isValid ? (lang as Language) : DEFAULT_LANGUAGE;

  useEffect(() => {
    if (lang && !isValid) {
      const target = pageSuffix ? `/${DEFAULT_LANGUAGE}/${pageSuffix}` : `/${DEFAULT_LANGUAGE}`;
      navigate(target, { replace: true });
    }
  }, [lang, isValid, pageSuffix, navigate]);

  return currentLang;
}
