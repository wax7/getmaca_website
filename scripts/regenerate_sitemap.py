#!/usr/bin/env python3
"""Regenerate src/public/sitemap.xml from language-config source of truth.

Per-Page <lastmod> wird aus dem letzten Git-Commit der zugehörigen Source-Datei
abgeleitet (statt globalem heute-Datum). Fallback: heute.
"""

from __future__ import annotations

import datetime
import re
import subprocess
from pathlib import Path

BASE_URL = "https://getmaca.de"
TODAY = datetime.date.today().isoformat()

# (path, changefreq, priority, [source files relevant for lastmod])
PAGES: list[tuple[str, str, str, list[str]]] = [
    ("", "weekly", "1.0", [
        "pages/@lang/+Page.tsx",
        "src/components/HomeView.tsx",
        "src/pages/Home.tsx",
    ]),
    ("/guide", "weekly", "0.9", ["pages/@lang/guide/+Page.tsx"]),
    ("/faq", "weekly", "0.8", [
        "pages/@lang/faq/+Page.tsx",
        "src/components/FAQSection.tsx",
    ]),
    ("/troubleshooting", "weekly", "0.7", ["pages/@lang/troubleshooting/+Page.tsx"]),
    ("/history", "weekly", "0.7", ["pages/@lang/history/+Page.tsx"]),
    ("/imprint", "yearly", "0.6", ["pages/@lang/imprint/+Page.tsx"]),
    ("/privacy", "yearly", "0.6", [
        "pages/@lang/privacy/+Page.tsx",
        "src/components/PrivacyBlock.tsx",
    ]),
    ("/terms", "yearly", "0.6", [
        "pages/@lang/terms/+Page.tsx",
        "src/components/TermsView.tsx",
    ]),
]


def git_lastmod(repo_root: Path, files: list[str]) -> str:
    """Neuestes Commit-Datum (YYYY-MM-DD) aus allen übergebenen Source-Files.
    Fallback: heute (kein git, untracked, keine Treffer)."""
    latest: str | None = None
    for rel in files:
        try:
            result = subprocess.run(
                ["git", "log", "-1", "--format=%cI", "--", rel],
                cwd=repo_root,
                capture_output=True,
                text=True,
                timeout=10,
                check=False,
            )
        except (subprocess.TimeoutExpired, FileNotFoundError):
            continue
        out = result.stdout.strip()
        if not out:
            continue
        date_only = out[:10]  # YYYY-MM-DD aus 2026-04-21T09:51:39+02:00
        if latest is None or date_only > latest:
            latest = date_only
    return latest or TODAY


def parse_supported_languages(config_path: Path) -> list[str]:
    text = config_path.read_text(encoding="utf-8")
    m = re.search(
        r"SUPPORTED_LANGUAGES\s*:[^=]*=\s*\[(.*?)\]\s*as\s+const",
        text,
        re.S,
    )
    if not m:
        raise RuntimeError("Could not locate SUPPORTED_LANGUAGES in language-config.ts")

    block = m.group(1)
    langs = re.findall(r"'([^']+)'", block)
    if not langs:
        raise RuntimeError("SUPPORTED_LANGUAGES is empty")
    return langs


def make_url_entry(
    lang: str,
    path: str,
    changefreq: str,
    priority: str,
    lastmod: str,
    all_langs: list[str],
) -> str:
    loc = f"{BASE_URL}/{lang}{path}"
    links = [
        f'    <xhtml:link rel="alternate" hreflang="{alt}" href="{BASE_URL}/{alt}{path}"/>'
        for alt in all_langs
    ]
    links.append(
        f'    <xhtml:link rel="alternate" hreflang="x-default" href="{BASE_URL}/en{path}"/>'
    )

    return "\n".join(
        [
            "  <url>",
            f"    <loc>{loc}</loc>",
            f"    <lastmod>{lastmod}</lastmod>",
            f"    <changefreq>{changefreq}</changefreq>",
            f"    <priority>{priority}</priority>",
            *links,
            "  </url>",
        ]
    )


def build_sitemap(repo_root: Path, langs: list[str]) -> str:
    lines: list[str] = [
        '<?xml version="1.0" encoding="UTF-8"?>',
        '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"',
        '        xmlns:xhtml="http://www.w3.org/1999/xhtml">',
        "",
    ]

    # lastmod pro Page einmal auflösen (lang-unabhängig), damit alle 16 Sprachen
    # konsistent denselben Wert pro Page-Typ tragen.
    page_lastmods: dict[str, str] = {
        path: git_lastmod(repo_root, sources)
        for path, _cf, _pr, sources in PAGES
    }

    for lang in langs:
        for path, changefreq, priority, _sources in PAGES:
            lastmod = page_lastmods[path]
            lines.append(make_url_entry(lang, path, changefreq, priority, lastmod, langs))
            lines.append("")

    lines.append("</urlset>")
    lines.append("")
    return "\n".join(lines)


def main() -> None:
    repo_root = Path(__file__).resolve().parent.parent
    config = repo_root / "src" / "utils" / "language-config.ts"
    sitemap = repo_root / "src" / "public" / "sitemap.xml"

    langs = parse_supported_languages(config)
    xml = build_sitemap(repo_root, langs)
    sitemap.write_text(xml, encoding="utf-8")

    print(f"Regenerated {sitemap} with {len(langs)} languages")
    print("Languages:", ", ".join(langs))
    print("Per-page lastmod:")
    for path, _cf, _pr, sources in PAGES:
        print(f"  {(path or '/'): <20s} → {git_lastmod(repo_root, sources)}")


if __name__ == "__main__":
    main()
