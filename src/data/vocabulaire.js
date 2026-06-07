// Jeux de cartes de vocabulaire — programme de JUIN (les bases absolues).
// Prononciation = phonétique SIMPLIFIÉE pour francophone débutant (pas l'API).
// Chaque mot : { id, en, phon, fr, exemple, exempleFr }
//
// Les decks d'IMMOBILIER vivent dans data/immobilier.js (source unique, très
// fournie) et sont injectés ici pour rester pratiquables dans l'entraînement
// vocabulaire général ET dans le Pôle Immobilier dédié.
import { IMMO_DECKS } from './immobilier.js'

export const DECKS = [
  {
    id: 'salutations',
    titre: 'Salutations',
    emoji: '👋',
    mois: 'Juin',
    mots: [
      { id: 'hello', en: 'hello', phon: '[hèllo]', fr: 'bonjour / salut', exemple: 'Hello, how are you?', exempleFr: 'Bonjour, comment vas-tu ?' },
      { id: 'goodbye', en: 'goodbye', phon: '[goud-baï]', fr: 'au revoir', exemple: 'Goodbye, see you soon!', exempleFr: 'Au revoir, à bientôt !' },
      { id: 'good-morning', en: 'good morning', phon: '[goud mor-ningue]', fr: 'bonjour (le matin)', exemple: 'Good morning, Emma!', exempleFr: 'Bonjour Emma !' },
      { id: 'good-night', en: 'good night', phon: '[goud naït]', fr: 'bonne nuit', exemple: 'Good night, sleep well.', exempleFr: 'Bonne nuit, dors bien.' },
      { id: 'please', en: 'please', phon: '[pliiz]', fr: 's’il te plaît', exemple: 'A coffee, please.', exempleFr: 'Un café, s’il te plaît.' },
      { id: 'thank-you', en: 'thank you', phon: '[thènk you]', fr: 'merci', exemple: 'Thank you very much!', exempleFr: 'Merci beaucoup !' },
      { id: 'sorry', en: 'sorry', phon: '[so-ri]', fr: 'désolé(e) / pardon', exemple: 'Sorry, I am late.', exempleFr: 'Désolée, je suis en retard.' },
    ],
  },
  {
    id: 'survie',
    titre: 'Vocabulaire de survie',
    emoji: '🆘',
    mois: 'Juin',
    mots: [
      { id: 'yes', en: 'yes', phon: '[yèss]', fr: 'oui', exemple: 'Yes, I understand.', exempleFr: 'Oui, je comprends.' },
      { id: 'no', en: 'no', phon: '[no]', fr: 'non', exemple: 'No, thank you.', exempleFr: 'Non, merci.' },
      { id: 'excuse-me', en: 'excuse me', phon: '[ex-kiouz mi]', fr: 'excuse-moi', exemple: 'Excuse me, where is the station?', exempleFr: 'Excuse-moi, où est la gare ?' },
      { id: 'help', en: 'help', phon: '[help]', fr: 'aide / à l’aide', exemple: 'Can you help me?', exempleFr: 'Peux-tu m’aider ?' },
      { id: 'water', en: 'water', phon: '[wo-teur]', fr: 'eau', exemple: 'I would like some water.', exempleFr: 'Je voudrais de l’eau.' },
      { id: 'today', en: 'today', phon: '[tou-dèï]', fr: 'aujourd’hui', exemple: 'Today is a good day.', exempleFr: 'Aujourd’hui est un bon jour.' },
    ],
  },
  {
    id: 'couleurs',
    titre: 'Les couleurs',
    emoji: '🎨',
    mois: 'Juin',
    mots: [
      { id: 'red', en: 'red', phon: '[rèd]', fr: 'rouge', exemple: 'The apple is red.', exempleFr: 'La pomme est rouge.' },
      { id: 'blue', en: 'blue', phon: '[blou]', fr: 'bleu', exemple: 'The sky is blue.', exempleFr: 'Le ciel est bleu.' },
      { id: 'green', en: 'green', phon: '[griin]', fr: 'vert', exemple: 'The grass is green.', exempleFr: 'L’herbe est verte.' },
      { id: 'yellow', en: 'yellow', phon: '[yè-lo]', fr: 'jaune', exemple: 'The sun is yellow.', exempleFr: 'Le soleil est jaune.' },
      { id: 'pink', en: 'pink', phon: '[pinque]', fr: 'rose', exemple: 'I like pink flowers.', exempleFr: 'J’aime les fleurs roses.' },
      { id: 'white', en: 'white', phon: '[waït]', fr: 'blanc', exemple: 'The snow is white.', exempleFr: 'La neige est blanche.' },
      { id: 'black', en: 'black', phon: '[blak]', fr: 'noir', exemple: 'The cat is black.', exempleFr: 'Le chat est noir.' },
    ],
  },
  {
    id: 'jours',
    titre: 'Les jours de la semaine',
    emoji: '📅',
    mois: 'Juin',
    mots: [
      { id: 'monday', en: 'Monday', phon: '[man-dèï]', fr: 'lundi', exemple: 'On Monday I work.', exempleFr: 'Le lundi je travaille.' },
      { id: 'tuesday', en: 'Tuesday', phon: '[tiouz-dèï]', fr: 'mardi', exemple: 'See you on Tuesday.', exempleFr: 'À mardi.' },
      { id: 'wednesday', en: 'Wednesday', phon: '[wènz-dèï]', fr: 'mercredi', exemple: 'Wednesday is busy.', exempleFr: 'Mercredi est chargé.' },
      { id: 'thursday', en: 'Thursday', phon: '[theurz-dèï]', fr: 'jeudi', exemple: 'I have a class on Thursday.', exempleFr: 'J’ai un cours le jeudi.' },
      { id: 'friday', en: 'Friday', phon: '[fraï-dèï]', fr: 'vendredi', exemple: 'Friday is my favourite day.', exempleFr: 'Vendredi est mon jour préféré.' },
      { id: 'saturday', en: 'Saturday', phon: '[sa-teur-dèï]', fr: 'samedi', exemple: 'On Saturday I rest.', exempleFr: 'Le samedi je me repose.' },
      { id: 'sunday', en: 'Sunday', phon: '[san-dèï]', fr: 'dimanche', exemple: 'Sunday is calm.', exempleFr: 'Dimanche est calme.' },
    ],
  },

  // ===================================================================
  //  IMMOBILIER — les decks vivent dans data/immobilier.js (très fourni)
  //  et sont injectés ici pour l'entraînement vocabulaire général.
  // ===================================================================
  ...IMMO_DECKS,
]

export const getDeck = (id) => DECKS.find((d) => d.id === id)
