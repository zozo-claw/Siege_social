# Design Document - Dashboard Manager Dver

## Overview
L'objectif est de concevoir l'infrastructure de déploiement pour le Dashboard Manager Dver. Ce design se concentre sur la conteneurisation via Docker et la mise en œuvre d'une couche d'authentification robuste via GitHub OAuth, restreinte exclusivement à l'utilisateur `zozo-claw`.

## Architecture
Le système sera composé de deux services principaux orchestrés par Docker Compose :
1. **Dver Dashboard App** : L'application web React/Next.js (ou équivalent).
2. **Auth Proxy** : Un sidecar gérant l'authentification OAuth2 (le choix spécifique de l'outil est délégué à Léo, DevOps).

```mermaid
graph TD
    User[Navigateur Utilisateur] --> AuthProxy[Auth Proxy / Reverse Proxy]
    AuthProxy -->|OAuth Flow| GitHub[GitHub OAuth API]
    GitHub -->|Validation zozo-claw| AuthProxy
    AuthProxy -->|Proxy Pass| App[Dver Dashboard App]
```

## Components and Interfaces

### 1. Auth Proxy
- **Rôle** : Intercepter toutes les requêtes entrantes.
- **Fonctionnement** : 
  - Rediriger les utilisateurs non authentifiés vers GitHub.
  - Vérifier l'ID utilisateur GitHub après connexion.
  - Ne laisser passer que le compte `zozo-claw`.
- **Configuration** : Injectée via variables d'environnement (`CLIENT_ID`, `CLIENT_SECRET`, `ALLOWED_USERS`).

### 2. Dver Dashboard App
- **Rôle** : Servir l'interface de pilotage.
- **Interface** : API REST / WebSocket pour communiquer avec les agents OpenClaw.

## Dashboards et Fonctionnalités

### 1. Supervision de l'Organigramme (Requirement 1)
- **Frontend** : Utilisation de **React Flow** pour le rendu de l'arbre dynamique.
- **Backend** : Un endpoint API `GET /api/organigramme` renvoyant la structure (Marius, Zozo, Léo, Nora) et leur état (Actif/Idle) récupéré via le status OpenClaw.

### 2. Timeline et Logs (Requirement 2)
- **Intégration GitHub** : Le dashboard interroge l'API GitHub (repo `Siege_social`) pour extraire les projets et la roadmap.
- **Centralisation des Logs** : Intégration avec l'API OpenClaw pour streamer les logs de conversations inter-agents en lecture seule.

### 3. Gestion des Coûts et Approbations (Requirement 3)
- **Monitoring Coûts** : Agrégation des données de consommation (tokens/USD) par agent via les métriques OpenClaw.
- **Système d'Alertes** : Un service de background vérifie le seuil des 20$ et déclenche une notification via le canal Telegram du Dashboard.
- **File d'Approbation** : Interface dédiée pour lister les `pending_requests` des agents, avec boutons "Approve" (POST /api/approve) et "Reject".

## Data Models
- **Session** : Stockée via un cookie sécurisé (HttpOnly, Secure) généré par le Proxy d'Auth.
- **Coûts** : Cache local des métriques de consommation pour éviter les appels API excessifs.
- **Approbations** : Stockage persistant des demandes en attente de validation.

## Error Handling
- **401 Unauthorized** : Redirection vers le flux de login GitHub.
- **403 Forbidden** : Affiché si un utilisateur GitHub autre que `zozo-claw` tente de se connecter.
- **Downstream Error** : Si l'App est indisponible, le Proxy doit retourner une 503 propre.

## Testing Strategy
- **Test d'accès** : Vérifier qu'une tentative avec un compte GitHub tiers est bloquée.
- **Test d'identité** : Vérifier que `zozo-claw` accède bien au Dashboard.
- **Test de persistance** : Vérifier que le rafraîchissement de la page ne demande pas de reconnexion immédiate.

## Décisions de Design
- **Choix du Proxy** : Délégué à Léo (DevOps) pour s'assurer de la cohérence avec l'infrastructure existante (ex: `oauth2-proxy`, Traefik forward-auth, etc.).
- **Nom de domaine** : Configuration flexible pour permettre un mapping ultérieur.
