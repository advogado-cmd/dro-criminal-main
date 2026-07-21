#!/usr/bin/env bash
# Evento de conversao no subdominio CRIMINAL:
#  - components/wa-tracker.tsx  (rastreia todo clique wa.me -> cta_whatsapp, site: "criminal")
#  - app/layout.tsx            (monta o <WaTracker site="criminal" />)
set -e
cd "$(dirname "$0")"
rm -f .git/index.lock
BRANCH="analytics-criminal-$(date +%Y%m%d-%H%M%S)"
git checkout -b "$BRANCH"
git add -A
git commit --no-verify -m "feat(analytics): rastreio cta_whatsapp (site: criminal) via WaTracker"
git push --no-verify -u origin HEAD
echo ""
echo "Branch enviada: $BRANCH — abra o PR no repo do criminal e faca o merge."
