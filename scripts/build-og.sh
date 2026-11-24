#!/usr/bin/env bash
# Genera public/og.png desde scripts/og.html con un Chromium headless local.
# Uso:
#   npm run og
#   CHROME=/ruta/a/chrome npm run og
set -euo pipefail

ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
OUT="$ROOT/public/og.png"
CANDIDATES=(
  "${CHROME:-}"
  "$HOME/.cache/ms-playwright/chromium-1255/chrome-linux64/chrome"
  "$HOME/.cache/ms-playwright/chromium-1255/chrome-linux/chrome"
  "/usr/bin/chromium"
  "/usr/bin/chromium-browser"
  "/usr/bin/google-chrome"
  "/usr/bin/google-chrome-stable"
)

CHROME_BIN=""
for candidate in "${CANDIDATES[@]}"; do
  if [ -n "$candidate" ] && [ -x "$candidate" ]; then
    CHROME_BIN="$candidate"
    break
  fi
done

if [ -z "$CHROME_BIN" ]; then
  echo "No se encontró Chromium. Instalá uno o definí CHROME=/ruta/a/chrome." >&2
  exit 1
fi

"$CHROME_BIN" \
  --headless=new \
  --no-sandbox \
  --disable-gpu \
  --hide-scrollbars \
  --window-size=1200,630 \
  --force-device-scale-factor=1 \
  --virtual-time-budget=4000 \
  --screenshot="$OUT" \
  "file://$ROOT/scripts/og.html" >/dev/null 2>&1

echo "Imagen social generada en $OUT"
