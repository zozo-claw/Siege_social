# Requirements Document - Projet Dver

## Introduction

Le projet Dver est une solution de gestion technique et opérationnelle pour la DSI. Il vise à digitaliser les processus de terrain, centraliser la remontée d'informations et offrir un pilotage stratégique via un dashboard manager. L'objectif est d'éliminer le papier, réduire les erreurs de saisie et accélérer le cycle de décision.

## Requirements

### Requirement 1: Application Terrain (Collecte de données)

**User Story:** En tant qu'agent de terrain, je veux pouvoir saisir des rapports d'intervention directement sur mon mobile, afin de transmettre les informations en temps réel au siège.

#### Acceptance Criteria

1. WHEN l'agent ouvre l'application THE system SHALL afficher les interventions assignées du jour.
2. WHEN l'agent remplit un rapport d'intervention THE system SHALL permettre l'ajout de photos et de commentaires textuels.
3. IF l'agent est hors-ligne THEN THE system SHALL stocker les données localement et les synchroniser dès qu'une connexion est rétablie.
4. WHEN le rapport est validé par l'agent THE system SHALL notifier immédiatement le manager via le back-office.

---

### Requirement 2: Dashboard Manager (Pilotage)

**User Story:** En tant que manager DSI, je veux visualiser l'état global des interventions et la performance des équipes, afin d'optimiser l'allocation des ressources.

#### Acceptance Criteria

1. WHEN le manager se connecte THE system SHALL afficher une carte interactive montrant la position et le statut des interventions en cours.
2. THE system SHALL générer des graphiques de performance hebdomadaires (taux de complétion, temps moyen d'intervention).
3. IF une intervention dépasse le délai imparti THEN THE system SHALL afficher une alerte visuelle critique sur le dashboard.

---

### Requirement 3: Administration et Sécurité

**User Story:** En tant qu'administrateur, je veux gérer les accès et les rôles, afin de garantir la confidentialité et l'intégrité des données techniques.

#### Acceptance Criteria

1. WHEN un utilisateur tente de se connecter THE system SHALL vérifier ses identifiants via une authentification sécurisée.
2. IF l'utilisateur a un rôle "Agent" THEN THE system SHALL restreindre l'accès au cockpit manager et aux fonctions d'administration.
3. THE system SHALL journaliser (log) toutes les modifications critiques apportées aux configurations du système.

---

## Out of Scope

- Gestion de la paie et des ressources humaines.
- Facturation directe aux clients finaux dans cette première phase.
- Intégration avec des systèmes tiers complexes (ERP externe) non spécifiés.

## Open Questions

- [ ] Quel est le secteur d'activité précis pour adapter les formulaires terrain (BTP, Télécoms, Maintenance industrielle) ?
- [ ] L'authentification doit-elle être couplée à un annuaire existant (Azure AD, Google Workspace) ?
- [ ] Quel est le volume estimé de photos/données par jour pour dimensionner le stockage ?
