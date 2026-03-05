# Task List - Dashboard Manager Dver

Ce document définit les tâches d'implémentation pour l'infrastructure de déploiement et d'authentification du Dashboard Manager Dver, conformément au design approuvé.

## Phase 1 : Infrastructure Docker & Proxy Auth

1. [ ] Configurer le `docker-compose.yaml` de base pour le sidecar d'authentification
   - Définir le service `dashboard-app` (image placeholder pour l'instant)
   - Définir le service `auth-proxy` utilisant l'image `bitnami/oauth2-proxy` ou équivalent
   - Configurer le réseau interne Docker pour que seul le proxy soit exposé
   - *Référence : Requirement 4.1, Design Architecture*

2. [ ] Mettre en place la configuration GitHub OAuth sécurisée
   - Préparer un fichier `.env.example` avec les variables nécessaires (`OAUTH2_PROXY_CLIENT_ID`, `OAUTH2_PROXY_CLIENT_SECRET`, `OAUTH2_PROXY_COOKIE_SECRET`)
   - Configurer le proxy pour utiliser GitHub comme provider
   - *Référence : Requirement 3, Requirement 4.2*

3. [ ] Implémenter la restriction d'accès exclusive à `zozo-claw`
   - Configurer le flag `--authenticated-emails-file` ou `--allowed-user=zozo-claw` dans le proxy
   - Vérifier que toute autre tentative de connexion GitHub retourne une erreur 403
   - *Référence : Requirement 1.1, Requirement 4.3*

4. [ ] Configurer la persistance et la sécurité des sessions
   - Définir la durée de validité du cookie à 24h
   - Activer les flags `cookie-secure` et `cookie-httponly`
   - *Référence : Requirement 4.4, Design Data Models*

## Phase 2 : Validation & Tests

5. [ ] Création d'un script de test de connectivité
   - Vérifier que l'accès direct à l'application `dashboard-app` est impossible depuis l'extérieur
   - Vérifier la redirection vers GitHub OAuth lors de l'accès via le proxy
   - *Référence : Design Testing Strategy*

6. [ ] Documentation du déploiement
   - Rédiger un `README.md` dans le dossier de déploiement expliquant comment lancer l'instance et injecter les secrets
   - *Référence : Requirement 2*

## Questions Ouvertes
- Léo, as-tu déjà un Client ID / Secret GitHub généré pour `zozo-claw` ou dois-je inclure une tâche pour leur création ?
