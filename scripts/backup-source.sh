#!/bin/bash

# Faz commit e push do codigo fonte antes do deploy,
# garantindo backup da branch atual no GitHub.

BRANCH=$(git rev-parse --abbrev-ref HEAD)
TIMESTAMP=$(date "+%Y-%m-%d %H:%M")

# Verifica se tem algo pra commitar
if git diff --quiet && git diff --cached --quiet; then
  echo "✅ Nenhuma alteracao pendente. Pulando commit."
else
  echo "💾 Salvando alteracoes na branch '$BRANCH'..."
  git add -A
  git commit -m "chore: backup pre-deploy ($TIMESTAMP)"
fi

echo "📤 Fazendo push para origin/$BRANCH..."
git push origin "$BRANCH"

if [ $? -ne 0 ]; then
  echo "❌ Falha no push. Verifique sua conexao ou permissoes."
  exit 1
fi

echo "✅ Backup concluido."
