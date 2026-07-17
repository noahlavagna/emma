// Jeux de cartes de vocabulaire — JUIN (les bases) + JUILLET (vitesse
// supérieure : heure, passé, futur, ville) + IMMOBILIER.
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
  //  JUILLET — vitesse supérieure : l'heure, le passé, le futur, la ville.
  // ===================================================================
  {
    id: 'heure-routine',
    titre: 'L’heure & la routine',
    emoji: '🕐',
    mois: 'Juillet',
    mots: [
      { id: 'jul-oclock', en: 'o’clock', phon: '[o-klok]', fr: '… heures (pile)', exemple: 'It’s eight o’clock.', exempleFr: 'Il est huit heures pile.' },
      { id: 'jul-halfpast', en: 'half past', phon: '[haf past]', fr: 'et demie', exemple: 'It’s half past two.', exempleFr: 'Il est deux heures et demie.' },
      { id: 'jul-quarter', en: 'quarter', phon: '[kwor-teur]', fr: 'quart', exemple: 'A quarter past nine.', exempleFr: 'Neuf heures et quart.' },
      { id: 'jul-wakeup', en: 'to wake up', phon: '[wéïk eup]', fr: 'se réveiller', exemple: 'I wake up at seven.', exempleFr: 'Je me réveille à sept heures.' },
      { id: 'jul-getdressed', en: 'to get dressed', phon: '[guèt drèst]', fr: 's’habiller', exemple: 'I get dressed quickly.', exempleFr: 'Je m’habille vite.' },
      { id: 'jul-always', en: 'always', phon: '[ol-wéïz]', fr: 'toujours', exemple: 'I always drink coffee.', exempleFr: 'Je bois toujours du café.' },
      { id: 'jul-never', en: 'never', phon: '[nè-veur]', fr: 'jamais', exemple: 'I never smoke.', exempleFr: 'Je ne fume jamais.' },
      { id: 'jul-early', en: 'early', phon: '[eur-li]', fr: 'tôt', exemple: 'She gets up early.', exempleFr: 'Elle se lève tôt.' },
    ],
  },
  {
    id: 'passe-irreguliers',
    titre: 'Le passé : les irréguliers',
    emoji: '🕰️',
    mois: 'Juillet',
    mots: [
      { id: 'jul-went', en: 'went (go)', phon: '[wènt]', fr: 'allé', exemple: 'I went to Paris.', exempleFr: 'Je suis allée à Paris.' },
      { id: 'jul-saw', en: 'saw (see)', phon: '[so]', fr: 'vu', exemple: 'I saw a beautiful house.', exempleFr: 'J’ai vu une belle maison.' },
      { id: 'jul-had', en: 'had (have)', phon: '[had]', fr: 'eu', exemple: 'We had a good day.', exempleFr: 'On a passé une bonne journée.' },
      { id: 'jul-ate', en: 'ate (eat)', phon: '[éït]', fr: 'mangé', exemple: 'She ate a pizza.', exempleFr: 'Elle a mangé une pizza.' },
      { id: 'jul-took', en: 'took (take)', phon: '[touk]', fr: 'pris', exemple: 'I took the bus.', exempleFr: 'J’ai pris le bus.' },
      { id: 'jul-made', en: 'made (make)', phon: '[méïd]', fr: 'fait', exemple: 'You made a cake!', exempleFr: 'Tu as fait un gâteau !' },
      { id: 'jul-bought', en: 'bought (buy)', phon: '[bot]', fr: 'acheté', exemple: 'She bought a souvenir.', exempleFr: 'Elle a acheté un souvenir.' },
      { id: 'jul-spoke', en: 'spoke (speak)', phon: '[spôk]', fr: 'parlé', exemple: 'I spoke English!', exempleFr: 'J’ai parlé anglais !' },
      { id: 'jul-flew', en: 'flew (fly)', phon: '[flou]', fr: 'pris l’avion', exemple: 'We flew to Spain.', exempleFr: 'On est allés en Espagne en avion.' },
      { id: 'jul-slept', en: 'slept (sleep)', phon: '[slèpt]', fr: 'dormi', exemple: 'We slept in a hotel.', exempleFr: 'On a dormi à l’hôtel.' },
    ],
  },
  {
    id: 'futur-projets',
    titre: 'Le futur & les projets',
    emoji: '🚀',
    mois: 'Juillet',
    mots: [
      { id: 'jul-tomorrow', en: 'tomorrow', phon: '[tou-mo-rô]', fr: 'demain', exemple: 'See you tomorrow!', exempleFr: 'À demain !' },
      { id: 'jul-nextweek', en: 'next week', phon: '[nèxt wiik]', fr: 'la semaine prochaine', exemple: 'Next week I’m going to rest.', exempleFr: 'La semaine prochaine, je vais me reposer.' },
      { id: 'jul-soon', en: 'soon', phon: '[soun]', fr: 'bientôt', exemple: 'See you soon!', exempleFr: 'À bientôt !' },
      { id: 'jul-plan', en: 'plan', phon: '[plan]', fr: 'projet', exemple: 'What are your plans?', exempleFr: 'Quels sont tes projets ?' },
      { id: 'jul-promise', en: 'to promise', phon: '[pro-miss]', fr: 'promettre', exemple: 'I promise!', exempleFr: 'Promis !' },
      { id: 'jul-hope', en: 'to hope', phon: '[hôp]', fr: 'espérer', exemple: 'I hope you will come.', exempleFr: 'J’espère que tu viendras.' },
      { id: 'jul-meeting', en: 'meeting', phon: '[mii-tingue]', fr: 'réunion', exemple: 'We had a meeting.', exempleFr: 'On a eu une réunion.' },
      { id: 'jul-appointment', en: 'appointment', phon: '[e-poïnt-meunt]', fr: 'rendez-vous', exemple: 'I have an appointment at two.', exempleFr: 'J’ai un rendez-vous à quatorze heures.' },
    ],
  },
  {
    id: 'ville-boutiques',
    titre: 'En ville & au magasin',
    emoji: '🧭',
    mois: 'Juillet',
    mots: [
      { id: 'jul-left', en: 'left', phon: '[lèft]', fr: 'gauche', exemple: 'Turn left.', exempleFr: 'Tourne à gauche.' },
      { id: 'jul-right', en: 'right', phon: '[raït]', fr: 'droite', exemple: 'Turn right at the bank.', exempleFr: 'Tourne à droite à la banque.' },
      { id: 'jul-straight', en: 'straight on', phon: '[stréït on]', fr: 'tout droit', exemple: 'Go straight on.', exempleFr: 'Continue tout droit.' },
      { id: 'jul-nextto', en: 'next to', phon: '[nèxt tou]', fr: 'à côté de', exemple: 'It’s next to the bakery.', exempleFr: 'C’est à côté de la boulangerie.' },
      { id: 'jul-opposite', en: 'opposite', phon: '[o-pe-zit]', fr: 'en face de', exemple: 'Opposite the station.', exempleFr: 'En face de la gare.' },
      { id: 'jul-size', en: 'size', phon: '[saïz]', fr: 'taille', exemple: 'What size are you?', exempleFr: 'Quelle taille faites-vous ?' },
      { id: 'jul-tryon', en: 'to try on', phon: '[traï on]', fr: 'essayer (vêtement)', exemple: 'Can I try it on?', exempleFr: 'Puis-je l’essayer ?' },
      { id: 'jul-toobig', en: 'too big', phon: '[tou big]', fr: 'trop grand', exemple: 'It’s too big for me.', exempleFr: 'C’est trop grand pour moi.' },
    ],
  },

  // ===================================================================
  //  IMMOBILIER — les decks vivent dans data/immobilier.js (très fourni)
  //  et sont injectés ici pour l'entraînement vocabulaire général.
  // ===================================================================
  ...IMMO_DECKS,
]

export const getDeck = (id) => DECKS.find((d) => d.id === id)
