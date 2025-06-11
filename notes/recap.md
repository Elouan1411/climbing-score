
## 🧩 **Structure de ton projet**

### 🔹 **Front-end mobile**

* **Outil** : Expo + React Native + TypeScript
* **Navigation** : `expo-router`
* **Design system** : `StyleSheet` + `Colors.ts` personnalisés
* **Thème clair/sombre** : géré dynamiquement via `useColorScheme()`

### 🔹 **Back-end**

* **Outil** : Node.js + Express
* **Hébergement** : [Render](https://render.com/) (gratuit)
* **Connexion DB** : 

### 🔹 **Base de données**

* **Outil** : Supabase (PostgreSQL)
* **URL** : `https://dplkwwyhbxmowuwkvqli.supabase.co`
* **Clé publique** : 
* **Clé privée (admin)** : 
* **Connexion back** : 

---

## 🚀 **Outils et services utilisés**

| Catégorie    | Nom                   | Utilité                           |
| ------------ | --------------------- | --------------------------------- |
| Frontend     | **Expo**              | Dev mobile (React Native)         |
| Backend      | **Node.js + Express** | API serveur                       |
| BDD          | **Supabase**          | Base PostgreSQL + Auth + Realtime |
| Hébergement  | **Render**            | Déploiement backend               |
| Versionning  | **GitHub**            | Code source                       |
| Navigation   | **expo-router**       | Routing + navigation tab          |

---

## 📱 **Commandes utiles pour le front (mobile)**

| Action                             | Commande                               |
| ---------------------------------- | -------------------------------------- |
| Lancer l’app sur ton téléphone     | `npx expo start --clear`                |
| Compiler l'app pour apk            | `npx eas build -p android --profile preview`    |

---

## 🔧 **Commandes utiles pour le back (API)**

| Action                    | Commande                            |
| ------------------------- | ----------------------------------- |
| Installer les dépendances | `npm install`                       |
| Lancer le serveur local   | `node server.js`                    |
| Déployer automatiquement  | Push sur GitHub → Render le déploie |

---

