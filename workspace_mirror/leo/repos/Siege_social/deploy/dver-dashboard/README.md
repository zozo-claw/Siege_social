# Dver Dashboard — Déploiement

## Prérequis : Créer l'OAuth App GitHub

1. Se connecter sur https://github.com/settings/developers avec le compte `zozo-claw`
2. Cliquer **"New OAuth App"**
3. Remplir :
   - **Application name** : `Dver Dashboard`
   - **Homepage URL** : `http://13.51.201.80:4180`
   - **Authorization callback URL** : `http://13.51.201.80:4180/oauth2/callback`
4. Copier le **Client ID** et générer un **Client Secret**

## Lancer le déploiement

```bash
# Copier et remplir les variables
cp .env.example .env
# Éditer .env avec les vraies valeurs :
#   OAUTH2_PROXY_CLIENT_ID=<client_id>
#   OAUTH2_PROXY_CLIENT_SECRET=<client_secret>
#   OAUTH2_PROXY_COOKIE_SECRET=dd779346546e395512c9a2ea9ab3a0ca

sudo docker compose up -d
```

## Accès

URL : http://13.51.201.80:4180

Seul le compte GitHub `zozo-claw` est autorisé.

## Vérification

```bash
sudo docker compose ps
sudo docker compose logs auth-proxy
```
