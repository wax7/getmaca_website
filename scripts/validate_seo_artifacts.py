#!/usr/bin/env python3
"""Validate SEO-critical static artifacts for CI."""

from __future__ import annotations

import re
import sys
from pathlib import Path

REPO = Path(__file__).resolve().parent.parent
LANG_CONFIG = REPO / "src" / "utils" / "language-config.ts"
SITEMAP = REPO / "src" / "public" / "sitemap.xml"
ROBOTS = REPO / "src" / "public" / "robots.txt"
NGINX = REPO / "nginx" / "conf.d" / "default.conf"
FAVICON = REPO / "src" / "public" / "favicon.ico"
APPLE_ICON = REPO / "src" / "public" / "apple-touch-icon.png"


def parse_supported_languages(config_path: Path) -> list[str]:
    text = config_path.read_text(encoding="utf-8")
    m = re.search(
        r"SUPPORTED_LANGUAGES\s*:[^=]*=\s*\[(.*?)\]\s*as\s+const",
        text,
        re.S,
    )
    if not m:
        raise RuntimeError("Could not locate SUPPORTED_LANGUAGES in language-config.ts")
    langs = re.findall(r"'([^']+)'", m.group(1))
    if not langs:
        raise RuntimeError("SUPPORTED_LANGUAGES is empty")
    return langs


def fail(msg: str) -> None:
    print(f"ERROR: {msg}")


def main() -> int:
    errors: list[str] = []

    langs = parse_supported_languages(LANG_CONFIG)
    allowed_hreflang = set(langs) | {"x-default"}

    sitemap_text = SITEMAP.read_text(encoding="utf-8")
    robots_text = ROBOTS.read_text(encoding="utf-8")
    nginx_text = NGINX.read_text(encoding="utf-8")

    found_hreflang = set(re.findall(r'hreflang="([^"]+)"', sitemap_text))
    invalid = sorted(found_hreflang - allowed_hreflang)
    if invalid:
        errors.append(f"Invalid hreflang codes in sitemap.xml: {', '.join(invalid)}")

    if "hreflang=\"go\"" in sitemap_text or "https://getmaca.de/go" in sitemap_text:
        errors.append("Found invalid language 'go' in sitemap.xml")

    if "hreflang=\"no\"" in sitemap_text or "https://getmaca.de/no" in sitemap_text:
        errors.append("Found deprecated/unsupported language 'no' in sitemap.xml")

    if "x-robots-tag" in sitemap_text.lower():
        errors.append("sitemap.xml body contains x-robots-tag text unexpectedly")

    if re.search(r"(?im)^\s*crawl-delay:\s*\d+%\s*$", robots_text):
        errors.append("robots.txt uses percentage crawl-delay; must be an integer")

    if not re.search(r"(?im)^\s*crawl-delay:\s*\d+\s*$", robots_text):
        errors.append("robots.txt is missing numeric crawl-delay")

    if "X-Robots-Tag \"noindex\"" in nginx_text:
        errors.append("nginx sitemap location still sets X-Robots-Tag noindex")

    if not FAVICON.exists():
        errors.append("Missing src/public/favicon.ico")

    if not APPLE_ICON.exists():
        errors.append("Missing src/public/apple-touch-icon.png")

    if errors:
        for e in errors:
            fail(e)
        return 1

    print("SEO artifact validation passed")
    print("Languages:", ", ".join(langs))
    return 0


if __name__ == "__main__":
    sys.exit(main())
