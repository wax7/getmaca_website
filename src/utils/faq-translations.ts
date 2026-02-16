import { Language } from '../locales/translations';

export interface FAQItem {
  question: string;
  answer: string;
}

export const getFAQItems = (lang: Language): FAQItem[] => {
  switch(lang) {
    case 'de':
      return [
        {
          question: 'Funktioniert MACA mit allen macOS Apps?',
          answer: 'Ja! MACA funktioniert mit jeder App, die Audio ausgibt. Ob Spotify, Chrome, Zoom, oder eigene Anwendungen – MACA erkennt automatisch alle aktiven Audio-Apps und ermöglicht individuelle Lautstärkeregelung.'
        },
        {
          question: 'Brauche ich zusätzliche Treiber oder Software?',
          answer: 'Nein, MACA ist eine native macOS App und benötigt keine zusätzlichen Treiber oder Systemerweiterungen. Einfach installieren und loslegen – ohne komplizierte Setup-Prozesse.'
        },
        {
          question: 'Was ist der Unterschied zwischen Free und Pro Version?',
          answer: 'Die Free Version erlaubt die Steuerung von bis zu 3 Apps gleichzeitig. Die Pro Version ($14.99, einmaliger Kauf) bietet unbegrenzte App-Steuerung, Audio Normalizer, 10-Band Equalizer, Magic Boost und den praktischen Focus Mode für Meetings.'
        },
        {
          question: 'Gibt es ein Abo-Modell?',
          answer: 'Nein! MACA Pro kostet einmalig $14.99 ohne Abo. Einmal kaufen, für immer nutzen. Alle Updates inklusive.'
        },
        {
          question: 'Sammelt MACA meine Daten?',
          answer: 'Absolut nicht. MACA verarbeitet alles lokal auf Ihrem Mac. Wir sammeln, speichern oder übertragen keine persönlichen Daten. Ihre Audio-Einstellungen bleiben privat – genau wo sie hingehören.'
        },
        {
          question: 'Funktioniert MACA mit Apple Silicon (M1/M2/M3/M4/M5)?',
          answer: 'Ja! MACA ist für Apple Silicon optimiert und läuft nativ auf allen aktuellen Apple Silicon Macs (M1, M2, M3, M4, M5). Mindestvoraussetzung ist macOS 15 (Sequoia). Maximale Performance auf allen modernen Macs.'
        },
        {
          question: 'Funktioniert MACA mit AirPlay-Geräten?',
          answer: 'Derzeit funktioniert die App-spezifische Lautstärkeregelung leider nicht mit AirPlay-Geräten aufgrund einer Einschränkung im aktuellen Apple-System. Dies ist eine Apple-Beschränkung, auf die wir keinen Einfluss haben. Sobald Apple diese Einschränkung aufhebt, werden wir die AirPlay-Unterstützung umgehend hinzufügen, damit MACA auch mit AirPlay-Geräten funktioniert.'
        },
      ];
    case 'es':
      return [
        {
          question: '¿MACA funciona con todas las aplicaciones de macOS?',
          answer: '¡Sí! MACA funciona con cualquier aplicación que emita audio. Ya sea Spotify, Chrome, Zoom o aplicaciones personalizadas: MACA detecta automáticamente todas las aplicaciones de audio activas y permite un control de volumen individual.'
        },
        {
          question: '¿Necesito controladores o software adicionales?',
          answer: 'No, MACA es una aplicación nativa de macOS y no requiere controladores adicionales ni extensiones del sistema. Simplemente instala y comienza a usarla, sin procesos de configuración complicados.'
        },
        {
          question: '¿Cuál es la diferencia entre la versión gratuita y Pro?',
          answer: 'La versión gratuita permite el control de hasta 3 aplicaciones simultáneamente. La versión Pro ($14.99, compra única) ofrece control ilimitado de aplicaciones, normalizador de audio, ecualizador de 10 bandas, Magic Boost y el práctico modo de enfoque para reuniones.'
        },
        {
          question: '¿Hay un modelo de suscripción?',
          answer: '¡No! MACA Pro cuesta $14.99 una sola vez sin suscripción. Compra una vez, usa para siempre. Todas las actualizaciones incluidas.'
        },
        {
          question: '¿MACA recopila mis datos?',
          answer: 'Absolutamente no. MACA procesa todo localmente en tu Mac. No recopilamos, almacenamos ni transmitimos ningún dato personal. Tu configuración de audio permanece privada, exactamente donde debe estar.'
        },
        {
          question: '¿MACA funciona con Apple Silicon (M1/M2/M3/M4/M5)?',
          answer: '¡Sí! MACA está optimizado para Apple Silicon y se ejecuta nativamente en todos los Macs actuales con Apple Silicon (M1, M2, M3, M4, M5). El requisito mínimo es macOS 15 (Sequoia). Máximo rendimiento en todos los Macs modernos.'
        },
        {
          question: '¿MACA funciona con dispositivos AirPlay?',
          answer: 'Actualmente, el control de volumen específico de la aplicación no funciona con dispositivos AirPlay debido a una limitación en el sistema actual de Apple. Esta es una limitación de Apple sobre la que no tenemos control. Tan pronto como Apple levante esta limitación, agregaremos soporte para AirPlay para que MACA también funcione con dispositivos AirPlay.'
        },
      ];
    case 'fr':
      return [
        {
          question: 'MACA fonctionne-t-il avec toutes les applications macOS ?',
          answer: 'Oui ! MACA fonctionne avec n\'importe quelle application qui produit de l\'audio. Qu\'il s\'agisse de Spotify, Chrome, Zoom ou d\'applications personnalisées, MACA détecte automatiquement toutes les applications audio actives et permet un contrôle individuel du volume.'
        },
        {
          question: 'Ai-je besoin de pilotes ou de logiciels supplémentaires ?',
          answer: 'Non, MACA est une application native macOS et ne nécessite aucun pilote supplémentaire ni extension système. Il suffit de l\'installer et de commencer à l\'utiliser, sans processus de configuration compliqués.'
        },
        {
          question: 'Quelle est la différence entre la version gratuite et Pro ?',
          answer: 'La version gratuite permet le contrôle de jusqu\'à 3 applications simultanément. La version Pro (14,99 $, achat unique) offre un contrôle illimité des applications, un normaliseur audio, un égaliseur 10 bandes, Magic Boost et le mode focus pratique pour les réunions.'
        },
        {
          question: 'Y a-t-il un modèle d\'abonnement ?',
          answer: 'Non ! MACA Pro coûte 14,99 $ une seule fois sans abonnement. Achetez une fois, utilisez pour toujours. Toutes les mises à jour incluses.'
        },
        {
          question: 'MACA collecte-t-il mes données ?',
          answer: 'Absolument pas. MACA traite tout localement sur votre Mac. Nous ne collectons, ne stockons ni ne transmettons aucune donnée personnelle. Vos paramètres audio restent privés, exactement là où ils doivent être.'
        },
        {
          question: 'MACA fonctionne-t-il avec Apple Silicon (M1/M2/M3/M4/M5) ?',
          answer: 'Oui ! MACA est optimisé pour Apple Silicon et fonctionne nativement sur tous les Macs Apple Silicon actuels (M1, M2, M3, M4, M5). La configuration minimale requise est macOS 15 (Sequoia). Performances maximales sur tous les Macs modernes.'
        },
        {
          question: 'MACA fonctionne-t-il avec les appareils AirPlay ?',
          answer: 'Actuellement, le contrôle du volume spécifique à l\'application ne fonctionne pas avec les appareils AirPlay en raison d\'une limitation du système Apple actuel. Il s\'agit d\'une limitation Apple sur laquelle nous n\'avons aucun contrôle. Dès qu\'Apple lèvera cette limitation, nous ajouterons la prise en charge d\'AirPlay afin que MACA fonctionne également avec les appareils AirPlay.'
        },
      ];
    case 'it':
      return [
        {
          question: 'MACA funziona con tutte le app macOS?',
          answer: 'Sì! MACA funziona con qualsiasi app che produce audio. Che si tratti di Spotify, Chrome, Zoom o applicazioni personalizzate, MACA rileva automaticamente tutte le app audio attive e consente il controllo individuale del volume.'
        },
        {
          question: 'Ho bisogno di driver o software aggiuntivi?',
          answer: 'No, MACA è un\'app nativa macOS e non richiede driver aggiuntivi né estensioni di sistema. Basta installare e iniziare a usarla, senza processi di configurazione complicati.'
        },
        {
          question: 'Qual è la differenza tra la versione gratuita e Pro?',
          answer: 'La versione gratuita consente il controllo fino a 3 app contemporaneamente. La versione Pro ($14,99, acquisto unico) offre controllo illimitato delle app, normalizzatore audio, equalizzatore a 10 bande, Magic Boost e la pratica modalità focus per le riunioni.'
        },
        {
          question: 'C\'è un modello di abbonamento?',
          answer: 'No! MACA Pro costa $14,99 una sola volta senza abbonamento. Compra una volta, usa per sempre. Tutti gli aggiornamenti inclusi.'
        },
        {
          question: 'MACA raccoglie i miei dati?',
          answer: 'Assolutamente no. MACA elabora tutto localmente sul tuo Mac. Non raccogliamo, conserviamo né trasmettiamo alcun dato personale. Le tue impostazioni audio rimangono private, esattamente dove dovrebbero essere.'
        },
        {
          question: 'MACA funziona con Apple Silicon (M1/M2/M3/M4/M5)?',
          answer: 'Sì! MACA è ottimizzato per Apple Silicon e funziona nativamente su tutti i Mac Apple Silicon attuali (M1, M2, M3, M4, M5). Il requisito minimo è macOS 15 (Sequoia). Prestazioni massime su tutti i Mac moderni.'
        },
        {
          question: 'MACA funziona con i dispositivi AirPlay?',
          answer: 'Attualmente, il controllo del volume specifico dell\'app non funziona con i dispositivi AirPlay a causa di una limitazione nell\'attuale sistema Apple. Questa è una limitazione Apple su cui non abbiamo controllo. Non appena Apple rimuoverà questa limitazione, aggiungeremo il supporto AirPlay in modo che MACA funzioni anche con i dispositivi AirPlay.'
        },
      ];
    case 'pt':
      return [
        {
          question: 'O MACA funciona com todos os aplicativos do macOS?',
          answer: 'Sim! O MACA funciona com qualquer aplicativo que reproduza áudio. Seja Spotify, Chrome, Zoom ou aplicativos personalizados, o MACA detecta automaticamente todos os aplicativos de áudio ativos e permite o controle individual do volume.'
        },
        {
          question: 'Preciso de drivers ou software adicionais?',
          answer: 'Não, o MACA é um aplicativo nativo do macOS e não requer drivers adicionais nem extensões do sistema. Basta instalar e começar a usar, sem processos de configuração complicados.'
        },
        {
          question: 'Qual é a diferença entre a versão gratuita e Pro?',
          answer: 'A versão gratuita permite o controle de até 3 aplicativos simultaneamente. A versão Pro ($14,99, compra única) oferece controle ilimitado de aplicativos, normalizador de áudio, equalizador de 10 bandas, Magic Boost e o prático modo de foco para reuniões.'
        },
        {
          question: 'Existe um modelo de assinatura?',
          answer: 'Não! O MACA Pro custa $14,99 uma única vez sem assinatura. Compre uma vez, use para sempre. Todas as atualizações incluídas.'
        },
        {
          question: 'O MACA coleta meus dados?',
          answer: 'Absolutamente não. O MACA processa tudo localmente no seu Mac. Não coletamos, armazenamos nem transmitimos nenhum dado pessoal. Suas configurações de áudio permanecem privadas, exatamente onde devem estar.'
        },
        {
          question: 'O MACA funciona com Apple Silicon (M1/M2/M3/M4/M5)?',
          answer: 'Sim! O MACA é otimizado para Apple Silicon e roda nativamente em todos os Macs Apple Silicon atuais (M1, M2, M3, M4, M5). O requisito mínimo é macOS 15 (Sequoia). Desempenho máximo em todos os Macs modernos.'
        },
        {
          question: 'O MACA funciona com dispositivos AirPlay?',
          answer: 'Atualmente, o controle de volume específico do aplicativo não funciona com dispositivos AirPlay devido a uma limitação no sistema atual da Apple. Esta é uma limitação da Apple sobre a qual não temos controle. Assim que a Apple remover essa limitação, adicionaremos suporte ao AirPlay para que o MACA também funcione com dispositivos AirPlay.'
        },
      ];
    case 'ja':
      return [
        {
          question: 'MACAはすべてのmacOSアプリで動作しますか？',
          answer: 'はい！MACAはオーディオを出力するあらゆるアプリで動作します。Spotify、Chrome、Zoom、カスタムアプリケーションなど、MACAはすべてのアクティブなオーディオアプリを自動的に検出し、個別の音量コントロールを可能にします。'
        },
        {
          question: '追加のドライバーやソフトウェアは必要ですか？',
          answer: 'いいえ、MACAはネイティブのmacOSアプリであり、追加のドライバーやシステム拡張は必要ありません。インストールしてすぐに使い始めることができ、複雑なセットアッププロセスはありません。'
        },
        {
          question: '無料版とPro版の違いは何ですか？',
          answer: '無料版は最大3つのアプリを同時にコントロールできます。Pro版（$14.99、一度だけの購入）は、無制限のアプリコントロール、オーディオノーマライザー、10バンドイコライザー、Magic Boost、ミーティング用の実用的なフォーカスモードを提供します。'
        },
        {
          question: 'サブスクリプションモデルはありますか？',
          answer: 'いいえ！MACA Proはサブスクリプションなしで一度だけ$14.99です。一度購入すれば永久に使用できます。すべてのアップデートが含まれます。'
        },
        {
          question: 'MACAは私のデータを収集しますか？',
          answer: '絶対にありません。MACAはすべてをあなたのMac上でローカルに処理します。私たちは個人データを収集、保存、または送信しません。オーディオ設定はプライベートのまま、まさにあるべき場所に留まります。'
        },
        {
          question: 'MACAはApple Silicon（M1/M2/M3/M4/M5）で動作しますか？',
          answer: 'はい！MACAはApple Silicon向けに最適化されており、現在のすべてのApple Silicon Mac（M1、M2、M3、M4、M5）でネイティブに動作します。最小要件はmacOS 15（Sequoia）です。すべての最新Macで最高のパフォーマンスを発揮します。'
        },
        {
          question: 'MACAはAirPlayデバイスで動作しますか？',
          answer: '現在、アプリ固有の音量コントロールは、現在のAppleシステムの制限により、AirPlayデバイスでは機能しません。これはAppleの制限であり、私たちはコントロールできません。Appleがこの制限を解除し次第、AirPlayサポートを追加し、MACAがAirPlayデバイスでも動作するようにします。'
        },
      ];
    case 'zh':
      return [
        {
          question: 'MACA 是否适用于所有 macOS 应用？',
          answer: '是的！MACA 适用于任何输出音频的应用程序。无论是 Spotify、Chrome、Zoom 还是自定义应用程序，MACA 都会自动检测所有活动的音频应用并启用单独的音量控制。'
        },
        {
          question: '我需要额外的驱动程序或软件吗？',
          answer: '不需要，MACA 是原生 macOS 应用，不需要额外的驱动程序或系统扩展。只需安装并开始使用，无需复杂的设置过程。'
        },
        {
          question: '免费版和专业版有什么区别？',
          answer: '免费版允许同时控制最多 3 个应用。专业版（$14.99，一次性购买）提供无限应用控制、音频规范化器、10 频段均衡器、Magic Boost 和用于会议的实用聚焦模式。'
        },
        {
          question: '有订阅模式吗？',
          answer: '没有！MACA Pro 一次性收费 $14.99，无需订阅。一次购买，永久使用。包含所有更新。'
        },
        {
          question: 'MACA 会收集我的数据吗？',
          answer: '绝对不会。MACA 在您的 Mac 上本地处理所有内容。我们不收集、存储或传输任何个人数据。您的音频设置保持私密，正好在它们应该在的地方。'
        },
        {
          question: 'MACA 是否支持 Apple Silicon（M1/M2/M3/M4/M5）？',
          answer: '是的！MACA 针对 Apple Silicon 进行了优化，可在所有当前的 Apple Silicon Mac（M1、M2、M3、M4、M5）上本地运行。最低要求是 macOS 15（Sequoia）。在所有现代 Mac 上实现最佳性能。'
        },
        {
          question: 'MACA 是否支持 AirPlay 设备？',
          answer: '目前，由于当前 Apple 系统的限制，特定于应用的音量控制不适用于 AirPlay 设备。这是 Apple 的限制，我们无法控制。一旦 Apple 解除此限制，我们将添加 AirPlay 支持，以便 MACA 也可以与 AirPlay 设备一起使用。'
        },
      ];
    default: // EN
      return [
        {
          question: 'Does MACA work with all macOS apps?',
          answer: 'Yes! MACA works with any app that outputs audio. Whether it\'s Spotify, Chrome, Zoom, or custom applications – MACA automatically detects all active audio apps and enables individual volume control.'
        },
        {
          question: 'Do I need additional drivers or software?',
          answer: 'No, MACA is a native macOS app and requires no additional drivers or system extensions. Simply install and start using it – no complicated setup processes.'
        },
        {
          question: 'What\'s the difference between Free and Pro version?',
          answer: 'The Free version allows control of up to 3 apps simultaneously. The Pro version ($14.99, one-time purchase) offers unlimited app control, Audio Normalizer, 10-band Equalizer, Magic Boost, and the practical Focus Mode for meetings.'
        },
        {
          question: 'Is there a subscription model?',
          answer: 'No! MACA Pro costs a one-time $14.99 with no subscription. Buy once, use forever. All updates included.'
        },
        {
          question: 'Does MACA collect my data?',
          answer: 'Absolutely not. MACA processes everything locally on your Mac. We don\'t collect, store, or transmit any personal data. Your audio settings stay private—exactly where they belong.'
        },
        {
          question: 'Does MACA work with Apple Silicon (M1/M2/M3/M4/M5)?',
          answer: 'Yes! MACA is optimized for Apple Silicon and runs natively on all current Apple Silicon Macs (M1, M2, M3, M4, M5). Minimum requirement is macOS 15 (Sequoia). Maximum performance on all modern Macs.'
        },
        {
          question: 'Does MACA work with AirPlay devices?',
          answer: 'Currently, the app-specific volume control does not work with AirPlay devices due to a limitation in the current Apple system. This is an Apple limitation over which we have no control. As soon as Apple lifts this limitation, we will add AirPlay support so that MACA also works with AirPlay devices.'
        },
      ];
  }
};
