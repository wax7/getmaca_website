# RECHTLICHE CHECKLISTE FÜR MACA WEBSITE - VOR LAUNCH

## ✅ IMPLEMENTIERT

### Technische SEO
- ✅ robots.txt erstellt
- ✅ Canonical URLs implementiert
- ✅ Hreflang Tags für alle 8 Sprachen
- ✅ Strukturierte Daten (JSON-LD) für SoftwareApplication
- ✅ Open Graph Tags für Social Media
- ✅ Twitter Cards
- ✅ Meta Descriptions in allen Sprachen
- ✅ Favicon und Apple Touch Icon
- ✅ Mobile Viewport Optimierung
- ✅ DNS Prefetch und Preconnect
- ✅ Theme Color für mobile Browser

### Rechtliche Seiten
- ✅ Impressum vorhanden (muss vervollständigt werden)
- ✅ Datenschutzerklärung vorhanden (muss erweitert werden)
- ✅ Nutzungsbedingungen erstellt (Website-Nutzung, kein E-Commerce)
- ✅ 404 Fehlerseite
- ✅ Sitemap (downloadbar als XML)
- ✅ Cookie-Banner mit Consent Management

### Features
- ✅ Automatische Spracherkennung
- ✅ Mobile Optimierung
- ✅ Dark Mode Support
- ✅ Scroll-to-Top Funktionalität

---

## ⚠️ VOR LAUNCH ZU ERLEDIGEN

### 1. IMPRESSUM VERVOLLSTÄNDIGEN (KRITISCH!)

Prüfen Sie, ob folgende Angaben vollständig sind:

**Pflichtangaben §5 TMG (Deutschland) / Art. 5 E-Commerce-Richtlinie (EU):**

- [ ] Vollständiger Name (bei Einzelunternehmen: Vor- und Nachname)
- [ ] Bei Firmen: Rechtsform (z.B. GmbH, AG)
- [ ] Vollständige Anschrift (KEINE Postfachadresse!)
  - Straße und Hausnummer
  - PLZ und Ort
  - Land
- [ ] Kontaktmöglichkeiten:
  - E-Mail-Adresse
  - Telefonnummer
- [ ] Handelsregistereintrag (falls vorhanden):
  - Registergericht
  - Registernummer
- [ ] Umsatzsteuer-ID (falls vorhanden)
- [ ] Vertretungsberechtigter (bei Firmen: Geschäftsführer)
- [ ] Aufsichtsbehörde (falls zutreffend)
- [ ] Berufsrechtliche Regelungen (falls Freiberufler)

**WICHTIG:** Datei öffnen und ergänzen: `/pages/Imprint.tsx`

---

### 2. DATENSCHUTZERKLÄRUNG ERWEITERN (KRITISCH!)

Folgende Punkte MÜSSEN ergänzt werden:

**A. Verantwortlicher:**
- [ ] Name und Kontaktdaten des Verantwortlichen
- [ ] Datenschutzbeauftragter (falls vorhanden/erforderlich)

**B. Verarbeitete Daten auf der WEBSITE:**
- [ ] **LocalStorage:**
  - `maca-cookie-consent` (Cookie-Zustimmung)
  - `maca-dark-mode` (Dark Mode Präferenz)
  - `maca-preferred-language` (Sprachpräferenz)
  - Rechtsgrundlage: Art. 6 Abs. 1 lit. a DSGVO (Einwilligung)
  - Aufbewahrungsdauer: Bis zur Löschung durch Nutzer

- [ ] **Externe Dienste:**
  - **Unsplash (Bildladen)**
    - Wird verwendet für: Bilder auf der Website
    - Datenweitergabe: IP-Adresse an Unsplash-Server
    - Datenschutzerklärung: https://unsplash.com/privacy
  
  - **Apple App Store (Links)**
    - Wird verwendet für: Download-Links
    - Datenweitergabe: Klickdaten an Apple
    - Datenschutzerklärung: https://www.apple.com/legal/privacy/

**C. Betroffenenrechte (DSGVO Art. 15-22):**
- [ ] Auskunftsrecht (Art. 15)
- [ ] Berichtigungsrecht (Art. 16)
- [ ] Löschungsrecht (Art. 17)
- [ ] Einschränkung der Verarbeitung (Art. 18)
- [ ] Datenübertragbarkeit (Art. 20)
- [ ] Widerspruchsrecht (Art. 21)
- [ ] Beschwerderecht bei Aufsichtsbehörde

**D. Aufsichtsbehörde:**
- [ ] Name und Kontaktdaten der zuständigen Datenschutzbehörde
  - Beispiel Deutschland: Landesbeauftragter für Datenschutz Ihres Bundeslandes
  - Link zur Liste: https://www.bfdi.bund.de/DE/Infothek/Anschriften_Links/anschriften_links-node.html

**WICHTIG:** Datei öffnen und ergänzen: `/pages/Privacy.tsx` oder `/utils/privacy-translations.ts`

---

### 3. NUTZUNGSBEDINGUNGEN (Terms of Use)

✅ **BEREITS ANGEPASST** - keine E-Commerce Regelungen mehr!

Die Nutzungsbedingungen sind jetzt auf Website-Nutzung fokussiert:
- ✅ Klarstellung: Nur Marketing-Website, kein Verkauf
- ✅ Alle Käufe erfolgen über Apple App Store
- ✅ Keine Widerrufsbelehrung nötig (da kein direkter Verkauf)
- ✅ Fokus auf Haftungsausschluss für Website-Inhalte
- ✅ Hinweis auf externe Links (Apple)

**OPTIONAL:** Von Anwalt prüfen lassen (einfachere Prüfung als E-Commerce AGBs!)

---

### 4. ~~WIDERRUFSBELEHRUNG~~ 

❌ **NICHT ERFORDERLICH** - da keine direkten Verkäufe über Website!

Alle Käufe erfolgen über Apple App Store → Apple's Refund Policy gilt.

---

### 5. COOKIE-POLICY DETAILSEITE ERSTELLEN (OPTIONAL)

Erstellen Sie eine neue Seite `/pages/Cookies.tsx` mit:

**A. Liste aller verwendeten Cookies/LocalStorage:**

| Name | Typ | Zweck | Dauer |
|------|-----|-------|-------|
| maca-cookie-consent | Notwendig | Speichert Cookie-Zustimmung | Permanent |
| maca-dark-mode | Funktional | Speichert Dark Mode Einstellung | Permanent |
| maca-preferred-language | Funktional | Speichert Sprachpräferenz | Permanent |

**B. Kategorien:**
- **Notwendig:** Für grundlegende Funktionalität
- **Funktional:** Für Nutzerpräferenzen
- **Analytics:** KEINE (aktuell)
- **Marketing:** KEINE (aktuell)

**C. Verwaltung:**
- Link zum Löschen aller Cookies/LocalStorage
- Anleitung für Browser-Settings

---

### 6. EU ONLINE-STREITBEILEGUNG (OS-PLATTFORM)

**Fügen Sie auf JEDER Seite im Footer hinzu:**

```
"Online-Streitbeilegung gemäß Art. 14 Abs. 1 ODR-VO: 
Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit, 
die Sie unter https://ec.europa.eu/consumers/odr finden.

Zur Teilnahme an einem Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle 
sind wir nicht verpflichtet und nicht bereit."
```

**HINWEIS:** Für reine Informations-Websites ist dies OPTIONAL, aber empfohlen bei EU-Ausrichtung.

---

### 7. URHEBERRECHTE KLÄREN

**A. Verwendete Assets überprüfen:**
- [ ] **MACA App Icon:** Eigene Rechte? → OK
- [ ] **Unsplash Bilder:** Lizenz erlaubt kommerzielle Nutzung? → Prüfen!
  - Unsplash License: https://unsplash.com/license
  - Credit erforderlich? (empfohlen, nicht zwingend)
- [ ] **Lucide Icons:** MIT Lizenz → OK
- [ ] **Fonts:** Lizenzen prüfen

**B. Attribution/Credits Seite:**
- Erstellen Sie eine `/pages/Credits.tsx` oder fügen Sie Credits im Footer hinzu

Beispiel:
```
Icons by Lucide (MIT License)
Photos by [Photographer Names] on Unsplash
```

---

## 📋 SOFORT-CHECKLISTE

**RECHTLICH KRITISCH (VOR LAUNCH):**
1. ✅ Impressum vollständig mit allen Pflichtangaben
2. ✅ Datenschutzerklärung DSGVO-konform erweitern
3. ✅ Nutzungsbedingungen (vereinfacht für Marketing-Website)
4. ❌ ~~Widerrufsbelehrung~~ (nicht nötig - kein E-Commerce)
5. ⚠️ Cookie-Policy Detailseite (optional)
6. ⚠️ OS-Platform Link (optional für Info-Websites)
7. ⚠️ Urheberrechte klären

**TECHNISCH WICHTIG:**
1. ✅ robots.txt erstellt
2. ✅ Hreflang Tags implementiert
3. ✅ Canonical URLs gesetzt
4. ✅ Strukturierte Daten (JSON-LD)
5. ⚠️ Alle Bilder mit Alt-Texten
6. ⚠️ Accessibility testen
7. ⚠️ `baseUrl` in DocumentHead.tsx auf echte Domain ändern!

**OPTIONAL:**
1. ✅ 404 Seite
2. ❌ Security Headers
3. ❌ Performance optimieren

---

## ⚖️ RECHTLICHER HAFTUNGSAUSSCHLUSS

**WICHTIG:** Diese Checkliste ist KEINE Rechtsberatung! 

**FÜR MARKETING-WEBSITES IST DIE RECHTSLAGE EINFACHER:**
- ❌ Keine E-Commerce AGBs nötig
- ❌ Keine Widerrufsbelehrung
- ❌ Keine Zahlungsbedingungen
- ✅ Einfache Nutzungsbedingungen
- ✅ Standard-Impressum + Datenschutz reichen meist

**Dennoch empfohlen: Anwalt konsultieren für:**
- Impressum (Pflichtangaben vollständig?)
- Datenschutzerklärung (DSGVO-konform?)
- Nutzungsbedingungen (Haftungsausschluss korrekt?)

**Kostenrahmen:** 
- Marketing-Website: ca. 300-800€ (einmalig)
- E-Commerce: ca. 1.000-3.000€ (viel komplexer)

---

**Stand:** 20. Februar 2026
**Version:** 2.0 (angepasst für Marketing-Website ohne E-Commerce)