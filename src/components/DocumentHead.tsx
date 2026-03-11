import { useEffect } from 'react';
import { useParams, useLocation } from 'react-router';
import { type Language } from '../locales/translations';
import { faqContentTranslations } from '../utils/faq-content-translations';
import { getGuideTranslation } from '../locales/guide';
import { troubleshootingTranslations } from '../utils/troubleshooting-translations';
import macaAppLogo from 'figma:asset/7726871357dffca8a1c72824ee6fcf70b91dc923.png';

const APP_STORE_ID = '6759258773';
const APP_STORE_URL = `https://apps.apple.com/app/maca-master-audio-control/id${APP_STORE_ID}`;
const BASE_URL = 'https://getmaca.de';

// ---------------------------------------------------------------------------
// Meta descriptions – per page type, per language, keyword-rich & ≤155 chars
// ---------------------------------------------------------------------------
const metaDescriptions: Record<string, Record<Language, string>> = {
  home: {
    en: 'MACA – Per-app volume control for macOS. Individual mixer, 10-band EQ, audio profiles, Focus Mode. No data collection. One-time purchase. Free version available.',
    de: 'MACA – Lautstärke pro App für macOS. Individueller Mixer, 10-Band-EQ, Audio-Profile, Fokus-Modus. Keine Daten. Einmaliger Kauf. Kostenlose Version verfügbar.',
    fr: 'MACA – Volume par application sur macOS. Mixer individuel, EQ 10 bandes, profils audio, Mode Focus. Aucune donnée. Achat unique. Version gratuite disponible.',
    es: 'MACA – Volumen por app en macOS. Mezclador individual, EQ 10 bandas, perfiles de audio, Modo Enfoque. Sin datos. Compra única. Versión gratuita disponible.',
    it: 'MACA – Volume per app su macOS. Mixer individuale, EQ 10 bande, profili audio, Modalità Focus. Nessun dato. Acquisto unico. Versione gratuita disponibile.',
    ja: 'MACA – macOSのアプリごとの音量コントロール。個別ミキサー、10バンドEQ、オーディオプロファイル、フォーカスモード。データ収集なし。買い切り。無料版あり。',
    'zh-Hans': 'MACA – macOS每应用音量控制。独立混音器、10段EQ、音频配置文件、专注模式。无数据收集。一次性购买。提供免费版本。',
    'zh-Hant': 'MACA – macOS每應用音量控制。獨立混音器、10段EQ、音頻配置文件、專注模式。無數據收集。一次性購買。提供免費版本。',
    ar: 'MACA – تحكم في مستوى الصوت لكل تطبيق على macOS. خلاط فردي، معادل صوت 10 نطاقات، ملفات صوتية، وضع التركيز. بدون جمع بيانات. شراء لمرة واحدة. إصدار مجاني متاح.',
    ru: 'MACA – Управление громкостью каждого приложения на macOS. Индивидуальный микшер, 10-полосный эквалайзер, аудиопрофили, режим фокусировки. Без сбора данных. Разовая покупка. Бесплатная версия.',
    nl: 'MACA – Volume per app voor macOS. Individuele mixer, 10-bands EQ, audioprofielen, Focusmodus. Geen gegevensverzameling. Eenmalige aankoop. Gratis versie beschikbaar.',
    tr: 'MACA – macOS için uygulama başına ses kontrolü. Bireysel mikser, 10 bantlı EQ, ses profilleri, Odak Modu. Veri toplama yok. Tek seferlik satın alma. Ücretsiz sürüm mevcut.',
    sv: 'MACA – Volymkontroll per app för macOS. Individuell mixer, 10-bands EQ, ljudprofiler, Fokusläge. Ingen datainsamling. Engångsköp. Gratisversion tillgänglig.',
    da: 'MACA – Per-app lydstyrkekontrol for macOS. Individuel mixer, 10-bands EQ, lydprofiler, Fokusmodus. Ingen datinsamling. Én gangskøb. Gratis version tilgængelig.',
    ko: 'MACA – macOS 앱별 볼륨 컨트롤. 개별 믹서, 10대 EQ, 오디오 프로필, 포커스 모드. 데이터 수집 없음. 일회 구매. 무료 버전 제공.',
    nb: 'MACA – Per-app volumkontroll for macOS. Individuell mixer, 10-bands EQ, lydprofiler, Fokusmodus. Ingen datainsamling. Én gangskjøp. Gratis versjon tilgjengelig.',
  },
  faq: {
    en: 'Frequently asked questions about MACA – per-app volume control for macOS. Setup, features, pricing, compatibility and troubleshooting answered.',
    de: 'Häufig gestellte Fragen zu MACA – Lautstärke pro App für macOS. Einrichtung, Funktionen, Preise, Kompatibilität und Fehlerbehebung beantwortet.',
    fr: 'Questions fréquentes sur MACA – volume par application pour macOS. Installation, fonctionnalités, tarifs, compatibilité et dépannage.',
    es: 'Preguntas frecuentes sobre MACA – volumen por app para macOS. Instalación, funciones, precios, compatibilidad y solución de problemas.',
    it: 'Domande frequenti su MACA – volume per app su macOS. Configurazione, funzionalità, prezzi, compatibilità e risoluzione problemi.',
    ja: 'MACA（macOSアプリ別音量コントロール）のよくある質問。セットアップ、機能、料金、互換性、トラブルシューティング。',
    'zh-Hans': 'MACA常见问题 – macOS每应用音量控制。安装、功能、价格、兼容性和故障排除。',
    'zh-Hant': 'MACA常見問題 – macOS每應用音量控制。安裝、功能、價格、相容性和故障排除。',
    ar: 'الأسئلة الشائعة حول MACA – تحكم في الصوت لكل تطبيق على macOS. الإعداد والميزات والأسعار والتوافق واستكشاف الأخطاء.',
    ru: 'Часто задаваемые вопросы о MACA – управление громкостью приложений на macOS. Установка, функции, цены, совместимость и устранение неполадок.',
    nl: 'Veelgestelde vragen over MACA – volume per app voor macOS. Installatie, functies, prijzen, compatibiliteit en probleemoplossing.',
    tr: 'MACA hakkında sık sorulan sorular – macOS için uygulama başına ses kontrolü. Kurulum, özellikler, fiyatlar, uyumluluk ve sorun giderme.',
    sv: 'Vanliga frågor om MACA – volymkontroll per app för macOS. Installation, funktioner, priser, kompatibilitet och felsökning.',
    da: 'Ofte stillede spørgsmål om MACA – per-app lydstyrkekontrol for macOS. Opsætning, funktioner, priser, kompatibilitet og fejlfinding.',
    ko: 'MACA FAQ – macOS 앱별 볼륨 컨트롤. 설치, 기능, 가격, 호환성 및 문제 해결에 대한 답변.',
    nb: 'Ofte stilte spørsmål om MACA – per-app volumkontroll for macOS. Oppsett, funksjoner, priser, kompatibilitet og feilsøking.',
  },
  guide: {
    en: 'Step-by-step user guide for MACA. Learn how to set up per-app volume control, audio profiles, the 10-band equalizer and Focus Mode on macOS.',
    de: 'Schritt-für-Schritt-Anleitung für MACA. Lautstärke pro App einrichten, Audio-Profile, 10-Band-Equalizer und Fokus-Modus auf macOS nutzen.',
    fr: 'Guide utilisateur étape par étape pour MACA. Configurer le volume par app, profils audio, égaliseur 10 bandes et Mode Focus sur macOS.',
    es: 'Guía de usuario paso a paso para MACA. Configura el volumen por app, perfiles de audio, ecualizador de 10 bandas y Modo Enfoque en macOS.',
    it: 'Guida utente passo passo per MACA. Configura volume per app, profili audio, equalizzatore 10 bande e Modalità Focus su macOS.',
    ja: 'MACAユーザーガイド。アプリ別音量、オーディオプロファイル、10バンドEQ、フォーカスモードの設定方法をステップバイステップで解説。',
    'zh-Hans': 'MACA用户指南。逐步学习如何在macOS上设置每应用音量控制、音频配置文件、10段均衡器和专注模式。',
    'zh-Hant': 'MACA用戶指南。逐步學習如何在macOS上設定每應用音量控制、音頻配置文件、10段均衡器和專注模式。',
    ar: 'دليل المستخدم خطوة بخطوة لـ MACA. تعلم كيفية إعداد التحكم في الصوت لكل تطبيق والملفات الصوتية والمعادل ووضع التركيز على macOS.',
    ru: 'Пошаговое руководство пользователя MACA. Настройка громкости по приложениям, аудиопрофили, 10-полосный эквалайзер и режим фокусировки на macOS.',
    nl: 'Stapsgewijze handleiding voor MACA. Leer per-app volume, audioprofielen, 10-bands EQ en Focusmodus instellen op macOS.',
    tr: 'MACA için adım adım kullanıcı kılavuzu. macOS\'te uygulama bazlı ses kontrolü, ses profilleri, 10 bantlı EQ ve Odak Modunu ayarlamayı öğrenin.',
    sv: 'Steg-för-steg-guide för MACA. Lär dig ställa in volymkontroll per app, ljudprofiler, 10-bands EQ och Fokusläge på macOS.',
    da: 'Trin-for-trin-guide til MACA. Lær at konfigurere per-app lydstyrke, lydprofiler, 10-bands EQ og Fokusmodus på macOS.',
    ko: 'MACA 사용자 가이드. macOS에서 앱별 볼륨, 오디오 프로필, 10대 EQ, 포커스 모드 설정 방법을 단계별로 안내합니다.',
    nb: 'Steg-for-steg-guide for MACA. Lær å sette opp per-app volumkontroll, lydprofiler, 10-bands EQ og Fokusmodus på macOS.',
  },
  troubleshooting: {
    en: 'Troubleshooting MACA – fix common issues with per-app volume control on macOS. Audio permissions, app detection, EQ problems and more.',
    de: 'MACA Fehlerbehebung – häufige Probleme mit Lautstärke pro App auf macOS lösen. Audio-Berechtigungen, App-Erkennung, EQ-Probleme und mehr.',
    fr: 'Dépannage MACA – résoudre les problèmes courants de volume par app sur macOS. Autorisations audio, détection d\'apps, problèmes d\'EQ.',
    es: 'Solución de problemas de MACA – resuelve problemas comunes con el volumen por app en macOS. Permisos de audio, detección de apps, problemas de EQ.',
    it: 'Risoluzione problemi MACA – risolvi problemi comuni con il volume per app su macOS. Permessi audio, rilevamento app, problemi EQ.',
    ja: 'MACAトラブルシューティング – macOSアプリ別音量の一般的な問題を解決。オーディオ権限、アプリ検出、EQ問題など。',
    'zh-Hans': 'MACA故障排除 – 解决macOS每应用音量控制的常见问题。音频权限、应用检测、均衡器问题等。',
    'zh-Hant': 'MACA故障排除 – 解決macOS每應用音量控制的常見問題。音頻權限、應用檢測、均衡器問題等。',
    ar: 'استكشاف أخطاء MACA – حل المشكلات الشائعة في التحكم بالصوت لكل تطبيق على macOS. أذونات الصوت واكتشاف التطبيقات ومشاكل المعادل.',
    ru: 'Устранение неполадок MACA – решение частых проблем с управлением громкостью на macOS. Разрешения аудио, обнаружение приложений, проблемы с EQ.',
    nl: 'MACA probleemoplossing – los veelvoorkomende problemen op met per-app volume op macOS. Audiomachtigingen, app-detectie, EQ-problemen.',
    tr: 'MACA sorun giderme – macOS\'te uygulama bazlı ses kontrolü sorunlarını çözün. Ses izinleri, uygulama algılama, EQ sorunları.',
    sv: 'MACA felsökning – lös vanliga problem med volymkontroll per app på macOS. Ljudbehörigheter, appidentifiering, EQ-problem.',
    da: 'MACA fejlfinding – løs almindelige problemer med per-app lydstyrke på macOS. Lydtilladelser, app-registrering, EQ-problemer.',
    ko: 'MACA 문제 해결 – macOS 앱별 볼륨 컨트롤의 일반적인 문제를 해결하세요. 오디오 권한, 앱 감지, EQ 문제 등.',
    nb: 'MACA feilsøking – løs vanlige problemer med per-app volumkontroll på macOS. Lydtillatelser, app-gjenkjenning, EQ-problemer.',
  },
  privacy: {
    en: 'MACA Privacy Policy – No data collection, no tracking, no analytics. Everything runs locally on your Mac. Your audio data never leaves your device.',
    de: 'MACA Datenschutzerklärung – Keine Datenerhebung, kein Tracking, keine Analyse. Alles läuft lokal auf deinem Mac. Deine Audiodaten verlassen nie dein Gerät.',
    fr: 'Politique de confidentialité MACA – Aucune collecte de données, aucun suivi, aucune analyse. Tout fonctionne localement sur votre Mac.',
    es: 'Política de privacidad de MACA – Sin recopilación de datos, sin seguimiento, sin análisis. Todo funciona localmente en tu Mac.',
    it: 'Informativa sulla privacy MACA – Nessuna raccolta dati, nessun tracciamento, nessuna analisi. Tutto funziona localmente sul tuo Mac.',
    ja: 'MACAプライバシーポリシー – データ収集なし、トラッキングなし、分析なし。すべてMac上でローカル処理。音声データはデバイスから出ません。',
    'zh-Hans': 'MACA隐私政策 – 无数据收集、无追踪、无分析。一切在Mac本地运行。音频数据不会离开设备。',
    'zh-Hant': 'MACA隱私政策 – 無數據收集、無追蹤、無分析。一切在Mac本地運行。音頻數據不會離開設備。',
    ar: 'سياسة خصوصية MACA – بدون جمع بيانات، بدون تتبع، بدون تحليلات. كل شيء يعمل محلياً على جهاز Mac الخاص بك.',
    ru: 'Политика конфиденциальности MACA – Без сбора данных, без отслеживания, без аналитики. Всё работает локально на вашем Mac.',
    nl: 'MACA Privacybeleid – Geen dataverzameling, geen tracking, geen analyse. Alles draait lokaal op je Mac.',
    tr: 'MACA Gizlilik Politikası – Veri toplama yok, izleme yok, analiz yok. Her şey Mac\'inizde yerel olarak çalışır.',
    sv: 'MACA Integritetspolicy – Ingen datainsamling, ingen spårning, ingen analys. Allt körs lokalt på din Mac.',
    da: 'MACA Privatlivspolitik – Ingen dataindsamling, ingen sporing, ingen analyse. Alt kører lokalt på din Mac.',
    ko: 'MACA 개인정보 보호정책 – 데이터 수집 없음, 추적 없음, 분석 없음. 모든 것이 Mac에서 로컬로 처리됩니다.',
    nb: 'MACA Personvern – Ingen datainnsamling, ingen sporing, ingen analyse. Alt kjører lokalt på din Mac.',
  },
  terms: {
    en: 'Terms of Use for MACA – Master Audio Control App for macOS. License terms, usage rights, free vs. Pro version, one-time purchase conditions.',
    de: 'Nutzungsbedingungen für MACA – Master Audio Control App für macOS. Lizenzbedingungen, Nutzungsrechte, Free vs. Pro, Einmalkauf.',
    fr: 'Conditions d\'utilisation de MACA – Master Audio Control pour macOS. Licence, droits d\'utilisation, version gratuite vs. Pro, achat unique.',
    es: 'Términos de uso de MACA – Master Audio Control para macOS. Licencia, derechos de uso, versión gratuita vs. Pro, compra única.',
    it: 'Termini d\'uso di MACA – Master Audio Control per macOS. Licenza, diritti d\'uso, versione gratuita vs. Pro, acquisto unico.',
    ja: 'MACA利用規約 – macOS用Master Audio Control App。ライセンス条件、使用権、無料版 vs. Pro版、買い切り条件。',
    'zh-Hans': 'MACA使用条款 – macOS Master Audio Control App。许可条款、使用权、免费版与Pro版、一次性购买条件。',
    'zh-Hant': 'MACA使用條款 – macOS Master Audio Control App。許可條款、使用權、免費版與Pro版、一次性購買條件。',
    ar: 'شروط استخدام MACA – Master Audio Control لـ macOS. شروط الترخيص وحقوق الاستخدام والنسخة المجانية مقابل Pro والشراء لمرة واحدة.',
    ru: 'Условия использования MACA – Master Audio Control для macOS. Лицензия, права использования, бесплатная vs. Pro версия, разовая покупка.',
    nl: 'Gebruiksvoorwaarden voor MACA – Master Audio Control voor macOS. Licentievoorwaarden, gebruiksrechten, gratis vs. Pro, eenmalige aankoop.',
    tr: 'MACA Kullanım Şartları – macOS için Master Audio Control. Lisans koşulları, kullanım hakları, ücretsiz vs. Pro, tek seferlik satın alma.',
    sv: 'Användarvillkor för MACA – Master Audio Control för macOS. Licensvillkor, användningsrättigheter, gratis vs. Pro, engångsköp.',
    da: 'Brugervilkår for MACA – Master Audio Control for macOS. Licensvilkår, brugsrettigheder, gratis vs. Pro, én gangskøb.',
    ko: 'MACA 이용 약관 – macOS용 Master Audio Control App. 라이선스 조건, 사용권, 무료 vs. Pro 버전, 일회 구매 조건.',
    nb: 'Vilkår for bruk av MACA – Master Audio Control for macOS. Lisensvilkår, bruksrettigheter, gratis vs. Pro, én gangskjøp.',
  },
  imprint: {
    en: 'Imprint & Legal Notice – MACA Master Audio Control. Publisher information, contact details, and legal disclosures for the MACA macOS app.',
    de: 'Impressum – MACA Master Audio Control. Angaben gemäß § 5 TMG, Kontaktdaten und rechtliche Hinweise zur MACA macOS App.',
    fr: 'Mentions légales – MACA Master Audio Control. Informations éditeur, coordonnées et mentions légales pour l\'app MACA macOS.',
    es: 'Aviso legal – MACA Master Audio Control. Información del editor, datos de contacto y avisos legales de la app MACA para macOS.',
    it: 'Note legali – MACA Master Audio Control. Informazioni editore, contatti e informative legali per l\'app MACA macOS.',
    ja: '法的情報 – MACA Master Audio Control。発行者情報、連絡先、MACA macOSアプリの法的開示。',
    'zh-Hans': '法律信息 – MACA Master Audio Control。出版者信息、联系方式和MACA macOS应用的法律声明。',
    'zh-Hant': '法律資訊 – MACA Master Audio Control。出版者資訊、聯絡方式和MACA macOS應用的法律聲明。',
    ar: 'البيان القانوني – MACA Master Audio Control. معلومات الناشر وتفاصيل الاتصال والإفصاحات القانونية لتطبيق MACA لـ macOS.',
    ru: 'Юридическая информация – MACA Master Audio Control. Данные издателя, контактные данные и правовая информация о приложении MACA для macOS.',
    nl: 'Colofon – MACA Master Audio Control. Uitgeversinformatie, contactgegevens en juridische kennisgevingen voor de MACA macOS-app.',
    tr: 'Yasal Bilgiler – MACA Master Audio Control. Yayıncı bilgileri, iletişim bilgileri ve MACA macOS uygulaması için yasal açıklamalar.',
    sv: 'Impressum – MACA Master Audio Control. Utgivarinformation, kontaktuppgifter och juridiska upplysningar för MACA macOS-appen.',
    da: 'Impressum – MACA Master Audio Control. Udgiveroplysninger, kontaktoplysninger og juridiske oplysninger for MACA macOS-appen.',
    ko: '법적 정보 – MACA Master Audio Control. 퍼블리셔 정보, 연락처 및 MACA macOS 앱에 대한 법적 공개.',
    nb: 'Impressum – MACA Master Audio Control. Utgiverinfo, kontaktdetaljer og juridiske opplysninger for MACA macOS-appen.',
  },
};

// ---------------------------------------------------------------------------
// Page titles – keyword-optimised per language
// ---------------------------------------------------------------------------
const pageTitles: Record<string, Record<Language, string>> = {
  home: {
    en: 'MACA – Per-App Volume Control for macOS | Individual Audio Mixer',
    de: 'MACA – Lautstärke pro App für macOS | Individueller Audio-Mixer',
    fr: 'MACA – Volume par Application macOS | Mixer Audio Individuel',
    es: 'MACA – Volumen por App en macOS | Mezclador de Audio Individual',
    it: 'MACA – Volume per App su macOS | Mixer Audio Individuale',
    ja: 'MACA – macOSのアプリごとの音量コントロール | 個別オーディオミキサー',
    'zh-Hans': 'MACA – macOS每应用音量控制 | 独立音频混音器',
    'zh-Hant': 'MACA – macOS每應用音��控制 | 獨立音頻混音器',
    ar: 'MACA – تحكم في مستوى الصوت لكل تطبيق على macOS | خلاط صوت فردي',
    ru: 'MACA – Управление громкостью каждого приложения на macOS | Индивидуальный микшер',
    nl: 'MACA – Volume per app voor macOS | Individuele audio-mixer',
    tr: 'MACA – macOS için uygulama başına ses kontrolü | Bireysel mikser',
    sv: 'MACA – Volymkontroll per app för macOS | Individuell ljudmixer',
    da: 'MACA – Per-app lydstyrkekontrol for macOS | Individuel lydmixer',
    ko: 'MACA – macOS 앱별 볼륨 컨트롤 | 개별 믹서',
    nb: 'MACA – Per-app volumkontroll for macOS | Individuell lydmixer',
  },
  faq: {
    en: 'FAQ – MACA Master Audio Control for macOS',
    de: 'FAQ – MACA Master Audio Control für macOS',
    fr: 'FAQ – MACA Contrôle Audio pour macOS',
    es: 'FAQ – MACA Control de Audio para macOS',
    it: 'FAQ – MACA Controllo Audio per macOS',
    ja: 'よくある質問 – MACA Master Audio Control',
    'zh-Hans': '常见问题 – MACA Master Audio Control',
    'zh-Hant': '常見問題 – MACA Master Audio Control',
    ar: 'أسئلة متكررة – MACA تحكم الصوت الرئيسي لـ macOS',
    ru: 'Часто задаваемые вопросы – MACA Управление громкостью для macOS',
    nl: 'FAQ – MACA Master Audio Control voor macOS',
    tr: 'SSS – MACA Master Audio Control için macOS',
    sv: 'FAQ – MACA Master Audio Control för macOS',
    da: 'FAQ – MACA Master Audio Control for macOS',
    ko: 'FAQ – MACA Master Audio Control for macOS',
    nb: 'FAQ – MACA Master Audio Control for macOS',
  },
  privacy: {
    en: 'Privacy Policy – MACA Master Audio Control',
    de: 'Datenschutzerklärung – MACA Master Audio Control',
    fr: 'Politique de Confidentialité – MACA Master Audio Control',
    es: 'Política de Privacidad – MACA Master Audio Control',
    it: 'Informativa sulla Privacy – MACA Master Audio Control',
    ja: 'プライバシーポリシー – MACA Master Audio Control',
    'zh-Hans': '隐私政策 – MACA Master Audio Control',
    'zh-Hant': '隱私政策 – MACA Master Audio Control',
    ar: 'سياسة الخصوصية – MACA تحكم الصوت الرئيسي لـ macOS',
    ru: 'Политика конфиденциальности – MACA Управление громкостью для macOS',
    nl: 'Privacybeleid – MACA Master Audio Control voor macOS',
    tr: 'Gizlilik Politikası – MACA Master Audio Control',
    sv: 'Integritetspolicy – MACA Master Audio Control',
    da: 'Privatlivspolitik – MACA Master Audio Control',
    ko: '개인 정보 보호 정책 – MACA Master Audio Control',
    nb: 'Personvern – MACA Master Audio Control',
  },
  terms: {
    en: 'Terms of Use – MACA Master Audio Control',
    de: 'Nutzungsbedingungen – MACA Master Audio Control',
    fr: "Conditions d'Utilisation – MACA Master Audio Control",
    es: 'Términos de Uso – MACA Master Audio Control',
    it: "Termini d'Uso – MACA Master Audio Control",
    ja: '利用規約 – MACA Master Audio Control',
    'zh-Hans': '使用条款 – MACA Master Audio Control',
    'zh-Hant': '使用條款 – MACA Master Audio Control',
    ar: 'شروط الاستخدام – MACA تحكم الصوت الرئيسي لـ macOS',
    ru: 'Условия использования – MACA Управление громкостью для macOS',
    nl: 'Gebruiksvoorwaarden – MACA Master Audio Control voor macOS',
    tr: 'Kullanım Şartları – MACA Master Audio Control',
    sv: 'Användarvillkor – MACA Master Audio Control',
    da: 'Brugervilkår – MACA Master Audio Control',
    ko: '이용 약관 – MACA Master Audio Control',
    nb: 'Vilkår for bruk – MACA Master Audio Control',
  },
  imprint: {
    en: 'Imprint – MACA Master Audio Control',
    de: 'Impressum – MACA Master Audio Control',
    fr: 'Mentions Légales – MACA Master Audio Control',
    es: 'Aviso Legal – MACA Master Audio Control',
    it: 'Note Legali – MACA Master Audio Control',
    ja: '法的情報 – MACA Master Audio Control',
    'zh-Hans': '法律信息 – MACA Master Audio Control',
    'zh-Hant': '法律資訊 – MACA Master Audio Control',
    ar: 'البيان القانوني – MACA تحكم الصوت الرئيسي لـ macOS',
    ru: 'Юридическая информация – MACA Управление громкостью для macOS',
    nl: 'Colofon – MACA Master Audio Control',
    tr: 'Yasal Bilgiler – MACA Master Audio Control',
    sv: 'Impressum – MACA Master Audio Control',
    da: 'Impressum – MACA Master Audio Control',
    ko: '법적 정보 – MACA Master Audio Control',
    nb: 'Impressum – MACA Master Audio Control',
  },
  feedback: {
    en: 'Feedback – MACA Master Audio Control',
    de: 'Feedback – MACA Master Audio Control',
    fr: "Retour d'expérience – MACA Master Audio Control",
    es: 'Comentarios – MACA Master Audio Control',
    it: 'Feedback – MACA Master Audio Control',
    ja: 'フィードバック – MACA Master Audio Control',
    'zh-Hans': '反馈 – MACA Master Audio Control',
    'zh-Hant': '反饋 – MACA Master Audio Control',
    ar: 'التعليقات – MACA تحكم الصوت الرئيسي لـ macOS',
    ru: 'Отзывы – MACA Управление громкостью для macOS',
    nl: 'Feedback – MACA Master Audio Control voor macOS',
    tr: 'Geri Bildirim – MACA Master Audio Control',
    sv: 'Feedback – MACA Master Audio Control',
    da: 'Feedback – MACA Master Audio Control',
    ko: '피드백 – MACA Master Audio Control',
    nb: 'Tilbakemelding – MACA Master Audio Control',
  },
  guide: {
    en: 'User Guide – MACA Master Audio Control',
    de: 'Benutzerhandbuch – MACA Master Audio Control',
    fr: 'Guide Utilisateur – MACA Master Audio Control',
    es: 'Guía del Usuario – MACA Master Audio Control',
    it: 'Guida Utente – MACA Master Audio Control',
    ja: 'ユーザーガイド – MACA Master Audio Control',
    'zh-Hans': '用户指南 – MACA Master Audio Control',
    'zh-Hant': '用戶指南 – MACA Master Audio Control',
    ar: 'دليل المستخدم – MACA تحكم الصوت الرئيسي لـ macOS',
    ru: 'Руководство пользователя – MACA Управление громкостью для macOS',
    nl: 'Gebruikershandleiding – MACA Master Audio Control voor macOS',
    tr: 'Kullanıcı Kılavuzu – MACA Master Audio Control',
    sv: 'Användarhandledning – MACA Master Audio Control',
    da: 'Brugermanual – MACA Master Audio Control',
    ko: '사용자 가이드 – MACA Master Audio Control',
    nb: 'Brukermanual – MACA Master Audio Control',
  },
  troubleshooting: {
    en: 'Troubleshooting – MACA Master Audio Control',
    de: 'Fehlerbehebung – MACA Master Audio Control',
    fr: 'Dépannage – MACA Master Audio Control',
    es: 'Solución de problemas – MACA Master Audio Control',
    it: 'Risoluzione dei problemi – MACA Master Audio Control',
    ja: 'トラブルシューティング – MACA Master Audio Control',
    'zh-Hans': '故障排除 – MACA Master Audio Control',
    'zh-Hant': '故障排除 – MACA Master Audio Control',
    ar: 'حل المشكلات – MACA تحكم الصوت الرئيسي لـ macOS',
    ru: 'Устранение неполадок – MACA Управление громкостью для macOS',
    nl: 'Probleemoplossing – MACA Master Audio Control voor macOS',
    tr: 'Sorun Giderme – MACA Master Audio Control',
    sv: 'Felsökning – MACA Master Audio Control',
    da: 'Fejlfinding – MACA Master Audio Control',
    ko: '문제 해결 – MACA Master Audio Control',
    nb: 'Feilsøking – MACA Master Audio Control',
  },
};

// ---------------------------------------------------------------------------
// Keywords – page-specific, long-tail, intent-rich, per language (ASO-optimized)
// ---------------------------------------------------------------------------
const pageKeywords: Record<string, Record<Language, string>> = {
  home: {
    en: 'mac volume mixer, per app volume, app volume control, menu bar volume, zoom volume, discord volume, spotify volume, audio mixer mac, equalizer mac, mute app, MACA, macOS',
    de: 'lautstärke mixer mac, app lautstärke, lautstärke pro app, menüleiste lautstärke, zoom lautstärke, discord lautstärke, spotify lautstärke, audio mixer mac, equalizer mac, app stummschalten, MACA, macOS',
    fr: 'mixeur volume mac, volume par application, contrôle volume app, volume barre menu, volume zoom, volume discord, volume spotify, mixeur audio mac, equalizer mac, couper son app, MACA, macOS',
    es: 'mezclador volumen mac, volumen por app, control volumen app, volumen barra menú, volumen zoom, volumen discord, volumen spotify, mezclador audio mac, ecualizador mac, silenciar app, MACA, macOS',
    it: 'mixer volume mac, volume per app, controllo volume app, volume barra menu, volume zoom, volume discord, volume spotify, mixer audio mac, equalizzatore mac, disattiva audio app, MACA, macOS',
    ja: 'mac 音量 ミキサー, アプリ 音量 個別, アプリ別 音量, メニューバー 音量, zoom 音量, discord 音量, spotify 音量, mac オーディオ ミキサー, mac イコライザー, アプリ ミュート, MACA, macOS',
    'zh-Hans': 'mac 音量混音器, 应用 音量 单独控制, 每个应用 音量, 菜单栏 音量, zoom 音量, discord 音量, spotify 音量, mac 音频混音器, mac 均衡器, 应用 静音, MACA, macOS',
    'zh-Hant': 'mac 音量混音器, 應用 音量 單獨控制, 每個應用 音量, 選單列 音量, zoom 音量, discord 音量, spotify 音量, mac 音頻混音器, mac 均衡器, 應用 靜音, MACA, macOS',
    ar: 'mac خلاط صوت, تحكم صوت لكل تطبيق, صوت كل تطبيق, صوت شريط القوائم, صوت zoom, صوت discord, صوت spotify, خلاط صوت mac, معادل صوت mac, كتم تطبيق, MACA, macOS',
    ru: 'микшер громкости mac, громкость по приложениям, управление громкостью приложений, громкость строка меню, громкость zoom, громкость discord, громкость spotify, аудиомикшер mac, эквалайзер mac, выключить звук приложения, MACA, macOS',
    nl: 'volume mixer mac, volume per app, app volume regelen, volume menubalk, volume zoom, volume discord, volume spotify, audio mixer mac, equalizer mac, app dempen, MACA, macOS',
    tr: 'mac ses mikseri, uygulama bazlı ses, app volume control, ses menü çubuğu, zoom sesi, discord sesi, spotify sesi, mac audio mixer, mac equalizer, uygulama sessize al, MACA, macOS',
    sv: 'volymmixer mac, volym per app, app volymkontroll, volym menyrad, volym zoom, volym discord, volym spotify, ljudmixer mac, equalizer mac, tysta app, MACA, macOS',
    da: 'volumemixer mac, volumen per app, app volumenkontrol, volumen menulinje, volumen zoom, volumen discord, volumen spotify, lydmixer mac, equalizer mac, mute app, MACA, macOS',
    ko: 'mac 볼륨 믹서, 앱별 볼륨, 앱 볼륨 제어, 메뉴 막대 볼륨, zoom 볼륨, discord 볼륨, spotify 볼륨, mac 오디오 믹서, mac 이퀄라이저, 앱 음소거, MACA, macOS',
    nb: 'volummikser mac, volum per app, app volumkontroll, volum menylinje, volum zoom, volum discord, volum spotify, lydmikser mac, equalizer mac, demp app, MACA, macOS',
  },
  faq: {
    en: 'MACA FAQ, frequently asked questions, mac volume mixer help, per app volume questions, MACA free vs pro, audio control setup, macOS audio FAQ, MACA compatibility, Apple Silicon audio',
    de: 'MACA FAQ, häufige Fragen, lautstärke mixer hilfe, app lautstärke fragen, MACA kostenlos vs pro, audio steuerung einrichtung, macOS audio FAQ, MACA kompatibilität, Apple Silicon audio',
    fr: 'MACA FAQ, questions fréquentes, aide mixeur volume, questions volume par app, MACA gratuit vs pro, configuration contrôle audio, macOS audio FAQ, MACA compatibilité, Apple Silicon audio',
    es: 'MACA FAQ, preguntas frecuentes, ayuda mezclador volumen, preguntas volumen por app, MACA gratis vs pro, configuración control audio, macOS audio FAQ, MACA compatibilidad, Apple Silicon audio',
    it: 'MACA FAQ, domande frequenti, aiuto mixer volume, domande volume per app, MACA gratuito vs pro, configurazione controllo audio, macOS audio FAQ, MACA compatibilità, Apple Silicon audio',
    ja: 'MACA FAQ, よくある質問, 音量ミキサー ヘルプ, アプリ別音量 質問, MACA 無料 vs プロ, オーディオ制御 設定, macOS オーディオ FAQ, MACA 互換性, Apple Silicon オーディオ',
    'zh-Hans': 'MACA FAQ, 常见问题, 音量混音器 帮助, 应用音量 问题, MACA 免费 vs 专业版, 音频控制 设置, macOS 音频 FAQ, MACA 兼容性, Apple Silicon 音频',
    'zh-Hant': 'MACA FAQ, 常見問題, 音量混音器 幫助, 應用音量 問題, MACA 免費 vs 專業版, 音頻控制 設定, macOS 音頻 FAQ, MACA 相容性, Apple Silicon 音頻',
    ar: 'MACA FAQ, أسئلة شائعة, مساعدة خلاط صوت, أسئلة صوت التطبيقات, MACA مجاني مقابل برو, إعداد التحكم بالصوت, macOS صوت FAQ, MACA التوافق, Apple Silicon صوت',
    ru: 'MACA FAQ, часто задаваемые вопросы, помощь микшер громкости, вопросы громкость приложений, MACA бесплатно vs про, настройка аудио управления, macOS аудио FAQ, MACA совместимость, Apple Silicon аудио',
    nl: 'MACA FAQ, veelgestelde vragen, volume mixer hulp, app volume vragen, MACA gratis vs pro, audio bediening instellen, macOS audio FAQ, MACA compatibiliteit, Apple Silicon audio',
    tr: 'MACA FAQ, sık sorulan sorular, ses mikseri yardım, uygulama sesi soruları, MACA ücretsiz vs pro, ses kontrol kurulumu, macOS ses FAQ, MACA uyumluluk, Apple Silicon ses',
    sv: 'MACA FAQ, vanliga frågor, volymmixer hjälp, app volym frågor, MACA gratis vs pro, ljudkontroll inställning, macOS ljud FAQ, MACA kompatibilitet, Apple Silicon ljud',
    da: 'MACA FAQ, ofte stillede spørgsmål, volumemixer hjælp, app volumen spørgsmål, MACA gratis vs pro, lydkontrol opsætning, macOS lyd FAQ, MACA kompatibilitet, Apple Silicon lyd',
    ko: 'MACA FAQ, 자주 묻는 질문, 볼륨 믹서 도움말, 앱 볼륨 질문, MACA 무료 vs 프로, 오디오 제어 설정, macOS 오디오 FAQ, MACA 호환성, Apple Silicon 오디오',
    nb: 'MACA FAQ, ofte stilte spørsmål, volummikser hjelp, app volum spørsmål, MACA gratis vs pro, lydkontroll oppsett, macOS lyd FAQ, MACA kompatibilitet, Apple Silicon lyd',
  },
  guide: {
    en: 'MACA user guide, setup tutorial, per app volume how to, audio profiles setup, equalizer settings, focus mode guide, total silence mode, MACA installation, macOS audio tutorial',
    de: 'MACA Benutzerhandbuch, Einrichtung Anleitung, Lautstärke pro App Anleitung, Audio-Profile einrichten, Equalizer Einstellungen, Fokus-Modus Anleitung, Total Silence Modus, MACA Installation, macOS Audio Anleitung',
    fr: 'MACA guide utilisateur, tutoriel installation, volume par app comment faire, profils audio configuration, réglages égaliseur, guide mode focus, mode silence total, MACA installation, macOS audio tutoriel',
    es: 'MACA guía usuario, tutorial configuración, volumen por app cómo, perfiles audio configurar, ajustes ecualizador, guía modo enfoque, modo silencio total, MACA instalación, macOS audio tutorial',
    it: 'MACA guida utente, tutorial configurazione, volume per app come fare, profili audio configurare, impostazioni equalizzatore, guida modalità focus, modalità silenzio totale, MACA installazione, macOS audio tutorial',
    ja: 'MACA ユーザーガイド, セットアップ チュートリアル, アプリ別音量 設定方法, オーディオプロファイル 設定, イコライザー 設定, フォーカスモード ガイド, トータルサイレンスモード, MACA インストール, macOS オーディオ チュートリアル',
    'zh-Hans': 'MACA 用户指南, 设置教程, 应用音量 设置方法, 音频配置文件 设置, 均衡器 设置, 专注模式 指南, 完全静音模式, MACA 安装, macOS 音频 教程',
    'zh-Hant': 'MACA 用戶指南, 設定教程, 應用音量 設定方法, 音訊設定檔 設定, 均衡器 設定, 專注模式 指南, 完全靜音模式, MACA 安裝, macOS 音頻 教程',
    ar: 'MACA دليل المستخدم, دروس الإعداد, صوت التطبيق كيفية, إعداد ملفات الصوت, إعدادات المعادل, دليل وضع التركيز, وضع الصمت الكامل, MACA التثبيت, macOS صوت دروس',
    ru: 'MACA руководство пользователя, инструкция по настройке, громкость приложений как, настройка аудиопрофилей, настройки эквалайзера, руководство режим фокусировки, режим полной тишины, MACA установка, macOS аудио инструкция',
    nl: 'MACA gebruikershandleiding, installatie handleiding, volume per app hoe, audioprofielen instellen, equalizer instellingen, focusmodus handleiding, total silence modus, MACA installatie, macOS audio handleiding',
    tr: 'MACA kullanım kılavuzu, kurulum rehberi, uygulama sesi nasıl, ses profilleri kurulum, ekolayzır ayarları, odak modu rehberi, tamamen sessiz modu, MACA kurulum, macOS ses rehberi',
    sv: 'MACA användarguide, installationsguide, volym per app hur, ljudprofiler inställning, equalizer inställningar, fokusläge guide, total silence läge, MACA installation, macOS ljud guide',
    da: 'MACA brugervejledning, opsætningsguide, volumen per app hvordan, lydprofiler opsætning, equalizer indstillinger, fokusmodus guide, total silence tilstand, MACA installation, macOS lyd guide',
    ko: 'MACA 사용자 가이드, 설정 튜토리얼, 앱별 볼륨 설정 방법, 오디오 프로필 설정, 이퀄라이저 설정, 포커스 모드 가이드, 완전 무음 모드, MACA 설치, macOS 오디오 튜토리얼',
    nb: 'MACA brukermanual, oppsettguide, volum per app hvordan, lydprofiler oppsett, equalizer innstillinger, fokusmodus guide, total silence modus, MACA installasjon, macOS lyd guide',
  },
  troubleshooting: {
    en: 'MACA troubleshooting, fix audio mac, app not showing, no sound mac, audio distortion fix, menu bar icon missing, macOS audio permissions, audio tap not working, EQ problems mac, MACA support',
    de: 'MACA Fehlerbehebung, Audio Mac reparieren, App nicht sichtbar, kein Ton Mac, Audio Verzerrung beheben, Menüleisten-Symbol fehlt, macOS Audio Berechtigungen, Audio Tap funktioniert nicht, EQ Probleme Mac, MACA Support',
    fr: 'MACA dépannage, réparer audio mac, app non visible, pas de son mac, correction distortion audio, icône barre menu manquant, permissions audio macOS, audio tap ne fonctionne pas, problèmes EQ mac, MACA support',
    es: 'MACA solución problemas, reparar audio mac, app no aparece, sin sonido mac, corregir distorsión audio, icono barra menú falta, permisos audio macOS, audio tap no funciona, problemas EQ mac, MACA soporte',
    it: 'MACA risoluzione problemi, riparare audio mac, app non visibile, nessun suono mac, correggere distorsione audio, icona barra menu mancante, permessi audio macOS, audio tap non funziona, problemi EQ mac, MACA supporto',
    ja: 'MACA トラブルシューティング, Mac オーディオ 修正, アプリ 表示されない, Mac 音が出ない, オーディオ歪み 修正, メニューバー アイコン消えた, macOS オーディオ権限, オーディオタップ 動かない, EQ 問題 Mac, MACA サポート',
    'zh-Hans': 'MACA 故障排除, 修复 mac 音频, 应用 未显示, mac 没有声音, 修复 音频失真, 菜单栏 图标 消失, macOS 音频 权限, 音频 tap 不工作, EQ 问题 mac, MACA 支持',
    'zh-Hant': 'MACA 故障排除, 修復 mac 音頻, 應用 未顯示, mac 沒有聲音, 修復 音頻失真, 選單列 圖標 消失, macOS 音頻 權限, 音頻 tap 不工作, EQ 問題 mac, MACA 支援',
    ar: 'MACA حل المشكلات, إصلاح صوت mac, التطبيق لا يظهر, لا صوت mac, إصلاح تشويه الصوت, أيقونة شريط القوائم مفقودة, أذونات صوت macOS, audio tap لا يعمل, مشاكل EQ mac, MACA دعم',
    ru: 'MACA устранение неполадок, исправить аудио mac, приложение не отображается, нет звука mac, исправить искажение звука, иконка строка меню пропала, разрешения аудио macOS, аудио tap не работает, проблемы EQ mac, MACA поддержка',
    nl: 'MACA probleemoplossing, audio mac repareren, app niet zichtbaar, geen geluid mac, audio vervorming oplossen, menubalk icoon ontbreekt, macOS audio machtigingen, audio tap werkt niet, EQ problemen mac, MACA ondersteuning',
    tr: 'MACA sorun giderme, mac ses düzeltme, uygulama görünmüyor, mac ses yok, ses bozulması düzeltme, menü çubuğu simgesi eksik, macOS ses izinleri, audio tap çalışmıyor, EQ sorunları mac, MACA destek',
    sv: 'MACA felsökning, fixa ljud mac, app visas inte, inget ljud mac, fixa ljuddistortion, menyrad ikon saknas, macOS ljudbehörigheter, audio tap fungerar inte, EQ problem mac, MACA support',
    da: 'MACA fejlfinding, rette lyd mac, app vises ikke, ingen lyd mac, rette lyd forvrængning, menulinje ikon mangler, macOS lyd tilladelser, audio tap virker ikke, EQ problemer mac, MACA support',
    ko: 'MACA 문제 해결, mac 오디오 수정, 앱 표시 안됨, mac 소리 없음, 오디오 왜곡 수정, 메뉴 막대 아이콘 없음, macOS 오디오 권한, 오디오 탭 작동 안함, EQ 문제 mac, MACA 지원',
    nb: 'MACA feilsøking, fikse lyd mac, app vises ikke, ingen lyd mac, fikse lyd forvrengning, menylinje ikon mangler, macOS lydtillatelser, audio tap virker ikke, EQ problemer mac, MACA support',
  },
  privacy: {
    en: 'MACA privacy policy, data protection, no data collection, local processing, macOS app privacy, Apple Silicon privacy, audio app data policy, MACA GDPR, user privacy macOS',
    de: 'MACA Datenschutz, Datenschutzerklärung, keine Datenerhebung, lokale Verarbeitung, macOS App Datenschutz, Apple Silicon Datenschutz, Audio App Datenschutz, MACA DSGVO, Benutzerdatenschutz macOS',
    fr: 'MACA politique confidentialité, protection données, aucune collecte données, traitement local, confidentialité app macOS, Apple Silicon confidentialité, politique données app audio, MACA RGPD, confidentialité utilisateur macOS',
    es: 'MACA política privacidad, protección datos, sin recopilación datos, procesamiento local, privacidad app macOS, Apple Silicon privacidad, política datos app audio, MACA RGPD, privacidad usuario macOS',
    it: 'MACA privacy policy, protezione dati, nessuna raccolta dati, elaborazione locale, privacy app macOS, Apple Silicon privacy, politica dati app audio, MACA GDPR, privacy utente macOS',
    ja: 'MACA プライバシーポリシー, データ保護, データ収集なし, ローカル処理, macOS アプリ プライバシー, Apple Silicon プライバシー, オーディオアプリ データポリシー, MACA GDPR, ユーザープライバシー macOS',
    'zh-Hans': 'MACA 隐私政策, 数据保护, 不收集数据, 本地处理, macOS 应用 隐私, Apple Silicon 隐私, 音频应用 数据政策, MACA GDPR, 用户隐私 macOS',
    'zh-Hant': 'MACA 隱私政策, 資料保護, 不收集資料, 本地處理, macOS 應用 隱私, Apple Silicon 隱私, 音頻應用 資料政策, MACA GDPR, 用戶隱私 macOS',
    ar: 'MACA سياسة الخصوصية, حماية البيانات, لا جمع بيانات, معالجة محلية, خصوصية تطبيق macOS, Apple Silicon خصوصية, سياسة بيانات تطبيق صوت, MACA GDPR, خصوصية المستخدم macOS',
    ru: 'MACA политика конфиденциальности, защита данных, без сбора данных, локальная обработка, конфиденциальность приложения macOS, Apple Silicon конфиденциальность, политика данных аудио приложения, MACA GDPR, конфиденциальность пользователя macOS',
    nl: 'MACA privacybeleid, gegevensbescherming, geen gegevensverzameling, lokale verwerking, macOS app privacy, Apple Silicon privacy, audio app gegevensbeleid, MACA AVG, gebruikersprivacy macOS',
    tr: 'MACA gizlilik politikası, veri koruma, veri toplamama, yerel işleme, macOS uygulama gizlilik, Apple Silicon gizlilik, ses uygulaması veri politikası, MACA KVKK, kullanıcı gizlilik macOS',
    sv: 'MACA integritetspolicy, dataskydd, ingen datainsamling, lokal bearbetning, macOS app integritet, Apple Silicon integritet, ljudapp datapolicy, MACA GDPR, användarintegritet macOS',
    da: 'MACA privatlivspolitik, databeskyttelse, ingen dataindsamling, lokal behandling, macOS app privatliv, Apple Silicon privatliv, lyd app datapolitik, MACA GDPR, brugerprivatliv macOS',
    ko: 'MACA 개인정보 보호정책, 데이터 보호, 데이터 수집 없음, 로컬 처리, macOS 앱 개인정보, Apple Silicon 개인정보, 오디오 앱 데이터 정책, MACA GDPR, 사용자 개인정보 macOS',
    nb: 'MACA personvernpolicy, databeskyttelse, ingen datainnsamling, lokal behandling, macOS app personvern, Apple Silicon personvern, lydapp datapolicy, MACA GDPR, brukerpersonvern macOS',
  },
  terms: {
    en: 'MACA terms of use, license agreement, software license, macOS app terms, usage conditions, MACA EULA, app store terms, end user agreement, MACA legal',
    de: 'MACA Nutzungsbedingungen, Lizenzvereinbarung, Softwarelizenz, macOS App Bedingungen, Nutzungsbedingungen, MACA EULA, App Store Bedingungen, Endbenutzervereinbarung, MACA rechtliches',
    fr: 'MACA conditions utilisation, accord licence, licence logiciel, conditions app macOS, conditions utilisation, MACA CLUF, conditions App Store, accord utilisateur final, MACA légal',
    es: 'MACA términos uso, acuerdo licencia, licencia software, términos app macOS, condiciones uso, MACA EULA, términos App Store, acuerdo usuario final, MACA legal',
    it: 'MACA termini utilizzo, accordo licenza, licenza software, termini app macOS, condizioni utilizzo, MACA EULA, termini App Store, accordo utente finale, MACA legale',
    ja: 'MACA 利用規約, ライセンス契約, ソフトウェアライセンス, macOS アプリ 規約, 利用条件, MACA EULA, App Store 規約, エンドユーザー契約, MACA 法的情報',
    'zh-Hans': 'MACA 使用条款, 许可协议, 软件许可, macOS 应用 条款, 使用条件, MACA EULA, App Store 条款, 最终用户协议, MACA 法律',
    'zh-Hant': 'MACA 使用條款, 許可協議, 軟體許可, macOS 應用 條款, 使用條件, MACA EULA, App Store 條款, 最終用戶協議, MACA 法律',
    ar: 'MACA شروط الاستخدام, اتفاقية الترخيص, ترخيص البرنامج, شروط تطبيق macOS, شروط الاستخدام, MACA EULA, شروط App Store, اتفاقية المستخدم النهائي, MACA قانوني',
    ru: 'MACA условия использования, лицензионное соглашение, лицензия на ПО, условия приложения macOS, условия использования, MACA EULA, условия App Store, пользовательское соглашение, MACA юридическая информация',
    nl: 'MACA gebruiksvoorwaarden, licentieovereenkomst, softwarelicentie, macOS app voorwaarden, gebruiksvoorwaarden, MACA EULA, App Store voorwaarden, eindgebruikersovereenkomst, MACA juridisch',
    tr: 'MACA kullanım şartları, lisans sözleşmesi, yazılım lisansı, macOS uygulama şartları, kullanım koşulları, MACA EULA, App Store şartları, son kullanıcı sözleşmesi, MACA yasal',
    sv: 'MACA användarvillkor, licensavtal, programvarulicens, macOS app villkor, användningsvillkor, MACA EULA, App Store villkor, slutanvändaravtal, MACA juridiskt',
    da: 'MACA brugsvilkår, licensaftale, softwarelicens, macOS app vilkår, brugsvilkår, MACA EULA, App Store vilkår, slutbrugeraftale, MACA juridisk',
    ko: 'MACA 이용약관, 라이선스 계약, 소프트웨어 라이선스, macOS 앱 약관, 이용 조건, MACA EULA, App Store 약관, 최종 사용자 계약, MACA 법적',
    nb: 'MACA bruksvilkår, lisensavtale, programvarelisens, macOS app vilkår, bruksvilkår, MACA EULA, App Store vilkår, sluttbrukeravtale, MACA juridisk',
  },
  imprint: {
    en: 'MACA imprint, legal notice, contact information, developer info, app publisher, MACA contact, macOS app developer, company information',
    de: 'MACA Impressum, rechtliche Hinweise, Kontaktinformationen, Entwickler Info, App Herausgeber, MACA Kontakt, macOS App Entwickler, Firmenangaben',
    fr: 'MACA mentions légales, avis juridique, informations contact, info développeur, éditeur app, MACA contact, développeur app macOS, informations entreprise',
    es: 'MACA aviso legal, información legal, información contacto, info desarrollador, editor app, MACA contacto, desarrollador app macOS, información empresa',
    it: 'MACA note legali, avviso legale, informazioni contatto, info sviluppatore, editore app, MACA contatto, sviluppatore app macOS, informazioni azienda',
    ja: 'MACA 法的情報, 法的通知, 連絡先情報, 開発者情報, アプリ発行者, MACA 連絡先, macOS アプリ開発者, 会社情報',
    'zh-Hans': 'MACA 法律信息, 法律声明, 联系信息, 开发者信息, 应用发布者, MACA 联系方式, macOS 应用开发者, 公司信息',
    'zh-Hant': 'MACA 法律信息, 法律聲明, 聯繫信息, 開發者信息, 應用發布者, MACA 聯繫方式, macOS 應用開發者, 公司信息',
    ar: 'MACA البيان القانوني, إشعار قانوني, معلومات الاتصال, معلومات المطور, ناشر التطبيق, MACA اتصال, مطور تطبيق macOS, معلومات الشركة',
    ru: 'MACA правовая информация, юридическое уведомление, контактная информация, информация о разработчике, издатель приложения, MACA контакты, разработчик приложения macOS, информация о компании',
    nl: 'MACA impressum, juridische kennisgeving, contactinformatie, ontwikkelaar info, app uitgever, MACA contact, macOS app ontwikkelaar, bedrijfsinformatie',
    tr: 'MACA yasal bildirim, yasal uyarı, iletişim bilgileri, geliştirici bilgisi, uygulama yayıncısı, MACA iletişim, macOS uygulama geliştirici, şirket bilgileri',
    sv: 'MACA impressum, juridiskt meddelande, kontaktinformation, utvecklarinfo, app utgivare, MACA kontakt, macOS app utvecklare, företagsinformation',
    da: 'MACA impressum, juridisk meddelelse, kontaktinformation, udviklerinfo, app udgiver, MACA kontakt, macOS app udvikler, virksomhedsinfo',
    ko: 'MACA 법적 정보, 법적 고지, 연락처 정보, 개발자 정보, 앱 게시자, MACA 연락처, macOS 앱 개발자, 회사 정보',
    nb: 'MACA impressum, juridisk merknad, kontaktinformasjon, utviklerinfo, app utgiver, MACA kontakt, macOS app utvikler, firmainfo',
  },
  feedback: {
    en: 'MACA feedback, bug report, feature request, app suggestions, MACA support, user feedback macOS, audio app feedback, MACA improvement',
    de: 'MACA Feedback, Fehlerbericht, Funktionswunsch, App Vorschläge, MACA Support, Benutzer Feedback macOS, Audio App Feedback, MACA Verbesserung',
    fr: 'MACA retour, rapport bug, demande fonctionnalité, suggestions app, MACA support, retour utilisateur macOS, retour app audio, MACA amélioration',
    es: 'MACA feedback, reporte error, solicitud función, sugerencias app, MACA soporte, feedback usuario macOS, feedback app audio, MACA mejora',
    it: 'MACA feedback, segnalazione bug, richiesta funzionalità, suggerimenti app, MACA supporto, feedback utente macOS, feedback app audio, MACA miglioramento',
    ja: 'MACA フィードバック, バグ報告, 機能リクエスト, アプリ提案, MACA サポート, ユーザーフィードバック macOS, オーディオアプリ フィードバック, MACA 改善',
    'zh-Hans': 'MACA 反馈, 错误报告, 功能请求, 应用建议, MACA 支持, 用户反馈 macOS, 音频应用 反馈, MACA 改进',
    'zh-Hant': 'MACA 回饋, 錯誤報告, 功能請求, 應用建議, MACA 支援, 用戶回饋 macOS, 音頻應用 回饋, MACA 改進',
    ar: 'MACA ملاحظات, تقرير خطأ, طلب ميزة, اقتراحات التطبيق, MACA دعم, ملاحظات المستخدم macOS, ملاحظات تطبيق صوت, MACA تحسين',
    ru: 'MACA отзыв, отчёт об ошибке, запрос функции, предложения по приложению, MACA поддержка, отзыв пользователя macOS, отзыв аудио приложение, MACA улучшение',
    nl: 'MACA feedback, bugrapport, functieverzoek, app suggesties, MACA ondersteuning, gebruikersfeedback macOS, audio app feedback, MACA verbetering',
    tr: 'MACA geri bildirim, hata raporu, özellik isteği, uygulama önerileri, MACA destek, kullanıcı geri bildirimi macOS, ses uygulaması geri bildirim, MACA iyileştirme',
    sv: 'MACA feedback, buggrapport, funktionsönskemål, app förslag, MACA support, användarfeedback macOS, ljudapp feedback, MACA förbättring',
    da: 'MACA feedback, fejlrapport, funktionsønske, app forslag, MACA support, brugerfeedback macOS, lyd app feedback, MACA forbedring',
    ko: 'MACA 피드백, 버그 보고, 기능 요청, 앱 제안, MACA 지원, 사용자 피드백 macOS, 오디오 앱 피드백, MACA 개선',
    nb: 'MACA tilbakemelding, feilrapport, funksjonsønske, app forslag, MACA support, brukertilbakemelding macOS, lydapp tilbakemelding, MACA forbedring',
  },
};

// ---------------------------------------------------------------------------
// og:locale mapping
// ---------------------------------------------------------------------------
const ogLocales: Record<Language, string> = {
  en: 'en_US',
  de: 'de_DE',
  fr: 'fr_FR',
  es: 'es_ES',
  it: 'it_IT',
  ja: 'ja_JP',
  'zh-Hans': 'zh_CN',
  'zh-Hant': 'zh_TW',
  ar: 'ar_SA',
  ru: 'ru_RU',
  nl: 'nl_NL',
  tr: 'tr_TR',
  sv: 'sv_SE',
  da: 'da_DK',
  ko: 'ko_KR',
  nb: 'nb_NO',
};

// ---------------------------------------------------------------------------
// FAQ data for FAQPage JSON-LD schema (home page – all 16 languages)
// ---------------------------------------------------------------------------
const homeFAQ: Record<Language, Array<{ question: string; answer: string }>> = {
  en: [
    { question: 'What is MACA?', answer: 'MACA (Master Audio Control App) is a macOS application that gives you individual volume control for every app running on your Mac — no more jumping between apps to adjust audio levels.' },
    { question: 'How is MACA different from macOS volume control?', answer: 'macOS only controls the overall system volume. MACA lets you control each application individually, mute specific apps, create audio profiles, use a 10-band equalizer, and much more.' },
    { question: 'Is MACA free?', answer: 'MACA offers a free version with core features. The Pro version unlocks audio profiles, an enhanced equalizer, Focus Mode, and more — available as a one-time purchase with no subscription.' },
    { question: 'Does MACA collect my data?', answer: 'No. MACA processes everything locally on your Mac. We do not collect, store, or transmit any personal data. Privacy is a core principle of the app.' },
    { question: 'Which macOS versions does MACA support?', answer: 'MACA requires macOS 15 (Sequoia) or newer and is optimised for Apple Silicon (M1 / M2 / M3 / M4).' },
    { question: 'Can I mute all apps at once?', answer: 'Yes. MACA\'s Total Silence Mode mutes all applications instantly with one click. Focus Mode keeps only your chosen communication apps (e.g. Zoom, Teams, Discord) unmuted.' },
  ],
  de: [
    { question: 'Was ist MACA?', answer: 'MACA (Master Audio Control App) ist eine macOS-Anwendung, mit der Sie die Lautstärke für jede App einzeln steuern können – kein Hin- und Herwechseln zwischen Apps mehr.' },
    { question: 'Wie unterscheidet sich MACA von der macOS-Lautstärkeregelung?', answer: 'macOS steuert nur die Gesamtlautstärke. MACA ermöglicht individuelle Lautstärke pro App, Stummschaltung einzelner Apps, Audio-Profile, einen 10-Band-Equalizer und vieles mehr.' },
    { question: 'Ist MACA kostenlos?', answer: 'MACA bietet eine kostenlose Version mit Kernfunktionen. Die Pro-Version schaltet Audio-Profile, einen erweiterten Equalizer, Fokus-Modus und mehr frei – als Einmalkauf ohne Abo.' },
    { question: 'Sammelt MACA meine Daten?', answer: 'Nein. MACA verarbeitet alles lokal auf Ihrem Mac. Wir erheben, speichern oder übertragen keine persönlichen Daten. Datenschutz ist ein Kernprinzip der App.' },
    { question: 'Welche macOS-Versionen unterstützt MACA?', answer: 'MACA erfordert macOS 15 (Sequoia) oder neuer und ist für Apple Silicon (M1 / M2 / M3 / M4) optimiert.' },
    { question: 'Kann ich alle Apps auf einmal stummschalten?', answer: 'Ja. Der Total-Silence-Modus von MACA schaltet alle Apps sofort mit einem Klick stumm. Der Fokus-Modus lässt nur ausgewählte Kommunikations-Apps (z. B. Zoom, Teams, Discord) aktiv.' },
  ],
  fr: [
    { question: 'Qu\'est-ce que MACA ?', answer: 'MACA (Master Audio Control App) est une application macOS qui vous donne un contrôle individuel du volume pour chaque application – plus besoin de jongler entre les apps.' },
    { question: 'En quoi MACA diffère du contrôle du volume macOS ?', answer: 'macOS ne contrôle que le volume global. MACA permet de contrôler chaque application individuellement, de couper le son d\'apps spécifiques, de créer des profils audio, d\'utiliser un égaliseur 10 bandes et bien plus.' },
    { question: 'MACA est-il gratuit ?', answer: 'MACA offre une version gratuite avec les fonctions essentielles. La version Pro débloque les profils audio, un égaliseur amélioré, le Mode Focus et plus – achat unique, sans abonnement.' },
    { question: 'MACA collecte-t-il mes données ?', answer: 'Non. MACA traite tout localement sur votre Mac. Nous ne collectons, ne stockons ni ne transmettons aucune donnée personnelle.' },
    { question: 'Quelles versions de macOS MACA prend-il en charge ?', answer: 'MACA nécessite macOS 15 (Sequoia) ou plus récent et est optimisé pour Apple Silicon (M1 / M2 / M3 / M4).' },
    { question: 'Puis-je couper le son de toutes les apps en une fois ?', answer: 'Oui. Le mode Silence Total de MACA coupe instantanément toutes les applications. Le Mode Focus garde uniquement vos apps de communication choisies (ex. Zoom, Teams, Discord) actives.' },
  ],
  es: [
    { question: '¿Qué es MACA?', answer: 'MACA (Master Audio Control App) es una aplicación para macOS que te permite controlar el volumen de cada app individualmente – sin tener que cambiar entre apps.' },
    { question: '¿En qué se diferencia MACA del control de volumen de macOS?', answer: 'macOS solo controla el volumen general. MACA permite controlar cada app individualmente, silenciar apps específicas, crear perfiles de audio, usar un ecualizador de 10 bandas y mucho más.' },
    { question: '¿MACA es gratuito?', answer: 'MACA ofrece una versión gratuita con funciones básicas. La versión Pro desbloquea perfiles de audio, ecualizador mejorado, Modo Enfoque y más – compra única, sin suscripción.' },
    { question: '¿MACA recopila mis datos?', answer: 'No. MACA procesa todo localmente en tu Mac. No recopilamos, almacenamos ni transmitimos datos personales.' },
    { question: '¿Qué versiones de macOS soporta MACA?', answer: 'MACA requiere macOS 15 (Sequoia) o posterior y está optimizado para Apple Silicon (M1 / M2 / M3 / M4).' },
    { question: '¿Puedo silenciar todas las apps a la vez?', answer: 'Sí. El modo Silencio Total de MACA silencia todas las apps instantáneamente. El Modo Enfoque mantiene solo tus apps de comunicación elegidas (ej. Zoom, Teams, Discord) activas.' },
  ],
  it: [
    { question: 'Cos\'è MACA?', answer: 'MACA (Master Audio Control App) è un\'applicazione macOS che offre il controllo individuale del volume per ogni app – senza dover passare da un\'app all\'altra.' },
    { question: 'In cosa MACA si differenzia dal controllo volume di macOS?', answer: 'macOS controlla solo il volume generale. MACA permette di controllare ogni app individualmente, silenziare app specifiche, creare profili audio, usare un equalizzatore a 10 bande e molto altro.' },
    { question: 'MACA è gratuito?', answer: 'MACA offre una versione gratuita con funzioni essenziali. La versione Pro sblocca profili audio, equalizzatore avanzato, Modalità Focus e altro – acquisto unico, senza abbonamento.' },
    { question: 'MACA raccoglie i miei dati?', answer: 'No. MACA elabora tutto localmente sul tuo Mac. Non raccogliamo, memorizziamo né trasmettiamo dati personali.' },
    { question: 'Quali versioni di macOS supporta MACA?', answer: 'MACA richiede macOS 15 (Sequoia) o successivo ed è ottimizzato per Apple Silicon (M1 / M2 / M3 / M4).' },
    { question: 'Posso silenziare tutte le app contemporaneamente?', answer: 'Sì. La modalità Silenzio Totale di MACA silenzia tutte le app istantaneamente. La Modalità Focus mantiene attive solo le app di comunicazione scelte (es. Zoom, Teams, Discord).' },
  ],
  ja: [
    { question: 'MACAとは何ですか？', answer: 'MACA（Master Audio Control App）は、Macで実行中のすべてのアプリの音量を個別に制御できるmacOSアプリケーションです。' },
    { question: 'MACAはmacOSの音量コントロールとどう違いますか？', answer: 'macOSはシステム全体の音量のみを制御します。MACAはアプリごとの個別制御、特定アプリのミュート、オーディオプロファイル、10バンドEQなど多くの機能を提供します。' },
    { question: 'MACAは無料ですか？', answer: 'MACAは基本機能を備えた無料版を提供しています。Pro版はオーディオプロファイル、強化EQ、フォーカスモードなどを解放します – サブスクリプションなしの買い切りです。' },
    { question: 'MACAはデータを収集しますか？', answer: 'いいえ。MACAはすべてMac上でローカル処理します。個人データの収集、保存、送信は一切行いません。' },
    { question: 'MACAはどのmacOSバージョンに対応していますか？', answer: 'MACAはmacOS 15（Sequoia）以降が必要で、Apple Silicon（M1 / M2 / M3 / M4）に最適化されています。' },
    { question: 'すべてのアプリを一度にミュートできますか？', answer: 'はい。MACAのトータルサイレンスモードはワンクリックで全アプリを即座にミュートします。フォーカスモードは選択した通信アプリ（Zoom、Teams、Discord等）のみをアクティブに保ちます。' },
  ],
  'zh-Hans': [
    { question: '什么是MACA？', answer: 'MACA（Master Audio Control App）是一款macOS应用程序，可以为Mac��运行的每个应用提供独立的音量控制。' },
    { question: 'MACA与macOS音量控制有什么不同？', answer: 'macOS只控制整体系统音量。MACA允许您单独控制每个应用、静音特定应用、创建音频配置文件、使用10段均衡器等。' },
    { question: 'MACA免费吗？', answer: 'MACA提供具有核心功能的免费版本。Pro版解锁音频配置文件、增强均衡器、专注模式等——一次性购买，无需订阅。' },
    { question: 'MACA会收集我的数据吗？', answer: '不会。MACA在您的Mac上本地处理一切。我们不收集、存储或传输任何个人数据。' },
    { question: 'MACA支持哪些macOS版本？', answer: 'MACA需要macOS 15（Sequoia）或更新版本，并针对Apple Silicon（M1/M2/M3/M4）进行了优化。' },
    { question: '我可以一次静音所有应用吗？', answer: '可以。MACA的完全静音模式一键即可静音所有应用。专注模式仅保留您选择的通信应用（如Zoom、Teams、Discord）。' },
  ],
  'zh-Hant': [
    { question: '什麼是MACA？', answer: 'MACA（Master Audio Control App）是一款macOS應用程式，可以為Mac上執行的每個應用提供獨立的音量控制。' },
    { question: 'MACA與macOS音量控制有什麼不同？', answer: 'macOS只控制整體系統音量。MACA允許您單獨控制每個應用、靜音特定應用、建立音訊設定檔、使用10段均衡器等。' },
    { question: 'MACA免費嗎？', answer: 'MACA提供具有核心功能的免費版本。Pro版解鎖音訊設定檔、增強均衡器、專注模式等——一次性購買，無需訂閱。' },
    { question: 'MACA會收集我的資料嗎？', answer: '不會。MACA在您的Mac上本地處理一切。我們不收集、儲存或傳輸任何個人資料。' },
    { question: 'MACA支援哪些macOS版本？', answer: 'MACA需要macOS 15（Sequoia）或更新版本，並針對Apple Silicon（M1/M2/M3/M4）進行了最佳化。' },
    { question: '我可以一次靜音所有應用嗎？', answer: '可以。MACA的完全靜音模式一鍵即可靜音所有應用。專注模式僅保留您選擇的通訊應用（如Zoom、Teams、Discord）。' },
  ],
  ar: [
    { question: 'ما هو MACA؟', answer: 'MACA (Master Audio Control App) هو تطبيق macOS يمنحك تحكمًا فرديًا في مستوى الصوت لكل تطبيق يعمل على جهاز Mac الخاص بك.' },
    { question: 'كيف يختلف MACA عن التحكم في صوت macOS؟', answer: 'macOS يتحكم فقط في مستوى صوت النظام الإجمالي. MACA يتيح لك التحكم في كل تطبيق على حدة وكتم تطبيقات محددة وإنشاء ملفات صوتية واستخدام معادل 10 نطاقات والمزيد.' },
    { question: 'هل MACA مجاني؟', answer: 'يقدم MACA إصدارًا مجانيًا مع الميزات الأساسية. الإصدار Pro يفتح ملفات الصوت والمعادل المحسن ووضع التركيز – شراء لمرة واحدة بدون اشتراك.' },
    { question: 'هل يجمع MACA بياناتي؟', answer: 'لا. يعالج MACA كل شيء محليًا على جهاز Mac. نحن لا نجمع أو نخزن أو ننقل أي بيانات شخصية.' },
    { question: 'ما إصدارات macOS التي يدعمها MACA؟', answer: 'يتطلب MACA نظام macOS 15 (Sequoia) أو أحدث وهو محسّن لـ Apple Silicon (M1/M2/M3/M4).' },
    { question: 'هل يمكنني كتم جميع التطبيقات مرة واحدة؟', answer: 'نعم. وضع الصمت الكامل في MACA يكتم جميع التطبيقات فورًا بنقرة واحدة. وضع التركيز يبقي فقط تطبيقات الاتصال المختارة نشطة.' },
  ],
  ru: [
    { question: 'Что такое MACA?', answer: 'MACA (Master Audio Control App) — это приложение для macOS, которое даёт индивидуальное управление громкостью каждого приложения на вашем Mac.' },
    { question: 'Чем MACA отличается от управления громкостью macOS?', answer: 'macOS управляет только общей громкостью системы. MACA позволяет управлять каждым приложением индивидуально, отключать звук, создавать аудиопрофили, использовать 10-полосный эквалайзер и многое другое.' },
    { question: 'MACA бесплатен?', answer: 'MACA предлагает бесплатную версию с основными функциями. Pro-версия открывает аудиопрофили, улучшенный эквалайзер, режим фокусировки – разовая покупка без подписки.' },
    { question: 'Собирает ли MACA мои данные?', answer: 'Нет. MACA обрабатывает всё локально на вашем Mac. Мы не собираем, не храним и не передаём персональных данных.' },
    { question: 'Какие версии macOS поддерживает MACA?', answer: 'MACA требует macOS 15 (Sequoia) или новее и оптимизирован для Apple Silicon (M1/M2/M3/M4).' },
    { question: 'Могу ли я отключить звук всех приложений сразу?', answer: 'Да. Режим полной тишины MACA мгновенно отключает все приложения одним кликом. Режим фокусировки оставляет активными только выбранные приложения для связи (Zoom, Teams, Discord).' },
  ],
  nl: [
    { question: 'Wat is MACA?', answer: 'MACA (Master Audio Control App) is een macOS-applicatie waarmee je het volume van elke app afzonderlijk kunt regelen – geen heen-en-weer schakelen meer.' },
    { question: 'Hoe verschilt MACA van de macOS-volumeregeling?', answer: 'macOS regelt alleen het totale systeemvolume. MACA laat je elke app individueel regelen, specifieke apps dempen, audioprofielen aanmaken, een 10-bands equalizer gebruiken en veel meer.' },
    { question: 'Is MACA gratis?', answer: 'MACA biedt een gratis versie met kernfuncties. De Pro-versie ontgrendelt audioprofielen, een verbeterde equalizer, Focusmodus en meer – eenmalige aankoop zonder abonnement.' },
    { question: 'Verzamelt MACA mijn gegevens?', answer: 'Nee. MACA verwerkt alles lokaal op je Mac. Wij verzamelen, bewaren of verzenden geen persoonlijke gegevens.' },
    { question: 'Welke macOS-versies ondersteunt MACA?', answer: 'MACA vereist macOS 15 (Sequoia) of nieuwer en is geoptimaliseerd voor Apple Silicon (M1/M2/M3/M4).' },
    { question: 'Kan ik alle apps tegelijk dempen?', answer: 'Ja. De Total Silence Mode van MACA dempt alle apps direct met één klik. Focusmodus houdt alleen je gekozen communicatie-apps (bijv. Zoom, Teams, Discord) actief.' },
  ],
  tr: [
    { question: 'MACA nedir?', answer: 'MACA (Master Audio Control App), Mac\'inizde çalışan her uygulama için bireysel ses kontrolü sağlayan bir macOS uygulamasıdır.' },
    { question: 'MACA, macOS ses kontrolünden nasıl farklıdır?', answer: 'macOS yalnızca genel sistem sesini kontrol eder. MACA her uygulamayı bireysel olarak kontrol etmenizi, belirli uygulamaları sessize almanızı, ses profilleri oluşturmanızı ve 10 bantlı ekolayzır kullanmanızı sağlar.' },
    { question: 'MACA ücretsiz mi?', answer: 'MACA temel özelliklerle ücretsiz bir sürüm sunar. Pro sürümü ses profilleri, gelişmiş ekolayzır, Odak Modu ve daha fazlasını açar – abonelik olmadan tek seferlik satın alma.' },
    { question: 'MACA verilerimi topluyor mu?', answer: 'Hayır. MACA her şeyi Mac\'inizde yerel olarak işler. Hiçbir kişisel veri toplamaz, saklamaz veya iletmeyiz.' },
    { question: 'MACA hangi macOS sürümlerini destekler?', answer: 'MACA, macOS 15 (Sequoia) veya daha yenisini gerektirir ve Apple Silicon (M1/M2/M3/M4) için optimize edilmiştir.' },
    { question: 'Tüm uygulamaları aynı anda sessize alabilir miyim?', answer: 'Evet. MACA\'nın Tamamen Sessiz Modu tüm uygulamaları tek tıkla anında sessize alır. Odak Modu yalnızca seçtiğiniz iletişim uygulamalarını aktif tutar.' },
  ],
  sv: [
    { question: 'Vad är MACA?', answer: 'MACA (Master Audio Control App) är en macOS-applikation som ger dig individuell volymkontroll för varje app som körs på din Mac.' },
    { question: 'Hur skiljer sig MACA från macOS volymkontroll?', answer: 'macOS kontrollerar bara den totala systemvolymen. MACA låter dig kontrollera varje app individuellt, stänga av ljudet för specifika appar, skapa ljudprofiler, använda en 10-bands equalizer och mycket mer.' },
    { question: 'Är MACA gratis?', answer: 'MACA erbjuder en gratisversion med grundfunktioner. Pro-versionen låser upp ljudprofiler, förbättrad equalizer, Fokusläge och mer – engångsköp utan prenumeration.' },
    { question: 'Samlar MACA in mina data?', answer: 'Nej. MACA bearbetar allt lokalt på din Mac. Vi samlar inte in, lagrar eller överför några personuppgifter.' },
    { question: 'Vilka macOS-versioner stöder MACA?', answer: 'MACA kräver macOS 15 (Sequoia) eller nyare och är optimerad för Apple Silicon (M1/M2/M3/M4).' },
    { question: 'Kan jag stänga av alla appar samtidigt?', answer: 'Ja. MACAs Total Silence Mode stänger av alla appar direkt med ett klick. Fokusläge håller bara dina valda kommunikationsappar aktiva.' },
  ],
  da: [
    { question: 'Hvad er MACA?', answer: 'MACA (Master Audio Control App) er en macOS-applikation, der giver dig individuel lydstyrke-kontrol for hver app på din Mac.' },
    { question: 'Hvordan adskiller MACA sig fra macOS lydstyrke-kontrol?', answer: 'macOS styrer kun den samlede systemlydstyrke. MACA lader dig styre hver app individuelt, slå lyden fra for specifikke apps, oprette lydprofiler, bruge en 10-bands equalizer og mere.' },
    { question: 'Er MACA gratis?', answer: 'MACA tilbyder en gratis version med kernefunktioner. Pro-versionen låser op for lydprofiler, forbedret equalizer, Fokusmodus og mere – engangskøb uden abonnement.' },
    { question: 'Indsamler MACA mine data?', answer: 'Nej. MACA behandler alt lokalt på din Mac. Vi indsamler, gemmer eller overfører ingen personlige data.' },
    { question: 'Hvilke macOS-versioner understøtter MACA?', answer: 'MACA kræver macOS 15 (Sequoia) eller nyere og er optimeret til Apple Silicon (M1/M2/M3/M4).' },
    { question: 'Kan jeg slå lyden fra for alle apps på en gang?', answer: 'Ja. MACAs Total Silence Mode slår lyden fra for alle apps med ét klik. Fokusmodus holder kun dine valgte kommunikations-apps aktive.' },
  ],
  ko: [
    { question: 'MACA란 무엇인가요?', answer: 'MACA(Master Audio Control App)는 Mac에서 실행 중인 모든 앱의 볼륨을 개별적으로 제어할 수 있는 macOS 앱입니다.' },
    { question: 'MACA는 macOS 볼륨 컨트롤과 어떻게 다른가요?', answer: 'macOS는 전체 시스템 볼륨만 제어합니다. MACA는 각 앱을 개별 제어하고, 특정 앱 음소거, 오디오 프로필 생성, 10대 이퀄라이저 사용 등 훨씬 많은 기능을 제공합니다.' },
    { question: 'MACA는 무료인가요?', answer: 'MACA는 핵심 기능이 포함된 무료 버전을 제공합니다. Pro 버전은 오디오 프로필, 향상된 이퀄라이저, 포커스 모드 등을 잠금 해제합니다 – 구독 없이 일회 구매.' },
    { question: 'MACA는 제 데이터를 수집하나요?', answer: '아니요. MACA는 모든 것을 Mac에서 로컬로 처리합니다. 개인 데이터를 수집, 저장 또는 전송하지 않습니다.' },
    { question: 'MACA는 ���떤 macOS 버전을 지원하나요?', answer: 'MACA는 macOS 15(Sequoia) 이상이 필요하며 Apple Silicon(M1/M2/M3/M4)에 최적화되어 있습니다.' },
    { question: '모든 앱을 한 번에 음소거할 수 있나요?', answer: '네. MACA의 완전 무음 모드는 한 번의 클릭으로 모든 앱을 즉시 음소거합니다. 포커스 모드는 선택한 통신 앱(Zoom, Teams, Discord 등)만 활성 상태로 유지합니다.' },
  ],
  nb: [
    { question: 'Hva er MACA?', answer: 'MACA (Master Audio Control App) er en macOS-applikasjon som gir deg individuell volumkontroll for hver app på din Mac.' },
    { question: 'Hvordan skiller MACA seg fra macOS volumkontroll?', answer: 'macOS kontrollerer bare det totale systemvolumet. MACA lar deg kontrollere hver app individuelt, dempe spesifikke apper, opprette lydprofiler, bruke en 10-bands equalizer og mye mer.' },
    { question: 'Er MACA gratis?', answer: 'MACA tilbyr en gratis versjon med kjernefunksjoner. Pro-versjonen låser opp lydprofiler, forbedret equalizer, Fokusmodus og mer – engangskjøp uten abonnement.' },
    { question: 'Samler MACA inn dataene mine?', answer: 'Nei. MACA behandler alt lokalt på din Mac. Vi samler ikke inn, lagrer eller overfører noen personlige data.' },
    { question: 'Hvilke macOS-versjoner støtter MACA?', answer: 'MACA krever macOS 15 (Sequoia) eller nyere og er optimalisert for Apple Silicon (M1/M2/M3/M4).' },
    { question: 'Kan jeg dempe alle apper samtidig?', answer: 'Ja. MACAs Total Silence Mode demper alle apper umiddelbart med ett klikk. Fokusmodus holder bare dine valgte kommunikasjonsapper aktive.' },
  ],
};

// ---------------------------------------------------------------------------
// Utility: set or create a <meta> element
// ---------------------------------------------------------------------------
function setMeta(
  selector: string,
  attrKey: string,
  attrValue: string,
  content: string
) {
  let el = document.querySelector(selector) as HTMLMetaElement | null;
  if (!el) {
    el = document.createElement('meta');
    el.setAttribute(attrKey, attrValue);
    document.head.appendChild(el);
  }
  el.content = content;
}

// ---------------------------------------------------------------------------
// Main component
// ---------------------------------------------------------------------------
export function DocumentHead() {
  const { lang } = useParams<{ lang: string }>();
  const location = useLocation();
  const currentLang = (lang || 'en') as Language;

  useEffect(() => {
    // ── Determine current page ────────────────────────────────────────────
    const currentPath = location.pathname;
    const pathParts = currentPath.split('/').filter(Boolean);
    const pageName = pathParts.length > 1 ? pathParts[pathParts.length - 1] : 'home';
    const pageKey = ['faq', 'privacy', 'terms', 'imprint', 'feedback', 'guide', 'troubleshooting'].includes(pageName)
      ? pageName
      : 'home';
    const isHome = pageKey === 'home';

    // ── <title> ───────────────────────────────────────────────────────────
    const titleMap = pageTitles[pageKey];
    document.title = titleMap
      ? titleMap[currentLang] || titleMap.en
      : 'MACA – Master Audio Control';

    // ── <html lang=""> ────────────────────────────────────────────────────
    document.documentElement.lang = currentLang;

    // ── charset ──────────────────────────────────────────────────────────
    if (!document.querySelector('meta[charset]')) {
      const charset = document.createElement('meta');
      charset.setAttribute('charset', 'UTF-8');
      document.head.insertBefore(charset, document.head.firstChild);
    }

    // ─ viewport ─────────────────────────────────────────────────────────
    setMeta('meta[name="viewport"]', 'name', 'viewport',
      'width=device-width, initial-scale=1.0, maximum-scale=5.0');

    // ── robots ───────────────────────────────────────────────────────────
    const robotsContent = pageKey === 'feedback'
      ? 'noindex, nofollow'
      : 'index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1';
    setMeta('meta[name="robots"]', 'name', 'robots', robotsContent);

    // ── description ───────────────────────────────────────────────────────
    setMeta('meta[name="description"]', 'name', 'description', metaDescriptions[pageKey][currentLang]);

    // ── keywords (page-specific) ───────────────────────────────────────
    const kwMap = pageKeywords[pageKey] || pageKeywords.home;
    setMeta('meta[name="keywords"]', 'name', 'keywords', kwMap[currentLang] || kwMap.en);

    // ── application-name ─────────────────────────────────────────────────
    setMeta('meta[name="application-name"]', 'name', 'application-name', 'MACA');

    // ── Apple Smart App Banner ────────────────────────────────────────────
    setMeta('meta[name="apple-itunes-app"]', 'name', 'apple-itunes-app',
      `app-id=${APP_STORE_ID}`);

    // ── theme-color ───────────────────────────────────────────────────────
    const isDark = document.documentElement.classList.contains('dark');
    setMeta('meta[name="theme-color"]', 'name', 'theme-color', isDark ? '#0f172a' : '#ffffff');

    // ── Canonical URL ─────────────────────────────────────────────────────
    let canonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.rel = 'canonical';
      document.head.appendChild(canonical);
    }
    canonical.href = `${BASE_URL}${currentPath}`;

    // ── Hreflang ──────────────────────────────────────────────────────────
    const languages: Language[] = ['en', 'de', 'fr', 'es', 'it', 'ja', 'zh-Hans', 'zh-Hant', 'ar', 'ru', 'nl', 'tr', 'sv', 'da', 'ko', 'nb'];
    const pathWithoutLang = currentPath.replace(/^\/(en|de|fr|es|it|ja|zh-Hans|zh-Hant|ar|ru|nl|tr|sv|da|ko|nb)/, '');
    document.querySelectorAll('link[rel="alternate"][hreflang]').forEach(el => el.remove());
    languages.forEach(language => {
      const link = document.createElement('link');
      link.rel = 'alternate';
      link.hreflang = language;
      link.href = `${BASE_URL}/${language}${pathWithoutLang}`;
      document.head.appendChild(link);
    });
    const xDefault = document.createElement('link');
    xDefault.rel = 'alternate';
    xDefault.hreflang = 'x-default';
    xDefault.href = `${BASE_URL}/en${pathWithoutLang}`;
    document.head.appendChild(xDefault);

    // ── Favicon & Apple Touch Icon ────────────────────────────────────────
    let favIcon = document.querySelector("link[rel~='icon']") as HTMLLinkElement | null;
    if (!favIcon) {
      favIcon = document.createElement('link');
      favIcon.rel = 'icon';
      document.head.appendChild(favIcon);
    }
    favIcon.href = macaAppLogo;

    let ati = document.querySelector("link[rel='apple-touch-icon']") as HTMLLinkElement | null;
    if (!ati) {
      ati = document.createElement('link');
      ati.rel = 'apple-touch-icon';
      document.head.appendChild(ati);
    }
    ati.href = macaAppLogo;

    // ── Web App Manifest ──────────────────────────────────────────────────
    let manifest = document.querySelector('link[rel="manifest"]') as HTMLLinkElement | null;
    if (!manifest) {
      manifest = document.createElement('link');
      manifest.rel = 'manifest';
      manifest.href = '/manifest.json';
      document.head.appendChild(manifest);
    }

    // ── Sitemap discovery ─────────────────────────────────────────────────
    let sitemapLink = document.querySelector('link[rel="sitemap"]') as HTMLLinkElement | null;
    if (!sitemapLink) {
      sitemapLink = document.createElement('link');
      sitemapLink.rel = 'sitemap';
      sitemapLink.type = 'application/xml';
      sitemapLink.title = 'Sitemap';
      sitemapLink.href = `${BASE_URL}/sitemap.xml`;
      document.head.appendChild(sitemapLink);
    }

    // ── Content Security Policy (meta fallback) ───────────────────────────
    if (!document.querySelector('meta[http-equiv="Content-Security-Policy"]')) {
      const csp = document.createElement('meta');
      csp.httpEquiv = 'Content-Security-Policy';
      csp.content = "default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval'; style-src 'self' 'unsafe-inline'; img-src 'self' data: blob: https://images.unsplash.com; font-src 'self'; connect-src 'self' https://apps.apple.com; frame-ancestors 'self' https://www.figma.com";
      document.head.appendChild(csp);
    }

    // ── X-UA-Compatible ───────────────────────────────────────────────────
    if (!document.querySelector('meta[http-equiv="X-UA-Compatible"]')) {
      const xua = document.createElement('meta');
      xua.httpEquiv = 'X-UA-Compatible';
      xua.content = 'IE=edge';
      document.head.appendChild(xua);
    }

    // ── Open Graph ────────────────────────────────────────────────────────
    const ogTitle = titleMap ? (titleMap[currentLang] || titleMap.en) : 'MACA – Master Audio Control';
    const ogTags: Array<{ property?: string; name?: string; content: string }> = [
      { property: 'og:site_name', content: 'MACA – Master Audio Control' },
      { property: 'og:title', content: ogTitle },
      { property: 'og:description', content: metaDescriptions[pageKey][currentLang] },
      { property: 'og:image', content: `${BASE_URL}${macaAppLogo}` },
      { property: 'og:image:width', content: '1024' },
      { property: 'og:image:height', content: '1024' },
      { property: 'og:image:alt', content: 'MACA – Master Audio Control App Icon' },
      { property: 'og:url', content: `${BASE_URL}${currentPath}` },
      { property: 'og:type', content: 'website' },
      { property: 'og:locale', content: ogLocales[currentLang] || 'en_US' },
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:title', content: ogTitle },
      { name: 'twitter:description', content: metaDescriptions[pageKey][currentLang] },
      { name: 'twitter:image', content: `${BASE_URL}${macaAppLogo}` },
      { name: 'twitter:image:alt', content: 'MACA – Master Audio Control App Icon' },
    ];

    ogTags.forEach(tag => {
      const selector = tag.property
        ? `meta[property="${tag.property}"]`
        : `meta[name="${tag.name}"]`;
      let meta = document.querySelector(selector) as HTMLMetaElement | null;
      if (!meta) {
        meta = document.createElement('meta');
        if (tag.property) meta.setAttribute('property', tag.property);
        if (tag.name) meta.setAttribute('name', tag.name);
        document.head.appendChild(meta);
      }
      meta.content = tag.content;
    });

    // ── og:locale:alternate – advertise all other translations ────────────
    document.querySelectorAll('meta[property="og:locale:alternate"]').forEach(el => el.remove());
    languages.filter(l => l !== currentLang).forEach(altLang => {
      const altLocale = ogLocales[altLang];
      if (altLocale) {
        const meta = document.createElement('meta');
        meta.setAttribute('property', 'og:locale:alternate');
        meta.content = altLocale;
        document.head.appendChild(meta);
      }
    });

    // ── article meta tags for content pages ──────────────────────────────
    document.querySelectorAll('meta[property^="article:"]').forEach(el => el.remove());
    const contentPages = ['guide', 'faq', 'troubleshooting'];
    if (contentPages.includes(pageKey)) {
      // Override og:type to 'article' for content pages
      const ogTypeMeta = document.querySelector('meta[property="og:type"]') as HTMLMetaElement | null;
      if (ogTypeMeta) ogTypeMeta.content = 'article';
      const articleMeta: Array<{ property: string; content: string }> = [
        { property: 'article:author', content: BASE_URL },
        { property: 'article:published_time', content: '2024-12-01T00:00:00+00:00' },
        { property: 'article:modified_time', content: '2026-03-11T00:00:00+00:00' },
        { property: 'article:section', content: pageKey === 'guide' ? 'User Guide' : pageKey === 'faq' ? 'FAQ' : 'Troubleshooting' },
        { property: 'article:tag', content: 'MACA' },
        { property: 'article:tag', content: 'macOS' },
        { property: 'article:tag', content: 'audio control' },
      ];
      articleMeta.forEach(tag => {
        const meta = document.createElement('meta');
        meta.setAttribute('property', tag.property);
        meta.content = tag.content;
        document.head.appendChild(meta);
      });
    }

    // ── JSON-LD Structured Data ───────────────────────────────────────────
    document.querySelectorAll('script[type="application/ld+json"]').forEach(el => el.remove());

    // 1. SoftwareApplication schema
    const softwareApp = {
      '@context': 'https://schema.org',
      '@type': 'SoftwareApplication',
      '@id': `${BASE_URL}/#software`,
      name: 'MACA – Master Audio Control',
      alternateName: ['MACA', 'Master Audio Control App', 'MACA App'],
      applicationCategory: 'MultimediaApplication',
      applicationSubCategory: 'Audio Mixer',
      operatingSystem: 'macOS 15 (Sequoia) or later',
      processorRequirements: 'Apple Silicon (M1, M2, M3, M4) or Intel',
      memoryRequirements: '50 MB RAM',
      storageRequirements: '10 MB',
      releaseNotes: `${BASE_URL}/${currentLang}/history`,
      softwareVersion: '2.0',
      datePublished: '2024-12-01',
      inLanguage: languages,
      url: BASE_URL,
      downloadUrl: APP_STORE_URL,
      installUrl: APP_STORE_URL,
      screenshot: [
        `${BASE_URL}/screenshots/complete-audio-control.png`,
        `${BASE_URL}/screenshots/individual-app-control.png`,
        `${BASE_URL}/screenshots/equalizer.png`,
        `${BASE_URL}/screenshots/profiles.png`,
      ],
      featureList: [
        'Per-app volume control',
        'Individual app mute',
        '10-band equalizer with bass boost',
        'Audio profiles (Work, Gaming, Travel, custom)',
        'Focus Mode – mute all except selected apps',
        'Total Silence Mode – one-click all-mute',
        'Quick profile switching via menu bar',
        'Keyboard shortcuts',
        'Output device switching per app',
        'No data collection – 100% local processing',
        'No subscription – one-time purchase',
      ],
      offers: [
        {
          '@type': 'Offer',
          name: 'MACA Free',
          price: '0',
          priceCurrency: 'USD',
          availability: 'https://schema.org/InStock',
          url: APP_STORE_URL,
          description: 'Free version with core per-app volume control features',
        },
        {
          '@type': 'Offer',
          name: 'MACA Pro',
          price: '4.99',
          priceCurrency: 'USD',
          availability: 'https://schema.org/InStock',
          url: APP_STORE_URL,
          description: 'Pro upgrade – audio profiles, enhanced EQ, Focus Mode, and more',
        },
      ],
      // aggregateRating will be added once the app has real App Store ratings
      description: metaDescriptions.home['en'],
      image: `${BASE_URL}${macaAppLogo}`,
      author: {
        '@type': 'Organization',
        '@id': `${BASE_URL}/#organization`,
        name: 'AMX Mediensysteme',
        url: BASE_URL,
      },
      publisher: {
        '@type': 'Organization',
        '@id': `${BASE_URL}/#organization`,
        name: 'AMX Mediensysteme',
        url: BASE_URL,
      },
    };

    // 2. Organization schema
    const organization = {
      '@context': 'https://schema.org',
      '@type': 'Organization',
      '@id': `${BASE_URL}/#organization`,
      name: 'AMX Mediensysteme',
      url: BASE_URL,
      logo: {
        '@type': 'ImageObject',
        url: `${BASE_URL}${macaAppLogo}`,
        width: 1024,
        height: 1024,
      },
      sameAs: [APP_STORE_URL],
    };

    // 3. WebSite schema
    const webSite = {
      '@context': 'https://schema.org',
      '@type': 'WebSite',
      '@id': `${BASE_URL}/#website`,
      url: BASE_URL,
      name: 'MACA – Master Audio Control',
      alternateName: 'MACA',
      inLanguage: languages,
      publisher: { '@id': `${BASE_URL}/#organization` },
      potentialAction: {
        '@type': 'SearchAction',
        target: {
          '@type': 'EntryPoint',
          urlTemplate: `${BASE_URL}/${currentLang}/faq?q={search_term_string}`,
        },
        'query-input': 'required name=search_term_string',
      },
    };

    // 4. BreadcrumbList schema (all pages except home) – multilingual
    const breadcrumbNames: Record<string, Record<Language, string>> = {
        faq: {
          en: 'FAQ', de: 'Häufig gestellte Fragen', fr: 'Questions Fréquentes', es: 'Preguntas Frecuentes',
          it: 'Domande Frequenti', ja: 'よくある質問', 'zh-Hans': '常见问题', 'zh-Hant': '常見問題',
          ar: 'أسئلة شائعة', ru: 'Часто задаваемые вопросы', nl: 'Veelgestelde vragen', tr: 'Sık Sorulan Sorular',
          sv: 'Vanliga frågor', da: 'Ofte stillede spørgsmål', ko: '자주 묻는 질문', nb: 'Ofte stilte spørsmål',
        },
        privacy: {
          en: 'Privacy Policy', de: 'Datenschutz', fr: 'Politique de confidentialité', es: 'Política de privacidad',
          it: 'Privacy Policy', ja: 'プライバシーポリシー', 'zh-Hans': '隐私政策', 'zh-Hant': '隱私政策',
          ar: 'سياسة الخصوصية', ru: 'Политика конфиденциальности', nl: 'Privacybeleid', tr: 'Gizlilik Politikası',
          sv: 'Integritetspolicy', da: 'Privatlivspolitik', ko: '개인정보 보호정책', nb: 'Personvernpolicy',
        },
        terms: {
          en: 'Terms of Use', de: 'Nutzungsbedingungen', fr: "Conditions d'utilisation", es: 'Términos de uso',
          it: 'Termini di utilizzo', ja: '利用規約', 'zh-Hans': '使用条款', 'zh-Hant': '使用條款',
          ar: 'شروط الاستخدام', ru: 'Условия использования', nl: 'Gebruiksvoorwaarden', tr: 'Kullanım Şartları',
          sv: 'Användarvillkor', da: 'Brugsvilkår', ko: '이용약관', nb: 'Bruksvilkår',
        },
        imprint: {
          en: 'Imprint', de: 'Impressum', fr: 'Mentions légales', es: 'Aviso legal',
          it: 'Note legali', ja: '法的情報', 'zh-Hans': '法律信息', 'zh-Hant': '法律信息',
          ar: 'البيان القانوني', ru: 'Правовая информация', nl: 'Impressum', tr: 'Yasal Bildirim',
          sv: 'Impressum', da: 'Impressum', ko: '법적 정보', nb: 'Impressum',
        },
        feedback: {
          en: 'Feedback', de: 'Feedback', fr: 'Retour', es: 'Feedback',
          it: 'Feedback', ja: 'フィードバック', 'zh-Hans': '反馈', 'zh-Hant': '回饋',
          ar: 'ملاحظات', ru: 'Отзыв', nl: 'Feedback', tr: 'Geri Bildirim',
          sv: 'Feedback', da: 'Feedback', ko: '피드백', nb: 'Tilbakemelding',
        },
        guide: {
          en: 'User Guide', de: 'Benutzerhandbuch', fr: 'Guide utilisateur', es: 'Guía del usuario',
          it: 'Guida utente', ja: 'ユーザーガイド', 'zh-Hans': '用户指南', 'zh-Hant': '用戶指南',
          ar: 'دليل المستخدم', ru: 'Руководство пользователя', nl: 'Gebruikershandleiding', tr: 'Kullanım Kılavuzu',
          sv: 'Användarguide', da: 'Brugervejledning', ko: '사용자 가이드', nb: 'Brukermanual',
        },
        troubleshooting: {
          en: 'Troubleshooting', de: 'Fehlerbehebung', fr: 'Dépannage', es: 'Solución de problemas',
          it: 'Risoluzione dei problemi', ja: 'トラブルシューティング', 'zh-Hans': '故障排除', 'zh-Hant': '故障排除',
          ar: 'حل المشكلات', ru: 'Устранение неполадок', nl: 'Probleemoplossing', tr: 'Sorun Giderme',
          sv: 'Felsökning', da: 'Fejlfinding', ko: '문제 해결', nb: 'Feilsøking',
        },
      };
    const homeNames: Record<Language, string> = {
      en: 'Home', de: 'Startseite', fr: 'Accueil', es: 'Inicio',
      it: 'Home', ja: 'ホーム', 'zh-Hans': '首页', 'zh-Hant': '首頁',
      ar: 'الرئيسية', ru: 'Главная', nl: 'Home', tr: 'Ana Sayfa',
      sv: 'Hem', da: 'Hjem', ko: '홈', nb: 'Hjem',
    };
    let breadcrumb = null;
    if (!isHome) {
      const bcNameMap = breadcrumbNames[pageKey];
      breadcrumb = {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: [
          {
            '@type': 'ListItem',
            position: 1,
            name: homeNames[currentLang] || 'Home',
            item: `${BASE_URL}/${currentLang}`,
          },
          {
            '@type': 'ListItem',
            position: 2,
            name: bcNameMap ? (bcNameMap[currentLang] || bcNameMap.en) : pageKey,
            item: `${BASE_URL}${currentPath}`,
          },
        ],
      };
    }

    // 5. FAQPage schema (home page – multilingual, all 16 languages)
    let faqSchema = null;
    if (isHome) {
      const homeFaqItems = homeFAQ[currentLang] || homeFAQ.en;
      faqSchema = {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        '@id': `${BASE_URL}/${currentLang}#faqpage`,
        mainEntityOfPage: { '@id': `${BASE_URL}/${currentLang}` },
        inLanguage: currentLang,
        mainEntity: homeFaqItems.map(item => ({
          '@type': 'Question',
          name: item.question,
          acceptedAnswer: {
            '@type': 'Answer',
            text: item.answer,
          },
        })),
      };
    }

    // 6. FAQPage schema for /faq page – multilingual, pulls from faqContentTranslations
    let faqPageSchema = null;
    if (pageKey === 'faq') {
      const faqContent = faqContentTranslations[currentLang] || faqContentTranslations.en;
      const allFaqItems = faqContent.categories.flatMap(category =>
        category.items.map(item => ({
          '@type': 'Question' as const,
          name: item.question,
          acceptedAnswer: {
            '@type': 'Answer' as const,
            text: item.answer,
          },
        }))
      );
      if (allFaqItems.length > 0) {
        faqPageSchema = {
          '@context': 'https://schema.org',
          '@type': 'FAQPage',
          '@id': `${BASE_URL}/${currentLang}/faq#faqpage`,
          mainEntityOfPage: { '@id': `${BASE_URL}/${currentLang}/faq` },
          inLanguage: currentLang,
          mainEntity: allFaqItems,
        };
      }
    }

    // 7. HowTo schema for /guide page – multilingual, uses guide translations
    let howToSchema = null;
    if (pageKey === 'guide') {
      const g = getGuideTranslation(currentLang);
      howToSchema = {
        '@context': 'https://schema.org',
        '@type': 'HowTo',
        '@id': `${BASE_URL}/${currentLang}/guide#howto`,
        mainEntityOfPage: { '@id': `${BASE_URL}/${currentLang}/guide` },
        name: g.pageTitle,
        description: metaDescriptions.guide[currentLang],
        inLanguage: currentLang,
        totalTime: 'PT10M',
        tool: {
          '@type': 'HowToTool',
          name: 'MACA – Master Audio Control App',
        },
        supply: {
          '@type': 'HowToSupply',
          name: 'macOS 15 (Sequoia) or later',
        },
        step: [
          {
            '@type': 'HowToStep',
            position: 1,
            name: g.sectionTitles[0],
            text: g.s1.intro,
            url: `${BASE_URL}/${currentLang}/guide#getting-started`,
          },
          {
            '@type': 'HowToStep',
            position: 2,
            name: g.sectionTitles[1],
            text: g.s2.intro,
            url: `${BASE_URL}/${currentLang}/guide#menu-bar-icon`,
          },
          {
            '@type': 'HowToStep',
            position: 3,
            name: g.sectionTitles[2],
            text: g.s3.intro,
            url: `${BASE_URL}/${currentLang}/guide#main-popup-window`,
          },
          {
            '@type': 'HowToStep',
            position: 4,
            name: g.sectionTitles[3],
            text: g.s4.intro,
            url: `${BASE_URL}/${currentLang}/guide#per-app-volume-control`,
          },
          {
            '@type': 'HowToStep',
            position: 5,
            name: g.sectionTitles[4],
            text: g.s5.intro,
            url: `${BASE_URL}/${currentLang}/guide#per-app-audio-routing`,
          },
          {
            '@type': 'HowToStep',
            position: 6,
            name: g.sectionTitles[5],
            text: g.s6.intro,
            url: `${BASE_URL}/${currentLang}/guide#per-app-equalizer`,
          },
          {
            '@type': 'HowToStep',
            position: 7,
            name: g.sectionTitles[6],
            text: g.s7.intro,
            url: `${BASE_URL}/${currentLang}/guide#focus-mode`,
          },
          {
            '@type': 'HowToStep',
            position: 8,
            name: g.sectionTitles[7],
            text: g.s8.intro,
            url: `${BASE_URL}/${currentLang}/guide#audio-normalizer`,
          },
          {
            '@type': 'HowToStep',
            position: 9,
            name: g.sectionTitles[8],
            text: g.s9.intro,
            url: `${BASE_URL}/${currentLang}/guide#profiles`,
          },
          {
            '@type': 'HowToStep',
            position: 10,
            name: g.sectionTitles[9],
            text: g.s10.intro,
            url: `${BASE_URL}/${currentLang}/guide#secondary-devices`,
          },
          {
            '@type': 'HowToStep',
            position: 11,
            name: g.sectionTitles[10],
            text: g.s11.intro,
            url: `${BASE_URL}/${currentLang}/guide#keyboard-shortcuts`,
          },
          {
            '@type': 'HowToStep',
            position: 12,
            name: g.sectionTitles[11],
            text: g.s12.intro,
            url: `${BASE_URL}/${currentLang}/guide#siri-and-shortcuts`,
          },
          {
            '@type': 'HowToStep',
            position: 13,
            name: g.sectionTitles[12],
            text: g.s13.intro,
            url: `${BASE_URL}/${currentLang}/guide#settings`,
          },
        ],
      };
    }

    // 8. FAQPage schema for /troubleshooting page – multilingual, pulls from troubleshootingTranslations
    let troubleshootingFaqSchema = null;
    if (pageKey === 'troubleshooting') {
      const tsContent = troubleshootingTranslations[currentLang] || troubleshootingTranslations.en;
      const tsItems = tsContent.items.map(item => ({
        '@type': 'Question' as const,
        name: item.title,
        acceptedAnswer: {
          '@type': 'Answer' as const,
          text: item.description,
        },
      }));
      if (tsItems.length > 0) {
        troubleshootingFaqSchema = {
          '@context': 'https://schema.org',
          '@type': 'FAQPage',
          '@id': `${BASE_URL}/${currentLang}/troubleshooting#faqpage`,
          mainEntityOfPage: { '@id': `${BASE_URL}/${currentLang}/troubleshooting` },
          inLanguage: currentLang,
          mainEntity: tsItems,
        };
      }
    }

    // 9. WebPage schema for static pages (privacy, terms, imprint)
    let webPageSchema = null;
    const staticPageTypes: Record<string, string> = {
      privacy: 'WebPage',
      terms: 'WebPage',
      imprint: 'AboutPage',
    };
    if (staticPageTypes[pageKey]) {
      const bcMap = breadcrumbNames[pageKey];
      webPageSchema = {
        '@context': 'https://schema.org',
        '@type': staticPageTypes[pageKey],
        '@id': `${BASE_URL}${currentPath}#webpage`,
        url: `${BASE_URL}${currentPath}`,
        name: bcMap ? (bcMap[currentLang] || bcMap.en) : pageKey,
        description: metaDescriptions[pageKey]?.[currentLang] || metaDescriptions[pageKey]?.en,
        inLanguage: currentLang,
        isPartOf: { '@id': `${BASE_URL}/#website` },
        publisher: { '@id': `${BASE_URL}/#organization` },
        datePublished: '2024-12-01',
        dateModified: '2026-03-11',
      };
    }

    // Inject all schemas
    const schemas = [softwareApp, organization, webSite, breadcrumb, faqSchema, faqPageSchema, howToSchema, troubleshootingFaqSchema, webPageSchema].filter(Boolean);
    schemas.forEach(schema => {
      const script = document.createElement('script');
      script.type = 'application/ld+json';
      script.text = JSON.stringify(schema);
      document.head.appendChild(script);
    });

    // ── Performance hints ─────────────────────────────────────────────────
    const dnsPrefetch = ['https://apps.apple.com'];
    dnsPrefetch.forEach(url => {
      if (!document.querySelector(`link[rel="dns-prefetch"][href="${url}"]`)) {
        const link = document.createElement('link');
        link.rel = 'dns-prefetch';
        link.href = url;
        document.head.appendChild(link);
      }
    });

    const preconnect = ['https://apps.apple.com'];
    preconnect.forEach(url => {
      if (!document.querySelector(`link[rel="preconnect"][href="${url}"]`)) {
        const link = document.createElement('link');
        link.rel = 'preconnect';
        link.href = url;
        link.crossOrigin = 'anonymous';
        document.head.appendChild(link);
      }
    });
  }, [currentLang, location.pathname]);

  return null;
}