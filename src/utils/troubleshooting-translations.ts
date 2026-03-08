import { Language } from '../locales/translations';

export interface TroubleshootingItem {
  title: string;
  description: string;
}

export interface TroubleshootingContent {
  pageTitle: string;
  headerBadge: string;
  backToHome: string;
  stillNeedHelp: string;
  stillNeedHelpDesc: string;
  items: TroubleshootingItem[];
}

export const troubleshootingTranslations: Partial<Record<Language, TroubleshootingContent>> & { en: TroubleshootingContent } = {
  en: {
    pageTitle: 'Troubleshooting',
    headerBadge: '\u{1F527} Troubleshooting',
    backToHome: 'Back to Home',
    stillNeedHelp: 'Still need help?',
    stillNeedHelpDesc: 'Our support team is happy to help.',
    items: [
      {
        title: 'No apps appear in the list',
        description: 'MACA shows apps as they begin producing audio. If no apps are listed, start playing audio in any app (music, video, browser, etc.) and it should appear within a few seconds.',
      },
      {
        title: 'Level meter shows no activity',
        description: 'The level meter displays audio levels only for apps that have an active audio tap in MACA. Apps must first appear in the app list and have their tap created before their audio registers on the meter.',
      },
      {
        title: 'An app disappeared from the list',
        description: 'The app may have stopped producing audio. Apps without active audio are removed from the list after a period of inactivity. Check if you accidentally hid it in Settings > App Visibility.',
      },
      {
        title: 'Audio sounds distorted',
        description: 'Check if the EQ is active for the affected app \u2014 the EQ button will be blue. Open the EQ and verify the settings, or click Reset to return to flat.',
      },
      {
        title: 'MACA does not appear in the menu bar',
        description: 'If Auto-Hide is enabled (Settings > General), the icon hides after 5 minutes of silence. Play audio or use the keyboard shortcut (default: Option+Command+M) to make it appear. Alternatively, disable Auto-Hide in Settings.',
      },
      {
        title: 'macOS version warning',
        description: 'MACA requires macOS 14.2 or later for Core Audio Tap support. If you see a system requirements banner, update macOS from System Settings > General > Software Update.',
      },
      {
        title: 'Audio cleanup after crash',
        description: 'If MACA crashes or is force-quit, orphaned audio devices may remain. Relaunch MACA \u2014 it automatically detects and removes orphaned devices on startup and during periodic health checks. You can also manually run a health check in Settings > System.',
      },
    ],
  },
  de: {
    pageTitle: 'Fehlerbehebung',
    headerBadge: '\u{1F527} Fehlerbehebung',
    backToHome: 'Zur\u00fcck zur Startseite',
    stillNeedHelp: 'Noch Hilfe ben\u00f6tigt?',
    stillNeedHelpDesc: 'Unser Support-Team hilft gerne weiter.',
    items: [
      {
        title: 'Keine Apps in der Liste sichtbar',
        description: 'MACA zeigt Apps an, sobald sie Audio wiedergeben. Wenn keine Apps aufgelistet sind, starte die Audiowiedergabe in einer beliebigen App (Musik, Video, Browser usw.) \u2014 sie sollte innerhalb weniger Sekunden erscheinen.',
      },
      {
        title: 'Pegelanzeige zeigt keine Aktivit\u00e4t',
        description: 'Die Pegelanzeige zeigt Audiopegel nur f\u00fcr Apps an, die einen aktiven Audio-Tap in MACA haben. Apps m\u00fcssen zuerst in der App-Liste erscheinen und ihr Tap muss erstellt sein, bevor ihr Audio auf der Anzeige registriert wird.',
      },
      {
        title: 'Eine App ist aus der Liste verschwunden',
        description: 'Die App hat m\u00f6glicherweise die Audiowiedergabe beendet. Apps ohne aktives Audio werden nach einer Zeit der Inaktivit\u00e4t aus der Liste entfernt. Pr\u00fcfe, ob du sie versehentlich in Einstellungen > App-Sichtbarkeit ausgeblendet hast.',
      },
      {
        title: 'Audio klingt verzerrt',
        description: 'Pr\u00fcfe, ob der EQ f\u00fcr die betroffene App aktiv ist \u2014 der EQ-Button ist dann blau. \u00d6ffne den EQ und \u00fcberpr\u00fcfe die Einstellungen, oder klicke auf Zur\u00fccksetzen, um zum Flat-Profil zur\u00fcckzukehren.',
      },
      {
        title: 'MACA erscheint nicht in der Men\u00fcleiste',
        description: 'Wenn Auto-Ausblenden aktiviert ist (Einstellungen > Allgemein), wird das Symbol nach 5 Minuten Stille ausgeblendet. Spiele Audio ab oder verwende das Tastaturk\u00fcrzel (Standard: Option+Command+M), um es wieder anzuzeigen. Alternativ kannst du Auto-Ausblenden in den Einstellungen deaktivieren.',
      },
      {
        title: 'macOS-Versionswarnung',
        description: 'MACA erfordert macOS 14.2 oder neuer f\u00fcr Core Audio Tap-Unterst\u00fctzung. Wenn du ein Systemanforderungs-Banner siehst, aktualisiere macOS \u00fcber Systemeinstellungen > Allgemein > Softwareupdate.',
      },
      {
        title: 'Audio-Bereinigung nach Absturz',
        description: 'Wenn MACA abst\u00fcrzt oder erzwungen beendet wird, k\u00f6nnen verwaiste Audio-Ger\u00e4te zur\u00fcckbleiben. Starte MACA neu \u2014 es erkennt und entfernt verwaiste Ger\u00e4te automatisch beim Start und bei regelm\u00e4\u00dfigen Gesundheitspr\u00fcfungen. Du kannst auch manuell eine Gesundheitspr\u00fcfung in Einstellungen > System durchf\u00fchren.',
      },
    ],
  },
  es: {
    pageTitle: 'Soluci\u00f3n de problemas',
    headerBadge: '\u{1F527} Soluci\u00f3n de problemas',
    backToHome: 'Volver a Inicio',
    stillNeedHelp: '\u00bfA\u00fan necesitas ayuda?',
    stillNeedHelpDesc: 'Nuestro equipo de soporte est\u00e1 encantado de ayudar.',
    items: [
      {
        title: 'No aparecen apps en la lista',
        description: 'MACA muestra las apps a medida que comienzan a producir audio. Si no hay apps en la lista, reproduce audio en cualquier app (m\u00fasica, video, navegador, etc.) y deber\u00eda aparecer en pocos segundos.',
      },
      {
        title: 'El medidor de nivel no muestra actividad',
        description: 'El medidor de nivel muestra los niveles de audio solo para las apps que tienen un tap de audio activo en MACA. Las apps deben aparecer primero en la lista y tener su tap creado antes de que su audio se registre en el medidor.',
      },
      {
        title: 'Una app desapareci\u00f3 de la lista',
        description: 'La app puede haber dejado de producir audio. Las apps sin audio activo se eliminan de la lista despu\u00e9s de un per\u00edodo de inactividad. Verifica si la ocultaste accidentalmente en Ajustes > Visibilidad de apps.',
      },
      {
        title: 'El audio suena distorsionado',
        description: 'Verifica si el EQ est\u00e1 activo para la app afectada \u2014 el bot\u00f3n del EQ estar\u00e1 azul. Abre el EQ y verifica los ajustes, o haz clic en Restablecer para volver a plano.',
      },
      {
        title: 'MACA no aparece en la barra de men\u00fa',
        description: 'Si Auto-Ocultar est\u00e1 habilitado (Ajustes > General), el icono se oculta despu\u00e9s de 5 minutos de silencio. Reproduce audio o usa el atajo de teclado (predeterminado: Option+Command+M) para que aparezca. Alternativamente, desactiva Auto-Ocultar en Ajustes.',
      },
      {
        title: 'Advertencia de versi\u00f3n de macOS',
        description: 'MACA requiere macOS 14.2 o posterior para el soporte de Core Audio Tap. Si ves un banner de requisitos del sistema, actualiza macOS desde Ajustes del Sistema > General > Actualizaci\u00f3n de software.',
      },
      {
        title: 'Limpieza de audio tras un fallo',
        description: 'Si MACA se bloquea o se fuerza el cierre, pueden quedar dispositivos de audio hu\u00e9rfanos. Reinicia MACA \u2014 detecta y elimina autom\u00e1ticamente los dispositivos hu\u00e9rfanos al iniciar y durante las comprobaciones peri\u00f3dicas. Tambi\u00e9n puedes ejecutar una comprobaci\u00f3n manual en Ajustes > Sistema.',
      },
    ],
  },
  fr: {
    pageTitle: 'D\u00e9pannage',
    headerBadge: '\u{1F527} D\u00e9pannage',
    backToHome: 'Retour \u00e0 l\'Accueil',
    stillNeedHelp: 'Besoin d\'aide suppl\u00e9mentaire\u00a0?',
    stillNeedHelpDesc: 'Notre \u00e9quipe de support est heureuse d\'aider.',
    items: [
      {
        title: 'Aucune app n\'appara\u00eet dans la liste',
        description: 'MACA affiche les apps d\u00e8s qu\'elles commencent \u00e0 produire du son. Si aucune app n\'est list\u00e9e, lancez la lecture audio dans n\'importe quelle app (musique, vid\u00e9o, navigateur, etc.) et elle devrait appara\u00eetre en quelques secondes.',
      },
      {
        title: 'Le vum\u00e8tre ne montre aucune activit\u00e9',
        description: 'Le vum\u00e8tre affiche les niveaux audio uniquement pour les apps ayant un tap audio actif dans MACA. Les apps doivent d\'abord appara\u00eetre dans la liste et avoir leur tap cr\u00e9\u00e9 avant que leur audio ne s\'affiche sur le vum\u00e8tre.',
      },
      {
        title: 'Une app a disparu de la liste',
        description: 'L\'app a peut-\u00eatre cess\u00e9 de produire du son. Les apps sans audio actif sont retir\u00e9es de la liste apr\u00e8s une p\u00e9riode d\'inactivit\u00e9. V\u00e9rifiez si vous l\'avez accidentellement masqu\u00e9e dans R\u00e9glages > Visibilit\u00e9 des apps.',
      },
      {
        title: 'L\'audio semble d\u00e9form\u00e9',
        description: 'V\u00e9rifiez si l\'\u00e9galiseur est actif pour l\'app concern\u00e9e \u2014 le bouton EQ sera bleu. Ouvrez l\'\u00e9galiseur et v\u00e9rifiez les param\u00e8tres, ou cliquez sur R\u00e9initialiser pour revenir \u00e0 plat.',
      },
      {
        title: 'MACA n\'appara\u00eet pas dans la barre de menus',
        description: 'Si le masquage automatique est activ\u00e9 (R\u00e9glages > G\u00e9n\u00e9ral), l\'ic\u00f4ne se masque apr\u00e8s 5 minutes de silence. Lisez de l\'audio ou utilisez le raccourci clavier (par d\u00e9faut\u00a0: Option+Command+M) pour le faire appara\u00eetre. Vous pouvez aussi d\u00e9sactiver le masquage automatique dans les R\u00e9glages.',
      },
      {
        title: 'Avertissement de version macOS',
        description: 'MACA n\u00e9cessite macOS 14.2 ou ult\u00e9rieur pour le support Core Audio Tap. Si vous voyez une banni\u00e8re de configuration requise, mettez \u00e0 jour macOS depuis R\u00e9glages du syst\u00e8me > G\u00e9n\u00e9ral > Mise \u00e0 jour logicielle.',
      },
      {
        title: 'Nettoyage audio apr\u00e8s un plantage',
        description: 'Si MACA plante ou est forc\u00e9 \u00e0 quitter, des p\u00e9riph\u00e9riques audio orphelins peuvent subsister. Relancez MACA \u2014 il d\u00e9tecte et supprime automatiquement les p\u00e9riph\u00e9riques orphelins au d\u00e9marrage et lors des v\u00e9rifications p\u00e9riodiques. Vous pouvez aussi lancer une v\u00e9rification manuelle dans R\u00e9glages > Syst\u00e8me.',
      },
    ],
  },
  it: {
    pageTitle: 'Risoluzione dei problemi',
    headerBadge: '\u{1F527} Risoluzione dei problemi',
    backToHome: 'Torna alla Home',
    stillNeedHelp: 'Hai ancora bisogno di aiuto?',
    stillNeedHelpDesc: 'Il nostro team di supporto \u00e8 felice di aiutare.',
    items: [
      {
        title: 'Nessuna app appare nella lista',
        description: 'MACA mostra le app man mano che iniziano a produrre audio. Se non ci sono app elencate, avvia la riproduzione audio in qualsiasi app (musica, video, browser, ecc.) e dovrebbe apparire entro pochi secondi.',
      },
      {
        title: 'L\'indicatore di livello non mostra attivit\u00e0',
        description: 'L\'indicatore di livello mostra i livelli audio solo per le app che hanno un tap audio attivo in MACA. Le app devono prima apparire nell\'elenco e avere il tap creato prima che il loro audio venga registrato sull\'indicatore.',
      },
      {
        title: 'Un\'app \u00e8 scomparsa dalla lista',
        description: 'L\'app potrebbe aver smesso di produrre audio. Le app senza audio attivo vengono rimosse dalla lista dopo un periodo di inattivit\u00e0. Controlla se l\'hai nascosta accidentalmente in Impostazioni > Visibilit\u00e0 app.',
      },
      {
        title: 'L\'audio suona distorto',
        description: 'Controlla se l\'EQ \u00e8 attivo per l\'app interessata \u2014 il pulsante EQ sar\u00e0 blu. Apri l\'EQ e verifica le impostazioni, oppure fai clic su Reimposta per tornare al profilo piatto.',
      },
      {
        title: 'MACA non appare nella barra dei menu',
        description: 'Se l\'auto-nascondimento \u00e8 attivato (Impostazioni > Generali), l\'icona si nasconde dopo 5 minuti di silenzio. Riproduci audio o usa la scorciatoia da tastiera (predefinita: Option+Command+M) per farlo apparire. In alternativa, disattiva l\'auto-nascondimento nelle Impostazioni.',
      },
      {
        title: 'Avviso versione macOS',
        description: 'MACA richiede macOS 14.2 o successivo per il supporto Core Audio Tap. Se vedi un banner dei requisiti di sistema, aggiorna macOS da Impostazioni di Sistema > Generali > Aggiornamento Software.',
      },
      {
        title: 'Pulizia audio dopo un arresto anomalo',
        description: 'Se MACA si arresta in modo anomalo o viene forzato a chiudersi, potrebbero rimanere dispositivi audio orfani. Riavvia MACA \u2014 rileva e rimuove automaticamente i dispositivi orfani all\'avvio e durante i controlli periodici. Puoi anche eseguire manualmente un controllo in Impostazioni > Sistema.',
      },
    ],
  },
  ja: {
    pageTitle: '\u30c8\u30e9\u30d6\u30eb\u30b7\u30e5\u30fc\u30c6\u30a3\u30f3\u30b0',
    headerBadge: '\u{1F527} \u30c8\u30e9\u30d6\u30eb\u30b7\u30e5\u30fc\u30c6\u30a3\u30f3\u30b0',
    backToHome: '\u30db\u30fc\u30e0\u306b\u623b\u308b',
    stillNeedHelp: '\u307e\u3060\u304a\u56f0\u308a\u3067\u3059\u304b\uff1f',
    stillNeedHelpDesc: '\u30b5\u30dd\u30fc\u30c8\u30c1\u30fc\u30e0\u304c\u559c\u3093\u3067\u304a\u624b\u4f1d\u3044\u3057\u307e\u3059\u3002',
    items: [
      {
        title: '\u30ea\u30b9\u30c8\u306b\u30a2\u30d7\u30ea\u304c\u8868\u793a\u3055\u308c\u306a\u3044',
        description: 'MACA\u306f\u30a2\u30d7\u30ea\u304c\u30aa\u30fc\u30c7\u30a3\u30aa\u3092\u751f\u6210\u3057\u59cb\u3081\u308b\u3068\u8868\u793a\u3057\u307e\u3059\u3002\u30a2\u30d7\u30ea\u304c\u30ea\u30b9\u30c8\u306b\u306a\u3044\u5834\u5408\u306f\u3001\u4efb\u610f\u306e\u30a2\u30d7\u30ea\uff08\u97f3\u697d\u3001\u52d5\u753b\u3001\u30d6\u30e9\u30a6\u30b6\u306a\u3069\uff09\u3067\u30aa\u30fc\u30c7\u30a3\u30aa\u3092\u518d\u751f\u3059\u308b\u3068\u3001\u6570\u79d2\u4ee5\u5185\u306b\u8868\u793a\u3055\u308c\u307e\u3059\u3002',
      },
      {
        title: '\u30ec\u30d9\u30eb\u30e1\u30fc\u30bf\u30fc\u304c\u52d5\u4f5c\u3057\u306a\u3044',
        description: '\u30ec\u30d9\u30eb\u30e1\u30fc\u30bf\u30fc\u306f\u3001MACA\u3067\u30a2\u30af\u30c6\u30a3\u30d6\u306a\u30aa\u30fc\u30c7\u30a3\u30aa\u30bf\u30c3\u30d7\u3092\u6301\u3064\u30a2\u30d7\u30ea\u306e\u30aa\u30fc\u30c7\u30a3\u30aa\u30ec\u30d9\u30eb\u306e\u307f\u8868\u793a\u3057\u307e\u3059\u3002\u30a2\u30d7\u30ea\u304c\u30e1\u30fc\u30bf\u30fc\u306b\u767b\u9332\u3055\u308c\u308b\u306b\u306f\u3001\u307e\u305a\u30a2\u30d7\u30ea\u30ea\u30b9\u30c8\u306b\u8868\u793a\u3055\u308c\u3001\u30bf\u30c3\u30d7\u304c\u4f5c\u6210\u3055\u308c\u308b\u5fc5\u8981\u304c\u3042\u308a\u307e\u3059\u3002',
      },
      {
        title: '\u30a2\u30d7\u30ea\u304c\u30ea\u30b9\u30c8\u304b\u3089\u6d88\u3048\u305f',
        description: '\u30a2\u30d7\u30ea\u304c\u30aa\u30fc\u30c7\u30a3\u30aa\u306e\u751f\u6210\u3092\u505c\u6b62\u3057\u305f\u53ef\u80fd\u6027\u304c\u3042\u308a\u307e\u3059\u3002\u30a2\u30af\u30c6\u30a3\u30d6\u306a\u30aa\u30fc\u30c7\u30a3\u30aa\u304c\u306a\u3044\u30a2\u30d7\u30ea\u306f\u3001\u4e00\u5b9a\u671f\u9593\u306e\u975e\u30a2\u30af\u30c6\u30a3\u30d6\u5f8c\u306b\u30ea\u30b9\u30c8\u304b\u3089\u524a\u9664\u3055\u308c\u307e\u3059\u3002\u8a2d\u5b9a > \u30a2\u30d7\u30ea\u306e\u8868\u793a\u3067\u8aa4\u3063\u3066\u975e\u8868\u793a\u306b\u3057\u3066\u3044\u306a\u3044\u304b\u78ba\u8a8d\u3057\u3066\u304f\u3060\u3055\u3044\u3002',
      },
      {
        title: '\u30aa\u30fc\u30c7\u30a3\u30aa\u304c\u6b6a\u3093\u3067\u805e\u3053\u3048\u308b',
        description: '\u5f71\u97ff\u3092\u53d7\u3051\u3066\u3044\u308b\u30a2\u30d7\u30ea\u306eEQ\u304c\u30a2\u30af\u30c6\u30a3\u30d6\u304b\u78ba\u8a8d\u3057\u3066\u304f\u3060\u3055\u3044\u2014EQ\u30dc\u30bf\u30f3\u304c\u9752\u304f\u306a\u3063\u3066\u3044\u307e\u3059\u3002EQ\u3092\u958b\u3044\u3066\u8a2d\u5b9a\u3092\u78ba\u8a8d\u3059\u308b\u304b\u3001\u30ea\u30bb\u30c3\u30c8\u3092\u30af\u30ea\u30c3\u30af\u3057\u3066\u30d5\u30e9\u30c3\u30c8\u306b\u623b\u3057\u3066\u304f\u3060\u3055\u3044\u3002',
      },
      {
        title: 'MACA\u304c\u30e1\u30cb\u30e5\u30fc\u30d0\u30fc\u306b\u8868\u793a\u3055\u308c\u306a\u3044',
        description: '\u81ea\u52d5\u975e\u8868\u793a\u304c\u6709\u52b9\u306a\u5834\u5408\uff08\u8a2d\u5b9a > \u4e00\u822c\uff09\u3001\u30a2\u30a4\u30b3\u30f3\u306f5\u5206\u9593\u306e\u7121\u97f3\u5f8c\u306b\u975e\u8868\u793a\u306b\u306a\u308a\u307e\u3059\u3002\u30aa\u30fc\u30c7\u30a3\u30aa\u3092\u518d\u751f\u3059\u308b\u304b\u3001\u30ad\u30fc\u30dc\u30fc\u30c9\u30b7\u30e7\u30fc\u30c8\u30ab\u30c3\u30c8\uff08\u30c7\u30d5\u30a9\u30eb\u30c8: Option+Command+M\uff09\u3092\u4f7f\u7528\u3057\u3066\u8868\u793a\u3055\u305b\u3066\u304f\u3060\u3055\u3044\u3002\u307e\u305f\u306f\u3001\u8a2d\u5b9a\u3067\u81ea\u52d5\u975e\u8868\u793a\u3092\u7121\u52b9\u306b\u3057\u3066\u304f\u3060\u3055\u3044\u3002',
      },
      {
        title: 'macOS\u30d0\u30fc\u30b8\u30e7\u30f3\u8b66\u544a',
        description: 'MACA\u306fCore Audio Tap\u30b5\u30dd\u30fc\u30c8\u306b macOS 14.2\u4ee5\u964d\u304c\u5fc5\u8981\u3067\u3059\u3002\u30b7\u30b9\u30c6\u30e0\u8981\u4ef6\u30d0\u30ca\u30fc\u304c\u8868\u793a\u3055\u308c\u308b\u5834\u5408\u306f\u3001\u30b7\u30b9\u30c6\u30e0\u8a2d\u5b9a > \u4e00\u822c > \u30bd\u30d5\u30c8\u30a6\u30a7\u30a2\u30a2\u30c3\u30d7\u30c7\u30fc\u30c8\u304b\u3089macOS\u3092\u66f4\u65b0\u3057\u3066\u304f\u3060\u3055\u3044\u3002',
      },
      {
        title: '\u30af\u30e9\u30c3\u30b7\u30e5\u5f8c\u306e\u30aa\u30fc\u30c7\u30a3\u30aa\u30af\u30ea\u30fc\u30f3\u30a2\u30c3\u30d7',
        description: 'MACA\u304c\u30af\u30e9\u30c3\u30b7\u30e5\u307e\u305f\u306f\u5f37\u5236\u7d42\u4e86\u3057\u305f\u5834\u5408\u3001\u5b64\u7acb\u3057\u305f\u30aa\u30fc\u30c7\u30a3\u30aa\u30c7\u30d0\u30a4\u30b9\u304c\u6b8b\u308b\u3053\u3068\u304c\u3042\u308a\u307e\u3059\u3002MACA\u3092\u518d\u8d77\u52d5\u3057\u3066\u304f\u3060\u3055\u3044\u2014\u8d77\u52d5\u6642\u304a\u3088\u3073\u5b9a\u671f\u7684\u306a\u30d8\u30eb\u30b9\u30c1\u30a7\u30c3\u30af\u4e2d\u306b\u5b64\u7acb\u30c7\u30d0\u30a4\u30b9\u3092\u81ea\u52d5\u691c\u51fa\u30fb\u524a\u9664\u3057\u307e\u3059\u3002\u8a2d\u5b9a > \u30b7\u30b9\u30c6\u30e0\u3067\u624b\u52d5\u30d8\u30eb\u30b9\u30c1\u30a7\u30c3\u30af\u3082\u5b9e\u884c\u3067\u304d\u307e\u3059\u3002',
      },
    ],
  },
  ar: {
    pageTitle: 'حل المشكلات',
    headerBadge: '\u{1F527} حل المشكلات',
    backToHome: 'العودة للرئيسية',
    stillNeedHelp: 'لا تزال بحاجة إلى مساعدة؟',
    stillNeedHelpDesc: 'فريق الدعم لدينا سعيد بمساعدتك.',
    items: [
      { title: 'لا تظهر أي تطبيقات في القائمة', description: 'يعرض MACA التطبيقات عندما تبدأ في إنتاج الصوت. إذا لم تكن هناك تطبيقات مدرجة، ابدأ تشغيل الصوت في أي تطبيق (موسيقى، فيديو، متصفح، إلخ) ويجب أن يظهر خلال ثوانٍ قليلة.' },
      { title: 'مقياس المستوى لا يظهر أي نشاط', description: 'يعرض مقياس المستوى مستويات الصوت فقط للتطبيقات التي لديها التقاط صوت نشط في MACA. يجب أن تظهر التطبيقات أولاً في القائمة ويتم إنشاء التقاطها قبل أن يسجل صوتها على المقياس.' },
      { title: 'ختفت تطبيق من القائمة', description: 'ربما توقف التطبيق عن إنتاج الصوت. تتم إزالة التطبيقات بدون صوت نشط من القائمة بعد فترة من عدم النشاط. تحقق مما إذا أخفيته عن طريق الخطأ في الإعدادات > رؤية التطبيقات.' },
      { title: 'الصوت يبدو مشوهًا', description: 'تحقق مما إذا كان المعادل نشطًا للتطبيق المتأثر — سيكون زر EQ أزرق. افتح المعادل وتحقق من الإعدادات، أو انقر على إعادة التعيين للعودة إلى الوضع المسطح.' },
      { title: 'MACA لا يظهر في شريط القوائم', description: 'إذا كان الإخفاء التلقائي مفعلاً (الإعدادات > عام)، يختفي الأيقونة بعد 5 دقائق من الصمت. شغل الصوت أو استخدم اختصار لوحة المفاتيح (افتراضي: Option+Command+M) لإظهاره.' },
      { title: 'تحذير إصدار macOS', description: 'يتطلب MACA نظام macOS 14.2 أو أحدث لدعم Core Audio Tap. إذا رأيت لافتة متطلبات النظام، قم بتحديث macOS من إعدادات النظام > عام > تحديث البرامج.' },
      { title: 'تنظيف الصوت بعد التعطل', description: 'إذا تعطل MACA أو تم إنهاؤه بالقوة، قد تبقى أجهزة صوت يتيمة. أعد تشغيل MACA — يكتشف ويزيل تلقائيًا الأجهزة اليتيمة عند بدء التشغيل وأثناء الفحوصات الدورية. يمكنك أيضًا تشغيل فحص يدوي في الإعدادات > النظام.' },
    ],
  },
  ru: {
    pageTitle: 'Устранение неполадок',
    headerBadge: '\u{1F527} Устранение неполадок',
    backToHome: 'На главную',
    stillNeedHelp: 'Всё ещё нужна помощь?',
    stillNeedHelpDesc: 'Наша служба поддержки рада помочь.',
    items: [
      { title: 'Приложения не отображаются в списке', description: 'MACA показывает приложения, когда они начинают воспроизводить звук. Если приложений нет в списке, запустите воспроизведение звука в любом приложении (музыка, видео, браузер и т.д.) — оно должно появиться в течение нескольких секунд.' },
      { title: 'Индикатор уровня не показывает активность', description: 'Индикатор уровня отображает уровни звука только для приложений с активным аудио-перехватом в MACA. Приложения должны сначала появиться в списке, и их перехват должен быть создан, прежде чем их звук будет зарегистрирован на индикаторе.' },
      { title: 'Приложение исчезло из списка', description: 'Приложение могло прекратить воспроизводить звук. Приложения без активного звука удаляются из списка после периода неактивности. Проверьте, не скрыли ли вы его случайно в Настройки > Видимость приложений.' },
      { title: 'Звук искажён', description: 'Проверьте, активен ли эквалайзер для затронутого приложения — кнопка EQ будет синей. Откройте эквалайзер и проверьте настройки или нажмите «Сброс» для возврата к плоскому профилю.' },
      { title: 'MACA не отображается в строке меню', description: 'Если включено автоскрытие (Настройки > Основные), значок скрывается через 5 минут тишины. Воспроизведите звук или используйте сочетание клавиш (по умолчанию: Option+Command+M), чтобы показать его.' },
      { title: 'Предупреждение о версии macOS', description: 'MACA требует macOS 14.2 или новее для поддержки Core Audio Tap. Если вы видите баннер о системных требованиях, обновите macOS через Системные настройки > Основные > Обновление ПО.' },
      { title: 'Очистка звука после сбоя', description: 'Если MACA аварийно завершается или принудительно закрывается, могут остаться осиротевшие аудиоустройства. Перезапустите MACA — он автоматически обнаруживает и удаляет осиротевшие устройства при запуске и во время периодических проверок. Вы также можете вручную запустить проверку в Настройки > Система.' },
    ],
  },
  nl: {
    pageTitle: 'Problemen oplossen',
    headerBadge: '\u{1F527} Problemen oplossen',
    backToHome: 'Terug naar startpagina',
    stillNeedHelp: 'Nog hulp nodig?',
    stillNeedHelpDesc: 'Ons supportteam helpt je graag.',
    items: [
      { title: 'Er verschijnen geen apps in de lijst', description: 'MACA toont apps zodra ze audio beginnen te produceren. Als er geen apps worden vermeld, start dan het afspelen van audio in een app (muziek, video, browser, enz.) en deze zou binnen enkele seconden moeten verschijnen.' },
      { title: 'Niveaumeter toont geen activiteit', description: 'De niveaumeter toont alleen audioniveaus voor apps met een actieve audiotap in MACA. Apps moeten eerst in de app-lijst verschijnen en hun tap moet zijn aangemaakt voordat hun audio wordt geregistreerd op de meter.' },
      { title: 'Een app is verdwenen uit de lijst', description: 'De app is mogelijk gestopt met het produceren van audio. Apps zonder actieve audio worden na een periode van inactiviteit uit de lijst verwijderd. Controleer of je deze per ongeluk hebt verborgen in Instellingen > App-zichtbaarheid.' },
      { title: 'Audio klinkt vervormd', description: 'Controleer of de EQ actief is voor de betreffende app — de EQ-knop zal blauw zijn. Open de EQ en controleer de instellingen, of klik op Reset om terug te keren naar vlak.' },
      { title: 'MACA verschijnt niet in de menubalk', description: 'Als Automatisch verbergen is ingeschakeld (Instellingen > Algemeen), verbergt het pictogram zich na 5 minuten stilte. Speel audio af of gebruik de sneltoets (standaard: Option+Command+M) om het te laten verschijnen.' },
      { title: 'macOS-versiewaarschuwing', description: 'MACA vereist macOS 14.2 of nieuwer voor Core Audio Tap-ondersteuning. Als je een systeemvereisten-banner ziet, werk macOS bij via Systeeminstellingen > Algemeen > Software-update.' },
      { title: 'Audio-opschoning na crash', description: 'Als MACA crasht of geforceerd wordt afgesloten, kunnen verweesd audiodevices overblijven. Herstart MACA — het detecteert en verwijdert automatisch verweesd apparaten bij het opstarten en tijdens periodieke controles. Je kunt ook handmatig een controle uitvoeren in Instellingen > Systeem.' },
    ],
  },
  tr: {
    pageTitle: 'Sorun Giderme',
    headerBadge: '\u{1F527} Sorun Giderme',
    backToHome: 'Ana sayfaya dön',
    stillNeedHelp: 'Hâlâ yardıma mı ihtiyacınız var?',
    stillNeedHelpDesc: 'Destek ekibimiz yardımcı olmaktan mutluluk duyar.',
    items: [
      { title: 'Listede hiçbir uygulama görünmüyor', description: 'MACA, uygulamaları ses üretmeye başladıklarında gösterir. Listede uygulama yoksa, herhangi bir uygulamada (müzik, video, tarayıcı vb.) ses çalmaya başlayın ve birkaç saniye içinde görünmelidir.' },
      { title: 'Seviye ölçer etkinlik göstermiyor', description: 'Seviye ölçer, yalnızca MACA\'da aktif ses yakalama özelliğine sahip uygulamaların ses seviyelerini gösterir. Uygulamalar önce uygulama listesinde görünmeli ve yakalama oluşturulmalıdır.' },
      { title: 'Bir uygulama listeden kayboldu', description: 'Uygulama ses üretmeyi durdurmuş olabilir. Aktif sesi olmayan uygulamalar, bir süre hareketsizlikten sonra listeden kaldırılır. Ayarlar > Uygulama Görünürlüğü\'nde yanlışlıkla gizleyip gizlemediğinizi kontrol edin.' },
      { title: 'Ses bozuk geliyor', description: 'Etkilenen uygulama için EQ\'nun aktif olup olmadığını kontrol edin — EQ düğmesi mavi olacaktır. EQ\'yu açın ve ayarları doğrulayın veya düz profile dönmek için Sıfırla\'ya tıklayın.' },
      { title: 'MACA menü çubuğunda görünmüyor', description: 'Otomatik Gizleme etkinse (Ayarlar > Genel), simge 5 dakikalık sessizlikten sonra gizlenir. Ses çalın veya görünmesi için klavye kısayolunu (varsayılan: Option+Command+M) kullanın.' },
      { title: 'macOS sürüm uyarısı', description: 'MACA, Core Audio Tap desteği için macOS 14.2 veya sonraki bir sürümü gerektirir. Sistem gereksinimleri başlığı görüyorsanız, macOS\'u Sistem Ayarları > Genel > Yazılım Güncelleme\'den güncelleyin.' },
      { title: 'Çökmeden sonra ses temizliği', description: 'MACA çökerse veya zorla kapatılırsa, yetim ses cihazları kalabilir. MACA\'yı yeniden başlatın — başlangıçta ve periyodik sağlık kontrollerinde yetim cihazları otomatik olarak algılar ve kaldırır. Ayrıca Ayarlar > Sistem\'de manuel bir sağlık kontrolü çalıştırabilirsiniz.' },
    ],
  },
  sv: {
    pageTitle: 'Felsökning',
    headerBadge: '\u{1F527} Felsökning',
    backToHome: 'Tillbaka till startsidan',
    stillNeedHelp: 'Behöver du fortfarande hjälp?',
    stillNeedHelpDesc: 'Vårt supportteam hjälper gärna.',
    items: [
      { title: 'Inga appar visas i listan', description: 'MACA visar appar när de börjar producera ljud. Om inga appar listas, starta uppspelning av ljud i valfri app (musik, video, webbläsare osv.) och den bör visas inom några sekunder.' },
      { title: 'Nivåmätaren visar ingen aktivitet', description: 'Nivåmätaren visar ljudnivåer endast för appar som har en aktiv ljudinfångning i MACA. Appar måste först visas i applistan och deras infångning måste skapas innan deras ljud registreras på mätaren.' },
      { title: 'En app försvann från listan', description: 'Appen kan ha slutat producera ljud. Appar utan aktivt ljud tas bort från listan efter en period av inaktivitet. Kontrollera om du av misstag dolde den i Inställningar > Appsynlighet.' },
      { title: 'Ljudet låter förvrängt', description: 'Kontrollera om EQ är aktiv för den berörda appen — EQ-knappen kommer att vara blå. Öppna EQ och verifiera inställningarna, eller klicka på Återställ för att återgå till platt.' },
      { title: 'MACA visas inte i menyraden', description: 'Om Auto-Dölj är aktiverat (Inställningar > Allmänt), döljs ikonen efter 5 minuters tystnad. Spela upp ljud eller använd kortkommandot (standard: Option+Command+M) för att visa den.' },
      { title: 'macOS-versionsvarning', description: 'MACA kräver macOS 14.2 eller senare för Core Audio Tap-stöd. Om du ser en banner om systemkrav, uppdatera macOS från Systeminställningar > Allmänt > Programuppdatering.' },
      { title: 'Ljudrensning efter krasch', description: 'Om MACA kraschar eller tvångsavslutas kan föräldralösa ljudenheter finnas kvar. Starta om MACA — den upptäcker och tar automatiskt bort föräldralösa enheter vid start och under periodiska hälsokontroller. Du kan också manuellt köra en hälsokontroll i Inställningar > System.' },
    ],
  },
};