# 🌸 Emma — Apprendre l'anglais en douceur

Application web pour apprendre l'anglais de zéro (A1) jusqu'au niveau A2/B1, accompagnée par **Emma**, une prof bienveillante. Pensée pour une débutante, en français, mobile-first.

## ✨ Ce que contient le site

- **Le parcours — 36 jours (26 mai → 30 juin)** : une leçon complète par jour, datée et numérotée (vocabulaire → grammaire → conjugaison → dialogue → prononciation → quiz → bilan). Mai (26-31) = mise en route en douceur, juin = les bases (1-10) puis pratique & révision (11-30). Les jours se débloquent les uns après les autres **et seulement le vrai jour** : on ne peut pas faire le 27 avant le 27 (verrou calendaire, départ le 26 mai 2026).
- **Entraînement libre** : flashcards de vocabulaire, quiz de révision par jour, et surtout **l’atelier d’exercices** (`/session/exercices`) — un grand catalogue de tous types (compréhension écrite, compréhension orale, expression orale, dictées, exercices mélangés), classé en 4 niveaux de difficulté. Chaque exercice se débloque quand le **jour requis** du parcours est terminé. Contenu dans `src/data/exercices.js`.
- **Mode test (admin)** : page `/admin` (lien discret en pied de page). Avec le code et le mot de passe, tout est débloqué — verrous de date et de progression ignorés — pour tester l’appli. Identifiants dans `src/pages/Admin.jsx`.
- **Progression sauvegardée** localement (localStorage) : mots appris, scores, jours terminés, exercices réussis.
- Audio (synthèse vocale du navigateur), scroll fluide, transitions de page, contraste accessible.

## 🛠 Stack

React 18 · Vite 5 · React Router 6 · Lenis · localStorage. Aucun backend.

## 🚀 Démarrer en local

```bash
npm install
npm run dev      # http://localhost:5173
```

> ⚠️ N'ouvre pas `index.html` en double-clic : c'est une app React, elle doit passer par Vite (`npm run dev`) ou être buildée.

```bash
npm run build    # génère le site dans dist/
npm run preview  # prévisualise le build
```

## ☁️ Mise en ligne (GitHub Pages, automatique)

Le dépôt contient un workflow (`.github/workflows/deploy.yml`) qui **build et publie le site à chaque push sur `main`** — aucun serveur à lancer.

1. Sur GitHub, ouvre le dépôt → **Settings → Pages → Build and deployment → Source : GitHub Actions**.
2. Pousse sur `main` : le site se met en ligne tout seul. L'URL apparaît dans l'onglet **Actions** (et dans Settings → Pages).

Les URLs sont propres (sans `#`). Le routing repose sur `BrowserRouter` avec `base: '/emma/'` (dans `vite.config.js`) et un `404.html` de secours (copie de `index.html`) pour gérer le rafraîchissement des liens profonds. Si tu renommes le dépôt ou ajoutes un domaine personnalisé, ajuste `base` dans `vite.config.js`.
