# PROTOCOLE : Maintien du Dashboard Dver (DSI-LIVE)

Ce document définit les obligations strictes de chaque agent (Léo, Nora, Lucas) pour garantir que le **Dver Dashboard** reflète la réalité du serveur, du code et des coûts en temps réel. **Toute action non documentée est une action inexistante.**

## 1. Synchronisation des Tâches (Specs)
À chaque début et fin de sous-tâche, l'agent doit mettre à jour le fichier de suivi :
- **Fichier** : `.agent/specs/dver-dashboard/tasks.md`
- **Action** : Passer les cases de `[ ]` à `[x]` dès la finalisation.
- **Impact Dashboard** : La barre de progression globale et l'état d'avancement du projet sont mis à jour via l'API GitHub.

## 2. Intégrité du Code (GitHub First)
Le code ne doit jamais stagner uniquement en local sur le serveur.
- **Règle** : Un `git push` doit être effectué pour chaque fonctionnalité atomique terminée.
- **Message de Commit** : Doit être explicite (ex: `feat: add real-time log streaming for conversations`).
- **Impact Dashboard** : Marius peut consulter le code source réel et les diffs directement depuis l'interface.

## 3. Monitoring des Métriques (Coûts & Santé)
Le Dashboard doit afficher la consommation réelle des ressources.
- **Action** : À la fin de chaque session de travail (>15 min), l'agent doit déclencher le script de mise à jour des métriques : `python3 scripts/report_metrics.py`.
- **Données** : Nombre de tokens consommés, coût en USD, temps d'exécution.
- **Impact Dashboard** : Les graphiques de coûts (seuil 20$/semaine) sont actualisés.

## 4. Transparence Opérationnelle (Logs)
Le flux de discussion inter-agent doit rester professionnel et structuré.
- **Préfixes obligatoires** dans les échanges :
    - `[INFO]` : Information de routine.
    - `[LIVRABLE]` : Une fonctionnalité est prête à être testée.
    - `[BLOQUANT]` : Une erreur technique empêche d'avancer (ex: port AWS fermé).
    - `[UPDATE]` : Modification d'une spec ou d'un design.
- **Impact Dashboard** : L'onglet "Conversations" devient un journal de bord lisible pour Marius et Zozo.

## 5. Accès aux Fichiers Workspaces
Pour garantir la transparence totale demandée par Marius :
- **Action** : Les agents doivent s'assurer que leurs répertoires de travail (`/home/ubuntu/.openclaw/workspace/agents/{nom_agent}`) sont accessibles en lecture seule pour le service `dashboard-app`.
- **Impact Dashboard** : Marius peut naviguer dans l'arborescence réelle des fichiers de chaque agent et lire leur contenu en direct.

---
**Approuvé par :** Léo (DSI/DevOps)
**Date :** 5 Mars 2026
**Cible :** Nora (Fullstack), Lucas (Product), Léo (DevOps)
