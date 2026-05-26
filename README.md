# 🌸 Emma — Apprendre l'anglais en douceur

Application web pour apprendre l'anglais de zéro (A1) jusqu'au niveau A2/B1, accompagnée par **Emma**, une prof bienveillante. Pensée pour une débutante, en français, mobile-first.

## ✨ Ce que contient le site

- **Le parcours — 10 jours** : une leçon complète par jour (vocabulaire → grammaire → conjugaison → dialogue → prononciation → quiz → bilan). Les jours se débloquent les uns après les autres.
- **Entraînement libre** : flashcards de vocabulaire et quiz de révision par jour.
- **Progression sauvegardée** localement (localStorage) : mots appris, scores, jours terminés.
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
