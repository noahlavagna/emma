// Métadonnées des 6 types de session — partagées par l'accueil et le routing.
// `pret: false` => page placeholder (pas encore implémentée).

export const SESSIONS = [
  {
    slug: 'vocabulaire',
    numero: '01',
    icone: '📚',
    titre: 'Vocabulaire',
    description:
      '6 à 8 mots nouveaux avec prononciation, traduction et exemples. Suivi d’un petit exercice pour ancrer.',
    accent: 'rose',
    pret: true,
  },
  {
    slug: 'grammaire',
    numero: '02',
    icone: '🌿',
    titre: 'Grammaire',
    description:
      'Une seule règle expliquée simplement, avec des analogies en français et des exercices progressifs.',
    accent: 'vert',
    pret: false,
  },
  {
    slug: 'conjugaison',
    numero: '03',
    icone: '✨',
    titre: 'Conjugaison',
    description:
      'Focus sur un temps verbal : formation, exceptions, et 5 phrases à conjuguer ensemble.',
    accent: 'or',
    pret: false,
  },
  {
    slug: 'dialogue',
    numero: '04',
    icone: '💬',
    titre: 'Dialogue',
    description:
      'Emma joue un personnage (serveuse, vendeur, médecin…) et on s’entraîne à une vraie conversation.',
    accent: 'rose',
    pret: false,
  },
  {
    slug: 'revision',
    numero: '05',
    icone: '🌷',
    titre: 'Révision',
    description:
      'Un quiz de 8 à 10 questions mélangées pour vérifier ce qui est bien ancré. Un jour de révision pour chaque jour du parcours.',
    accent: 'vert',
    pret: true,
  },
  {
    slug: 'prononciation',
    numero: '06',
    icone: '🎵',
    titre: 'Prononciation',
    description:
      'Un son difficile à la fois (TH, R, voyelles…) avec la technique pour bien le produire.',
    accent: 'violet',
    pret: false,
  },
]

export const getSession = (slug) => SESSIONS.find((s) => s.slug === slug)
