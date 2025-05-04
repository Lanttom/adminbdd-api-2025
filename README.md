# 📘 README – Projet API AdminBDD (Next.js + MongoDB + Swagger)

Ce projet est une API RESTful construite avec **Next.js**, connectée à une base **MongoDB Atlas**, documentée avec **Swagger**, et répondant au cahier des charges du module **BDOE633 – Administration et Optimisation des Données**.

---

## 🔗 Liens

| Ressource                | Lien                                                                                             |
| ------------------------ | ------------------------------------------------------------------------------------------------ |
| 📦 Dépôt GitHub          | [https://github.com/brikodepo/adminbdd-api-2025](https://github.com/brikodepo/adminbdd-api-2025) |
| 🌐 API déployée (Vercel) | [https://adminbdd-espi-api.vercel.app](https://adminbdd-api-2025.vercel.app/)                    |
| 📚 Swagger documentation | [https://adminbdd-espi-api.vercel.app/api-doc](https://adminbdd-espi-api.vercel.app/api-doc)     |

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
