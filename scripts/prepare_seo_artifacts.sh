#!/usr/bin/env bash

set -euo pipefail

REPO_ROOT="$(cd "$(dirname "$0")/.." && pwd)"
cd "$REPO_ROOT"

echo "[SEO] Regenerating sitemap.xml from language-config..."
python3 scripts/regenerate_sitemap.py

echo "[SEO] Validating SEO artifacts..."
python3 scripts/validate_seo_artifacts.py

echo "[SEO] Artifacts prepared successfully."
