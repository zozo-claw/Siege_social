# Requirements Document - Dashboard Manager Dver

## Introduction

Ce document définit les spécifications du Dashboard Manager de Dver, l'interface de pilotage centralisée pour le Fondateur (Marius) et le DGD (Zozo). Le Dashboard permet de superviser l'organigramme de la DSI, de suivre les performances des agents (humains et IA), de gérer les coûts et de valider les demandes critiques.

## Requirements

### Requirement 1: Supervision de l'Organigramme et des Agents

**User Story:** En tant que Zozo (DGD), je veux visualiser l'organigramme dynamique et les fiches agents, afin de monitorer l'activité de la DSI en temps réel.

#### Acceptance Criteria

1. **Onglet Organigramme** : WHEN l'utilisateur ouvre l'onglet THE system SHALL afficher un arbre visuel cliquable incluant Marius (CEO), Zozo (DGD), Léo (DevOps) et Nora (Fullstack).
2. **Statut Temps Réel** : THE system SHALL indiquer visuellement si chaque agent est "Actif" ou "Idle".
3. **Onglet Agent** : WHEN un utilisateur clique sur un agent THE system SHALL afficher une fiche détaillée contenant : sa mission, ses fichiers de travail, ses dernières actions et un accès à sa mémoire.

---

### Requirement 2: Pilotage Projet et Monitoring (Timeline & Logs)

**User Story:** En tant que Marius (CEO), je veux suivre l'avancement des projets et les échanges inter-agents, afin d'assurer la cohérence de la roadmap.

#### Acceptance Criteria

1. **Onglet Timeline** : THE system SHALL afficher la roadmap des projets classée par direction (DSI, Sales, Produit, Marketing).
2. **Onglet Conversations** : THE system SHALL centraliser et afficher les logs des échanges inter-agents pour une traçabilité complète.

---

### Requirement 3: Gestion des Ressources et Approbations (Coûts & Demandes)

**User Story:** En tant que DGD, je veux contrôler les coûts API et valider les demandes des agents, afin de garantir une gestion efficiente des ressources.

#### Acceptance Criteria

1. **Onglet Coûts API** : THE system SHALL afficher un dashboard de consommation (tokens et euros) par agent et par semaine.
2. **Onglet Demandes** : WHEN un agent demande un nouveau skill ou un accès API THE system SHALL placer la demande dans une file d'approbation.
3. **Validation/Rejet** : THE system SHALL permettre à Zozo de valider ou rejeter chaque demande avec une notification immédiate à l'agent concerné.

---

### Requirement 4: Structure de l'Organisation (Initialisation)

**User Story:** En tant qu'administrateur, je veux que la structure organisationnelle soit définie selon le plan Dver, afin de refléter la hiérarchie réelle.

#### Acceptance Criteria

1. THE system SHALL intégrer la structure suivante : CEO -> DGD -> DSI (Léo, Nora).
2. THE system SHALL prévoir des emplacements vides (placeholders) pour les directions "Sales & Growth", "Produit/UX" et "Marketing" à créer.

## Out of Scope

- Recrutement automatisé d'agents externes.
- Gestion comptable avancée au-delà des coûts API.
- Modification directe du code source des agents via le Dashboard (réservé à Léo/Nora).

## Open Questions

- [ ] Quel outil de visualisation pour l'organigramme (React Flow, D3.js) ?
- [ ] La timeline doit-elle être synchronisée avec un outil externe (GitHub Projects, Linear) ?
- [ ] Quel est le seuil d'alerte pour les coûts API hebdomadaires ?
