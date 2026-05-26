# 🌸 Projet Emma — Site d'apprentissage de l'anglais

## 📋 Contexte

Je suis une élève **totalement débutante en anglais (niveau A1)** et je dois atteindre un **niveau A2/B1 pour septembre 2026**. Nous sommes fin mai 2026 — il reste environ **3 mois et demi**.

J'ai créé un personnage de prof IA appelé **Emma** (francophone, bienveillante, hautement pédagogue) qui m'accompagne via un prompt système dans Claude. Je veux maintenant un **vrai site web interactif** pour structurer cet apprentissage.

---

## 🎯 Objectif du site

Construire une application web qui me permet de :
1. **Choisir un type de session** parmi 6 (vocabulaire, grammaire, conjugaison, dialogue, révision, prononciation)
2. **Suivre ma progression** sur les 3 mois (juin / juillet / août)
3. **Faire des exercices interactifs** directement dans le site (pas juste discuter avec une IA)
4. **Mémoriser le vocabulaire** appris (système type flashcards)
5. **Tracker mon score / mes acquis** au fil du temps

---

## 🎨 Direction artistique

- **Style** : doux, pastel, féminin, élégant — PAS infantilisant
- **Couleurs** : vert pâle + rose pâle + crème (palette déjà définie dans le CSS)
- **Typographie** : Fraunces (serif italique) pour les titres + Nunito pour le texte
- **Inspiration** : un croisement entre Duolingo (gamification) et un site éditorial style "magazine de bien-être"
- **⚠️ IMPORTANT** : assure-toi du **contraste de lecture** (le précédent rendu avait du texte trop pâle sur fond pâle, ton sur ton — à corriger)

---

## 📚 Le programme pédagogique (à intégrer dans le site)

### 🟢 JUIN — Les Bases Absolues
- Alphabet phonétique anglais
- Salutations (hello, goodbye, good morning…)
- Se présenter (my name is, I am from…)
- Chiffres 1 à 100
- Couleurs
- Jours de la semaine + mois
- Le verbe **to be** au présent (I am, you are, he/she is…)
- Les pronoms personnels (I, you, he, she, it, we, they)
- Vocabulaire de survie (yes, no, thank you, please, excuse me, sorry)

### 🔵 JUILLET — La Vie Quotidienne
- Vocabulaire : famille, nourriture, maison, vêtements
- Le **present simple** complet
- Construction des questions (Do / Does)
- La négation (don't / doesn't)
- Adjectifs courants
- Prépositions de base (in, on, at, under, near…)

### 🟣 AOÛT — La Conversation
- **Past simple** (verbes réguliers + irréguliers courants)
- Le futur avec **will** et **going to**
- Dialogues complets : café, shopping, hôtel, demander son chemin, chez le médecin
- Compréhension de phrases courantes
- Révisions intensives

---

## 🧩 Les 6 types de sessions

Chaque type de session doit avoir sa propre page interactive :

### 1. VOCABULAIRE 📚
- Affiche 6 à 8 mots nouveaux : mot anglais + prononciation simplifiée (ex: "cat" → [katt]) + traduction + exemple en phrase simple
- Exercice de mémorisation à la fin : "Traduis ces mots en anglais" (input texte)
- Système de validation immédiate avec ✅ ou ❌
- Idéalement : système de flashcards type Anki (retour de la carte)

### 2. GRAMMAIRE 🌿
- Explique UNE règle grammaticale à la fois
- Utilise des analogies / comparaisons avec le français
- 3 à 5 exemples progressifs
- 4 exercices à trous ou de traduction
- Correction avec explication courte

### 3. CONJUGAISON ✨
- Focus sur UN temps verbal par session
- Explique la formation + exceptions courantes
- 5 phrases à conjuguer (input)
- Correction avec explication

### 4. DIALOGUE 💬
- Mise en situation du quotidien (café, shopping, médecin…)
- Contexte écrit en français, puis dialogue en anglais
- L'élève répond à l'IA / au site
- Correction en douceur des fautes

### 5. RÉVISION 🌷
- Quiz de 8 à 10 questions mélangées (traduction, à trous, vrai/faux, conjugaison)
- Score affiché à la fin
- Messages d'encouragement selon le score

### 6. PRONONCIATION 🎵
- Explique un son difficile à la fois (TH, R, voyelles…)
- Exemples de mots
- Technique pour produire le son
- Idéalement : audio (Web Speech API ou fichiers audio)

---

## 🛠 Stack technique souhaitée

- **Framework** : React (avec Vite) — ou rester en HTML/CSS/JS vanilla si plus simple
- **Persistance** : `localStorage` (ou IndexedDB) pour sauvegarder la progression, les mots appris, les scores
- **Pas de backend** au début — tout en local
- **Responsive** mobile-first (je travaille souvent depuis mon téléphone)
- **Animations** : sobres et élégantes (CSS ou Framer Motion)

---

## ✅ Ce qui est déjà fait

Une **page d'accueil** statique en HTML/CSS pur, avec :
- Header avec titre, sous-titre, badge du mois en cours
- 6 cartes de sessions (avec icônes, descriptions, animations au survol)
- Un message d'Emma (la "prof")
- Une timeline visuelle des 3 mois (juin actif)
- Un footer

⚠️ **Problème connu** : le contraste du texte est trop faible (ton sur ton). À corriger en priorité.

Le fichier est `index.html` dans ce dossier.

---

## 🚀 Ce qu'il reste à faire (par ordre de priorité)

### Priorité 1 — Fixer + structurer
1. **Corriger le contraste** du texte sur toutes les pages
2. **Migrer en React + Vite** (ou conserver vanilla mais structurer en plusieurs pages)
3. Mettre en place le **routing** entre la page d'accueil et les 6 sessions

### Priorité 2 — Sessions interactives (commencer par les 2 plus utiles)
4. Page **Vocabulaire** complète avec flashcards + exercice de mémorisation + sauvegarde des mots appris
5. Page **Révision** avec quiz dynamique tirant des notions déjà vues

### Priorité 3 — Persistance & progression
6. Système de **tracking de progression** par notion / mois (barre de progression, étoiles, etc.)
7. Sauvegarde locale (localStorage) : mots appris, scores, sessions complétées

### Priorité 4 — Autres sessions
8. Pages Grammaire, Conjugaison, Dialogue, Prononciation

### Priorité 5 — Polish
9. Audio pour la prononciation (Web Speech API)
10. Mode "petite révision quotidienne" (5 minutes)
11. Mode hors-ligne (PWA)

---

## 📝 Notes importantes

- **Toujours en français** dans l'interface (sauf le contenu pédagogique anglais évidemment)
- **Bienveillant, jamais infantilisant** — je suis une adulte débutante, pas un enfant
- **Sessions courtes** : 20-30 min max, pas plus
- **Correction immédiate** : valider chaque réponse tout de suite avec une explication courte
- **Encourageant** : célébrer les bonnes réponses, jamais culpabiliser sur les erreurs

---

Bonne continuation, Claude Code ! 🌸
