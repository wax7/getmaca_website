// Localized FAQ JSON-LD content (per language) for /faq route
// Matches the visible content of the FAQ page; if the visible content
// does not match, Google may flag the rich result as spam.

export interface FAQEntry {
  q: string;
  a: string;
}

export const FAQ_ITEMS: Record<string, FAQEntry[]> = {
  en: [
    { q: 'What is MACA?', a: 'MACA (Master Audio Control App) is a macOS application that gives you per-app volume control, a 10-band equalizer, audio profiles and Focus Mode for every app running on your Mac.' },
    { q: 'Is MACA free?', a: 'MACA offers a free version with the core features. The Pro version adds audio profiles, the enhanced equalizer and Focus Mode and is a one-time purchase — no subscription.' },
    { q: 'Does MACA collect my data?', a: 'No. MACA processes everything locally on your Mac. We do not collect, store or transmit any personal data.' },
    { q: 'Which macOS versions does MACA support?', a: 'MACA requires macOS 15 (Sequoia) or newer and is optimized for Apple Silicon (M1/M2/M3/M4).' },
    { q: 'Does MACA work as an alternative to Boom 3D, eqMac or SoundSource?', a: 'Yes. MACA combines per-app volume mixing, a 10-band equalizer and audio profiles in one lightweight, native macOS app — without subscriptions and with a strict privacy-first design.' },
    { q: 'How do I control the volume of individual apps?', a: 'Open MACA from the menu bar, choose the app you want to control and use its dedicated volume slider, mute toggle or audio profile.' },
  ],
  de: [
    { q: 'Was ist MACA?', a: 'MACA (Master Audio Control App) ist eine macOS-Anwendung, die dir pro App eine eigene Lautstärke, einen 10-Band-Equalizer, Audio-Profile und einen Focus Mode für jede App auf deinem Mac bietet.' },
    { q: 'Ist MACA kostenlos?', a: 'MACA bietet eine kostenlose Version mit den Kernfunktionen. Die Pro-Version ergänzt Audio-Profile, den erweiterten Equalizer und Focus Mode und ist ein einmaliger Kauf — kein Abo.' },
    { q: 'Sammelt MACA meine Daten?', a: 'Nein. MACA verarbeitet alles lokal auf deinem Mac. Wir erheben, speichern oder übertragen keine personenbezogenen Daten.' },
    { q: 'Welche macOS-Versionen unterstützt MACA?', a: 'MACA benötigt macOS 15 (Sequoia) oder neuer und ist für Apple Silicon (M1/M2/M3/M4) optimiert.' },
    { q: 'Ist MACA eine Alternative zu Boom 3D, eqMac oder SoundSource?', a: 'Ja. MACA vereint Lautstärke pro App, einen 10-Band-Equalizer und Audio-Profile in einer schlanken, nativen macOS-App — ohne Abo und mit konsequentem Datenschutz.' },
    { q: 'Wie regle ich die Lautstärke einzelner Apps?', a: 'Öffne MACA aus der Menüleiste, wähle die gewünschte App und nutze den eigenen Lautstärkeregler, Stummschalter oder ein Audio-Profil.' },
  ],
  fr: [
    { q: 'Qu’est-ce que MACA ?', a: 'MACA (Master Audio Control App) est une application macOS qui offre un contrôle du volume par application, un égaliseur 10 bandes, des profils audio et un mode Focus pour chaque application sur votre Mac.' },
    { q: 'MACA est-il gratuit ?', a: 'MACA propose une version gratuite avec les fonctions essentielles. La version Pro ajoute les profils audio, l’égaliseur avancé et le mode Focus, en achat unique — sans abonnement.' },
    { q: 'MACA collecte-t-il mes données ?', a: 'Non. MACA traite tout localement sur votre Mac. Nous ne collectons, ne stockons ni ne transmettons aucune donnée personnelle.' },
    { q: 'Quelles versions macOS sont prises en charge ?', a: 'MACA nécessite macOS 15 (Sequoia) ou plus récent et est optimisé pour Apple Silicon (M1/M2/M3/M4).' },
    { q: 'MACA est-il une alternative à Boom 3D, eqMac ou SoundSource ?', a: 'Oui. MACA combine volume par application, égaliseur 10 bandes et profils audio dans une application macOS native et légère, sans abonnement et avec une approche stricte de la confidentialité.' },
    { q: 'Comment régler le volume d’applications individuelles ?', a: 'Ouvrez MACA depuis la barre de menus, sélectionnez l’application et utilisez son curseur de volume, son bouton Muet ou un profil audio.' },
  ],
  es: [
    { q: '¿Qué es MACA?', a: 'MACA (Master Audio Control App) es una aplicación para macOS con control de volumen por app, ecualizador de 10 bandas, perfiles de audio y modo Focus para cada app de tu Mac.' },
    { q: '¿MACA es gratuito?', a: 'MACA ofrece una versión gratuita con las funciones principales. La versión Pro añade perfiles de audio, ecualizador avanzado y modo Focus en un pago único — sin suscripción.' },
    { q: '¿MACA recopila mis datos?', a: 'No. MACA procesa todo localmente en tu Mac. No recopilamos, almacenamos ni transmitimos datos personales.' },
    { q: '¿Qué versiones de macOS soporta MACA?', a: 'MACA requiere macOS 15 (Sequoia) o superior y está optimizado para Apple Silicon (M1/M2/M3/M4).' },
    { q: '¿Es MACA una alternativa a Boom 3D, eqMac o SoundSource?', a: 'Sí. MACA combina volumen por app, ecualizador de 10 bandas y perfiles de audio en una app nativa, ligera, sin suscripción y con privacidad estricta.' },
    { q: '¿Cómo controlo el volumen de apps individuales?', a: 'Abre MACA desde la barra de menús, selecciona la app y usa su control de volumen, botón Silencio o un perfil de audio.' },
  ],
  it: [
    { q: 'Che cos’è MACA?', a: 'MACA (Master Audio Control App) è un’app macOS che offre volume per applicazione, equalizzatore a 10 bande, profili audio e modalità Focus per ogni app del tuo Mac.' },
    { q: 'MACA è gratuita?', a: 'MACA offre una versione gratuita con le funzioni principali. La versione Pro aggiunge profili audio, equalizzatore avanzato e modalità Focus in un acquisto unico — senza abbonamento.' },
    { q: 'MACA raccoglie i miei dati?', a: 'No. MACA elabora tutto localmente sul tuo Mac. Non raccogliamo, memorizziamo o trasmettiamo dati personali.' },
    { q: 'Quali versioni di macOS sono supportate?', a: 'MACA richiede macOS 15 (Sequoia) o successivo ed è ottimizzato per Apple Silicon (M1/M2/M3/M4).' },
    { q: 'MACA è un’alternativa a Boom 3D, eqMac o SoundSource?', a: 'Sì. MACA combina volume per app, equalizzatore a 10 bande e profili audio in un’app nativa, leggera, senza abbonamento e con privacy rigorosa.' },
    { q: 'Come regolo il volume delle singole app?', a: 'Apri MACA dalla barra dei menu, seleziona l’app e usa il suo cursore del volume, il pulsante Muto o un profilo audio.' },
  ],
  ja: [
    { q: 'MACAとは何ですか？', a: 'MACA（Master Audio Control App）は、Macで動作する各アプリにアプリ別音量、10バンドイコライザー、オーディオプロファイル、フォーカスモードを提供するmacOSアプリです。' },
    { q: 'MACAは無料ですか？', a: 'MACAには主要機能を備えた無料版があります。Pro版ではオーディオプロファイル、高度なイコライザー、フォーカスモードが追加され、買い切り（サブスクリプションなし）です。' },
    { q: 'MACAはデータを収集しますか？', a: 'いいえ。MACAはすべてMac上でローカルに処理します。個人データの収集・保存・送信は一切行いません。' },
    { q: 'MACAは どのmacOSバージョンに対応していますか？', a: 'MACAはmacOS 15（Sequoia）以降が必要で、Apple Silicon（M1/M2/M3/M4）に最適化されています。' },
    { q: 'MACAはBoom 3D、eqMac、SoundSourceの代替になりますか？', a: 'はい。MACAはアプリ別音量、10バンドイコライザー、オーディオプロファイルを軽量なネイティブmacOSアプリにまとめ、サブスクリプションなしで、厳格なプライバシー設計を採用しています。' },
    { q: 'アプリごとの音量はどう調整しますか？', a: 'メニューバーからMACAを開き、対象のアプリを選び、専用の音量スライダー、ミュートトグル、またはオーディオプロファイルを使います。' },
  ],
  'zh-Hans': [
    { q: 'MACA 是什么？', a: 'MACA（Master Audio Control App）是一款 macOS 应用，可为 Mac 上每个 App 提供独立音量控制、10 段均衡器、音频配置和专注模式。' },
    { q: 'MACA 免费吗？', a: 'MACA 提供免费版本，包含核心功能。Pro 版本增加音频配置、增强均衡器和专注模式，为一次性购买，无订阅。' },
    { q: 'MACA 会收集我的数据吗？', a: '不会。MACA 完全在你的 Mac 本地处理，不收集、不存储、不传输任何个人数据。' },
    { q: 'MACA 支持哪些 macOS 版本？', a: 'MACA 需要 macOS 15（Sequoia）或更新版本，并针对 Apple Silicon（M1/M2/M3/M4）优化。' },
    { q: 'MACA 是 Boom 3D、eqMac 或 SoundSource 的替代品吗？', a: '是。MACA 将 App 独立音量、10 段均衡器和音频配置整合到一款轻量原生 macOS 应用中，无订阅，严格保护隐私。' },
    { q: '如何控制单个 App 的音量？', a: '在菜单栏打开 MACA，选择需要控制的 App，然后使用专属音量滑杆、静音按钮或音频配置。' },
  ],
  'zh-Hant': [
    { q: 'MACA 是什麼？', a: 'MACA（Master Audio Control App）是一款 macOS 應用程式，為 Mac 上的每個 App 提供獨立音量控制、10 段等化器、音訊配置與專注模式。' },
    { q: 'MACA 免費嗎？', a: 'MACA 提供免費版本，包含核心功能。Pro 版本加入音訊配置、進階等化器與專注模式，為一次性購買，無訂閱。' },
    { q: 'MACA 會收集我的資料嗎？', a: '不會。MACA 完全在你的 Mac 本地處理，不收集、不儲存、不傳輸任何個人資料。' },
    { q: 'MACA 支援哪些 macOS 版本？', a: 'MACA 需要 macOS 15（Sequoia）或更新版本，並針對 Apple Silicon（M1/M2/M3/M4）最佳化。' },
    { q: 'MACA 是 Boom 3D、eqMac 或 SoundSource 的替代品嗎？', a: '是。MACA 將 App 獨立音量、10 段等化器與音訊配置整合在輕量的原生 macOS 應用中，無訂閱，嚴格保護隱私。' },
    { q: '如何控制個別 App 的音量？', a: '從選單列開啟 MACA，選擇 App，使用專屬音量滑桿、靜音切換或音訊配置。' },
  ],
  ar: [
    { q: 'ما هو MACA؟', a: 'MACA (Master Audio Control App) هو تطبيق لـ macOS يمنحك تحكمًا مستقلًا في صوت كل تطبيق، ومعادل 10 نطاقات، وملفات صوتية، ووضع تركيز لكل تطبيق على الـ Mac.' },
    { q: 'هل MACA مجاني؟', a: 'يقدم MACA نسخة مجانية بالميزات الأساسية. تضيف نسخة Pro الملفات الصوتية، والمعادل المحسّن، ووضع التركيز كشراء لمرة واحدة بدون اشتراك.' },
    { q: 'هل يجمع MACA بياناتي؟', a: 'لا. يعالج MACA كل شيء محليًا على جهاز Mac الخاص بك. لا نجمع أو نخزن أو نرسل أي بيانات شخصية.' },
    { q: 'ما إصدارات macOS التي يدعمها MACA؟', a: 'يتطلب MACA الإصدار macOS 15 (Sequoia) أو أحدث وهو مُحسّن لشرائح Apple Silicon (M1/M2/M3/M4).' },
    { q: 'هل MACA بديل لـ Boom 3D أو eqMac أو SoundSource؟', a: 'نعم. يجمع MACA بين التحكم في الصوت لكل تطبيق ومعادل 10 نطاقات والملفات الصوتية في تطبيق macOS أصلي خفيف بدون اشتراك ومع خصوصية صارمة.' },
    { q: 'كيف أتحكم في صوت كل تطبيق على حدة؟', a: 'افتح MACA من شريط القائمة، اختر التطبيق، واستخدم منزلق الصوت الخاص به أو زر كتم الصوت أو ملف صوتي.' },
  ],
  ru: [
    { q: 'Что такое MACA?', a: 'MACA (Master Audio Control App) — приложение для macOS, дающее индивидуальную регулировку громкости каждого приложения, 10-полосный эквалайзер, звуковые профили и режим Focus для каждой программы на Mac.' },
    { q: 'MACA бесплатна?', a: 'MACA предлагает бесплатную версию с базовыми функциями. Pro-версия добавляет звуковые профили, расширенный эквалайзер и режим Focus — единоразовая покупка, без подписки.' },
    { q: 'Собирает ли MACA мои данные?', a: 'Нет. MACA обрабатывает всё локально на вашем Mac. Мы не собираем, не храним и не передаём никаких персональных данных.' },
    { q: 'Какие версии macOS поддерживаются?', a: 'MACA требует macOS 15 (Sequoia) или новее и оптимизирована для Apple Silicon (M1/M2/M3/M4).' },
    { q: 'MACA — альтернатива Boom 3D, eqMac или SoundSource?', a: 'Да. MACA объединяет громкость для каждого приложения, 10-полосный эквалайзер и звуковые профили в нативном легковесном macOS-приложении без подписки и со строгим уважением к приватности.' },
    { q: 'Как регулировать громкость отдельных приложений?', a: 'Откройте MACA из строки меню, выберите приложение и используйте его регулятор громкости, кнопку Mute или звуковой профиль.' },
  ],
  nl: [
    { q: 'Wat is MACA?', a: 'MACA (Master Audio Control App) is een macOS-app met volume per app, een 10-bands equalizer, audioprofielen en Focus Mode voor elke app op je Mac.' },
    { q: 'Is MACA gratis?', a: 'MACA biedt een gratis versie met de kernfuncties. De Pro-versie voegt audioprofielen, een uitgebreide equalizer en Focus Mode toe als eenmalige aankoop — zonder abonnement.' },
    { q: 'Verzamelt MACA mijn gegevens?', a: 'Nee. MACA verwerkt alles lokaal op je Mac. We verzamelen, bewaren of versturen geen persoonsgegevens.' },
    { q: 'Welke macOS-versies worden ondersteund?', a: 'MACA vereist macOS 15 (Sequoia) of nieuwer en is geoptimaliseerd voor Apple Silicon (M1/M2/M3/M4).' },
    { q: 'Is MACA een alternatief voor Boom 3D, eqMac of SoundSource?', a: 'Ja. MACA combineert volume per app, een 10-bands equalizer en audioprofielen in een lichtgewicht native macOS-app zonder abonnement en met strikte privacy.' },
    { q: 'Hoe regel ik het volume van afzonderlijke apps?', a: 'Open MACA in de menubalk, kies de app en gebruik de eigen volume­schuif, mute-knop of een audioprofiel.' },
  ],
  tr: [
    { q: 'MACA nedir?', a: 'MACA (Master Audio Control App), Mac’inizdeki her uygulama için uygulama başına ses, 10 bantlı ekolayzer, ses profilleri ve Odak Modu sunan bir macOS uygulamasıdır.' },
    { q: 'MACA ücretsiz mi?', a: 'MACA temel özelliklerle ücretsiz bir sürüm sunar. Pro sürümü ses profilleri, gelişmiş ekolayzer ve Odak Modu ekler; tek seferlik satın alma, abonelik yok.' },
    { q: 'MACA verilerimi topluyor mu?', a: 'Hayır. MACA her şeyi Mac’inizde yerel olarak işler. Hiçbir kişisel veri toplamaz, saklamaz veya iletmez.' },
    { q: 'MACA hangi macOS sürümlerini destekliyor?', a: 'MACA en az macOS 15 (Sequoia) gerektirir ve Apple Silicon (M1/M2/M3/M4) için optimize edilmiştir.' },
    { q: 'MACA, Boom 3D, eqMac veya SoundSource alternatifi mi?', a: 'Evet. MACA uygulama başına sesi, 10 bantlı ekolayzeri ve ses profillerini hafif, yerel bir macOS uygulamasında abonesiz ve katı gizlilik ilkesiyle bir araya getirir.' },
    { q: 'Tek tek uygulamaların sesini nasıl kontrol ederim?', a: 'Menü çubuğundan MACA’yı açın, uygulamayı seçin ve kendi ses kaydırıcısı, sessize alma düğmesi veya ses profilini kullanın.' },
  ],
  sv: [
    { q: 'Vad är MACA?', a: 'MACA (Master Audio Control App) är en macOS-app med volym per app, en 10-bands equalizer, ljudprofiler och Fokus-läge för varje app på din Mac.' },
    { q: 'Är MACA gratis?', a: 'MACA har en gratisversion med kärnfunktionerna. Pro-versionen lägger till ljudprofiler, avancerad equalizer och Fokus-läge som engångsköp — ingen prenumeration.' },
    { q: 'Samlar MACA in mina data?', a: 'Nej. MACA bearbetar allt lokalt på din Mac. Vi samlar inte in, lagrar eller skickar några personuppgifter.' },
    { q: 'Vilka macOS-versioner stöds?', a: 'MACA kräver macOS 15 (Sequoia) eller nyare och är optimerad för Apple Silicon (M1/M2/M3/M4).' },
    { q: 'Är MACA ett alternativ till Boom 3D, eqMac eller SoundSource?', a: 'Ja. MACA kombinerar volym per app, 10-bands equalizer och ljudprofiler i en lätt native-macOS-app utan prenumeration och med strikt integritet.' },
    { q: 'Hur styr jag volymen för enskilda appar?', a: 'Öppna MACA från menyraden, välj appen och använd dess egna volymreglage, mute-knappen eller en ljudprofil.' },
  ],
  da: [
    { q: 'Hvad er MACA?', a: 'MACA (Master Audio Control App) er en macOS-app, der giver lydstyrke per app, en 10-bånds equalizer, lydprofiler og Fokus-tilstand for hver app på din Mac.' },
    { q: 'Er MACA gratis?', a: 'MACA tilbyder en gratis version med kernefunktionerne. Pro-versionen tilføjer lydprofiler, avanceret equalizer og Fokus-tilstand som engangskøb — ingen abonnement.' },
    { q: 'Indsamler MACA mine data?', a: 'Nej. MACA behandler alt lokalt på din Mac. Vi indsamler, gemmer eller sender ingen personlige data.' },
    { q: 'Hvilke macOS-versioner understøttes?', a: 'MACA kræver macOS 15 (Sequoia) eller nyere og er optimeret til Apple Silicon (M1/M2/M3/M4).' },
    { q: 'Er MACA et alternativ til Boom 3D, eqMac eller SoundSource?', a: 'Ja. MACA kombinerer lydstyrke per app, 10-bånds equalizer og lydprofiler i en let, native macOS-app uden abonnement og med streng beskyttelse af privatlivet.' },
    { q: 'Hvordan styrer jeg lydstyrken for enkelte apps?', a: 'Åbn MACA fra menulinjen, vælg appen og brug dens egen lydstyrkeknap, mute eller en lydprofil.' },
  ],
  ko: [
    { q: 'MACA란 무엇인가요?', a: 'MACA(Master Audio Control App)는 Mac의 모든 앱에 대해 앱별 볼륨, 10밴드 이퀄라이저, 오디오 프로필, 집중 모드를 제공하는 macOS 앱입니다.' },
    { q: 'MACA는 무료인가요?', a: 'MACA는 핵심 기능이 포함된 무료 버전을 제공합니다. Pro 버전은 오디오 프로필, 향상된 이퀄라이저, 집중 모드를 추가하며 일회성 구매(구독 없음)입니다.' },
    { q: 'MACA가 제 데이터를 수집하나요?', a: '아니요. MACA는 모든 처리를 사용자의 Mac에서 로컬로 수행합니다. 어떤 개인 데이터도 수집·저장·전송하지 않습니다.' },
    { q: '지원되는 macOS 버전은?', a: 'MACA는 macOS 15(Sequoia) 이상이 필요하며 Apple Silicon(M1/M2/M3/M4)에 최적화되어 있습니다.' },
    { q: 'MACA는 Boom 3D, eqMac, SoundSource의 대안인가요?', a: '네. MACA는 앱별 볼륨, 10밴드 이퀄라이저, 오디오 프로필을 가벼운 네이티브 macOS 앱에 통합했으며 구독 없이 엄격한 개인정보 보호를 제공합니다.' },
    { q: '개별 앱의 볼륨은 어떻게 조절하나요?', a: '메뉴 막대에서 MACA를 열고, 앱을 선택한 뒤 전용 볼륨 슬라이더, 음소거 버튼 또는 오디오 프로필을 사용하세요.' },
  ],
  nb: [
    { q: 'Hva er MACA?', a: 'MACA (Master Audio Control App) er en macOS-app med volum per app, en 10-bånds equalizer, lydprofiler og Fokus-modus for hver app på din Mac.' },
    { q: 'Er MACA gratis?', a: 'MACA har en gratisversjon med kjernefunksjonene. Pro-versjonen legger til lydprofiler, avansert equalizer og Fokus-modus som engangskjøp — uten abonnement.' },
    { q: 'Samler MACA inn dataene mine?', a: 'Nei. MACA behandler alt lokalt på Mac-en din. Vi samler ikke inn, lagrer eller sender personopplysninger.' },
    { q: 'Hvilke macOS-versjoner støttes?', a: 'MACA krever macOS 15 (Sequoia) eller nyere og er optimalisert for Apple Silicon (M1/M2/M3/M4).' },
    { q: 'Er MACA et alternativ til Boom 3D, eqMac eller SoundSource?', a: 'Ja. MACA samler volum per app, 10-bånds equalizer og lydprofiler i én lett, native macOS-app uten abonnement og med streng personvern.' },
    { q: 'Hvordan styrer jeg volumet for enkeltapper?', a: 'Åpne MACA fra menylinjen, velg appen og bruk dens egen volumglider, mute-knapp eller en lydprofil.' },
  ],
};
