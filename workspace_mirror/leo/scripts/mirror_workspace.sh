#!/bin/bash
# Script de Mirroring Workspace OpenClaw -> GitHub
# Ce script synchronise le workspace des agents vers le repo GitHub pour assurer une transparence totale.

WORKSPACE_PATH="/home/ubuntu/.openclaw/workspace"
REPO_PATH="/home/ubuntu/.openclaw/workspace/agents/leo/repos/Siege_social"
BACKUP_DIR="$REPO_PATH/workspace_mirror"

# 1. Préparation de la structure miroir
mkdir -p "$BACKUP_DIR"

# 2. Synchronisation des dossiers agents (exclusion des dossiers système et secrets)
# On exclut .git, node_modules, .env pour la sécurité et la performance.
rsync -av --progress \
    --exclude '.git/' \
    --exclude 'node_modules/' \
    --exclude '.env*' \
    --exclude 'secrets/' \
    --exclude '.vscode/' \
    "$WORKSPACE_PATH/agents/" "$BACKUP_DIR/"

# 3. Commit et Push sur GitHub
cd "$REPO_PATH"
git add workspace_mirror/
git commit -m "sync: auto-mirror of openclaw workspace agents ($(date +'%Y-%m-%d %H:%M:%S'))"
git push origin main
