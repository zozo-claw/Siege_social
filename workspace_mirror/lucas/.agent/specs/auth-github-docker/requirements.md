# Requirements - Authentification GitHub pour Image Docker

## Introduction
Ce projet vise à mettre en place un système d'authentification forte utilisant GitHub OAuth pour protéger l'accès à une application hébergée via Docker sur une instance propre. L'accès doit être restreint exclusivement au compte GitHub `zozo-claw`.

## User Stories & Acceptance Criteria

1. **Authentification exclusive**
   - **User Story**: En tant qu'administrateur, je veux que seul l'utilisateur GitHub `zozo-claw` puisse accéder à l'instance, afin de garantir la sécurité des accès.
   - **Acceptance Criteria**:
     - UNLESS l'utilisateur est authentifié via GitHub en tant que `zozo-claw`, THEN l'accès à l'application est bloqué (403 ou redirection vers login).
     - IF l'utilisateur GitHub est `zozo-claw`, THEN l'accès à l'application est autorisé.
     - IF un autre utilisateur GitHub tente de se connecter, THEN l'accès est refusé.

2. **Hébergement Docker**
   - **User Story**: En tant qu'ingénieur DevOps, je veux que la solution d'authentification soit déployable via Docker, afin de faciliter l'installation sur notre propre instance.
   - **Acceptance Criteria**:
     - La solution doit être fournie sous forme de configuration `docker-compose.yaml` ou `Dockerfile`.
     - L'image Docker doit pouvoir s'interfacer avec l'application cible (le "backend").

3. **Gestion des Secrets**
   - **User Story**: En tant que responsable sécurité, je veux que le token GitHub et les credentials OAuth soient gérés de manière sécurisée via des variables d'environnement ou des fichiers de secrets.
   - **Acceptance Criteria**:
     - Les variables `GITHUB_CLIENT_ID`, `GITHUB_CLIENT_SECRET` et le token de `zozo-claw` ne doivent pas être codés en dur dans les fichiers de configuration.
     - Le système doit permettre l'injection de ces secrets au runtime Docker.

4. **Persistance de Session**
   - **User Story**: En tant qu'utilisateur `zozo-claw`, je veux rester connecté pendant une durée raisonnable après m'être identifié, pour éviter de me reconnecter constamment.
   - **Acceptance Criteria**:
     - Un cookie de session sécurisé doit être utilisé pour maintenir l'état de connexion.
     - La session doit expirer après une période définie (ex: 24h).

## Questions en suspens
- Utilisons-nous un reverse proxy existant (Traefik, Nginx) ou devons-nous inclure un conteneur dédié pour l'authentification (ex: `oauth2-proxy`) ?
- Quel est le nom ou l'image Docker de l'application que nous devons protéger ?
