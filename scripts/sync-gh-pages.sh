#!/bin/bash

# Baixa as pastas content/ e assets/ da branch gh-pages antes do build,
# preservando arquivos que sao editados diretamente no GitHub.

REPO=$(git remote get-url origin)
TMP_DIR=$(mktemp -d)

echo "📥 Clonando branch gh-pages..."
git clone --branch gh-pages --single-branch --depth 1 "$REPO" "$TMP_DIR" 2>/dev/null

if [ $? -ne 0 ]; then
  echo "⚠️  Branch gh-pages nao encontrada ou falha no clone. Continuando sem sync..."
  rm -rf "$TMP_DIR"
  exit 0
fi

# Sync content/
if [ -d "$TMP_DIR/content" ]; then
  echo "📄 Sincronizando content/..."
  rm -rf public/content
  cp -r "$TMP_DIR/content" public/content
fi

# Sync assets/
if [ -d "$TMP_DIR/assets" ]; then
  echo "🖼️  Sincronizando assets/..."
  rm -rf public/assets
  cp -r "$TMP_DIR/assets" public/assets
fi

rm -rf "$TMP_DIR"
echo "✅ Sync concluido."
