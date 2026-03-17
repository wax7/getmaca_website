# Website Editing Instructions

- Antworten und Zusammenfassungen fuer dieses Projekt auf Deutsch.
- Figma-Sync wird fuer diese Website nicht mehr als Quelle verwendet; aendere die Dateien direkt im Repo.
- Behalte die bestehende Vike/Vite-Struktur bei und vermeide Rueckschritte auf eine reine Figma-Bundle-Logik.
- Route-spezifische SEO-Logik bleibt in `pages/` und nicht in `src/`, damit sie nicht versehentlich von Import-Umbauten betroffen ist.
- Vor Build-relevanten Aenderungen immer `npm run build` pruefen.
- Fuer Docker/CI keine neuen Installationspfade einfuehren, die den bestehenden `npm ci --legacy-peer-deps`-Pfad brechen.
- Unnoetige globale Refactors vermeiden; Aenderungen klein und gezielt halten.