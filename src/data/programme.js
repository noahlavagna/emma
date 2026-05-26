// =====================================================================
//  LE PARCOURS — 16 jours de leçons complètes, calés sur de vraies dates.
//    • Jours 1 à 6  : 26 → 31 mai — MISE EN ROUTE (découverte, en douceur).
//    • Jours 7 à 16 : 1 → 10 juin — LES BASES (A1).
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
        { id: "mai30-number", en: "number", phon: "[nann-beur]", fr: "nombre / numéro", exemple: "My phone number.", exempleFr: "Mon numéro de téléphone." },
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
        { id: "mai31-number", en: "number", phon: "[nann-beur]", fr: "nombre / numéro", exemple: "A phone number.", exempleFr: "Un numéro de téléphone." },
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
        { id: "j4-one", en: "one", phon: "[wann]", fr: "un", exemple: "I have one cat.", exempleFr: "J'ai un chat." },
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
        { id: "j5-country", en: "country", phon: "[kann-tri]", fr: "pays", exemple: "France is a country.", exempleFr: "La France est un pays." },
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
        { id: "j6-mother", en: "mother", phon: "[ma-zeur]", fr: "mère", exemple: "My mother is kind.", exempleFr: "Ma mère est gentille." },
        { id: "j6-father", en: "father", phon: "[fa-zeur]", fr: "père", exemple: "My father is tall.", exempleFr: "Mon père est grand." },
        { id: "j6-sister", en: "sister", phon: "[sis-teur]", fr: "sœur", exemple: "I have a sister.", exempleFr: "J'ai une sœur." },
        { id: "j6-brother", en: "brother", phon: "[bra-zeur]", fr: "frère", exemple: "My brother is nice.", exempleFr: "Mon frère est gentil." },
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
        { id: "j7-work", en: "to work", phon: "[tou werk]", fr: "travailler", exemple: "I work every day.", exempleFr: "Je travaille chaque jour." },
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
        "Le -s de la 3e personne se prononce « s » (works = « werks ») ou « z » (plays = « plèïz »), exactement comme le pluriel des noms.",
      technique: "Même réflexe qu'au jour 6 : après un son doux → « z » (plays, lives), sinon « s » (works, eats).",
      mots: [
        { en: "works", phon: "[werks]" },
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
        { id: "j9-but", en: "but", phon: "[bott]", fr: "mais", exemple: "I like tea, but not coffee.", exempleFr: "J'aime le thé, mais pas le café." },
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
        { en: "doesn't", phon: "[da-zeunt]" },
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
    titre: "Grande révision",
    emoji: "🏆",
    objectif: "Rassembler tout le mois et tenir une vraie petite conversation.",
    intro:
      "Dernier jour de ce premier parcours ! 🏆 On rassemble tout ce que tu as appris en juin et tu vas tenir une conversation complète, du « bonjour » au « au revoir ». Tu vas être fière de toi.",
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
      conseil: "Refais le dialogue de ce dernier jour à voix haute, sans regarder. Si tu y arrives, tu es prête pour juillet.",
      motivation: "Regarde le chemin parcouru depuis ton tout premier jour. Je suis vraiment fière de toi. 🌸🏆",
    },
  },
]

export const getJourProgramme = (n) => PROGRAMME.find((j) => j.jour === Number(n))

// Un jour est débloqué si c'est le jour 1, ou si le jour précédent est terminé.
export const estDebloque = (n, progres = {}) =>
  Number(n) === 1 || Boolean(progres[Number(n) - 1])
