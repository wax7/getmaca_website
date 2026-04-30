#!/usr/bin/env bash
# Konvertiert alle PNGs in src/assets und src/public zu WebP via cwebp (libwebp).
# Idempotent: regeneriert WebP nur, wenn PNG neuer als WebP ist.
set -euo pipefail

ROOT="$(cd "$(dirname "$0")/.." && pwd)"
QUALITY="${WEBP_QUALITY:-82}"
DIRS=("$ROOT/src/assets" "$ROOT/src/public")

if ! command -v cwebp >/dev/null 2>&1; then
  echo "✗ cwebp nicht gefunden. Install: brew install webp" >&2
  exit 1
fi

CONVERTED=0
SKIPPED=0
TOTAL_PNG=0
TOTAL_WEBP=0

for DIR in "${DIRS[@]}"; do
  [ -d "$DIR" ] || continue
  while IFS= read -r -d '' PNG; do
    WEBP="${PNG%.png}.webp"
    PNG_SIZE=$(stat -f%z "$PNG")
    TOTAL_PNG=$((TOTAL_PNG + PNG_SIZE))
    if [ -f "$WEBP" ] && [ "$WEBP" -nt "$PNG" ]; then
      WEBP_SIZE=$(stat -f%z "$WEBP")
      TOTAL_WEBP=$((TOTAL_WEBP + WEBP_SIZE))
      SKIPPED=$((SKIPPED + 1))
      continue
    fi
    cwebp -quiet -q "$QUALITY" -m 6 "$PNG" -o "$WEBP"
    WEBP_SIZE=$(stat -f%z "$WEBP")
    TOTAL_WEBP=$((TOTAL_WEBP + WEBP_SIZE))
    CONVERTED=$((CONVERTED + 1))
    SAVING=$(( (PNG_SIZE - WEBP_SIZE) * 100 / PNG_SIZE ))
    printf "  ✓ %s  (%d KB → %d KB, -%d%%)\n" "$(basename "$PNG")" "$((PNG_SIZE/1024))" "$((WEBP_SIZE/1024))" "$SAVING"
  done < <(find "$DIR" -type f -name "*.png" -print0)
done

if [ "$TOTAL_PNG" -gt 0 ]; then
  TOTAL_SAVING=$(( (TOTAL_PNG - TOTAL_WEBP) * 100 / TOTAL_PNG ))
else
  TOTAL_SAVING=0
fi
echo ""
echo "═══ Ergebnis: $CONVERTED konvertiert, $SKIPPED übersprungen ═══"
echo "  PNG total:  $((TOTAL_PNG/1024)) KB"
echo "  WebP total: $((TOTAL_WEBP/1024)) KB"
echo "  Ersparnis:  $TOTAL_SAVING%"
