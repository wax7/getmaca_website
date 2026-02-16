import { Language } from '../locales/translations';

export interface PrivacyTranslation {
  title: string;
  lastUpdated: string;
  intro: string;
  sections: {
    dataCollection: {
      title: string;
      content: string[];
    };
    dataStorage: {
      title: string;
      content: string[];
    };
    dataSharing: {
      title: string;
      content: string[];
    };
    userRights: {
      title: string;
      content: string[];
    };
    security: {
      title: string;
      content: string[];
    };
    thirdParty: {
      title: string;
      content: string[];
    };
    children: {
      title: string;
      content: string[];
    };
    changes: {
      title: string;
      content: string[];
    };
    contact: {
      title: string;
      content: string[];
    };
  };
}

export const privacyTranslations: Record<Language, PrivacyTranslation> = {
  en: {
    title: 'Privacy Policy',
    lastUpdated: 'Last Updated: February 4, 2026',
    intro: 'At MACA (Master Audio Control App), your privacy is our highest priority. This Privacy Policy explains how we handle your data—or rather, how we don\'t collect it.',
    sections: {
      dataCollection: {
        title: '1. Data Collection',
        content: [
          'MACA does NOT collect any personal data.',
          'MACA does NOT collect any usage data or analytics.',
          'MACA does NOT track your behavior.',
          'MACA does NOT require an account or login.',
          'Everything stays on your Mac. Period.'
        ]
      },
      dataStorage: {
        title: '2. Data Storage',
        content: [
          'All your settings, audio profiles, and preferences are stored locally on your Mac.',
          'Your data is saved in your local macOS user directory.',
          'MACA does NOT sync your data to any cloud service.',
          'MACA does NOT have access to your files, documents, or other apps.',
          'Only audio control settings are stored—nothing else.'
        ]
      },
      dataSharing: {
        title: '3. Data Sharing',
        content: [
          'MACA does NOT share any data with third parties.',
          'MACA does NOT sell your data.',
          'MACA does NOT send any data to our servers (because we don\'t have any).',
          'Your audio settings remain completely private on your device.'
        ]
      },
      userRights: {
        title: '4. Your Rights (GDPR & CCPA Compliant)',
        content: [
          'Right to Access: Since we don\'t collect data, there\'s nothing to access.',
          'Right to Deletion: Simply uninstall MACA to remove all local settings.',
          'Right to Portability: Your settings are stored locally and can be backed up manually.',
          'Right to Object: You have full control—MACA never sends data anywhere.',
          'No consent required because no data is collected or processed.'
        ]
      },
      security: {
        title: '5. Security',
        content: [
          'MACA operates entirely offline.',
          'No network connections are made (except for App Store updates).',
          'Your audio settings are protected by macOS file system permissions.',
          'No encryption needed—because there\'s no data transmission.'
        ]
      },
      thirdParty: {
        title: '6. Third-Party Services',
        content: [
          'MACA does NOT use any third-party analytics tools.',
          'MACA does NOT embed any tracking pixels or cookies.',
          'MACA does NOT integrate with advertising networks.',
          'The only external connection is Apple\'s App Store for updates and licensing verification.'
        ]
      },
      children: {
        title: '7. Children\'s Privacy',
        content: [
          'MACA is safe for all ages.',
          'We do not knowingly collect data from anyone—including children under 13.',
          'Parents can safely allow their children to use MACA without privacy concerns.'
        ]
      },
      changes: {
        title: '8. Changes to This Policy',
        content: [
          'We may update this Privacy Policy from time to time.',
          'Any changes will be posted on this page with an updated "Last Updated" date.',
          'Continued use of MACA after changes constitutes acceptance of the updated policy.'
        ]
      },
      contact: {
        title: '9. Contact Us',
        content: [
          'If you have any questions about this Privacy Policy, please contact us:',
          'Email: Support@getmaca.de',
          'Company: AMX Mediensysteme, Remigiusstr. 63, 41747 Viersen, Germany',
          'We typically respond within 24-48 hours.'
        ]
      }
    }
  },
  de: {
    title: 'Datenschutzerklärung',
    lastUpdated: 'Zuletzt aktualisiert: 4. Februar 2026',
    intro: 'Bei MACA (Master Audio Control App) hat deine Privatsphäre höchste Priorität. Diese Datenschutzerklärung erklärt, wie wir mit deinen Daten umgehen – oder besser gesagt, wie wir sie NICHT sammeln.',
    sections: {
      dataCollection: {
        title: '1. Datenerfassung',
        content: [
          'MACA sammelt KEINE persönlichen Daten.',
          'MACA sammelt KEINE Nutzungsdaten oder Analysen.',
          'MACA verfolgt NICHT dein Verhalten.',
          'MACA benötigt KEIN Konto oder Login.',
          'Alles bleibt auf deinem Mac. Punkt.'
        ]
      },
      dataStorage: {
        title: '2. Datenspeicherung',
        content: [
          'Alle deine Einstellungen, Audio-Profile und Präferenzen werden lokal auf deinem Mac gespeichert.',
          'Deine Daten werden in deinem lokalen macOS-Benutzerverzeichnis gespeichert.',
          'MACA synchronisiert deine Daten NICHT mit Cloud-Diensten.',
          'MACA hat KEINEN Zugriff auf deine Dateien, Dokumente oder andere Apps.',
          'Es werden nur Audio-Einstellungen gespeichert – sonst nichts.'
        ]
      },
      dataSharing: {
        title: '3. Datenweitergabe',
        content: [
          'MACA gibt KEINE Daten an Dritte weiter.',
          'MACA verkauft KEINE Daten.',
          'MACA sendet KEINE Daten an unsere Server (weil wir keine haben).',
          'Deine Audio-Einstellungen bleiben vollständig privat auf deinem Gerät.'
        ]
      },
      userRights: {
        title: '4. Deine Rechte (DSGVO-konform)',
        content: [
          'Recht auf Auskunft: Da wir keine Daten sammeln, gibt es nichts abzufragen.',
          'Recht auf Löschung: Deinstalliere einfach MACA, um alle lokalen Einstellungen zu entfernen.',
          'Recht auf Datenübertragbarkeit: Deine Einstellungen sind lokal gespeichert und können manuell gesichert werden.',
          'Widerspruchsrecht: Du hast volle Kontrolle – MACA sendet niemals Daten irgendwohin.',
          'Keine Einwilligung erforderlich, da keine Daten gesammelt oder verarbeitet werden.'
        ]
      },
      security: {
        title: '5. Sicherheit',
        content: [
          'MACA arbeitet vollständig offline.',
          'Es werden keine Netzwerkverbindungen hergestellt (außer für App Store Updates).',
          'Deine Audio-Einstellungen sind durch macOS-Dateisystemberechtigungen geschützt.',
          'Keine Verschlüsselung nötig – weil keine Datenübertragung stattfindet.'
        ]
      },
      thirdParty: {
        title: '6. Drittanbieter-Dienste',
        content: [
          'MACA nutzt KEINE Drittanbieter-Analysetools.',
          'MACA bettet KEINE Tracking-Pixel oder Cookies ein.',
          'MACA integriert sich NICHT mit Werbenetzwerken.',
          'Die einzige externe Verbindung ist Apples App Store für Updates und Lizenzverifizierung.'
        ]
      },
      children: {
        title: '7. Datenschutz für Kinder',
        content: [
          'MACA ist für alle Altersgruppen sicher.',
          'Wir sammeln wissentlich keine Daten von irgendjemandem – einschließlich Kindern unter 13 Jahren.',
          'Eltern können ihren Kindern bedenkenlos erlauben, MACA zu nutzen.'
        ]
      },
      changes: {
        title: '8. Änderungen dieser Richtlinie',
        content: [
          'Wir können diese Datenschutzerklärung von Zeit zu Zeit aktualisieren.',
          'Alle Änderungen werden auf dieser Seite mit aktualisiertem Datum veröffentlicht.',
          'Die fortgesetzte Nutzung von MACA nach Änderungen gilt als Akzeptanz der aktualisierten Richtlinie.'
        ]
      },
      contact: {
        title: '9. Kontakt',
        content: [
          'Bei Fragen zu dieser Datenschutzerklärung kontaktiere uns bitte:',
          'E-Mail: Support@getmaca.de',
          'Firma: AMX Mediensysteme, Remigiusstr. 63, 41747 Viersen, Deutschland',
          'Wir antworten in der Regel innerhalb von 24-48 Stunden.'
        ]
      }
    }
  },
  es: {
    title: 'Política de Privacidad',
    lastUpdated: 'Última actualización: 4 de febrero de 2026',
    intro: 'En MACA (Master Audio Control App), tu privacidad es nuestra máxima prioridad. Esta Política de Privacidad explica cómo manejamos tus datos—o más bien, cómo NO los recopilamos.',
    sections: {
      dataCollection: {
        title: '1. Recopilación de Datos',
        content: [
          'MACA NO recopila ningún dato personal.',
          'MACA NO recopila datos de uso ni análisis.',
          'MACA NO rastrea tu comportamiento.',
          'MACA NO requiere cuenta ni inicio de sesión.',
          'Todo permanece en tu Mac. Punto.'
        ]
      },
      dataStorage: {
        title: '2. Almacenamiento de Datos',
        content: [
          'Todos tus ajustes, perfiles de audio y preferencias se almacenan localmente en tu Mac.',
          'Tus datos se guardan en tu directorio de usuario local de macOS.',
          'MACA NO sincroniza tus datos con ningún servicio en la nube.',
          'MACA NO tiene acceso a tus archivos, documentos u otras aplicaciones.',
          'Solo se almacenan ajustes de control de audio—nada más.'
        ]
      },
      dataSharing: {
        title: '3. Compartición de Datos',
        content: [
          'MACA NO comparte ningún dato con terceros.',
          'MACA NO vende tus datos.',
          'MACA NO envía ningún dato a nuestros servidores (porque no tenemos ninguno).',
          'Tus ajustes de audio permanecen completamente privados en tu dispositivo.'
        ]
      },
      userRights: {
        title: '4. Tus Derechos (Compatible con RGPD y CCPA)',
        content: [
          'Derecho de Acceso: Como no recopilamos datos, no hay nada que acceder.',
          'Derecho de Eliminación: Simplemente desinstala MACA para eliminar todos los ajustes locales.',
          'Derecho de Portabilidad: Tus ajustes se almacenan localmente y pueden respaldarse manualmente.',
          'Derecho de Oposición: Tienes control total—MACA nunca envía datos a ninguna parte.',
          'No se requiere consentimiento porque no se recopilan ni procesan datos.'
        ]
      },
      security: {
        title: '5. Seguridad',
        content: [
          'MACA opera completamente sin conexión.',
          'No se realizan conexiones de red (excepto para actualizaciones del App Store).',
          'Tus ajustes de audio están protegidos por los permisos del sistema de archivos de macOS.',
          'No se necesita cifrado—porque no hay transmisión de datos.'
        ]
      },
      thirdParty: {
        title: '6. Servicios de Terceros',
        content: [
          'MACA NO utiliza ninguna herramienta de análisis de terceros.',
          'MACA NO integra píxeles de rastreo ni cookies.',
          'MACA NO se integra con redes publicitarias.',
          'La única conexión externa es el App Store de Apple para actualizaciones y verificación de licencias.'
        ]
      },
      children: {
        title: '7. Privacidad de Menores',
        content: [
          'MACA es seguro para todas las edades.',
          'No recopilamos datos de nadie a sabiendas—incluidos niños menores de 13 años.',
          'Los padres pueden permitir con seguridad que sus hijos usen MACA sin preocupaciones de privacidad.'
        ]
      },
      changes: {
        title: '8. Cambios en Esta Política',
        content: [
          'Podemos actualizar esta Política de Privacidad de vez en cuando.',
          'Cualquier cambio se publicará en esta página con una fecha de "Última actualización" actualizada.',
          'El uso continuo de MACA después de los cambios constituye la aceptación de la política actualizada.'
        ]
      },
      contact: {
        title: '9. Contáctanos',
        content: [
          'Si tienes alguna pregunta sobre esta Política de Privacidad, contáctanos:',
          'Correo electrónico: Support@getmaca.de',
          'Empresa: AMX Mediensysteme, Remigiusstr. 63, 41747 Viersen, Alemania',
          'Normalmente respondemos en 24-48 horas.'
        ]
      }
    }
  },
  fr: {
    title: 'Politique de Confidentialité',
    lastUpdated: 'Dernière mise à jour : 4 février 2026',
    intro: 'Chez MACA (Master Audio Control App), votre vie privée est notre priorité absolue. Cette Politique de Confidentialité explique comment nous gérons vos données—ou plutôt, comment nous ne les collectons PAS.',
    sections: {
      dataCollection: {
        title: '1. Collecte de Données',
        content: [
          'MACA ne collecte AUCUNE donnée personnelle.',
          'MACA ne collecte AUCUNE donnée d\'utilisation ou d\'analyse.',
          'MACA ne suit PAS votre comportement.',
          'MACA ne nécessite AUCUN compte ou connexion.',
          'Tout reste sur votre Mac. Point final.'
        ]
      },
      dataStorage: {
        title: '2. Stockage des Données',
        content: [
          'Tous vos paramètres, profils audio et préférences sont stockés localement sur votre Mac.',
          'Vos données sont enregistrées dans votre répertoire utilisateur local macOS.',
          'MACA ne synchronise PAS vos données avec un service cloud.',
          'MACA n\'a PAS accès à vos fichiers, documents ou autres applications.',
          'Seuls les paramètres de contrôle audio sont stockés—rien d\'autre.'
        ]
      },
      dataSharing: {
        title: '3. Partage de Données',
        content: [
          'MACA ne partage AUCUNE donnée avec des tiers.',
          'MACA ne vend PAS vos données.',
          'MACA n\'envoie AUCUNE donnée à nos serveurs (parce que nous n\'en avons pas).',
          'Vos paramètres audio restent entièrement privés sur votre appareil.'
        ]
      },
      userRights: {
        title: '4. Vos Droits (Conforme RGPD et CCPA)',
        content: [
          'Droit d\'Accès : Comme nous ne collectons pas de données, il n\'y a rien à consulter.',
          'Droit de Suppression : Désinstallez simplement MACA pour supprimer tous les paramètres locaux.',
          'Droit de Portabilité : Vos paramètres sont stockés localement et peuvent être sauvegardés manuellement.',
          'Droit d\'Opposition : Vous avez le contrôle total—MACA n\'envoie jamais de données nulle part.',
          'Aucun consentement requis car aucune donnée n\'est collectée ou traitée.'
        ]
      },
      security: {
        title: '5. Sécurité',
        content: [
          'MACA fonctionne entièrement hors ligne.',
          'Aucune connexion réseau n\'est établie (sauf pour les mises à jour de l\'App Store).',
          'Vos paramètres audio sont protégés par les permissions du système de fichiers macOS.',
          'Pas besoin de chiffrement—car il n\'y a pas de transmission de données.'
        ]
      },
      thirdParty: {
        title: '6. Services Tiers',
        content: [
          'MACA n\'utilise AUCUN outil d\'analyse tiers.',
          'MACA n\'intègre AUCUN pixel de suivi ou cookie.',
          'MACA ne s\'intègre PAS avec des réseaux publicitaires.',
          'La seule connexion externe est l\'App Store d\'Apple pour les mises à jour et la vérification de licence.'
        ]
      },
      children: {
        title: '7. Confidentialité des Enfants',
        content: [
          'MACA est sûr pour tous les âges.',
          'Nous ne collectons sciemment de données de personne—y compris les enfants de moins de 13 ans.',
          'Les parents peuvent autoriser en toute sécurité leurs enfants à utiliser MACA sans souci de confidentialité.'
        ]
      },
      changes: {
        title: '8. Modifications de Cette Politique',
        content: [
          'Nous pouvons mettre à jour cette Politique de Confidentialité de temps en temps.',
          'Toute modification sera publiée sur cette page avec une date de "Dernière mise à jour" actualisée.',
          'L\'utilisation continue de MACA après les modifications constitue l\'acceptation de la politique mise à jour.'
        ]
      },
      contact: {
        title: '9. Nous Contacter',
        content: [
          'Si vous avez des questions sur cette Politique de Confidentialité, veuillez nous contacter :',
          'E-mail : Support@getmaca.de',
          'Société : AMX Mediensysteme, Remigiusstr. 63, 41747 Viersen, Allemagne',
          'Nous répondons généralement sous 24-48 heures.'
        ]
      }
    }
  },
  it: {
    title: 'Informativa sulla Privacy',
    lastUpdated: 'Ultimo aggiornamento: 4 febbraio 2026',
    intro: 'In MACA (Master Audio Control App), la tua privacy è la nostra massima priorità. Questa Informativa sulla Privacy spiega come gestiamo i tuoi dati—o meglio, come NON li raccogliamo.',
    sections: {
      dataCollection: {
        title: '1. Raccolta Dati',
        content: [
          'MACA NON raccoglie alcun dato personale.',
          'MACA NON raccoglie dati di utilizzo o analisi.',
          'MACA NON traccia il tuo comportamento.',
          'MACA NON richiede un account o login.',
          'Tutto rimane sul tuo Mac. Punto.'
        ]
      },
      dataStorage: {
        title: '2. Archiviazione Dati',
        content: [
          'Tutte le tue impostazioni, profili audio e preferenze sono archiviate localmente sul tuo Mac.',
          'I tuoi dati sono salvati nella tua directory utente locale di macOS.',
          'MACA NON sincronizza i tuoi dati con alcun servizio cloud.',
          'MACA NON ha accesso ai tuoi file, documenti o altre app.',
          'Vengono archiviate solo le impostazioni di controllo audio—nient\'altro.'
        ]
      },
      dataSharing: {
        title: '3. Condivisione Dati',
        content: [
          'MACA NON condivide alcun dato con terze parti.',
          'MACA NON vende i tuoi dati.',
          'MACA NON invia alcun dato ai nostri server (perché non ne abbiamo).',
          'Le tue impostazioni audio rimangono completamente private sul tuo dispositivo.'
        ]
      },
      userRights: {
        title: '4. I Tuoi Diritti (Conforme GDPR e CCPA)',
        content: [
          'Diritto di Accesso: Poiché non raccogliamo dati, non c\'è nulla da consultare.',
          'Diritto alla Cancellazione: Disinstalla semplicemente MACA per rimuovere tutte le impostazioni locali.',
          'Diritto alla Portabilità: Le tue impostazioni sono archiviate localmente e possono essere salvate manualmente.',
          'Diritto di Opposizione: Hai il controllo totale—MACA non invia mai dati da nessuna parte.',
          'Nessun consenso richiesto perché non vengono raccolti o elaborati dati.'
        ]
      },
      security: {
        title: '5. Sicurezza',
        content: [
          'MACA opera completamente offline.',
          'Non vengono effettuate connessioni di rete (tranne per gli aggiornamenti dell\'App Store).',
          'Le tue impostazioni audio sono protette dalle autorizzazioni del file system macOS.',
          'Nessuna crittografia necessaria—perché non c\'è trasmissione di dati.'
        ]
      },
      thirdParty: {
        title: '6. Servizi di Terze Parti',
        content: [
          'MACA NON utilizza alcuno strumento di analisi di terze parti.',
          'MACA NON incorpora pixel di tracciamento o cookie.',
          'MACA NON si integra con reti pubblicitarie.',
          'L\'unica connessione esterna è l\'App Store di Apple per aggiornamenti e verifica della licenza.'
        ]
      },
      children: {
        title: '7. Privacy dei Minori',
        content: [
          'MACA è sicuro per tutte le età.',
          'Non raccogliamo consapevolmente dati da nessuno—inclusi bambini di età inferiore a 13 anni.',
          'I genitori possono consentire in sicurezza ai loro figli di utilizzare MACA senza preoccupazioni sulla privacy.'
        ]
      },
      changes: {
        title: '8. Modifiche a Questa Informativa',
        content: [
          'Potremmo aggiornare questa Informativa sulla Privacy di tanto in tanto.',
          'Eventuali modifiche saranno pubblicate su questa pagina con una data di "Ultimo aggiornamento" aggiornata.',
          'L\'uso continuo di MACA dopo le modifiche costituisce accettazione dell\'informativa aggiornata.'
        ]
      },
      contact: {
        title: '9. Contattaci',
        content: [
          'Se hai domande su questa Informativa sulla Privacy, contattaci:',
          'Email: Support@getmaca.de',
          'Azienda: AMX Mediensysteme, Remigiusstr. 63, 41747 Viersen, Germania',
          'Rispondiamo tipicamente entro 24-48 ore.'
        ]
      }
    }
  },
  pt: {
    title: 'Política de Privacidade',
    lastUpdated: 'Última atualização: 4 de fevereiro de 2026',
    intro: 'Na MACA (Master Audio Control App), sua privacidade é nossa maior prioridade. Esta Política de Privacidade explica como lidamos com seus dados—ou melhor, como NÃO os coletamos.',
    sections: {
      dataCollection: {
        title: '1. Coleta de Dados',
        content: [
          'MACA NÃO coleta nenhum dado pessoal.',
          'MACA NÃO coleta dados de uso ou análises.',
          'MACA NÃO rastreia seu comportamento.',
          'MACA NÃO requer uma conta ou login.',
          'Tudo fica no seu Mac. Ponto final.'
        ]
      },
      dataStorage: {
        title: '2. Armazenamento de Dados',
        content: [
          'Todas as suas configurações, perfis de áudio e preferências são armazenados localmente no seu Mac.',
          'Seus dados são salvos no seu diretório de usuário local do macOS.',
          'MACA NÃO sincroniza seus dados com nenhum serviço de nuvem.',
          'MACA NÃO tem acesso aos seus arquivos, documentos ou outros aplicativos.',
          'Apenas configurações de controle de áudio são armazenadas—nada mais.'
        ]
      },
      dataSharing: {
        title: '3. Compartilhamento de Dados',
        content: [
          'MACA NÃO compartilha nenhum dado com terceiros.',
          'MACA NÃO vende seus dados.',
          'MACA NÃO envia nenhum dado para nossos servidores (porque não temos nenhum).',
          'Suas configurações de áudio permanecem completamente privadas no seu dispositivo.'
        ]
      },
      userRights: {
        title: '4. Seus Direitos (Conforme GDPR e CCPA)',
        content: [
          'Direito de Acesso: Como não coletamos dados, não há nada para acessar.',
          'Direito de Exclusão: Simplesmente desinstale MACA para remover todas as configurações locais.',
          'Direito de Portabilidade: Suas configurações são armazenadas localmente e podem ser copiadas manualmente.',
          'Direito de Oposição: Você tem controle total—MACA nunca envia dados para lugar nenhum.',
          'Nenhum consentimento necessário porque nenhum dado é coletado ou processado.'
        ]
      },
      security: {
        title: '5. Segurança',
        content: [
          'MACA opera completamente offline.',
          'Nenhuma conexão de rede é feita (exceto para atualizações da App Store).',
          'Suas configurações de áudio são protegidas pelas permissões do sistema de arquivos do macOS.',
          'Nenhuma criptografia necessária—porque não há transmissão de dados.'
        ]
      },
      thirdParty: {
        title: '6. Serviços de Terceiros',
        content: [
          'MACA NÃO usa nenhuma ferramenta de análise de terceiros.',
          'MACA NÃO incorpora pixels de rastreamento ou cookies.',
          'MACA NÃO se integra com redes de publicidade.',
          'A única conexão externa é a App Store da Apple para atualizações e verificação de licença.'
        ]
      },
      children: {
        title: '7. Privacidade de Crianças',
        content: [
          'MACA é seguro para todas as idades.',
          'Não coletamos conscientemente dados de ninguém—incluindo crianças menores de 13 anos.',
          'Os pais podem permitir com segurança que seus filhos usem MACA sem preocupações de privacidade.'
        ]
      },
      changes: {
        title: '8. Alterações Nesta Política',
        content: [
          'Podemos atualizar esta Política de Privacidade de tempos em tempos.',
          'Quaisquer alterações serão publicadas nesta página com uma data de "Última atualização" atualizada.',
          'O uso contínuo do MACA após as alterações constitui aceitação da política atualizada.'
        ]
      },
      contact: {
        title: '9. Entre em Contato',
        content: [
          'Se você tiver alguma dúvida sobre esta Política de Privacidade, entre em contato:',
          'E-mail: Support@getmaca.de',
          'Empresa: AMX Mediensysteme, Remigiusstr. 63, 41747 Viersen, Alemanha',
          'Normalmente respondemos dentro de 24-48 horas.'
        ]
      }
    }
  },
  ja: {
    title: 'プライバシーポリシー',
    lastUpdated: '最終更新日：2026年2月4日',
    intro: 'MACA（Master Audio Control App）では、お客様のプライバシーを最優先事項としています。このプライバシーポリシーでは、データの取り扱い方法、またはむしろデータを収集しない方法について説明します。',
    sections: {
      dataCollection: {
        title: '1. データ収集',
        content: [
          'MACAは個人データを一切収集しません。',
          'MACAは使用データや分析データを収集しません。',
          'MACAはお客様の行動を追跡しません。',
          'MACAはアカウントやログインを必要としません。',
          'すべてがお客様のMacに留まります。以上です。'
        ]
      },
      dataStorage: {
        title: '2. データ保存',
        content: [
          'すべての設定、オーディオプロファイル、環境設定はMacにローカルに保存されます。',
          'データはmacOSのローカルユーザーディレクトリに保存されます。',
          'MACAはデータをクラウドサービスに同期しません。',
          'MACAはファイル、ドキュメント、その他のアプリにアクセスできません。',
          'オーディオコントロール設定のみが保存されます—それ以外はありません。'
        ]
      },
      dataSharing: {
        title: '3. データ共有',
        content: [
          'MACAは第三者とデータを共有しません。',
          'MACAはデータを販売しません。',
          'MACAはサーバーにデータを送信しません（サーバーがないため）。',
          'オーディオ設定は完全にデバイス上でプライベートに保たれます。'
        ]
      },
      userRights: {
        title: '4. お客様の権利（GDPR & CCPA準拠）',
        content: [
          'アクセス権：データを収集していないため、アクセスするものがありません。',
          '削除権：MACAをアンインストールするだけで、すべてのローカル設定が削除されます。',
          'データポータビリティ権：設定はローカルに保存され、手動でバックアップできます。',
          '異議権：完全なコントロールがあります—MACAはデータをどこにも送信しません。',
          'データが収集・処理されないため、同意は不要です。'
        ]
      },
      security: {
        title: '5. セキュリティ',
        content: [
          'MACAは完全にオフラインで動作します。',
          'ネットワーク接続は行われません（App Storeの更新を除く）。',
          'オーディオ設定はmacOSのファイルシステム権限によって保護されています。',
          'データ送信がないため、暗号化は不要です。'
        ]
      },
      thirdParty: {
        title: '6. サードパーティサービス',
        content: [
          'MACAはサードパーティの分析ツールを使用しません。',
          'MACAはトラッキングピクセルやクッキーを埋め込みません。',
          'MACAは広告ネットワークと統合しません。',
          '唯一の外部接続は、更新とライセンス確認のためのApple App Storeです。'
        ]
      },
      children: {
        title: '7. 児童のプライバシー',
        content: [
          'MACAはすべての年齢層に安全です。',
          '13歳未満の児童を含め、誰からもデータを故意に収集することはありません。',
          '保護者はプライバシーの心配なく、お子様にMACAを使用させることができます。'
        ]
      },
      changes: {
        title: '8. このポリシーの変更',
        content: [
          'このプライバシーポリシーは随時更新される場合があります。',
          '変更があった場合は、このページに更新された「最終更新日」とともに掲載されます。',
          '変更後もMACAを継続して使用することは、更新されたポリシーへの同意を意味します。'
        ]
      },
      contact: {
        title: '9. お問い合わせ',
        content: [
          'このプライバシーポリシーについてご質問がある場合は、お問い合わせください：',
          'メール：Support@getmaca.de',
          '会社：AMX Mediensysteme, Remigiusstr. 63, 41747 Viersen, Germany',
          '通常24〜48時間以内に返信いたします。'
        ]
      }
    }
  },
  zh: {
    title: '隐私政策',
    lastUpdated: '最后更新：2026年2月4日',
    intro: '在MACA（Master Audio Control App）中，您的隐私是我们的最高优先事项。本隐私政策解释了我们如何处理您的数据——或者更确切地说，我们如何不收集数据。',
    sections: {
      dataCollection: {
        title: '1. 数据收集',
        content: [
          'MACA不收集任何个人数据。',
          'MACA不收集任何使用数据或分析数据。',
          'MACA不跟踪您的行为。',
          'MACA不需要账户或登录。',
          '一切都留在您的Mac上。就这样。'
        ]
      },
      dataStorage: {
        title: '2. 数据存储',
        content: [
          '您的所有设置、音频配置文件和偏好设置都存储在Mac本地。',
          '您的数据保存在macOS本地用户目录中。',
          'MACA不会将您的数据同步到任何云服务。',
          'MACA无法访问您的文件、文档或其他应用程序。',
          '仅存储音频控制设置——没有其他内容。'
        ]
      },
      dataSharing: {
        title: '3. 数据共享',
        content: [
          'MACA不与第三方共享任何数据。',
          'MACA不出售您的数据。',
          'MACA不向我们的服务器发送任何数据（因为我们没有服务器）。',
          '您的音频设置完全私密地保留在您的设备上。'
        ]
      },
      userRights: {
        title: '4. 您的权利（符合GDPR和CCPA）',
        content: [
          '访问权：由于我们不收集数据，因此没有可访问的内容。',
          '删除权：只需卸载MACA即可删除所有本地设置。',
          '可携带权：您的设置存储在本地，可以手动备份。',
          '反对权：您拥有完全控制权——MACA从不向任何地方发送数据。',
          '不需要同意，因为不收集或处理任何数据。'
        ]
      },
      security: {
        title: '5. 安全性',
        content: [
          'MACA完全离线运行。',
          '不进行网络连接（App Store更新除外）。',
          '您的音频设置受macOS文件系统权限保护。',
          '不需要加密——因为没有数据传输。'
        ]
      },
      thirdParty: {
        title: '6. 第三方服务',
        content: [
          'MACA不使用任何第三方分析工具。',
          'MACA不嵌入任何跟踪像素或Cookie。',
          'MACA不与广告网络集成。',
          '唯一的外部连接是用于更新和许可证验证的Apple App Store。'
        ]
      },
      children: {
        title: '7. 儿童隐私',
        content: [
          'MACA对所有年龄段都是安全的。',
          '我们不会有意收集任何人的数据——包括13岁以下的儿童。',
          '家长可以放心让孩子使用MACA，无需担心隐私问题。'
        ]
      },
      changes: {
        title: '8. 本政策的变更',
        content: [
          '我们可能会不时更新本隐私政策。',
          '任何更改都将在本页面上发布，并更新"最后更新"日期。',
          '变更后继续使用MACA即表示接受更新后的政策。'
        ]
      },
      contact: {
        title: '9. 联系我们',
        content: [
          '如果您对本隐私政策有任何疑问，请联系我们：',
          '电子邮件：Support@getmaca.de',
          '公司：AMX Mediensysteme, Remigiusstr. 63, 41747 Viersen, Germany',
          '我们通常在24-48小时内回复。'
        ]
      }
    }
  }
};