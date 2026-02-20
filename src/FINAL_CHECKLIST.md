# 🚀 FINALE CHECKLISTE - VOR LAUNCH

## ⚠️ KRITISCH - Muss vor Launch geändert werden

### 1. **Domain in DocumentHead.tsx ändern** ⭐⭐⭐
**Datei:** `/components/DocumentHead.tsx` Zeile 22
```typescript
const baseUrl = 'https://maca-app.com'; // ← HIER DEINE ECHTE DOMAIN EINTRAGEN!
```
**Aktuell:** Placeholder Domain
**Aktion:** Ersetze mit deiner echten Domain (z.B. `https://getmaca.app` oder `https://maca-audio.com`)

---

### 2. **Impressum vervollständigen** ⭐⭐⭐
**Datei:** `/pages/Imprint.tsx`

**Fehlende Pflichtangaben ergänzen:**
- [ ] Vollständiger Name / Firmenname
- [ ] Vollständige Anschrift (Straße, Hausnummer, PLZ, Ort, Land)
- [ ] E-Mail-Adresse
- [ ] Telefonnummer
- [ ] USt-ID (falls vorhanden)
- [ ] Handelsregisternummer (falls GmbH/AG)
- [ ] Geschäftsführer (falls Firma)

**Beispiel:**
```
AMX Mediensysteme
Max Mustermann
Musterstraße 123
12345 Berlin
Deutschland

E-Mail: info@maca-app.com
Tel: +49 30 12345678
USt-ID: DE123456789
```

---

### 3. **Datenschutzerklärung erweitern** ⭐⭐⭐
**Datei:** `/utils/privacy-translations.ts`

**Muss ergänzt werden:**

**A. Verantwortlicher:** (Name + Kontakt wie im Impressum)

**B. LocalStorage Cookie-Details hinzufügen:**
```
3. LocalStorage Cookies

Wir verwenden LocalStorage in Ihrem Browser für:

a) maca-cookie-consent
   - Zweck: Speichert Ihre Cookie-Zustimmung
   - Rechtsgrundlage: Art. 6 Abs. 1 lit. a DSGVO (Einwilligung)
   - Dauer: Permanent (bis Sie löschen)

b) maca-dark-mode
   - Zweck: Speichert Dark Mode Einstellung
   - Rechtsgrundlage: Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse)
   - Dauer: Permanent

c) maca-preferred-language
   - Zweck: Speichert Sprachpräferenz
   - Rechtsgrundlage: Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse)
   - Dauer: Permanent

Sie können diese jederzeit über Ihre Browser-Einstellungen löschen.
```

**C. Externe Dienste:**
```
4. Externe Dienste

Unsplash (Bilder):
- Beim Laden von Bildern wird Ihre IP-Adresse an Unsplash übertragen
- Datenschutz: https://unsplash.com/privacy
- Rechtsgrundlage: Art. 6 Abs. 1 lit. f DSGVO

Apple App Store (Download-Links):
- Beim Klick auf Download-Links werden Daten an Apple übertragen
- Datenschutz: https://www.apple.com/legal/privacy/
```

**D. Betroffenenrechte (DSGVO Art. 15-22):**
```
6. Ihre Rechte

Sie haben das Recht auf:
- Auskunft über Ihre gespeicherten Daten (Art. 15 DSGVO)
- Berichtigung falscher Daten (Art. 16 DSGVO)
- Löschung Ihrer Daten (Art. 17 DSGVO)
- Einschränkung der Verarbeitung (Art. 18 DSGVO)
- Datenübertragbarkeit (Art. 20 DSGVO)
- Widerspruch gegen die Verarbeitung (Art. 21 DSGVO)

Kontakt: [Ihre E-Mail aus Impressum]
```

**E. Aufsichtsbehörde:**
```
7. Beschwerderecht

Zuständige Aufsichtsbehörde:
[Name der Datenschutzbehörde Ihres Bundeslandes]
[Adresse]
[Website]

Liste: https://www.bfdi.bund.de/DE/Infothek/Anschriften_Links/anschriften_links-node.html
```

---

## ✅ EMPFOHLEN - Sollte gemacht werden

### 4. **Alt-Texte für Bilder verbessern** ⭐⭐
**Status:** Grundlegende Alt-Texte vorhanden, aber können verbessert werden

**Aktuell:** ✅ OK - alle Bilder haben Alt-Texte
**Optional:** Detailliertere Beschreibungen für SEO

---

### 5. **Footer mit rechtlichen Links erstellen** ⭐⭐
**Status:** Fehlt komplett

Erstelle eine Footer-Komponente mit Links zu:
- Impressum
- Datenschutz  
- Nutzungsbedingungen
- (Optional) Cookie-Einstellungen
- (Optional) OS-Plattform Link

**Soll ich das jetzt erstellen?**

---

### 6. **Credits/Attribution Seite** ⭐
**Status:** Fehlt

Für Unsplash-Bilder (optional, aber empfohlen):
```
Photos by [Photographer Names] on Unsplash
Icons by Lucide (MIT License)
```

**Soll ich das erstellen?**

---

## 🔍 OPTIONAL - Nice to have

### 7. **Performance Optimierung**
- [ ] Lazy Loading für Bilder implementieren
- [ ] Code Splitting optimieren
- [ ] Lighthouse Audit durchführen

### 8. **Accessibility Audit**
- [ ] Keyboard Navigation testen
- [ ] Screen Reader Test
- [ ] Farbkontraste prüfen (WCAG 2.1)

### 9. **Security Headers** (Hosting-Konfiguration)
- [ ] Content-Security-Policy
- [ ] X-Frame-Options
- [ ] X-Content-Type-Options

### 10. **Analytics** (Privacy-freundlich)
- [ ] Plausible Analytics (empfohlen)
- [ ] Matomo (self-hosted)
- ❌ KEIN Google Analytics ohne Consent

---

## 📋 LAUNCH CHECKLISTE

**VOR dem Launch:**
- [ ] Domain in DocumentHead.tsx ändern
- [ ] Impressum vollständig ausgefüllt
- [ ] Datenschutzerklärung erweitert
- [ ] Footer mit rechtlichen Links
- [ ] Alle Links funktionieren (manuell testen)
- [ ] Mobile Version testen (iPhone, Android)
- [ ] Dark Mode in allen Seiten testen
- [ ] Alle 8 Sprachen durchklicken

**NACH dem Launch:**
- [ ] Google Search Console einrichten
- [ ] sitemap.xml einreichen
- [ ] Apple App Store Link verifizieren
- [ ] Monitoring einrichten (z.B. UptimeRobot)

---

## 🎯 SOFORT-AKTIONEN

**Was ich JETZT für dich machen kann:**

1. ✅ **Footer-Komponente erstellen** mit allen rechtlichen Links
2. ✅ **Credits-Seite erstellen** für Unsplash/Lucide Attribution  
3. ✅ **Cookie-Einstellungen-Seite** erstellen (optional)
4. ✅ **Performance-Optimierungen** (Lazy Loading)

**Was DU machen musst:**
1. ⚠️ Domain in DocumentHead.tsx ändern
2. ⚠️ Impressum-Daten eintragen
3. ⚠️ Datenschutzerklärung erweitern

---

**Soll ich die Footer-Komponente und Credits-Seite jetzt erstellen?** 🚀
