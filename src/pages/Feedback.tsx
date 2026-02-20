import { useState, useRef } from 'react';
import { useParams, useNavigate } from 'react-router';
import { motion } from 'motion/react';
import { MessageSquare, Bug, Lightbulb, Upload, X, Check, Send } from 'lucide-react';
import { translations, Language } from '../locales/translations';
import { Header } from '../components/Header';
import { LanguageSelector } from '../components/LanguageSelector';
import { useDarkMode } from '../hooks/useDarkMode';
import { useScrolled } from '../hooks/useScrolled';

type FeedbackType = 'bug' | 'feature';

interface CompressedImage {
  file: File;
  preview: string;
  originalSize: number;
  compressedSize: number;
}

export function Feedback() {
  const { lang = 'en' } = useParams<{ lang: Language }>();
  const navigate = useNavigate();
  const currentLang = (lang in translations ? lang : 'en') as Language;
  const t = translations[currentLang];

  const [feedbackType, setFeedbackType] = useState<FeedbackType>('bug');
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [email, setEmail] = useState('');
  const [images, setImages] = useState<CompressedImage[]>([]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const scrolled = useScrolled(50);
  const { isDarkMode, toggleDarkMode } = useDarkMode();
  
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleLanguageChange = (newLang: Language) => {
    navigate(`/${newLang}/feedback`);
  };

  // Compress image using canvas
  const compressImage = async (file: File): Promise<CompressedImage> => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = (event) => {
        const img = new Image();
        img.src = event.target?.result as string;
        img.onload = () => {
          const canvas = document.createElement('canvas');
          const ctx = canvas.getContext('2d');
          
          // Max dimensions
          const maxWidth = 1200;
          const maxHeight = 1200;
          
          let width = img.width;
          let height = img.height;
          
          // Calculate new dimensions
          if (width > height) {
            if (width > maxWidth) {
              height = (height * maxWidth) / width;
              width = maxWidth;
            }
          } else {
            if (height > maxHeight) {
              width = (width * maxHeight) / height;
              height = maxHeight;
            }
          }
          
          canvas.width = width;
          canvas.height = height;
          
          ctx?.drawImage(img, 0, 0, width, height);
          
          // Convert to blob with quality reduction
          canvas.toBlob(
            (blob) => {
              if (blob) {
                const compressedFile = new File([blob], file.name, {
                  type: 'image/jpeg',
                  lastModified: Date.now(),
                });
                
                resolve({
                  file: compressedFile,
                  preview: canvas.toDataURL('image/jpeg', 0.8),
                  originalSize: file.size,
                  compressedSize: blob.size,
                });
              } else {
                reject(new Error('Failed to compress image'));
              }
            },
            'image/jpeg',
            0.8
          );
        };
        img.onerror = reject;
      };
      reader.onerror = reject;
    });
  };

  const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files || []);
    
    // Limit to 5 images
    if (images.length + files.length > 5) {
      alert(currentLang === 'de' ? 'Maximal 5 Bilder erlaubt' : 
            currentLang === 'es' ? 'Máximo 5 imágenes permitidas' :
            currentLang === 'fr' ? '5 images maximum autorisées' :
            currentLang === 'it' ? 'Massimo 5 immagini consentite' :
            currentLang === 'pt' ? 'Máximo 5 imagens permitidas' :
            currentLang === 'ja' ? '最大5枚の画像が許可されています' :
            currentLang === 'zh' ? '最多允许 5 张图片' :
            'Maximum 5 images allowed');
      return;
    }

    const compressed = await Promise.all(files.map(file => compressImage(file)));
    setImages([...images, ...compressed]);
  };

  const removeImage = (index: number) => {
    setImages(images.filter((_, i) => i !== index));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate submission (in real app, send to backend)
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setIsSubmitting(false);
    setSubmitted(true);

    // Reset form after 3 seconds
    setTimeout(() => {
      setTitle('');
      setDescription('');
      setEmail('');
      setImages([]);
      setSubmitted(false);
    }, 3000);
  };

  const feedbackTexts = {
    de: {
      title: 'Feedback & Bug Reports',
      subtitle: 'Helfen Sie uns, MACA zu verbessern',
      bugReport: 'Bug melden',
      featureRequest: 'Feature vorschlagen',
      titleLabel: 'Titel',
      titlePlaceholder: 'Kurze Zusammenfassung',
      descriptionLabel: 'Beschreibung',
      descriptionPlaceholder: 'Beschreiben Sie das Problem oder Ihre Idee im Detail...',
      emailLabel: 'E-Mail (optional)',
      emailPlaceholder: 'ihre@email.de',
      uploadImages: 'Bilder hochladen',
      uploadHint: 'Bis zu 5 Bilder, automatisch komprimiert',
      submit: 'Absenden',
      submitting: 'Wird gesendet...',
      success: 'Vielen Dank für Ihr Feedback!',
      successMessage: 'Wir haben Ihre Nachricht erhalten und werden uns schnellstmöglich darum kümmern.',
    },
    es: {
      title: 'Comentarios e informes de errores',
      subtitle: 'Ayúdanos a mejorar MACA',
      bugReport: 'Informar error',
      featureRequest: 'Sugerir función',
      titleLabel: 'Título',
      titlePlaceholder: 'Resumen breve',
      descriptionLabel: 'Descripción',
      descriptionPlaceholder: 'Describe el problema o tu idea en detalle...',
      emailLabel: 'Correo electrónico (opcional)',
      emailPlaceholder: 'tu@correo.es',
      uploadImages: 'Subir imágenes',
      uploadHint: 'Hasta 5 imágenes, comprimidas automáticamente',
      submit: 'Enviar',
      submitting: 'Enviando...',
      success: '¡Gracias por tu comentario!',
      successMessage: 'Hemos recibido tu mensaje y nos ocuparemos de él lo antes posible.',
    },
    fr: {
      title: 'Commentaires et rapports de bugs',
      subtitle: 'Aidez-nous à améliorer MACA',
      bugReport: 'Signaler un bug',
      featureRequest: 'Suggérer une fonctionnalité',
      titleLabel: 'Titre',
      titlePlaceholder: 'Résumé court',
      descriptionLabel: 'Description',
      descriptionPlaceholder: 'Décrivez le problème ou votre idée en détail...',
      emailLabel: 'E-mail (optionnel)',
      emailPlaceholder: 'votre@email.fr',
      uploadImages: 'Télécharger des images',
      uploadHint: 'Jusqu\'à 5 images, compressées automatiquement',
      submit: 'Envoyer',
      submitting: 'Envoi en cours...',
      success: 'Merci pour vos commentaires !',
      successMessage: 'Nous avons reçu votre message et nous nous en occuperons dès que possible.',
    },
    it: {
      title: 'Feedback e segnalazioni bug',
      subtitle: 'Aiutaci a migliorare MACA',
      bugReport: 'Segnala bug',
      featureRequest: 'Suggerisci funzionalità',
      titleLabel: 'Titolo',
      titlePlaceholder: 'Riepilogo breve',
      descriptionLabel: 'Descrizione',
      descriptionPlaceholder: 'Descrivi il problema o la tua idea in dettaglio...',
      emailLabel: 'Email (opzionale)',
      emailPlaceholder: 'tua@email.it',
      uploadImages: 'Carica immagini',
      uploadHint: 'Fino a 5 immagini, compresse automaticamente',
      submit: 'Invia',
      submitting: 'Invio in corso...',
      success: 'Grazie per il tuo feedback!',
      successMessage: 'Abbiamo ricevuto il tuo messaggio e ce ne occuperemo il prima possibile.',
    },
    pt: {
      title: 'Feedback e relatórios de bugs',
      subtitle: 'Ajude-nos a melhorar o MACA',
      bugReport: 'Relatar bug',
      featureRequest: 'Sugerir recurso',
      titleLabel: 'Título',
      titlePlaceholder: 'Resumo breve',
      descriptionLabel: 'Descrição',
      descriptionPlaceholder: 'Descreva o problema ou sua ideia em detalhes...',
      emailLabel: 'E-mail (opcional)',
      emailPlaceholder: 'seu@email.pt',
      uploadImages: 'Enviar imagens',
      uploadHint: 'Até 5 imagens, comprimidas automaticamente',
      submit: 'Enviar',
      submitting: 'Enviando...',
      success: 'Obrigado pelo seu feedback!',
      successMessage: 'Recebemos sua mensagem e cuidaremos dela o mais rápido possível.',
    },
    ja: {
      title: 'フィードバックとバグレポート',
      subtitle: 'MACAの改善にご協力ください',
      bugReport: 'バグを報告',
      featureRequest: '機能を提案',
      titleLabel: 'タイトル',
      titlePlaceholder: '簡単な要約',
      descriptionLabel: '説明',
      descriptionPlaceholder: '問題やアイデアを詳しく説明してください...',
      emailLabel: 'メール（オプション）',
      emailPlaceholder: 'your@email.jp',
      uploadImages: '画像をアップロード',
      uploadHint: '最大5枚、自動的に圧縮されます',
      submit: '送信',
      submitting: '送信中...',
      success: 'フィードバックありがとうございます！',
      successMessage: 'メッセージを受け取りました。できるだけ早く対応いたします。',
    },
    zh: {
      title: '反馈和错误报告',
      subtitle: '帮助我们改进 MACA',
      bugReport: '报告错误',
      featureRequest: '建议功能',
      titleLabel: '标题',
      titlePlaceholder: '简短摘要',
      descriptionLabel: '描述',
      descriptionPlaceholder: '详细描述问题或您的想法...',
      emailLabel: '电子邮件（可选）',
      emailPlaceholder: 'your@email.cn',
      uploadImages: '上传图片',
      uploadHint: '最多5张图片，自动压缩',
      submit: '提交',
      submitting: '提交中...',
      success: '感谢您的反馈！',
      successMessage: '我们已收到您的消息，将尽快处理。',
    },
    en: {
      title: 'Feedback & Bug Reports',
      subtitle: 'Help us improve MACA',
      bugReport: 'Report Bug',
      featureRequest: 'Request Feature',
      titleLabel: 'Title',
      titlePlaceholder: 'Brief summary',
      descriptionLabel: 'Description',
      descriptionPlaceholder: 'Describe the issue or your idea in detail...',
      emailLabel: 'Email (optional)',
      emailPlaceholder: 'your@email.com',
      uploadImages: 'Upload Images',
      uploadHint: 'Up to 5 images, automatically compressed',
      submit: 'Submit',
      submitting: 'Submitting...',
      success: 'Thank you for your feedback!',
      successMessage: 'We have received your message and will take care of it as soon as possible.',
    },
  };

  const txt = feedbackTexts[currentLang];

  const formatFileSize = (bytes: number) => {
    if (bytes < 1024) return bytes + ' B';
    if (bytes < 1024 * 1024) return (bytes / 1024).toFixed(1) + ' KB';
    return (bytes / (1024 * 1024)).toFixed(1) + ' MB';
  };

  return (
    <div className={`min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-slate-100 dark:from-slate-900 dark:via-slate-800 dark:to-slate-950 transition-colors duration-300 ${isDarkMode ? 'dark' : ''}`}>
      <Header
        scrolled={scrolled}
        currentLang={currentLang}
        isDarkMode={isDarkMode}
        onToggleDarkMode={toggleDarkMode}
        onLanguageChange={handleLanguageChange}
        badge={t.headerBadge}
      >
        <LanguageSelector 
          currentLang={currentLang} 
          onLanguageChange={handleLanguageChange} 
        />
      </Header>

      <div className="pt-32 pb-20 px-6">
        <div className="max-w-3xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <div className="inline-flex items-center gap-3 mb-4">
              <MessageSquare className="w-12 h-12 text-blue-600 dark:text-blue-400" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              {txt.title}
            </h1>
            <p className="text-lg text-slate-600 dark:text-slate-300">
              {txt.subtitle}
            </p>
          </motion.div>

          {submitted ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="bg-white dark:bg-slate-800 rounded-3xl shadow-xl p-12 text-center"
            >
              <div className="inline-flex items-center justify-center w-20 h-20 bg-green-100 dark:bg-green-900/30 rounded-full mb-6">
                <Check className="w-10 h-10 text-green-600 dark:text-green-400" />
              </div>
              <h2 className="text-3xl font-bold mb-4 text-slate-900 dark:text-white">
                {txt.success}
              </h2>
              <p className="text-lg text-slate-600 dark:text-slate-300">
                {txt.successMessage}
              </p>
            </motion.div>
          ) : (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white dark:bg-slate-800 rounded-3xl shadow-xl p-8 md:p-12"
            >
              <form onSubmit={handleSubmit} className="space-y-8">
                {/* Feedback Type Selection */}
                <div>
                  <div className="grid grid-cols-2 gap-4">
                    <button
                      type="button"
                      onClick={() => setFeedbackType('bug')}
                      className={`flex items-center justify-center gap-3 p-6 rounded-2xl border-2 transition-all ${
                        feedbackType === 'bug'
                          ? 'border-red-500 bg-red-50 dark:bg-red-900/20'
                          : 'border-slate-200 dark:border-slate-700 hover:border-slate-300 dark:hover:border-slate-600'
                      }`}
                    >
                      <Bug className={`w-6 h-6 ${feedbackType === 'bug' ? 'text-red-600 dark:text-red-400' : 'text-slate-400'}`} />
                      <span className={`font-semibold ${feedbackType === 'bug' ? 'text-red-600 dark:text-red-400' : 'text-slate-600 dark:text-slate-400'}`}>
                        {txt.bugReport}
                      </span>
                    </button>
                    <button
                      type="button"
                      onClick={() => setFeedbackType('feature')}
                      className={`flex items-center justify-center gap-3 p-6 rounded-2xl border-2 transition-all ${
                        feedbackType === 'feature'
                          ? 'border-blue-500 bg-blue-50 dark:bg-blue-900/20'
                          : 'border-slate-200 dark:border-slate-700 hover:border-slate-300 dark:hover:border-slate-600'
                      }`}
                    >
                      <Lightbulb className={`w-6 h-6 ${feedbackType === 'feature' ? 'text-blue-600 dark:text-blue-400' : 'text-slate-400'}`} />
                      <span className={`font-semibold ${feedbackType === 'feature' ? 'text-blue-600 dark:text-blue-400' : 'text-slate-600 dark:text-slate-400'}`}>
                        {txt.featureRequest}
                      </span>
                    </button>
                  </div>
                </div>

                {/* Title */}
                <div>
                  <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">
                    {txt.titleLabel}
                  </label>
                  <input
                    type="text"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    placeholder={txt.titlePlaceholder}
                    required
                    className="w-full px-4 py-3 rounded-xl border-2 border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-900 dark:text-white focus:border-blue-500 dark:focus:border-blue-400 focus:outline-none transition-colors"
                  />
                </div>

                {/* Description */}
                <div>
                  <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">
                    {txt.descriptionLabel}
                  </label>
                  <textarea
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    placeholder={txt.descriptionPlaceholder}
                    required
                    rows={6}
                    className="w-full px-4 py-3 rounded-xl border-2 border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-900 dark:text-white focus:border-blue-500 dark:focus:border-blue-400 focus:outline-none transition-colors resize-none"
                  />
                </div>

                {/* Email */}
                <div>
                  <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">
                    {txt.emailLabel}
                  </label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder={txt.emailPlaceholder}
                    className="w-full px-4 py-3 rounded-xl border-2 border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-900 dark:text-white focus:border-blue-500 dark:focus:border-blue-400 focus:outline-none transition-colors"
                  />
                </div>

                {/* Image Upload */}
                <div>
                  <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">
                    {txt.uploadImages}
                  </label>
                  <p className="text-sm text-slate-500 dark:text-slate-400 mb-3">
                    {txt.uploadHint}
                  </p>
                  
                  <input
                    ref={fileInputRef}
                    type="file"
                    accept="image/*"
                    multiple
                    onChange={handleImageUpload}
                    className="hidden"
                  />
                  
                  <button
                    type="button"
                    onClick={() => fileInputRef.current?.click()}
                    disabled={images.length >= 5}
                    className="w-full px-6 py-4 rounded-xl border-2 border-dashed border-slate-300 dark:border-slate-600 hover:border-blue-500 dark:hover:border-blue-400 transition-colors flex items-center justify-center gap-3 text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    <Upload className="w-5 h-5" />
                    <span className="font-medium">{txt.uploadImages}</span>
                  </button>

                  {/* Image Previews */}
                  {images.length > 0 && (
                    <div className="mt-4 grid grid-cols-2 md:grid-cols-3 gap-4">
                      {images.map((img, index) => (
                        <div key={index} className="relative group">
                          <img
                            src={img.preview}
                            alt={`Preview ${index + 1}`}
                            className="w-full h-32 object-cover rounded-xl"
                          />
                          <button
                            type="button"
                            onClick={() => removeImage(index)}
                            className="absolute top-2 right-2 p-1.5 bg-red-500 hover:bg-red-600 text-white rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
                          >
                            <X className="w-4 h-4" />
                          </button>
                          <div className="absolute bottom-2 left-2 right-2 bg-black/70 backdrop-blur-sm text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity">
                            {formatFileSize(img.originalSize)} → {formatFileSize(img.compressedSize)}
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-bold rounded-xl shadow-lg hover:shadow-xl transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-3"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      {txt.submitting}
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      {txt.submit}
                    </>
                  )}
                </button>
              </form>
            </motion.div>
          )}
        </div>
      </div>
    </div>
  );
}