#!/usr/bin/env python3
"""Regenerate src/public/sitemap.xml from language-config source of truth."""

from __future__ import annotations

import datetime
import re
from pathlib import Path

BASE_URL = "https://getmaca.de"
LASTMOD = datetime.date.today().isoformat()

PAGES = [
    ("", "weekly", "1.0"),
    ("/guide", "weekly", "0.9"),
    ("/faq", "weekly", "0.8"),
    ("/imprint", "yearly", "0.6"),
    ("/privacy", "yearly", "0.6"),
    ("/terms", "yearly", "0.6"),
    ("/troubleshooting", "weekly", "0.7"),
]


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


def make_url_entry(lang: str, path: str, changefreq: str, priority: str, all_langs: list[str]) -> str:
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
            f"    <lastmod>{LASTMOD}</lastmod>",
            f"    <changefreq>{changefreq}</changefreq>",
            f"    <priority>{priority}</priority>",
            *links,
            "  </url>",
        ]
    )


def build_sitemap(langs: list[str]) -> str:
    lines: list[str] = [
        '<?xml version="1.0" encoding="UTF-8"?>',
        '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"',
        '        xmlns:xhtml="http://www.w3.org/1999/xhtml">',
        "",
    ]

    for lang in langs:
        for path, changefreq, priority in PAGES:
            lines.append(make_url_entry(lang, path, changefreq, priority, langs))
            lines.append("")

    lines.append("</urlset>")
    lines.append("")
    return "\n".join(lines)


def main() -> None:
    repo_root = Path(__file__).resolve().parent.parent
    config = repo_root / "src" / "utils" / "language-config.ts"
    sitemap = repo_root / "src" / "public" / "sitemap.xml"

    langs = parse_supported_languages(config)
    xml = build_sitemap(langs)
    sitemap.write_text(xml, encoding="utf-8")

    print(f"Regenerated {sitemap} with {len(langs)} languages")
    print("Languages:", ", ".join(langs))


if __name__ == "__main__":
    main()
