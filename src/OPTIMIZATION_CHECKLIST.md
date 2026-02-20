# Rechtliche & Technische Optimierungen für MACA Website

## 🔴 KRITISCH - Rechtlich erforderlich (DSGVO/EU)

### 1. **Impressum vervollständigen**
- ✅ Vorhanden, aber prüfen ob vollständig:
  - Vollständiger Name des Verantwortlichen
  - Vollständige Anschrift (keine Postfach)
  - E-Mail und Telefonnummer
  - Umsatzsteuer-ID (falls vorhanden)
  - Handelsregisternummer (falls GmbH/AG)
  - Zuständige Aufsichtsbehörde
  - Berufsbezeichnung und Kammer (falls zutreffend)

### 2. **Datenschutzerklärung erweitern**
- ✅ Vorhanden, aber ergänzen um:
  - Verantwortlicher mit Kontaktdaten
  - Datenschutzbeauftragter (falls erforderlich)
  - Rechtsgrundlage für Verarbeitung (Art. 6 DSGVO)
  - Aufbewahrungsfristen
  - Widerspruchsrecht
  - Beschwerderecht bei Aufsichtsbehörde
  - Detaillierte Cookie-Informationen
  - Drittanbieter (Unsplash, wenn Bilder geladen werden)
  - App Store Links (Apple erhält Klickdaten)

### 3. **AGB / Terms of Service erstellen**
❌ FEHLT KOMPLETT - notwendig für:
  - Nutzungsbedingungen der Website
  - Regelungen zu In-App-Käufen
  - Haftungsausschlüsse
  - Gewährleistung
  - Geistiges Eigentum

### 4. **Widerrufsbelehrung**
❌ FEHLT - EU-Pflicht für digitale Käufe:
  - 14-tägiges Widerrufsrecht
  - Widerrufsformular
  - Ausnahmen (digitale Inhalte nach Download)

### 5. **Cookie-Banner erweitern**
✅ Vorhanden, aber:
  - Detaillierte Cookie-Policy Seite hinzufügen
  - Kategorien: Notwendig, Funktional, Analytics
  - Cookie-Einstellungen jederzeit änderbar
  - Liste aller verwendeten Cookies mit Zweck und Dauer

### 6. **EU Online-Streitbeilegung**
❌ FEHLT - Pflicht seit 2016:
  - Link zur OS-Plattform: https://ec.europa.eu/consumers/odr
  - Statement zur Streitschlichtung

### 7. **Urheberrechte/Lizenzen**
⚠️ PRÜFEN:
  - Unsplash Bilder korrekt lizenziert?
  - MACA Logo und App Icon Rechte klar?
  - Lucide Icons (MIT Lizenz) - OK
  - Alle verwendeten Libraries

---

## 🟡 WICHTIG - SEO & Performance

### 8. **robots.txt erstellen**
❌ FEHLT - für Suchmaschinen:
```
User-agent: *
Allow: /
Sitemap: https://deine-domain.com/sitemap.xml
```

### 9. **Hreflang Tags**
❌ FEHLT - für mehrsprachiges SEO:
- Alternate Links für alle Sprachversionen
- Verhindert Duplicate Content Penalties

### 10. **Canonical URLs**
❌ FEHLT - SEO Best Practice:
- Hauptversion jeder Seite definieren
- Verhindert Duplicate Content

### 11. **Strukturierte Daten (JSON-LD)**
❌ FEHLT - besseres Ranking:
- Organization Schema
- Software Application Schema
- Breadcrumbs
- FAQ Schema

### 12. **Lazy Loading für Bilder**
⚠️ PRÜFEN - Performance:
- Bilder erst laden wenn sichtbar
- Reduce Initial Page Load

### 13. **Alt-Texte für Bilder**
⚠️ PRÜFEN:
- Alle ImageWithFallback mit alt=""?
- SEO und Accessibility

### 14. **Performance Metriken**
⚠️ TESTEN:
- Core Web Vitals
- Lighthouse Score
- Mobile PageSpeed

---

## 🟢 OPTIONAL - Best Practices

### 15. **Accessibility (WCAG 2.1)**
⚠️ PRÜFEN:
- Keyboard Navigation vollständig?
- ARIA Labels korrekt?
- Farbkontraste ausreichend (4.5:1)?
- Focus States sichtbar?
- Screen Reader Support

### 16. **PWA Features**
❌ OPTIONAL:
- manifest.json
- Service Worker
- Offline-Fähigkeit
- Install Prompt

### 17. **Analytics (Privacy-freundlich)**
❌ OPTIONAL:
- Plausible Analytics
- Matomo (self-hosted)
- KEINE Google Analytics ohne explizite Consent

### 18. **Content Security Policy**
❌ OPTIONAL aber empfohlen:
- CSP Headers
- XSS Protection

### 19. **Security Headers**
❌ OPTIONAL:
- X-Frame-Options
- X-Content-Type-Options
- Referrer-Policy

### 20. **404 Fehlerseite**
❌ FEHLT:
- Custom 404 Seite
- Hilfreiches Design

---

## 📋 SOFORT-CHECKLISTE

**RECHTLICH KRITISCH (VOR LAUNCH):**
1. ✅ Impressum vollständig mit allen Pflichtangaben
2. ✅ Datenschutzerklärung DSGVO-konform erweitern
3. ❌ AGB/Terms erstellen
4. ❌ Widerrufsbelehrung hinzufügen
5. ❌ Cookie-Policy Detailseite erstellen
6. ❌ OS-Platform Link hinzufügen
7. ⚠️ Urheberrechte klären

**TECHNISCH WICHTIG:**
1. ❌ robots.txt erstellen
2. ❌ Hreflang Tags implementieren
3. ❌ Canonical URLs setzen
4. ❌ Strukturierte Daten (JSON-LD)
5. ⚠️ Alle Bilder mit Alt-Texten
6. ⚠️ Accessibility testen

**OPTIONAL:**
1. ❌ 404 Seite
2. ❌ Security Headers
3. ❌ Performance optimieren
