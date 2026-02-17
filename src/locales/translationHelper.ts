import { translations, languageNames, type Language, type Translation } from './translations';

/**
 * Safe translation getter with fallback
 * Ensures we NEVER return undefined translations
 */
export function getTranslation(lang: Language): Translation {
  // Try requested language first
  if (translations && translations[lang] && translations[lang].hero && translations[lang].hero.title) {
    return translations[lang];
  }
  
  // Fallback to English
  if (translations && translations.en && translations.en.hero && translations.en.hero.title) {
    return translations.en;
  }
  
  // Ultimate fallback - return a minimal translation object
  console.warn('Translations not loaded, using fallback');
  return createFallbackTranslation();
}

/**
 * Get language names safely
 */
export function getLanguageNames(): Record<Language, string> {
  if (languageNames) {
    return languageNames;
  }
  
  // Fallback language names
  return {
    en: 'English',
    de: 'Deutsch',
    es: 'Español',
    fr: 'Français',
    it: 'Italiano',
    pt: 'Português',
    ja: '日本語',
    zh: '中文',
  };
}

/**
 * Creates a minimal fallback translation object
 */
function createFallbackTranslation(): Translation {
  return {
    name: 'English',
    hero: {
      badge: '🏆 The #1 Audio Mixer for macOS',
      title: 'Take Control of Every Sound on Your Mac',
      subtitle: 'MACA gives you professional per-app volume control without the complexity.',
      cta: 'Download Free',
      secondaryCta: 'See How It Works',
    },
    problem: {
      title: 'Sound Familiar?',
      items: [
        'Spotify drowns out your Zoom calls',
        'Notifications blast at full volume during presentations',
        'You need different volume settings for work vs entertainment',
      ],
    },
    solution: {
      title: 'Meet MACA - Your Audio Command Center',
      subtitle: 'Control every app\'s volume independently, create profiles, and take back control of your Mac\'s audio.',
    },
    features: {
      title: 'Powerful Features, Zero Complexity',
      perAppVolume: {
        title: 'Per-App Volume Control',
        description: 'Adjust volume for each application independently.',
      },
      quickMute: {
        title: 'Quick Mute',
        description: 'Mute any app instantly with one click.',
      },
      focusMode: {
        title: 'Focus Mode',
        description: 'Mute all apps except the ones you choose.',
      },
      audioProfiles: {
        title: 'Audio Profiles',
        description: 'Switch between different audio setups instantly.',
      },
      keyboardShortcuts: {
        title: 'Keyboard Shortcuts',
        description: 'Control your audio without touching the mouse.',
      },
      nativeDesign: {
        title: 'Native macOS Design',
        description: 'Looks and feels like a native macOS app.',
      },
      magicBoost: {
        title: 'Magic Boost',
        description: 'Automatically normalize audio levels.',
      },
    },
    useCases: {
      title: 'Perfect For Every Workflow',
      designer: 'Listen to music while watching design tutorials at different volumes.',
      producer: 'Keep your DAW loud while reference tracks play softly.',
      developer: 'Code with music while keeping Slack notifications quiet.',
      remote: 'Balance Zoom calls with background music perfectly.',
    },
    comparison: {
      title: 'Why Choose MACA?',
      subtitle: 'The smart choice for Mac audio control',
      maca: 'MACA',
      others: 'Others',
      features: {
        easySetup: 'Easy Setup',
        noDrivers: 'No Drivers',
        oneTimePurchase: 'One-Time Purchase',
        profiles: 'Audio Profiles',
        nativeUI: 'Native UI',
        lightweight: 'Lightweight',
      },
    },
    whyNotOthers: {
      title: 'Stop Overpaying for Audio Control',
      subtitle: 'Other apps charge 2-4x more for features you don\'t need',
      macaPrice: 'MACA: $14.99',
      competitors: {
        soundSource: {
          name: 'SoundSource',
          price: '$39',
          issues: [
            'Nearly 3x more expensive',
            'Overly complex interface',
            'Features most users never need',
          ],
        },
        audioHijack: {
          name: 'Audio Hijack',
          price: '$64+',
          issues: [
            'More than 4x the price',
            'Designed for recording, not daily use',
            'Steep learning curve',
          ],
        },
      },
    },
    privacy: {
      title: 'Your Privacy is Sacred',
      subtitle: 'We believe audio control shouldn\'t come at the cost of your privacy',
      features: {
        noData: {
          title: 'Zero Data Collection',
          description: 'We don\'t collect, store, or transmit any of your data.',
        },
        localProcessing: {
          title: '100% Local Processing',
          description: 'Everything happens on your Mac. No cloud required.',
        },
        noCloud: {
          title: 'No Cloud Services',
          description: 'Your audio settings stay on your device.',
        },
        noTracking: {
          title: 'No Analytics or Tracking',
          description: 'We don\'t track what you do with MACA.',
        },
      },
      guarantee: 'Privacy Guarantee: MACA will never sell, share, or transmit your data.',
    },
    testimonials: {
      title: 'Loved by Mac Users Worldwide',
      subtitle: 'Join thousands who\'ve taken control of their audio',
      comingSoon: 'Reviews coming soon!',
    },
    pricing: {
      title: 'Simple, Honest Pricing',
      subtitle: 'No subscriptions. No hidden fees. Just great audio control.',
      free: {
        title: 'Free',
        price: '$0',
        features: [
          'Control up to 3 apps',
          'Per-app volume control',
          'Quick mute functionality',
          'Native macOS design',
        ],
        cta: 'Download Free',
      },
      pro: {
        title: 'Pro',
        price: 'In-App Purchase',
        features: [
          'Unlimited apps',
          'Audio Profiles',
          'Focus Mode',
          'Magic Boost & Equalizer',
          'Keyboard shortcuts',
          'Priority support',
        ],
        cta: 'Get Pro',
        badge: 'Best Value',
      },
    },
    benefits: {
      noSubscriptions: 'No Subscriptions Ever',
      noTracking: 'Zero Data Collection',
      noAds: 'No Ads, No Nonsense',
      nativeSupport: 'Native macOS Performance',
    },
    finalCta: {
      title: 'Ready to Take Control?',
      subtitle: 'Download MACA today and experience the freedom of perfect audio balance.',
      cta: 'Download for Free',
    },
    footer: {
      product: 'Product',
      legal: 'Legal',
      imprint: 'Imprint',
      privacy: 'Privacy Policy',
      terms: 'Terms of Service',
      support: 'Support',
      tagline: 'Professional per-app audio control for macOS',
      copyright: '© 2025 MACA Audio Mixer. All rights reserved.',
    },
    imprint: {
      title: 'Imprint',
      owner: 'Owner',
      address: 'Address',
      contact: 'Contact',
      responsible: 'Responsible for Content',
      disclaimer: 'Disclaimer',
    },
  };
}
