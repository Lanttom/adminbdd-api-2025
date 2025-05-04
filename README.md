# 📘 README – Projet API AdminBDD (Next.js + MongoDB + Swagger)

Ce projet est une API RESTful construite avec **Next.js**, connectée à une base **MongoDB Atlas**, documentée avec **Swagger**, et répondant au cahier des charges du module **BDOE633 – Administration et Optimisation des Données**.

---

## 🔗 Liens

| Ressource                     | Lien                                                             |
|------------------------------|------------------------------------------------------------------|
| 📦 Dépôt GitHub              | https://github.com/<ton-user>/adminbdd-espi-api                  |
| 🌐 API déployée (Vercel)     | https://adminbdd-espi-api.vercel.app                            |
| 📚 Swagger documentation     | https://adminbdd-espi-api.vercel.app/api-doc                    |

---

## 📌 Résumé des Endpoints

### 🎥 Movies

| Méthode | Endpoint              | Description                         |
|--------:|-----------------------|-------------------------------------|
| GET     | `/api/movies`         | Liste tous les films                |
| GET     | `/api/movies/[id]`    | Récupère un film par ID             |
| POST    | `/api/movies`         | Ajoute un film                      |
| PUT     | `/api/movies/[id]`    | Met à jour un film existant         |
| DELETE  | `/api/movies/[id]`    | Supprime un film                    |
| GET     | `/api/movies/search`  | Recherche plein texte par `title`   |

### 👤 Users

| Méthode | Endpoint              | Description                         |
|--------:|-----------------------|-------------------------------------|
| GET     | `/api/users`          | Liste tous les utilisateurs         |
| GET     | `/api/users/[id]`     | Récupère un utilisateur             |
| POST    | `/api/users`          | Crée un utilisateur                 |
| PUT     | `/api/users/[id]`     | Met à jour un utilisateur           |
| DELETE  | `/api/users/[id]`     | Supprime un utilisateur             |

### 💬 Comments

| Méthode | Endpoint                | Description                         |
|--------:|-------------------------|-------------------------------------|
| GET     | `/api/comments`         | Liste tous les commentaires         |
| GET     | `/api/comments/[id]`    | Récupère un commentaire             |
| POST    | `/api/comments`         | Ajoute un commentaire               |
| PUT     | `/api/comments/[id]`    | Met à jour un commentaire           |
| DELETE  | `/api/comments/[id]`    | Supprime un commentaire             |

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

---

## ✅ Fonctionnalités livrées

- ✅ API Next.js avec routes REST (`GET`, `POST`, `PUT`, `DELETE`)
- ✅ Connexion MongoDB Atlas avec `mongoose`
- ✅ Documentation Swagger disponible à `/api-doc`
- ✅ Déploiement sur Vercel avec variables `.env`
- ✅ Gestion des erreurs HTTP (400 / 404 / 500)
- ✅ Recherche textuelle avec `$search` de MongoDB Atlas

---

## 📤 Modalités de rendu

- **📅 Date limite :** Lundi 05 mai avant 8h00
- **✉️ Mail à envoyer à :** [julien.couraud@mail-formateur.net](mailto:julien.couraud@mail-formateur.net)
- **Objet :** `[B3ASRBD-BDD] Nom Prénom`
- **Contenu du mail :**
  - ✔️ Lien vers le dépôt GitHub
  - ✔️ URL de l’API sur Vercel
  - ✔️ Ce fichier README.md ou sa version PDF

---

Développé par : **Nom Prénom** – ESPI B3 2025

---

> ✨ Ce projet suit les bonnes pratiques de développement web backend avec API REST, MongoDB, Swagger, et déploiement cloud.
