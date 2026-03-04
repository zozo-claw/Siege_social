# Requirements Document - Dashboard Manager Dver

## Introduction

Ce document définit les spécifications du Dashboard Manager de Dver, l'interface de pilotage centralisée pour le Fondateur (Marius) et le DGD (Zozo). Le Dashboard permet de superviser l'organigramme de la DSI, de suivre les performances des agents (humains et IA), de gérer les coûts et de valider les demandes critiques.

## Requirements

### Requirement 1: Supervision de l'Organigramme et des Agents

**User Story:** En tant que Zozo (DGD), je veux visualiser l'organigramme dynamique et les fiches agents, afin de monitorer l'activité de la DSI en temps réel.

#### Acceptance Criteria

1. **Onglet Organigramme** : WHEN l'utilisateur ouvre l'onglet THE system SHALL afficher un arbre visuel cliquable (React Flow) incluant Marius (CEO), Zozo (DGD), Léo (DevOps) et Nora (Fullstack).
2. **Statut Temps Réel** : THE system SHALL indiquer visuellement si chaque agent est "Actif" ou "Idle".
3. **Onglet Agent** : WHEN un utilisateur clique sur un agent THE system SHALL afficher une fiche détaillée contenant : sa mission, ses fichiers de travail, ses dernières actions et un accès à sa mémoire.

---

### Requirement 2: Pilotage Projet et Monitoring (Timeline & Logs)

**User Story:** En tant que Marius (CEO), je veux suivre l'avancement des projets et les échanges inter-agents, afin d'assurer la cohérence de la roadmap.

#### Acceptance Criteria

1. **Onglet Timeline** : THE system SHALL afficher la roadmap des projets, synchronisée avec les GitHub Projects du dépôt "Siege_social".
2. **Onglet Conversations** : THE system SHALL centraliser et afficher les logs des échanges inter-agents récupérés via l'API OpenClaw.

---

### Requirement 3: Gestion des Ressources et Approbations (Coûts & Demandes)

**User Story:** En tant que DGD, je veux contrôler les coûts API et valider les demandes des agents, afin de garantir une gestion efficiente des ressources.

#### Acceptance Criteria

1. **Onglet Coûts API** : THE system SHALL afficher un dashboard de consommation (tokens et euros) par agent et par semaine.
2. **Alerte Budgétaire** : IF les coûts hebdomadaires dépassent 20 $ THEN THE system SHALL envoyer une notification critique à Zozo et Marius.
3. **Onglet Demandes** : WHEN un agent demande un nouveau skill ou un accès API THE system SHALL placer la demande dans une file d'approbation cliquable.

---

### Requirement 4: Accessibilité, Production et Sécurité

**User Story:** En tant que Fondateur, je veux accéder au Dashboard en production via le web de manière sécurisée, afin de piloter Dver de n'importe où.

#### Acceptance Criteria

1. **Déploiement Web** : THE system SHALL être accessible via un nom de domaine sécurisé (HTTPS).
2. **Authentification Forte** : WHEN un utilisateur accède au Dashboard THE system SHALL exiger une authentification sécurisée (ex: OAuth2 / GitHub Auth).
3. **Sécurité Infrastructure** : IF un accès non autorisé est détecté THEN THE system SHALL bloquer l'IP et notifier les administrateurs (Léo).

## Out of Scope

- Recrutement automatisé d'agents externes.
- Modification directe du code source des agents via le Dashboard (réservé aux Pull Requests via Nora/Léo).

## Open Questions

- [ ] L'authentification GitHub est-elle privilégiée pour Marius et Zozo ?
- [ ] Quelle plateforme de hosting pour la production (Vercel, AWS, VPS Dver) ?
