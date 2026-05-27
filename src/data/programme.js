// =====================================================================
//  LE PARCOURS — 36 jours de leçons complètes, calés sur de vraies dates.
//    • Jours 1 à 6   : 26 → 31 mai  — MISE EN ROUTE (découverte, en douceur).
//    • Jours 7 à 16  : 1 → 10 juin  — LES BASES (A1).
//    • Jours 17 à 36 : 11 → 30 juin — PRATIQUE & RÉVISION (vie quotidienne).
//  Chaque jour porte un numéro (`jour`), une `date` et un `mois`.
//  Chaque jour enchaîne : vocabulaire → grammaire → conjugaison →
//  dialogue → prononciation → quiz de révision → bilan.
//  Le quiz de révision de chaque jour est tiré de data/revision.js.
//
//  Formes d'exercices (comprises par le composant <Quiz>) :
//    traduction  : { type:'traduction', sens:'fr-en'|'en-fr', q, r, accepte?, explication }
//    trou        : { type:'trou', phrase (avec ___), r, accepte?, explication }
//    conjugaison : { type:'conjugaison', verbe, q (avec ___), r, accepte?, explication }
//    vraiFaux    : { type:'vraiFaux', affirmation, r:boolean, explication }
// =====================================================================

export const PROGRAMME = [
  // ==================== JOUR 1 · 26 MAI — MISE EN ROUTE ====================
  {
    jour: 1,
    date: "26 mai",
    mois: "mai",
    titre: "Tu connais déjà l'anglais !",
    emoji: "🌸",
    objectif: "Découvrir que tu connais déjà des dizaines de mots anglais — et te lancer en confiance.",
    intro:
      "Bienvenue, c'est ton tout premier jour ! 🌸 Avant même de commencer, tu connais déjà plein de mots anglais sans le savoir. Aujourd'hui on s'en sert pour te mettre à l'aise. Aucune pression : on découvre, tout doucement.",
    vocabulaire: {
      intro: "Des mots quasi identiques en français et en anglais : tu les comprends déjà !",
      mots: [
        { id: "mai26-taxi", en: "taxi", phon: "[tak-si]", fr: "taxi", exemple: "Where is the taxi?", exempleFr: "Où est le taxi ?" },
        { id: "mai26-hotel", en: "hotel", phon: "[ho-tèl]", fr: "hôtel", exemple: "The hotel is big.", exempleFr: "L'hôtel est grand." },
        { id: "mai26-restaurant", en: "restaurant", phon: "[rès-teu-ront]", fr: "restaurant", exemple: "A nice restaurant.", exempleFr: "Un joli restaurant." },
        { id: "mai26-train", en: "train", phon: "[trèïn]", fr: "train", exemple: "The train is here.", exempleFr: "Le train est là." },
        { id: "mai26-table", en: "table", phon: "[téï-beul]", fr: "table", exemple: "On the table.", exempleFr: "Sur la table." },
        { id: "mai26-animal", en: "animal", phon: "[a-ni-meul]", fr: "animal", exemple: "A small animal.", exempleFr: "Un petit animal." },
        { id: "mai26-music", en: "music", phon: "[miou-zik]", fr: "musique", exemple: "I love music.", exempleFr: "J'adore la musique." },
        { id: "mai26-chocolate", en: "chocolate", phon: "[tcho-keu-lèt]", fr: "chocolat", exemple: "I like chocolate.", exempleFr: "J'aime le chocolat." },
      ],
    },
    grammaire: {
      titre: "« the » : un seul petit mot",
      regle:
        "En anglais, « the » veut dire le, la, l' ET les. Un seul mot, pas de masculin ni de féminin, rien à accorder : the table, the train, the animals.",
      analogie:
        "En français tu dois choisir : le, la, les… En anglais c'est toujours « the ». Une règle en moins — respire ! 😊",
      exemples: [
        { en: "the taxi", fr: "le taxi" },
        { en: "the table", fr: "la table" },
        { en: "the animals", fr: "les animaux" },
        { en: "the hotel", fr: "l'hôtel" },
      ],
      exercices: [
        { type: "trou", phrase: "___ train is here. (le)", r: "the", explication: "« the » = le / la / les, toujours." },
        { type: "traduction", sens: "fr-en", q: "la musique", r: "the music", explication: "« the music »." },
        { type: "vraiFaux", affirmation: "« the » change selon le masculin ou le féminin.", r: false, explication: "Non : « the » ne change jamais." },
        { type: "trou", phrase: "I see ___ animals. (les)", r: "the", explication: "« the » sert aussi au pluriel." },
      ],
    },
    conjugaison: {
      titre: "« it's » : dire « c'est »",
      explication:
        "Pour montrer une chose et dire « c'est… », on utilise « it is », souvent raccourci en « it's » : It's a taxi. It's the hotel. Tout simple.",
      tableau: [
        { pronom: "It is", forme: "it's", exemple: "It's a taxi. (C'est un taxi.)" },
        { pronom: "It is", forme: "it's", exemple: "It's the hotel. (C'est l'hôtel.)" },
        { pronom: "It is not", forme: "it's not", exemple: "It's not a train. (Ce n'est pas un train.)" },
        { pronom: "Is it…?", forme: "Is it…?", exemple: "Is it a taxi? (Est-ce un taxi ?)" },
      ],
      exercices: [
        { type: "trou", phrase: "___ a taxi. (c'est, version courte)", r: "it's", accepte: ["its"], explication: "« It is » → « It's »." },
        { type: "traduction", sens: "fr-en", q: "C'est un hôtel.", r: "it's a hotel", accepte: ["it is a hotel"], explication: "« It's a hotel »." },
        { type: "vraiFaux", affirmation: "« It's » veut dire « it is ».", r: true, explication: "Oui : it's = it is = c'est / il est." },
      ],
    },
    dialogue: {
      titre: "À la gare",
      contexte: "Tu arrives dans une ville. Emma te montre des choses. Réponds avec « It's… ».",
      lignes: [
        { role: "Emma", en: "Look! Is it a taxi?", fr: "Regarde ! Est-ce un taxi ?" },
        { role: "Toi", en: "Yes, it's a taxi.", fr: "Oui, c'est un taxi." },
        { role: "Emma", en: "And the hotel?", fr: "Et l'hôtel ?" },
        { role: "Toi", en: "It's the big hotel.", fr: "C'est le grand hôtel." },
        { role: "Emma", en: "Perfect, you understand English already!", fr: "Parfait, tu comprends déjà l'anglais !" },
      ],
      aToi: [
        { consigne: "Dis « C'est un taxi »", r: "it's a taxi", accepte: ["it is a taxi"], explication: "« It's a taxi »." },
        { consigne: "Dis « C'est l'hôtel »", r: "it's the hotel", accepte: ["it is the hotel"], explication: "« It's the hotel »." },
      ],
    },
    prononciation: {
      son: "🎵",
      titre: "Le même mot, prononcé autrement",
      explication:
        "Beaucoup de mots s'écrivent presque pareil en français et en anglais, mais se disent différemment. « table » se dit « téï-beul », « animal » se dit « a-ni-meul ». L'orthographe est proche, le son change.",
      technique:
        "Lis le mot français dans ta tête, puis dis la version anglaise en exagérant un peu : « téï-beul ». Écoute la différence.",
      mots: [
        { en: "table", phon: "[TÉÏ-beul]" },
        { en: "animal", phon: "[A-ni-meul]" },
        { en: "hotel", phon: "[ho-TÈL]" },
        { en: "music", phon: "[MIOU-zik]" },
      ],
      phrase: "It's a table in the hotel.",
    },
    bilan: {
      resume: [
        "Tu connais déjà des mots anglais : taxi, hotel, train, music…",
        "« the » = le / la / les (un seul mot, jamais d'accord).",
        "« It's… » pour dire « c'est… ».",
      ],
      conseil:
        "Repère trois mots anglais autour de toi aujourd'hui (sur un paquet, un écran…). Tu vas en voir partout !",
      motivation: "Premier pas fait, et tu pars déjà avec de l'avance. Bienvenue ! 🌸",
    },
  },

  // ==================== JOUR 2 · 27 MAI ====================
  {
    jour: 2,
    date: "27 mai",
    mois: "mai",
    titre: "L'alphabet anglais",
    emoji: "🔤",
    objectif: "Connaître les lettres et savoir épeler ton prénom.",
    intro:
      "Aujourd'hui, l'alphabet ! Les lettres sont les mêmes qu'en français, mais elles se prononcent autrement. Savoir épeler ton prénom est super utile : au téléphone, pour s'inscrire quelque part…",
    vocabulaire: {
      intro: "Les lettres les plus différentes du français — celles qui surprennent.",
      mots: [
        { id: "mai27-a", en: "A", phon: "[éï]", fr: "la lettre A", exemple: "A — apple.", exempleFr: "A comme « apple » (pomme)." },
        { id: "mai27-e", en: "E", phon: "[ii]", fr: "la lettre E", exemple: "E — elephant.", exempleFr: "E comme « elephant »." },
        { id: "mai27-i", en: "I", phon: "[aï]", fr: "la lettre I", exemple: "I — ice.", exempleFr: "I comme « ice » (glace)." },
        { id: "mai27-g", en: "G", phon: "[djii]", fr: "la lettre G", exemple: "G — green.", exempleFr: "G comme « green »." },
        { id: "mai27-j", en: "J", phon: "[djéï]", fr: "la lettre J", exemple: "J — jam.", exempleFr: "J comme « jam » (confiture)." },
        { id: "mai27-w", en: "W", phon: "[da-beul-you]", fr: "la lettre W", exemple: "W — water.", exempleFr: "W comme « water » (eau)." },
        { id: "mai27-y", en: "Y", phon: "[waï]", fr: "la lettre Y", exemple: "Y — yes.", exempleFr: "Y comme « yes »." },
        { id: "mai27-z", en: "Z", phon: "[zèd]", fr: "la lettre Z", exemple: "Z — zebra.", exempleFr: "Z comme « zebra » (zèbre)." },
      ],
    },
    grammaire: {
      titre: "Voyelles et consonnes",
      regle:
        "Les voyelles en anglais sont A, E, I, O, U — comme en français. Toutes les autres lettres sont des consonnes. C'est utile : devant un mot qui commence par un son voyelle, on dira « an » au lieu de « a » (tu verras ça en juin !).",
      analogie:
        "Mêmes voyelles qu'en français : A, E, I, O, U. Faciles à retenir, juste prononcées autrement : « éï, ii, aï, ô, iou ».",
      exemples: [
        { en: "A, E, I, O, U", fr: "les 5 voyelles" },
        { en: "B, C, D, F…", fr: "des consonnes" },
        { en: "apple", fr: "commence par une voyelle (a)" },
        { en: "table", fr: "commence par une consonne (t)" },
      ],
      exercices: [
        { type: "vraiFaux", affirmation: "Les voyelles sont A, E, I, O, U.", r: true, explication: "Oui, comme en français." },
        { type: "vraiFaux", affirmation: "La lettre E se prononce « ii ».", r: true, explication: "Oui : E = « ii »." },
        { type: "trou", phrase: "La lettre G se dit « ___ » (comme le début de « gin »).", r: "djii", accepte: ["dji"], explication: "G = « djii »." },
        { type: "vraiFaux", affirmation: "W se prononce « vé ».", r: false, explication: "Non : W = « double-you »." },
      ],
    },
    conjugaison: {
      titre: "« to spell » : épeler",
      explication:
        "Pour demander comment ça s'écrit : « How do you spell…? » (Comment ça s'épelle ?). On répond en disant les lettres une par une. « to spell » = épeler.",
      tableau: [
        { pronom: "I", forme: "spell", exemple: "I spell my name: L-E-A." },
        { pronom: "You", forme: "spell", exemple: "How do you spell it?" },
        { pronom: "He / She", forme: "spells", exemple: "She spells her name." },
        { pronom: "It", forme: "spells", exemple: "It spells « cat »." },
      ],
      exercices: [
        { type: "trou", phrase: "How do you ___ your name? (épeler)", r: "spell", explication: "« How do you spell…? »." },
        { type: "traduction", sens: "en-fr", q: "How do you spell it?", r: "comment ça s'épelle", accepte: ["comment ça s'écrit", "comment l'épelles-tu"], explication: "« Comment ça s'épelle ? »." },
        { type: "vraiFaux", affirmation: "« to spell » veut dire « parler ».", r: false, explication: "Non : to spell = épeler. Parler = to speak." },
      ],
    },
    dialogue: {
      titre: "Épelle ton prénom",
      contexte: "Tu t'inscris quelque part. Emma a besoin d'épeler ton prénom.",
      lignes: [
        { role: "Emma", en: "What is your name?", fr: "Quel est ton prénom ?" },
        { role: "Toi", en: "Lea.", fr: "Lea." },
        { role: "Emma", en: "How do you spell it?", fr: "Comment ça s'épelle ?" },
        { role: "Toi", en: "L - E - A.", fr: "L - E - A." },
        { role: "Emma", en: "Thank you!", fr: "Merci !" },
      ],
      aToi: [
        { consigne: "Demande « Comment ça s'épelle ? »", r: "how do you spell it", accepte: ["how do you spell it?"], explication: "« How do you spell it? »." },
        { consigne: "Épelle « yes » (3 lettres séparées par des tirets)", r: "y-e-s", accepte: ["y e s", "yes"], explication: "Y - E - S." },
      ],
    },
    prononciation: {
      son: "🔤",
      titre: "Les lettres qui trompent",
      explication:
        "Quatre lettres surprennent les francophones : E se dit « ii », I se dit « aï », G se dit « djii », J se dit « djéï ». Ne les confonds pas avec le français !",
      technique:
        "Répète par paires qui se ressemblent : E (« ii ») / I (« aï »), puis G (« djii ») / J (« djéï »).",
      mots: [
        { en: "E", phon: "[ii]" },
        { en: "I", phon: "[aï]" },
        { en: "G", phon: "[djii]" },
        { en: "J", phon: "[djéï]" },
      ],
      phrase: "E, I, G, J — ii, aï, djii, djéï.",
    },
    bilan: {
      resume: [
        "Les lettres anglaises se disent autrement (A = « éï », E = « ii », I = « aï »…).",
        "Les voyelles : A, E, I, O, U.",
        "Épeler : « How do you spell…? ».",
      ],
      conseil: "Épelle ton prénom à voix haute en anglais, lettre par lettre. Puis celui d'un proche.",
      motivation: "Tu peux déjà épeler ton nom en anglais. Petit détail, grand pas ! 🔤",
    },
  },

  // ==================== JOUR 3 · 28 MAI ====================
  {
    jour: 3,
    date: "28 mai",
    mois: "mai",
    titre: "Les mots de survie",
    emoji: "🆘",
    objectif: "Te débrouiller : dire oui / non, demander de l'aide, dire que tu n'as pas compris.",
    intro:
      "Les mots qui sauvent ! Avec une petite poignée de mots, tu peux déjà te débrouiller en voyage : dire oui, non, demander de l'aide, ou avouer gentiment que tu n'as pas compris.",
    vocabulaire: {
      intro: "Huit mots qui te sortent de presque toutes les situations.",
      mots: [
        { id: "mai28-yes", en: "yes", phon: "[yès]", fr: "oui", exemple: "Yes, please.", exempleFr: "Oui, s'il te plaît." },
        { id: "mai28-no", en: "no", phon: "[no]", fr: "non", exemple: "No, thank you.", exempleFr: "Non, merci." },
        { id: "mai28-maybe", en: "maybe", phon: "[mé-bi]", fr: "peut-être", exemple: "Maybe later.", exempleFr: "Peut-être plus tard." },
        { id: "mai28-help", en: "help", phon: "[hèlp]", fr: "à l'aide / aider", exemple: "Help, please!", exempleFr: "À l'aide, s'il vous plaît !" },
        { id: "mai28-water", en: "water", phon: "[wo-teur]", fr: "eau", exemple: "Some water, please.", exempleFr: "De l'eau, s'il vous plaît." },
        { id: "mai28-toilet", en: "toilet", phon: "[toï-lèt]", fr: "toilettes", exemple: "Where is the toilet?", exempleFr: "Où sont les toilettes ?" },
        { id: "mai28-okay", en: "okay", phon: "[o-kéï]", fr: "d'accord", exemple: "Okay, no problem.", exempleFr: "D'accord, pas de souci." },
        { id: "mai28-understand", en: "I don't understand", phon: "[aï dônt eun-deur-stand]", fr: "je ne comprends pas", exemple: "Sorry, I don't understand.", exempleFr: "Désolée, je ne comprends pas." },
      ],
    },
    grammaire: {
      titre: "Demander poliment : « Can I…? / Can you…? »",
      regle:
        "Pour demander quelque chose poliment, commence par « Can I…? » (Est-ce que je peux…?) ou « Can you…? » (Peux-tu…?) : Can I have water? Can you help me?",
      analogie:
        "« Can » = pouvoir. « Can I…? » revient à « Est-ce que je peux…? ». C'est LA formule magique pour demander sans froisser personne.",
      exemples: [
        { en: "Can I have water?", fr: "Puis-je avoir de l'eau ?" },
        { en: "Can you help me?", fr: "Peux-tu m'aider ?" },
        { en: "Can you repeat?", fr: "Peux-tu répéter ?" },
        { en: "Can I go?", fr: "Puis-je y aller ?" },
      ],
      exercices: [
        { type: "trou", phrase: "___ I have water, please? (puis-je)", r: "can", explication: "« Can I have…? »." },
        { type: "trou", phrase: "Can you ___ me? (aider)", r: "help", explication: "« Can you help me? »." },
        { type: "traduction", sens: "fr-en", q: "Peux-tu m'aider ?", r: "can you help me", accepte: ["can you help me?"], explication: "« Can you help me? »." },
        { type: "vraiFaux", affirmation: "« Can » veut dire « pouvoir ».", r: true, explication: "Oui : can = pouvoir." },
      ],
    },
    conjugaison: {
      titre: "« can » : pouvoir (jamais de -s !)",
      explication:
        "« can » est très facile : il ne change JAMAIS. I can, you can, she can, we can, they can. Pas de -s à he/she/it ! Et le verbe qui suit reste à sa forme simple : She can help.",
      tableau: [
        { pronom: "I", forme: "can", exemple: "I can help." },
        { pronom: "You", forme: "can", exemple: "You can go." },
        { pronom: "He / She", forme: "can", exemple: "She can swim." },
        { pronom: "We", forme: "can", exemple: "We can help." },
        { pronom: "They", forme: "can", exemple: "They can wait." },
      ],
      exercices: [
        { type: "trou", phrase: "She ___ help. (pouvoir)", r: "can", explication: "« can » ne change jamais : she can." },
        { type: "vraiFaux", affirmation: "On dit « he cans ».", r: false, explication: "Non : « can » ne prend jamais de -s → he can." },
        { type: "trou", phrase: "We ___ wait. (pouvoir)", r: "can", explication: "« We can wait »." },
      ],
    },
    dialogue: {
      titre: "Touriste perdue",
      contexte: "Tu es perdue dans une ville. Tu demandes de l'aide à Emma.",
      lignes: [
        { role: "Toi", en: "Excuse me, can you help me?", fr: "Pardon, pouvez-vous m'aider ?" },
        { role: "Emma", en: "Yes, of course!", fr: "Oui, bien sûr !" },
        { role: "Toi", en: "Where is the toilet?", fr: "Où sont les toilettes ?" },
        { role: "Emma", en: "It's over there.", fr: "C'est par là." },
        { role: "Toi", en: "Sorry, I don't understand.", fr: "Désolée, je ne comprends pas." },
        { role: "Emma", en: "There! Look.", fr: "Là ! Regarde." },
      ],
      aToi: [
        { consigne: "Demande « Pouvez-vous m'aider ? »", r: "can you help me", accepte: ["can you help me?"], explication: "« Can you help me? »." },
        { consigne: "Dis « Je ne comprends pas »", r: "i don't understand", accepte: ["i do not understand"], explication: "« I don't understand »." },
      ],
    },
    prononciation: {
      son: "[w]",
      titre: "Le W qui arrondit les lèvres",
      explication:
        "Le « w » anglais se fait en arrondissant bien les lèvres, comme un « ou » très court : water (« wo-teur »), want, week. Ce n'est surtout pas un « v » !",
      technique:
        "Avance les lèvres comme pour faire un bisou, puis dis « wou… water ». Garde les lèvres bien rondes.",
      mots: [
        { en: "water", phon: "[wo-teur]" },
        { en: "want", phon: "[wonnt]" },
        { en: "week", phon: "[wiik]" },
        { en: "way", phon: "[wéï]" },
      ],
      phrase: "I want some water.",
    },
    bilan: {
      resume: [
        "Les mots de survie : yes, no, help, water, toilet, okay…",
        "Demander poliment : « Can I…? » / « Can you…? ».",
        "« can » ne change jamais + le son W (lèvres rondes).",
      ],
      conseil: "Apprends par cœur « Can you help me? » et « I don't understand » : ce sont tes deux bouées.",
      motivation: "Avec ça, tu peux déjà voyager sans paniquer. Bravo l'exploratrice ! 🆘",
    },
  },

  // ==================== JOUR 4 · 29 MAI ====================
  {
    jour: 4,
    date: "29 mai",
    mois: "mai",
    titre: "Les jours de la semaine",
    emoji: "📅",
    objectif: "Nommer les 7 jours et dire aujourd'hui / demain.",
    intro:
      "Place au calendrier ! Les jours de la semaine, plus « aujourd'hui » et « demain ». Petit piège mignon : en anglais, les jours prennent toujours une majuscule.",
    vocabulaire: {
      intro: "Les sept jours, du lundi au dimanche.",
      mots: [
        { id: "mai29-monday", en: "Monday", phon: "[MANN-dèï]", fr: "lundi", exemple: "On Monday I work.", exempleFr: "Le lundi je travaille." },
        { id: "mai29-tuesday", en: "Tuesday", phon: "[TIOUZ-dèï]", fr: "mardi", exemple: "See you on Tuesday.", exempleFr: "À mardi." },
        { id: "mai29-wednesday", en: "Wednesday", phon: "[WÈNZ-dèï]", fr: "mercredi", exemple: "Wednesday is here.", exempleFr: "On est mercredi." },
        { id: "mai29-thursday", en: "Thursday", phon: "[THEURZ-dèï]", fr: "jeudi", exemple: "Thursday, maybe.", exempleFr: "Jeudi, peut-être." },
        { id: "mai29-friday", en: "Friday", phon: "[FRAÏ-dèï]", fr: "vendredi", exemple: "Friday at last!", exempleFr: "Vendredi enfin !" },
        { id: "mai29-saturday", en: "Saturday", phon: "[SA-teur-dèï]", fr: "samedi", exemple: "On Saturday I rest.", exempleFr: "Le samedi je me repose." },
        { id: "mai29-sunday", en: "Sunday", phon: "[SANN-dèï]", fr: "dimanche", exemple: "Sunday is calm.", exempleFr: "Dimanche est calme." },
        { id: "mai29-today", en: "today", phon: "[tou-dèï]", fr: "aujourd'hui", exemple: "Today is Monday.", exempleFr: "Aujourd'hui on est lundi." },
      ],
    },
    grammaire: {
      titre: "La majuscule + « on » devant les jours",
      regle:
        "Les jours s'écrivent TOUJOURS avec une majuscule : Monday, Friday. Et pour dire « lundi / le lundi », on met « on » devant : on Monday, on Friday.",
      analogie:
        "En français « lundi » est en minuscule. En anglais c'est une majuscule, comme un petit nom propre. Et « on Monday » = « lundi / le lundi ».",
      exemples: [
        { en: "on Monday", fr: "lundi / le lundi" },
        { en: "on Friday", fr: "vendredi" },
        { en: "Today is Tuesday.", fr: "Aujourd'hui on est mardi." },
        { en: "See you on Sunday.", fr: "À dimanche." },
      ],
      exercices: [
        { type: "vraiFaux", affirmation: "« monday » s'écrit sans majuscule.", r: false, explication: "Non : les jours prennent une majuscule → Monday." },
        { type: "trou", phrase: "See you ___ Friday. (le)", r: "on", explication: "« on Friday » = vendredi / le vendredi." },
        { type: "traduction", sens: "fr-en", q: "lundi", r: "Monday", explication: "« Monday », avec une majuscule." },
        { type: "traduction", sens: "en-fr", q: "Sunday", r: "dimanche", explication: "« Sunday » = dimanche." },
      ],
    },
    conjugaison: {
      titre: "Dire le jour : « It is + jour »",
      explication:
        "Pour dire quel jour on est : « What day is it? » → « It is Monday. » (ou « It's Monday. »). On réutilise notre ami « it is ».",
      tableau: [
        { pronom: "What day is it?", forme: "—", exemple: "Quel jour sommes-nous ?" },
        { pronom: "It is", forme: "Monday", exemple: "It is Monday. (On est lundi.)" },
        { pronom: "It's", forme: "Friday", exemple: "It's Friday! (On est vendredi !)" },
        { pronom: "Today is", forme: "Sunday", exemple: "Today is Sunday." },
      ],
      exercices: [
        { type: "trou", phrase: "What day ___ it? (verbe être)", r: "is", explication: "« What day is it? »." },
        { type: "trou", phrase: "___ is Monday. (aujourd'hui)", r: "Today", accepte: ["today"], explication: "« Today is Monday »." },
        { type: "traduction", sens: "fr-en", q: "On est vendredi. (It's…)", r: "it's friday", accepte: ["it is friday"], explication: "« It's Friday »." },
      ],
    },
    dialogue: {
      titre: "Quel jour ?",
      contexte: "Emma te demande quel jour on est et fixe un rendez-vous.",
      lignes: [
        { role: "Emma", en: "What day is it today?", fr: "Quel jour sommes-nous aujourd'hui ?" },
        { role: "Toi", en: "It's Thursday.", fr: "On est jeudi." },
        { role: "Emma", en: "See you on Saturday?", fr: "On se voit samedi ?" },
        { role: "Toi", en: "Okay! See you on Saturday.", fr: "D'accord ! À samedi." },
        { role: "Emma", en: "Great!", fr: "Super !" },
      ],
      aToi: [
        { consigne: "Dis « On est vendredi »", r: "it's friday", accepte: ["it is friday"], explication: "« It's Friday »." },
        { consigne: "Dis « À lundi »", r: "see you on monday", accepte: ["see you monday"], explication: "« See you on Monday »." },
      ],
    },
    prononciation: {
      son: "[dèï]",
      titre: "Tous les jours finissent en « -day »",
      explication:
        "Chaque jour finit par « -day », qui se dit « dèï » (pas « day » à la française). Et l'accent tombe sur la PREMIÈRE syllabe : MON-day, FRI-day.",
      technique:
        "Dis le début fort et la fin légère : « MANN-dèï », « FRAÏ-dèï ». Ne traîne pas sur « -day ».",
      mots: [
        { en: "Monday", phon: "[MANN-dèï]" },
        { en: "Friday", phon: "[FRAÏ-dèï]" },
        { en: "Sunday", phon: "[SANN-dèï]" },
        { en: "today", phon: "[tou-dèï]" },
      ],
      phrase: "Today is Monday, not Friday.",
    },
    bilan: {
      resume: [
        "Les 7 jours : Monday → Sunday (toujours une majuscule).",
        "« on Monday » = lundi ; « Today is… » pour dire le jour.",
        "Tous les jours finissent en « -day » (« dèï »).",
      ],
      conseil: "Chaque matin de cette semaine, dis à voix haute : « Today is … ». Une phrase, un réflexe.",
      motivation: "Toute ta semaine parle anglais maintenant. 📅",
    },
  },

  // ==================== JOUR 5 · 30 MAI ====================
  {
    jour: 5,
    date: "30 mai",
    mois: "mai",
    titre: "Compter de 0 à 12",
    emoji: "🔢",
    objectif: "Compter de 0 à 12 et dire ton âge.",
    intro:
      "On compte ! De zéro à douze : de quoi donner ton âge, un numéro, une quantité. En juin tu t'en serviras tout le temps — alors on prend un peu d'avance, en douceur.",
    vocabulaire: {
      intro: "Les nombres clés de 0 à 12 (on s'attarde sur les plus utiles).",
      mots: [
        { id: "mai30-zero", en: "zero", phon: "[zi-ro]", fr: "zéro", exemple: "Zero problems!", exempleFr: "Zéro problème !" },
        { id: "mai30-five", en: "five", phon: "[faïv]", fr: "cinq", exemple: "Five minutes.", exempleFr: "Cinq minutes." },
        { id: "mai30-nine", en: "nine", phon: "[naïn]", fr: "neuf", exemple: "Nine o'clock.", exempleFr: "Neuf heures." },
        { id: "mai30-ten", en: "ten", phon: "[tèn]", fr: "dix", exemple: "Ten fingers.", exempleFr: "Dix doigts." },
        { id: "mai30-eleven", en: "eleven", phon: "[i-lè-veun]", fr: "onze", exemple: "Eleven years.", exempleFr: "Onze ans." },
        { id: "mai30-twelve", en: "twelve", phon: "[twèlv]", fr: "douze", exemple: "Twelve months.", exempleFr: "Douze mois." },
        { id: "mai30-number", en: "number", phon: "[neum-beur]", fr: "nombre / numéro", exemple: "My phone number.", exempleFr: "Mon numéro de téléphone." },
        { id: "mai30-howmany", en: "how many", phon: "[haou mè-ni]", fr: "combien", exemple: "How many?", exempleFr: "Combien ?" },
      ],
    },
    grammaire: {
      titre: "Demander la quantité : « How many…? »",
      regle:
        "Pour demander « combien ? », on dit « How many…? » suivi du nom au pluriel : How many cats? How many years? La réponse est un nombre.",
      analogie:
        "« How many » = « combien (de) ». On compte des choses qu'on peut séparer (chats, ans, livres), donc le nom prend un -s : « How many books? ».",
      exemples: [
        { en: "How many?", fr: "Combien ?" },
        { en: "How many cats?", fr: "Combien de chats ?" },
        { en: "I have two.", fr: "J'en ai deux." },
        { en: "How many years?", fr: "Combien d'années ?" },
      ],
      exercices: [
        { type: "trou", phrase: "How ___ cats? (combien)", r: "many", explication: "« How many…? » = combien." },
        { type: "traduction", sens: "fr-en", q: "Combien ?", r: "how many", accepte: ["how many?"], explication: "« How many? »." },
        { type: "trou", phrase: "« 12 » se dit ___ en anglais.", r: "twelve", explication: "12 = twelve." },
        { type: "vraiFaux", affirmation: "« ten » veut dire « dix ».", r: true, explication: "Oui : ten = dix." },
      ],
    },
    conjugaison: {
      titre: "Dire son âge : « to be » + nombre",
      explication:
        "En anglais, on n'« a » pas son âge, on l'« est » : « I am ten. » (J'ai dix ans, littéralement « je suis dix »). « How old are you? » = Quel âge as-tu ?",
      tableau: [
        { pronom: "How old are you?", forme: "—", exemple: "Quel âge as-tu ?" },
        { pronom: "I", forme: "am ten", exemple: "I am ten. (J'ai 10 ans.)" },
        { pronom: "She", forme: "is nine", exemple: "She is nine." },
        { pronom: "They", forme: "are twelve", exemple: "They are twelve." },
      ],
      exercices: [
        { type: "trou", phrase: "I ___ eleven. (verbe être, âge)", r: "am", explication: "L'âge se dit avec to be : I am eleven." },
        { type: "vraiFaux", affirmation: "« I have ten years » est la bonne façon de dire son âge.", r: false, explication: "Non : on dit « I am ten » (je suis dix)." },
        { type: "trou", phrase: "How ___ are you? (vieux → âge)", r: "old", explication: "« How old are you? » = quel âge as-tu ?" },
      ],
    },
    dialogue: {
      titre: "Ton âge",
      contexte: "Emma fait connaissance et te demande ton âge.",
      lignes: [
        { role: "Emma", en: "How old are you?", fr: "Quel âge as-tu ?" },
        { role: "Toi", en: "I am eleven.", fr: "J'ai onze ans." },
        { role: "Emma", en: "And how many brothers?", fr: "Et combien de frères ?" },
        { role: "Toi", en: "I have two brothers.", fr: "J'ai deux frères." },
        { role: "Emma", en: "Nice!", fr: "Cool !" },
      ],
      aToi: [
        { consigne: "Dis « J'ai dix ans »", r: "i am ten", accepte: ["i'm ten"], explication: "« I am ten »." },
        { consigne: "Demande « Combien ? »", r: "how many", accepte: ["how many?"], explication: "« How many? »." },
      ],
    },
    prononciation: {
      son: "[v]",
      titre: "Le V qui mord la lèvre",
      explication:
        "Le « v » anglais (five, seven, eleven, twelve) se fait en posant les dents du haut sur la lèvre du bas, comme en français. Ne le transforme pas en « f » : « five » (vvv), pas « fife ».",
      technique:
        "Pose tes dents du haut sur ta lèvre du bas et fais vibrer : « vvv… five ». Tu dois sentir un petit chatouillis.",
      mots: [
        { en: "five", phon: "[faïv]" },
        { en: "seven", phon: "[sè-veun]" },
        { en: "eleven", phon: "[i-lè-veun]" },
        { en: "twelve", phon: "[twèlv]" },
      ],
      phrase: "Five, seven, eleven, twelve.",
    },
    bilan: {
      resume: [
        "Compter de 0 à 12 (zero… ten, eleven, twelve).",
        "« How many…? » = combien ; l'âge se dit avec to be (« I am ten »).",
        "Le son V (dents sur la lèvre).",
      ],
      conseil: "Compte de 0 à 12 à voix haute, puis donne ton âge : « I am … ».",
      motivation: "Zéro à douze, et zéro stress. Plus qu'un jour avant juin ! 🔢",
    },
  },

  // ==================== JOUR 6 · 31 MAI ====================
  {
    jour: 6,
    date: "31 mai",
    mois: "mai",
    titre: "Prête pour juin !",
    emoji: "🚀",
    objectif: "Rassembler la mise en route de mai et te lancer vers juin en confiance.",
    intro:
      "Dernier jour de mai ! 🚀 On rassemble tout ce que tu as découvert cette semaine — et demain, le 1er juin, commence le vrai parcours des bases, en apprenant à dire « Hello ». Tu es prête.",
    vocabulaire: {
      intro: "Un petit best-of de mai, à garder bien au chaud.",
      mots: [
        { id: "mai31-yes", en: "yes", phon: "[yès]", fr: "oui", exemple: "Yes, of course.", exempleFr: "Oui, bien sûr." },
        { id: "mai31-no", en: "no", phon: "[no]", fr: "non", exemple: "No, thank you.", exempleFr: "Non, merci." },
        { id: "mai31-water", en: "water", phon: "[wo-teur]", fr: "eau", exemple: "Some water, please.", exempleFr: "De l'eau, s'il te plaît." },
        { id: "mai31-help", en: "help", phon: "[hèlp]", fr: "à l'aide / aider", exemple: "Can you help me?", exempleFr: "Peux-tu m'aider ?" },
        { id: "mai31-today", en: "today", phon: "[tou-dèï]", fr: "aujourd'hui", exemple: "Today is Sunday.", exempleFr: "Aujourd'hui on est dimanche." },
        { id: "mai31-monday", en: "Monday", phon: "[MANN-dèï]", fr: "lundi", exemple: "See you on Monday.", exempleFr: "À lundi." },
        { id: "mai31-ten", en: "ten", phon: "[tèn]", fr: "dix", exemple: "I am ten.", exempleFr: "J'ai dix ans." },
        { id: "mai31-number", en: "number", phon: "[neum-beur]", fr: "nombre / numéro", exemple: "A phone number.", exempleFr: "Un numéro de téléphone." },
      ],
    },
    grammaire: {
      titre: "Récap de mai",
      regle:
        "Ce que tu as vu cette semaine : « the » = le / la / les ; les jours prennent une majuscule ; « Can I…? / Can you…? » pour demander ; « How many…? » pour la quantité.",
      analogie:
        "Quatre petits réflexes de débutante… qui te font déjà tenir debout en anglais. Demain, on construit dessus.",
      exemples: [
        { en: "the table", fr: "la table" },
        { en: "on Monday", fr: "lundi" },
        { en: "Can you help me?", fr: "Peux-tu m'aider ?" },
        { en: "How many?", fr: "Combien ?" },
      ],
      exercices: [
        { type: "trou", phrase: "___ table (le / la)", r: "the", explication: "« the » = le / la / les." },
        { type: "trou", phrase: "Can you ___ me? (aider)", r: "help", explication: "« Can you help me? »." },
        { type: "vraiFaux", affirmation: "Les jours prennent une majuscule.", r: true, explication: "Oui : Monday, Friday…" },
        { type: "traduction", sens: "fr-en", q: "Combien ?", r: "how many", accepte: ["how many?"], explication: "« How many? »." },
      ],
    },
    conjugaison: {
      titre: "Récap : it's / can / to be (âge)",
      explication:
        "Tes premières structures : « It's… » (c'est), « can » (pouvoir, jamais de -s), et « to be » pour l'âge (« I am ten »). Demain, tu rencontres « to be » pour de bon.",
      tableau: [
        { pronom: "It is", forme: "it's", exemple: "It's a taxi." },
        { pronom: "I / you / she", forme: "can", exemple: "She can help." },
        { pronom: "I", forme: "am", exemple: "I am ten." },
      ],
      exercices: [
        { type: "trou", phrase: "___ a hotel. (c'est, version courte)", r: "it's", accepte: ["its"], explication: "« It's a hotel »." },
        { type: "vraiFaux", affirmation: "On dit « she cans ».", r: false, explication: "Non : « can » ne prend jamais de -s." },
        { type: "trou", phrase: "I ___ eleven. (âge)", r: "am", explication: "L'âge avec to be : « I am eleven »." },
      ],
    },
    dialogue: {
      titre: "Rendez-vous en juin",
      contexte: "Emma te félicite pour ta première semaine et t'annonce la suite.",
      lignes: [
        { role: "Emma", en: "Well done for this week!", fr: "Bravo pour cette semaine !" },
        { role: "Toi", en: "Thank you!", fr: "Merci !" },
        { role: "Emma", en: "Tomorrow we say « Hello » in English.", fr: "Demain on apprend à dire « Hello » en anglais." },
        { role: "Toi", en: "Okay! See you tomorrow.", fr: "D'accord ! À demain." },
        { role: "Emma", en: "See you in June!", fr: "À juin !" },
      ],
      aToi: [
        { consigne: "Dis « Merci »", r: "thank you", accepte: ["thanks"], explication: "« Thank you »." },
        { consigne: "Dis « À demain »", r: "see you tomorrow", accepte: ["see you"], explication: "« See you tomorrow »." },
      ],
    },
    prononciation: {
      son: "🔁",
      titre: "Tes sons de la semaine",
      explication:
        "Reprends tes trois sons de mai : le W aux lèvres rondes (water), le « -day » des jours (Monday), et le V qui mord la lèvre (five). Une dernière fois, tranquillement.",
      technique:
        "Dis la phrase ci-dessous lentement en soignant chaque son, puis recommence un peu plus vite.",
      mots: [
        { en: "water", phon: "[wo-teur]" },
        { en: "Monday", phon: "[MANN-dèï]" },
        { en: "five", phon: "[faïv]" },
        { en: "today", phon: "[tou-dèï]" },
      ],
      phrase: "Today is Monday — I want water.",
    },
    bilan: {
      resume: [
        "Tu as découvert l'anglais : mots transparents, alphabet, mots de survie, jours, nombres.",
        "Tes premières structures : the, it's, can, How many, l'âge.",
        "Tu démarres juin avec une vraie longueur d'avance. 🌟",
      ],
      conseil: "Ce soir, relis tes 6 jours de mai en diagonale. Demain, on attaque juin par « Hello » — tout léger.",
      motivation: "Six jours, et tu n'es déjà plus tout à fait débutante. Rendez-vous en juin ! 🚀",
    },
  },

  // ==================== JOUR 7 · 1 JUIN ====================
  {
    jour: 7,
    date: "1 juin",
    mois: "juin",
    titre: "Dire bonjour",
    emoji: "👋",
    objectif: "Saluer quelqu'un et engager le contact en anglais.",
    intro:
      "Premier jour de juin, et le vrai début des bases ! 🌸 Aujourd'hui on apprend à dire bonjour, à se saluer, et on rencontre déjà le pronom « I » et le verbe le plus important de l'anglais : to be. On avance pas à pas, sans aucune pression.",
    vocabulaire: {
      intro: "Six façons de saluer, du plus formel au plus familier.",
      mots: [
        { id: "j1-hello", en: "hello", phon: "[hèl-lo]", fr: "bonjour / salut", exemple: "Hello! Nice to see you.", exempleFr: "Bonjour ! Contente de te voir." },
        { id: "j1-hi", en: "hi", phon: "[haï]", fr: "salut (familier)", exemple: "Hi, I am Lea.", exempleFr: "Salut, je m'appelle Lea." },
        { id: "j1-goodbye", en: "goodbye", phon: "[goud-baï]", fr: "au revoir", exemple: "Goodbye, have a nice day!", exempleFr: "Au revoir, bonne journée !" },
        { id: "j1-good-morning", en: "good morning", phon: "[goud mor-ningue]", fr: "bonjour (le matin)", exemple: "Good morning, Emma!", exempleFr: "Bonjour Emma !" },
        { id: "j1-good-night", en: "good night", phon: "[goud naït]", fr: "bonne nuit", exemple: "Good night, see you tomorrow.", exempleFr: "Bonne nuit, à demain." },
        { id: "j1-see-you", en: "see you", phon: "[sii you]", fr: "à plus / à bientôt", exemple: "See you soon!", exempleFr: "À bientôt !" },
      ],
    },
    grammaire: {
      titre: "Les pronoms personnels sujets",
      regle:
        "En anglais, le sujet est OBLIGATOIRE devant le verbe. Les pronoms sujets sont : I (je), you (tu/vous), he (il), she (elle), it (il/elle pour une chose ou un animal), we (nous), they (ils/elles).",
      analogie:
        "C'est comme en français (je, tu, il…), avec deux pièges : « you » sert pour « tu » ET « vous », et « I » (je) s'écrit TOUJOURS en majuscule, même au milieu d'une phrase.",
      exemples: [
        { en: "I am Lea.", fr: "Je suis Lea." },
        { en: "You are my friend.", fr: "Tu es mon ami(e)." },
        { en: "She is here.", fr: "Elle est là." },
        { en: "We are happy.", fr: "Nous sommes contents." },
      ],
      exercices: [
        { type: "trou", phrase: "___ am Emma. (je)", r: "I", explication: "« I » = je, et il s'écrit toujours en majuscule." },
        { type: "traduction", sens: "fr-en", q: "elle", r: "she", explication: "« She » = elle." },
        { type: "trou", phrase: "___ are friends. (nous)", r: "we", explication: "« We » = nous." },
        { type: "vraiFaux", affirmation: "« You » veut dire seulement « tu ».", r: false, explication: "Non : « you » = tu ET vous." },
      ],
    },
    conjugaison: {
      titre: "Le verbe « to be » (être) au présent",
      explication:
        "« To be » = être. Il a trois formes au présent : am, is, are. On l'utilise sans arrêt : pour dire qui on est, comment on va, où on est.",
      tableau: [
        { pronom: "I", forme: "am", exemple: "I am happy. (Je suis content·e.)" },
        { pronom: "You", forme: "are", exemple: "You are kind. (Tu es gentil·le.)" },
        { pronom: "He / She / It", forme: "is", exemple: "She is here. (Elle est là.)" },
        { pronom: "We", forme: "are", exemple: "We are ready. (Nous sommes prêts.)" },
        { pronom: "They", forme: "are", exemple: "They are friends. (Ils sont amis.)" },
      ],
      exercices: [
        { type: "conjugaison", verbe: "to be", q: "I ___ Lea.", r: "am", explication: "Avec « I » → am." },
        { type: "conjugaison", verbe: "to be", q: "He ___ my brother.", r: "is", explication: "Avec he/she/it → is." },
        { type: "conjugaison", verbe: "to be", q: "You ___ nice.", r: "are", explication: "Avec « you » → are." },
        { type: "conjugaison", verbe: "to be", q: "We ___ happy.", r: "are", explication: "Avec « we » → are." },
        { type: "conjugaison", verbe: "to be", q: "It ___ a cat.", r: "is", explication: "Avec « it » → is." },
      ],
    },
    dialogue: {
      titre: "Première rencontre",
      contexte: "Tu rencontres Emma pour la première fois. Elle vient te dire bonjour.",
      lignes: [
        { role: "Emma", en: "Hello! I am Emma.", fr: "Bonjour ! Je suis Emma." },
        { role: "Toi", en: "Hello! I am Lea.", fr: "Bonjour ! Je suis Lea." },
        { role: "Emma", en: "Nice to meet you! How are you?", fr: "Enchantée ! Comment vas-tu ?" },
        { role: "Toi", en: "I am fine, thank you.", fr: "Je vais bien, merci." },
        { role: "Emma", en: "Great! Goodbye, see you soon.", fr: "Super ! Au revoir, à bientôt." },
      ],
      aToi: [
        { consigne: "Salue Emma : dis « Bonjour ! »", r: "hello", accepte: ["hi"], explication: "« Hello » ou « Hi »." },
        { consigne: "Réponds : « Je vais bien, merci »", r: "I am fine, thank you", accepte: ["i'm fine, thank you", "i am fine thank you", "i am fine thanks"], explication: "« I am fine, thank you »." },
        { consigne: "Dis « Au revoir »", r: "goodbye", accepte: ["bye"], explication: "« Goodbye » ou « bye »." },
      ],
    },
    prononciation: {
      son: "[h]",
      titre: "Le H aspiré",
      explication:
        "En anglais, le « h » au début d'un mot se prononce : c'est un petit souffle. En français on ne l'entend pas (« heure » = « eure »). En anglais, on l'entend bien !",
      technique:
        "Mets ta main devant ta bouche et souffle doucement, comme pour faire de la buée sur une vitre, juste avant le mot : h…ello.",
      mots: [
        { en: "hello", phon: "[hèl-lo]" },
        { en: "hi", phon: "[haï]" },
        { en: "how", phon: "[haou]" },
        { en: "happy", phon: "[ha-pi]" },
      ],
      phrase: "Hello! How are you?",
    },
    bilan: {
      resume: [
        "Tu sais saluer : hello, hi, goodbye, good morning, good night.",
        "Tu connais les pronoms (I, you, he, she…) et le verbe to be (am, is, are).",
        "Tu as eu ta toute première conversation en anglais. 🎉",
      ],
      conseil:
        "Ce soir, avant de dormir, redis à voix haute : « Hello, I am … . I am fine, thank you. » Dire à voix haute aide énormément à mémoriser.",
      motivation: "Premier jour bouclé. Tu viens de poser la première pierre — la plus importante. 🌟",
    },
  },

  // ==================== JOUR 8 · 2 JUIN ====================
  {
    jour: 8,
    date: "2 juin",
    mois: "juin",
    titre: "Merci, s'il te plaît",
    emoji: "🙏",
    objectif: "Être poli·e : remercier, demander, s'excuser.",
    intro:
      "Aujourd'hui, la politesse — ces petits mots magiques qui ouvrent toutes les portes. On découvre aussi les articles « a » et « an », et le fameux son « TH », typiquement anglais.",
    vocabulaire: {
      intro: "Les mots de la politesse, à glisser partout.",
      mots: [
        { id: "j2-please", en: "please", phon: "[pliiz]", fr: "s'il te plaît", exemple: "A tea, please.", exempleFr: "Un thé, s'il te plaît." },
        { id: "j2-thank-you", en: "thank you", phon: "[thènk you]", fr: "merci", exemple: "Thank you so much!", exempleFr: "Merci beaucoup !" },
        { id: "j2-thanks", en: "thanks", phon: "[thènks]", fr: "merci (familier)", exemple: "Thanks, Emma!", exempleFr: "Merci Emma !" },
        { id: "j2-sorry", en: "sorry", phon: "[so-ri]", fr: "désolé·e / pardon", exemple: "Sorry, I am late.", exempleFr: "Désolée, je suis en retard." },
        { id: "j2-excuse-me", en: "excuse me", phon: "[ex-kiouz mi]", fr: "excuse-moi / pardon", exemple: "Excuse me, where is the door?", exempleFr: "Pardon, où est la porte ?" },
        { id: "j2-welcome", en: "you're welcome", phon: "[your wèl-keum]", fr: "de rien", exemple: "Thank you! — You're welcome.", exempleFr: "Merci ! — De rien." },
      ],
    },
    grammaire: {
      titre: "Les articles « a » et « an »",
      regle:
        "Devant un nom singulier, on met « a » (un/une) : a cat, a dog. Mais devant un SON voyelle (a, e, i, o, u), on met « an » : an apple, an orange.",
      analogie:
        "C'est comme « un/une », sauf qu'en anglais le choix dépend du SON qui suit, pas du genre. Le « n » de « an » sert juste à mieux enchaîner, comme « l'arbre » au lieu de « le arbre ».",
      exemples: [
        { en: "a cat", fr: "un chat" },
        { en: "an apple", fr: "une pomme" },
        { en: "a friend", fr: "un ami" },
        { en: "an orange", fr: "une orange" },
      ],
      exercices: [
        { type: "trou", phrase: "I have ___ cat. (un)", r: "a", explication: "« cat » commence par une consonne → a." },
        { type: "trou", phrase: "It is ___ apple. (une)", r: "an", explication: "« apple » commence par un son voyelle → an." },
        { type: "vraiFaux", affirmation: "On dit « a orange ».", r: false, explication: "Non : orange commence par un son voyelle → an orange." },
        { type: "traduction", sens: "fr-en", q: "un ami", r: "a friend", explication: "« a friend »." },
      ],
    },
    conjugaison: {
      titre: "« To be » : les contractions",
      explication:
        "À l'oral et à l'écrit familier, on raccourcit « to be » : I am → I'm, you are → you're, he is → he's, she is → she's, we are → we're, they are → they're.",
      tableau: [
        { pronom: "I am", forme: "I'm", exemple: "I'm happy." },
        { pronom: "You are", forme: "you're", exemple: "You're kind." },
        { pronom: "He is", forme: "he's", exemple: "He's here." },
        { pronom: "She is", forme: "she's", exemple: "She's my friend." },
        { pronom: "They are", forme: "they're", exemple: "They're ready." },
      ],
      exercices: [
        { type: "trou", phrase: "___ happy. (je suis, version courte)", r: "I'm", accepte: ["im"], explication: "« I am » → « I'm »." },
        { type: "trou", phrase: "___ my friend. (tu es, version courte)", r: "you're", accepte: ["youre"], explication: "« You are » → « you're »." },
        { type: "conjugaison", verbe: "to be", q: "She ___ here. (forme longue)", r: "is", explication: "« She is here »." },
        { type: "vraiFaux", affirmation: "« He's » veut dire « he is ».", r: true, explication: "Oui : he's = he is." },
      ],
    },
    dialogue: {
      titre: "Au café",
      contexte: "Tu commandes une boisson dans un café. Le serveur (Emma) te répond.",
      lignes: [
        { role: "Emma", en: "Hello! What would you like?", fr: "Bonjour ! Que désirez-vous ?" },
        { role: "Toi", en: "A coffee, please.", fr: "Un café, s'il vous plaît." },
        { role: "Emma", en: "Here you are.", fr: "Voilà." },
        { role: "Toi", en: "Thank you!", fr: "Merci !" },
        { role: "Emma", en: "You're welcome!", fr: "De rien !" },
      ],
      aToi: [
        { consigne: "Commande « un café, s'il te plaît »", r: "a coffee, please", accepte: ["a coffee please", "coffee please", "a coffee"], explication: "« A coffee, please »." },
        { consigne: "Remercie : dis « merci »", r: "thank you", accepte: ["thanks"], explication: "« Thank you » ou « thanks »." },
      ],
    },
    prononciation: {
      son: "[θ]",
      titre: "Le fameux TH",
      explication:
        "Le « th » n'existe pas en français. On met le bout de la langue entre les dents et on souffle. Dans « thank you », ce n'est ni un « s » ni un « z » : c'est un son soufflé.",
      technique:
        "Mords très légèrement le bout de ta langue entre tes dents, puis souffle : « th… ». Va lentement avant d'accélérer.",
      mots: [
        { en: "thank", phon: "[thènk]" },
        { en: "think", phon: "[thinque]" },
        { en: "three", phon: "[thrii]" },
        { en: "the", phon: "[zeu]" },
      ],
      phrase: "Thank you for the three things.",
    },
    bilan: {
      resume: [
        "La politesse : please, thank you, sorry, excuse me, you're welcome.",
        "Les articles « a » / « an » selon le son qui suit.",
        "Les contractions de to be (I'm, you're…) et le son TH.",
      ],
      conseil: "Glisse un « please » et un « thank you » dans ta journée, même mentalement, pour prendre le réflexe.",
      motivation: "Tu es déjà plus à l'aise. C'est exactement le bon rythme. 💛",
    },
  },

  // ==================== JOUR 9 · 3 JUIN ====================
  {
    jour: 9,
    date: "3 juin",
    mois: "juin",
    titre: "Les couleurs",
    emoji: "🎨",
    objectif: "Nommer les couleurs et décrire des objets.",
    intro:
      "Du peps aujourd'hui : les couleurs ! On apprend aussi où placer l'adjectif (attention, c'est l'inverse du français), et on s'attaque au « R » anglais, tout en douceur.",
    vocabulaire: {
      intro: "Six couleurs de base pour décrire le monde.",
      mots: [
        { id: "j3-red", en: "red", phon: "[rèd]", fr: "rouge", exemple: "The apple is red.", exempleFr: "La pomme est rouge." },
        { id: "j3-blue", en: "blue", phon: "[blou]", fr: "bleu", exemple: "The sky is blue.", exempleFr: "Le ciel est bleu." },
        { id: "j3-green", en: "green", phon: "[griin]", fr: "vert", exemple: "The grass is green.", exempleFr: "L'herbe est verte." },
        { id: "j3-yellow", en: "yellow", phon: "[yè-lo]", fr: "jaune", exemple: "The sun is yellow.", exempleFr: "Le soleil est jaune." },
        { id: "j3-black", en: "black", phon: "[blak]", fr: "noir", exemple: "The cat is black.", exempleFr: "Le chat est noir." },
        { id: "j3-white", en: "white", phon: "[waït]", fr: "blanc", exemple: "The snow is white.", exempleFr: "La neige est blanche." },
      ],
    },
    grammaire: {
      titre: "La place de l'adjectif",
      regle:
        "En anglais, l'adjectif (couleur, taille…) se place AVANT le nom : a red car. Et il ne s'accorde jamais : « red » reste « red » au pluriel.",
      analogie:
        "C'est l'inverse du français : on dit « une voiture rouge », mais en anglais « a red car » (rouge + voiture). Et pas de « s » sur l'adjectif : « red cars », jamais « reds cars ».",
      exemples: [
        { en: "a red car", fr: "une voiture rouge" },
        { en: "a blue door", fr: "une porte bleue" },
        { en: "two black cats", fr: "deux chats noirs" },
        { en: "white shoes", fr: "des chaussures blanches" },
      ],
      exercices: [
        { type: "trou", phrase: "I have a ___ car. (rouge)", r: "red", explication: "L'adjectif se place avant : a red car." },
        { type: "vraiFaux", affirmation: "On dit « a car red ».", r: false, explication: "Non : l'adjectif est AVANT le nom → a red car." },
        { type: "traduction", sens: "fr-en", q: "une porte bleue", r: "a blue door", explication: "« a blue door » (bleu + porte)." },
        { type: "vraiFaux", affirmation: "Au pluriel, « red » devient « reds ».", r: false, explication: "Non : l'adjectif ne s'accorde jamais." },
      ],
    },
    conjugaison: {
      titre: "« To be » + adjectif (décrire)",
      explication:
        "Pour décrire, on utilise to be + l'adjectif : The sky is blue. I am happy. Attention, on ne traduit pas mot à mot : « j'ai faim » se dit « I am hungry » (je SUIS affamé).",
      tableau: [
        { pronom: "The apple", forme: "is", exemple: "The apple is red." },
        { pronom: "The cats", forme: "are", exemple: "The cats are black." },
        { pronom: "I", forme: "am", exemple: "I am happy." },
        { pronom: "You", forme: "are", exemple: "You are tall." },
        { pronom: "It", forme: "is", exemple: "It is white." },
      ],
      exercices: [
        { type: "conjugaison", verbe: "to be", q: "The sky ___ blue.", r: "is", explication: "« sky » (singulier) → is." },
        { type: "conjugaison", verbe: "to be", q: "The flowers ___ yellow.", r: "are", explication: "« flowers » (pluriel) → are." },
        { type: "conjugaison", verbe: "to be", q: "I ___ happy.", r: "am", explication: "Avec « I » → am." },
        { type: "trou", phrase: "The snow ___ white. (verbe être)", r: "is", explication: "« snow » → is." },
      ],
    },
    dialogue: {
      titre: "De quelle couleur ?",
      contexte: "Emma te montre des objets et te demande leur couleur.",
      lignes: [
        { role: "Emma", en: "What colour is the apple?", fr: "De quelle couleur est la pomme ?" },
        { role: "Toi", en: "It is red.", fr: "Elle est rouge." },
        { role: "Emma", en: "And the sky?", fr: "Et le ciel ?" },
        { role: "Toi", en: "It is blue.", fr: "Il est bleu." },
        { role: "Emma", en: "Perfect!", fr: "Parfait !" },
      ],
      aToi: [
        { consigne: "Dis « C'est rouge » (it is…)", r: "it is red", accepte: ["it's red", "red"], explication: "« It is red » / « It's red »." },
        { consigne: "Dis « C'est bleu »", r: "it is blue", accepte: ["it's blue", "blue"], explication: "« It is blue »." },
      ],
    },
    prononciation: {
      son: "[r]",
      titre: "Le R doux",
      explication:
        "Le « r » anglais ne roule pas et ne gratte pas la gorge comme en français. La langue se recule un peu sans toucher le palais : un son doux, presque « mou ».",
      technique:
        "Commence comme pour dire « w », mais la langue reculée, sans vibration dans la gorge. Essaie lentement : « red », « green ».",
      mots: [
        { en: "red", phon: "[rèd]" },
        { en: "green", phon: "[griin]" },
        { en: "orange", phon: "[o-rinj]" },
        { en: "very", phon: "[vé-ri]" },
      ],
      phrase: "The red and green car is very nice.",
    },
    bilan: {
      resume: [
        "Six couleurs : red, blue, green, yellow, black, white.",
        "L'adjectif se place AVANT le nom et ne s'accorde pas.",
        "Décrire avec to be + le R anglais bien doux.",
      ],
      conseil: "En marchant, nomme en anglais la couleur de trois choses que tu vois.",
      motivation: "Tu commences à VOIR le monde en anglais. Bravo. 🎨",
    },
  },

  // ==================== JOUR 10 · 4 JUIN ====================
  {
    jour: 10,
    date: "4 juin",
    mois: "juin",
    titre: "Les chiffres",
    emoji: "🔢",
    objectif: "Compter de 1 à 8 et parler de quantités.",
    intro:
      "On compte aujourd'hui ! Les chiffres de base, le pluriel des noms (le « s » qu'on entend, lui !), et le verbe « to have » pour dire ce qu'on possède.",
    vocabulaire: {
      intro: "Les chiffres de un à huit (la suite viendra vite).",
      mots: [
        { id: "j4-one", en: "one", phon: "[weun]", fr: "un", exemple: "I have one cat.", exempleFr: "J'ai un chat." },
        { id: "j4-two", en: "two", phon: "[tou]", fr: "deux", exemple: "Two coffees, please.", exempleFr: "Deux cafés, s'il vous plaît." },
        { id: "j4-three", en: "three", phon: "[thrii]", fr: "trois", exemple: "Three friends.", exempleFr: "Trois amis." },
        { id: "j4-four", en: "four", phon: "[for]", fr: "quatre", exemple: "Four days.", exempleFr: "Quatre jours." },
        { id: "j4-five", en: "five", phon: "[faïv]", fr: "cinq", exemple: "Five books.", exempleFr: "Cinq livres." },
        { id: "j4-six", en: "six", phon: "[siks]", fr: "six", exemple: "Six o'clock.", exempleFr: "Six heures." },
        { id: "j4-seven", en: "seven", phon: "[sè-veun]", fr: "sept", exemple: "Seven days a week.", exempleFr: "Sept jours par semaine." },
        { id: "j4-eight", en: "eight", phon: "[éït]", fr: "huit", exemple: "Eight cats!", exempleFr: "Huit chats !" },
      ],
    },
    grammaire: {
      titre: "Le pluriel des noms (-s)",
      regle:
        "Pour mettre un nom au pluriel, on ajoute -s : a cat → two cats, a book → books. Si le mot finit par -s, -x, -ch ou -sh, on ajoute -es : a box → boxes.",
      analogie:
        "Comme le « s » du pluriel français, mais en anglais on l'ENTEND à l'oral (« cats » se prononce avec le s), alors qu'en français il est muet.",
      exemples: [
        { en: "one cat → two cats", fr: "un chat → deux chats" },
        { en: "a dog → dogs", fr: "un chien → des chiens" },
        { en: "a box → boxes", fr: "une boîte → des boîtes" },
        { en: "a friend → friends", fr: "un ami → des amis" },
      ],
      exercices: [
        { type: "trou", phrase: "I have two ___ . (cat, au pluriel)", r: "cats", explication: "cat + s = cats." },
        { type: "trou", phrase: "three ___ (box, au pluriel)", r: "boxes", explication: "box finit par -x → boxes." },
        { type: "traduction", sens: "fr-en", q: "des amis", r: "friends", explication: "friend + s = friends." },
        { type: "vraiFaux", affirmation: "Le pluriel de « dog » est « dogs ».", r: true, explication: "Oui : dog + s = dogs." },
      ],
    },
    conjugaison: {
      titre: "Le verbe « to have » (avoir)",
      explication:
        "« To have » = avoir. I have, you have, he/she/it HAS (attention, -s à la 3e personne), we have, they have. Il sert à dire ce qu'on possède : I have two cats.",
      tableau: [
        { pronom: "I", forme: "have", exemple: "I have a cat." },
        { pronom: "You", forme: "have", exemple: "You have a book." },
        { pronom: "He / She / It", forme: "has", exemple: "She has a dog." },
        { pronom: "We", forme: "have", exemple: "We have three books." },
        { pronom: "They", forme: "have", exemple: "They have friends." },
      ],
      exercices: [
        { type: "conjugaison", verbe: "to have", q: "I ___ two cats.", r: "have", explication: "Avec « I » → have." },
        { type: "conjugaison", verbe: "to have", q: "She ___ a dog.", r: "has", explication: "Avec he/she/it → has." },
        { type: "conjugaison", verbe: "to have", q: "We ___ three books.", r: "have", explication: "Avec « we » → have." },
        { type: "vraiFaux", affirmation: "On dit « he have ».", r: false, explication: "Non : he HAS." },
      ],
    },
    dialogue: {
      titre: "Combien ?",
      contexte: "Emma te demande combien tu as de certaines choses.",
      lignes: [
        { role: "Emma", en: "How many cats do you have?", fr: "Combien de chats as-tu ?" },
        { role: "Toi", en: "I have two cats.", fr: "J'ai deux chats." },
        { role: "Emma", en: "And how many books?", fr: "Et combien de livres ?" },
        { role: "Toi", en: "I have five books.", fr: "J'ai cinq livres." },
        { role: "Emma", en: "Wonderful!", fr: "Magnifique !" },
      ],
      aToi: [
        { consigne: "Dis « J'ai trois chats »", r: "i have three cats", accepte: ["i have 3 cats"], explication: "« I have three cats »." },
        { consigne: "Dis « J'ai cinq livres »", r: "i have five books", accepte: ["i have 5 books"], explication: "« I have five books »." },
      ],
    },
    prononciation: {
      son: "[iː]",
      titre: "Le i long",
      explication:
        "Le « ee » et le « ea » se prononcent souvent « ii », un i long et tiré : three (« thrii »), green (« griin »), see (« sii »). Ne le coupe pas trop court.",
      technique: "Souris un peu et tire le son « iii », plus long qu'un « i » français.",
      mots: [
        { en: "three", phon: "[thrii]" },
        { en: "green", phon: "[griin]" },
        { en: "see", phon: "[sii]" },
        { en: "tea", phon: "[tii]" },
      ],
      phrase: "I see three green trees.",
    },
    bilan: {
      resume: [
        "Compter de 1 à 8 (et bientôt au-delà).",
        "Le pluriel en -s / -es, qu'on entend à l'oral.",
        "Le verbe to have (attention : he/she/it HAS).",
      ],
      conseil: "Compte les marches d'un escalier en anglais aujourd'hui.",
      motivation: "One, two, three… et te voilà déjà au jour 4 ! 🔢",
    },
  },

  // ==================== JOUR 11 · 5 JUIN ====================
  {
    jour: 11,
    date: "5 juin",
    mois: "juin",
    titre: "Se présenter",
    emoji: "🪪",
    objectif: "Dire ton nom, d'où tu viens, et poser ces questions.",
    intro:
      "Grand jour : tu vas pouvoir te présenter ! Ton nom, ton pays. On apprend aussi à poser des questions avec to be, et à soigner l'accent tonique.",
    vocabulaire: {
      intro: "Les mots pour parler de toi.",
      mots: [
        { id: "j5-name", en: "name", phon: "[nèïm]", fr: "nom / prénom", exemple: "My name is Lea.", exempleFr: "Je m'appelle Lea." },
        { id: "j5-from", en: "from", phon: "[from]", fr: "de (origine)", exemple: "I am from France.", exempleFr: "Je viens de France." },
        { id: "j5-country", en: "country", phon: "[keun-tri]", fr: "pays", exemple: "France is a country.", exempleFr: "La France est un pays." },
        { id: "j5-french", en: "French", phon: "[frènch]", fr: "français·e", exemple: "I am French.", exempleFr: "Je suis française." },
        { id: "j5-english", en: "English", phon: "[in-glich]", fr: "anglais (la langue)", exemple: "I learn English.", exempleFr: "J'apprends l'anglais." },
        { id: "j5-meet", en: "nice to meet you", phon: "[naïs tou miit you]", fr: "enchanté·e", exemple: "Nice to meet you!", exempleFr: "Enchantée !" },
      ],
    },
    grammaire: {
      titre: "Les questions avec « to be »",
      regle:
        "Pour poser une question avec to be, on INVERSE le verbe et le sujet : You are → Are you? On ajoute souvent un mot question devant : What is your name? Where are you from?",
      analogie:
        "En français on dit « est-ce que » ou on monte la voix. En anglais, on met simplement to be devant le sujet : « Are you ready? » = « Es-tu prêt ? ».",
      exemples: [
        { en: "What is your name?", fr: "Comment t'appelles-tu ?" },
        { en: "Where are you from?", fr: "D'où viens-tu ?" },
        { en: "Are you French?", fr: "Es-tu français·e ?" },
        { en: "How are you?", fr: "Comment vas-tu ?" },
      ],
      exercices: [
        { type: "trou", phrase: "What ___ your name? (verbe être)", r: "is", explication: "« What is your name? »." },
        { type: "trou", phrase: "Where are you ___ ? (de)", r: "from", explication: "« Where are you from? »." },
        { type: "traduction", sens: "fr-en", q: "Comment t'appelles-tu ? (What…)", r: "what is your name", accepte: ["what's your name", "what is your name?"], explication: "« What is your name? »." },
        { type: "vraiFaux", affirmation: "« Are you ready? » est une question.", r: true, explication: "Oui : le verbe to be passe devant le sujet." },
      ],
    },
    conjugaison: {
      titre: "« To be » : questions et réponses courtes",
      explication:
        "Pour répondre, on reprend le pronom + le verbe : Yes, I am. / No, I am not. Ex : Are you French? → Yes, I am.",
      tableau: [
        { pronom: "Are you happy?", forme: "Yes, I am.", exemple: "— Yes, I am." },
        { pronom: "Is she French?", forme: "Yes, she is.", exemple: "— Yes, she is." },
        { pronom: "Are they ready?", forme: "Yes, they are.", exemple: "— Yes, they are." },
        { pronom: "Am I right?", forme: "Yes, you are.", exemple: "— Yes, you are." },
      ],
      exercices: [
        { type: "trou", phrase: "Are you ready? — Yes, I ___ .", r: "am", explication: "On reprend « I am »." },
        { type: "trou", phrase: "Is he French? — Yes, he ___ .", r: "is", explication: "On reprend « he is »." },
        { type: "conjugaison", verbe: "to be", q: "___ you from France? (verbe en tête)", r: "are", explication: "« Are you from France? »." },
        { type: "vraiFaux", affirmation: "On répond « Yes, I am » à « Are you happy? ».", r: true, explication: "Oui : on reprend le sujet + le verbe." },
      ],
    },
    dialogue: {
      titre: "Faire connaissance",
      contexte: "Tu rencontres quelqu'un et vous faites connaissance.",
      lignes: [
        { role: "Emma", en: "Hello! What is your name?", fr: "Bonjour ! Comment t'appelles-tu ?" },
        { role: "Toi", en: "My name is Lea.", fr: "Je m'appelle Lea." },
        { role: "Emma", en: "Where are you from?", fr: "D'où viens-tu ?" },
        { role: "Toi", en: "I am from France.", fr: "Je viens de France." },
        { role: "Emma", en: "Nice to meet you!", fr: "Enchantée !" },
        { role: "Toi", en: "Nice to meet you too!", fr: "Enchantée aussi !" },
      ],
      aToi: [
        { consigne: "Dis « Je m'appelle Lea »", r: "my name is lea", accepte: ["i am lea", "i'm lea"], explication: "« My name is Lea »." },
        { consigne: "Dis « Je viens de France »", r: "i am from france", accepte: ["i'm from france"], explication: "« I am from France »." },
      ],
    },
    prononciation: {
      son: "´",
      titre: "L'accent tonique",
      explication:
        "Dans un mot de plusieurs syllabes, une syllabe se dit plus FORT que les autres : « WEL-come », « MOR-ning ». Mettre l'accent au bon endroit te rend tout de suite plus clair·e.",
      technique: "Tape dans tes mains sur la syllabe forte : MOR (clap) -ning, WEL (clap) -come.",
      mots: [
        { en: "morning", phon: "[MOR-ningue]" },
        { en: "welcome", phon: "[WÈL-keum]" },
        { en: "hello", phon: "[he-LLO]" },
        { en: "coffee", phon: "[KO-fi]" },
      ],
      phrase: "Good MORning, WELcome!",
    },
    bilan: {
      resume: [
        "Te présenter : My name is… / I am from…",
        "Les questions avec to be (What/Where, inversion).",
        "Les réponses courtes + l'accent tonique.",
      ],
      conseil: "Présente-toi à voix haute devant un miroir, comme à un nouvel ami.",
      motivation: "Tu peux maintenant te présenter en anglais. C'est ÉNORME pour un jour 5. 🪪",
    },
  },

  // ==================== JOUR 12 · 6 JUIN ====================
  {
    jour: 12,
    date: "6 juin",
    mois: "juin",
    titre: "La famille",
    emoji: "👨‍👩‍👧",
    objectif: "Parler de ta famille et de ce que tu possèdes.",
    intro:
      "On parle famille aujourd'hui. Tu vas apprendre à dire « ma sœur », « le frère de Lea », et à utiliser les possessifs. Plus un point de prononciation sur le « s » final.",
    vocabulaire: {
      intro: "Les membres de la famille proche.",
      mots: [
        { id: "j6-mother", en: "mother", phon: "[meu-zeur]", fr: "mère", exemple: "My mother is kind.", exempleFr: "Ma mère est gentille." },
        { id: "j6-father", en: "father", phon: "[fa-zeur]", fr: "père", exemple: "My father is tall.", exempleFr: "Mon père est grand." },
        { id: "j6-sister", en: "sister", phon: "[sis-teur]", fr: "sœur", exemple: "I have a sister.", exempleFr: "J'ai une sœur." },
        { id: "j6-brother", en: "brother", phon: "[breu-zeur]", fr: "frère", exemple: "My brother is nice.", exempleFr: "Mon frère est gentil." },
        { id: "j6-family", en: "family", phon: "[fa-mi-li]", fr: "famille", exemple: "My family is small.", exempleFr: "Ma famille est petite." },
        { id: "j6-parents", en: "parents", phon: "[pè-reunts]", fr: "parents", exemple: "My parents are French.", exempleFr: "Mes parents sont français." },
      ],
    },
    grammaire: {
      titre: "Les possessifs (my, your, her…) et le « 's »",
      regle:
        "Les adjectifs possessifs : my (mon/ma), your (ton/ta), his (son, à lui), her (son, à elle), our (notre), their (leur). Pour dire « le X de Y », on ajoute 's : my mother's name = le nom de ma mère.",
      analogie:
        "En français on dit « le livre de Lea ». En anglais on inverse et on colle 's : « Lea's book ». Le 's exprime la possession.",
      exemples: [
        { en: "my sister", fr: "ma sœur" },
        { en: "her name", fr: "son nom (à elle)" },
        { en: "my father's car", fr: "la voiture de mon père" },
        { en: "their family", fr: "leur famille" },
      ],
      exercices: [
        { type: "trou", phrase: "___ name is Lea. (mon)", r: "my", explication: "« My name is Lea »." },
        { type: "trou", phrase: "It is ___ car. (son, à elle)", r: "her", explication: "« her » = son/sa, à elle." },
        { type: "vraiFaux", affirmation: "« Lea's book » veut dire « le livre de Lea ».", r: true, explication: "Oui : le 's exprime la possession." },
        { type: "traduction", sens: "fr-en", q: "mon frère", r: "my brother", explication: "« my brother »." },
      ],
    },
    conjugaison: {
      titre: "« To have » et la famille",
      explication: "On utilise to have pour la famille : I have a sister. She has two brothers. Rappel : he/she/it HAS.",
      tableau: [
        { pronom: "I", forme: "have", exemple: "I have a sister." },
        { pronom: "You", forme: "have", exemple: "You have a brother." },
        { pronom: "She", forme: "has", exemple: "She has parents." },
        { pronom: "We", forme: "have", exemple: "We have a big family." },
        { pronom: "They", forme: "have", exemple: "They have a dog." },
      ],
      exercices: [
        { type: "conjugaison", verbe: "to have", q: "I ___ a sister.", r: "have", explication: "Avec « I » → have." },
        { type: "conjugaison", verbe: "to have", q: "He ___ two brothers.", r: "has", explication: "Avec « he » → has." },
        { type: "conjugaison", verbe: "to have", q: "We ___ a big family.", r: "have", explication: "Avec « we » → have." },
        { type: "vraiFaux", affirmation: "« She have a brother » est correct.", r: false, explication: "Non : « She HAS a brother »." },
      ],
    },
    dialogue: {
      titre: "Ma famille",
      contexte: "Emma te pose des questions sur ta famille.",
      lignes: [
        { role: "Emma", en: "Do you have a sister?", fr: "As-tu une sœur ?" },
        { role: "Toi", en: "Yes, I have one sister.", fr: "Oui, j'ai une sœur." },
        { role: "Emma", en: "What is her name?", fr: "Comment s'appelle-t-elle ?" },
        { role: "Toi", en: "Her name is Marie.", fr: "Elle s'appelle Marie." },
        { role: "Emma", en: "Lovely!", fr: "Adorable !" },
      ],
      aToi: [
        { consigne: "Dis « J'ai une sœur »", r: "i have a sister", accepte: ["i have one sister"], explication: "« I have a sister »." },
        { consigne: "Dis « Mon frère est gentil »", r: "my brother is nice", accepte: ["my brother is kind"], explication: "« My brother is nice »." },
      ],
    },
    prononciation: {
      son: "[s] / [z]",
      titre: "Le S final",
      explication:
        "Le « s » à la fin d'un mot se prononce parfois « s » (cats), parfois « z » (dogs, parents). Après un son doux (voyelle, b, d, g…), c'est plutôt « z ».",
      technique: "Dis « cats » (sss) puis « dogs » (zzz) : sens la différence — le « z » fait vibrer ta gorge, pas le « s ».",
      mots: [
        { en: "cats", phon: "[kats]" },
        { en: "dogs", phon: "[dogz]" },
        { en: "parents", phon: "[pè-reunts]" },
        { en: "sisters", phon: "[sis-teurz]" },
      ],
      phrase: "My parents have two dogs and three cats.",
    },
    bilan: {
      resume: [
        "La famille : mother, father, sister, brother, parents.",
        "Les possessifs (my, your, her…) et le 's de possession.",
        "to have pour la famille + le S final (s/z).",
      ],
      conseil: "Décris ta vraie famille en deux phrases anglaises ce soir.",
      motivation: "Ta famille parle anglais maintenant — au moins dans ta tête ! 👨‍👩‍👧",
    },
  },

  // ==================== JOUR 13 · 7 JUIN ====================
  {
    jour: 13,
    date: "7 juin",
    mois: "juin",
    titre: "Le présent simple",
    emoji: "🔁",
    objectif: "Parler de tes habitudes et de ta routine.",
    intro:
      "Le temps le plus utile arrive : le présent simple, pour parler de ce que tu fais tous les jours. Une seule règle d'or à retenir aujourd'hui — tu vas voir, c'est limpide.",
    vocabulaire: {
      intro: "Six verbes du quotidien.",
      mots: [
        { id: "j7-eat", en: "to eat", phon: "[tou iit]", fr: "manger", exemple: "I eat an apple.", exempleFr: "Je mange une pomme." },
        { id: "j7-drink", en: "to drink", phon: "[tou drinque]", fr: "boire", exemple: "I drink water.", exempleFr: "Je bois de l'eau." },
        { id: "j7-live", en: "to live", phon: "[tou liv]", fr: "vivre / habiter", exemple: "I live in France.", exempleFr: "J'habite en France." },
        { id: "j7-work", en: "to work", phon: "[tou weurk]", fr: "travailler", exemple: "I work every day.", exempleFr: "Je travaille chaque jour." },
        { id: "j7-like", en: "to like", phon: "[tou laïk]", fr: "aimer (bien)", exemple: "I like coffee.", exempleFr: "J'aime le café." },
        { id: "j7-play", en: "to play", phon: "[tou plèï]", fr: "jouer", exemple: "I play music.", exempleFr: "Je joue de la musique." },
      ],
    },
    grammaire: {
      titre: "Le présent simple",
      regle:
        "Pour une habitude, on utilise le verbe sans « to ». À la 3e personne (he/she/it), on ajoute un -s : I work → he works, she likes.",
      analogie:
        "C'est le présent « de tous les jours ». La grande règle à retenir : he/she/it = on ajoute un -s. On dit « she likes », jamais « she like ».",
      exemples: [
        { en: "I eat bread.", fr: "Je mange du pain." },
        { en: "She likes tea.", fr: "Elle aime le thé." },
        { en: "We live in France.", fr: "Nous vivons en France." },
        { en: "He works.", fr: "Il travaille." },
      ],
      exercices: [
        { type: "trou", phrase: "She ___ coffee. (like)", r: "likes", explication: "3e personne → like + s = likes." },
        { type: "trou", phrase: "I ___ in Paris. (live)", r: "live", explication: "Avec « I », pas de -s." },
        { type: "trou", phrase: "He ___ every day. (work)", r: "works", explication: "3e personne → works." },
        { type: "vraiFaux", affirmation: "« She like tea » est correct.", r: false, explication: "Non : « She likeS tea »." },
      ],
    },
    conjugaison: {
      titre: "Le -s de la 3e personne",
      explication:
        "I / you / we / they → verbe sans -s. He / she / it → verbe + -s. eat → eats, drink → drinks, play → plays.",
      tableau: [
        { pronom: "I", forme: "eat", exemple: "I eat bread." },
        { pronom: "You", forme: "drink", exemple: "You drink tea." },
        { pronom: "He", forme: "eats", exemple: "He eats an apple." },
        { pronom: "She", forme: "plays", exemple: "She plays music." },
        { pronom: "They", forme: "like", exemple: "They like coffee." },
      ],
      exercices: [
        { type: "trou", phrase: "I ___ water. (drink)", r: "drink", explication: "Avec « I », pas de -s." },
        { type: "trou", phrase: "He ___ an apple. (eat)", r: "eats", explication: "3e personne → eats." },
        { type: "trou", phrase: "She ___ music. (play)", r: "plays", explication: "3e personne → plays." },
        { type: "trou", phrase: "They ___ coffee. (like)", r: "like", explication: "Avec « they », pas de -s." },
      ],
    },
    dialogue: {
      titre: "Ta journée",
      contexte: "Emma s'intéresse à ta routine.",
      lignes: [
        { role: "Emma", en: "Where do you live?", fr: "Où habites-tu ?" },
        { role: "Toi", en: "I live in France.", fr: "J'habite en France." },
        { role: "Emma", en: "Do you like coffee?", fr: "Aimes-tu le café ?" },
        { role: "Toi", en: "Yes, I like coffee.", fr: "Oui, j'aime le café." },
        { role: "Emma", en: "Me too!", fr: "Moi aussi !" },
      ],
      aToi: [
        { consigne: "Dis « J'habite en France »", r: "i live in france", accepte: [], explication: "« I live in France »." },
        { consigne: "Dis « J'aime le café »", r: "i like coffee", accepte: [], explication: "« I like coffee »." },
      ],
    },
    prononciation: {
      son: "[s] / [z]",
      titre: "Le -s des verbes",
      explication:
        "Le -s de la 3e personne se prononce « s » (works = « weurks ») ou « z » (plays = « plèïz »), exactement comme le pluriel des noms.",
      technique: "Même réflexe qu'au jour 6 : après un son doux → « z » (plays, lives), sinon « s » (works, eats).",
      mots: [
        { en: "works", phon: "[weurks]" },
        { en: "eats", phon: "[iits]" },
        { en: "plays", phon: "[plèïz]" },
        { en: "lives", phon: "[livz]" },
      ],
      phrase: "She works, eats, and plays.",
    },
    bilan: {
      resume: [
        "Six verbes du quotidien (eat, drink, live, work, like, play).",
        "Le présent simple = une habitude.",
        "La règle d'or : he/she/it + -s.",
      ],
      conseil: "Dis trois choses que tu fais chaque jour : « I … every day ».",
      motivation: "Tu construis de vraies phrases maintenant. La machine est lancée ! ⚙️",
    },
  },

  // ==================== JOUR 14 · 8 JUIN ====================
  {
    jour: 14,
    date: "8 juin",
    mois: "juin",
    titre: "Poser des questions",
    emoji: "❓",
    objectif: "Poser des questions sur les autres.",
    intro:
      "Une conversation, c'est aussi savoir demander ! Aujourd'hui : les mots interrogatifs et les questions avec « do / does ». Petit piège à connaître, et tu seras au point.",
    vocabulaire: {
      intro: "Les six mots qui ouvrent une question.",
      mots: [
        { id: "j8-what", en: "what", phon: "[wott]", fr: "quoi / que", exemple: "What is it?", exempleFr: "Qu'est-ce que c'est ?" },
        { id: "j8-where", en: "where", phon: "[wèr]", fr: "où", exemple: "Where are you?", exempleFr: "Où es-tu ?" },
        { id: "j8-who", en: "who", phon: "[hou]", fr: "qui", exemple: "Who is she?", exempleFr: "Qui est-elle ?" },
        { id: "j8-when", en: "when", phon: "[wènn]", fr: "quand", exemple: "When do you work?", exempleFr: "Quand travailles-tu ?" },
        { id: "j8-why", en: "why", phon: "[waï]", fr: "pourquoi", exemple: "Why not?", exempleFr: "Pourquoi pas ?" },
        { id: "j8-how", en: "how", phon: "[haou]", fr: "comment", exemple: "How are you?", exempleFr: "Comment vas-tu ?" },
      ],
    },
    grammaire: {
      titre: "Les questions avec « do / does »",
      regle:
        "Avec les verbes ordinaires (pas to be), on pose les questions avec « do » ou « does » devant le sujet : Do you like coffee? Does she work? Avec he/she/it → DOES (et le verbe reperd son -s).",
      analogie:
        "« Do » est comme « est-ce que » : « Do you like…? » = « Est-ce que tu aimes…? ». Avec he/she/it c'est « does », et le verbe redevient simple : « Does she like? » (pas likes).",
      exemples: [
        { en: "Do you like tea?", fr: "Aimes-tu le thé ?" },
        { en: "Does he work?", fr: "Travaille-t-il ?" },
        { en: "Where do you live?", fr: "Où habites-tu ?" },
        { en: "What do you eat?", fr: "Que manges-tu ?" },
      ],
      exercices: [
        { type: "trou", phrase: "___ you like coffee? (est-ce que, tu)", r: "do", explication: "Avec « you » → Do." },
        { type: "trou", phrase: "___ she work? (est-ce que, elle)", r: "does", explication: "Avec « she » → Does." },
        { type: "vraiFaux", affirmation: "« Does she likes? » est correct.", r: false, explication: "Non : après does, le verbe perd son -s → « Does she like? »." },
        { type: "traduction", sens: "fr-en", q: "Où habites-tu ? (Where…)", r: "where do you live", accepte: ["where do you live?"], explication: "« Where do you live? »." },
      ],
    },
    conjugaison: {
      titre: "do / does",
      explication: "I / you / we / they → DO. He / she / it → DOES. Après « does », le verbe n'a plus de -s : Does he play? (pas plays).",
      tableau: [
        { pronom: "I", forme: "Do I…?", exemple: "Do I know you?" },
        { pronom: "You", forme: "Do you…?", exemple: "Do you live here?" },
        { pronom: "He", forme: "Does he…?", exemple: "Does he like tea?" },
        { pronom: "She", forme: "Does she…?", exemple: "Does she play?" },
        { pronom: "They", forme: "Do they…?", exemple: "Do they work?" },
      ],
      exercices: [
        { type: "trou", phrase: "___ you live here?", r: "do", explication: "Avec « you » → Do." },
        { type: "trou", phrase: "___ he like tea?", r: "does", explication: "Avec « he » → Does." },
        { type: "trou", phrase: "___ they work?", r: "do", explication: "Avec « they » → Do." },
        { type: "trou", phrase: "___ she play music?", r: "does", explication: "Avec « she » → Does." },
      ],
    },
    dialogue: {
      titre: "Curiosité",
      contexte: "Tu poses des questions à Emma pour mieux la connaître.",
      lignes: [
        { role: "Toi", en: "Where do you live?", fr: "Où habites-tu ?" },
        { role: "Emma", en: "I live in Paris.", fr: "J'habite à Paris." },
        { role: "Toi", en: "Do you like music?", fr: "Aimes-tu la musique ?" },
        { role: "Emma", en: "Yes, I love music!", fr: "Oui, j'adore la musique !" },
        { role: "Toi", en: "Nice!", fr: "Cool !" },
      ],
      aToi: [
        { consigne: "Demande « Où habites-tu ? »", r: "where do you live", accepte: ["where do you live?"], explication: "« Where do you live? »." },
        { consigne: "Demande « Aimes-tu la musique ? »", r: "do you like music", accepte: ["do you like music?"], explication: "« Do you like music? »." },
      ],
    },
    prononciation: {
      son: "↗",
      titre: "La voix qui monte",
      explication:
        "Pour les questions « oui/non » (Do you…? Are you…?), la voix MONTE à la fin, comme en français. Pour les questions en What/Where/Who…, elle redescend plutôt.",
      technique: "Dis « Do you like coffee? » en montant clairement la voix sur « coffee ». Exagère, c'est plus efficace.",
      mots: [
        { en: "Really?", phon: "[ri-li ↗]" },
        { en: "Right?", phon: "[raït ↗]" },
        { en: "OK?", phon: "[o-kèï ↗]" },
        { en: "Ready?", phon: "[rè-di ↗]" },
      ],
      phrase: "Do you like coffee?",
    },
    bilan: {
      resume: [
        "Les mots interrogatifs (what, where, who, when, why, how).",
        "Les questions avec do / does.",
        "Avec he/she/it → DOES (verbe sans -s) + l'intonation montante.",
      ],
      conseil: "Pose-toi trois questions en anglais et réponds-y à voix haute.",
      motivation: "Tu sais maintenant ouvrir une conversation. Bravo l'exploratrice ! ❓",
    },
  },

  // ==================== JOUR 15 · 9 JUIN ====================
  {
    jour: 15,
    date: "9 juin",
    mois: "juin",
    titre: "Dire non",
    emoji: "🚫",
    objectif: "Exprimer la négation : ce que tu ne fais pas, ce que tu n'aimes pas.",
    intro:
      "Savoir dire « non » et « je n'aime pas », c'est aussi parler ! On voit la négation avec to be et avec les autres verbes, plus les contractions à l'oral.",
    vocabulaire: {
      intro: "Des petits mots de fréquence très utiles.",
      mots: [
        { id: "j9-not", en: "not", phon: "[nott]", fr: "ne… pas", exemple: "I am not tired.", exempleFr: "Je ne suis pas fatiguée." },
        { id: "j9-never", en: "never", phon: "[né-veur]", fr: "jamais", exemple: "I never drink coffee.", exempleFr: "Je ne bois jamais de café." },
        { id: "j9-always", en: "always", phon: "[ol-wèïz]", fr: "toujours", exemple: "She always works.", exempleFr: "Elle travaille toujours." },
        { id: "j9-sometimes", en: "sometimes", phon: "[sam-taïmz]", fr: "parfois", exemple: "Sometimes I read.", exempleFr: "Parfois je lis." },
        { id: "j9-often", en: "often", phon: "[o-feun]", fr: "souvent", exemple: "I often walk.", exempleFr: "Je marche souvent." },
        { id: "j9-but", en: "but", phon: "[beut]", fr: "mais", exemple: "I like tea, but not coffee.", exempleFr: "J'aime le thé, mais pas le café." },
      ],
    },
    grammaire: {
      titre: "La négation",
      regle:
        "Avec to be : on ajoute « not » : I am not, she is not (isn't), they are not (aren't). Avec les autres verbes : « don't » (I/you/we/they) et « doesn't » (he/she/it) : I don't like, she doesn't work.",
      analogie:
        "« Don't » / « doesn't » = « ne… pas ». Comme pour les questions, après « doesn't » le verbe perd son -s : « She doesn't work » (pas works).",
      exemples: [
        { en: "I am not French.", fr: "Je ne suis pas français·e." },
        { en: "I don't like tea.", fr: "Je n'aime pas le thé." },
        { en: "She doesn't work.", fr: "Elle ne travaille pas." },
        { en: "We don't live here.", fr: "Nous n'habitons pas ici." },
      ],
      exercices: [
        { type: "trou", phrase: "I ___ like coffee. (ne pas, je)", r: "don't", accepte: ["do not"], explication: "Avec « I » → don't." },
        { type: "trou", phrase: "She ___ work. (ne pas, elle)", r: "doesn't", accepte: ["does not"], explication: "Avec « she » → doesn't." },
        { type: "trou", phrase: "I am ___ tired. (ne pas)", r: "not", explication: "Avec to be → am not." },
        { type: "vraiFaux", affirmation: "« She doesn't works » est correct.", r: false, explication: "Non : « She doesn't WORK » (verbe sans -s)." },
      ],
    },
    conjugaison: {
      titre: "don't / doesn't",
      explication: "I / you / we / they → don't. He / she / it → doesn't. Le verbe qui suit reste à sa forme de base (sans -s).",
      tableau: [
        { pronom: "I", forme: "don't eat", exemple: "I don't eat meat." },
        { pronom: "You", forme: "don't drink", exemple: "You don't drink tea." },
        { pronom: "He", forme: "doesn't work", exemple: "He doesn't work today." },
        { pronom: "She", forme: "doesn't play", exemple: "She doesn't play." },
        { pronom: "They", forme: "don't live", exemple: "They don't live here." },
      ],
      exercices: [
        { type: "trou", phrase: "I ___ eat meat. (négation)", r: "don't", accepte: ["do not"], explication: "Avec « I » → don't." },
        { type: "trou", phrase: "He ___ like tea. (négation)", r: "doesn't", accepte: ["does not"], explication: "Avec « he » → doesn't." },
        { type: "trou", phrase: "We ___ work today. (négation)", r: "don't", accepte: ["do not"], explication: "Avec « we » → don't." },
        { type: "trou", phrase: "She ___ play. (négation)", r: "doesn't", accepte: ["does not"], explication: "Avec « she » → doesn't." },
      ],
    },
    dialogue: {
      titre: "Goûts et dégoûts",
      contexte: "Vous parlez de ce que vous aimez ou pas.",
      lignes: [
        { role: "Emma", en: "Do you like coffee?", fr: "Aimes-tu le café ?" },
        { role: "Toi", en: "No, I don't like coffee.", fr: "Non, je n'aime pas le café." },
        { role: "Emma", en: "Do you drink tea?", fr: "Bois-tu du thé ?" },
        { role: "Toi", en: "Yes, but I don't like sugar.", fr: "Oui, mais je n'aime pas le sucre." },
        { role: "Emma", en: "Same here!", fr: "Pareil pour moi !" },
      ],
      aToi: [
        { consigne: "Dis « Je n'aime pas le café »", r: "i don't like coffee", accepte: ["i do not like coffee"], explication: "« I don't like coffee »." },
        { consigne: "Dis « Elle ne travaille pas »", r: "she doesn't work", accepte: ["she does not work"], explication: "« She doesn't work »." },
      ],
    },
    prononciation: {
      son: "n't",
      titre: "Les contractions",
      explication:
        "« don't », « doesn't », « isn't », « aren't » se disent d'un seul bloc, le « t » final à peine marqué. Ne sépare pas « do not » à l'oral : dis « dont ».",
      technique: "Enchaîne sans pause : « I-dont-like ». Le « o » de don't est long, comme « dôneut ».",
      mots: [
        { en: "don't", phon: "[dôneut]" },
        { en: "doesn't", phon: "[deu-zeunt]" },
        { en: "isn't", phon: "[i-zeunt]" },
        { en: "aren't", phon: "[ar-eunt]" },
      ],
      phrase: "I don't like it, and she doesn't either.",
    },
    bilan: {
      resume: [
        "Des mots de fréquence : not, never, always, sometimes, often, but.",
        "La négation : not / don't / doesn't.",
        "Après doesn't, le verbe perd son -s + les contractions.",
      ],
      conseil: "Dis deux choses que tu n'aimes pas : « I don't like… ».",
      motivation: "Savoir dire non, c'est aussi parler ! Tu y es presque. 🚫",
    },
  },

  // ==================== JOUR 16 · 10 JUIN ====================
  {
    jour: 16,
    date: "10 juin",
    mois: "juin",
    titre: "Premier grand bilan",
    emoji: "🎯",
    objectif: "Faire le point sur tes 10 premiers jours et tenir une vraie petite conversation.",
    intro:
      "Cap des 10 jours franchi ! 🎯 On rassemble tout ce que tu as appris jusqu'ici et tu tiens une conversation complète, du « bonjour » au « au revoir ». Et ce n'est que la moitié de juin : le meilleur reste à venir.",
    vocabulaire: {
      intro: "Les mots-clés du mois, à avoir toujours sous la main.",
      mots: [
        { id: "j10-hello", en: "hello", phon: "[hèl-lo]", fr: "bonjour / salut", exemple: "Hello, my friend!", exempleFr: "Bonjour, mon ami !" },
        { id: "j10-goodbye", en: "goodbye", phon: "[goud-baï]", fr: "au revoir", exemple: "Goodbye, see you soon.", exempleFr: "Au revoir, à bientôt." },
        { id: "j10-please", en: "please", phon: "[pliiz]", fr: "s'il te plaît", exemple: "Help me, please.", exempleFr: "Aide-moi, s'il te plaît." },
        { id: "j10-thank-you", en: "thank you", phon: "[thènk you]", fr: "merci", exemple: "Thank you for today!", exempleFr: "Merci pour aujourd'hui !" },
        { id: "j10-friend", en: "friend", phon: "[frènd]", fr: "ami·e", exemple: "You are my friend.", exempleFr: "Tu es mon amie." },
        { id: "j10-family", en: "family", phon: "[fa-mi-li]", fr: "famille", exemple: "I love my family.", exempleFr: "J'aime ma famille." },
      ],
    },
    grammaire: {
      titre: "Récap des règles de juin",
      regle:
        "L'essentiel du mois : (1) le sujet est obligatoire, (2) l'adjectif AVANT le nom, (3) he/she/it + -s au présent, (4) questions avec do/does, (5) négation don't/doesn't.",
      analogie: "Cinq réflexes qui font déjà 80 % de l'anglais de base. Si tu les as, tu peux te débrouiller dans une vraie conversation.",
      exemples: [
        { en: "She likes coffee.", fr: "Elle aime le café. (3e pers. + s)" },
        { en: "Do you live here?", fr: "Habites-tu ici ? (question)" },
        { en: "I don't like tea.", fr: "Je n'aime pas le thé. (négation)" },
        { en: "a red car", fr: "une voiture rouge (adjectif avant)" },
      ],
      exercices: [
        { type: "trou", phrase: "She ___ tea. (like, présent)", r: "likes", explication: "3e personne → likes." },
        { type: "trou", phrase: "___ you like music? (est-ce que)", r: "do", explication: "Avec « you » → Do." },
        { type: "trou", phrase: "I ___ like coffee. (ne pas)", r: "don't", accepte: ["do not"], explication: "Avec « I » → don't." },
        { type: "traduction", sens: "fr-en", q: "une voiture rouge", r: "a red car", explication: "L'adjectif avant le nom : a red car." },
      ],
    },
    conjugaison: {
      titre: "Récap : to be / to have / présent simple",
      explication: "Les trois piliers : to be (am/is/are), to have (have/has), présent simple (+s à la 3e personne).",
      tableau: [
        { pronom: "I", forme: "am", exemple: "I am happy. (to be)" },
        { pronom: "She", forme: "is / has", exemple: "She is kind. She has a sister." },
        { pronom: "He", forme: "likes", exemple: "He likes coffee. (présent +s)" },
        { pronom: "We", forme: "have", exemple: "We have a dog. (to have)" },
        { pronom: "They", forme: "work", exemple: "They work here. (présent)" },
      ],
      exercices: [
        { type: "conjugaison", verbe: "to be", q: "I ___ happy.", r: "am", explication: "Avec « I » → am." },
        { type: "conjugaison", verbe: "to have", q: "She ___ a sister.", r: "has", explication: "Avec « she » → has." },
        { type: "conjugaison", verbe: "to like", q: "He ___ coffee.", r: "likes", explication: "Présent, 3e personne → likes." },
        { type: "conjugaison", verbe: "to live", q: "They ___ in Paris.", r: "live", explication: "Avec « they », pas de -s." },
        { type: "conjugaison", verbe: "to be", q: "You ___ my friend.", r: "are", explication: "Avec « you » → are." },
      ],
    },
    dialogue: {
      titre: "La conversation complète",
      contexte: "Tu mets tout en pratique : tu rencontres quelqu'un, tu te présentes et tu parles de toi.",
      lignes: [
        { role: "Emma", en: "Hello! What is your name?", fr: "Bonjour ! Comment t'appelles-tu ?" },
        { role: "Toi", en: "Hello! My name is Lea.", fr: "Bonjour ! Je m'appelle Lea." },
        { role: "Emma", en: "Where are you from?", fr: "D'où viens-tu ?" },
        { role: "Toi", en: "I am from France.", fr: "Je viens de France." },
        { role: "Emma", en: "Do you like coffee?", fr: "Aimes-tu le café ?" },
        { role: "Toi", en: "No, I don't, but I like tea.", fr: "Non, mais j'aime le thé." },
        { role: "Emma", en: "Nice to meet you!", fr: "Enchantée !" },
        { role: "Toi", en: "Nice to meet you too! Goodbye!", fr: "Enchantée aussi ! Au revoir !" },
      ],
      aToi: [
        { consigne: "Salue et présente-toi : « Bonjour ! Je m'appelle Lea »", r: "hello, my name is lea", accepte: ["hello my name is lea", "hi my name is lea", "hello i am lea"], explication: "« Hello! My name is Lea »." },
        { consigne: "Dis « Je viens de France »", r: "i am from france", accepte: ["i'm from france"], explication: "« I am from France »." },
        { consigne: "Dis « Je n'aime pas le café »", r: "i don't like coffee", accepte: ["i do not like coffee"], explication: "« I don't like coffee »." },
        { consigne: "Dis « Au revoir »", r: "goodbye", accepte: ["bye"], explication: "« Goodbye »." },
      ],
    },
    prononciation: {
      son: "🔁",
      titre: "Récap des sons",
      explication:
        "Tes trois défis du mois : le H soufflé (hello), le TH langue entre les dents (thank), le R doux (red). Reprends-les ensemble une dernière fois.",
      technique: "Dis lentement la phrase ci-dessous en soignant chaque son piège, puis accélère petit à petit.",
      mots: [
        { en: "hello", phon: "[hèl-lo]" },
        { en: "thank", phon: "[thènk]" },
        { en: "red", phon: "[rèd]" },
        { en: "three", phon: "[thrii]" },
      ],
      phrase: "Hello! Thank you for the three red things.",
    },
    bilan: {
      resume: [
        "Tu sais saluer, te présenter, décrire, poser des questions et dire non.",
        "Tu maîtrises to be, to have et le présent simple.",
        "Tu as tenu une conversation complète. Tu n'es plus débutante absolue ! 🎓",
      ],
      conseil: "Refais le dialogue du jour à voix haute, sans regarder. Puis on continue l'aventure de juin !",
      motivation: "Dix jours déjà, et une vraie conversation tenue. La suite de juin va te faire briller. 🌸",
    },
  },
  // ==================== JOUR 17 · 11 JUIN ====================
  {
    jour: 17,
    date: "11 juin",
    mois: "juin",
    titre: "La nourriture",
    emoji: "🍎",
    objectif: "Nommer des aliments courants et dire ce que tu manges.",
    intro:
      "On passe à table ! 🍎 De nouveaux mots tout simples pour parler de nourriture, et on réutilise nos articles « a / an » et le pluriel. Surtout de la pratique aujourd'hui.",
    vocabulaire: {
      intro: "Des aliments du quotidien.",
      mots: [
        { id: "j17-apple", en: "apple", phon: "[a-peul]", fr: "pomme", exemple: "An apple a day.", exempleFr: "Une pomme par jour." },
        { id: "j17-bread", en: "bread", phon: "[brèd]", fr: "pain", exemple: "I eat bread.", exempleFr: "Je mange du pain." },
        { id: "j17-cheese", en: "cheese", phon: "[tchiiz]", fr: "fromage", exemple: "French cheese.", exempleFr: "Du fromage français." },
        { id: "j17-egg", en: "egg", phon: "[ègg]", fr: "œuf", exemple: "An egg, please.", exempleFr: "Un œuf, s'il te plaît." },
        { id: "j17-rice", en: "rice", phon: "[raïss]", fr: "riz", exemple: "Rice with fish.", exempleFr: "Du riz avec du poisson." },
        { id: "j17-fish", en: "fish", phon: "[fich]", fr: "poisson", exemple: "I like fish.", exempleFr: "J'aime le poisson." },
        { id: "j17-meat", en: "meat", phon: "[miit]", fr: "viande", exemple: "No meat for me.", exempleFr: "Pas de viande pour moi." },
        { id: "j17-fruit", en: "fruit", phon: "[frout]", fr: "fruit", exemple: "Fresh fruit.", exempleFr: "Des fruits frais." },
      ],
    },
    grammaire: {
      titre: "Rappel : « a / an » + le pluriel",
      regle:
        "Petit rappel utile à table : « a » devant une consonne (a fish), « an » devant un son voyelle (an apple, an egg). Au pluriel, on ajoute -s : two apples, three eggs.",
      analogie:
        "Même réflexe que le jour « Merci, s'il te plaît » : c'est le SON qui suit qui décide entre a et an.",
      exemples: [
        { en: "a fish", fr: "un poisson" },
        { en: "an apple", fr: "une pomme" },
        { en: "an egg", fr: "un œuf" },
        { en: "two apples", fr: "deux pommes" },
      ],
      exercices: [
        { type: "trou", phrase: "I eat ___ apple. (un)", r: "an", explication: "« apple » commence par un son voyelle → an." },
        { type: "trou", phrase: "three ___ (egg, au pluriel)", r: "eggs", explication: "egg + s = eggs." },
        { type: "vraiFaux", affirmation: "On dit « a egg ».", r: false, explication: "Non : an egg (son voyelle)." },
        { type: "traduction", sens: "fr-en", q: "du pain", r: "bread", explication: "« bread »." },
      ],
    },
    conjugaison: {
      titre: "Rappel : « to eat » et « to like » au présent",
      explication:
        "On réutilise le présent simple : I eat, you eat, he/she eats (+ -s). Pareil pour like : I like, she likes. Rappel : he/she/it prend un -s.",
      tableau: [
        { pronom: "I", forme: "eat", exemple: "I eat bread." },
        { pronom: "You", forme: "eat", exemple: "You eat fruit." },
        { pronom: "He / She", forme: "eats", exemple: "She eats fish." },
        { pronom: "We", forme: "like", exemple: "We like cheese." },
        { pronom: "They", forme: "like", exemple: "They like rice." },
      ],
      exercices: [
        { type: "conjugaison", verbe: "to eat", q: "She ___ an apple.", r: "eats", explication: "3e personne → eats." },
        { type: "conjugaison", verbe: "to like", q: "I ___ cheese.", r: "like", explication: "Avec « I », pas de -s." },
        { type: "conjugaison", verbe: "to eat", q: "We ___ bread.", r: "eat", explication: "Avec « we », pas de -s." },
        { type: "vraiFaux", affirmation: "« He eat fish » est correct.", r: false, explication: "Non : « He eatS fish »." },
      ],
    },
    dialogue: {
      titre: "Au petit-déjeuner",
      contexte: "Emma prépare le petit-déjeuner et te demande ce que tu veux.",
      lignes: [
        { role: "Emma", en: "Good morning! Do you eat eggs?", fr: "Bonjour ! Manges-tu des œufs ?" },
        { role: "Toi", en: "Yes, I like eggs.", fr: "Oui, j'aime les œufs." },
        { role: "Emma", en: "Bread and cheese?", fr: "Du pain et du fromage ?" },
        { role: "Toi", en: "Yes, please. Thank you!", fr: "Oui, s'il te plaît. Merci !" },
        { role: "Emma", en: "You're welcome!", fr: "De rien !" },
      ],
      aToi: [
        { consigne: "Dis « J'aime les œufs »", r: "i like eggs", accepte: ["i like egg"], explication: "« I like eggs »." },
        { consigne: "Dis « Du pain, s'il te plaît »", r: "bread, please", accepte: ["bread please", "some bread please"], explication: "« Bread, please »." },
      ],
    },
    prononciation: {
      son: "[iː]",
      titre: "Le i long (rappel)",
      explication:
        "« cheese », « meat », « eat » se disent avec un i long et tiré : « tchiiz », « miit », « iit ». Ne le coupe pas trop court.",
      technique: "Souris un peu et tire le son « iii », plus long qu'un « i » français.",
      mots: [
        { en: "cheese", phon: "[tchiiz]" },
        { en: "meat", phon: "[miit]" },
        { en: "eat", phon: "[iit]" },
        { en: "three", phon: "[thrii]" },
      ],
      phrase: "I eat cheese and meat.",
    },
    bilan: {
      resume: [
        "Des aliments : apple, bread, cheese, egg, rice, fish, meat, fruit.",
        "Rappel a / an selon le son + le pluriel en -s.",
        "to eat / to like au présent (he/she/it + -s).",
      ],
      conseil: "Au prochain repas, nomme en anglais trois aliments dans ton assiette.",
      motivation: "Tu peux déjà parler de ce que tu manges. Miam ! 🍎",
    },
  },

  // ==================== JOUR 18 · 12 JUIN ====================
  {
    jour: 18,
    date: "12 juin",
    mois: "juin",
    titre: "Boissons & au café",
    emoji: "☕",
    objectif: "Commander une boisson poliment.",
    intro:
      "Direction le café ! ☕ De nouvelles boissons, et on réutilise nos formules polies « Can I have…? » et « I would like… ». Beaucoup de pratique de commande.",
    vocabulaire: {
      intro: "De quoi commander à boire.",
      mots: [
        { id: "j18-tea", en: "tea", phon: "[tii]", fr: "thé", exemple: "A cup of tea.", exempleFr: "Une tasse de thé." },
        { id: "j18-coffee", en: "coffee", phon: "[ko-fi]", fr: "café", exemple: "A coffee, please.", exempleFr: "Un café, s'il te plaît." },
        { id: "j18-milk", en: "milk", phon: "[milk]", fr: "lait", exemple: "Tea with milk.", exempleFr: "Du thé au lait." },
        { id: "j18-juice", en: "juice", phon: "[djouss]", fr: "jus", exemple: "Orange juice.", exempleFr: "Du jus d'orange." },
        { id: "j18-glass", en: "a glass", phon: "[glass]", fr: "un verre", exemple: "A glass of water.", exempleFr: "Un verre d'eau." },
        { id: "j18-cup", en: "a cup", phon: "[keup]", fr: "une tasse", exemple: "A cup of tea.", exempleFr: "Une tasse de thé." },
        { id: "j18-hot", en: "hot", phon: "[hott]", fr: "chaud", exemple: "Hot coffee.", exempleFr: "Du café chaud." },
        { id: "j18-cold", en: "cold", phon: "[côld]", fr: "froid", exemple: "Cold juice.", exempleFr: "Du jus froid." },
      ],
    },
    grammaire: {
      titre: "Commander : « I would like… » / « Can I have…? »",
      regle:
        "Deux façons polies de demander : « Can I have a coffee? » (Est-ce que je peux avoir…?) et « I would like a tea. » (Je voudrais…). Les deux sont parfaites au café.",
      analogie:
        "« I would like » est plus poli que « I want » (je veux). C'est comme « je voudrais » au lieu de « je veux » en français.",
      exemples: [
        { en: "Can I have a coffee?", fr: "Puis-je avoir un café ?" },
        { en: "I would like a tea.", fr: "Je voudrais un thé." },
        { en: "A glass of water, please.", fr: "Un verre d'eau, s'il te plaît." },
        { en: "With milk, please.", fr: "Avec du lait, s'il te plaît." },
      ],
      exercices: [
        { type: "trou", phrase: "___ I have a coffee? (puis-je)", r: "can", explication: "« Can I have…? »." },
        { type: "trou", phrase: "I would ___ a tea. (voudrais → aimerais)", r: "like", explication: "« I would like a tea »." },
        { type: "traduction", sens: "fr-en", q: "un verre d'eau", r: "a glass of water", explication: "« a glass of water »." },
        { type: "vraiFaux", affirmation: "« I would like » est plus poli que « I want ».", r: true, explication: "Oui : would like = je voudrais." },
      ],
    },
    conjugaison: {
      titre: "« would like » (je voudrais)",
      explication:
        "« would like » ne change pas selon la personne : I would like, you would like, she would like. À l'oral on contracte : I'd like, she'd like.",
      tableau: [
        { pronom: "I", forme: "would like", exemple: "I would like a tea." },
        { pronom: "You", forme: "would like", exemple: "You would like coffee?" },
        { pronom: "She", forme: "would like", exemple: "She would like milk." },
        { pronom: "I (court)", forme: "I'd like", exemple: "I'd like a glass of juice." },
      ],
      exercices: [
        { type: "trou", phrase: "I would ___ a coffee. (aimerais)", r: "like", explication: "« I would like a coffee »." },
        { type: "vraiFaux", affirmation: "« would like » change avec he/she (would likes).", r: false, explication: "Non : il ne change jamais → she would like." },
        { type: "trou", phrase: "___ I have a glass of water? (puis-je)", r: "Can", accepte: ["can"], explication: "« Can I have…? »." },
      ],
    },
    dialogue: {
      titre: "Au café",
      contexte: "Tu commandes au comptoir. Emma est la serveuse.",
      lignes: [
        { role: "Emma", en: "Hello! What would you like?", fr: "Bonjour ! Que désirez-vous ?" },
        { role: "Toi", en: "I would like a tea, please.", fr: "Je voudrais un thé, s'il vous plaît." },
        { role: "Emma", en: "Hot or cold?", fr: "Chaud ou froid ?" },
        { role: "Toi", en: "Hot, with milk.", fr: "Chaud, avec du lait." },
        { role: "Emma", en: "Here you are!", fr: "Voilà !" },
      ],
      aToi: [
        { consigne: "Commande « Je voudrais un café »", r: "i would like a coffee", accepte: ["i'd like a coffee", "i would like a coffee please"], explication: "« I would like a coffee »." },
        { consigne: "Dis « Chaud, avec du lait »", r: "hot, with milk", accepte: ["hot with milk"], explication: "« Hot, with milk »." },
      ],
    },
    prononciation: {
      son: "[k]",
      titre: "Le C dur [k]",
      explication:
        "Le « c » et le « k » se disent souvent « k » net : coffee, cup, cold. C'est un son sec, comme un petit coup.",
      technique: "Dis « k-k-k » comme une petite toux légère, puis enchaîne : « k…offee », « k…up ».",
      mots: [
        { en: "coffee", phon: "[ko-fi]" },
        { en: "cup", phon: "[keup]" },
        { en: "cold", phon: "[côld]" },
        { en: "milk", phon: "[milk]" },
      ],
      phrase: "A cup of cold coffee.",
    },
    bilan: {
      resume: [
        "Des boissons : tea, coffee, milk, juice + hot / cold.",
        "Commander poliment : « Can I have…? » / « I would like… ».",
        "« would like » ne change jamais + le C dur [k].",
      ],
      conseil: "Entraîne-toi à commander : « I would like a … , please. » à voix haute.",
      motivation: "Tu peux commander dans n'importe quel café anglophone. ☕",
    },
  },

  // ==================== JOUR 19 · 13 JUIN ====================
  {
    jour: 19,
    date: "13 juin",
    mois: "juin",
    titre: "Les vêtements",
    emoji: "👕",
    objectif: "Nommer des vêtements et les décrire par leur couleur.",
    intro:
      "On s'habille ! 👕 De nouveaux mots pour les vêtements, et on réutilise une règle de juin : l'adjectif (la couleur) se place AVANT le nom. A red dress, blue shoes…",
    vocabulaire: {
      intro: "Des vêtements de tous les jours.",
      mots: [
        { id: "j19-shirt", en: "shirt", phon: "[cheurt]", fr: "chemise", exemple: "A white shirt.", exempleFr: "Une chemise blanche." },
        { id: "j19-dress", en: "dress", phon: "[drèss]", fr: "robe", exemple: "A red dress.", exempleFr: "Une robe rouge." },
        { id: "j19-shoes", en: "shoes", phon: "[chouz]", fr: "chaussures", exemple: "Blue shoes.", exempleFr: "Des chaussures bleues." },
        { id: "j19-trousers", en: "trousers", phon: "[traou-zeurz]", fr: "pantalon", exemple: "Black trousers.", exempleFr: "Un pantalon noir." },
        { id: "j19-hat", en: "hat", phon: "[hatt]", fr: "chapeau", exemple: "A yellow hat.", exempleFr: "Un chapeau jaune." },
        { id: "j19-coat", en: "coat", phon: "[côte]", fr: "manteau", exemple: "A warm coat.", exempleFr: "Un manteau chaud." },
        { id: "j19-socks", en: "socks", phon: "[soks]", fr: "chaussettes", exemple: "Green socks.", exempleFr: "Des chaussettes vertes." },
        { id: "j19-scarf", en: "scarf", phon: "[skarf]", fr: "écharpe", exemple: "A soft scarf.", exempleFr: "Une écharpe douce." },
      ],
    },
    grammaire: {
      titre: "Rappel : l'adjectif AVANT le nom",
      regle:
        "Rappel important : en anglais l'adjectif (couleur, taille…) se place AVANT le nom et ne s'accorde jamais : a red dress, blue shoes, two black hats.",
      analogie:
        "L'inverse du français : « une robe rouge » devient « a red dress » (rouge + robe). Et pas de -s sur l'adjectif au pluriel.",
      exemples: [
        { en: "a red dress", fr: "une robe rouge" },
        { en: "blue shoes", fr: "des chaussures bleues" },
        { en: "a white shirt", fr: "une chemise blanche" },
        { en: "black socks", fr: "des chaussettes noires" },
      ],
      exercices: [
        { type: "trou", phrase: "I have a ___ dress. (rouge)", r: "red", explication: "L'adjectif avant : a red dress." },
        { type: "vraiFaux", affirmation: "On dit « shoes blue ».", r: false, explication: "Non : « blue shoes » (couleur avant)." },
        { type: "traduction", sens: "fr-en", q: "une chemise blanche", r: "a white shirt", explication: "« a white shirt »." },
        { type: "vraiFaux", affirmation: "Au pluriel, « black » devient « blacks ».", r: false, explication: "Non : l'adjectif ne s'accorde jamais." },
      ],
    },
    conjugaison: {
      titre: "« to wear » (porter)",
      explication:
        "« to wear » = porter (un vêtement). I wear, you wear, he/she wears (+ -s). On l'utilise pour décrire ce qu'on a sur soi : She wears a hat.",
      tableau: [
        { pronom: "I", forme: "wear", exemple: "I wear a coat." },
        { pronom: "You", forme: "wear", exemple: "You wear blue shoes." },
        { pronom: "He / She", forme: "wears", exemple: "She wears a dress." },
        { pronom: "We", forme: "wear", exemple: "We wear hats." },
        { pronom: "They", forme: "wear", exemple: "They wear scarves." },
      ],
      exercices: [
        { type: "conjugaison", verbe: "to wear", q: "She ___ a red dress.", r: "wears", explication: "3e personne → wears." },
        { type: "conjugaison", verbe: "to wear", q: "I ___ black shoes.", r: "wear", explication: "Avec « I », pas de -s." },
        { type: "vraiFaux", affirmation: "« He wear a hat » est correct.", r: false, explication: "Non : « He wearS a hat »." },
      ],
    },
    dialogue: {
      titre: "Quelle tenue ?",
      contexte: "Emma t'aide à choisir une tenue.",
      lignes: [
        { role: "Emma", en: "What do you wear today?", fr: "Que portes-tu aujourd'hui ?" },
        { role: "Toi", en: "I wear a red dress.", fr: "Je porte une robe rouge." },
        { role: "Emma", en: "And the shoes?", fr: "Et les chaussures ?" },
        { role: "Toi", en: "Blue shoes!", fr: "Des chaussures bleues !" },
        { role: "Emma", en: "Lovely!", fr: "Ravissant !" },
      ],
      aToi: [
        { consigne: "Dis « Je porte une robe rouge »", r: "i wear a red dress", accepte: [], explication: "« I wear a red dress »." },
        { consigne: "Dis « des chaussures bleues »", r: "blue shoes", accepte: [], explication: "« blue shoes »." },
      ],
    },
    prononciation: {
      son: "[ʃ]",
      titre: "Le son « ch » (sh)",
      explication:
        "Le « sh » anglais est un « ch » soufflé, comme quand on demande le silence : « chhh ». On l'entend dans shirt, shoes, she.",
      technique: "Fais « chhh » doucement, sans voix, puis ajoute le mot : « chh…oes ».",
      mots: [
        { en: "shirt", phon: "[cheurt]" },
        { en: "shoes", phon: "[chouz]" },
        { en: "she", phon: "[chii]" },
        { en: "fish", phon: "[fich]" },
      ],
      phrase: "She wears a shirt and shoes.",
    },
    bilan: {
      resume: [
        "Des vêtements : shirt, dress, shoes, trousers, hat, coat, socks, scarf.",
        "Rappel : la couleur (adjectif) se place AVANT le nom.",
        "« to wear » (porter) + le son « sh ».",
      ],
      conseil: "Décris ta tenue du jour en anglais : « I wear … ».",
      motivation: "Tu peux décrire n'importe quelle tenue maintenant. 👗",
    },
  },

  // ==================== JOUR 20 · 14 JUIN ====================
  {
    jour: 20,
    date: "14 juin",
    mois: "juin",
    titre: "La maison",
    emoji: "🏠",
    objectif: "Nommer les pièces de la maison et dire ce qu'il y a dedans.",
    intro:
      "Bienvenue à la maison ! 🏠 Les pièces et les objets, et une petite formule magique : « There is… / There are… » pour dire « il y a ».",
    vocabulaire: {
      intro: "La maison et ses pièces.",
      mots: [
        { id: "j20-house", en: "house", phon: "[haouss]", fr: "maison", exemple: "A big house.", exempleFr: "Une grande maison." },
        { id: "j20-room", en: "room", phon: "[roum]", fr: "pièce / chambre", exemple: "My room.", exempleFr: "Ma chambre." },
        { id: "j20-kitchen", en: "kitchen", phon: "[ki-tcheun]", fr: "cuisine", exemple: "In the kitchen.", exempleFr: "Dans la cuisine." },
        { id: "j20-bedroom", en: "bedroom", phon: "[bèd-roum]", fr: "chambre", exemple: "A small bedroom.", exempleFr: "Une petite chambre." },
        { id: "j20-bathroom", en: "bathroom", phon: "[bath-roum]", fr: "salle de bain", exemple: "The bathroom is here.", exempleFr: "La salle de bain est ici." },
        { id: "j20-door", en: "door", phon: "[dor]", fr: "porte", exemple: "Open the door.", exempleFr: "Ouvre la porte." },
        { id: "j20-window", en: "window", phon: "[win-do]", fr: "fenêtre", exemple: "A big window.", exempleFr: "Une grande fenêtre." },
        { id: "j20-bed", en: "bed", phon: "[bèd]", fr: "lit", exemple: "A soft bed.", exempleFr: "Un lit douillet." },
      ],
    },
    grammaire: {
      titre: "« There is… / There are… » (il y a)",
      regle:
        "Pour dire « il y a », on utilise « There is » + singulier (There is a bed) et « There are » + pluriel (There are two rooms).",
      analogie:
        "« There is / There are » = « il y a », au singulier ou au pluriel. Comme « il y a » qui ne change pas en français, mais ici on accorde : is (un seul) / are (plusieurs).",
      exemples: [
        { en: "There is a bed.", fr: "Il y a un lit." },
        { en: "There is a window.", fr: "Il y a une fenêtre." },
        { en: "There are two rooms.", fr: "Il y a deux pièces." },
        { en: "There are three doors.", fr: "Il y a trois portes." },
      ],
      exercices: [
        { type: "trou", phrase: "There ___ a bed. (il y a, singulier)", r: "is", explication: "Singulier → There is." },
        { type: "trou", phrase: "There ___ two rooms. (il y a, pluriel)", r: "are", explication: "Pluriel → There are." },
        { type: "traduction", sens: "fr-en", q: "Il y a une fenêtre.", r: "there is a window", explication: "« There is a window »." },
        { type: "vraiFaux", affirmation: "« There are a kitchen » est correct.", r: false, explication: "Non : un seul → « There is a kitchen »." },
      ],
    },
    conjugaison: {
      titre: "There is / There are + « in » (dans)",
      explication:
        "On situe les choses avec « in » (dans) : There is a bed in the bedroom. À l'oral, « there is » devient souvent « there's ».",
      tableau: [
        { pronom: "There is", forme: "there's", exemple: "There's a door." },
        { pronom: "There are", forme: "—", exemple: "There are two windows." },
        { pronom: "in", forme: "dans", exemple: "in the kitchen (dans la cuisine)" },
        { pronom: "There is … in …", forme: "—", exemple: "There is a bed in my room." },
      ],
      exercices: [
        { type: "trou", phrase: "There ___ a window in the kitchen. (singulier)", r: "is", explication: "Un seul → There is." },
        { type: "trou", phrase: "There is a bed ___ the bedroom. (dans)", r: "in", explication: "« in » = dans." },
        { type: "trou", phrase: "There ___ three doors. (pluriel)", r: "are", explication: "Pluriel → There are." },
      ],
    },
    dialogue: {
      titre: "Visite de la maison",
      contexte: "Emma te fait visiter sa maison.",
      lignes: [
        { role: "Emma", en: "This is the kitchen.", fr: "Voici la cuisine." },
        { role: "Toi", en: "There is a big window!", fr: "Il y a une grande fenêtre !" },
        { role: "Emma", en: "And here is my bedroom.", fr: "Et voici ma chambre." },
        { role: "Toi", en: "There is a soft bed.", fr: "Il y a un lit douillet." },
        { role: "Emma", en: "Yes! Make yourself at home.", fr: "Oui ! Fais comme chez toi." },
      ],
      aToi: [
        { consigne: "Dis « Il y a un lit »", r: "there is a bed", accepte: ["there's a bed"], explication: "« There is a bed »." },
        { consigne: "Dis « Il y a deux pièces »", r: "there are two rooms", accepte: [], explication: "« There are two rooms »." },
      ],
    },
    prononciation: {
      son: "[uː]",
      titre: "Le « ou » long",
      explication:
        "« room », « two », « you » se disent avec un « ou » bien long et arrondi : « rouum ». Garde les lèvres rondes et tiens le son.",
      technique: "Avance les lèvres comme pour souffler une bougie et tiens : « ouu… room ».",
      mots: [
        { en: "room", phon: "[roum]" },
        { en: "two", phon: "[tou]" },
        { en: "you", phon: "[you]" },
        { en: "blue", phon: "[blou]" },
      ],
      phrase: "There are two rooms.",
    },
    bilan: {
      resume: [
        "La maison : house, room, kitchen, bedroom, bathroom, door, window, bed.",
        "« There is… / There are… » = il y a (singulier / pluriel).",
        "Situer avec « in » + le « ou » long.",
      ],
      conseil: "Décris une pièce de chez toi : « There is a … in the … ».",
      motivation: "Tu peux décrire toute une maison en anglais. 🏠",
    },
  },

  // ==================== JOUR 21 · 15 JUIN ====================
  {
    jour: 21,
    date: "15 juin",
    mois: "juin",
    titre: "Révision pratique ①",
    emoji: "🔁",
    objectif: "Consolider tout ce que tu sais déjà, sans nouvelle règle.",
    intro:
      "Pause révision ! 🔁 Aucune nouvelle règle aujourd'hui : on consolide. On reprend les salutations, se présenter, le verbe to be, et on enchaîne un grand dialogue. Profite, c'est du déjà-vu.",
    vocabulaire: {
      intro: "Un mélange de mots-clés vus depuis le début.",
      mots: [
        { id: "j21-hello", en: "hello", phon: "[hèl-lo]", fr: "bonjour / salut", exemple: "Hello, friend!", exempleFr: "Bonjour, mon amie !" },
        { id: "j21-please", en: "please", phon: "[pliiz]", fr: "s'il te plaît", exemple: "Water, please.", exempleFr: "De l'eau, s'il te plaît." },
        { id: "j21-thankyou", en: "thank you", phon: "[thènk you]", fr: "merci", exemple: "Thank you so much!", exempleFr: "Merci beaucoup !" },
        { id: "j21-friend", en: "friend", phon: "[frènd]", fr: "ami·e", exemple: "You are my friend.", exempleFr: "Tu es mon amie." },
        { id: "j21-family", en: "family", phon: "[fa-mi-li]", fr: "famille", exemple: "My family.", exempleFr: "Ma famille." },
        { id: "j21-happy", en: "happy", phon: "[ha-pi]", fr: "content·e / heureux", exemple: "I am happy.", exempleFr: "Je suis contente." },
        { id: "j21-house", en: "house", phon: "[haouss]", fr: "maison", exemple: "A nice house.", exempleFr: "Une jolie maison." },
        { id: "j21-today", en: "today", phon: "[tou-dèï]", fr: "aujourd'hui", exemple: "Today is Monday.", exempleFr: "Aujourd'hui on est lundi." },
      ],
    },
    grammaire: {
      titre: "Récap : to be, articles, adjectifs",
      regle:
        "On rassemble trois réflexes déjà vus : (1) le sujet est obligatoire (I am, she is) ; (2) « the » = le/la/les ; (3) l'adjectif se place AVANT le nom (a red dress).",
      analogie:
        "Rien de neuf : juste tes meilleures bases réunies. Si ces trois-là sont automatiques, tu tiens déjà debout en anglais.",
      exemples: [
        { en: "I am happy.", fr: "Je suis contente." },
        { en: "the house", fr: "la maison" },
        { en: "a red dress", fr: "une robe rouge" },
        { en: "She is my friend.", fr: "Elle est mon amie." },
      ],
      exercices: [
        { type: "conjugaison", verbe: "to be", q: "I ___ happy.", r: "am", explication: "Avec « I » → am." },
        { type: "trou", phrase: "___ house is big. (la)", r: "The", accepte: ["the"], explication: "« the » = le/la/les." },
        { type: "traduction", sens: "fr-en", q: "une robe rouge", r: "a red dress", explication: "Adjectif avant : a red dress." },
        { type: "conjugaison", verbe: "to be", q: "She ___ my friend.", r: "is", explication: "Avec « she » → is." },
      ],
    },
    conjugaison: {
      titre: "Récap : to be / to have / présent simple",
      explication:
        "Tes trois piliers, ensemble : to be (am/is/are), to have (have/has), présent simple (he/she/it + -s). On les mélange dans les exercices.",
      tableau: [
        { pronom: "I", forme: "am / have", exemple: "I am happy. I have a friend." },
        { pronom: "She", forme: "is / has", exemple: "She is kind. She has a house." },
        { pronom: "He", forme: "likes", exemple: "He likes tea. (présent +s)" },
        { pronom: "We", forme: "are / have", exemple: "We are friends. We have time." },
        { pronom: "They", forme: "live", exemple: "They live here. (présent)" },
      ],
      exercices: [
        { type: "conjugaison", verbe: "to have", q: "She ___ a house.", r: "has", explication: "Avec « she » → has." },
        { type: "conjugaison", verbe: "to be", q: "We ___ friends.", r: "are", explication: "Avec « we » → are." },
        { type: "conjugaison", verbe: "to like", q: "He ___ tea.", r: "likes", explication: "Présent, 3e personne → likes." },
        { type: "conjugaison", verbe: "to be", q: "I ___ happy today.", r: "am", explication: "Avec « I » → am." },
      ],
    },
    dialogue: {
      titre: "Une vraie petite conversation",
      contexte: "Tu retrouves Emma et vous discutez librement, en réutilisant tout.",
      lignes: [
        { role: "Emma", en: "Hello! How are you today?", fr: "Bonjour ! Comment vas-tu aujourd'hui ?" },
        { role: "Toi", en: "I am fine, thank you!", fr: "Je vais bien, merci !" },
        { role: "Emma", en: "Do you have a big family?", fr: "As-tu une grande famille ?" },
        { role: "Toi", en: "Yes, I have two brothers.", fr: "Oui, j'ai deux frères." },
        { role: "Emma", en: "Lovely! See you soon.", fr: "Adorable ! À bientôt." },
      ],
      aToi: [
        { consigne: "Réponds « Je vais bien, merci »", r: "i am fine, thank you", accepte: ["i'm fine, thank you", "i am fine thank you", "i am fine thanks"], explication: "« I am fine, thank you »." },
        { consigne: "Dis « J'ai deux frères »", r: "i have two brothers", accepte: ["i have 2 brothers"], explication: "« I have two brothers »." },
      ],
    },
    prononciation: {
      son: "🔁",
      titre: "Récap : H, TH, R",
      explication:
        "Tes trois sons-pièges de juin réunis : le H soufflé (hello), le TH langue entre les dents (thank), le R doux (red). On les reprend ensemble.",
      technique: "Dis la phrase lentement en soignant chaque son piège, puis accélère petit à petit.",
      mots: [
        { en: "hello", phon: "[hèl-lo]" },
        { en: "thank", phon: "[thènk]" },
        { en: "red", phon: "[rèd]" },
        { en: "happy", phon: "[ha-pi]" },
      ],
      phrase: "Hello! Thank you, my red-dress friend.",
    },
    bilan: {
      resume: [
        "Tu as tout repris : salutations, se présenter, to be, to have, présent simple.",
        "Trois réflexes sûrs : sujet obligatoire, « the », adjectif avant le nom.",
        "Une vraie conversation enchaînée sans nouvelle règle.",
      ],
      conseil: "Refais le dialogue du jour à voix haute, sans regarder le français.",
      motivation: "Les bases sont solides. La deuxième moitié de juin va te faire briller. 🔁",
    },
  },

  // ==================== JOUR 22 · 16 JUIN ====================
  {
    jour: 22,
    date: "16 juin",
    mois: "juin",
    titre: "La météo",
    emoji: "☀️",
    objectif: "Dire le temps qu'il fait.",
    intro:
      "Quel temps fait-il ? ☀️ Des mots pour la météo, et on réutilise notre ami « It's… » : It's sunny, it's cold. Simple et très utile.",
    vocabulaire: {
      intro: "Le temps qu'il fait.",
      mots: [
        { id: "j22-sunny", en: "sunny", phon: "[sa-ni]", fr: "ensoleillé", exemple: "It's sunny today.", exempleFr: "Il fait soleil aujourd'hui." },
        { id: "j22-rainy", en: "rainy", phon: "[rè-ni]", fr: "pluvieux", exemple: "It's rainy.", exempleFr: "Il pleut." },
        { id: "j22-cloudy", en: "cloudy", phon: "[klaou-di]", fr: "nuageux", exemple: "It's cloudy.", exempleFr: "C'est nuageux." },
        { id: "j22-windy", en: "windy", phon: "[win-di]", fr: "venteux", exemple: "It's windy.", exempleFr: "Il y a du vent." },
        { id: "j22-hot", en: "hot", phon: "[hott]", fr: "chaud", exemple: "It's hot!", exempleFr: "Il fait chaud !" },
        { id: "j22-cold", en: "cold", phon: "[côld]", fr: "froid", exemple: "It's cold.", exempleFr: "Il fait froid." },
        { id: "j22-snow", en: "snow", phon: "[sno]", fr: "neige", exemple: "I like the snow.", exempleFr: "J'aime la neige." },
        { id: "j22-warm", en: "warm", phon: "[wo-rm]", fr: "doux / chaud agréable", exemple: "A warm day.", exempleFr: "Une journée douce." },
      ],
    },
    grammaire: {
      titre: "Le temps : « It's… » + « How is the weather? »",
      regle:
        "Pour la météo, on dit « It's… » + l'adjectif : It's sunny. It's cold. Pour demander : « How is the weather? » (Quel temps fait-il ?) ou « What's the weather like? ».",
      analogie:
        "En français « il fait beau » ; en anglais on dit « it's sunny » (c'est ensoleillé). Le « it » est obligatoire devant le verbe.",
      exemples: [
        { en: "It's sunny.", fr: "Il fait soleil." },
        { en: "It's cold today.", fr: "Il fait froid aujourd'hui." },
        { en: "How is the weather?", fr: "Quel temps fait-il ?" },
        { en: "It's rainy and windy.", fr: "Il pleut et il y a du vent." },
      ],
      exercices: [
        { type: "trou", phrase: "___ sunny today. (il fait, version courte)", r: "It's", accepte: ["its", "it is"], explication: "« It's sunny »." },
        { type: "traduction", sens: "fr-en", q: "Il fait froid.", r: "it's cold", accepte: ["it is cold"], explication: "« It's cold »." },
        { type: "vraiFaux", affirmation: "On peut dire « Is sunny » sans « it ».", r: false, explication: "Non : le « it » est obligatoire → It's sunny." },
        { type: "traduction", sens: "en-fr", q: "It's rainy.", r: "il pleut", accepte: ["c'est pluvieux", "il fait pluvieux"], explication: "« It's rainy » = il pleut." },
      ],
    },
    conjugaison: {
      titre: "Rappel : « it is » pour décrire",
      explication:
        "On réutilise « it is » (it's) pour décrire le temps, comme on l'a fait pour les choses et les jours. It is sunny. It is not cold.",
      tableau: [
        { pronom: "It is", forme: "it's", exemple: "It's warm." },
        { pronom: "It is not", forme: "it isn't", exemple: "It isn't cold." },
        { pronom: "Is it…?", forme: "—", exemple: "Is it sunny? (Fait-il soleil ?)" },
        { pronom: "How is…?", forme: "—", exemple: "How is the weather?" },
      ],
      exercices: [
        { type: "trou", phrase: "It ___ cold. (négation : n'est pas)", r: "isn't", accepte: ["is not"], explication: "« It isn't cold »." },
        { type: "trou", phrase: "___ it sunny? (est-ce qu'il fait)", r: "Is", accepte: ["is"], explication: "« Is it sunny? »." },
        { type: "trou", phrase: "It ___ warm today. (il fait)", r: "is", explication: "« It is warm »." },
      ],
    },
    dialogue: {
      titre: "Quel temps fait-il ?",
      contexte: "Tu téléphones à Emma pour savoir le temps.",
      lignes: [
        { role: "Toi", en: "How is the weather today?", fr: "Quel temps fait-il aujourd'hui ?" },
        { role: "Emma", en: "It's sunny and warm.", fr: "Il fait soleil et doux." },
        { role: "Toi", en: "Is it windy?", fr: "Y a-t-il du vent ?" },
        { role: "Emma", en: "No, it isn't.", fr: "Non." },
        { role: "Toi", en: "Great, I'm coming!", fr: "Super, j'arrive !" },
      ],
      aToi: [
        { consigne: "Demande « Quel temps fait-il ? »", r: "how is the weather", accepte: ["how is the weather?", "what's the weather like"], explication: "« How is the weather? »." },
        { consigne: "Dis « Il fait soleil »", r: "it's sunny", accepte: ["it is sunny"], explication: "« It's sunny »." },
      ],
    },
    prononciation: {
      son: "[aou]",
      titre: "Le son « aou »",
      explication:
        "« cloudy », « how », « now » contiennent le son « aou », qui glisse de « a » vers « ou » d'un seul coup : « klaou-di », « haou ».",
      technique: "Dis « a » puis enchaîne vite vers « ou » : « a-ou ». Un seul son qui glisse.",
      mots: [
        { en: "cloudy", phon: "[klaou-di]" },
        { en: "how", phon: "[haou]" },
        { en: "now", phon: "[naou]" },
        { en: "brown", phon: "[braoun]" },
      ],
      phrase: "How is the weather now?",
    },
    bilan: {
      resume: [
        "La météo : sunny, rainy, cloudy, windy, hot, cold, snow, warm.",
        "« It's… » pour le temps + « How is the weather? ».",
        "Rappel it is / isn't + le son « aou ».",
      ],
      conseil: "Chaque matin, dis le temps qu'il fait : « It's … today. ».",
      motivation: "Tu peux parler météo comme à la télé anglaise. ☀️",
    },
  },

  // ==================== JOUR 23 · 17 JUIN ====================
  {
    jour: 23,
    date: "17 juin",
    mois: "juin",
    titre: "Le corps",
    emoji: "🧍",
    objectif: "Nommer les parties du corps.",
    intro:
      "On parle du corps ! 🧍 Les parties principales, et on réutilise « to have » et les possessifs : I have two eyes, my head…",
    vocabulaire: {
      intro: "Les parties du corps les plus utiles.",
      mots: [
        { id: "j23-head", en: "head", phon: "[hèd]", fr: "tête", exemple: "My head.", exempleFr: "Ma tête." },
        { id: "j23-hand", en: "hand", phon: "[hand]", fr: "main", exemple: "In my hand.", exempleFr: "Dans ma main." },
        { id: "j23-eye", en: "eye", phon: "[aï]", fr: "œil", exemple: "Two eyes.", exempleFr: "Deux yeux." },
        { id: "j23-foot", en: "foot", phon: "[fout]", fr: "pied", exemple: "My foot.", exempleFr: "Mon pied." },
        { id: "j23-arm", en: "arm", phon: "[arm]", fr: "bras", exemple: "My left arm.", exempleFr: "Mon bras gauche." },
        { id: "j23-leg", en: "leg", phon: "[lèg]", fr: "jambe", exemple: "Two legs.", exempleFr: "Deux jambes." },
        { id: "j23-mouth", en: "mouth", phon: "[maouth]", fr: "bouche", exemple: "Open your mouth.", exempleFr: "Ouvre la bouche." },
        { id: "j23-hair", en: "hair", phon: "[hèr]", fr: "cheveux", exemple: "Long hair.", exempleFr: "Des cheveux longs." },
      ],
    },
    grammaire: {
      titre: "Rappel : « have » + possessifs + pluriels surprises",
      regle:
        "On décrit son corps avec « have » et les possessifs : I have two eyes. My head, your hand. Attention à deux pluriels irréguliers : foot → feet, et « hair » reste souvent au singulier.",
      analogie:
        "Comme au jour de la famille : my / your / her + le nom. Et la plupart des parties vont par deux : two eyes, two hands, two feet (pas « foots »).",
      exemples: [
        { en: "I have two eyes.", fr: "J'ai deux yeux." },
        { en: "my head", fr: "ma tête" },
        { en: "one foot → two feet", fr: "un pied → deux pieds" },
        { en: "her long hair", fr: "ses longs cheveux" },
      ],
      exercices: [
        { type: "trou", phrase: "I have two ___ . (eye, pluriel)", r: "eyes", explication: "eye + s = eyes." },
        { type: "trou", phrase: "___ head hurts. (ma)", r: "My", accepte: ["my"], explication: "« My head »." },
        { type: "vraiFaux", affirmation: "Le pluriel de « foot » est « foots ».", r: false, explication: "Non : foot → feet (irrégulier)." },
        { type: "traduction", sens: "fr-en", q: "ma main", r: "my hand", explication: "« my hand »." },
      ],
    },
    conjugaison: {
      titre: "Rappel : « to have »",
      explication:
        "On réutilise to have : I have, you have, he/she HAS, we have, they have. Pour le corps : She has long hair.",
      tableau: [
        { pronom: "I", forme: "have", exemple: "I have two hands." },
        { pronom: "You", forme: "have", exemple: "You have green eyes." },
        { pronom: "He / She", forme: "has", exemple: "She has long hair." },
        { pronom: "We", forme: "have", exemple: "We have two feet." },
        { pronom: "They", forme: "have", exemple: "They have small hands." },
      ],
      exercices: [
        { type: "conjugaison", verbe: "to have", q: "She ___ long hair.", r: "has", explication: "Avec « she » → has." },
        { type: "conjugaison", verbe: "to have", q: "I ___ two hands.", r: "have", explication: "Avec « I » → have." },
        { type: "vraiFaux", affirmation: "« He have blue eyes » est correct.", r: false, explication: "Non : « He HAS blue eyes »." },
      ],
    },
    dialogue: {
      titre: "Chez le médecin",
      contexte: "Tu vas voir le médecin (Emma) car tu as mal.",
      lignes: [
        { role: "Emma", en: "Hello, what's wrong?", fr: "Bonjour, qu'est-ce qui ne va pas ?" },
        { role: "Toi", en: "My head hurts.", fr: "J'ai mal à la tête." },
        { role: "Emma", en: "And your arm?", fr: "Et ton bras ?" },
        { role: "Toi", en: "My arm is fine.", fr: "Mon bras va bien." },
        { role: "Emma", en: "Okay, rest a little.", fr: "D'accord, repose-toi un peu." },
      ],
      aToi: [
        { consigne: "Dis « J'ai mal à la tête »", r: "my head hurts", accepte: [], explication: "« My head hurts »." },
        { consigne: "Dis « J'ai deux yeux »", r: "i have two eyes", accepte: [], explication: "« I have two eyes »." },
      ],
    },
    prononciation: {
      son: "[aɪ]",
      titre: "Le son « aï »",
      explication:
        "« eye », « my », « five » contiennent le son « aï », qui glisse de « a » vers « i ». « eye » se dit exactement comme la lettre « I ».",
      technique: "Dis « a » puis glisse vers « i » : « a-ï », d'un seul mouvement.",
      mots: [
        { en: "eye", phon: "[aï]" },
        { en: "my", phon: "[maï]" },
        { en: "five", phon: "[faïv]" },
        { en: "nine", phon: "[naïn]" },
      ],
      phrase: "My eyes, my hands, my feet.",
    },
    bilan: {
      resume: [
        "Le corps : head, hand, eye, foot, arm, leg, mouth, hair.",
        "Rappel have + possessifs ; foot → feet (irrégulier).",
        "Le son « aï » (eye = la lettre I).",
      ],
      conseil: "Touche et nomme cinq parties de ton corps en anglais.",
      motivation: "Tu peux te décrire de la tête aux pieds. 🧍",
    },
  },

  // ==================== JOUR 24 · 18 JUIN ====================
  {
    jour: 24,
    date: "18 juin",
    mois: "juin",
    titre: "Les animaux",
    emoji: "🐶",
    objectif: "Nommer des animaux et parler d'eux au présent.",
    intro:
      "Place aux animaux ! 🐶 De nouveaux mots tout doux, et on réutilise le présent simple à la 3e personne : the cat eats, the dog runs (+ -s).",
    vocabulaire: {
      intro: "Des animaux familiers.",
      mots: [
        { id: "j24-dog", en: "dog", phon: "[dogue]", fr: "chien", exemple: "The dog runs.", exempleFr: "Le chien court." },
        { id: "j24-cat", en: "cat", phon: "[katt]", fr: "chat", exemple: "The cat sleeps.", exempleFr: "Le chat dort." },
        { id: "j24-bird", en: "bird", phon: "[beurd]", fr: "oiseau", exemple: "A small bird.", exempleFr: "Un petit oiseau." },
        { id: "j24-horse", en: "horse", phon: "[horss]", fr: "cheval", exemple: "A brown horse.", exempleFr: "Un cheval marron." },
        { id: "j24-rabbit", en: "rabbit", phon: "[ra-bit]", fr: "lapin", exemple: "A white rabbit.", exempleFr: "Un lapin blanc." },
        { id: "j24-cow", en: "cow", phon: "[kaou]", fr: "vache", exemple: "The cow eats grass.", exempleFr: "La vache mange de l'herbe." },
        { id: "j24-duck", en: "duck", phon: "[deuk]", fr: "canard", exemple: "A yellow duck.", exempleFr: "Un canard jaune." },
        { id: "j24-mouse", en: "mouse", phon: "[maouss]", fr: "souris", exemple: "A little mouse.", exempleFr: "Une petite souris." },
      ],
    },
    grammaire: {
      titre: "Rappel : le présent simple, 3e personne",
      regle:
        "Pour parler d'un animal (he/she/it), on ajoute -s au verbe : the dog runs, the cat eats, the bird sings. C'est la grande règle du présent simple.",
      analogie:
        "Un animal = « it » = 3e personne = verbe + -s. « The cat sleeps », jamais « the cat sleep ».",
      exemples: [
        { en: "The dog runs.", fr: "Le chien court." },
        { en: "The cat eats.", fr: "Le chat mange." },
        { en: "The bird sings.", fr: "L'oiseau chante." },
        { en: "The cow eats grass.", fr: "La vache mange de l'herbe." },
      ],
      exercices: [
        { type: "trou", phrase: "The dog ___ . (run)", r: "runs", explication: "3e personne → runs." },
        { type: "trou", phrase: "The cat ___ fish. (eat)", r: "eats", explication: "3e personne → eats." },
        { type: "vraiFaux", affirmation: "« The bird sing » est correct.", r: false, explication: "Non : « The bird singS »." },
        { type: "traduction", sens: "fr-en", q: "un chat noir", r: "a black cat", explication: "Adjectif avant : a black cat." },
      ],
    },
    conjugaison: {
      titre: "Présent simple : verbe + -s",
      explication:
        "I / you / we / they → verbe sans -s. He / she / it (et les animaux !) → verbe + -s. eat → eats, run → runs, sleep → sleeps.",
      tableau: [
        { pronom: "I", forme: "like", exemple: "I like dogs." },
        { pronom: "The dog", forme: "runs", exemple: "The dog runs fast." },
        { pronom: "The cat", forme: "sleeps", exemple: "The cat sleeps." },
        { pronom: "We", forme: "have", exemple: "We have a rabbit." },
        { pronom: "They", forme: "eat", exemple: "They eat grass." },
      ],
      exercices: [
        { type: "conjugaison", verbe: "to sleep", q: "The cat ___ .", r: "sleeps", explication: "3e personne → sleeps." },
        { type: "conjugaison", verbe: "to like", q: "I ___ dogs.", r: "like", explication: "Avec « I », pas de -s." },
        { type: "conjugaison", verbe: "to eat", q: "The cow ___ grass.", r: "eats", explication: "3e personne → eats." },
      ],
    },
    dialogue: {
      titre: "Les animaux d'Emma",
      contexte: "Emma te parle de ses animaux.",
      lignes: [
        { role: "Emma", en: "I have a dog and a cat.", fr: "J'ai un chien et un chat." },
        { role: "Toi", en: "What does the dog do?", fr: "Que fait le chien ?" },
        { role: "Emma", en: "The dog runs and plays.", fr: "Le chien court et joue." },
        { role: "Toi", en: "And the cat?", fr: "Et le chat ?" },
        { role: "Emma", en: "The cat sleeps all day!", fr: "Le chat dort toute la journée !" },
      ],
      aToi: [
        { consigne: "Dis « Le chien court »", r: "the dog runs", accepte: [], explication: "« The dog runs »." },
        { consigne: "Dis « Le chat dort »", r: "the cat sleeps", accepte: [], explication: "« The cat sleeps »." },
      ],
    },
    prononciation: {
      son: "[s] / [z]",
      titre: "Le -s du pluriel (rappel)",
      explication:
        "Au pluriel, le -s se dit « s » (cats) ou « z » (dogs, birds). Après un son doux (voyelle, b, d, g…), c'est « z ».",
      technique: "Dis « cats » (sss) puis « dogs » (zzz) : sens la différence dans ta gorge.",
      mots: [
        { en: "cats", phon: "[kats]" },
        { en: "dogs", phon: "[dogz]" },
        { en: "birds", phon: "[beurdz]" },
        { en: "ducks", phon: "[deuks]" },
      ],
      phrase: "Cats, dogs, birds and ducks.",
    },
    bilan: {
      resume: [
        "Des animaux : dog, cat, bird, horse, rabbit, cow, duck, mouse.",
        "Rappel : un animal (it) → verbe + -s au présent.",
        "Le -s du pluriel (s / z).",
      ],
      conseil: "Décris un animal : « The … is … and it … ».",
      motivation: "La ferme et la maison parlent anglais ! 🐶",
    },
  },

  // ==================== JOUR 25 · 19 JUIN ====================
  {
    jour: 25,
    date: "19 juin",
    mois: "juin",
    titre: "Loisirs & j'aime",
    emoji: "❤️",
    objectif: "Dire ce que tu aimes faire.",
    intro:
      "Tes loisirs ! ❤️ De nouveaux verbes d'activités, et on réutilise « I like… » pour dire ce que tu aimes faire : I like to read, I like reading.",
    vocabulaire: {
      intro: "Des activités qu'on aime faire.",
      mots: [
        { id: "j25-read", en: "to read", phon: "[tou riid]", fr: "lire", exemple: "I like to read.", exempleFr: "J'aime lire." },
        { id: "j25-sing", en: "to sing", phon: "[tou singue]", fr: "chanter", exemple: "She sings well.", exempleFr: "Elle chante bien." },
        { id: "j25-dance", en: "to dance", phon: "[tou danss]", fr: "danser", exemple: "We dance together.", exempleFr: "On danse ensemble." },
        { id: "j25-swim", en: "to swim", phon: "[tou swim]", fr: "nager", exemple: "I swim in summer.", exempleFr: "Je nage en été." },
        { id: "j25-draw", en: "to draw", phon: "[tou dro]", fr: "dessiner", exemple: "He draws cats.", exempleFr: "Il dessine des chats." },
        { id: "j25-cook", en: "to cook", phon: "[tou kouk]", fr: "cuisiner", exemple: "I cook on Sunday.", exempleFr: "Je cuisine le dimanche." },
        { id: "j25-run", en: "to run", phon: "[tou reun]", fr: "courir", exemple: "She runs fast.", exempleFr: "Elle court vite." },
        { id: "j25-play", en: "to play", phon: "[tou plèï]", fr: "jouer", exemple: "I play music.", exempleFr: "Je joue de la musique." },
      ],
    },
    grammaire: {
      titre: "Dire ce qu'on aime faire : like + to / -ing",
      regle:
        "Pour dire ce qu'on aime faire, deux façons : « I like to read. » et « I like reading. » Les deux sont correctes. Pareil avec love (adorer) et don't like (ne pas aimer).",
      analogie:
        "« I like to read » ou « I like reading » = « j'aime lire ». L'anglais accepte les deux ; choisis celle que tu préfères.",
      exemples: [
        { en: "I like to read.", fr: "J'aime lire." },
        { en: "I like reading.", fr: "J'aime lire." },
        { en: "She loves to sing.", fr: "Elle adore chanter." },
        { en: "I don't like cooking.", fr: "Je n'aime pas cuisiner." },
      ],
      exercices: [
        { type: "trou", phrase: "I like ___ read. (to + verbe)", r: "to", explication: "« I like to read »." },
        { type: "traduction", sens: "fr-en", q: "J'aime danser. (like to…)", r: "i like to dance", accepte: ["i like dancing"], explication: "« I like to dance » / « I like dancing »." },
        { type: "vraiFaux", affirmation: "« I like reading » est correct.", r: true, explication: "Oui : like + -ing fonctionne aussi." },
        { type: "trou", phrase: "She ___ to sing. (adorer)", r: "loves", explication: "« She loves to sing » (3e pers. + s)." },
      ],
    },
    conjugaison: {
      titre: "Rappel : like / love / don't like",
      explication:
        "I like, she likes (+ -s). À la négation : I don't like, she doesn't like. love marche pareil : I love, she loves.",
      tableau: [
        { pronom: "I", forme: "like", exemple: "I like to swim." },
        { pronom: "She", forme: "likes", exemple: "She likes to draw." },
        { pronom: "I (négation)", forme: "don't like", exemple: "I don't like cooking." },
        { pronom: "He (négation)", forme: "doesn't like", exemple: "He doesn't like to run." },
        { pronom: "We", forme: "love", exemple: "We love to dance." },
      ],
      exercices: [
        { type: "conjugaison", verbe: "to like", q: "She ___ to draw.", r: "likes", explication: "3e personne → likes." },
        { type: "trou", phrase: "I ___ like cooking. (ne pas)", r: "don't", accepte: ["do not"], explication: "Avec « I » → don't." },
        { type: "trou", phrase: "He ___ like to run. (ne pas)", r: "doesn't", accepte: ["does not"], explication: "Avec « he » → doesn't." },
      ],
    },
    dialogue: {
      titre: "Tes passions",
      contexte: "Emma découvre ce que tu aimes faire.",
      lignes: [
        { role: "Emma", en: "What do you like to do?", fr: "Qu'aimes-tu faire ?" },
        { role: "Toi", en: "I like to read and to draw.", fr: "J'aime lire et dessiner." },
        { role: "Emma", en: "Do you like to sing?", fr: "Aimes-tu chanter ?" },
        { role: "Toi", en: "No, I don't, but I love to dance!", fr: "Non, mais j'adore danser !" },
        { role: "Emma", en: "Me too!", fr: "Moi aussi !" },
      ],
      aToi: [
        { consigne: "Dis « J'aime lire »", r: "i like to read", accepte: ["i like reading"], explication: "« I like to read »." },
        { consigne: "Dis « J'adore danser »", r: "i love to dance", accepte: ["i love dancing"], explication: "« I love to dance »." },
      ],
    },
    prononciation: {
      son: "[ŋ]",
      titre: "Le son « -ing »",
      explication:
        "La terminaison « -ing » (reading, singing) se dit « -ingue » mais avec le « g » à peine soufflé, par le nez. Ne marque pas trop le « g ».",
      technique: "Dis « sing » en laissant le son filer par le nez à la fin : « si-ng… », sans appuyer le « g ».",
      mots: [
        { en: "reading", phon: "[rii-dingue]" },
        { en: "singing", phon: "[sin-guingue]" },
        { en: "morning", phon: "[mor-ningue]" },
        { en: "evening", phon: "[iiv-ningue]" },
      ],
      phrase: "I like reading and singing.",
    },
    bilan: {
      resume: [
        "Des loisirs : read, sing, dance, swim, draw, cook, run, play.",
        "Dire ce qu'on aime faire : « I like to … » / « I like …-ing ».",
        "Rappel like / love / don't like + le son « -ing ».",
      ],
      conseil: "Dis trois choses que tu aimes faire : « I like to … ».",
      motivation: "Tu peux parler de tes passions en anglais. ❤️",
    },
  },

  // ==================== JOUR 26 · 20 JUIN ====================
  {
    jour: 26,
    date: "20 juin",
    mois: "juin",
    titre: "L'heure & la journée",
    emoji: "🕐",
    objectif: "Demander et dire l'heure simplement, parler des moments de la journée.",
    intro:
      "Quelle heure est-il ? 🕐 On dit l'heure simplement (les heures pile) et on nomme les moments de la journée. On réutilise nos nombres.",
    vocabulaire: {
      intro: "Le temps qui passe.",
      mots: [
        { id: "j26-time", en: "time", phon: "[taïm]", fr: "temps / heure", exemple: "What time is it?", exempleFr: "Quelle heure est-il ?" },
        { id: "j26-oclock", en: "o'clock", phon: "[o-klok]", fr: "heure (pile)", exemple: "Seven o'clock.", exempleFr: "Sept heures." },
        { id: "j26-morning", en: "morning", phon: "[mor-ningue]", fr: "matin", exemple: "In the morning.", exempleFr: "Le matin." },
        { id: "j26-afternoon", en: "afternoon", phon: "[af-teur-noun]", fr: "après-midi", exemple: "This afternoon.", exempleFr: "Cet après-midi." },
        { id: "j26-evening", en: "evening", phon: "[iiv-ningue]", fr: "soir", exemple: "In the evening.", exempleFr: "Le soir." },
        { id: "j26-night", en: "night", phon: "[naït]", fr: "nuit", exemple: "Good night.", exempleFr: "Bonne nuit." },
        { id: "j26-now", en: "now", phon: "[naou]", fr: "maintenant", exemple: "Come now.", exempleFr: "Viens maintenant." },
        { id: "j26-clock", en: "clock", phon: "[klok]", fr: "horloge", exemple: "The clock is big.", exempleFr: "L'horloge est grande." },
      ],
    },
    grammaire: {
      titre: "L'heure : « What time is it? » + « at »",
      regle:
        "Pour demander : « What time is it? ». Pour répondre, l'heure pile : « It's seven o'clock. ». Pour un rendez-vous, on met « at » : « at seven o'clock », « in the morning ».",
      analogie:
        "« o'clock » sert juste pour les heures pile (7 h, 8 h…). « at » = « à » : at seven (à sept heures). « in the morning » = le matin.",
      exemples: [
        { en: "What time is it?", fr: "Quelle heure est-il ?" },
        { en: "It's eight o'clock.", fr: "Il est huit heures." },
        { en: "at seven o'clock", fr: "à sept heures" },
        { en: "in the morning", fr: "le matin" },
      ],
      exercices: [
        { type: "trou", phrase: "What ___ is it? (heure)", r: "time", explication: "« What time is it? »." },
        { type: "trou", phrase: "It's nine ___ . (heure pile)", r: "o'clock", accepte: ["oclock"], explication: "« nine o'clock »." },
        { type: "trou", phrase: "See you ___ seven o'clock. (à)", r: "at", explication: "« at seven o'clock »." },
        { type: "traduction", sens: "fr-en", q: "le matin", r: "in the morning", explication: "« in the morning »." },
      ],
    },
    conjugaison: {
      titre: "Rappel : « it is » pour l'heure",
      explication:
        "On réutilise « it is » (it's) pour l'heure : It is seven o'clock. It's morning. Toujours le « it » devant.",
      tableau: [
        { pronom: "What time is it?", forme: "—", exemple: "Quelle heure est-il ?" },
        { pronom: "It is", forme: "it's", exemple: "It's ten o'clock." },
        { pronom: "It is", forme: "morning", exemple: "It's morning. (C'est le matin.)" },
        { pronom: "at + heure", forme: "—", exemple: "at six o'clock" },
      ],
      exercices: [
        { type: "trou", phrase: "___ seven o'clock. (il est, version courte)", r: "It's", accepte: ["its", "it is"], explication: "« It's seven o'clock »." },
        { type: "trou", phrase: "What time ___ it? (verbe être)", r: "is", explication: "« What time is it? »." },
        { type: "traduction", sens: "fr-en", q: "à huit heures", r: "at eight o'clock", explication: "« at eight o'clock »." },
      ],
    },
    dialogue: {
      titre: "On se voit à quelle heure ?",
      contexte: "Tu fixes une heure de rendez-vous avec Emma.",
      lignes: [
        { role: "Emma", en: "What time is it?", fr: "Quelle heure est-il ?" },
        { role: "Toi", en: "It's six o'clock.", fr: "Il est six heures." },
        { role: "Emma", en: "See you at seven?", fr: "On se voit à sept heures ?" },
        { role: "Toi", en: "Okay, at seven, in the evening.", fr: "D'accord, à sept heures, le soir." },
        { role: "Emma", en: "Perfect!", fr: "Parfait !" },
      ],
      aToi: [
        { consigne: "Demande « Quelle heure est-il ? »", r: "what time is it", accepte: ["what time is it?"], explication: "« What time is it? »." },
        { consigne: "Dis « Il est sept heures »", r: "it's seven o'clock", accepte: ["it is seven o'clock"], explication: "« It's seven o'clock »." },
      ],
    },
    prononciation: {
      son: "🕐",
      titre: "Dire l'heure : « o'clock »",
      explication:
        "« o'clock » se dit « o-klok » d'un seul bloc, le « clock » avec un C dur. Et « morning », « evening » finissent par le « -ing » du nez.",
      technique: "Enchaîne le chiffre et « o'clock » sans pause : « seven-o-klok ».",
      mots: [
        { en: "o'clock", phon: "[o-klok]" },
        { en: "morning", phon: "[mor-ningue]" },
        { en: "evening", phon: "[iiv-ningue]" },
        { en: "time", phon: "[taïm]" },
      ],
      phrase: "It's seven o'clock in the morning.",
    },
    bilan: {
      resume: [
        "Le temps : time, o'clock, morning, afternoon, evening, night, now.",
        "« What time is it? » → « It's … o'clock » + « at » pour les rendez-vous.",
        "Rappel « it is » pour l'heure.",
      ],
      conseil: "Regarde l'horloge et dis l'heure pile la plus proche : « It's … o'clock. ».",
      motivation: "Tu peux donner et demander l'heure. Plus jamais en retard ! 🕐",
    },
  },

  // ==================== JOUR 27 · 21 JUIN ====================
  {
    jour: 27,
    date: "21 juin",
    mois: "juin",
    titre: "Révision pratique ②",
    emoji: "🔁",
    objectif: "Consolider les questions et la négation, sans nouvelle règle.",
    intro:
      "Deuxième pause révision ! 🔁 On reprend deux outils essentiels : poser des questions (do / does) et dire non (don't / doesn't). Beaucoup de pratique, zéro nouveauté.",
    vocabulaire: {
      intro: "Des mots-clés du quotidien, revus ensemble.",
      mots: [
        { id: "j27-eat", en: "to eat", phon: "[tou iit]", fr: "manger", exemple: "Do you eat fish?", exempleFr: "Manges-tu du poisson ?" },
        { id: "j27-live", en: "to live", phon: "[tou liv]", fr: "vivre / habiter", exemple: "Where do you live?", exempleFr: "Où habites-tu ?" },
        { id: "j27-like", en: "to like", phon: "[tou laïk]", fr: "aimer (bien)", exemple: "I don't like coffee.", exempleFr: "Je n'aime pas le café." },
        { id: "j27-work", en: "to work", phon: "[tou weurk]", fr: "travailler", exemple: "Does she work?", exempleFr: "Travaille-t-elle ?" },
        { id: "j27-water", en: "water", phon: "[wo-teur]", fr: "eau", exemple: "I drink water.", exempleFr: "Je bois de l'eau." },
        { id: "j27-music", en: "music", phon: "[miou-zik]", fr: "musique", exemple: "Do you like music?", exempleFr: "Aimes-tu la musique ?" },
        { id: "j27-dog", en: "dog", phon: "[dogue]", fr: "chien", exemple: "Do you have a dog?", exempleFr: "As-tu un chien ?" },
        { id: "j27-friend", en: "friend", phon: "[frènd]", fr: "ami·e", exemple: "She is my friend.", exempleFr: "C'est mon amie." },
      ],
    },
    grammaire: {
      titre: "Récap : questions (do/does) + négation (don't/doesn't)",
      regle:
        "Deux outils ensemble : pour QUESTIONNER → Do you…? / Does she…? Pour DIRE NON → I don't… / She doesn't… Avec he/she/it : DOES et DOESN'T (le verbe perd son -s).",
      analogie:
        "« Do/Does » = est-ce que. « Don't/Doesn't » = ne… pas. Rappelle-toi : après does et doesn't, le verbe redevient simple (Does she like? She doesn't like).",
      exemples: [
        { en: "Do you like tea?", fr: "Aimes-tu le thé ?" },
        { en: "Does he work?", fr: "Travaille-t-il ?" },
        { en: "I don't like coffee.", fr: "Je n'aime pas le café." },
        { en: "She doesn't live here.", fr: "Elle n'habite pas ici." },
      ],
      exercices: [
        { type: "trou", phrase: "___ you like music? (est-ce que, tu)", r: "Do", accepte: ["do"], explication: "Avec « you » → Do." },
        { type: "trou", phrase: "___ she work? (est-ce que, elle)", r: "Does", accepte: ["does"], explication: "Avec « she » → Does." },
        { type: "trou", phrase: "I ___ like coffee. (ne pas)", r: "don't", accepte: ["do not"], explication: "Avec « I » → don't." },
        { type: "trou", phrase: "He ___ live here. (ne pas)", r: "doesn't", accepte: ["does not"], explication: "Avec « he » → doesn't." },
      ],
    },
    conjugaison: {
      titre: "Récap : do / does / don't / doesn't",
      explication:
        "I / you / we / they → do, don't. He / she / it → does, doesn't. Après does et doesn't, le verbe n'a plus de -s.",
      tableau: [
        { pronom: "I", forme: "do / don't", exemple: "Do I know you? I don't know." },
        { pronom: "You", forme: "do / don't", exemple: "Do you live here? You don't." },
        { pronom: "He / She", forme: "does / doesn't", exemple: "Does she work? She doesn't." },
        { pronom: "We", forme: "do / don't", exemple: "We don't eat meat." },
        { pronom: "They", forme: "do / don't", exemple: "Do they like dogs?" },
      ],
      exercices: [
        { type: "trou", phrase: "___ they like dogs? (est-ce que)", r: "Do", accepte: ["do"], explication: "Avec « they » → Do." },
        { type: "trou", phrase: "She ___ work today. (ne pas)", r: "doesn't", accepte: ["does not"], explication: "Avec « she » → doesn't." },
        { type: "vraiFaux", affirmation: "« Does she likes coffee? » est correct.", r: false, explication: "Non : après does, le verbe perd son -s → « Does she like? »." },
      ],
    },
    dialogue: {
      titre: "Vingt questions",
      contexte: "Vous jouez à vous poser des questions et à répondre.",
      lignes: [
        { role: "Emma", en: "Do you like music?", fr: "Aimes-tu la musique ?" },
        { role: "Toi", en: "Yes, I do! Do you?", fr: "Oui ! Et toi ?" },
        { role: "Emma", en: "I do. Do you have a dog?", fr: "Oui. As-tu un chien ?" },
        { role: "Toi", en: "No, I don't.", fr: "Non." },
        { role: "Emma", en: "Where do you live?", fr: "Où habites-tu ?" },
        { role: "Toi", en: "I live in France.", fr: "J'habite en France." },
      ],
      aToi: [
        { consigne: "Demande « Aimes-tu la musique ? »", r: "do you like music", accepte: ["do you like music?"], explication: "« Do you like music? »." },
        { consigne: "Dis « Non » (forme courte avec do)", r: "no, i don't", accepte: ["no i don't", "no i do not"], explication: "« No, I don't »." },
      ],
    },
    prononciation: {
      son: "n't",
      titre: "Les contractions (rappel)",
      explication:
        "« don't », « doesn't » se disent d'un seul bloc, le « t » à peine marqué : « dôneut », « deu-zeunt ». Ne sépare pas « do not » à l'oral.",
      technique: "Enchaîne sans pause : « I-dont-like », « she-dazent-work ».",
      mots: [
        { en: "don't", phon: "[dôneut]" },
        { en: "doesn't", phon: "[deu-zeunt]" },
        { en: "do", phon: "[dou]" },
        { en: "does", phon: "[deuz]" },
      ],
      phrase: "I don't, and she doesn't either.",
    },
    bilan: {
      resume: [
        "Questions : Do you…? / Does she…? (he/she/it → DOES).",
        "Négation : I don't… / She doesn't… (verbe sans -s après doesn't).",
        "Les contractions à l'oral (don't, doesn't).",
      ],
      conseil: "Pose-toi trois questions « Do you…? » et réponds par « Yes, I do » ou « No, I don't ».",
      motivation: "Questions et négation maîtrisées. Tu mènes la conversation ! 🔁",
    },
  },

  // ==================== JOUR 28 · 22 JUIN ====================
  {
    jour: 28,
    date: "22 juin",
    mois: "juin",
    titre: "En ville",
    emoji: "🏙️",
    objectif: "Nommer des lieux de la ville et demander où ils se trouvent.",
    intro:
      "On sort en ville ! 🏙️ Les lieux importants, et on réutilise « Where is…? » et « There is… » pour se repérer.",
    vocabulaire: {
      intro: "Les lieux d'une ville.",
      mots: [
        { id: "j28-town", en: "town", phon: "[taoun]", fr: "ville", exemple: "A small town.", exempleFr: "Une petite ville." },
        { id: "j28-street", en: "street", phon: "[striit]", fr: "rue", exemple: "In the street.", exempleFr: "Dans la rue." },
        { id: "j28-shop", en: "shop", phon: "[chop]", fr: "magasin", exemple: "A nice shop.", exempleFr: "Un joli magasin." },
        { id: "j28-school", en: "school", phon: "[skoul]", fr: "école", exemple: "I go to school.", exempleFr: "Je vais à l'école." },
        { id: "j28-park", en: "park", phon: "[park]", fr: "parc", exemple: "In the park.", exempleFr: "Dans le parc." },
        { id: "j28-station", en: "station", phon: "[stèï-cheun]", fr: "gare", exemple: "The train station.", exempleFr: "La gare." },
        { id: "j28-market", en: "market", phon: "[mar-kit]", fr: "marché", exemple: "At the market.", exempleFr: "Au marché." },
        { id: "j28-hospital", en: "hospital", phon: "[hos-pi-tal]", fr: "hôpital", exemple: "Near the hospital.", exempleFr: "Près de l'hôpital." },
      ],
    },
    grammaire: {
      titre: "Se repérer : « Where is…? » + « There is… »",
      regle:
        "Pour demander où se trouve un lieu : « Where is the station? ». Pour répondre : « It's in the street. » ou « There is a park near the shop. »",
      analogie:
        "« Where is…? » = où est…? (rappel du jour « Se présenter »). On y répond avec « It's… » ou « There is… ».",
      exemples: [
        { en: "Where is the school?", fr: "Où est l'école ?" },
        { en: "It's in the street.", fr: "C'est dans la rue." },
        { en: "There is a park here.", fr: "Il y a un parc ici." },
        { en: "Where is the market?", fr: "Où est le marché ?" },
      ],
      exercices: [
        { type: "trou", phrase: "___ is the station? (où)", r: "Where", accepte: ["where"], explication: "« Where is the station? »." },
        { type: "trou", phrase: "There ___ a park near here. (il y a, singulier)", r: "is", explication: "Singulier → There is." },
        { type: "traduction", sens: "fr-en", q: "Où est l'école ?", r: "where is the school", accepte: ["where is the school?"], explication: "« Where is the school? »." },
        { type: "vraiFaux", affirmation: "« Where is » sert à demander un lieu.", r: true, explication: "Oui : where = où." },
      ],
    },
    conjugaison: {
      titre: "Rappel : to be (is / are) pour situer",
      explication:
        "On situe avec to be : The shop is here. The shops are in the street. Un seul lieu → is, plusieurs → are.",
      tableau: [
        { pronom: "The shop", forme: "is", exemple: "The shop is here." },
        { pronom: "The shops", forme: "are", exemple: "The shops are in town." },
        { pronom: "Where is…?", forme: "—", exemple: "Where is the park?" },
        { pronom: "It", forme: "is", exemple: "It is near the school." },
      ],
      exercices: [
        { type: "conjugaison", verbe: "to be", q: "The park ___ near the shop.", r: "is", explication: "Un seul → is." },
        { type: "conjugaison", verbe: "to be", q: "The shops ___ in the street.", r: "are", explication: "Pluriel → are." },
        { type: "trou", phrase: "___ is the hospital? (où)", r: "Where", accepte: ["where"], explication: "« Where is the hospital? »." },
      ],
    },
    dialogue: {
      titre: "Je cherche la gare",
      contexte: "Tu demandes ton chemin à Emma, une passante.",
      lignes: [
        { role: "Toi", en: "Excuse me, where is the station?", fr: "Pardon, où est la gare ?" },
        { role: "Emma", en: "It's in this street.", fr: "C'est dans cette rue." },
        { role: "Toi", en: "Is there a shop near it?", fr: "Y a-t-il un magasin à côté ?" },
        { role: "Emma", en: "Yes, there is a market too.", fr: "Oui, il y a aussi un marché." },
        { role: "Toi", en: "Thank you so much!", fr: "Merci beaucoup !" },
      ],
      aToi: [
        { consigne: "Demande « Où est la gare ? »", r: "where is the station", accepte: ["where is the station?"], explication: "« Where is the station? »." },
        { consigne: "Dis « Il y a un marché »", r: "there is a market", accepte: ["there's a market"], explication: "« There is a market »." },
      ],
    },
    prononciation: {
      son: "´",
      titre: "L'accent tonique (rappel)",
      explication:
        "Dans un mot long, une syllabe se dit plus fort : HOS-pi-tal, MAR-ket, STA-tion. Mettre l'accent au bon endroit te rend tout de suite plus clair·e.",
      technique: "Tape dans tes mains sur la syllabe forte : HOS (clap) -pi-tal, MAR (clap) -ket.",
      mots: [
        { en: "hospital", phon: "[HOS-pi-tal]" },
        { en: "market", phon: "[MAR-kit]" },
        { en: "station", phon: "[STÈÏ-cheun]" },
        { en: "city", phon: "[SI-ti]" },
      ],
      phrase: "The market is near the station.",
    },
    bilan: {
      resume: [
        "La ville : town, street, shop, school, park, station, market, hospital.",
        "Se repérer : « Where is…? » + « There is… ».",
        "Rappel is / are pour situer + l'accent tonique.",
      ],
      conseil: "Nomme en anglais trois lieux de ton quartier : « There is a … ».",
      motivation: "Tu peux demander ton chemin n'importe où. 🏙️",
    },
  },

  // ==================== JOUR 29 · 23 JUIN ====================
  {
    jour: 29,
    date: "23 juin",
    mois: "juin",
    titre: "Les courses & l'argent",
    emoji: "🛒",
    objectif: "Faire des achats et demander un prix.",
    intro:
      "On fait les courses ! 🛒 Les mots de l'argent et des achats, et une distinction utile : « How much? » (le prix) vs « How many? » (la quantité).",
    vocabulaire: {
      intro: "Acheter et payer.",
      mots: [
        { id: "j29-money", en: "money", phon: "[meu-ni]", fr: "argent", exemple: "I have money.", exempleFr: "J'ai de l'argent." },
        { id: "j29-buy", en: "to buy", phon: "[tou baï]", fr: "acheter", exemple: "I buy bread.", exempleFr: "J'achète du pain." },
        { id: "j29-price", en: "price", phon: "[praïss]", fr: "prix", exemple: "A good price.", exempleFr: "Un bon prix." },
        { id: "j29-euro", en: "euro", phon: "[you-ro]", fr: "euro", exemple: "Ten euros.", exempleFr: "Dix euros." },
        { id: "j29-howmuch", en: "how much", phon: "[haou meutch]", fr: "combien (prix)", exemple: "How much is it?", exempleFr: "C'est combien ?" },
        { id: "j29-cheap", en: "cheap", phon: "[tchiip]", fr: "pas cher", exemple: "It's cheap.", exempleFr: "C'est pas cher." },
        { id: "j29-expensive", en: "expensive", phon: "[iks-pèn-siv]", fr: "cher", exemple: "Too expensive!", exempleFr: "Trop cher !" },
        { id: "j29-shop", en: "to shop", phon: "[tou chop]", fr: "faire les courses", exemple: "I shop on Saturday.", exempleFr: "Je fais les courses le samedi." },
      ],
    },
    grammaire: {
      titre: "« How much? » vs « How many? »",
      regle:
        "« How much…? » demande un PRIX ou une quantité qu'on ne compte pas (How much is it? How much water?). « How many…? » demande un NOMBRE de choses qu'on compte (How many apples?).",
      analogie:
        "How much = combien ça coûte / combien (en bloc). How many = combien (on peut compter un par un). « How much is it? » = c'est combien ?",
      exemples: [
        { en: "How much is it?", fr: "C'est combien ?" },
        { en: "How many apples?", fr: "Combien de pommes ?" },
        { en: "How much money?", fr: "Combien d'argent ?" },
        { en: "How many euros?", fr: "Combien d'euros ?" },
      ],
      exercices: [
        { type: "trou", phrase: "How ___ is it? (quel prix)", r: "much", explication: "Le prix → How much." },
        { type: "trou", phrase: "How ___ apples? (combien, on compte)", r: "many", explication: "On compte → How many." },
        { type: "vraiFaux", affirmation: "« How much is it? » = c'est combien ?", r: true, explication: "Oui : on demande le prix." },
        { type: "traduction", sens: "fr-en", q: "C'est cher.", r: "it's expensive", accepte: ["it is expensive"], explication: "« It's expensive »." },
      ],
    },
    conjugaison: {
      titre: "« to buy » / « to want »",
      explication:
        "« to buy » = acheter : I buy, she buys. « to want » = vouloir : I want, she wants. Tous deux suivent le présent simple (+ -s à la 3e personne).",
      tableau: [
        { pronom: "I", forme: "buy / want", exemple: "I want bread. I buy fruit." },
        { pronom: "You", forme: "buy", exemple: "You buy a coat." },
        { pronom: "He / She", forme: "buys / wants", exemple: "She buys shoes. He wants water." },
        { pronom: "We", forme: "want", exemple: "We want apples." },
        { pronom: "They", forme: "buy", exemple: "They buy food." },
      ],
      exercices: [
        { type: "conjugaison", verbe: "to buy", q: "She ___ shoes.", r: "buys", explication: "3e personne → buys." },
        { type: "conjugaison", verbe: "to want", q: "I ___ water.", r: "want", explication: "Avec « I », pas de -s." },
        { type: "conjugaison", verbe: "to want", q: "He ___ bread.", r: "wants", explication: "3e personne → wants." },
      ],
    },
    dialogue: {
      titre: "Au marché",
      contexte: "Tu achètes des pommes au marché. Emma est la marchande.",
      lignes: [
        { role: "Toi", en: "Hello! How much are the apples?", fr: "Bonjour ! Combien coûtent les pommes ?" },
        { role: "Emma", en: "Two euros.", fr: "Deux euros." },
        { role: "Toi", en: "How many can I have?", fr: "Combien puis-je en avoir ?" },
        { role: "Emma", en: "Six for two euros!", fr: "Six pour deux euros !" },
        { role: "Toi", en: "Great, it's cheap!", fr: "Super, c'est pas cher !" },
      ],
      aToi: [
        { consigne: "Demande « C'est combien ? »", r: "how much is it", accepte: ["how much is it?"], explication: "« How much is it? »." },
        { consigne: "Dis « C'est pas cher »", r: "it's cheap", accepte: ["it is cheap"], explication: "« It's cheap »." },
      ],
    },
    prononciation: {
      son: "[tʃ]",
      titre: "Le son « tch »",
      explication:
        "« cheap », « much » contiennent le son « tch », comme dans « tchao ». Bien marqué, mais court.",
      technique: "Dis « tch » net (comme un éternuement retenu), puis le mot : « tch…iip ».",
      mots: [
        { en: "cheap", phon: "[tchiip]" },
        { en: "much", phon: "[meutch]" },
        { en: "lunch", phon: "[leuntch]" },
        { en: "watch", phon: "[wotch]" },
      ],
      phrase: "How much? It's cheap!",
    },
    bilan: {
      resume: [
        "Les achats : money, to buy, price, euro, cheap, expensive.",
        "« How much? » (prix) vs « How many? » (nombre).",
        "« to buy / to want » + le son « tch ».",
      ],
      conseil: "Demande un prix à voix haute : « How much is it? ».",
      motivation: "Tu peux faire tes courses en anglais. 🛒",
    },
  },

  // ==================== JOUR 30 · 24 JUIN ====================
  {
    jour: 30,
    date: "24 juin",
    mois: "juin",
    titre: "Les transports",
    emoji: "🚲",
    objectif: "Dire comment tu te déplaces.",
    intro:
      "En route ! 🚲 Les moyens de transport, et on réutilise le verbe « to go » : I go to school by bus, she goes by bike.",
    vocabulaire: {
      intro: "Pour se déplacer.",
      mots: [
        { id: "j30-car", en: "car", phon: "[kar]", fr: "voiture", exemple: "By car.", exempleFr: "En voiture." },
        { id: "j30-bus", en: "bus", phon: "[beuss]", fr: "bus", exemple: "I take the bus.", exempleFr: "Je prends le bus." },
        { id: "j30-bike", en: "bike", phon: "[baïk]", fr: "vélo", exemple: "A red bike.", exempleFr: "Un vélo rouge." },
        { id: "j30-train", en: "train", phon: "[trèïn]", fr: "train", exemple: "By train.", exempleFr: "En train." },
        { id: "j30-plane", en: "plane", phon: "[plèïn]", fr: "avion", exemple: "A big plane.", exempleFr: "Un grand avion." },
        { id: "j30-boat", en: "boat", phon: "[bôte]", fr: "bateau", exemple: "A small boat.", exempleFr: "Un petit bateau." },
        { id: "j30-go", en: "to go", phon: "[tou go]", fr: "aller", exemple: "I go to work.", exempleFr: "Je vais au travail." },
        { id: "j30-walk", en: "to walk", phon: "[tou wok]", fr: "marcher / aller à pied", exemple: "I walk to school.", exempleFr: "Je vais à l'école à pied." },
      ],
    },
    grammaire: {
      titre: "Se déplacer : « by » + transport",
      regle:
        "Pour dire comment on se déplace, on utilise « by » + le transport : by car, by bus, by train. Exception mignonne : à pied = « on foot » (pas « by foot »).",
      analogie:
        "« by » = en (en voiture, en bus). « I go by bus » = j'y vais en bus. Et « on foot » = à pied.",
      exemples: [
        { en: "by car", fr: "en voiture" },
        { en: "by bus", fr: "en bus" },
        { en: "by train", fr: "en train" },
        { en: "on foot", fr: "à pied" },
      ],
      exercices: [
        { type: "trou", phrase: "I go to school ___ bus. (en)", r: "by", explication: "« by bus » = en bus." },
        { type: "traduction", sens: "fr-en", q: "en voiture", r: "by car", explication: "« by car »." },
        { type: "vraiFaux", affirmation: "On dit « by foot ».", r: false, explication: "Non : à pied = « on foot »." },
        { type: "trou", phrase: "She goes ___ train. (en)", r: "by", explication: "« by train »." },
      ],
    },
    conjugaison: {
      titre: "« to go » (aller) au présent",
      explication:
        "« to go » = aller. I go, you go, he/she GOES (attention : -es à la 3e personne), we go, they go.",
      tableau: [
        { pronom: "I", forme: "go", exemple: "I go by bike." },
        { pronom: "You", forme: "go", exemple: "You go to school." },
        { pronom: "He / She", forme: "goes", exemple: "She goes by bus." },
        { pronom: "We", forme: "go", exemple: "We go by car." },
        { pronom: "They", forme: "go", exemple: "They go by train." },
      ],
      exercices: [
        { type: "conjugaison", verbe: "to go", q: "She ___ by bus.", r: "goes", explication: "3e personne → goes (-es)." },
        { type: "conjugaison", verbe: "to go", q: "I ___ to work by bike.", r: "go", explication: "Avec « I », pas de -s." },
        { type: "vraiFaux", affirmation: "« He go by car » est correct.", r: false, explication: "Non : « He GOES by car »." },
      ],
    },
    dialogue: {
      titre: "Tu y vas comment ?",
      contexte: "Emma te demande comment tu te déplaces.",
      lignes: [
        { role: "Emma", en: "How do you go to school?", fr: "Comment vas-tu à l'école ?" },
        { role: "Toi", en: "I go by bike.", fr: "J'y vais en vélo." },
        { role: "Emma", en: "And your brother?", fr: "Et ton frère ?" },
        { role: "Toi", en: "He goes by bus.", fr: "Il y va en bus." },
        { role: "Emma", en: "Nice and green!", fr: "Bien écolo !" },
      ],
      aToi: [
        { consigne: "Dis « J'y vais en vélo »", r: "i go by bike", accepte: [], explication: "« I go by bike »." },
        { consigne: "Dis « Il y va en bus »", r: "he goes by bus", accepte: [], explication: "« He goes by bus »." },
      ],
    },
    prononciation: {
      son: "[əʊ]",
      titre: "Le son « ô » (go, boat)",
      explication:
        "« go », « boat », « no » contiennent le son « ô » qui glisse légèrement vers « ou » : « gôou », « bôout ». Plus rond qu'un « o » français.",
      technique: "Dis « ô » puis laisse-le filer un peu vers « ou » : « ô-ou ».",
      mots: [
        { en: "go", phon: "[gô]" },
        { en: "boat", phon: "[bôte]" },
        { en: "no", phon: "[nô]" },
        { en: "don't", phon: "[dôneut]" },
      ],
      phrase: "I go by boat, you go by car.",
    },
    bilan: {
      resume: [
        "Les transports : car, bus, bike, train, plane, boat + walk.",
        "Se déplacer : « by » + transport (mais « on foot »).",
        "« to go » : he/she/it GOES + le son « ô ».",
      ],
      conseil: "Dis comment tu vas à l'école ou au travail : « I go by … ».",
      motivation: "Tu peux raconter tous tes trajets en anglais. 🚲",
    },
  },

  // ==================== JOUR 31 · 25 JUIN ====================
  {
    jour: 31,
    date: "25 juin",
    mois: "juin",
    titre: "Famille élargie & amis",
    emoji: "👪",
    objectif: "Parler de toute ta famille et de tes amis.",
    intro:
      "On agrandit la famille ! 👪 Grands-parents, oncles, cousins… et on réutilise les possessifs et le « 's » : my aunt's name, her cousin.",
    vocabulaire: {
      intro: "Toute la famille, et au-delà.",
      mots: [
        { id: "j31-grandma", en: "grandmother", phon: "[grand-meu-zeur]", fr: "grand-mère", exemple: "My grandmother.", exempleFr: "Ma grand-mère." },
        { id: "j31-grandpa", en: "grandfather", phon: "[grand-fa-zeur]", fr: "grand-père", exemple: "My grandfather.", exempleFr: "Mon grand-père." },
        { id: "j31-aunt", en: "aunt", phon: "[ânte]", fr: "tante", exemple: "My aunt is kind.", exempleFr: "Ma tante est gentille." },
        { id: "j31-uncle", en: "uncle", phon: "[eun-keul]", fr: "oncle", exemple: "My uncle's car.", exempleFr: "La voiture de mon oncle." },
        { id: "j31-cousin", en: "cousin", phon: "[keu-zeun]", fr: "cousin·e", exemple: "Her cousin.", exempleFr: "Son cousin." },
        { id: "j31-baby", en: "baby", phon: "[bèï-bi]", fr: "bébé", exemple: "A small baby.", exempleFr: "Un petit bébé." },
        { id: "j31-friend", en: "friend", phon: "[frènd]", fr: "ami·e", exemple: "My best friend.", exempleFr: "Mon meilleur ami." },
        { id: "j31-neighbour", en: "neighbour", phon: "[nèï-beur]", fr: "voisin·e", exemple: "A nice neighbour.", exempleFr: "Un voisin sympa." },
      ],
    },
    grammaire: {
      titre: "Rappel : les possessifs + le « 's »",
      regle:
        "On réutilise my, your, his, her, our, their + le « 's » de possession : my aunt's name = le nom de ma tante ; her cousin's bike = le vélo de sa cousine.",
      analogie:
        "« le X de Y » devient « Y's X » : la voiture de mon oncle = my uncle's car. Le 's colle au possesseur.",
      exemples: [
        { en: "my grandmother", fr: "ma grand-mère" },
        { en: "her cousin", fr: "son cousin (à elle)" },
        { en: "my uncle's car", fr: "la voiture de mon oncle" },
        { en: "their baby", fr: "leur bébé" },
      ],
      exercices: [
        { type: "trou", phrase: "___ aunt is kind. (ma)", r: "My", accepte: ["my"], explication: "« My aunt »." },
        { type: "vraiFaux", affirmation: "« my uncle's car » = la voiture de mon oncle.", r: true, explication: "Oui : le 's exprime la possession." },
        { type: "traduction", sens: "fr-en", q: "mon cousin", r: "my cousin", explication: "« my cousin »." },
        { type: "trou", phrase: "It is ___ baby. (leur)", r: "their", explication: "« their » = leur." },
      ],
    },
    conjugaison: {
      titre: "Rappel : « to have » et « to be » pour la famille",
      explication:
        "On décrit la famille avec have et be : I have an aunt. She has two cousins. My grandfather is kind. Rappel : he/she/it → has / is.",
      tableau: [
        { pronom: "I", forme: "have", exemple: "I have a baby cousin." },
        { pronom: "She", forme: "has", exemple: "She has two uncles." },
        { pronom: "My aunt", forme: "is", exemple: "My aunt is funny." },
        { pronom: "We", forme: "have", exemple: "We have nice neighbours." },
        { pronom: "They", forme: "are", exemple: "They are my cousins." },
      ],
      exercices: [
        { type: "conjugaison", verbe: "to have", q: "She ___ two cousins.", r: "has", explication: "Avec « she » → has." },
        { type: "conjugaison", verbe: "to be", q: "My uncle ___ kind.", r: "is", explication: "Un seul → is." },
        { type: "conjugaison", verbe: "to be", q: "They ___ my cousins.", r: "are", explication: "Pluriel → are." },
      ],
    },
    dialogue: {
      titre: "Toute la famille",
      contexte: "Emma regarde une photo de famille avec toi.",
      lignes: [
        { role: "Emma", en: "Who is this?", fr: "Qui est-ce ?" },
        { role: "Toi", en: "She is my grandmother.", fr: "C'est ma grand-mère." },
        { role: "Emma", en: "And the baby?", fr: "Et le bébé ?" },
        { role: "Toi", en: "He is my uncle's baby.", fr: "C'est le bébé de mon oncle." },
        { role: "Emma", en: "What a lovely family!", fr: "Quelle belle famille !" },
      ],
      aToi: [
        { consigne: "Dis « C'est ma grand-mère »", r: "she is my grandmother", accepte: ["she's my grandmother"], explication: "« She is my grandmother »." },
        { consigne: "Dis « le bébé de mon oncle »", r: "my uncle's baby", accepte: ["my uncles baby"], explication: "« my uncle's baby »." },
      ],
    },
    prononciation: {
      son: "[ð]",
      titre: "Le TH doux (rappel)",
      explication:
        "Dans « mother », « brother », « grandmother », le « th » est doux et SONORE : la langue entre les dents, mais la gorge vibre (« mazeur »). Différent du « th » soufflé de « thank ».",
      technique: "Mets la langue entre les dents et fais vibrer la gorge : « zzz…the », « meu-zeur ».",
      mots: [
        { en: "mother", phon: "[meu-zeur]" },
        { en: "brother", phon: "[breu-zeur]" },
        { en: "grandmother", phon: "[grand-meu-zeur]" },
        { en: "the", phon: "[zeu]" },
      ],
      phrase: "My mother and my grandmother.",
    },
    bilan: {
      resume: [
        "La famille élargie : grandmother, grandfather, aunt, uncle, cousin, baby, neighbour.",
        "Rappel possessifs + 's (my uncle's car).",
        "Le TH doux et sonore (mother, brother).",
      ],
      conseil: "Présente trois membres de ta vraie famille : « This is my … ».",
      motivation: "Toute ta tribu parle anglais maintenant. 👪",
    },
  },

  // ==================== JOUR 32 · 26 JUIN ====================
  {
    jour: 32,
    date: "26 juin",
    mois: "juin",
    titre: "Décrire quelqu'un",
    emoji: "🙂",
    objectif: "Décrire le caractère et l'allure de quelqu'un.",
    intro:
      "On décrit les gens ! 🙂 Des adjectifs sympas, et on réutilise « to be » + « and » pour enchaîner : She is tall and kind.",
    vocabulaire: {
      intro: "Des adjectifs pour décrire les gens.",
      mots: [
        { id: "j32-tall", en: "tall", phon: "[tol]", fr: "grand (de taille)", exemple: "He is tall.", exempleFr: "Il est grand." },
        { id: "j32-short", en: "short", phon: "[chort]", fr: "petit / court", exemple: "She is short.", exempleFr: "Elle est petite." },
        { id: "j32-kind", en: "kind", phon: "[kaïnd]", fr: "gentil", exemple: "A kind man.", exempleFr: "Un homme gentil." },
        { id: "j32-nice", en: "nice", phon: "[naïss]", fr: "sympa", exemple: "She is nice.", exempleFr: "Elle est sympa." },
        { id: "j32-happy", en: "happy", phon: "[ha-pi]", fr: "content / heureux", exemple: "I am happy.", exempleFr: "Je suis contente." },
        { id: "j32-funny", en: "funny", phon: "[feu-ni]", fr: "drôle", exemple: "He is funny.", exempleFr: "Il est drôle." },
        { id: "j32-young", en: "young", phon: "[yeung]", fr: "jeune", exemple: "A young girl.", exempleFr: "Une jeune fille." },
        { id: "j32-old", en: "old", phon: "[ôld]", fr: "vieux / âgé", exemple: "An old man.", exempleFr: "Un homme âgé." },
      ],
    },
    grammaire: {
      titre: "Rappel : « to be » + adjectifs + « and »",
      regle:
        "Pour décrire, on utilise to be + adjectif(s) : She is tall. On enchaîne avec « and » : She is tall and kind. L'adjectif ne s'accorde jamais.",
      analogie:
        "Comme au jour des couleurs : to be + adjectif. « and » (et) permet d'en mettre plusieurs : « kind and funny ».",
      exemples: [
        { en: "He is tall.", fr: "Il est grand." },
        { en: "She is nice and funny.", fr: "Elle est sympa et drôle." },
        { en: "They are young.", fr: "Ils sont jeunes." },
        { en: "My aunt is kind.", fr: "Ma tante est gentille." },
      ],
      exercices: [
        { type: "conjugaison", verbe: "to be", q: "She ___ tall.", r: "is", explication: "Un seul → is." },
        { type: "trou", phrase: "He is kind ___ funny. (et)", r: "and", explication: "« and » = et." },
        { type: "vraiFaux", affirmation: "Au pluriel, « kind » devient « kinds ».", r: false, explication: "Non : l'adjectif ne s'accorde jamais." },
        { type: "traduction", sens: "fr-en", q: "Elle est sympa.", r: "she is nice", accepte: ["she's nice"], explication: "« She is nice »." },
      ],
    },
    conjugaison: {
      titre: "Rappel : « to be » pour décrire",
      explication:
        "to be relie la personne à l'adjectif : I am, you are, he/she is, we are, they are. I am happy. They are funny.",
      tableau: [
        { pronom: "I", forme: "am", exemple: "I am happy." },
        { pronom: "You", forme: "are", exemple: "You are kind." },
        { pronom: "He / She", forme: "is", exemple: "She is tall." },
        { pronom: "We", forme: "are", exemple: "We are young." },
        { pronom: "They", forme: "are", exemple: "They are funny." },
      ],
      exercices: [
        { type: "conjugaison", verbe: "to be", q: "They ___ funny.", r: "are", explication: "Pluriel → are." },
        { type: "conjugaison", verbe: "to be", q: "I ___ happy.", r: "am", explication: "Avec « I » → am." },
        { type: "conjugaison", verbe: "to be", q: "He ___ tall and kind.", r: "is", explication: "Un seul → is." },
      ],
    },
    dialogue: {
      titre: "Décris ton amie",
      contexte: "Emma te demande de décrire ta meilleure amie.",
      lignes: [
        { role: "Emma", en: "Tell me about your friend.", fr: "Parle-moi de ton amie." },
        { role: "Toi", en: "She is tall and kind.", fr: "Elle est grande et gentille." },
        { role: "Emma", en: "Is she funny?", fr: "Est-elle drôle ?" },
        { role: "Toi", en: "Yes, she is very funny!", fr: "Oui, elle est très drôle !" },
        { role: "Emma", en: "She sounds lovely!", fr: "Elle a l'air adorable !" },
      ],
      aToi: [
        { consigne: "Dis « Elle est grande et gentille »", r: "she is tall and kind", accepte: ["she's tall and kind"], explication: "« She is tall and kind »." },
        { consigne: "Dis « Il est drôle »", r: "he is funny", accepte: ["he's funny"], explication: "« He is funny »." },
      ],
    },
    prononciation: {
      son: "[h]",
      titre: "Le H soufflé (rappel)",
      explication:
        "Le « h » en début de mot se prononce, c'est un petit souffle : happy, he, hand, hair. En français on ne l'entend pas, en anglais si !",
      technique: "Souffle doucement sur ta main juste avant le mot : « h…appy », « h…e ».",
      mots: [
        { en: "happy", phon: "[ha-pi]" },
        { en: "he", phon: "[hii]" },
        { en: "hand", phon: "[hand]" },
        { en: "hair", phon: "[hèr]" },
      ],
      phrase: "He is happy and kind.",
    },
    bilan: {
      resume: [
        "Des adjectifs : tall, short, kind, nice, happy, funny, young, old.",
        "Décrire avec « to be » + adjectif(s), reliés par « and ».",
        "Le H soufflé (rappel).",
      ],
      conseil: "Décris deux personnes que tu aimes : « … is … and … ».",
      motivation: "Tu peux décrire le caractère des gens. 🙂",
    },
  },

  // ==================== JOUR 33 · 27 JUIN ====================
  {
    jour: 33,
    date: "27 juin",
    mois: "juin",
    titre: "Une journée type",
    emoji: "📋",
    objectif: "Raconter ta journée du matin au soir.",
    intro:
      "Raconte ta journée ! 📋 Les verbes de la routine, et on remet en pratique le présent simple : I wake up, I eat, I go to school…",
    vocabulaire: {
      intro: "Les gestes d'une journée.",
      mots: [
        { id: "j33-wakeup", en: "to wake up", phon: "[tou wéïk eup]", fr: "se réveiller", exemple: "I wake up at seven.", exempleFr: "Je me réveille à sept heures." },
        { id: "j33-getup", en: "to get up", phon: "[tou guèt eup]", fr: "se lever", exemple: "I get up early.", exempleFr: "Je me lève tôt." },
        { id: "j33-eat", en: "to eat", phon: "[tou iit]", fr: "manger", exemple: "I eat breakfast.", exempleFr: "Je prends le petit-déjeuner." },
        { id: "j33-go", en: "to go", phon: "[tou go]", fr: "aller", exemple: "I go to school.", exempleFr: "Je vais à l'école." },
        { id: "j33-work", en: "to work", phon: "[tou weurk]", fr: "travailler", exemple: "I work all day.", exempleFr: "Je travaille toute la journée." },
        { id: "j33-play", en: "to play", phon: "[tou plèï]", fr: "jouer", exemple: "I play after school.", exempleFr: "Je joue après l'école." },
        { id: "j33-sleep", en: "to sleep", phon: "[tou sliip]", fr: "dormir", exemple: "I sleep at night.", exempleFr: "Je dors la nuit." },
        { id: "j33-home", en: "to come home", phon: "[tou keum hôme]", fr: "rentrer (à la maison)", exemple: "I come home late.", exempleFr: "Je rentre tard." },
      ],
    },
    grammaire: {
      titre: "Rappel : le présent simple + moments",
      regle:
        "Pour une routine, présent simple (he/she/it + -s) avec des repères de temps : in the morning, every day, at seven o'clock. Ex : She gets up at seven every day.",
      analogie:
        "C'est le présent « de tous les jours », vu au jour du présent simple. On ajoute juste QUAND : in the morning, every day.",
      exemples: [
        { en: "I wake up in the morning.", fr: "Je me réveille le matin." },
        { en: "She goes to school every day.", fr: "Elle va à l'école tous les jours." },
        { en: "We eat at seven.", fr: "On mange à sept heures." },
        { en: "He sleeps at night.", fr: "Il dort la nuit." },
      ],
      exercices: [
        { type: "trou", phrase: "She ___ up at seven. (get, 3e pers.)", r: "gets", explication: "3e personne → gets." },
        { type: "trou", phrase: "I wake up ___ the morning. (le → dans)", r: "in", explication: "« in the morning »." },
        { type: "vraiFaux", affirmation: "« He go to school » est correct.", r: false, explication: "Non : « He goES to school »." },
        { type: "traduction", sens: "fr-en", q: "Je dors la nuit.", r: "i sleep at night", accepte: [], explication: "« I sleep at night »." },
      ],
    },
    conjugaison: {
      titre: "Présent simple : la routine (+ -s)",
      explication:
        "I / you / we / they → verbe simple. He / she / it → verbe + -s. get up → gets up, go → goes, sleep → sleeps.",
      tableau: [
        { pronom: "I", forme: "wake up", exemple: "I wake up early." },
        { pronom: "You", forme: "eat", exemple: "You eat breakfast." },
        { pronom: "He / She", forme: "goes", exemple: "She goes to work." },
        { pronom: "He / She", forme: "sleeps", exemple: "He sleeps a lot." },
        { pronom: "They", forme: "play", exemple: "They play outside." },
      ],
      exercices: [
        { type: "conjugaison", verbe: "to go", q: "She ___ to school.", r: "goes", explication: "3e personne → goes." },
        { type: "conjugaison", verbe: "to eat", q: "I ___ breakfast.", r: "eat", explication: "Avec « I », pas de -s." },
        { type: "conjugaison", verbe: "to sleep", q: "He ___ at night.", r: "sleeps", explication: "3e personne → sleeps." },
      ],
    },
    dialogue: {
      titre: "Ta journée",
      contexte: "Emma s'intéresse à ton emploi du temps.",
      lignes: [
        { role: "Emma", en: "What time do you wake up?", fr: "À quelle heure te réveilles-tu ?" },
        { role: "Toi", en: "I wake up at seven.", fr: "Je me réveille à sept heures." },
        { role: "Emma", en: "And then?", fr: "Et ensuite ?" },
        { role: "Toi", en: "I eat and I go to school.", fr: "Je mange et je vais à l'école." },
        { role: "Emma", en: "Busy day!", fr: "Journée bien remplie !" },
      ],
      aToi: [
        { consigne: "Dis « Je me réveille à sept heures »", r: "i wake up at seven", accepte: ["i wake up at seven o'clock"], explication: "« I wake up at seven »." },
        { consigne: "Dis « Je vais à l'école »", r: "i go to school", accepte: [], explication: "« I go to school »." },
      ],
    },
    prononciation: {
      son: "[s] / [z]",
      titre: "Le -s des verbes (rappel)",
      explication:
        "Le -s de la 3e personne se dit « s » (gets, sleeps) ou « z » (goes, plays). Après un son doux → « z ».",
      technique: "Même réflexe que pour le pluriel : « gets » (s), « goes » (z). Sens la vibration.",
      mots: [
        { en: "gets", phon: "[guèts]" },
        { en: "sleeps", phon: "[sliips]" },
        { en: "goes", phon: "[gôouz]" },
        { en: "plays", phon: "[plèïz]" },
      ],
      phrase: "She gets up, goes to work, and plays.",
    },
    bilan: {
      resume: [
        "La routine : wake up, get up, eat, go, work, play, sleep, come home.",
        "Présent simple + repères (in the morning, every day, at seven).",
        "Le -s des verbes à la 3e personne (s / z).",
      ],
      conseil: "Raconte ta vraie journée en trois phrases : « I … , then I … , then I … ».",
      motivation: "Tu peux raconter toute ta journée en anglais. 📋",
    },
  },

  // ==================== JOUR 34 · 28 JUIN ====================
  {
    jour: 34,
    date: "28 juin",
    mois: "juin",
    titre: "Révision pratique ③",
    emoji: "🔁",
    objectif: "Tout mélanger : vocabulaire et structures de juin, sans nouvelle règle.",
    intro:
      "Troisième et dernière pause révision avant la finale ! 🔁 On pioche dans tout juin : nourriture, maison, météo, corps, loisirs, heure, ville… Un grand mélange pour ancrer.",
    vocabulaire: {
      intro: "Un best-of de tout le mois.",
      mots: [
        { id: "j34-apple", en: "apple", phon: "[a-peul]", fr: "pomme", exemple: "An apple.", exempleFr: "Une pomme." },
        { id: "j34-house", en: "house", phon: "[haouss]", fr: "maison", exemple: "A big house.", exempleFr: "Une grande maison." },
        { id: "j34-sunny", en: "sunny", phon: "[sa-ni]", fr: "ensoleillé", exemple: "It's sunny.", exempleFr: "Il fait soleil." },
        { id: "j34-hand", en: "hand", phon: "[hand]", fr: "main", exemple: "My hand.", exempleFr: "Ma main." },
        { id: "j34-dog", en: "dog", phon: "[dogue]", fr: "chien", exemple: "The dog runs.", exempleFr: "Le chien court." },
        { id: "j34-read", en: "to read", phon: "[tou riid]", fr: "lire", exemple: "I like to read.", exempleFr: "J'aime lire." },
        { id: "j34-shop", en: "shop", phon: "[chop]", fr: "magasin", exemple: "A nice shop.", exempleFr: "Un joli magasin." },
        { id: "j34-bus", en: "bus", phon: "[beuss]", fr: "bus", exemple: "By bus.", exempleFr: "En bus." },
      ],
    },
    grammaire: {
      titre: "Récap : toutes les structures de juin",
      regle:
        "Tout ensemble : a / an, le pluriel, l'adjectif avant le nom, There is / There are, How much / How many, by + transport. On les mélange.",
      analogie:
        "Pas de nouveauté : juste un grand bol de tout ce que tu sais. Si tu réponds sans réfléchir, c'est gagné.",
      exemples: [
        { en: "There is a dog.", fr: "Il y a un chien." },
        { en: "How much is it?", fr: "C'est combien ?" },
        { en: "a red apple", fr: "une pomme rouge" },
        { en: "I go by bus.", fr: "J'y vais en bus." },
      ],
      exercices: [
        { type: "trou", phrase: "There ___ two dogs. (il y a, pluriel)", r: "are", explication: "Pluriel → There are." },
        { type: "trou", phrase: "How ___ is it? (quel prix)", r: "much", explication: "Le prix → How much." },
        { type: "traduction", sens: "fr-en", q: "une pomme rouge", r: "a red apple", explication: "Adjectif avant : a red apple." },
        { type: "trou", phrase: "I go ___ bus. (en)", r: "by", explication: "« by bus »." },
      ],
    },
    conjugaison: {
      titre: "Récap : be / have / présent / it's",
      explication:
        "On mélange tes verbes-clés : to be (am/is/are), to have (have/has), présent simple (+ -s), et « it's » pour la météo et l'heure.",
      tableau: [
        { pronom: "I", forme: "am", exemple: "I am happy." },
        { pronom: "She", forme: "has", exemple: "She has a dog." },
        { pronom: "He", forme: "goes", exemple: "He goes by bike." },
        { pronom: "It", forme: "is", exemple: "It's sunny." },
        { pronom: "They", forme: "are", exemple: "They are nice." },
      ],
      exercices: [
        { type: "conjugaison", verbe: "to have", q: "She ___ a cat.", r: "has", explication: "Avec « she » → has." },
        { type: "conjugaison", verbe: "to go", q: "He ___ by bus.", r: "goes", explication: "3e personne → goes." },
        { type: "trou", phrase: "___ sunny today. (il fait, court)", r: "It's", accepte: ["its", "it is"], explication: "« It's sunny »." },
        { type: "conjugaison", verbe: "to be", q: "They ___ nice.", r: "are", explication: "Pluriel → are." },
      ],
    },
    dialogue: {
      titre: "On parle de tout",
      contexte: "Conversation libre où tout y passe : météo, animaux, transport.",
      lignes: [
        { role: "Emma", en: "How is the weather?", fr: "Quel temps fait-il ?" },
        { role: "Toi", en: "It's sunny and warm.", fr: "Il fait soleil et doux." },
        { role: "Emma", en: "Do you have a pet?", fr: "As-tu un animal ?" },
        { role: "Toi", en: "Yes, I have a dog.", fr: "Oui, j'ai un chien." },
        { role: "Emma", en: "How do you go to the park?", fr: "Comment vas-tu au parc ?" },
        { role: "Toi", en: "I go by bike!", fr: "J'y vais en vélo !" },
      ],
      aToi: [
        { consigne: "Dis « Il fait soleil et doux »", r: "it's sunny and warm", accepte: ["it is sunny and warm"], explication: "« It's sunny and warm »." },
        { consigne: "Dis « J'ai un chien »", r: "i have a dog", accepte: [], explication: "« I have a dog »." },
      ],
    },
    prononciation: {
      son: "🔁",
      titre: "Récap des sons de juin",
      explication:
        "On reprend les sons travaillés ce mois-ci : « sh » (shop), « -ing » (reading), « tch » (cheap), « ou » long (room). Une révision express.",
      technique: "Dis chaque mot lentement en visant le bon son, puis enchaîne la phrase.",
      mots: [
        { en: "shop", phon: "[chop]" },
        { en: "reading", phon: "[rii-dingue]" },
        { en: "cheap", phon: "[tchiip]" },
        { en: "room", phon: "[roum]" },
      ],
      phrase: "The cheap shop room is for reading.",
    },
    bilan: {
      resume: [
        "Un grand mélange de tout juin : nourriture, maison, météo, animaux, ville, transports…",
        "Toutes les structures revues : there is/are, how much/many, by, it's.",
        "Tu réponds presque sans réfléchir : c'est ancré !",
      ],
      conseil: "Choisis trois thèmes de juin et fais une phrase sur chacun.",
      motivation: "Dernière ligne droite avant la grande finale de juin. Tu assures ! 🔁",
    },
  },

  // ==================== JOUR 35 · 29 JUIN ====================
  {
    jour: 35,
    date: "29 juin",
    mois: "juin",
    titre: "La grande conversation",
    emoji: "💬",
    objectif: "Tenir une conversation complète et naturelle.",
    intro:
      "Le grand oral en douceur ! 💬 Aujourd'hui, on relie les phrases avec de petits mots (and, but, also, because) pour parler de façon naturelle, comme dans une vraie discussion.",
    vocabulaire: {
      intro: "Les petits mots qui relient tes idées.",
      mots: [
        { id: "j35-and", en: "and", phon: "[and]", fr: "et", exemple: "Tea and milk.", exempleFr: "Du thé et du lait." },
        { id: "j35-but", en: "but", phon: "[beut]", fr: "mais", exemple: "I like tea, but not coffee.", exempleFr: "J'aime le thé, mais pas le café." },
        { id: "j35-also", en: "also", phon: "[ol-so]", fr: "aussi", exemple: "I also like music.", exempleFr: "J'aime aussi la musique." },
        { id: "j35-because", en: "because", phon: "[bi-kôze]", fr: "parce que", exemple: "I'm happy because it's sunny.", exempleFr: "Je suis contente parce qu'il fait soleil." },
        { id: "j35-very", en: "very", phon: "[vé-ri]", fr: "très", exemple: "Very nice!", exempleFr: "Très sympa !" },
        { id: "j35-really", en: "really", phon: "[ri-li]", fr: "vraiment", exemple: "I really like it.", exempleFr: "J'aime vraiment ça." },
        { id: "j35-so", en: "so", phon: "[so]", fr: "donc / alors", exemple: "It's late, so I go home.", exempleFr: "Il est tard, donc je rentre." },
        { id: "j35-too", en: "too", phon: "[tou]", fr: "aussi (en fin de phrase)", exemple: "Me too!", exempleFr: "Moi aussi !" },
      ],
    },
    grammaire: {
      titre: "Relier ses phrases : and, but, because",
      regle:
        "Pour parler naturellement, on relie ses idées : « and » (et), « but » (mais), « because » (parce que), « so » (donc). Ex : I like tea, but I don't like coffee, because it's strong.",
      analogie:
        "Exactement comme en français : et, mais, parce que, donc. Ce sont eux qui transforment des petites phrases en vraie conversation.",
      exemples: [
        { en: "I like tea and coffee.", fr: "J'aime le thé et le café." },
        { en: "I'm tired, but happy.", fr: "Je suis fatiguée, mais contente." },
        { en: "I stay because it's rainy.", fr: "Je reste parce qu'il pleut." },
        { en: "It's late, so I go.", fr: "Il est tard, donc j'y vais." },
      ],
      exercices: [
        { type: "trou", phrase: "I like tea ___ coffee. (et)", r: "and", explication: "« and » = et." },
        { type: "trou", phrase: "I'm tired, ___ happy. (mais)", r: "but", explication: "« but » = mais." },
        { type: "trou", phrase: "I stay ___ it's rainy. (parce que)", r: "because", explication: "« because » = parce que." },
        { type: "traduction", sens: "fr-en", q: "Moi aussi !", r: "me too", accepte: ["me too!"], explication: "« Me too! »." },
      ],
    },
    conjugaison: {
      titre: "Récap : tout au présent, relié",
      explication:
        "On combine tout : to be, to have, présent simple, le tout relié par and / but / because. C'est ça, parler couramment au présent.",
      tableau: [
        { pronom: "I", forme: "am … and …", exemple: "I am French and I live in Paris." },
        { pronom: "She", forme: "has … but …", exemple: "She has a dog but no cat." },
        { pronom: "We", forme: "like … because …", exemple: "We like summer because it's warm." },
        { pronom: "They", forme: "are … so …", exemple: "They are tired, so they sleep." },
      ],
      exercices: [
        { type: "trou", phrase: "I am French ___ I live in Paris. (et)", r: "and", explication: "« and » relie les deux." },
        { type: "trou", phrase: "She has a dog ___ no cat. (mais)", r: "but", explication: "« but » = mais." },
        { type: "trou", phrase: "We like summer ___ it's warm. (parce que)", r: "because", explication: "« because » = parce que." },
      ],
    },
    dialogue: {
      titre: "Une vraie discussion",
      contexte: "Tu discutes librement avec Emma, en reliant tes idées.",
      lignes: [
        { role: "Emma", en: "Hi! How are you today?", fr: "Salut ! Comment vas-tu aujourd'hui ?" },
        { role: "Toi", en: "I'm great, because it's sunny!", fr: "Super, parce qu'il fait soleil !" },
        { role: "Emma", en: "Do you like summer?", fr: "Aimes-tu l'été ?" },
        { role: "Toi", en: "Yes, I really like it, and I love the sea.", fr: "Oui, j'aime vraiment ça, et j'adore la mer." },
        { role: "Emma", en: "Me too! Let's go to the beach.", fr: "Moi aussi ! Allons à la plage." },
        { role: "Toi", en: "Great idea! I go by bike.", fr: "Bonne idée ! J'y vais en vélo." },
      ],
      aToi: [
        { consigne: "Dis « Super, parce qu'il fait soleil ! »", r: "i'm great, because it's sunny", accepte: ["i'm great because it's sunny", "i am great because it is sunny"], explication: "« I'm great, because it's sunny! »." },
        { consigne: "Dis « J'aime vraiment ça »", r: "i really like it", accepte: [], explication: "« I really like it »." },
      ],
    },
    prononciation: {
      son: "↗↘",
      titre: "L'intonation (rappel)",
      explication:
        "Pour les questions oui/non, la voix MONTE à la fin (Do you like it? ↗). Pour les phrases normales et les questions en What/Where, elle DESCEND (I like it. ↘).",
      technique: "Dis « Do you like it? » en montant, puis « I like it. » en descendant. Exagère, c'est plus efficace.",
      mots: [
        { en: "Really? ↗", phon: "[ri-li]" },
        { en: "Me too! ↘", phon: "[mi tou]" },
        { en: "And you? ↗", phon: "[and you]" },
        { en: "I like it. ↘", phon: "[aï laïk it]" },
      ],
      phrase: "I really like it, and you?",
    },
    bilan: {
      resume: [
        "Les connecteurs : and, but, also, because, so, very, really, too.",
        "Relier ses idées pour parler naturellement.",
        "L'intonation : qui monte (questions oui/non), qui descend (phrases).",
      ],
      conseil: "Fais une phrase longue reliée : « I … and … , but … , because … ».",
      motivation: "Tu ne fais plus des mots : tu fais de vraies phrases vivantes. Bravo ! 💬",
    },
  },

  // ==================== JOUR 36 · 30 JUIN ====================
  {
    jour: 36,
    date: "30 juin",
    mois: "juin",
    titre: "Grande révision finale",
    emoji: "🏆",
    objectif: "Rassembler tout le mois de juin et tenir une conversation complète.",
    intro:
      "Dernier jour de juin ! 🏆 On rassemble TOUT ce que tu as appris ce mois-ci, et tu tiens une vraie conversation, du « bonjour » au « au revoir ». Tu vas être fière de toi.",
    vocabulaire: {
      intro: "Les mots-clés de tout le mois, à garder pour toujours.",
      mots: [
        { id: "j36-hello", en: "hello", phon: "[hèl-lo]", fr: "bonjour / salut", exemple: "Hello, my friend!", exempleFr: "Bonjour, mon amie !" },
        { id: "j36-please", en: "please", phon: "[pliiz]", fr: "s'il te plaît", exemple: "A tea, please.", exempleFr: "Un thé, s'il te plaît." },
        { id: "j36-family", en: "family", phon: "[fa-mi-li]", fr: "famille", exemple: "I love my family.", exempleFr: "J'aime ma famille." },
        { id: "j36-house", en: "house", phon: "[haouss]", fr: "maison", exemple: "A nice house.", exempleFr: "Une jolie maison." },
        { id: "j36-friend", en: "friend", phon: "[frènd]", fr: "ami·e", exemple: "My best friend.", exempleFr: "Ma meilleure amie." },
        { id: "j36-happy", en: "happy", phon: "[ha-pi]", fr: "content·e", exemple: "I am so happy!", exempleFr: "Je suis si contente !" },
        { id: "j36-goodbye", en: "goodbye", phon: "[goud-baï]", fr: "au revoir", exemple: "Goodbye, see you!", exempleFr: "Au revoir, à bientôt !" },
        { id: "j36-thankyou", en: "thank you", phon: "[thènk you]", fr: "merci", exemple: "Thank you for everything!", exempleFr: "Merci pour tout !" },
      ],
    },
    grammaire: {
      titre: "Récap : toutes les règles de juin",
      regle:
        "L'essentiel du mois : (1) sujet obligatoire ; (2) a/an + pluriel ; (3) adjectif avant le nom ; (4) présent simple he/she/it + -s ; (5) questions do/does ; (6) négation don't/doesn't ; (7) there is/are ; (8) how much/many.",
      analogie:
        "Huit réflexes qui font la quasi-totalité de l'anglais de base. Si tu les as, tu te débrouilles dans presque toutes les situations.",
      exemples: [
        { en: "She likes coffee.", fr: "Elle aime le café. (présent + s)" },
        { en: "Do you live here?", fr: "Habites-tu ici ? (question)" },
        { en: "There is a park.", fr: "Il y a un parc. (there is)" },
        { en: "How much is it?", fr: "C'est combien ? (how much)" },
      ],
      exercices: [
        { type: "trou", phrase: "She ___ tea. (like, présent)", r: "likes", explication: "3e personne → likes." },
        { type: "trou", phrase: "___ you like music? (est-ce que)", r: "Do", accepte: ["do"], explication: "Avec « you » → Do." },
        { type: "trou", phrase: "There ___ two rooms. (il y a, pluriel)", r: "are", explication: "Pluriel → There are." },
        { type: "trou", phrase: "How ___ is it? (quel prix)", r: "much", explication: "Le prix → How much." },
      ],
    },
    conjugaison: {
      titre: "Récap : tous tes verbes-clés",
      explication:
        "Les piliers de juin : to be (am/is/are), to have (have/has), présent simple (+ -s), to go (goes), can, would like, it's.",
      tableau: [
        { pronom: "I", forme: "am / have", exemple: "I am happy. I have a friend." },
        { pronom: "She", forme: "is / has / likes", exemple: "She is kind. She has a dog. She likes tea." },
        { pronom: "He", forme: "goes", exemple: "He goes by bus." },
        { pronom: "It", forme: "is", exemple: "It's sunny." },
        { pronom: "They", forme: "are / live", exemple: "They are friends. They live here." },
      ],
      exercices: [
        { type: "conjugaison", verbe: "to be", q: "I ___ happy.", r: "am", explication: "Avec « I » → am." },
        { type: "conjugaison", verbe: "to have", q: "She ___ a dog.", r: "has", explication: "Avec « she » → has." },
        { type: "conjugaison", verbe: "to go", q: "He ___ by bus.", r: "goes", explication: "3e personne → goes." },
        { type: "conjugaison", verbe: "to like", q: "She ___ tea.", r: "likes", explication: "Présent, 3e personne → likes." },
      ],
    },
    dialogue: {
      titre: "La conversation complète",
      contexte: "Tu mets tout en pratique : tu salues, te présentes, parles de toi et de ta journée, puis tu prends congé.",
      lignes: [
        { role: "Emma", en: "Hello! What is your name?", fr: "Bonjour ! Comment t'appelles-tu ?" },
        { role: "Toi", en: "Hello! My name is Lea. I am from France.", fr: "Bonjour ! Je m'appelle Lea. Je viens de France." },
        { role: "Emma", en: "How is the weather today?", fr: "Quel temps fait-il aujourd'hui ?" },
        { role: "Toi", en: "It's sunny, so I am happy!", fr: "Il fait soleil, donc je suis contente !" },
        { role: "Emma", en: "Do you have a big family?", fr: "As-tu une grande famille ?" },
        { role: "Toi", en: "Yes, I have two brothers and a dog.", fr: "Oui, j'ai deux frères et un chien." },
        { role: "Emma", en: "Lovely! See you soon.", fr: "Adorable ! À bientôt." },
        { role: "Toi", en: "Thank you! Goodbye!", fr: "Merci ! Au revoir !" },
      ],
      aToi: [
        { consigne: "Salue et présente-toi : « Bonjour ! Je m'appelle Lea »", r: "hello, my name is lea", accepte: ["hello my name is lea", "hi my name is lea", "hello i am lea"], explication: "« Hello! My name is Lea »." },
        { consigne: "Dis « Il fait soleil, donc je suis contente »", r: "it's sunny, so i am happy", accepte: ["it's sunny so i'm happy", "it is sunny so i am happy"], explication: "« It's sunny, so I am happy! »." },
        { consigne: "Dis « J'ai deux frères et un chien »", r: "i have two brothers and a dog", accepte: [], explication: "« I have two brothers and a dog »." },
        { consigne: "Dis « Merci ! Au revoir ! »", r: "thank you! goodbye!", accepte: ["thank you goodbye", "thank you! goodbye"], explication: "« Thank you! Goodbye! »." },
      ],
    },
    prononciation: {
      son: "🏆",
      titre: "Récap de tous les sons du mois",
      explication:
        "Tes défis du mois réunis : H (hello), TH (thank), R (red), sh (shoes), -ing (reading), tch (cheap). Reprends-les une dernière fois, fièrement.",
      technique: "Dis la phrase lentement en soignant chaque son piège, puis accélère petit à petit.",
      mots: [
        { en: "hello", phon: "[hèl-lo]" },
        { en: "thank", phon: "[thènk]" },
        { en: "shoes", phon: "[chouz]" },
        { en: "reading", phon: "[rii-dingue]" },
      ],
      phrase: "Hello! Thank you for reading — goodbye!",
    },
    bilan: {
      resume: [
        "Tu sais saluer, te présenter, décrire, poser des questions, dire non, parler de ta vie.",
        "Tu maîtrises to be, to have, le présent simple, there is/are, how much/many.",
        "Tu as tenu une conversation complète. Tu n'es plus débutante du tout ! 🎓",
      ],
      conseil: "Refais la grande conversation à voix haute, sans regarder. Si tu y arrives, tu es prête pour juillet.",
      motivation: "Tout un mois, du premier « Hello » à une vraie conversation. Regarde le chemin parcouru. Je suis immensément fière de toi. 🌸🏆",
    },
  },

]

export const getJourProgramme = (n) => PROGRAMME.find((j) => j.jour === Number(n))

// =====================================================================
//  VERROUILLAGE DES JOURS — deux conditions cumulatives :
//    1. Verrou calendaire : on ne peut pas faire un jour AVANT sa vraie date.
//       Le parcours démarre le 26 mai 2026 (jour 1) puis +1 jour par jour.
//    2. Verrou de séquence : il faut avoir terminé le jour précédent.
// =====================================================================

// Date de départ du parcours : jour 1 = 26 mai 2026 (mois 4 = mai en JS).
const DEBUT_PARCOURS = new Date(2026, 4, 26)

// La vraie date calendaire d'un jour du parcours (minuit, heure locale).
export const dateDuJour = (n) => {
  const d = new Date(DEBUT_PARCOURS)
  d.setDate(d.getDate() + (Number(n) - 1))
  d.setHours(0, 0, 0, 0)
  return d
}

// Aujourd'hui, ramené à minuit pour comparer au jour près.
const aujourdHui = () => {
  const d = new Date()
  d.setHours(0, 0, 0, 0)
  return d
}

// Raison du verrou : null = débloqué, 'date' = pas encore le bon jour,
// 'sequence' = jour précédent pas terminé.
// En mode admin (test), tout est débloqué.
export const raisonVerrou = (n, progres = {}, admin = false) => {
  if (admin) return null
  const num = Number(n)
  if (dateDuJour(num) > aujourdHui()) return 'date'
  if (num !== 1 && !progres[num - 1]) return 'sequence'
  return null
}

// Un jour est débloqué quand il n'a plus aucune raison d'être verrouillé.
export const estDebloque = (n, progres = {}, admin = false) =>
  raisonVerrou(n, progres, admin) === null
