import { Language } from '../locales/translations';

export interface FAQItem {
  question: string;
  answer: string;
}

export interface FAQCategory {
  title: string;
  id: string;
  items: FAQItem[];
}

export interface FAQContent {
  pageTitle: string;
  tableOfContents: string;
  categories: FAQCategory[];
  technicalStandards: {
    title: string;
    sections: {
      equalizer: {
        title: string;
        items: string[];
      };
      audioAnalysis: {
        title: string;
        items: string[];
      };
      normalization: {
        title: string;
        items: string[];
      };
      audioLevels: {
        title: string;
        items: string[];
      };
    };
  };
}

// Helper function to create common FAQ structure
const createFAQContent = (lang: Language): FAQContent => {
  const translations: Record<Language, FAQContent> = {
    de: {
      pageTitle: 'MACA — Häufig gestellte Fragen',
      tableOfContents: 'Inhaltsverzeichnis',
      categories: [
        {
          id: 'erste-schritte',
          title: 'Erste Schritte',
          items: [
            {
              question: 'Was ist MACA?',
              answer: 'MACA (Master Audio Control App) ist ein Dienstprogramm für die Menüleiste von macOS, mit dem Sie Audio pro App steuern können. Statt nur die Systemlautstärke anzupassen, können Sie für jede auf Ihrem Mac laufende App individuelle Lautstärken einstellen – ideal für Kreative, Remote-Worker und Multitasker.'
            },
            {
              question: 'Wie installiere ich MACA?',
              answer: 'Laden Sie die App vom Mac App Store herunter. MACA wird als Menüleisten-App installiert und läuft diskret im Hintergrund. Beim ersten Start werden Sie durch die Einrichtung von Audio-Berechtigungen geführt.'
            },
            {
              question: 'Benötigt MACA spezielle Einstellungen?',
              answer: 'MACA benötigt grundlegende Audio-Zugriffsberechtigung (zum Erfassen von Pro-App-Audio-Pegeln) und optional Input Monitoring-Berechtigung (für globale Tastenkürzel). Sie werden beim Onboarding aufgefordert, diese Berechtigungen zu erteilen.'
            },
            {
              question: 'Kann ich MACA auf älteren macOS-Versionen nutzen?',
              answer: 'MACA erfordert macOS 15 (Sequoia) oder neuer. Wir empfehlen macOS 26+ für das beste Erlebnis und alle Funktionen.'
            }
          ]
        },
        {
          id: 'kernfunktionen',
          title: 'Kernfunktionen',
          items: [
            {
              question: 'Was kann ich in MACA steuern?',
              answer: 'Sie können: Pro-App-Lautstärke (für jede laufende App ein eindeutiges Lautstärkenlevel 0–100%+), Pro-App-Stummschaltung (einzelne Apps sofort stumm schalten), Pro-App-Audio-Routing (Audio von jeder App an einen anderen Lautsprecher oder Kopfhörer senden), Master-Lautstärke (systemweite Lautstärke schnell aus der Menüleiste anpassen) und Gerätewechsel (Ihr Standard-Audio-Ausgabegerät ändern).'
            },
            {
              question: 'Mit welchen Apps funktioniert MACA?',
              answer: 'MACA funktioniert mit jeder App, die Audio an Ihr System ausgibt – einschließlich Music/Spotify/Apple Music/YouTube Music, Zoom/Teams/Discord/Google Meet, Safari/Chrome/Firefox, professionelle Tools (DAWs, Videobearbeitung, Streaming-Software), Spiele und Unterhaltungs-Apps.'
            },
            {
              question: 'Kann ich Audio für pausierte Apps steuern?',
              answer: 'Ja. Sie können Lautstärke und Stummschaltzustand für jede App anpassen, unabhängig davon, ob sie gerade abgespielt wird oder inaktiv ist.'
            },
            {
              question: 'Nutzt MACA spezielle Treiber oder Kernel-Erweiterungen?',
              answer: 'Nein. MACA verwendet nur native macOS Audio-APIs (Core Audio Taps), was es vollständig App-Store-kompatibel und sicher macht. Keine Low-Level-Systemmodifikationen erforderlich.'
            }
          ]
        },
        {
          id: 'audio-verwaltung',
          title: 'Audio-Verwaltung',
          items: [
            {
              question: 'Wie leite ich Audio von einer App an ein bestimmtes Gerät weiter?',
              answer: 'Klicken Sie im MACA-Menü auf die Geräte-Schaltfläche neben einer App. Ein Dropdown zeigt alle verfügbaren Audio-Geräte: Eingebaute Lautsprecher/Kopfhörer, Bluetooth-Geräte (AirPods, Headsets, Lautsprecher) und Systemstandard. Wählen Sie ein Gerät aus, und das gesamte Audio von dieser App wird sofort dorthin weitergeleitet.'
            },
            {
              question: 'Können mehrere Apps gleichzeitig an verschiedene Geräte ausgeben?',
              answer: 'Absolut. Das ist eine der Kernfunktionen von MACA. App A kann über Bluetooth-Kopfhörer abspielen, während App B gleichzeitig über Ihre Lautsprecher abgespielt wird.'
            },
            {
              question: 'Was passiert, wenn ein Audio-Gerät getrennt wird?',
              answer: 'MACA speichert Ihre bevorzugte Weiterleitung. Wenn Ihr Bluetooth-Gerät getrennt wird, wird das Audio automatisch auf Ihr System-Standard-Ausgabegerät zurückgeführt. Wenn das Gerät sich erneut verbindet, stellt MACA die ursprüngliche Weiterleitung für betroffene Apps wieder her.'
            },
            {
              question: 'Wie funktioniert die Master-Lautstärkeregelung?',
              answer: 'Der Master-Schieberegler in der Menüleiste passt Ihre Systemlautstärke an – genau wie die macOS-Lautstärkeregelung, aber im MACA-Menü für einfacheren Zugriff.'
            }
          ]
        },
        {
          id: 'profile-voreinstellungen',
          title: 'Profile & Voreinstellungen',
          items: [
            {
              question: 'Was sind Audio-Profile?',
              answer: 'Audio-Profile ermöglichen es Ihnen, komplexe Audio-Setups zu speichern und schnell aufzurufen. Beispiele: "Gaming" (Spiel-Lautstärke erhöht, Spotify leise, Discord auf 50%), "Aufnahme" (Musik, Podcasts und Browser stummgeschaltet; nur Discord aktiv), "Späte Nacht" (Lautstärke reduziert; auf Kopfhörer geroutet). Erstellen Sie Profile durch Einrichten gewünschter Lautstärken/Weiterleitung und speichern Sie diese dann. Wechseln Sie zwischen Profilen aus der Menüleiste in einem Klick.'
            },
            {
              question: 'Wie viele Profile kann ich speichern?',
              answer: 'Free: Keine Profile. Pro: Unbegrenzte Profile.'
            },
            {
              question: 'Können Profile Audio-Einstellungen wie Equalizer-Voreinstellungen enthalten?',
              answer: 'Ja (Pro). Wenn Sie ein Profil speichern, kann es EQ-Voreinstellungen für bestimmte Apps enthalten. Wenn Sie das Profil aktivieren, werden die gespeicherten EQ-Einstellungen automatisch angewendet.'
            },
            {
              question: 'Kann ich Profile umbenennen oder löschen?',
              answer: 'Ja. Öffnen Sie Einstellungen → Profile und Sie können alle gespeicherten Profile bearbeiten, umbenennen oder löschen.'
            }
          ]
        },
        {
          id: 'equalizer',
          title: 'Equalizer (EQ)',
          items: [
            {
              question: 'Hat MACA einen Equalizer?',
              answer: 'Ja. MACA enthält einen 10-Band parametrischen Equalizer nach ISO 216-Frequenzstandards. Öffnen Sie das EQ-Fenster aus der Menüleiste oder doppelklicken Sie auf eine App.'
            },
            {
              question: 'Was kann ich mit dem EQ machen?',
              answer: 'Sie können: Pro-App-EQ anpassen (den Sound jeder App einzeln anpassen, z.B. Spotify wärmer machen, YouTube-Musik heller), Voreinstellungen verwenden (wählen Sie aus eingebauten EQ-Voreinstellungen wie Warm, Hell, Bass-Boost, Vocal-Pop), benutzerdefinierte Profile erstellen, Echtzeit-Spektrum-Anzeige nutzen und Peak-Hold-Visualisierung sehen.'
            },
            {
              question: 'Kann ich sehen, was der EQ in Echtzeit macht?',
              answer: 'Ja. Der Spektrumanalysator im EQ-Fenster zeigt ein Echtzeit-Diagramm der Frequenzen im Audio mit farbcodierten Bändern und Peak-Indikatoren.'
            },
            {
              question: 'Welche EQ-Funktionen sind in Free vs. Pro verfügbar?',
              answer: 'Free: 10-Band ISO-EQ mit Voreinstellungen und grundlegenden Profilen. Pro: Vollständige parametrische EQ-Kontrolle (Gain, Frequenz, Q) + unbegrenzte benutzerdefinierte Profile + stärkerer Normalizer.'
            },
            {
              question: 'Was ist der "Audio-Normalizer"?',
              answer: 'Der Audio-Normalizer (Pro) passt Pro-App-Level automatisch an, um plötzliche Lautstärkespitzen oder -abfälle zwischen Apps zu verhindern. Nützlich beim Wechseln zwischen leisen Podcasts und lauten Spielen.'
            }
          ]
        },
        {
          id: 'free-vs-pro',
          title: 'Free vs. Pro',
          items: [
            {
              question: 'Warum gibt es ein Free-Tier-Limit von 3 Apps?',
              answer: 'Das Free-Tier soll Ihnen MACA mit den häufigsten Anwendungsfällen (z.B. Zoom + Spotify + Spiel) näher bringen. Das 3-App-Limit ermutigt Power-User zum Upgrade auf Pro, um viele Apps gleichzeitig zu verwalten.'
            },
            {
              question: 'Was ist, wenn ich mehr als 3 Apps steuern muss?',
              answer: 'Greifen Sie zu MACA Pro, das unbegrenzte App-Kontrolle freischaltet. Sie können Ihr komplettes Audio-Setup ohne Beschränkungen verwalten.'
            },
            {
              question: 'Kann ich Pro-Funktionen auf mehreren Macs synchronisieren?',
              answer: 'Wenn Sie Family Sharing verwenden, wird Pro-Lizenzierung über iCloud geteilt. Ein einzelner Pro-Kauf gilt für Ihr Konto auf allen persönlichen Macs.'
            },
            {
              question: 'Wie viel kostet Pro?',
              answer: 'Die Preisgestaltung wird im macOS App Store festgelegt. Prüfen Sie den App-Eintrag für aktuelle Preisgestaltung in Ihrer Region.'
            }
          ]
        },
        {
          id: 'hilfe-fehlerbehebung',
          title: 'Hilfe & Fehlerbehebung',
          items: [
            {
              question: 'MACA zeigt keine zu steuernden Apps an.',
              answer: 'Starten Sie die App neu. Überprüfen Sie, dass Audio tatsächlich in einer anderen App abgespielt wird. Überprüfen Sie, dass MACA die Berechtigung zum Audio-Zugriff hat: Systemeinstellungen → Datenschutz & Sicherheit → Audio-Input.'
            },
            {
              question: 'Audio einer App wird immer wieder auf das Standardgerät zurückgewechselt.',
              answer: 'Dies kann vorkommen, wenn: Die App gerade gestartet wurde (MACA braucht möglicherweise einen Moment zum Aktivieren), eine andere App oder das Betriebssystem das System-Audio-Gerät geändert hat. Versuchen Sie, das Gerät manuell im MACA-Menü erneut auszuwählen.'
            },
            {
              question: 'Der EQ-Visualizer zeigt keine Aktivität.',
              answer: 'Stellen Sie sicher, dass Audio in dieser App abgespielt wird. Der Analysator aktualisiert sich in Echtzeit, daher wird stilles Audio nicht angezeigt. Wenn dies noch nicht funktioniert, schließen Sie das EQ-Fenster und öffnen Sie es erneut.'
            },
            {
              question: 'Tastenkürzel für Profile funktionieren nicht.',
              answer: 'Überprüfen Sie unter Einstellungen → Tastenkürzel, dass Ihr Kürzel aktiviert und auf eine eindeutige Tastenkombination eingestellt ist. Überprüfen Sie, dass Input Monitoring-Berechtigung erteilt wurde: Systemeinstellungen → Datenschutz & Sicherheit.'
            },
            {
              question: 'Ich habe versehentlich mein Limit erreicht (3 Apps in Free). Was nun?',
              answer: 'Sie haben zwei Optionen: Starten Sie die App neu, um die Liste der laufenden Apps zu aktualisieren, oder greifen Sie zu Pro, um unbegrenzte App-Kontrolle freizuschalten.'
            },
            {
              question: 'Kann ich Audio in Hintergrund-Apps steuern?',
              answer: 'Ja. MACA steuert jede App mit Audioausgabe – egal ob im Vordergrund oder Hintergrund.'
            },
            {
              question: 'Funktioniert MACA mit externen USB-Audio-Interfaces?',
              answer: 'Absolut. Alle Audio-Geräte, die macOS erkennt (USB-Interfaces, externe DACs, usw.), erscheinen in MACAz Geräteliste.'
            },
            {
              question: 'Wie gebe ich Feedback oder melde einen Fehler?',
              answer: 'Kontaktieren Sie uns unter support@getmaca.de. Wir freuen uns über Fehlerberichte, Feature-Anfragen und Feedback zur Nutzung.'
            }
          ]
        }
      ],
      technicalStandards: {
        title: 'Technische Standards',
        sections: {
          equalizer: {
            title: 'Equalizer (EQ)',
            items: [
              'ISO 216 Frequenzbänder: 10 Oktav-Frequenzbänder nach internationalem Standard',
              'Frequenzbereich: 31 Hz bis 16 kHz (abdeckt den hörbaren Audio-Bereich)',
              'Parametrische Kontrolle (Pro): Gain, Centerfrequenz, Q-Faktor nach IEC 60268-17'
            ]
          },
          audioAnalysis: {
            title: 'Audio-Analyse',
            items: [
              'FFT (Fast Fourier Transform): Echtzeit-Spektrumanalyse nach IEC-Standards',
              'Peak-Hold Metering: Standard IEC 60268-17 VU-Metering mit Peak-Hold für 2–3 Sekunden',
              'Clipping-Detection: Automatische Übersteuerungserkennung (0 dBFS)'
            ]
          },
          normalization: {
            title: 'Normalisierung (Pro)',
            items: [
              'Audio Normalizer: Orientiert sich an LUFS-Standard (LKFS nach ITU-R BS.1770-4)',
              'Zielwert: -16 LUFS (kompatibel mit Streaming-Plattformen)'
            ]
          },
          audioLevels: {
            title: 'Audio-Pegelstandards',
            items: [
              'dB-Skala: Dezibel (20×Log10 des Verhältnisses)',
              'Master Volume: 0 dB (Systemstandard), +/- Range für Pegelausgleich',
              'Clipping Threshold: 0 dBFS (digitales Maximum)'
            ]
          }
        }
      }
    },
    en: {
      pageTitle: 'MACA — Frequently Asked Questions',
      tableOfContents: 'Table of Contents',
      categories: [
        {
          id: 'getting-started',
          title: 'Getting Started',
          items: [
            {
              question: 'What is MACA?',
              answer: 'MACA (Master Audio Control App) is a macOS menu bar utility that lets you control audio per app. Instead of just adjusting system volume, you can set individual volumes for every app running on your Mac – perfect for creators, remote workers, and multitaskers.'
            },
            {
              question: 'How do I install MACA?',
              answer: 'Download the app from the Mac App Store. MACA installs as a menu bar app and runs discreetly in the background. On first launch, you\'ll be guided through setting up audio permissions.'
            },
            {
              question: 'Does MACA need special settings?',
              answer: 'MACA requires basic audio access permission (to capture per-app audio levels) and optionally input monitoring permission (for global keyboard shortcuts). You\'ll be prompted to grant these permissions during onboarding.'
            },
            {
              question: 'Can I use MACA on older macOS versions?',
              answer: 'MACA requires macOS 15 (Sequoia) or newer. We recommend macOS 26+ for the best experience and all features.'
            }
          ]
        },
        {
          id: 'core-features',
          title: 'Core Features',
          items: [
            {
              question: 'What can I control in MACA?',
              answer: 'You can control: Per-app volume (set a unique volume level 0–100%+ for each running app), per-app mute (instantly mute individual apps), per-app audio routing (send audio from any app to a different speaker or headphones), master volume (quickly adjust system-wide volume from the menu bar), and device switching (change your default audio output device).'
            },
            {
              question: 'Which apps does MACA work with?',
              answer: 'MACA works with any app that outputs audio to your system – including Music/Spotify/Apple Music/YouTube Music, Zoom/Teams/Discord/Google Meet, Safari/Chrome/Firefox, professional tools (DAWs, video editing, streaming software), games, and entertainment apps.'
            },
            {
              question: 'Can I control audio for paused apps?',
              answer: 'Yes. You can adjust volume and mute state for any app regardless of whether it\'s currently playing or inactive.'
            },
            {
              question: 'Does MACA use special drivers or kernel extensions?',
              answer: 'No. MACA uses only native macOS audio APIs (Core Audio Taps), making it fully App Store compliant and safe. No low-level system modifications required.'
            }
          ]
        },
        {
          id: 'audio-management',
          title: 'Audio Management',
          items: [
            {
              question: 'How do I route audio from an app to a specific device?',
              answer: 'Click the device button next to an app in the MACA menu. A dropdown shows all available audio devices: built-in speakers/headphones, Bluetooth devices (AirPods, headsets, speakers), and system default. Select a device, and all audio from that app will be routed there immediately.'
            },
            {
              question: 'Can multiple apps output to different devices simultaneously?',
              answer: 'Absolutely. This is one of MACA\'s core features. App A can play through Bluetooth headphones while App B plays through your speakers at the same time.'
            },
            {
              question: 'What happens if an audio device disconnects?',
              answer: 'MACA saves your preferred routing. If your Bluetooth device disconnects, audio automatically falls back to your system default output device. When the device reconnects, MACA restores the original routing for affected apps.'
            },
            {
              question: 'How does the master volume control work?',
              answer: 'The master slider in the menu bar adjusts your system volume – just like the macOS volume control, but in the MACA menu for easier access.'
            }
          ]
        },
        {
          id: 'profiles-presets',
          title: 'Profiles & Presets',
          items: [
            {
              question: 'What are audio profiles?',
              answer: 'Audio profiles let you save and quickly recall complex audio setups. Examples: "Gaming" (game volume boosted, Spotify quiet, Discord at 50%), "Recording" (music, podcasts, and browser muted; Discord only active), "Late Night" (volume reduced; routed to headphones). Create profiles by setting up desired volumes/routing, then save them. Switch between profiles from the menu bar in one click.'
            },
            {
              question: 'How many profiles can I save?',
              answer: 'Free: No profiles. Pro: Unlimited profiles.'
            },
            {
              question: 'Can profiles include audio settings like equalizer presets?',
              answer: 'Yes (Pro). When you save a profile, it can include EQ presets for specific apps. When you activate the profile, the saved EQ settings are automatically applied.'
            },
            {
              question: 'Can I rename or delete profiles?',
              answer: 'Yes. Open Settings → Profiles and you can edit, rename, or delete all saved profiles.'
            }
          ]
        },
        {
          id: 'equalizer',
          title: 'Equalizer (EQ)',
          items: [
            {
              question: 'Does MACA have an equalizer?',
              answer: 'Yes. MACA includes a 10-band parametric equalizer following ISO 216 frequency standards. Open the EQ window from the menu bar or double-click on an app.'
            },
            {
              question: 'What can I do with the EQ?',
              answer: 'You can: adjust per-app EQ (tune each app\'s sound individually, e.g., make Spotify warmer, YouTube music brighter), use presets (choose from built-in EQ presets like Warm, Bright, Bass Boost, Vocal Pop), create custom profiles, use real-time spectrum display, and view peak-hold visualization.'
            },
            {
              question: 'Can I see what the EQ is doing in real-time?',
              answer: 'Yes. The spectrum analyzer in the EQ window shows a real-time graph of frequencies in the audio with color-coded bands and peak indicators.'
            },
            {
              question: 'What EQ features are available in Free vs. Pro?',
              answer: 'Free: 10-band ISO EQ with presets and basic profiles. Pro: Full parametric EQ control (gain, frequency, Q) + unlimited custom profiles + more powerful normalizer.'
            },
            {
              question: 'What is the "Audio Normalizer"?',
              answer: 'The Audio Normalizer (Pro) automatically adjusts per-app levels to prevent sudden volume spikes or drops between apps. Useful when switching between quiet podcasts and loud games.'
            }
          ]
        },
        {
          id: 'free-vs-pro',
          title: 'Free vs. Pro',
          items: [
            {
              question: 'Why is there a Free tier limit of 3 apps?',
              answer: 'The Free tier is designed to introduce you to MACA with the most common use cases (e.g., Zoom + Spotify + game). The 3-app limit encourages power users to upgrade to Pro to manage many apps simultaneously.'
            },
            {
              question: 'What if I need to control more than 3 apps?',
              answer: 'Upgrade to MACA Pro, which unlocks unlimited app control. You can manage your entire audio setup without restrictions.'
            },
            {
              question: 'Can I sync Pro features across multiple Macs?',
              answer: 'If you use Family Sharing, Pro licensing is shared via iCloud. A single Pro purchase applies to your account on all personal Macs.'
            },
            {
              question: 'How much does Pro cost?',
              answer: 'Pricing is set in the macOS App Store. Check the app listing for current pricing in your region.'
            }
          ]
        },
        {
          id: 'help-troubleshooting',
          title: 'Help & Troubleshooting',
          items: [
            {
              question: 'MACA shows no apps to control.',
              answer: 'Restart the app. Verify that audio is actually playing in another app. Check that MACA has permission to access audio: System Settings → Privacy & Security → Audio Input.'
            },
            {
              question: 'Audio from an app keeps switching back to the default device.',
              answer: 'This can occur if: the app just started (MACA may need a moment to activate), another app or the OS changed the system audio device. Try manually reselecting the device in the MACA menu.'
            },
            {
              question: 'The EQ visualizer shows no activity.',
              answer: 'Make sure audio is playing in that app. The analyzer updates in real-time, so silent audio won\'t show anything. If still not working, close the EQ window and reopen it.'
            },
            {
              question: 'Keyboard shortcuts for profiles aren\'t working.',
              answer: 'Check under Settings → Keyboard Shortcuts that your shortcut is enabled and set to a unique key combination. Verify that input monitoring permission has been granted: System Settings → Privacy & Security.'
            },
            {
              question: 'I accidentally reached my limit (3 apps in Free). What now?',
              answer: 'You have two options: restart the app to refresh the running app list, or upgrade to Pro to unlock unlimited app control.'
            },
            {
              question: 'Can I control audio in background apps?',
              answer: 'Yes. MACA controls any app with audio output – whether in the foreground or background.'
            },
            {
              question: 'Does MACA work with external USB audio interfaces?',
              answer: 'Absolutely. All audio devices that macOS recognizes (USB interfaces, external DACs, etc.) appear in MACA\'s device list.'
            },
            {
              question: 'How do I give feedback or report a bug?',
              answer: 'Contact us at support@getmaca.de. We appreciate bug reports, feature requests, and usage feedback.'
            }
          ]
        }
      ],
      technicalStandards: {
        title: 'Technical Standards',
        sections: {
          equalizer: {
            title: 'Equalizer (EQ)',
            items: [
              'ISO 216 Frequency Bands: 10 octave frequency bands following international standard',
              'Frequency Range: 31 Hz to 16 kHz (covers audible audio range)',
              'Parametric Control (Pro): Gain, center frequency, Q-factor per IEC 60268-17'
            ]
          },
          audioAnalysis: {
            title: 'Audio Analysis',
            items: [
              'FFT (Fast Fourier Transform): Real-time spectrum analysis per IEC standards',
              'Peak-Hold Metering: Standard IEC 60268-17 VU metering with peak hold for 2–3 seconds',
              'Clipping Detection: Automatic overdrive detection (0 dBFS)'
            ]
          },
          normalization: {
            title: 'Normalization (Pro)',
            items: [
              'Audio Normalizer: Based on LUFS standard (LKFS per ITU-R BS.1770-4)',
              'Target Value: -16 LUFS (compatible with streaming platforms)'
            ]
          },
          audioLevels: {
            title: 'Audio Level Standards',
            items: [
              'dB Scale: Decibel (20×Log10 of ratio)',
              'Master Volume: 0 dB (system default), +/- range for level balancing',
              'Clipping Threshold: 0 dBFS (digital maximum)'
            ]
          }
        }
      }
    },
    es: {
      pageTitle: 'MACA — Preguntas Frecuentes',
      tableOfContents: 'Tabla de Contenidos',
      categories: [
        {
          id: 'primeros-pasos',
          title: 'Primeros Pasos',
          items: [
            {
              question: '¿Qué es MACA?',
              answer: 'MACA (Master Audio Control App) es una utilidad de barra de menú para macOS que te permite controlar el audio por aplicación. En lugar de solo ajustar el volumen del sistema, puedes establecer volúmenes individuales para cada aplicación que se ejecuta en tu Mac, perfecto para creadores, trabajadores remotos y multitareas.'
            },
            {
              question: '¿Cómo instalo MACA?',
              answer: 'Descarga la aplicación desde Mac App Store. MACA se instala como una aplicación de barra de menú y se ejecuta discretamente en segundo plano. En el primer inicio, se te guiará a través de la configuración de permisos de audio.'
            },
            {
              question: '¿Necesita MACA configuraciones especiales?',
              answer: 'MACA requiere permiso básico de acceso al audio (para capturar niveles de audio por aplicación) y opcionalmente permiso de monitoreo de entrada (para atajos de teclado globales). Se te pedirá que otorgues estos permisos durante la incorporación.'
            },
            {
              question: '¿Puedo usar MACA en versiones antiguas de macOS?',
              answer: 'MACA requiere macOS 15 (Sequoia) o más reciente. Recomendamos macOS 26+ para la mejor experiencia y todas las funciones.'
            }
          ]
        },
        {
          id: 'funciones-principales',
          title: 'Funciones Principales',
          items: [
            {
              question: '¿Qué puedo controlar en MACA?',
              answer: 'Puedes controlar: Volumen por aplicación (establece un nivel de volumen único 0–100%+ para cada aplicación en ejecución), silenciamiento por aplicación (silencia aplicaciones individuales al instante), enrutamiento de audio por aplicación (envía audio de cualquier aplicación a un altavoz o auriculares diferentes), volumen maestro (ajusta rápidamente el volumen de todo el sistema desde la barra de menú) y cambio de dispositivo (cambia tu dispositivo de salida de audio predeterminado).'
            },
            {
              question: '¿Con qué aplicaciones funciona MACA?',
              answer: 'MACA funciona con cualquier aplicación que emita audio a tu sistema, incluyendo Music/Spotify/Apple Music/YouTube Music, Zoom/Teams/Discord/Google Meet, Safari/Chrome/Firefox, herramientas profesionales (DAWs, edición de video, software de streaming), juegos y aplicaciones de entretenimiento.'
            },
            {
              question: '¿Puedo controlar el audio de aplicaciones pausadas?',
              answer: 'Sí. Puedes ajustar el volumen y el estado de silenciamiento para cualquier aplicación, independientemente de si está reproduciendo o inactiva.'
            },
            {
              question: '¿Usa MACA controladores especiales o extensiones del kernel?',
              answer: 'No. MACA usa solo APIs de audio nativas de macOS (Core Audio Taps), lo que lo hace totalmente compatible con App Store y seguro. No se requieren modificaciones del sistema de bajo nivel.'
            }
          ]
        },
        {
          id: 'gestion-audio',
          title: 'Gestión de Audio',
          items: [
            {
              question: '¿Cómo enruto el audio de una aplicación a un dispositivo específico?',
              answer: 'Haz clic en el botón de dispositivo junto a una aplicación en el menú MACA. Un menú desplegable muestra todos los dispositivos de audio disponibles: altavoces/auriculares integrados, dispositivos Bluetooth (AirPods, auriculares, altavoces) y predeterminado del sistema. Selecciona un dispositivo y todo el audio de esa aplicación se enrutará allí inmediatamente.'
            },
            {
              question: '¿Pueden varias aplicaciones emitir a diferentes dispositivos simultáneamente?',
              answer: 'Absolutamente. Esta es una de las características principales de MACA. La aplicación A puede reproducirse a través de auriculares Bluetooth mientras que la aplicación B se reproduce a través de tus altavoces al mismo tiempo.'
            },
            {
              question: '¿Qué sucede si se desconecta un dispositivo de audio?',
              answer: 'MACA guarda tu enrutamiento preferido. Si tu dispositivo Bluetooth se desconecta, el audio vuelve automáticamente a tu dispositivo de salida predeterminado del sistema. Cuando el dispositivo se reconecta, MACA restaura el enrutamiento original para las aplicaciones afectadas.'
            },
            {
              question: '¿Cómo funciona el control de volumen maestro?',
              answer: 'El control deslizante maestro en la barra de menú ajusta el volumen de tu sistema, al igual que el control de volumen de macOS, pero en el menú MACA para un acceso más fácil.'
            }
          ]
        },
        {
          id: 'perfiles-ajustes',
          title: 'Perfiles y Ajustes',
          items: [
            {
              question: '¿Qué son los perfiles de audio?',
              answer: 'Los perfiles de audio te permiten guardar y recordar rápidamente configuraciones de audio complejas. Ejemplos: "Gaming" (volumen del juego aumentado, Spotify silencioso, Discord al 50%), "Grabación" (música, podcasts y navegador silenciados; solo Discord activo), "Noche Tardía" (volumen reducido; enrutado a auriculares). Crea perfiles configurando los volúmenes/enrutamiento deseados, luego guárdalos. Cambia entre perfiles desde la barra de menú en un clic.'
            },
            {
              question: '¿Cuántos perfiles puedo guardar?',
              answer: 'Gratis: Sin perfiles. Pro: Perfiles ilimitados.'
            },
            {
              question: '¿Pueden los perfiles incluir ajustes de audio como preajustes del ecualizador?',
              answer: 'Sí (Pro). Cuando guardas un perfil, puede incluir preajustes de EQ para aplicaciones específicas. Cuando activas el perfil, los ajustes de EQ guardados se aplican automáticamente.'
            },
            {
              question: '¿Puedo renombrar o eliminar perfiles?',
              answer: 'Sí. Abre Configuración → Perfiles y puedes editar, renombrar o eliminar todos los perfiles guardados.'
            }
          ]
        },
        {
          id: 'ecualizador',
          title: 'Ecualizador (EQ)',
          items: [
            {
              question: '¿Tiene MACA un ecualizador?',
              answer: 'Sí. MACA incluye un ecualizador paramétrico de 10 bandas que sigue los estándares de frecuencia ISO 216. Abre la ventana EQ desde la barra de menú o haz doble clic en una aplicación.'
            },
            {
              question: '¿Qué puedo hacer con el EQ?',
              answer: 'Puedes: ajustar EQ por aplicación (afina el sonido de cada aplicación individualmente, p. ej., hacer Spotify más cálido, YouTube Music más brillante), usar preajustes (elige entre preajustes de EQ integrados como Cálido, Brillante, Refuerzo de Graves, Pop Vocal), crear perfiles personalizados, usar pantalla de espectro en tiempo real y ver visualización de retención de picos.'
            },
            {
              question: '¿Puedo ver lo que hace el EQ en tiempo real?',
              answer: 'Sí. El analizador de espectro en la ventana EQ muestra un gráfico en tiempo real de las frecuencias en el audio con bandas codificadas por colores e indicadores de picos.'
            },
            {
              question: '¿Qué funciones de EQ están disponibles en Gratis vs. Pro?',
              answer: 'Gratis: EQ ISO de 10 bandas con preajustes y perfiles básicos. Pro: Control completo de EQ paramétrico (ganancia, frecuencia, Q) + perfiles personalizados ilimitados + normalizador más potente.'
            },
            {
              question: '¿Qué es el "Normalizador de Audio"?',
              answer: 'El Normalizador de Audio (Pro) ajusta automáticamente los niveles por aplicación para evitar picos o caídas de volumen repentinos entre aplicaciones. Útil al cambiar entre podcasts silenciosos y juegos ruidosos.'
            }
          ]
        },
        {
          id: 'gratis-vs-pro',
          title: 'Gratis vs. Pro',
          items: [
            {
              question: '¿Por qué hay un límite de 3 aplicaciones en el nivel Gratis?',
              answer: 'El nivel Gratis está diseñado para presentarte MACA con los casos de uso más comunes (p. ej., Zoom + Spotify + juego). El límite de 3 aplicaciones anima a los usuarios avanzados a actualizar a Pro para gestionar muchas aplicaciones simultáneamente.'
            },
            {
              question: '¿Qué pasa si necesito controlar más de 3 aplicaciones?',
              answer: 'Actualiza a MACA Pro, que desbloquea el control ilimitado de aplicaciones. Puedes gestionar toda tu configuración de audio sin restricciones.'
            },
            {
              question: '¿Puedo sincronizar las funciones Pro en varios Macs?',
              answer: 'Si usas Compartir en Familia, la licencia Pro se comparte a través de iCloud. Una sola compra Pro se aplica a tu cuenta en todos tus Macs personales.'
            },
            {
              question: '¿Cuánto cuesta Pro?',
              answer: 'El precio se establece en Mac App Store. Consulta la lista de aplicaciones para conocer el precio actual en tu región.'
            }
          ]
        },
        {
          id: 'ayuda-solucion-problemas',
          title: 'Ayuda y Solución de Problemas',
          items: [
            {
              question: 'MACA no muestra aplicaciones para controlar.',
              answer: 'Reinicia la aplicación. Verifica que el audio esté reproduciendo en otra aplicación. Comprueba que MACA tenga permiso para acceder al audio: Configuración del Sistema → Privacidad y Seguridad → Entrada de Audio.'
            },
            {
              question: 'El audio de una aplicación sigue volviendo al dispositivo predeterminado.',
              answer: 'Esto puede ocurrir si: la aplicación acaba de iniciarse (MACA puede necesitar un momento para activarse), otra aplicación o el sistema operativo cambió el dispositivo de audio del sistema. Intenta volver a seleccionar manualmente el dispositivo en el menú MACA.'
            },
            {
              question: 'El visualizador EQ no muestra actividad.',
              answer: 'Asegúrate de que el audio esté reproduciendo en esa aplicación. El analizador se actualiza en tiempo real, por lo que el audio silencioso no mostrará nada. Si aún no funciona, cierra la ventana EQ y vuelve a abrirla.'
            },
            {
              question: 'Los atajos de teclado para perfiles no funcionan.',
              answer: 'Comprueba en Configuración → Atajos de Teclado que tu atajo esté habilitado y configurado en una combinación de teclas única. Verifica que se haya otorgado permiso de monitoreo de entrada: Configuración del Sistema → Privacidad y Seguridad.'
            },
            {
              question: 'Alcancé accidentalmente mi límite (3 aplicaciones en Gratis). ¿Qué hago ahora?',
              answer: 'Tienes dos opciones: reinicia la aplicación para actualizar la lista de aplicaciones en ejecución, o actualiza a Pro para desbloquear control ilimitado de aplicaciones.'
            },
            {
              question: '¿Puedo controlar el audio en aplicaciones en segundo plano?',
              answer: 'Sí. MACA controla cualquier aplicación con salida de audio, ya sea en primer plano o en segundo plano.'
            },
            {
              question: '¿Funciona MACA con interfaces de audio USB externas?',
              answer: 'Absolutamente. Todos los dispositivos de audio que macOS reconoce (interfaces USB, DACs externos, etc.) aparecen en la lista de dispositivos de MACA.'
            },
            {
              question: '¿Cómo doy comentarios o informo un error?',
              answer: 'Contáctanos en support@getmaca.de. Apreciamos informes de errores, solicitudes de funciones y comentarios de uso.'
            }
          ]
        }
      ],
      technicalStandards: {
        title: 'Estándares Técnicos',
        sections: {
          equalizer: {
            title: 'Ecualizador (EQ)',
            items: [
              'Bandas de Frecuencia ISO 216: 10 bandas de frecuencia de octava siguiendo el estándar internacional',
              'Rango de Frecuencia: 31 Hz a 16 kHz (cubre el rango de audio audible)',
              'Control Paramétrico (Pro): Ganancia, frecuencia central, factor Q según IEC 60268-17'
            ]
          },
          audioAnalysis: {
            title: 'Análisis de Audio',
            items: [
              'FFT (Transformada Rápida de Fourier): Análisis de espectro en tiempo real según estándares IEC',
              'Medición de Retención de Picos: Estándar IEC 60268-17 VU con retención de picos durante 2-3 segundos',
              'Detección de Recorte: Detección automática de sobrecarga (0 dBFS)'
            ]
          },
          normalization: {
            title: 'Normalización (Pro)',
            items: [
              'Normalizador de Audio: Basado en estándar LUFS (LKFS según ITU-R BS.1770-4)',
              'Valor Objetivo: -16 LUFS (compatible con plataformas de streaming)'
            ]
          },
          audioLevels: {
            title: 'Estándares de Nivel de Audio',
            items: [
              'Escala dB: Decibelio (20×Log10 de relación)',
              'Volumen Maestro: 0 dB (predeterminado del sistema), rango +/- para equilibrio de nivel',
              'Umbral de Recorte: 0 dBFS (máximo digital)'
            ]
          }
        }
      }
    },
    fr: {
      pageTitle: 'MACA — Foire Aux Questions',
      tableOfContents: 'Table des Matières',
      categories: [
        {
          id: 'demarrage',
          title: 'Démarrage',
          items: [
            {
              question: 'Qu\'est-ce que MACA?',
              answer: 'MACA (Master Audio Control App) est un utilitaire de barre de menu macOS qui vous permet de contrôler l\'audio par application. Au lieu d\'ajuster simplement le volume système, vous pouvez définir des volumes individuels pour chaque application exécutée sur votre Mac – parfait pour les créateurs, les travailleurs à distance et les multitâches.'
            },
            {
              question: 'Comment installer MACA?',
              answer: 'Téléchargez l\'application depuis le Mac App Store. MACA s\'installe comme une application de barre de menu et s\'exécute discrètement en arrière-plan. Au premier lancement, vous serez guidé dans la configuration des autorisations audio.'
            },
            {
              question: 'MACA nécessite-t-il des paramètres spéciaux?',
              answer: 'MACA nécessite une autorisation d\'accès audio de base (pour capturer les niveaux audio par application) et éventuellement une autorisation de surveillance d\'entrée (pour les raccourcis clavier globaux). Vous serez invité à accorder ces autorisations lors de l\'intégration.'
            },
            {
              question: 'Puis-je utiliser MACA sur des versions macOS plus anciennes?',
              answer: 'MACA nécessite macOS 15 (Sequoia) ou plus récent. Nous recommandons macOS 26+ pour la meilleure expérience et toutes les fonctionnalités.'
            }
          ]
        },
        {
          id: 'fonctions-principales',
          title: 'Fonctions Principales',
          items: [
            {
              question: 'Que puis-je contrôler dans MACA?',
              answer: 'Vous pouvez contrôler: Volume par application (définir un niveau de volume unique 0–100%+ pour chaque application en cours d\'exécution), muet par application (couper instantanément des applications individuelles), routage audio par application (envoyer l\'audio de n\'importe quelle application vers un haut-parleur ou des écouteurs différents), volume principal (ajuster rapidement le volume à l\'échelle du système depuis la barre de menu) et changement de périphérique (changer votre périphérique de sortie audio par défaut).'
            },
            {
              question: 'Avec quelles applications MACA fonctionne-t-il?',
              answer: 'MACA fonctionne avec n\'importe quelle application qui émet de l\'audio vers votre système – y compris Music/Spotify/Apple Music/YouTube Music, Zoom/Teams/Discord/Google Meet, Safari/Chrome/Firefox, outils professionnels (DAW, montage vidéo, logiciel de streaming), jeux et applications de divertissement.'
            },
            {
              question: 'Puis-je contrôler l\'audio pour les applications en pause?',
              answer: 'Oui. Vous pouvez ajuster le volume et l\'état de muet pour n\'importe quelle application, qu\'elle soit en cours de lecture ou inactive.'
            },
            {
              question: 'MACA utilise-t-il des pilotes spéciaux ou des extensions de noyau?',
              answer: 'Non. MACA utilise uniquement les API audio natives de macOS (Core Audio Taps), ce qui le rend entièrement conforme à l\'App Store et sûr. Aucune modification système de bas niveau requise.'
            }
          ]
        },
        {
          id: 'gestion-audio',
          title: 'Gestion Audio',
          items: [
            {
              question: 'Comment router l\'audio d\'une application vers un périphérique spécifique?',
              answer: 'Cliquez sur le bouton de périphérique à côté d\'une application dans le menu MACA. Un menu déroulant affiche tous les périphériques audio disponibles: haut-parleurs/écouteurs intégrés, périphériques Bluetooth (AirPods, casques, haut-parleurs) et système par défaut. Sélectionnez un périphérique et tout l\'audio de cette application y sera routé immédiatement.'
            },
            {
              question: 'Plusieurs applications peuvent-elles émettre vers différents périphériques simultanément?',
              answer: 'Absolument. C\'est l\'une des fonctionnalités principales de MACA. L\'application A peut jouer via des écouteurs Bluetooth tandis que l\'application B joue via vos haut-parleurs en même temps.'
            },
            {
              question: 'Que se passe-t-il si un périphérique audio se déconnecte?',
              answer: 'MACA enregistre votre routage préféré. Si votre périphérique Bluetooth se déconnecte, l\'audio revient automatiquement à votre périphérique de sortie système par défaut. Lorsque le périphérique se reconnecte, MACA restaure le routage d\'origine pour les applications concernées.'
            },
            {
              question: 'Comment fonctionne le contrôle de volume principal?',
              answer: 'Le curseur principal dans la barre de menu ajuste le volume de votre système – tout comme le contrôle de volume macOS, mais dans le menu MACA pour un accès plus facile.'
            }
          ]
        },
        {
          id: 'profils-presets',
          title: 'Profils et Préréglages',
          items: [
            {
              question: 'Que sont les profils audio?',
              answer: 'Les profils audio vous permettent de sauvegarder et de rappeler rapidement des configurations audio complexes. Exemples: "Gaming" (volume du jeu augmenté, Spotify silencieux, Discord à 50%), "Enregistrement" (musique, podcasts et navigateur en sourdine; Discord seul actif), "Nuit Tardive" (volume réduit; routé vers les écouteurs). Créez des profils en configurant les volumes/routages souhaités, puis enregistrez-les. Basculez entre les profils depuis la barre de menu en un clic.'
            },
            {
              question: 'Combien de profils puis-je enregistrer?',
              answer: 'Gratuit: Aucun profil. Pro: Profils illimités.'
            },
            {
              question: 'Les profils peuvent-ils inclure des paramètres audio comme des préréglages d\'égaliseur?',
              answer: 'Oui (Pro). Lorsque vous enregistrez un profil, il peut inclure des préréglages EQ pour des applications spécifiques. Lorsque vous activez le profil, les paramètres EQ enregistrés sont automatiquement appliqués.'
            },
            {
              question: 'Puis-je renommer ou supprimer des profils?',
              answer: 'Oui. Ouvrez Paramètres → Profils et vous pouvez modifier, renommer ou supprimer tous les profils enregistrés.'
            }
          ]
        },
        {
          id: 'egaliseur',
          title: 'Égaliseur (EQ)',
          items: [
            {
              question: 'MACA a-t-il un égaliseur?',
              answer: 'Oui. MACA inclut un égaliseur paramétrique à 10 bandes suivant les normes de fréquence ISO 216. Ouvrez la fenêtre EQ depuis la barre de menu ou double-cliquez sur une application.'
            },
            {
              question: 'Que puis-je faire avec l\'EQ?',
              answer: 'Vous pouvez: ajuster l\'EQ par application (régler le son de chaque application individuellement, par ex., rendre Spotify plus chaud, YouTube Music plus brillant), utiliser des préréglages (choisir parmi les préréglages EQ intégrés comme Chaud, Brillant, Renforcement des Basses, Pop Vocal), créer des profils personnalisés, utiliser l\'affichage du spectre en temps réel et visualiser la rétention des pics.'
            },
            {
              question: 'Puis-je voir ce que fait l\'EQ en temps réel?',
              answer: 'Oui. L\'analyseur de spectre dans la fenêtre EQ affiche un graphique en temps réel des fréquences dans l\'audio avec des bandes codées par couleur et des indicateurs de pic.'
            },
            {
              question: 'Quelles fonctionnalités EQ sont disponibles dans Gratuit vs. Pro?',
              answer: 'Gratuit: EQ ISO à 10 bandes avec préréglages et profils de base. Pro: Contrôle complet de l\'EQ paramétrique (gain, fréquence, Q) + profils personnalisés illimités + normaliseur plus puissant.'
            },
            {
              question: 'Qu\'est-ce que le "Normaliseur Audio"?',
              answer: 'Le Normaliseur Audio (Pro) ajuste automatiquement les niveaux par application pour éviter les pics ou les chutes soudains de volume entre les applications. Utile lors du passage entre des podcasts silencieux et des jeux bruyants.'
            }
          ]
        },
        {
          id: 'gratuit-vs-pro',
          title: 'Gratuit vs. Pro',
          items: [
            {
              question: 'Pourquoi y a-t-il une limite de 3 applications dans le niveau Gratuit?',
              answer: 'Le niveau Gratuit est conçu pour vous présenter MACA avec les cas d\'utilisation les plus courants (par ex., Zoom + Spotify + jeu). La limite de 3 applications encourage les utilisateurs avancés à passer à Pro pour gérer de nombreuses applications simultanément.'
            },
            {
              question: 'Que faire si je dois contrôler plus de 3 applications?',
              answer: 'Passez à MACA Pro, qui déverrouille le contrôle illimité des applications. Vous pouvez gérer toute votre configuration audio sans restrictions.'
            },
            {
              question: 'Puis-je synchroniser les fonctionnalités Pro sur plusieurs Macs?',
              answer: 'Si vous utilisez le Partage Familial, la licence Pro est partagée via iCloud. Un seul achat Pro s\'applique à votre compte sur tous vos Macs personnels.'
            },
            {
              question: 'Combien coûte Pro?',
              answer: 'Le prix est fixé dans le Mac App Store. Consultez la liste des applications pour connaître le prix actuel dans votre région.'
            }
          ]
        },
        {
          id: 'aide-depannage',
          title: 'Aide et Dépannage',
          items: [
            {
              question: 'MACA n\'affiche aucune application à contrôler.',
              answer: 'Redémarrez l\'application. Vérifiez que l\'audio est effectivement en cours de lecture dans une autre application. Vérifiez que MACA a l\'autorisation d\'accéder à l\'audio: Réglages Système → Confidentialité et Sécurité → Entrée Audio.'
            },
            {
              question: 'L\'audio d\'une application revient sans cesse au périphérique par défaut.',
              answer: 'Cela peut se produire si: l\'application vient de démarrer (MACA peut avoir besoin d\'un moment pour s\'activer), une autre application ou le système d\'exploitation a modifié le périphérique audio système. Essayez de resélectionner manuellement le périphérique dans le menu MACA.'
            },
            {
              question: 'Le visualiseur EQ n\'affiche aucune activité.',
              answer: 'Assurez-vous que l\'audio est en cours de lecture dans cette application. L\'analyseur se met à jour en temps réel, donc l\'audio silencieux n\'affichera rien. Si cela ne fonctionne toujours pas, fermez la fenêtre EQ et rouvrez-la.'
            },
            {
              question: 'Les raccourcis clavier pour les profils ne fonctionnent pas.',
              answer: 'Vérifiez dans Paramètres → Raccourcis Clavier que votre raccourci est activé et défini sur une combinaison de touches unique. Vérifiez que l\'autorisation de surveillance d\'entrée a été accordée: Réglages Système → Confidentialité et Sécurité.'
            },
            {
              question: 'J\'ai accidentellement atteint ma limite (3 applications en Gratuit). Que faire maintenant?',
              answer: 'Vous avez deux options: redémarrez l\'application pour actualiser la liste des applications en cours d\'exécution, ou passez à Pro pour déverrouiller le contrôle illimité des applications.'
            },
            {
              question: 'Puis-je contrôler l\'audio dans les applications en arrière-plan?',
              answer: 'Oui. MACA contrôle toute application avec sortie audio – que ce soit au premier plan ou en arrière-plan.'
            },
            {
              question: 'MACA fonctionne-t-il avec des interfaces audio USB externes?',
              answer: 'Absolument. Tous les périphériques audio que macOS reconnaît (interfaces USB, DAC externes, etc.) apparaissent dans la liste des périphériques de MACA.'
            },
            {
              question: 'Comment donner des commentaires ou signaler un bug?',
              answer: 'Contactez-nous à support@getmaca.de. Nous apprécions les rapports de bugs, les demandes de fonctionnalités et les retours d\'utilisation.'
            }
          ]
        }
      ],
      technicalStandards: {
        title: 'Normes Techniques',
        sections: {
          equalizer: {
            title: 'Égaliseur (EQ)',
            items: [
              'Bandes de Fréquence ISO 216: 10 bandes de fréquence d\'octave suivant la norme internationale',
              'Plage de Fréquence: 31 Hz à 16 kHz (couvre la plage audio audible)',
              'Contrôle Paramétrique (Pro): Gain, fréquence centrale, facteur Q selon IEC 60268-17'
            ]
          },
          audioAnalysis: {
            title: 'Analyse Audio',
            items: [
              'FFT (Transformée de Fourier Rapide): Analyse de spectre en temps réel selon les normes IEC',
              'Mesure de Rétention des Pics: Norme IEC 60268-17 VU avec rétention des pics pendant 2-3 secondes',
              'Détection d\'Écrêtage: Détection automatique de la surcharge (0 dBFS)'
            ]
          },
          normalization: {
            title: 'Normalisation (Pro)',
            items: [
              'Normaliseur Audio: Basé sur la norme LUFS (LKFS selon ITU-R BS.1770-4)',
              'Valeur Cible: -16 LUFS (compatible avec les plateformes de streaming)'
            ]
          },
          audioLevels: {
            title: 'Normes de Niveau Audio',
            items: [
              'Échelle dB: Décibel (20×Log10 du rapport)',
              'Volume Principal: 0 dB (par défaut du système), plage +/- pour l\'équilibrage de niveau',
              'Seuil d\'Écrêtage: 0 dBFS (maximum numérique)'
            ]
          }
        }
      }
    },
    it: {
      pageTitle: 'MACA — Domande Frequenti',
      tableOfContents: 'Indice',
      categories: [
        {
          id: 'primi-passi',
          title: 'Primi Passi',
          items: [
            {
              question: 'Cos\'è MACA?',
              answer: 'MACA (Master Audio Control App) è un\'utilità della barra dei menu di macOS che ti consente di controllare l\'audio per app. Invece di regolare solo il volume del sistema, puoi impostare volumi individuali per ogni app in esecuzione sul tuo Mac: perfetto per creatori, lavoratori remoti e multitasker.'
            },
            {
              question: 'Come installo MACA?',
              answer: 'Scarica l\'app dal Mac App Store. MACA si installa come app della barra dei menu e viene eseguita discretamente in background. Al primo avvio, verrai guidato attraverso la configurazione dei permessi audio.'
            },
            {
              question: 'MACA richiede impostazioni speciali?',
              answer: 'MACA richiede il permesso di accesso audio di base (per catturare i livelli audio per app) e opzionalmente il permesso di monitoraggio dell\'input (per le scorciatoie da tastiera globali). Ti verrà chiesto di concedere questi permessi durante l\'onboarding.'
            },
            {
              question: 'Posso usare MACA su versioni macOS più vecchie?',
              answer: 'MACA richiede macOS 15 (Sequoia) o più recente. Consigliamo macOS 26+ per la migliore esperienza e tutte le funzionalità.'
            }
          ]
        },
        {
          id: 'funzioni-principali',
          title: 'Funzioni Principali',
          items: [
            {
              question: 'Cosa posso controllare in MACA?',
              answer: 'Puoi controllare: Volume per app (imposta un livello di volume unico 0–100%+ per ogni app in esecuzione), muto per app (silenzia istantaneamente app individuali), routing audio per app (invia l\'audio di qualsiasi app a un altoparlante o cuffie diversi), volume master (regola rapidamente il volume a livello di sistema dalla barra dei menu) e cambio dispositivo (cambia il tuo dispositivo di output audio predefinito).'
            },
            {
              question: 'Con quali app funziona MACA?',
              answer: 'MACA funziona con qualsiasi app che emette audio al tuo sistema – inclusi Music/Spotify/Apple Music/YouTube Music, Zoom/Teams/Discord/Google Meet, Safari/Chrome/Firefox, strumenti professionali (DAW, editing video, software di streaming), giochi e app di intrattenimento.'
            },
            {
              question: 'Posso controllare l\'audio per app in pausa?',
              answer: 'Sì. Puoi regolare il volume e lo stato di muto per qualsiasi app indipendentemente dal fatto che stia riproducendo o sia inattiva.'
            },
            {
              question: 'MACA usa driver speciali o estensioni del kernel?',
              answer: 'No. MACA usa solo API audio native di macOS (Core Audio Taps), rendendolo completamente conforme all\'App Store e sicuro. Non sono richieste modifiche di sistema di basso livello.'
            }
          ]
        },
        {
          id: 'gestione-audio',
          title: 'Gestione Audio',
          items: [
            {
              question: 'Come inoltro l\'audio da un\'app a un dispositivo specifico?',
              answer: 'Fai clic sul pulsante del dispositivo accanto a un\'app nel menu MACA. Un menu a discesa mostra tutti i dispositivi audio disponibili: altoparlanti/cuffie integrate, dispositivi Bluetooth (AirPods, cuffie, altoparlanti) e predefinito del sistema. Seleziona un dispositivo e tutto l\'audio di quell\'app verrà instradato lì immediatamente.'
            },
            {
              question: 'Più app possono emettere a dispositivi diversi contemporaneamente?',
              answer: 'Assolutamente. Questa è una delle funzionalità principali di MACA. L\'app A può riprodurre attraverso cuffie Bluetooth mentre l\'app B riproduce attraverso i tuoi altoparlanti contemporaneamente.'
            },
            {
              question: 'Cosa succede se un dispositivo audio si disconnette?',
              answer: 'MACA salva il tuo routing preferito. Se il tuo dispositivo Bluetooth si disconnette, l\'audio ritorna automaticamente al tuo dispositivo di output predefinito del sistema. Quando il dispositivo si riconnette, MACA ripristina il routing originale per le app interessate.'
            },
            {
              question: 'Come funziona il controllo del volume master?',
              answer: 'Lo slider master nella barra dei menu regola il volume del tuo sistema: proprio come il controllo del volume di macOS, ma nel menu MACA per un accesso più facile.'
            }
          ]
        },
        {
          id: 'profili-preset',
          title: 'Profili e Preset',
          items: [
            {
              question: 'Cosa sono i profili audio?',
              answer: 'I profili audio ti permettono di salvare e richiamare rapidamente configurazioni audio complesse. Esempi: "Gaming" (volume del gioco aumentato, Spotify silenzioso, Discord al 50%), "Registrazione" (musica, podcast e browser silenziati; solo Discord attivo), "Notte Fonda" (volume ridotto; instradato alle cuffie). Crea profili impostando i volumi/routing desiderati, poi salvali. Passa tra i profili dalla barra dei menu con un clic.'
            },
            {
              question: 'Quanti profili posso salvare?',
              answer: 'Gratuito: Nessun profilo. Pro: Profili illimitati.'
            },
            {
              question: 'I profili possono includere impostazioni audio come preset dell\'equalizzatore?',
              answer: 'Sì (Pro). Quando salvi un profilo, può includere preset EQ per app specifiche. Quando attivi il profilo, le impostazioni EQ salvate vengono applicate automaticamente.'
            },
            {
              question: 'Posso rinominare o eliminare i profili?',
              answer: 'Sì. Apri Impostazioni → Profili e puoi modificare, rinominare o eliminare tutti i profili salvati.'
            }
          ]
        },
        {
          id: 'equalizzatore',
          title: 'Equalizzatore (EQ)',
          items: [
            {
              question: 'MACA ha un equalizzatore?',
              answer: 'Sì. MACA include un equalizzatore parametrico a 10 bande che segue gli standard di frequenza ISO 216. Apri la finestra EQ dalla barra dei menu o fai doppio clic su un\'app.'
            },
            {
              question: 'Cosa posso fare con l\'EQ?',
              answer: 'Puoi: regolare l\'EQ per app (sintonizza il suono di ogni app individualmente, ad es., rendi Spotify più caldo, YouTube Music più brillante), usare i preset (scegli tra preset EQ integrati come Caldo, Brillante, Boost Bassi, Pop Vocale), creare profili personalizzati, usare la visualizzazione dello spettro in tempo reale e visualizzare la ritenzione dei picchi.'
            },
            {
              question: 'Posso vedere cosa fa l\'EQ in tempo reale?',
              answer: 'Sì. L\'analizzatore di spettro nella finestra EQ mostra un grafico in tempo reale delle frequenze nell\'audio con bande codificate a colori e indicatori di picco.'
            },
            {
              question: 'Quali funzionalità EQ sono disponibili in Gratuito vs. Pro?',
              answer: 'Gratuito: EQ ISO a 10 bande con preset e profili di base. Pro: Controllo completo dell\'EQ parametrico (guadagno, frequenza, Q) + profili personalizzati illimitati + normalizzatore più potente.'
            },
            {
              question: 'Cos\'è il "Normalizzatore Audio"?',
              answer: 'Il Normalizzatore Audio (Pro) regola automaticamente i livelli per app per prevenire picchi o cadute improvvise di volume tra le app. Utile quando si passa tra podcast silenziosi e giochi rumorosi.'
            }
          ]
        },
        {
          id: 'gratuito-vs-pro',
          title: 'Gratuito vs. Pro',
          items: [
            {
              question: 'Perché c\'è un limite di 3 app nel livello Gratuito?',
              answer: 'Il livello Gratuito è progettato per presentarti MACA con i casi d\'uso più comuni (ad es., Zoom + Spotify + gioco). Il limite di 3 app incoraggia gli utenti esperti a passare a Pro per gestire molte app contemporaneamente.'
            },
            {
              question: 'Cosa succede se devo controllare più di 3 app?',
              answer: 'Passa a MACA Pro, che sblocca il controllo illimitato delle app. Puoi gestire l\'intera configurazione audio senza restrizioni.'
            },
            {
              question: 'Posso sincronizzare le funzionalità Pro su più Mac?',
              answer: 'Se usi "In famiglia", la licenza Pro è condivisa tramite iCloud. Un singolo acquisto Pro si applica al tuo account su tutti i tuoi Mac personali.'
            },
            {
              question: 'Quanto costa Pro?',
              answer: 'Il prezzo è stabilito nel Mac App Store. Controlla l\'elenco delle app per il prezzo corrente nella tua regione.'
            }
          ]
        },
        {
          id: 'aiuto-risoluzione-problemi',
          title: 'Aiuto e Risoluzione Problemi',
          items: [
            {
              question: 'MACA non mostra app da controllare.',
              answer: 'Riavvia l\'app. Verifica che l\'audio stia effettivamente riproducendo in un\'altra app. Controlla che MACA abbia il permesso di accedere all\'audio: Impostazioni di Sistema → Privacy e Sicurezza → Input Audio.'
            },
            {
              question: 'L\'audio di un\'app continua a tornare al dispositivo predefinito.',
              answer: 'Questo può verificarsi se: l\'app è appena iniziata (MACA potrebbe aver bisogno di un momento per attivarsi), un\'altra app o il sistema operativo ha modificato il dispositivo audio di sistema. Prova a riselezionare manualmente il dispositivo nel menu MACA.'
            },
            {
              question: 'Il visualizzatore EQ non mostra attività.',
              answer: 'Assicurati che l\'audio stia riproducendo in quell\'app. L\'analizzatore si aggiorna in tempo reale, quindi l\'audio silenzioso non mostrerà nulla. Se ancora non funziona, chiudi la finestra EQ e riaprila.'
            },
            {
              question: 'Le scorciatoie da tastiera per i profili non funzionano.',
              answer: 'Controlla in Impostazioni → Scorciatoie da Tastiera che la tua scorciatoia sia abilitata e impostata su una combinazione di tasti unica. Verifica che sia stato concesso il permesso di monitoraggio dell\'input: Impostazioni di Sistema → Privacy e Sicurezza.'
            },
            {
              question: 'Ho accidentalmente raggiunto il mio limite (3 app in Gratuito). Che fare?',
              answer: 'Hai due opzioni: riavvia l\'app per aggiornare l\'elenco delle app in esecuzione, o passa a Pro per sbloccare il controllo illimitato delle app.'
            },
            {
              question: 'Posso controllare l\'audio nelle app in background?',
              answer: 'Sì. MACA controlla qualsiasi app con output audio, che sia in primo piano o in background.'
            },
            {
              question: 'MACA funziona con interfacce audio USB esterne?',
              answer: 'Assolutamente. Tutti i dispositivi audio che macOS riconosce (interfacce USB, DAC esterni, ecc.) appaiono nell\'elenco dei dispositivi di MACA.'
            },
            {
              question: 'Come fornisco feedback o segnalo un bug?',
              answer: 'Contattaci a support@getmaca.de. Apprezziamo segnalazioni di bug, richieste di funzionalità e feedback sull\'uso.'
            }
          ]
        }
      ],
      technicalStandards: {
        title: 'Standard Tecnici',
        sections: {
          equalizer: {
            title: 'Equalizzatore (EQ)',
            items: [
              'Bande di Frequenza ISO 216: 10 bande di frequenza di ottava seguendo lo standard internazionale',
              'Intervallo di Frequenza: 31 Hz a 16 kHz (copre l\'intervallo audio udibile)',
              'Controllo Parametrico (Pro): Guadagno, frequenza centrale, fattore Q secondo IEC 60268-17'
            ]
          },
          audioAnalysis: {
            title: 'Analisi Audio',
            items: [
              'FFT (Trasformata di Fourier Veloce): Analisi dello spettro in tempo reale secondo gli standard IEC',
              'Misurazione di Ritenzione dei Picchi: Standard IEC 60268-17 VU con ritenzione dei picchi per 2-3 secondi',
              'Rilevamento del Clipping: Rilevamento automatico del sovraccarico (0 dBFS)'
            ]
          },
          normalization: {
            title: 'Normalizzazione (Pro)',
            items: [
              'Normalizzatore Audio: Basato sullo standard LUFS (LKFS secondo ITU-R BS.1770-4)',
              'Valore Obiettivo: -16 LUFS (compatibile con piattaforme di streaming)'
            ]
          },
          audioLevels: {
            title: 'Standard di Livello Audio',
            items: [
              'Scala dB: Decibel (20×Log10 del rapporto)',
              'Volume Master: 0 dB (predefinito del sistema), intervallo +/- per il bilanciamento del livello',
              'Soglia di Clipping: 0 dBFS (massimo digitale)'
            ]
          }
        }
      }
    },
    pt: {
      pageTitle: 'MACA — Perguntas Frequentes',
      tableOfContents: 'Índice',
      categories: [
        {
          id: 'primeiros-passos',
          title: 'Primeiros Passos',
          items: [
            {
              question: 'O que é MACA?',
              answer: 'MACA (Master Audio Control App) é um utilitário da barra de menu do macOS que permite controlar o áudio por aplicativo. Em vez de apenas ajustar o volume do sistema, você pode definir volumes individuais para cada aplicativo em execução no seu Mac – perfeito para criadores, trabalhadores remotos e multitarefas.'
            },
            {
              question: 'Como instalo o MACA?',
              answer: 'Baixe o aplicativo da Mac App Store. MACA é instalado como um aplicativo da barra de menu e é executado discretamente em segundo plano. No primeiro lançamento, você será guiado através da configuração de permissões de áudio.'
            },
            {
              question: 'MACA precisa de configurações especiais?',
              answer: 'MACA requer permissão básica de acesso ao áudio (para capturar níveis de áudio por aplicativo) e opcionalmente permissão de monitoramento de entrada (para atalhos de teclado globais). Você será solicitado a conceder essas permissões durante a integração.'
            },
            {
              question: 'Posso usar MACA em versões mais antigas do macOS?',
              answer: 'MACA requer macOS 15 (Sequoia) ou mais recente. Recomendamos macOS 26+ para a melhor experiência e todos os recursos.'
            }
          ]
        },
        {
          id: 'recursos-principais',
          title: 'Recursos Principais',
          items: [
            {
              question: 'O que posso controlar no MACA?',
              answer: 'Você pode controlar: Volume por aplicativo (defina um nível de volume único 0–100%+ para cada aplicativo em execução), silenciamento por aplicativo (silencie instantaneamente aplicativos individuais), roteamento de áudio por aplicativo (envie áudio de qualquer aplicativo para um alto-falante ou fone de ouvido diferente), volume mestre (ajuste rapidamente o volume de todo o sistema da barra de menu) e troca de dispositivo (altere seu dispositivo de saída de áudio padrão).'
            },
            {
              question: 'Com quais aplicativos o MACA funciona?',
              answer: 'MACA funciona com qualquer aplicativo que emita áudio para o seu sistema – incluindo Music/Spotify/Apple Music/YouTube Music, Zoom/Teams/Discord/Google Meet, Safari/Chrome/Firefox, ferramentas profissionais (DAWs, edição de vídeo, software de streaming), jogos e aplicativos de entretenimento.'
            },
            {
              question: 'Posso controlar o áudio para aplicativos pausados?',
              answer: 'Sim. Você pode ajustar o volume e o estado de silenciamento para qualquer aplicativo, independentemente de estar reproduzindo ou inativo.'
            },
            {
              question: 'MACA usa drivers especiais ou extensões do kernel?',
              answer: 'Não. MACA usa apenas APIs de áudio nativas do macOS (Core Audio Taps), tornando-o totalmente compatível com a App Store e seguro. Nenhuma modificação de sistema de baixo nível necessária.'
            }
          ]
        },
        {
          id: 'gestao-audio',
          title: 'Gestão de Áudio',
          items: [
            {
              question: 'Como roteio o áudio de um aplicativo para um dispositivo específico?',
              answer: 'Clique no botão de dispositivo ao lado de um aplicativo no menu MACA. Um menu suspenso mostra todos os dispositivos de áudio disponíveis: alto-falantes/fones de ouvido integrados, dispositivos Bluetooth (AirPods, fones de ouvido, alto-falantes) e padrão do sistema. Selecione um dispositivo e todo o áudio desse aplicativo será roteado para lá imediatamente.'
            },
            {
              question: 'Vários aplicativos podem emitir para dispositivos diferentes simultaneamente?',
              answer: 'Absolutamente. Este é um dos recursos principais do MACA. O aplicativo A pode reproduzir através de fones de ouvido Bluetooth enquanto o aplicativo B reproduz através de seus alto-falantes ao mesmo tempo.'
            },
            {
              question: 'O que acontece se um dispositivo de áudio desconectar?',
              answer: 'MACA salva seu roteamento preferido. Se seu dispositivo Bluetooth desconectar, o áudio volta automaticamente para o seu dispositivo de saída padrão do sistema. Quando o dispositivo reconecta, MACA restaura o roteamento original para aplicativos afetados.'
            },
            {
              question: 'Como funciona o controle de volume mestre?',
              answer: 'O controle deslizante mestre na barra de menu ajusta o volume do seu sistema – assim como o controle de volume do macOS, mas no menu MACA para acesso mais fácil.'
            }
          ]
        },
        {
          id: 'perfis-presets',
          title: 'Perfis e Predefinições',
          items: [
            {
              question: 'O que são perfis de áudio?',
              answer: 'Os perfis de áudio permitem que você salve e recupere rapidamente configurações de áudio complexas. Exemplos: "Gaming" (volume do jogo aumentado, Spotify silencioso, Discord a 50%), "Gravação" (música, podcasts e navegador silenciados; apenas Discord ativo), "Noite Tardia" (volume reduzido; roteado para fones de ouvido). Crie perfis configurando os volumes/roteamento desejados, depois salve-os. Alterne entre perfis da barra de menu em um clique.'
            },
            {
              question: 'Quantos perfis posso salvar?',
              answer: 'Grátis: Sem perfis. Pro: Perfis ilimitados.'
            },
            {
              question: 'Os perfis podem incluir configurações de áudio como predefinições do equalizador?',
              answer: 'Sim (Pro). Quando você salva um perfil, ele pode incluir predefinições de EQ para aplicativos específicos. Quando você ativa o perfil, as configurações de EQ salvas são aplicadas automaticamente.'
            },
            {
              question: 'Posso renomear ou excluir perfis?',
              answer: 'Sim. Abra Configurações → Perfis e você pode editar, renomear ou excluir todos os perfis salvos.'
            }
          ]
        },
        {
          id: 'equalizador',
          title: 'Equalizador (EQ)',
          items: [
            {
              question: 'MACA tem um equalizador?',
              answer: 'Sim. MACA inclui um equalizador paramétrico de 10 bandas seguindo os padrões de frequência ISO 216. Abra a janela EQ da barra de menu ou clique duas vezes em um aplicativo.'
            },
            {
              question: 'O que posso fazer com o EQ?',
              answer: 'Você pode: ajustar EQ por aplicativo (ajuste o som de cada aplicativo individualmente, por ex., tornar Spotify mais quente, YouTube Music mais brilhante), usar predefinições (escolha entre predefinições de EQ integradas como Quente, Brilhante, Reforço de Graves, Pop Vocal), criar perfis personalizados, usar exibição de espectro em tempo real e visualizar retenção de pico.'
            },
            {
              question: 'Posso ver o que o EQ está fazendo em tempo real?',
              answer: 'Sim. O analisador de espectro na janela EQ mostra um gráfico em tempo real das frequências no áudio com bandas codificadas por cores e indicadores de pico.'
            },
            {
              question: 'Quais recursos de EQ estão disponíveis em Grátis vs. Pro?',
              answer: 'Grátis: EQ ISO de 10 bandas com predefinições e perfis básicos. Pro: Controle completo de EQ paramétrico (ganho, frequência, Q) + perfis personalizados ilimitados + normalizador mais poderoso.'
            },
            {
              question: 'O que é o "Normalizador de Áudio"?',
              answer: 'O Normalizador de Áudio (Pro) ajusta automaticamente os níveis por aplicativo para evitar picos ou quedas repentinas de volume entre aplicativos. Útil ao alternar entre podcasts silenciosos e jogos ruidosos.'
            }
          ]
        },
        {
          id: 'gratis-vs-pro',
          title: 'Grátis vs. Pro',
          items: [
            {
              question: 'Por que existe um limite de 3 aplicativos no nível Grátis?',
              answer: 'O nível Grátis foi projetado para apresentar a você o MACA com os casos de uso mais comuns (por ex., Zoom + Spotify + jogo). O limite de 3 aplicativos incentiva os usuários avançados a atualizar para Pro para gerenciar muitos aplicativos simultaneamente.'
            },
            {
              question: 'E se eu precisar controlar mais de 3 aplicativos?',
              answer: 'Atualize para MACA Pro, que desbloqueia controle ilimitado de aplicativos. Você pode gerenciar toda a sua configuração de áudio sem restrições.'
            },
            {
              question: 'Posso sincronizar os recursos Pro em vários Macs?',
              answer: 'Se você usar o Compartilhamento Familiar, a licença Pro é compartilhada via iCloud. Uma única compra Pro se aplica à sua conta em todos os seus Macs pessoais.'
            },
            {
              question: 'Quanto custa o Pro?',
              answer: 'O preço é definido na Mac App Store. Confira a listagem do aplicativo para o preço atual em sua região.'
            }
          ]
        },
        {
          id: 'ajuda-solucao-problemas',
          title: 'Ajuda e Solução de Problemas',
          items: [
            {
              question: 'MACA não mostra aplicativos para controlar.',
              answer: 'Reinicie o aplicativo. Verifique se o áudio está realmente reproduzindo em outro aplicativo. Verifique se MACA tem permissão para acessar o áudio: Configurações do Sistema → Privacidade e Segurança → Entrada de Áudio.'
            },
            {
              question: 'O áudio de um aplicativo continua voltando para o dispositivo padrão.',
              answer: 'Isso pode ocorrer se: o aplicativo acabou de iniciar (MACA pode precisar de um momento para ativar), outro aplicativo ou o sistema operacional alterou o dispositivo de áudio do sistema. Tente reselecionar manualmente o dispositivo no menu MACA.'
            },
            {
              question: 'O visualizador EQ não mostra atividade.',
              answer: 'Certifique-se de que o áudio esteja reproduzindo nesse aplicativo. O analisador é atualizado em tempo real, então o áudio silencioso não mostrará nada. Se ainda não funcionar, feche a janela EQ e reabra-a.'
            },
            {
              question: 'Os atalhos de teclado para perfis não estão funcionando.',
              answer: 'Verifique em Configurações → Atalhos de Teclado se seu atalho está habilitado e definido para uma combinação de teclas única. Verifique se a permissão de monitoramento de entrada foi concedida: Configurações do Sistema → Privacidade e Segurança.'
            },
            {
              question: 'Atingi acidentalmente meu limite (3 aplicativos em Grátis). E agora?',
              answer: 'Você tem duas opções: reinicie o aplicativo para atualizar a lista de aplicativos em execução, ou atualize para Pro para desbloquear controle ilimitado de aplicativos.'
            },
            {
              question: 'Posso controlar o áudio em aplicativos em segundo plano?',
              answer: 'Sim. MACA controla qualquer aplicativo com saída de áudio – seja em primeiro plano ou em segundo plano.'
            },
            {
              question: 'MACA funciona com interfaces de áudio USB externas?',
              answer: 'Absolutamente. Todos os dispositivos de áudio que o macOS reconhece (interfaces USB, DACs externos, etc.) aparecem na lista de dispositivos do MACA.'
            },
            {
              question: 'Como dou feedback ou relato um bug?',
              answer: 'Entre em contato conosco em support@getmaca.de. Apreciamos relatórios de bugs, solicitações de recursos e feedback de uso.'
            }
          ]
        }
      ],
      technicalStandards: {
        title: 'Padrões Técnicos',
        sections: {
          equalizer: {
            title: 'Equalizador (EQ)',
            items: [
              'Bandas de Frequência ISO 216: 10 bandas de frequência de oitava seguindo o padrão internacional',
              'Faixa de Frequência: 31 Hz a 16 kHz (cobre a faixa de áudio audível)',
              'Controle Paramétrico (Pro): Ganho, frequência central, fator Q por IEC 60268-17'
            ]
          },
          audioAnalysis: {
            title: 'Análise de Áudio',
            items: [
              'FFT (Transformada Rápida de Fourier): Análise de espectro em tempo real por padrões IEC',
              'Medição de Retenção de Pico: Padrão IEC 60268-17 VU com retenção de pico por 2-3 segundos',
              'Detecção de Clipping: Detecção automática de sobrecarga (0 dBFS)'
            ]
          },
          normalization: {
            title: 'Normalização (Pro)',
            items: [
              'Normalizador de Áudio: Baseado no padrão LUFS (LKFS por ITU-R BS.1770-4)',
              'Valor Alvo: -16 LUFS (compatível com plataformas de streaming)'
            ]
          },
          audioLevels: {
            title: 'Padrões de Nível de Áudio',
            items: [
              'Escala dB: Decibel (20×Log10 da relação)',
              'Volume Mestre: 0 dB (padrão do sistema), faixa +/- para balanceamento de nível',
              'Limite de Clipping: 0 dBFS (máximo digital)'
            ]
          }
        }
      }
    },
    ja: {
      pageTitle: 'MACA — よくある質問',
      tableOfContents: '目次',
      categories: [
        {
          id: '初めに',
          title: '初めに',
          items: [
            {
              question: 'MACAとは何ですか？',
              answer: 'MACA（Master Audio Control App）は、アプリごとにオーディオを制御できるmacOSメニューバーユーティリティです。システム音量を調整するだけでなく、Macで実行されている各アプリの個別音量を設定できます。クリエイター、リモートワーカー、マルチタスクに最適です。'
            },
            {
              question: 'MACAをインストールするにはどうすればよいですか？',
              answer: 'Mac App Storeからアプリをダウンロードしてください。MACAはメニューバーアプリとしてインストールされ、バックグラウンドで控えめに実行されます。初回起動時には、オーディオ権限の設定をガイドされます。'
            },
            {
              question: 'MACAには特別な設定が必要ですか？',
              answer: 'MACAには基本的なオーディオアクセス権限（アプリごとのオーディオレベルをキャプチャするため）と、オプションで入力監視権限（グローバルキーボードショートカット用）が必要です。オンボーディング中にこれらの権限を付与するよう求められます。'
            },
            {
              question: '古いmacOSバージョンでMACAを使用できますか？',
              answer: 'MACAにはmacOS 15（Sequoia）以降が必要です。最高のエクスペリエンスとすべての機能を利用するには、macOS 26+をお勧めします。'
            }
          ]
        },
        {
          id: 'コア機能',
          title: 'コア機能',
          items: [
            {
              question: 'MACAで何を制御できますか？',
              answer: '以下を制御できます：アプリごとの音量（実行中の各アプリに0〜100%+の独自の音量レベルを設定）、アプリごとのミュート（個別のアプリを即座にミュート）、アプリごとのオーディオルーティング（任意のアプリから別のスピーカーまたはヘッドフォンにオーディオを送信）、マスター音量（メニューバーからシステム全体の音量を素早く調整）、デバイス切り替え（デフォルトのオーディオ出力デバイスを変更）。'
            },
            {
              question: 'MACAはどのアプリで機能しますか？',
              answer: 'MACAはシステムにオーディオを出力する任意のアプリで機能します。Music/Spotify/Apple Music/YouTube Music、Zoom/Teams/Discord/Google Meet、Safari/Chrome/Firefox、プロフェッショナルツール（DAW、ビデオ編集、ストリーミングソフトウェア）、ゲームとエンターテイメントアプリが含まれます。'
            },
            {
              question: '一時停止中のアプリのオーディオを制御できますか？',
              answer: 'はい。現在再生中かどうかに関係なく、任意のアプリの音量とミュート状態を調整できます。'
            },
            {
              question: 'MACAは特別なドライバーやカーネル拡張を使用しますか？',
              answer: 'いいえ。MACAはmacOSのネイティブオーディオAPI（Core Audio Taps）のみを使用し、App Store完全準拠で安全です。低レベルのシステム変更は不要です。'
            }
          ]
        },
        {
          id: 'オーディオ管理',
          title: 'オーディオ管理',
          items: [
            {
              question: 'アプリから特定のデバイスにオーディオをルーティングするにはどうすればよいですか？',
              answer: 'MACAメニューでアプリの横にあるデバイスボタンをクリックします。ドロップダウンに利用可能なすべてのオーディオデバイスが表示されます：内蔵スピーカー/ヘッドフォン、Bluetoothデバイス（AirPods、ヘッドセット、スピーカー）、システムデフォルト。デバイスを選択すると、そのアプリのすべてのオーディオがすぐにそこにルーティングされます。'
            },
            {
              question: '複数のアプリを同時に異なるデバイスに出力できますか？',
              answer: '絶対に。これはMACAのコア機能の1つです。アプリAはBluetoothヘッドフォンで再生でき、同時にアプリBはスピーカーで再生できます。'
            },
            {
              question: 'オーディオデバイスが切断された場合はどうなりますか？',
              answer: 'MACAは優先ルーティングを保存します。Bluetoothデバイスが切断された場合、オーディオは自動的にシステムのデフォルト出力デバイスにフォールバックします。デバイスが再接続すると、MACAは影響を受けたアプリの元のルーティングを復元します。'
            },
            {
              question: 'マスター音量コントロールはどのように機能しますか？',
              answer: 'メニューバーのマスタースライダーはシステム音量を調整します。macOSの音量コントロールと同様ですが、より簡単にアクセスできるようMACAメニューにあります。'
            }
          ]
        },
        {
          id: 'プロファイルとプリセット',
          title: 'プロファイルとプリセット',
          items: [
            {
              question: 'オーディオプロファイルとは何ですか？',
              answer: 'オーディオプロファイルを使用すると、複雑なオーディオ設定を保存し、すばやく呼び出すことができます。例：「ゲーム」（ゲーム音量ブースト、Spotifyは静か、Discordは50%）、「録音」（音楽、ポッドキャスト、ブラウザはミュート、Discordのみアクティブ）、「深夜」（音量減少、ヘッドフォンにルーティング）。希望する音量/ルーティングを設定してプロファイルを作成し、保存します。メニューバーからワンクリックでプロファイルを切り替えます。'
            },
            {
              question: 'プロファイルはいくつ保存できますか？',
              answer: '無料：プロファイルなし。Pro：無制限のプロファイル。'
            },
            {
              question: 'プロファイルにイコライザープリセットなどのオーディオ設定を含めることができますか？',
              answer: 'はい（Pro）。プロファイルを保存すると、特定のアプリのEQプリセットを含めることができます。プロファイルをアクティブにすると、保存されたEQ設定が自動的に適用されます。'
            },
            {
              question: 'プロファイルの名前を変更または削除できますか？',
              answer: 'はい。設定→プロファイルを開くと、保存されたすべてのプロファイルを編集、名前変更、または削除できます。'
            }
          ]
        },
        {
          id: 'イコライザー',
          title: 'イコライザー（EQ）',
          items: [
            {
              question: 'MACAにはイコライザーがありますか？',
              answer: 'はい。MACAには、ISO 216周波数標準に従った10バンドパラメトリックイコライザーが含まれています。メニューバーからEQウィンドウを開くか、アプリをダブルクリックします。'
            },
            {
              question: 'EQで何ができますか？',
              answer: '以下ができます：アプリごとのEQ調整（各アプリのサウンドを個別に調整、例：Spotifyを暖かく、YouTube Musicを明るく）、プリセットの使用（Warm、Bright、Bass Boost、Vocal Popなどの内蔵EQプリセットから選択）、カスタムプロファイルの作成、リアルタイムスペクトラム表示の使用、ピークホールド視覚化の表示。'
            },
            {
              question: 'EQがリアルタイムで何をしているかを確認できますか？',
              answer: 'はい。EQウィンドウのスペクトラムアナライザーは、カラーコード化されたバンドとピークインジケーターを使用して、オーディオの周波数のリアルタイムグラフを表示します。'
            },
            {
              question: '無料版とPro版で利用できるEQ機能は何ですか？',
              answer: '無料：プリセットと基本プロファイル付きの10バンドISO EQ。Pro：完全なパラメトリックEQコントロール（ゲイン、周波数、Q）+ 無制限のカスタムプロファイル + より強力なノーマライザー。'
            },
            {
              question: '「オーディオノーマライザー」とは何ですか？',
              answer: 'オーディオノーマライザー（Pro）は、アプリごとのレベルを自動的に調整して、アプリ間の突然の音量スパイクやドロップを防ぎます。静かなポッドキャストと大音量のゲームの間を切り替えるときに便利です。'
            }
          ]
        },
        {
          id: '無料版とPro版',
          title: '無料版とPro版',
          items: [
            {
              question: '無料ティアに3アプリの制限があるのはなぜですか？',
              answer: '無料ティアは、最も一般的な使用ケース（例：Zoom + Spotify + ゲーム）でMACAを紹介するように設計されています。3アプリ制限は、多くのアプリを同時に管理するためにProにアップグレードすることをパワーユーザーに促します。'
            },
            {
              question: '3つ以上のアプリを制御する必要がある場合はどうすればよいですか？',
              answer: 'MACA Proにアップグレードすると、無制限のアプリコントロールが解除されます。制限なしでオーディオ設定全体を管理できます。'
            },
            {
              question: 'Pro機能を複数のMacで同期できますか？',
              answer: 'ファミリー共有を使用している場合、ProライセンスはiCloud経由で共有されます。1回のPro購入は、すべての個人用Macのアカウントに適用されます。'
            },
            {
              question: 'Proの価格はいくらですか？',
              answer: '価格はmacOS App Storeで設定されています。お住まいの地域の現在の価格については、アプリのリストを確認してください。'
            }
          ]
        },
        {
          id: 'ヘルプとトラブルシューティング',
          title: 'ヘルプとトラブルシューティング',
          items: [
            {
              question: 'MACAに制御するアプリが表示されません。',
              answer: 'アプリを再起動してください。別のアプリでオーディオが実際に再生されていることを確認してください。MACAにオーディオへのアクセス権限があることを確認してください：システム設定→プライバシーとセキュリティ→オーディオ入力。'
            },
            {
              question: 'アプリからのオーディオがデフォルトデバイスに戻り続けます。',
              answer: 'これは次の場合に発生する可能性があります：アプリが起動したばかり（MACAがアクティブ化するのに少し時間がかかる場合があります）、別のアプリまたはOSがシステムオーディオデバイスを変更した。MACAメニューでデバイスを手動で再選択してみてください。'
            },
            {
              question: 'EQビジュアライザーにアクティビティが表示されません。',
              answer: 'そのアプリでオーディオが再生されていることを確認してください。アナライザーはリアルタイムで更新されるため、無音のオーディオは何も表示されません。それでも機能しない場合は、EQウィンドウを閉じて再度開いてください。'
            },
            {
              question: 'プロファイルのキーボードショートカットが機能しません。',
              answer: '設定→キーボードショートカットで、ショートカットが有効になっており、一意のキーの組み合わせに設定されていることを確認してください。入力監視権限が付与されていることを確認してください：システム設定→プライバシーとセキュリティ。'
            },
            {
              question: '誤って制限に達しました（無料版の3アプリ）。どうすればよいですか？',
              answer: '2つのオプションがあります：アプリを再起動して実行中のアプリリストを更新するか、Proにアップグレードして無制限のアプリコントロールを解除します。'
            },
            {
              question: 'バックグラウンドアプリでオーディオを制御できますか？',
              answer: 'はい。MACAは、フォアグラウンドかバックグラウンドかに関係なく、オーディオ出力を持つ任意のアプリを制御します。'
            },
            {
              question: 'MACAは外部USBオーディオインターフェイスで動作しますか？',
              answer: '絶対に。macOSが認識するすべてのオーディオデバイス（USBインターフェイス、外部DACなど）がMACAのデバイスリストに表示されます。'
            },
            {
              question: 'フィードバックを提供したり、バグを報告するにはどうすればよいですか？',
              answer: 'support@getmaca.deまでお問い合わせください。バグレポート、機能リクエスト、使用フィードバックをお待ちしています。'
            }
          ]
        }
      ],
      technicalStandards: {
        title: '技術標準',
        sections: {
          equalizer: {
            title: 'イコライザー（EQ）',
            items: [
              'ISO 216周波数バンド：国際標準に従った10オクターブ周波数バンド',
              '周波数範囲：31 Hzから16 kHz（可聴オーディオ範囲をカバー）',
              'パラメトリックコントロール（Pro）：IEC 60268-17に従ったゲイン、中心周波数、Q係数'
            ]
          },
          audioAnalysis: {
            title: 'オーディオ分析',
            items: [
              'FFT（高速フーリエ変換）：IEC標準に基づくリアルタイムスペクトラム分析',
              'ピークホールドメータリング：2〜3秒のピークホールドを持つ標準IEC 60268-17 VUメータリング',
              'クリッピング検出：自動過負荷検出（0 dBFS）'
            ]
          },
          normalization: {
            title: 'ノーマライゼーション（Pro）',
            items: [
              'オーディオノーマライザー：LUFS標準（ITU-R BS.1770-4によるLKFS）に基づく',
              'ターゲット値：-16 LUFS（ストリーミングプラットフォームと互換）'
            ]
          },
          audioLevels: {
            title: 'オーディオレベル標準',
            items: [
              'dBスケール：デシベル（比率の20×Log10）',
              'マスター音量：0 dB（システムデフォルト）、レベルバランシング用の+/-範囲',
              'クリッピングしきい値：0 dBFS（デジタル最大値）'
            ]
          }
        }
      }
    },
    zh: {
      pageTitle: 'MACA — 常见问题',
      tableOfContents: '目录',
      categories: [
        {
          id: '入门',
          title: '入门',
          items: [
            {
              question: '什么是MACA？',
              answer: 'MACA（Master Audio Control App）是一个macOS菜单栏实用程序，可让您按应用程序控制音频。您不仅可以调整系统音量，还可以为Mac上运行的每个应用程序设置单独的音量——非常适合创作者、远程工作者和多任务处理者。'
            },
            {
              question: '如何安装MACA？',
              answer: '从Mac App Store下载应用程序。MACA作为菜单栏应用程序安装，并在后台悄悄运行。首次启动时，您将获得音频权限设置的指导。'
            },
            {
              question: 'MACA需要特殊设置吗？',
              answer: 'MACA需要基本的音频访问权限（以捕获每个应用程序的音频级别）和可选的输入监控权限（用于全局键盘快捷键）。在入职期间，您将被提示授予这些权限。'
            },
            {
              question: '我可以在较旧的macOS版本上使用MACA吗？',
              answer: 'MACA需要macOS 15（Sequoia）或更高版本。我们建议使用macOS 26+以获得最佳体验和所有功能。'
            }
          ]
        },
        {
          id: '核心功能',
          title: '核心功能',
          items: [
            {
              question: '我可以在MACA中控制什么？',
              answer: '您可以控制：每个应用程序的音量（为每个运行的应用程序设置0-100%+的独特音量级别）、每个应用程序的静音（立即将单个应用程序静音）、每个应用程序的音频路由（将任何应用程序的音频发送到不同的扬声器或耳机）、主音量（从菜单栏快速调整系统范围的音量）和设备切换（更改默认音频输出设备）。'
            },
            {
              question: 'MACA适用于哪些应用程序？',
              answer: 'MACA适用于向系统输出音频的任何应用程序，包括Music/Spotify/Apple Music/YouTube Music、Zoom/Teams/Discord/Google Meet、Safari/Chrome/Firefox、专业工具（DAW、视频编辑、流媒体软件）、游戏和娱乐应用程序。'
            },
            {
              question: '我可以控制已暂停应用程序的音频吗？',
              answer: '是的。无论应用程序当前是播放还是处于非活动状态，您都可以调整音量和静音状态。'
            },
            {
              question: 'MACA使用特殊驱动程序或内核扩展吗？',
              answer: '不。MACA仅使用原生macOS音频API（Core Audio Taps），使其完全符合App Store并且安全。不需要低级系统修改。'
            }
          ]
        },
        {
          id: '音频管理',
          title: '音频管理',
          items: [
            {
              question: '如何将应用程序的音频路由到特定设备？',
              answer: '单击MACA菜单中应用程序旁边的设备按钮。下拉菜单显示所有可用的音频设备：内置扬声器/耳机、蓝牙设备（AirPods、耳机、扬声器）和系统默认。选择一个设备，该应用程序的所有音频将立即路由到那里。'
            },
            {
              question: '多个应用程序可以同时输出到不同的设备吗？',
              answer: '当然可以。这是MACA的核心功能之一。应用程序A可以通过蓝牙耳机播放，而应用程序B同时通过扬声器播放。'
            },
            {
              question: '如果音频设备断开连接会发生什么？',
              answer: 'MACA保存您的首选路由。如果蓝牙设备断开连接，音频会自动回退到系统默认输出设备。当设备重新连接时，MACA会恢复受影响应用程序的原始路由。'
            },
            {
              question: '主音量控制如何工作？',
              answer: '菜单栏中的主滑块调整系统音量——就像macOS音量控制一样，但在MACA菜单中更容易访问。'
            }
          ]
        },
        {
          id: '配置文件和预设',
          title: '配置文件和预设',
          items: [
            {
              question: '什么是音频配置文件？',
              answer: '音频配置文件让您保存并快速调用复杂的音频设置。示例："游戏"（游戏音量增强，Spotify安静，Discord为50%）、"录音"（音乐、播客和浏览器静音；仅Discord活动）、"深夜"（音量降低；路由到耳机）。通过设置所需的音量/路由创建配置文件，然后保存它们。从菜单栏一键切换配置文件。'
            },
            {
              question: '我可以保存多少个配置文件？',
              answer: '免费：无配置文件。Pro：无限配置文件。'
            },
            {
              question: '配置文件可以包含均衡器预设等音频设置吗？',
              answer: '是的（Pro）。保存配置文件时，它可以包含特定应用程序的EQ预设。激活配置文件时，保存的EQ设置会自动应用。'
            },
            {
              question: '我可以重命名或删除配置文件吗？',
              answer: '是的。打开设置→配置文件，您可以编辑、重命名或删除所有保存的配置文件。'
            }
          ]
        },
        {
          id: '均衡器',
          title: '均衡器（EQ）',
          items: [
            {
              question: 'MACA有均衡器吗？',
              answer: '是的。MACA包含遵循ISO 216频率标准的10频段参数均衡器。从菜单栏打开EQ窗口或双击应用程序。'
            },
            {
              question: '我可以用EQ做什么？',
              answer: '您可以：调整每个应用程序的EQ（单独调整每个应用程序的声音，例如，使Spotify更温暖，YouTube Music更明亮）、使用预设（从内置EQ预设中选择，如温暖、明亮、低音增强、人声流行）、创建自定义配置文件、使用实时频谱显示和查看峰值保持可视化。'
            },
            {
              question: '我可以实时查看EQ在做什么吗？',
              answer: '是的。EQ窗口中的频谱分析仪显示音频中频率的实时图表，带有颜色编码的频段和峰值指示器。'
            },
            {
              question: '免费版和Pro版有哪些EQ功能？',
              answer: '免费：带有预设和基本配置文件的10频段ISO EQ。Pro：完整的参数EQ控制（增益、频率、Q）+ 无限自定义配置文件 + 更强大的规范化器。'
            },
            {
              question: '什么是"音频规范化器"？',
              answer: '音频规范化器（Pro）自动调整每个应用程序的级别，以防止应用程序之间突然的音量峰值或下降。在安静的播客和嘈杂的游戏之间切换时很有用。'
            }
          ]
        },
        {
          id: '免费版与Pro版',
          title: '免费版与Pro版',
          items: [
            {
              question: '为什么免费层有3个应用程序的限制？',
              answer: '免费层旨在通过最常见的用例（例如Zoom + Spotify + 游戏）向您介绍MACA。3个应用程序限制鼓励高级用户升级到Pro以同时管理许多应用程序。'
            },
            {
              question: '如果我需要控制超过3个应用程序怎么办？',
              answer: '升级到MACA Pro，它解锁无限应用程序控制。您可以无限制地管理整个音频设置。'
            },
            {
              question: '我可以在多台Mac上同步Pro功能吗？',
              answer: '如果您使用家庭共享，Pro许可将通过iCloud共享。单次Pro购买适用于您所有个人Mac上的帐户。'
            },
            {
              question: 'Pro要多少钱？',
              answer: '价格在macOS App Store中设置。查看应用程序列表以了解您所在地区的当前价格。'
            }
          ]
        },
        {
          id: '帮助和故障排除',
          title: '帮助和故障排除',
          items: [
            {
              question: 'MACA没有显示要控制的应用程序。',
              answer: '重新启动应用程序。验证音频实际上正在另一个应用程序中播放。检查MACA是否有权限访问音频：系统设置→隐私与安全→音频输入。'
            },
            {
              question: '应用程序的音频不断切换回默认设备。',
              answer: '如果发生这种情况：应用程序刚刚启动（MACA可能需要一点时间来激活）、另一个应用程序或操作系统更改了系统音频设备。尝试在MACA菜单中手动重新选择设备。'
            },
            {
              question: 'EQ可视化器没有显示活动。',
              answer: '确保音频正在该应用程序中播放。分析仪实时更新，因此静音音频不会显示任何内容。如果仍然不起作用，请关闭EQ窗口并重新打开它。'
            },
            {
              question: '配置文件的键盘快捷键不起作用。',
              answer: '在设置→键盘快捷键下检查您的快捷键是否已启用并设置为唯一的键组合。验证已授予输入监控权限：系统设置→隐私与安全。'
            },
            {
              question: '我不小心达到了我的限制（免费版中的3个应用程序）。现在怎么办？',
              answer: '您有两个选择：重新启动应用程序以刷新正在运行的应用程序列表，或升级到Pro以解锁无限应用程序控制。'
            },
            {
              question: '我可以控制后台应用程序中的音频吗？',
              answer: '是的。MACA控制具有音频输出的任何应用程序——无论是在前台还是后台。'
            },
            {
              question: 'MACA适用于外部USB音频接口吗？',
              answer: '当然。macOS识别的所有音频设备（USB接口、外部DAC等）都会出现在MACA的设备列表中。'
            },
            {
              question: '如何提供反馈或报告错误？',
              answer: '通过support@getmaca.de联系我们。我们感谢错误报告、功能请求和使用反馈。'
            }
          ]
        }
      ],
      technicalStandards: {
        title: '技术标准',
        sections: {
          equalizer: {
            title: '均衡器（EQ）',
            items: [
              'ISO 216频段：遵循国际标准的10个倍频程频段',
              '频率范围：31 Hz至16 kHz（涵盖可听音频范围）',
              '参数控制（Pro）：根据IEC 60268-17的增益、中心频率、Q因子'
            ]
          },
          audioAnalysis: {
            title: '音频分析',
            items: [
              'FFT（快速傅里叶变换）：根据IEC标准的实时频谱分析',
              '峰值保持测量：标准IEC 60268-17 VU测量，峰值保持2-3秒',
              '削波检测：自动过载检测（0 dBFS）'
            ]
          },
          normalization: {
            title: '规范化（Pro）',
            items: [
              '音频规范化器：基于LUFS标准（根据ITU-R BS.1770-4的LKFS）',
              '目标值：-16 LUFS（与流媒体平台兼容）'
            ]
          },
          audioLevels: {
            title: '音频电平标准',
            items: [
              'dB标度：分贝（比率的20×Log10）',
              '主音量：0 dB（系统默认）、用于电平平衡的+/-范围',
              '削波阈值：0 dBFS（数字最大值）'
            ]
          }
        }
      }
    }
  };

  return translations[lang];
};

export const faqContentTranslations: Record<Language, FAQContent> = {
  de: createFAQContent('de'),
  en: createFAQContent('en'),
  es: createFAQContent('es'),
  fr: createFAQContent('fr'),
  it: createFAQContent('it'),
  pt: createFAQContent('pt'),
  ja: createFAQContent('ja'),
  zh: createFAQContent('zh')
};
