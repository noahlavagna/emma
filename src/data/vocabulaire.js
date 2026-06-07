// Jeux de cartes de vocabulaire — programme de JUIN (les bases absolues).
// Prononciation = phonétique SIMPLIFIÉE pour francophone débutant (pas l'API).
// Chaque mot : { id, en, phon, fr, exemple, exempleFr }

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
  //  IMMOBILIER — vocabulaire & expressions pour les études d'Emma.
  //  Trois thèmes : les bases, la visite d'un bien, les expressions pro.
  // ===================================================================
  {
    id: 'immo-bases',
    titre: 'Immobilier · les bases',
    emoji: '🏡',
    mois: 'Immobilier',
    mots: [
      { id: 'immo-real-estate', en: 'real estate', phon: '[riil is-tèït]', fr: 'l’immobilier', exemple: 'I work in real estate.', exempleFr: 'Je travaille dans l’immobilier.' },
      { id: 'immo-property', en: 'property', phon: '[pro-peur-ti]', fr: 'un bien (immobilier)', exemple: 'This property is for sale.', exempleFr: 'Ce bien est à vendre.' },
      { id: 'immo-apartment', en: 'apartment', phon: '[a-part-meunt]', fr: 'un appartement', exemple: 'A bright apartment.', exempleFr: 'Un appartement lumineux.' },
      { id: 'immo-building', en: 'building', phon: '[bil-dingue]', fr: 'un immeuble / bâtiment', exemple: 'A new building.', exempleFr: 'Un immeuble neuf.' },
      { id: 'immo-landlord', en: 'landlord', phon: '[land-lord]', fr: 'le propriétaire (bailleur)', exemple: 'The landlord is nice.', exempleFr: 'Le propriétaire est sympa.' },
      { id: 'immo-tenant', en: 'tenant', phon: '[tè-neunt]', fr: 'le/la locataire', exemple: 'The tenant pays the rent.', exempleFr: 'Le locataire paie le loyer.' },
      { id: 'immo-rent', en: 'rent', phon: '[rènt]', fr: 'le loyer', exemple: 'The rent is 800 euros.', exempleFr: 'Le loyer est de 800 euros.' },
      { id: 'immo-mortgage', en: 'mortgage', phon: '[mor-guidj]', fr: 'le crédit immobilier', exemple: 'They have a mortgage.', exempleFr: 'Ils ont un crédit immobilier.' },
      { id: 'immo-for-sale', en: 'for sale', phon: '[for sèïl]', fr: 'à vendre', exemple: 'The flat is for sale.', exempleFr: 'L’appartement est à vendre.' },
      { id: 'immo-for-rent', en: 'for rent', phon: '[for rènt]', fr: 'à louer', exemple: 'A house for rent.', exempleFr: 'Une maison à louer.' },
    ],
  },
  {
    id: 'immo-visite',
    titre: 'Immobilier · la visite',
    emoji: '🔑',
    mois: 'Immobilier',
    mots: [
      { id: 'immo-viewing', en: 'viewing', phon: '[viou-ingue]', fr: 'une visite (de bien)', exemple: 'We have a viewing today.', exempleFr: 'Nous avons une visite aujourd’hui.' },
      { id: 'immo-bedroom', en: 'bedroom', phon: '[bèd-roum]', fr: 'une chambre', exemple: 'It has two bedrooms.', exempleFr: 'Il a deux chambres.' },
      { id: 'immo-living-room', en: 'living room', phon: '[li-vingue roum]', fr: 'le salon / séjour', exemple: 'A large living room.', exempleFr: 'Un grand salon.' },
      { id: 'immo-kitchen', en: 'kitchen', phon: '[ki-tcheun]', fr: 'la cuisine', exemple: 'A modern kitchen.', exempleFr: 'Une cuisine moderne.' },
      { id: 'immo-bathroom', en: 'bathroom', phon: '[bath-roum]', fr: 'la salle de bain', exemple: 'A clean bathroom.', exempleFr: 'Une salle de bain propre.' },
      { id: 'immo-floor', en: 'floor', phon: '[flor]', fr: 'l’étage / le sol', exemple: 'On the second floor.', exempleFr: 'Au deuxième étage.' },
      { id: 'immo-garden', en: 'garden', phon: '[gar-deun]', fr: 'le jardin', exemple: 'A nice garden.', exempleFr: 'Un joli jardin.' },
      { id: 'immo-balcony', en: 'balcony', phon: '[bal-keu-ni]', fr: 'le balcon', exemple: 'A flat with a balcony.', exempleFr: 'Un appartement avec balcon.' },
      { id: 'immo-furnished', en: 'furnished', phon: '[feur-nichd]', fr: 'meublé', exemple: 'The studio is furnished.', exempleFr: 'Le studio est meublé.' },
      { id: 'immo-spacious', en: 'spacious', phon: '[spèï-cheuss]', fr: 'spacieux', exemple: 'A spacious living room.', exempleFr: 'Un salon spacieux.' },
    ],
  },
  {
    id: 'immo-expressions',
    titre: 'Immobilier · expressions pro',
    emoji: '💼',
    mois: 'Immobilier',
    mots: [
      { id: 'immo-help-you', en: 'How can I help you?', phon: '[haou kann aï help you]', fr: 'Comment puis-je vous aider ?', exemple: 'Hello, how can I help you?', exempleFr: 'Bonjour, comment puis-je vous aider ?' },
      { id: 'immo-budget', en: 'What is your budget?', phon: '[wott iz yor beu-djit]', fr: 'Quel est votre budget ?', exemple: 'What is your budget for the rent?', exempleFr: 'Quel est votre budget pour le loyer ?' },
      { id: 'immo-buy-rent', en: 'Are you buying or renting?', phon: '[ar you baï-ingue or rèn-tingue]', fr: 'Achetez-vous ou louez-vous ?', exemple: 'Are you buying or renting?', exempleFr: 'Achetez-vous ou louez-vous ?' },
      { id: 'immo-view-it', en: 'I would like to view it.', phon: '[aï woud laïk tou viou it]', fr: 'Je voudrais le visiter.', exemple: 'I would like to view it tomorrow.', exempleFr: 'Je voudrais le visiter demain.' },
      { id: 'immo-available', en: 'When is it available?', phon: '[wènn iz it eu-vèï-leu-beul]', fr: 'Quand est-il disponible ?', exemple: 'When is it available?', exempleFr: 'Quand est-il disponible ?' },
      { id: 'immo-within-budget', en: 'It is within your budget.', phon: '[it iz wi-zin yor beu-djit]', fr: 'C’est dans votre budget.', exemple: 'Good news: it is within your budget.', exempleFr: 'Bonne nouvelle : c’est dans votre budget.' },
      { id: 'immo-make-offer', en: 'Would you like to make an offer?', phon: '[woud you laïk tou mèïk eun o-feur]', fr: 'Souhaitez-vous faire une offre ?', exemple: 'Would you like to make an offer?', exempleFr: 'Souhaitez-vous faire une offre ?' },
      { id: 'immo-show-around', en: 'Let me show you around.', phon: '[lèt mi cho you eu-raound]', fr: 'Laissez-moi vous faire visiter.', exemple: 'Come in, let me show you around.', exempleFr: 'Entrez, laissez-moi vous faire visiter.' },
      { id: 'immo-lease', en: 'The lease is one year.', phon: '[zeu liiss iz weun yir]', fr: 'Le bail est d’un an.', exemple: 'The lease is one year.', exempleFr: 'Le bail est d’un an.' },
      { id: 'immo-sign-here', en: 'Please sign here.', phon: '[pliiz saïn hir]', fr: 'Veuillez signer ici.', exemple: 'Everything is ready — please sign here.', exempleFr: 'Tout est prêt — veuillez signer ici.' },
    ],
  },
]

export const getDeck = (id) => DECKS.find((d) => d.id === id)
