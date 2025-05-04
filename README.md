<<<<<<< HEAD
# 📘 README – Projet API AdminBDD (Next.js + MongoDB + Swagger)

Ce projet est une API RESTful construite avec **Next.js**, connectée à une base **MongoDB Atlas**, documentée avec **Swagger**, et développée dans le cadre du module **BDOE633 – Administration et Optimisation des Données**.

> À l’ouverture du site, l’utilisateur arrive sur une page erreur 404 il faut rajouter /api-doc afin d'être automatiquement redirigé vers la documentation Swagger.

---

## 🔗 Liens

| Ressource                | Lien                                                                                                               |
| ------------------------ | ------------------------------------------------------------------------------------------------------------------ |
| 📦 Dépôt GitHub          | [https://github.com/Lanttom/adminbdd-api-2025](https://github.com/Lanttom/adminbdd-api-2025)                      |
| 🌐 API déployée (Vercel) | [https://adminbdd-api-2025-git-main-antonys-projects-8b15630d.vercel.app](https://adminbdd-api-2025-git-main-antonys-projects-8b15630d.vercel.app) |
| 📚 Swagger documentation | [https://adminbdd-api-2025-git-main-antonys-projects-8b15630d.vercel.app/api-doc](https://adminbdd-api-2025-git-main-antonys-projects-8b15630d.vercel.app/api-doc) |
---

## 📌 Résumé des Endpoints

### 🎥 Movies

| Méthode | Endpoint                                     | Description                              |
| ------: | -------------------------------------------- | ---------------------------------------- |
|     GET | `/api/movies`                                | Liste tous les films                     |
|     GET | `/api/movies/[idMovie]`                      | Récupère un film par ID                  |
|    POST | `/api/movies`                                | Ajoute un film                           |
|     PUT | `/api/movies/[idMovie]`                      | Met à jour un film existant              |
|  DELETE | `/api/movies/[idMovie]`                      | Supprime un film                         |
|     GET | `/api/movies/search`                         | Recherche plein texte par `title`        |
|     GET | `/api/movies/[idMovie]/comments`             | Récupère tous les commentaires d’un film |
|    POST | `/api/movies/[idMovie]/comments`             | Ajoute un commentaire pour un film       |
|     GET | `/api/movies/[idMovie]/comments/[idComment]` | Récupère un commentaire précis           |
|     PUT | `/api/movies/[idMovie]/comments/[idComment]` | Met à jour un commentaire                |
|  DELETE | `/api/movies/[idMovie]/comments/[idComment]` | Supprime un commentaire                  |

### 🏢 Theaters

| Méthode | Endpoint                    | Description                           |
| ------: | --------------------------- | ------------------------------------- |
|     GET | `/api/theaters`             | Liste tous les théâtres et cinémas    |
|     GET | `/api/theaters/[idTheater]` | Récupère un théâtre ou cinéma par ID  |
|    POST | `/api/theaters/[idTheater]` | Crée un théâtre avec un ID spécifique |
|     PUT | `/api/theaters/[idTheater]` | Met à jour un théâtre existant        |
|  DELETE | `/api/theaters/[idTheater]` | Supprime un théâtre                   |

---

## ⚙️ Exemples d’utilisation

### ➕ POST /api/movies

```bash
curl -X POST https://adminbdd-espi-api.vercel.app/api/movies \
-H "Content-Type: application/json" \
-d '{"title": "Inception", "year": 2010, "genre": "Sci-Fi"}'
```

### 🔍 GET /api/movies/search?q=inception

```bash
curl https://adminbdd-espi-api.vercel.app/api/movies/search?q=inception
```

### 🏢 POST /api/theaters/{idTheater}

```bash
curl -X POST https://adminbdd-espi-api.vercel.app/api/theaters/59a47286cfa9a3a73e51e72c \
-H "Content-Type: application/json" \
-d '{
  "theaterId": 1000,
  "location": {
    "address": {
      "street1": "340 W Market",
      "city": "Bloomington",
      "state": "MN",
      "zipcode": "55425"
    },
    "geo": {
      "type": "Point",
      "coordinates": [-93.24565, 44.85466]
    }
  }
}'
```

---

## ✅ Fonctionnalités livrées

* ✅ API Next.js avec routes REST (`GET`, `POST`, `PUT`, `DELETE`)
* ✅ Connexion MongoDB Atlas avec client Mongo natif
* ✅ Documentation Swagger disponible à `/api-doc`
* ✅ Déploiement sur Vercel avec variables `.env`
* ✅ Gestion des erreurs HTTP (400 / 404 / 500)
* ✅ Recherche textuelle avec `$search` de MongoDB Atlas

---

Développé par : **LOZANO Antony & REZÉ Rémi** – ESPI B3 2025
=======
## Example app using MongoDB

[MongoDB](https://www.mongodb.com/) is a general purpose, document-based, distributed database built for modern application developers and for the cloud era. This example will show you how to connect to and use MongoDB as your backend for your Next.js app.

If you want to learn more about MongoDB, visit the following pages:

- [MongoDB Atlas](https://mongodb.com/atlas)
- [MongoDB Documentation](https://docs.mongodb.com/)

## Deploy your own

Once you have access to the environment variables you'll need, deploy the example using [Vercel](https://vercel.com?utm_source=github&utm_medium=readme&utm_campaign=next-example) or preview live with [StackBlitz](https://stackblitz.com/github/vercel/next.js/tree/canary/examples/with-mongodb)

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?project-name=with-mongodb&repository-name=with-mongodb&repository-url=https%3A%2F%2Fgithub.com%2Fvercel%2Fnext.js%2Ftree%2Fcanary%2Fexamples%2Fwith-mongodb&integration-ids=oac_jnzmjqM10gllKmSrG0SGrHOH)

## How to use

Execute [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app) with [npm](https://docs.npmjs.com/cli/init), [Yarn](https://yarnpkg.com/lang/en/docs/cli/create/), or [pnpm](https://pnpm.io) to bootstrap the example:

```bash
npx create-next-app --example with-mongodb with-mongodb-app
```

```bash
yarn create next-app --example with-mongodb with-mongodb-app
```

```bash
pnpm create next-app --example with-mongodb with-mongodb-app
```

## Configuration

### Set up a MongoDB database

Set up a MongoDB database either locally or with [MongoDB Atlas for free](https://mongodb.com/atlas).

### Set up environment variables

Copy the `env.local.example` file in this directory to `.env.local` (which will be ignored by Git):

```bash
cp .env.local.example .env.local
```

Set each variable on `.env.local`:

- `MONGODB_URI` - Your MongoDB connection string. If you are using [MongoDB Atlas](https://mongodb.com/atlas) you can find this by clicking the "Connect" button for your cluster.

### Run Next.js in development mode

```bash
npm install
npm run dev
# or
yarn install
yarn dev
# or
pnpm install
pnpm dev
```

Your app should be up and running on [http://localhost:3000](http://localhost:3000)! If it doesn't work, post on [GitHub discussions](https://github.com/vercel/next.js/discussions).

You will either see a message stating "You are connected to MongoDB" or "You are NOT connected to MongoDB". Ensure that you have provided the correct `MONGODB_URI` environment variable.

When you are successfully connected, you can refer to the [MongoDB Node.js Driver docs](https://mongodb.github.io/node-mongodb-native/3.4/tutorials/collections/) for further instructions on how to query your database.

## Deploy on Vercel

You can deploy this app to the cloud with [Vercel](https://vercel.com?utm_source=github&utm_medium=readme&utm_campaign=next-example) ([Documentation](https://nextjs.org/docs/deployment)).

#### Deploy Your Local Project

To deploy your local project to Vercel, push it to GitHub/GitLab/Bitbucket and [import to Vercel](https://vercel.com/new?utm_source=github&utm_medium=readme&utm_campaign=next-example).

**Important**: When you import your project on Vercel, make sure to click on **Environment Variables** and set them to match your `.env.local` file.

#### Deploy from Our Template

Alternatively, you can deploy using our template by clicking on the Deploy button below.

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?project-name=with-mongodb&repository-name=with-mongodb&repository-url=https%3A%2F%2Fgithub.com%2Fvercel%2Fnext.js%2Ftree%2Fcanary%2Fexamples%2Fwith-mongodb&integration-ids=oac_jnzmjqM10gllKmSrG0SGrHOH)
>>>>>>> 2593212 (Version finale API AdminBDD 2025)
