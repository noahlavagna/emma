// =====================================================================
//  JUILLET — jours 37 à 67 (1er → 31 juillet) · VITESSE SUPÉRIEURE.
//  Après les bases de juin (présent simple, to be/have, there is/are),
//  juillet ouvre les trois dimensions du temps + l'anglais pratique :
//    • Semaine 1 (37-43) : l'heure, la routine, la fréquence, le présent
//      continu (be + -ing) — dire ce qui se passe MAINTENANT.
//    • Semaine 2 (44-50) : LE PASSÉ — was/were, -ed, verbes irréguliers,
//      questions avec did. Raconter sa journée, ses vacances.
//    • Semaine 3 (51-57) : LE FUTUR — going to, will, projets ;
//      comparatif et superlatif (très utile en immobilier !).
//    • Semaine 4 (58-64) : L'ANGLAIS PRATIQUE — la ville, les boutiques,
//      le téléphone, l'e-mail, parler de son métier, la visite du bien.
//    • Finale (65-67) : les trois temps mélangés + grande révision.
//  Niveau volontairement relevé (comme les jours 11-36) : production
//  FR→EN de phrases complètes et cumulatives à chaque leçon.
//  Même format que data/programme.js (voir l'en-tête de ce fichier).
// =====================================================================

export const JOURS_JUILLET = [
  // ==================== JOUR 37 · 1 JUILLET — L'HEURE ====================
  {
    jour: 37,
    date: "1 juillet",
    mois: "juillet",
    titre: "Quelle heure est-il ?",
    emoji: "🕐",
    objectif: "Dire et comprendre l'heure — indispensable pour les rendez-vous.",
    intro:
      "Bienvenue en juillet ! ☀️ Ce mois-ci, on passe à la vitesse supérieure : le passé, le futur, et l'anglais de la vraie vie. On commence par l'heure : impossible de fixer un rendez-vous sans elle !",
    vocabulaire: {
      intro: "Tout pour lire une horloge et parler d'un horaire.",
      mots: [
        { id: "j37-clock", en: "clock", phon: "[klok]", fr: "horloge", exemple: "Look at the clock.", exempleFr: "Regarde l'horloge." },
        { id: "j37-watch", en: "watch", phon: "[wotch]", fr: "montre", exemple: "I have a new watch.", exempleFr: "J'ai une nouvelle montre." },
        { id: "j37-hour", en: "hour", phon: "[aou-eur]", fr: "heure (durée)", exemple: "One hour of English.", exempleFr: "Une heure d'anglais." },
        { id: "j37-minute", en: "minute", phon: "[mi-nit]", fr: "minute", exemple: "Five minutes, please.", exempleFr: "Cinq minutes, s'il te plaît." },
        { id: "j37-oclock", en: "o'clock", phon: "[o-klok]", fr: "… heures (pile)", exemple: "It's eight o'clock.", exempleFr: "Il est huit heures pile." },
        { id: "j37-half", en: "half past", phon: "[haf past]", fr: "et demie", exemple: "It's half past two.", exempleFr: "Il est deux heures et demie." },
        { id: "j37-quarter", en: "quarter", phon: "[kwor-teur]", fr: "quart", exemple: "A quarter past nine.", exempleFr: "Neuf heures et quart." },
        { id: "j37-noon", en: "noon", phon: "[noun]", fr: "midi", exemple: "We eat at noon.", exempleFr: "On mange à midi." },
      ],
    },
    grammaire: {
      titre: "Dire l'heure : It's… o'clock / half past / quarter past",
      regle:
        "On annonce l'heure avec « It's… » : It's eight o'clock (8 h pile), It's half past two (2 h 30), It's quarter past nine (9 h 15), It's quarter to five (5 h moins le quart). Et pour situer : « at » devant l'heure → at noon, at 8 o'clock.",
      analogie:
        "« half past two » = « la demie APRÈS deux heures » ; « quarter to five » = « le quart AVANT cinq heures ». Past = après, to = avant. Deux petits mots à retenir.",
      exemples: [
        { en: "It's eight o'clock.", fr: "Il est huit heures." },
        { en: "It's half past two.", fr: "Il est deux heures et demie." },
        { en: "It's quarter to five.", fr: "Il est cinq heures moins le quart." },
        { en: "The meeting is at noon.", fr: "La réunion est à midi." },
      ],
      exercices: [
        { type: "trou", phrase: "It's eight ___. (8 h pile)", r: "o'clock", accepte: ["oclock", "o clock"], explication: "Heure pile → o'clock." },
        { type: "trou", phrase: "It's ___ past two. (et demie)", r: "half", explication: "2 h 30 → half past two." },
        { type: "trou", phrase: "It's quarter ___ five. (moins le quart)", r: "to", explication: "« to » = avant l'heure → quarter to five." },
        { type: "traduction", sens: "fr-en", q: "Il est neuf heures et quart.", r: "it's quarter past nine", accepte: ["it is quarter past nine", "it's a quarter past nine"], explication: "« It's quarter past nine »." },
        { type: "traduction", sens: "fr-en", q: "La réunion est à midi.", r: "the meeting is at noon", explication: "« at noon » = à midi." },
        { type: "vraiFaux", affirmation: "« quarter to five » veut dire cinq heures et quart.", r: false, explication: "Non : « to » = avant → cinq heures MOINS le quart." },
      ],
    },
    conjugaison: {
      titre: "« What time…? » : demander l'heure et l'horaire",
      explication:
        "Pour demander l'heure : « What time is it? ». Pour un horaire d'activité, on ajoute do/does : « What time do you start? », « What time does the visit start? ». C'est la question do/does de juin, avec « What time » devant.",
      tableau: [
        { pronom: "—", forme: "What time is it?", exemple: "What time is it? — It's ten o'clock." },
        { pronom: "you", forme: "What time do you…?", exemple: "What time do you start? (Tu commences à quelle heure ?)" },
        { pronom: "she / he / it", forme: "What time does…?", exemple: "What time does she arrive?" },
        { pronom: "réponse", forme: "at + heure", exemple: "At half past nine. (À 9 h 30.)" },
      ],
      exercices: [
        { type: "trou", phrase: "What time ___ it? (est)", r: "is", explication: "« What time is it? »." },
        { type: "trou", phrase: "What time ___ you start? (est-ce que)", r: "do", explication: "Avec « you » → do." },
        { type: "trou", phrase: "What time ___ the visit start? (3e personne)", r: "does", explication: "the visit = it → does." },
        { type: "traduction", sens: "fr-en", q: "Tu manges à quelle heure ?", r: "what time do you eat", accepte: ["what time do you eat?"], explication: "« What time do you eat? »." },
      ],
    },
    dialogue: {
      titre: "Fixer un rendez-vous",
      contexte: "Emma veut te voir demain. Vous cherchez une heure ensemble.",
      lignes: [
        { role: "Emma", en: "What time do you finish work?", fr: "À quelle heure finis-tu le travail ?" },
        { role: "Toi", en: "I finish at half past five.", fr: "Je finis à cinq heures et demie." },
        { role: "Emma", en: "Perfect. Coffee at six o'clock?", fr: "Parfait. Un café à six heures ?" },
        { role: "Toi", en: "Yes! But what time is it now?", fr: "Oui ! Mais quelle heure est-il, là ?" },
        { role: "Emma", en: "It's quarter past four.", fr: "Il est quatre heures et quart." },
        { role: "Toi", en: "OK, see you at six!", fr: "OK, à six heures !" },
      ],
      aToi: [
        { consigne: "Demande « Quelle heure est-il ? »", r: "what time is it", accepte: ["what time is it?"], explication: "« What time is it? »." },
        { consigne: "Dis « Je finis à cinq heures et demie »", r: "i finish at half past five", explication: "« at half past five »." },
        { consigne: "Dis « À six heures ! » (on se voit)", r: "see you at six", accepte: ["see you at six!", "see you at six o'clock"], explication: "« See you at six! »." },
      ],
    },
    prononciation: {
      son: "🤫",
      titre: "Le « h » muet de « hour »",
      explication:
        "Surprise : dans « hour », le H ne se prononce PAS → [aou-eur], comme « our ». Mais dans « half », il se prononce → [haf]. L'anglais a quelques H muets à connaître : hour, honest.",
      technique: "Dis « our » (notre) puis « hour » (heure) : c'est le MÊME son. Puis « half » en soufflant bien le H.",
      mots: [
        { en: "hour", phon: "[AOU-eur] — h muet" },
        { en: "half", phon: "[HAF] — h soufflé" },
        { en: "watch", phon: "[WOTCH]" },
        { en: "quarter", phon: "[KWOR-teur]" },
      ],
      phrase: "Half an hour — it's quarter past four.",
    },
    bilan: {
      resume: [
        "L'heure : o'clock (pile), half past (et demie), quarter past / to (et quart / moins le quart).",
        "« What time is it? » et « What time do you…? » pour les horaires.",
        "« at » devant une heure : at noon, at six o'clock.",
      ],
      conseil: "Chaque fois que tu regardes l'heure aujourd'hui, dis-la dans ta tête en anglais.",
      motivation: "Premier jour de juillet, et te voilà déjà maîtresse du temps ! ⏰🌸",
    },
  },

  // ==================== JOUR 38 · 2 JUILLET — LA ROUTINE ====================
  {
    jour: 38,
    date: "2 juillet",
    mois: "juillet",
    titre: "Ma routine du matin",
    emoji: "🌅",
    objectif: "Raconter ta journée type, du réveil au départ au travail.",
    intro:
      "Aujourd'hui, on raconte ta routine ! 🌅 Avec l'heure d'hier et les verbes du quotidien, tu vas pouvoir décrire ta journée complète — c'est une des conversations les plus courantes en anglais.",
    vocabulaire: {
      intro: "Les verbes du quotidien, dans l'ordre de ta matinée.",
      mots: [
        { id: "j38-wakeup", en: "to wake up", phon: "[wéïk eup]", fr: "se réveiller", exemple: "I wake up at seven.", exempleFr: "Je me réveille à sept heures." },
        { id: "j38-getup", en: "to get up", phon: "[guèt eup]", fr: "se lever", exemple: "I get up at quarter past seven.", exempleFr: "Je me lève à sept heures et quart." },
        { id: "j38-shower", en: "to take a shower", phon: "[téïk e chaou-eur]", fr: "prendre une douche", exemple: "I take a shower every morning.", exempleFr: "Je prends une douche chaque matin." },
        { id: "j38-getdressed", en: "to get dressed", phon: "[guèt drèst]", fr: "s'habiller", exemple: "I get dressed quickly.", exempleFr: "Je m'habille vite." },
        { id: "j38-breakfast", en: "breakfast", phon: "[brèk-feust]", fr: "petit-déjeuner", exemple: "I have breakfast at eight.", exempleFr: "Je prends mon petit-déjeuner à huit heures." },
        { id: "j38-brush", en: "to brush my teeth", phon: "[breuch maï tiith]", fr: "me brosser les dents", exemple: "I brush my teeth twice a day.", exempleFr: "Je me brosse les dents deux fois par jour." },
        { id: "j38-leave", en: "to leave", phon: "[liiv]", fr: "partir / quitter", exemple: "I leave home at nine.", exempleFr: "Je pars de chez moi à neuf heures." },
        { id: "j38-arrive", en: "to arrive", phon: "[e-raïv]", fr: "arriver", exemple: "I arrive at the agency.", exempleFr: "J'arrive à l'agence." },
      ],
    },
    grammaire: {
      titre: "Pas de « me / se » en anglais !",
      regle:
        "En français, la routine est pleine de verbes avec « se » : SE réveiller, SE lever, S'habiller. En anglais, ça n'existe pas : I wake up (je me réveille), I get dressed (je m'habille), I brush my teeth (je ME brosse LES dents → my teeth, pas « the teeth »).",
      analogie:
        "Enlève le « me/se » français, et pour les parties du corps mets le possessif : je me brosse LES dents → I brush MY teeth. C'est plus direct qu'en français !",
      exemples: [
        { en: "I wake up at seven.", fr: "Je me réveille à sept heures." },
        { en: "She gets dressed.", fr: "Elle s'habille." },
        { en: "I brush my teeth.", fr: "Je me brosse les dents." },
        { en: "He washes his hands.", fr: "Il se lave les mains." },
      ],
      exercices: [
        { type: "traduction", sens: "fr-en", q: "Je me réveille à sept heures.", r: "i wake up at seven", accepte: ["i wake up at seven o'clock", "i wake up at 7"], explication: "Pas de « me » : I wake up." },
        { type: "trou", phrase: "I brush ___ teeth. (mes)", r: "my", explication: "Possessif pour le corps : my teeth." },
        { type: "vraiFaux", affirmation: "« Je m'habille » se dit « I dress myself ».", r: false, explication: "On dit simplement « I get dressed »." },
        { type: "traduction", sens: "fr-en", q: "Elle se lève à huit heures et demie.", r: "she gets up at half past eight", accepte: ["she gets up at eight thirty"], explication: "she → gets up (+ -s)." },
        { type: "traduction", sens: "fr-en", q: "Je prends une douche puis je m'habille.", r: "i take a shower then i get dressed", accepte: ["i take a shower and then i get dressed", "i take a shower and i get dressed"], explication: "« then » = puis." },
      ],
    },
    conjugaison: {
      titre: "La routine à la 3e personne : n'oublie pas le -s !",
      explication:
        "Pour raconter la routine de quelqu'un d'autre (he/she), chaque verbe prend son -s : she wakes up, he takes a shower, she leaves at nine. Attention : to brush → brushes (on entend [iz]).",
      tableau: [
        { pronom: "I", forme: "wake up / leave", exemple: "I wake up at seven." },
        { pronom: "She", forme: "wakes up", exemple: "She wakes up at six." },
        { pronom: "He", forme: "takes a shower", exemple: "He takes a shower." },
        { pronom: "She", forme: "brushes", exemple: "She brushes her teeth." },
      ],
      exercices: [
        { type: "conjugaison", verbe: "to wake up", q: "She ___ up at six.", r: "wakes", explication: "she → wakes up." },
        { type: "conjugaison", verbe: "to take", q: "He ___ a shower.", r: "takes", explication: "he → takes." },
        { type: "conjugaison", verbe: "to brush", q: "She ___ her teeth.", r: "brushes", explication: "brush → brushes (+ -es)." },
        { type: "traduction", sens: "fr-en", q: "Il part de chez lui à neuf heures.", r: "he leaves home at nine", accepte: ["he leaves his home at nine", "he leaves home at nine o'clock"], explication: "he → leaves." },
      ],
    },
    dialogue: {
      titre: "Raconte-moi ta matinée",
      contexte: "Emma est curieuse de ta journée type.",
      lignes: [
        { role: "Emma", en: "What time do you wake up?", fr: "À quelle heure te réveilles-tu ?" },
        { role: "Toi", en: "I wake up at seven o'clock.", fr: "Je me réveille à sept heures." },
        { role: "Emma", en: "And then?", fr: "Et ensuite ?" },
        { role: "Toi", en: "I take a shower, I get dressed and I have breakfast.", fr: "Je prends une douche, je m'habille et je prends mon petit-déjeuner." },
        { role: "Emma", en: "What time do you leave home?", fr: "À quelle heure pars-tu de chez toi ?" },
        { role: "Toi", en: "I leave at half past eight and I arrive at nine.", fr: "Je pars à huit heures et demie et j'arrive à neuf heures." },
        { role: "Emma", en: "A perfect morning!", fr: "Une matinée parfaite !" },
      ],
      aToi: [
        { consigne: "Dis « Je me réveille à sept heures »", r: "i wake up at seven o'clock", accepte: ["i wake up at seven", "i wake up at 7"], explication: "« I wake up at seven (o'clock) »." },
        { consigne: "Dis « Je prends une douche et je m'habille »", r: "i take a shower and i get dressed", explication: "« I take a shower and I get dressed »." },
        { consigne: "Dis « Je pars à huit heures et demie »", r: "i leave at half past eight", accepte: ["i leave home at half past eight"], explication: "« I leave at half past eight »." },
      ],
    },
    prononciation: {
      son: "éï",
      titre: "Le son [éï] de wake / take / late",
      explication:
        "La lettre A suivie d'une consonne + e final se dit souvent [éï] : wake [wéïk], take [téïk], late [léït], name [néïm]. Le « e » final est muet, mais il transforme le A en [éï].",
      technique: "Dis « ouais » puis remplace par [éï] : w-éï-k. Le e final ne se prononce jamais.",
      mots: [
        { en: "wake", phon: "[WÉÏK]" },
        { en: "take", phon: "[TÉÏK]" },
        { en: "late", phon: "[LÉÏT]" },
        { en: "leave", phon: "[LIIV] — ii long" },
      ],
      phrase: "I wake up late and I take a shower.",
    },
    bilan: {
      resume: [
        "La routine sans « se » : wake up, get up, get dressed, brush my teeth.",
        "Le possessif pour le corps : my teeth, his hands.",
        "3e personne : she wakes up, he takes, she brushes.",
      ],
      conseil: "Demain matin, commente ta routine en anglais dans ta tête, étape par étape.",
      motivation: "Tu peux maintenant raconter ta journée entière. C'est énorme ! 🌅",
    },
  },

  // ==================== JOUR 39 · 3 JUILLET — LA FRÉQUENCE ====================
  {
    jour: 39,
    date: "3 juillet",
    mois: "juillet",
    titre: "Toujours, parfois, jamais",
    emoji: "📊",
    objectif: "Nuancer tes habitudes avec les adverbes de fréquence.",
    intro:
      "« Je bois TOUJOURS un café », « je ne cours JAMAIS »… Aujourd'hui tu apprends à doser tes phrases : les adverbes de fréquence rendent ton anglais tout de suite plus naturel. 📊",
    vocabulaire: {
      intro: "Du plus fréquent au plus rare — retiens l'échelle !",
      mots: [
        { id: "j39-always", en: "always", phon: "[ol-wéïz]", fr: "toujours", exemple: "I always drink coffee.", exempleFr: "Je bois toujours du café." },
        { id: "j39-usually", en: "usually", phon: "[iou-jou-e-li]", fr: "d'habitude", exemple: "I usually work at the agency.", exempleFr: "D'habitude je travaille à l'agence." },
        { id: "j39-often", en: "often", phon: "[o-feun]", fr: "souvent", exemple: "We often walk.", exempleFr: "Nous marchons souvent." },
        { id: "j39-sometimes", en: "sometimes", phon: "[som-taïmz]", fr: "parfois", exemple: "Sometimes I read.", exempleFr: "Parfois je lis." },
        { id: "j39-rarely", en: "rarely", phon: "[rèr-li]", fr: "rarement", exemple: "I rarely watch TV.", exempleFr: "Je regarde rarement la télé." },
        { id: "j39-never", en: "never", phon: "[nè-veur]", fr: "jamais", exemple: "I never smoke.", exempleFr: "Je ne fume jamais." },
        { id: "j39-everyday", en: "every day", phon: "[è-vri dèï]", fr: "tous les jours", exemple: "I study English every day.", exempleFr: "J'étudie l'anglais tous les jours." },
        { id: "j39-twice", en: "twice a week", phon: "[twaïss e wiik]", fr: "deux fois par semaine", exemple: "I run twice a week.", exempleFr: "Je cours deux fois par semaine." },
      ],
    },
    grammaire: {
      titre: "Où placer l'adverbe ? AVANT le verbe (mais APRÈS be)",
      regle:
        "L'adverbe de fréquence se place AVANT le verbe : I always drink coffee. She never works on Sunday. SAUF avec to be : il se place APRÈS → She is always happy. « every day » et « twice a week », eux, vont en fin de phrase.",
      analogie:
        "En français on dit « je bois toujours » (après) ; en anglais « I always drink » (avant). Petit switch à automatiser. Avec be, c'est comme en français : elle est toujours contente → she is always happy.",
      exemples: [
        { en: "I always drink coffee.", fr: "Je bois toujours du café." },
        { en: "She never works on Sunday.", fr: "Elle ne travaille jamais le dimanche." },
        { en: "He is often late.", fr: "Il est souvent en retard." },
        { en: "I read every day.", fr: "Je lis tous les jours." },
      ],
      exercices: [
        { type: "traduction", sens: "fr-en", q: "Je bois toujours du café.", r: "i always drink coffee", explication: "always AVANT le verbe." },
        { type: "trou", phrase: "She is ___ late. (souvent)", r: "often", explication: "Avec be, l'adverbe vient après : is often." },
        { type: "traduction", sens: "fr-en", q: "Elle ne travaille jamais le dimanche.", r: "she never works on sunday", accepte: ["she never works on sundays"], explication: "never + verbe avec -s (pas de don't !)." },
        { type: "vraiFaux", affirmation: "Avec « never », on ajoute quand même « don't » : I don't never smoke.", r: false, explication: "Non ! « never » est déjà négatif : I never smoke." },
        { type: "traduction", sens: "fr-en", q: "J'étudie l'anglais tous les jours.", r: "i study english every day", accepte: ["i study english everyday"], explication: "« every day » en fin de phrase." },
        { type: "traduction", sens: "fr-en", q: "Parfois je lis, mais je ne regarde jamais la télé.", r: "sometimes i read, but i never watch tv", accepte: ["sometimes i read but i never watch tv", "i sometimes read but i never watch tv"], explication: "« Sometimes » peut ouvrir la phrase ; « never » avant le verbe." },
      ],
    },
    conjugaison: {
      titre: "never / always + présent simple (avec le -s !)",
      explication:
        "L'adverbe ne change RIEN à la conjugaison : à la 3e personne, le verbe garde son -s. She always drinks tea. He never eats meat. It usually rains in November.",
      tableau: [
        { pronom: "I", forme: "always drink", exemple: "I always drink coffee." },
        { pronom: "She", forme: "always drinks", exemple: "She always drinks tea." },
        { pronom: "He", forme: "never eats", exemple: "He never eats meat." },
        { pronom: "They", forme: "often walk", exemple: "They often walk to work." },
      ],
      exercices: [
        { type: "conjugaison", verbe: "to drink", q: "She always ___ tea.", r: "drinks", explication: "3e personne → drinks, même avec always." },
        { type: "conjugaison", verbe: "to eat", q: "He never ___ meat.", r: "eats", explication: "never + eats (le -s reste)." },
        { type: "conjugaison", verbe: "to work", q: "She usually ___ at the agency.", r: "works", explication: "usually + works." },
        { type: "traduction", sens: "fr-en", q: "Il est toujours en retard.", r: "he is always late", accepte: ["he's always late"], explication: "Avec be : is always late." },
      ],
    },
    dialogue: {
      titre: "Tes petites habitudes",
      contexte: "Emma te pose des questions sur ta semaine type.",
      lignes: [
        { role: "Emma", en: "Do you often do sport?", fr: "Fais-tu souvent du sport ?" },
        { role: "Toi", en: "I run twice a week, but I never swim.", fr: "Je cours deux fois par semaine, mais je ne nage jamais." },
        { role: "Emma", en: "Do you always have breakfast?", fr: "Prends-tu toujours un petit-déjeuner ?" },
        { role: "Toi", en: "Yes, I always have breakfast. Usually at eight.", fr: "Oui, toujours. D'habitude à huit heures." },
        { role: "Emma", en: "And TV?", fr: "Et la télé ?" },
        { role: "Toi", en: "I rarely watch TV, but I sometimes watch a film.", fr: "Je regarde rarement la télé, mais parfois un film." },
      ],
      aToi: [
        { consigne: "Dis « Je bois toujours du café le matin »", r: "i always drink coffee in the morning", explication: "always avant le verbe + in the morning." },
        { consigne: "Dis « Je ne nage jamais »", r: "i never swim", explication: "« I never swim » — pas de don't." },
        { consigne: "Dis « Parfois je regarde un film »", r: "sometimes i watch a film", accepte: ["i sometimes watch a film", "sometimes i watch a movie", "i sometimes watch a movie"], explication: "« Sometimes I watch a film »." },
      ],
    },
    prononciation: {
      son: "iou",
      titre: "« usually » : le son [jou] du milieu",
      explication:
        "« usually » se dit [IOU-jou-e-li] : le s du milieu se prononce [j] comme dans « journal » à l'anglaise, un son doux [ʒ]. On retrouve ce son dans « television » [tè-lè-vi-jeun].",
      technique: "Dis « ioujou » comme un petit train : iou-jou-e-li. Ne cherche pas à prononcer chaque lettre.",
      mots: [
        { en: "usually", phon: "[IOU-jou-e-li]" },
        { en: "television", phon: "[tè-lè-VI-jeun]" },
        { en: "always", phon: "[OL-wéïz]" },
        { en: "often", phon: "[O-feun] — t muet" },
      ],
      phrase: "I usually watch television, but not always.",
    },
    bilan: {
      resume: [
        "L'échelle : always → usually → often → sometimes → rarely → never.",
        "Place : AVANT le verbe (I always drink), APRÈS be (she is always happy).",
        "never = déjà négatif, jamais de don't avec.",
      ],
      conseil: "Fais trois phrases vraies sur toi : une avec always, une avec sometimes, une avec never.",
      motivation: "Ton anglais se nuance — tu ne parles plus en noir et blanc, mais en couleurs ! 🎨",
    },
  },

  // ==================== JOUR 40 · 4 JUILLET — LES LOISIRS ====================
  {
    jour: 40,
    date: "4 juillet",
    mois: "juillet",
    titre: "J'adore faire ça !",
    emoji: "🎨",
    objectif: "Parler de tes loisirs avec like / love / hate + -ing.",
    intro:
      "Aujourd'hui on parle de ce que tu AIMES ! 🎨 En anglais, après like, love et hate, l'activité se met en -ing : I love dancing. C'est LA tournure pour parler de ses passions.",
    vocabulaire: {
      intro: "Les loisirs les plus courants, déjà en -ing.",
      mots: [
        { id: "j40-hobby", en: "hobby", phon: "[ho-bi]", fr: "loisir / passion", exemple: "What are your hobbies?", exempleFr: "Quels sont tes loisirs ?" },
        { id: "j40-reading", en: "reading", phon: "[rii-dingue]", fr: "la lecture", exemple: "I love reading.", exempleFr: "J'adore lire." },
        { id: "j40-cooking", en: "cooking", phon: "[kou-kingue]", fr: "la cuisine", exemple: "Cooking is fun.", exempleFr: "Cuisiner, c'est amusant." },
        { id: "j40-dancing", en: "dancing", phon: "[dan-cingue]", fr: "la danse", exemple: "She loves dancing.", exempleFr: "Elle adore danser." },
        { id: "j40-swimming", en: "swimming", phon: "[swi-mingue]", fr: "la natation", exemple: "Swimming is good for you.", exempleFr: "La natation, c'est bon pour toi." },
        { id: "j40-drawing", en: "drawing", phon: "[dro-ingue]", fr: "le dessin", exemple: "I like drawing.", exempleFr: "J'aime dessiner." },
        { id: "j40-shopping", en: "shopping", phon: "[cho-pingue]", fr: "le shopping", exemple: "We go shopping on Saturday.", exempleFr: "On fait les boutiques le samedi." },
        { id: "j40-travelling", en: "travelling", phon: "[tra-veu-lingue]", fr: "les voyages", exemple: "I love travelling.", exempleFr: "J'adore voyager." },
      ],
    },
    grammaire: {
      titre: "like / love / hate + verbe en -ing",
      regle:
        "Après like (aimer), love (adorer), hate (détester), l'activité prend -ing : I love dancing. She hates cooking. Do you like reading? L'activité devient presque un « nom » : la danse, la cuisine.",
      analogie:
        "En français on dit « j'adore LA danse » ou « j'adore danser ». L'anglais fusionne les deux avec -ing : I love dancing. Pense « j'adore la dansE-ING ».",
      exemples: [
        { en: "I love dancing.", fr: "J'adore danser." },
        { en: "She hates cooking.", fr: "Elle déteste cuisiner." },
        { en: "Do you like reading?", fr: "Aimes-tu lire ?" },
        { en: "We love travelling.", fr: "Nous adorons voyager." },
      ],
      exercices: [
        { type: "trou", phrase: "I love ___. (danser)", r: "dancing", explication: "love + -ing → dancing." },
        { type: "traduction", sens: "fr-en", q: "Elle déteste cuisiner.", r: "she hates cooking", explication: "she → hates + cooking." },
        { type: "traduction", sens: "fr-en", q: "Aimes-tu lire ?", r: "do you like reading", accepte: ["do you like reading?"], explication: "Do you like + -ing ?" },
        { type: "vraiFaux", affirmation: "On dit « I love dance » pour « j'adore danser ».", r: false, explication: "Après love → -ing : I love dancing." },
        { type: "traduction", sens: "fr-en", q: "J'adore voyager mais je déteste l'avion.", r: "i love travelling but i hate the plane", accepte: ["i love traveling but i hate the plane", "i love travelling but i hate planes"], explication: "love/hate + -ing ou nom." },
      ],
    },
    conjugaison: {
      titre: "Fabriquer le -ing : les 3 règles",
      explication:
        "1) En général on ajoute juste -ing : read → reading. 2) Le e final saute : dance → dancing, make → making. 3) Après une voyelle + consonne courte, on double la consonne : swim → swimming, run → running, shop → shopping.",
      tableau: [
        { pronom: "règle 1", forme: "+ ing", exemple: "read → reading, draw → drawing" },
        { pronom: "règle 2", forme: "e ➜ ing", exemple: "dance → dancing, make → making" },
        { pronom: "règle 3", forme: "consonne doublée", exemple: "swim → swimming, run → running" },
        { pronom: "3e pers.", forme: "loves / hates", exemple: "She loves swimming." },
      ],
      exercices: [
        { type: "trou", phrase: "dance → ___ (forme en -ing)", r: "dancing", explication: "Le e final saute : dancing." },
        { type: "trou", phrase: "swim → ___ (forme en -ing)", r: "swimming", explication: "Consonne doublée : swimming." },
        { type: "trou", phrase: "run → ___ (forme en -ing)", r: "running", explication: "run → running (double n)." },
        { type: "conjugaison", verbe: "to love", q: "She ___ swimming.", r: "loves", explication: "she → loves." },
      ],
    },
    dialogue: {
      titre: "Passions croisées",
      contexte: "Emma et toi comparez vos loisirs.",
      lignes: [
        { role: "Emma", en: "What are your hobbies?", fr: "Quels sont tes loisirs ?" },
        { role: "Toi", en: "I love reading and I like drawing.", fr: "J'adore lire et j'aime dessiner." },
        { role: "Emma", en: "Do you like sport?", fr: "Aimes-tu le sport ?" },
        { role: "Toi", en: "I like swimming, but I hate running!", fr: "J'aime nager, mais je déteste courir !" },
        { role: "Emma", en: "Me too! And I love shopping…", fr: "Moi aussi ! Et j'adore le shopping…" },
        { role: "Toi", en: "Perfect, let's go shopping on Saturday!", fr: "Parfait, allons faire les boutiques samedi !" },
      ],
      aToi: [
        { consigne: "Dis « J'adore lire »", r: "i love reading", explication: "« I love reading »." },
        { consigne: "Dis « J'aime nager mais je déteste courir »", r: "i like swimming but i hate running", explication: "like/hate + -ing." },
        { consigne: "Demande « Quels sont tes loisirs ? »", r: "what are your hobbies", accepte: ["what are your hobbies?"], explication: "« What are your hobbies? »." },
      ],
    },
    prononciation: {
      son: "ingue",
      titre: "Le -ing : un son du nez, sans « gue » dur",
      explication:
        "Le -ing se prononce dans le nez : [ingue] très léger, sans faire sonner un vrai « g ». reading [rii-ding(ue)], swimming [swi-ming(ue)]. Le bout de la langue ne touche pas les dents.",
      technique: "Dis « parking » à la française, puis adoucis le « g » final jusqu'à ce qu'il disparaisse presque.",
      mots: [
        { en: "reading", phon: "[RII-dingue]" },
        { en: "swimming", phon: "[SWI-mingue]" },
        { en: "dancing", phon: "[DAN-cingue]" },
        { en: "shopping", phon: "[CHO-pingue]" },
      ],
      phrase: "I love reading, swimming and dancing.",
    },
    bilan: {
      resume: [
        "like / love / hate + -ing : I love dancing.",
        "Fabriquer le -ing : +ing, e qui saute (dancing), consonne doublée (swimming).",
        "Les hobbies : reading, cooking, drawing, travelling, shopping…",
      ],
      conseil: "Dis à voix haute tes trois passions avec « I love -ing » — et une chose que tu détestes !",
      motivation: "Parler de ce qu'on aime, c'est le cœur de toute conversation. Tu y es ! 💛",
    },
  },

  // ==================== JOUR 41 · 5 JUILLET — PRÉSENT CONTINU ====================
  {
    jour: 41,
    date: "5 juillet",
    mois: "juillet",
    titre: "En ce moment même : be + -ing",
    emoji: "⏳",
    objectif: "Dire ce qui se passe MAINTENANT avec le présent continu.",
    intro:
      "Grosse nouveauté aujourd'hui : le PRÉSENT CONTINU ! ⏳ « I am reading » = je suis EN TRAIN de lire. C'est le temps de l'instant présent — et tu as déjà toutes les briques : to be + le -ing d'hier.",
    vocabulaire: {
      intro: "Les mots de l'instant présent.",
      mots: [
        { id: "j41-now", en: "now", phon: "[naou]", fr: "maintenant", exemple: "I am working now.", exempleFr: "Je travaille, là maintenant." },
        { id: "j41-rightnow", en: "right now", phon: "[raït naou]", fr: "là, tout de suite", exemple: "Come right now!", exempleFr: "Viens tout de suite !" },
        { id: "j41-atm", en: "at the moment", phon: "[at dhe mo-meunt]", fr: "en ce moment", exemple: "She is busy at the moment.", exempleFr: "Elle est occupée en ce moment." },
        { id: "j41-wait", en: "to wait", phon: "[wéït]", fr: "attendre", exemple: "I am waiting for the bus.", exempleFr: "J'attends le bus." },
        { id: "j41-listen", en: "to listen", phon: "[li-seun]", fr: "écouter", exemple: "She is listening to music.", exempleFr: "Elle écoute de la musique." },
        { id: "j41-look", en: "to look", phon: "[louk]", fr: "regarder", exemple: "Look! It's raining.", exempleFr: "Regarde ! Il pleut." },
        { id: "j41-rain", en: "to rain", phon: "[réïn]", fr: "pleuvoir", exemple: "It is raining now.", exempleFr: "Il pleut en ce moment." },
        { id: "j41-busy", en: "busy", phon: "[bi-zi]", fr: "occupé·e", exemple: "I am busy right now.", exempleFr: "Je suis occupée là tout de suite." },
      ],
    },
    grammaire: {
      titre: "Le présent continu : am / is / are + -ing",
      regle:
        "Pour une action EN COURS : be (conjugué) + verbe-ing. I am reading (je suis en train de lire). She is working (elle travaille, là). They are waiting (ils attendent). Négation : I'm not reading. Question : Are you reading?",
      analogie:
        "C'est mot à mot « je SUIS lisANT » = je suis en train de lire. Le français a « être en train de », l'anglais a be + -ing — mais en plus court !",
      exemples: [
        { en: "I am reading.", fr: "Je suis en train de lire." },
        { en: "She is working now.", fr: "Elle travaille en ce moment." },
        { en: "It is raining.", fr: "Il pleut (là)." },
        { en: "Are you listening?", fr: "Est-ce que tu écoutes ?" },
      ],
      exercices: [
        { type: "trou", phrase: "I ___ reading. (suis)", r: "am", explication: "I am + -ing." },
        { type: "trou", phrase: "She is ___ now. (travailler)", r: "working", explication: "be + working." },
        { type: "traduction", sens: "fr-en", q: "Il pleut en ce moment.", r: "it is raining", accepte: ["it's raining", "it is raining now", "it's raining now", "it is raining at the moment", "it's raining at the moment"], explication: "« It's raining »." },
        { type: "trou", phrase: "___ you listening? (question)", r: "Are", accepte: ["are"], explication: "Question : Are you + -ing ?" },
        { type: "traduction", sens: "fr-en", q: "J'attends le bus.", r: "i am waiting for the bus", accepte: ["i'm waiting for the bus"], explication: "waiting FOR the bus (petit « for » !)." },
        { type: "traduction", sens: "fr-en", q: "Elle écoute de la musique en ce moment.", r: "she is listening to music at the moment", accepte: ["she's listening to music at the moment", "she is listening to music now", "she's listening to music now"], explication: "listening TO music." },
      ],
    },
    conjugaison: {
      titre: "Le tableau complet du présent continu",
      explication:
        "am avec I, is avec he/she/it, are avec you/we/they — comme d'habitude avec be ! Puis le verbe en -ing. Les formes courtes sont reines : I'm reading, she's working, they're waiting.",
      tableau: [
        { pronom: "I", forme: "am (I'm) + -ing", exemple: "I'm reading." },
        { pronom: "She / He / It", forme: "is ('s) + -ing", exemple: "She's working. It's raining." },
        { pronom: "You / We / They", forme: "are ('re) + -ing", exemple: "They're waiting." },
        { pronom: "négation", forme: "be + not + -ing", exemple: "I'm not sleeping!" },
      ],
      exercices: [
        { type: "conjugaison", verbe: "to read", q: "I am ___ a book.", r: "reading", explication: "am + reading." },
        { type: "conjugaison", verbe: "to work", q: "She ___ working.", r: "is", explication: "she → is + -ing." },
        { type: "conjugaison", verbe: "to wait", q: "They are ___ for the taxi.", r: "waiting", explication: "are + waiting." },
        { type: "traduction", sens: "fr-en", q: "Je ne dors pas !", r: "i am not sleeping", accepte: ["i'm not sleeping"], explication: "Négation : I'm not + -ing." },
      ],
    },
    dialogue: {
      titre: "Au téléphone, là maintenant",
      contexte: "Emma t'appelle. Vous vous racontez ce que vous êtes en train de faire.",
      lignes: [
        { role: "Emma", en: "Hi! What are you doing right now?", fr: "Salut ! Qu'est-ce que tu fais, là ?" },
        { role: "Toi", en: "I'm cooking and I'm listening to music.", fr: "Je cuisine et j'écoute de la musique." },
        { role: "Emma", en: "Nice! I'm waiting for the bus.", fr: "Sympa ! Moi, j'attends le bus." },
        { role: "Toi", en: "Is it raining?", fr: "Est-ce qu'il pleut ?" },
        { role: "Emma", en: "Yes, it's raining! I'm not happy…", fr: "Oui, il pleut ! Je ne suis pas contente…" },
        { role: "Toi", en: "Come to my place, I'm making tea!", fr: "Viens chez moi, je prépare du thé !" },
      ],
      aToi: [
        { consigne: "Demande « Qu'est-ce que tu fais, là ? »", r: "what are you doing right now", accepte: ["what are you doing", "what are you doing now", "what are you doing right now?"], explication: "« What are you doing (right now)? »." },
        { consigne: "Dis « Je cuisine et j'écoute de la musique »", r: "i'm cooking and i'm listening to music", accepte: ["i am cooking and i am listening to music", "i'm cooking and listening to music"], explication: "Deux actions en cours : be + -ing." },
        { consigne: "Dis « Il pleut » (en ce moment)", r: "it's raining", accepte: ["it is raining"], explication: "« It's raining »." },
      ],
    },
    prononciation: {
      son: "aou",
      titre: "Le son [aou] de now / how / house",
      explication:
        "Les lettres OW / OU se disent souvent [aou] : now [naou], how [haou], house [haouss], shower [chaou-eur]. La bouche s'ouvre grand puis se referme en « ou ».",
      technique: "Dis « miaou » sans le mi- : « aou ». Puis n-aou, h-aou.",
      mots: [
        { en: "now", phon: "[NAOU]" },
        { en: "how", phon: "[HAOU]" },
        { en: "shower", phon: "[CHAOU-eur]" },
        { en: "busy", phon: "[BI-zi] — u se dit i !" },
      ],
      phrase: "How are you now? I'm in the shower!",
    },
    bilan: {
      resume: [
        "Présent continu = be + -ing : I'm reading, she's working.",
        "Pour ce qui se passe MAINTENANT : now, right now, at the moment.",
        "Question : Are you…-ing ? Négation : I'm not …-ing.",
      ],
      conseil: "Trois fois aujourd'hui, dis dans ta tête ce que tu es en train de faire : « I'm eating », « I'm walking »…",
      motivation: "Tu viens d'apprendre un TEMPS entier en un jour. Sérieusement, chapeau ! ⏳🌟",
    },
  },

  // ==================== JOUR 42 · 6 JUILLET — SIMPLE VS CONTINU ====================
  {
    jour: 42,
    date: "6 juillet",
    mois: "juillet",
    titre: "Habitude ou en ce moment ?",
    emoji: "🆚",
    objectif: "Choisir entre présent simple (habitude) et présent continu (maintenant).",
    intro:
      "Deux présents, deux usages ! 🆚 « I work at an agency » (habitude) vs « I am working now » (en ce moment). Aujourd'hui, tu apprends à choisir sans hésiter — c'est un vrai cap de niveau.",
    vocabulaire: {
      intro: "Les indices de temps : ils te disent quel présent choisir.",
      mots: [
        { id: "j42-generally", en: "generally", phon: "[djè-neu-reu-li]", fr: "en général", exemple: "Generally, I work on Monday.", exempleFr: "En général, je travaille le lundi." },
        { id: "j42-today", en: "today", phon: "[tou-dèï]", fr: "aujourd'hui", exemple: "Today I am resting.", exempleFr: "Aujourd'hui, je me repose." },
        { id: "j42-thisweek", en: "this week", phon: "[dhiss wiik]", fr: "cette semaine", exemple: "This week I am learning English.", exempleFr: "Cette semaine, j'apprends l'anglais." },
        { id: "j42-tonight", en: "tonight", phon: "[tou-naït]", fr: "ce soir", exemple: "Tonight we are watching a film.", exempleFr: "Ce soir, on regarde un film." },
        { id: "j42-still", en: "still", phon: "[stil]", fr: "encore / toujours", exemple: "She is still sleeping.", exempleFr: "Elle dort encore." },
        { id: "j42-moment", en: "moment", phon: "[mo-meunt]", fr: "moment", exemple: "One moment, please.", exempleFr: "Un moment, s'il vous plaît." },
        { id: "j42-rest", en: "to rest", phon: "[rèst]", fr: "se reposer", exemple: "I am resting today.", exempleFr: "Je me repose aujourd'hui." },
        { id: "j42-learn", en: "to learn", phon: "[leurn]", fr: "apprendre", exemple: "I am learning English.", exempleFr: "J'apprends l'anglais." },
      ],
    },
    grammaire: {
      titre: "Le match : présent simple 🆚 présent continu",
      regle:
        "Présent SIMPLE = habitudes, vérités : I work every day. She likes tea. Présent CONTINU = en ce moment : I am working now. Les indices : every day / usually / never → simple ; now / today / at the moment / Look! → continu.",
      analogie:
        "Simple = ta vie en général (le fond). Continu = la photo de l'instant (le zoom). « Je travaille à l'agence » (métier) vs « je travaille, là » (action en cours).",
      exemples: [
        { en: "I work at an agency.", fr: "Je travaille dans une agence. (métier)" },
        { en: "I am working right now.", fr: "Je travaille, là. (action en cours)" },
        { en: "She usually drinks tea.", fr: "D'habitude elle boit du thé." },
        { en: "Today she is drinking coffee.", fr: "Aujourd'hui elle boit du café." },
      ],
      exercices: [
        { type: "trou", phrase: "I ___ at an agency. (habitude : travailler)", r: "work", explication: "Habitude → présent simple : work." },
        { type: "trou", phrase: "Quiet! The baby ___ sleeping. (est)", r: "is", explication: "En ce moment → is sleeping." },
        { type: "traduction", sens: "fr-en", q: "D'habitude je bois du thé, mais aujourd'hui je bois un café.", r: "i usually drink tea, but today i am drinking coffee", accepte: ["i usually drink tea but today i'm drinking coffee", "usually i drink tea but today i am drinking coffee"], explication: "usually → simple ; today → continu." },
        { type: "vraiFaux", affirmation: "« every day » appelle le présent continu.", r: false, explication: "Non : every day = habitude → présent simple." },
        { type: "traduction", sens: "fr-en", q: "Elle dort encore.", r: "she is still sleeping", accepte: ["she's still sleeping"], explication: "En ce moment → is sleeping ; still avant le -ing." },
        { type: "traduction", sens: "fr-en", q: "Cette semaine, j'apprends l'anglais.", r: "this week i am learning english", accepte: ["this week i'm learning english", "i am learning english this week", "i'm learning english this week"], explication: "this week → action en cours → continu." },
      ],
    },
    conjugaison: {
      titre: "Les deux formes côte à côte",
      explication:
        "Compare : I work / I am working. She eats / she is eating. They read / they are reading. Attention : certains verbes d'état (like, love, want, know) restent presque toujours au présent simple : I like it (jamais « I am liking »).",
      tableau: [
        { pronom: "habitude", forme: "I work", exemple: "I work every day." },
        { pronom: "maintenant", forme: "I am working", exemple: "I am working now." },
        { pronom: "habitude", forme: "she eats", exemple: "She eats at noon." },
        { pronom: "état (toujours simple)", forme: "I like / I want", exemple: "I like this flat. (jamais « am liking »)" },
      ],
      exercices: [
        { type: "conjugaison", verbe: "to eat", q: "She usually ___ at noon.", r: "eats", explication: "usually → simple → eats." },
        { type: "conjugaison", verbe: "to eat", q: "She is ___ right now.", r: "eating", explication: "right now → continu → eating." },
        { type: "vraiFaux", affirmation: "On dit « I am liking this flat ».", r: false, explication: "« like » = verbe d'état → I like this flat." },
        { type: "traduction", sens: "fr-en", q: "Ils lisent en ce moment.", r: "they are reading at the moment", accepte: ["they're reading at the moment", "they are reading now", "they're reading now"], explication: "they are + reading." },
      ],
    },
    dialogue: {
      titre: "Une journée pas comme les autres",
      contexte: "Emma remarque que ta journée sort de l'ordinaire.",
      lignes: [
        { role: "Emma", en: "You usually work on Monday, right?", fr: "D'habitude tu travailles le lundi, non ?" },
        { role: "Toi", en: "Yes, but today I am resting!", fr: "Oui, mais aujourd'hui je me repose !" },
        { role: "Emma", en: "Lucky you! What are you doing?", fr: "La chance ! Qu'est-ce que tu fais ?" },
        { role: "Toi", en: "I'm reading in the garden. It's sunny.", fr: "Je lis dans le jardin. Il fait soleil." },
        { role: "Emma", en: "And tonight?", fr: "Et ce soir ?" },
        { role: "Toi", en: "Tonight we are watching a film with Leo.", fr: "Ce soir on regarde un film avec Leo." },
      ],
      aToi: [
        { consigne: "Dis « D'habitude je travaille le lundi »", r: "i usually work on monday", accepte: ["usually i work on monday", "i usually work on mondays"], explication: "Habitude → présent simple." },
        { consigne: "Dis « Mais aujourd'hui je me repose »", r: "but today i am resting", accepte: ["but today i'm resting"], explication: "Aujourd'hui → continu : I am resting." },
        { consigne: "Dis « Je lis dans le jardin »", r: "i'm reading in the garden", accepte: ["i am reading in the garden"], explication: "Action en cours → I'm reading." },
      ],
    },
    prononciation: {
      son: "dh",
      titre: "this / that / the : le TH doux, bien vibré",
      explication:
        "Rappel du TH « doux » [dh] : la langue TOUCHE les dents du haut et vibre : this [dhiss], that [dhat], the [dheu]. Ne le remplace ni par « z » ni par « d » : c'est LE son qui fait anglais.",
      technique: "Langue entre les dents, souffle en faisant vibrer : dhhh. Puis dhiss, dhat.",
      mots: [
        { en: "this", phon: "[DHISS]" },
        { en: "that", phon: "[DHAT]" },
        { en: "the moment", phon: "[dheu MO-meunt]" },
        { en: "tonight", phon: "[tou-NAÏT]" },
      ],
      phrase: "This week, that film is the best.",
    },
    bilan: {
      resume: [
        "Habitude → présent simple (every day, usually, never).",
        "Maintenant → présent continu (now, today, at the moment, Look!).",
        "Verbes d'état (like, want, know) → toujours simples.",
      ],
      conseil: "Écris deux phrases sur toi : une habitude (I usually…) et ce que tu fais là (I am…-ing).",
      motivation: "Choisir le bon temps sans réfléchir, c'est ça parler une langue. Tu y arrives déjà ! 🆚✨",
    },
  },

  // ==================== JOUR 43 · 7 JUILLET — RÉVISION SEMAINE 1 ====================
  {
    jour: 43,
    date: "7 juillet",
    mois: "juillet",
    titre: "Révision : ta première semaine de juillet",
    emoji: "🔁",
    objectif: "Ancrer l'heure, la routine, la fréquence et les deux présents.",
    intro:
      "Une semaine de juillet, déjà ! 🔁 Aujourd'hui on souffle et on consolide : l'heure, la routine, les adverbes de fréquence, like + -ing et le présent continu. Tout doit devenir réflexe.",
    vocabulaire: {
      intro: "Les mots-clés de la semaine, tous mélangés.",
      mots: [
        { id: "j43-oclock2", en: "o'clock", phon: "[o-klok]", fr: "… heures (pile)", exemple: "It's nine o'clock.", exempleFr: "Il est neuf heures." },
        { id: "j43-halfpast", en: "half past", phon: "[haf past]", fr: "et demie", exemple: "At half past eight.", exempleFr: "À huit heures et demie." },
        { id: "j43-getup2", en: "to get up", phon: "[guèt eup]", fr: "se lever", exemple: "I get up early.", exempleFr: "Je me lève tôt." },
        { id: "j43-early", en: "early", phon: "[eur-li]", fr: "tôt", exemple: "She gets up early.", exempleFr: "Elle se lève tôt." },
        { id: "j43-late", en: "late", phon: "[léït]", fr: "tard / en retard", exemple: "He is always late.", exempleFr: "Il est toujours en retard." },
        { id: "j43-usually2", en: "usually", phon: "[iou-jou-e-li]", fr: "d'habitude", exemple: "I usually walk.", exempleFr: "D'habitude, je marche." },
        { id: "j43-never2", en: "never", phon: "[nè-veur]", fr: "jamais", exemple: "I never smoke.", exempleFr: "Je ne fume jamais." },
        { id: "j43-now2", en: "right now", phon: "[raït naou]", fr: "là, tout de suite", exemple: "I am working right now.", exempleFr: "Je travaille là, tout de suite." },
      ],
    },
    grammaire: {
      titre: "Récap express de la semaine",
      regle:
        "1) L'heure : It's half past two ; at six o'clock. 2) Routine sans « se » : I get up, I get dressed. 3) Adverbes AVANT le verbe : I always drink coffee. 4) like/love/hate + -ing. 5) Présent continu : be + -ing pour maintenant.",
      analogie:
        "Cinq briques qui s'emboîtent : « I usually get up at seven, I love reading, but right now I am working. » — une seule phrase, toute ta semaine dedans !",
      exemples: [
        { en: "I usually get up at seven.", fr: "D'habitude je me lève à sept heures." },
        { en: "I love reading.", fr: "J'adore lire." },
        { en: "Right now, I am working.", fr: "Là, je travaille." },
        { en: "She is never late.", fr: "Elle n'est jamais en retard." },
      ],
      exercices: [
        { type: "trou", phrase: "It's ___ past seven. (7 h 30)", r: "half", explication: "half past seven = 7 h 30." },
        { type: "traduction", sens: "fr-en", q: "Je me lève toujours tôt.", r: "i always get up early", explication: "always avant le verbe." },
        { type: "traduction", sens: "fr-en", q: "Elle adore danser mais elle ne chante jamais.", r: "she loves dancing but she never sings", explication: "loves + -ing ; never + sings." },
        { type: "trou", phrase: "Look! It ___ raining. (est)", r: "is", explication: "Look! → continu : it is raining." },
        { type: "traduction", sens: "fr-en", q: "D'habitude je me réveille à sept heures, mais aujourd'hui je me repose.", r: "i usually wake up at seven, but today i am resting", accepte: ["i usually wake up at seven but today i'm resting", "usually i wake up at seven but today i am resting"], explication: "Habitude → simple ; today → continu." },
        { type: "vraiFaux", affirmation: "« I am liking this book » est correct.", r: false, explication: "like = verbe d'état → I like this book." },
      ],
    },
    conjugaison: {
      titre: "Simple ou continu ? Le test en 4 phrases",
      explication:
        "Repère l'indice, choisis le temps : every day → simple ; now / at the moment / Look! → continu. Et toujours le -s à la 3e personne du simple.",
      tableau: [
        { pronom: "every day", forme: "présent simple", exemple: "She works every day." },
        { pronom: "now", forme: "présent continu", exemple: "She is working now." },
        { pronom: "usually", forme: "présent simple", exemple: "I usually walk." },
        { pronom: "Look!", forme: "présent continu", exemple: "Look! It's raining." },
      ],
      exercices: [
        { type: "conjugaison", verbe: "to work", q: "She ___ every day.", r: "works", explication: "every day → simple → works." },
        { type: "conjugaison", verbe: "to work", q: "She is ___ now.", r: "working", explication: "now → continu → working." },
        { type: "conjugaison", verbe: "to get", q: "He ___ up at six every day.", r: "gets", explication: "Habitude → gets up." },
        { type: "conjugaison", verbe: "to listen", q: "They are ___ to music.", r: "listening", explication: "are + listening." },
      ],
    },
    dialogue: {
      titre: "Une semaine dans ta vie",
      contexte: "Emma fait le point sur tout ce que tu sais dire depuis lundi.",
      lignes: [
        { role: "Emma", en: "What time do you usually get up?", fr: "À quelle heure te lèves-tu d'habitude ?" },
        { role: "Toi", en: "I usually get up at seven o'clock.", fr: "D'habitude je me lève à sept heures." },
        { role: "Emma", en: "And what are you doing right now?", fr: "Et qu'est-ce que tu fais, là ?" },
        { role: "Toi", en: "Right now I am drinking a coffee.", fr: "Là, je bois un café." },
        { role: "Emma", en: "Do you like your new routine?", fr: "Aimes-tu ta nouvelle routine ?" },
        { role: "Toi", en: "Yes! I love learning English every day.", fr: "Oui ! J'adore apprendre l'anglais tous les jours." },
      ],
      aToi: [
        { consigne: "Dis « D'habitude je me lève à sept heures »", r: "i usually get up at seven o'clock", accepte: ["i usually get up at seven", "usually i get up at seven"], explication: "usually + présent simple." },
        { consigne: "Dis « Là, je bois un café »", r: "right now i am drinking a coffee", accepte: ["right now i'm drinking a coffee", "i am drinking a coffee right now", "i'm drinking a coffee right now"], explication: "Maintenant → continu." },
        { consigne: "Dis « J'adore apprendre l'anglais tous les jours »", r: "i love learning english every day", explication: "love + -ing + every day." },
      ],
    },
    prononciation: {
      son: "🔁",
      titre: "Récap des sons de la semaine",
      explication:
        "Les quatre sons travaillés : le h muet de hour, le [éï] de wake/take, le -ing du nez, le [aou] de now. Une phrase pour tout réviser d'un coup.",
      technique: "Lis la phrase lentement en soignant chaque son, puis de plus en plus vite.",
      mots: [
        { en: "hour", phon: "[AOU-eur] — h muet" },
        { en: "wake", phon: "[WÉÏK]" },
        { en: "reading", phon: "[RII-dingue]" },
        { en: "now", phon: "[NAOU]" },
      ],
      phrase: "Right now, I am reading — I wake up early every hour!",
    },
    bilan: {
      resume: [
        "L'heure, la routine, la fréquence : tout est en place.",
        "like/love/hate + -ing pour tes passions.",
        "Présent simple (habitude) vs continu (maintenant) : le bon réflexe.",
      ],
      conseil: "Raconte ta journée type en six phrases, puis dis ce que tu fais LÀ, tout de suite.",
      motivation: "Une semaine, un temps entier de plus dans ta poche. La suite va te plaire : on part dans le PASSÉ ! 🕰️",
    },
  },

  // ==================== JOUR 44 · 8 JUILLET — WAS / WERE ====================
  {
    jour: 44,
    date: "8 juillet",
    mois: "juillet",
    titre: "Hier : was / were",
    emoji: "🕰️",
    objectif: "Faire tes premiers pas dans le passé avec le passé de « to be ».",
    intro:
      "Moment historique : ton premier temps du PASSÉ ! 🕰️ Et on commence tout doux : was/were, le passé de to be. « I was tired » = j'étais fatiguée. Avec ça, tu peux déjà raconter plein de choses d'hier.",
    vocabulaire: {
      intro: "Les mots qui disent « avant » — les marqueurs du passé.",
      mots: [
        { id: "j44-yesterday", en: "yesterday", phon: "[yès-teur-dèï]", fr: "hier", exemple: "Yesterday I was at home.", exempleFr: "Hier, j'étais à la maison." },
        { id: "j44-lastnight", en: "last night", phon: "[last naït]", fr: "hier soir", exemple: "Last night we were tired.", exempleFr: "Hier soir, nous étions fatigués." },
        { id: "j44-lastweek", en: "last week", phon: "[last wiik]", fr: "la semaine dernière", exemple: "Last week I was on holiday.", exempleFr: "La semaine dernière, j'étais en vacances." },
        { id: "j44-ago", en: "ago", phon: "[e-gô]", fr: "il y a (+ durée)", exemple: "Two days ago.", exempleFr: "Il y a deux jours." },
        { id: "j44-athome", en: "at home", phon: "[at hôm]", fr: "à la maison", exemple: "I was at home.", exempleFr: "J'étais à la maison." },
        { id: "j44-atwork", en: "at work", phon: "[at weurk]", fr: "au travail", exemple: "She was at work.", exempleFr: "Elle était au travail." },
        { id: "j44-tired", en: "tired", phon: "[taï-eurd]", fr: "fatigué·e", exemple: "We were very tired.", exempleFr: "Nous étions très fatigués." },
        { id: "j44-party", en: "party", phon: "[par-ti]", fr: "fête", exemple: "The party was great!", exempleFr: "La fête était géniale !" },
      ],
    },
    grammaire: {
      titre: "was / were : le passé de to be",
      regle:
        "am / is → WAS ; are → WERE. I was, she was, it was ; you were, we were, they were. Négation : wasn't / weren't. Question : Was it good? Were you at home?",
      analogie:
        "Deux formes seulement pour tout le passé de be — encore plus simple que le présent ! Singulier → was, pluriel (et you) → were.",
      exemples: [
        { en: "I was at home yesterday.", fr: "J'étais à la maison hier." },
        { en: "They were at the party.", fr: "Ils étaient à la fête." },
        { en: "It wasn't cold.", fr: "Il ne faisait pas froid." },
        { en: "Were you tired?", fr: "Étais-tu fatiguée ?" },
      ],
      exercices: [
        { type: "trou", phrase: "I ___ at home yesterday. (étais)", r: "was", explication: "I → was." },
        { type: "trou", phrase: "They ___ at the party. (étaient)", r: "were", explication: "they → were." },
        { type: "traduction", sens: "fr-en", q: "La fête était géniale !", r: "the party was great", accepte: ["the party was great!"], explication: "the party = it → was." },
        { type: "trou", phrase: "___ you at work? (étais-tu)", r: "Were", accepte: ["were"], explication: "Question : Were you…?" },
        { type: "traduction", sens: "fr-en", q: "Hier soir, nous étions très fatigués.", r: "last night we were very tired", accepte: ["we were very tired last night"], explication: "we → were." },
        { type: "traduction", sens: "fr-en", q: "Il ne faisait pas froid il y a deux jours.", r: "it wasn't cold two days ago", accepte: ["it was not cold two days ago"], explication: "wasn't + « ago » après la durée." },
      ],
    },
    conjugaison: {
      titre: "Le tableau de was / were",
      explication:
        "Singulier (I, he, she, it) → was. Pluriel + you → were. Négations : wasn't, weren't. C'est le socle de TOUT le passé anglais.",
      tableau: [
        { pronom: "I / He / She / It", forme: "was", exemple: "She was happy." },
        { pronom: "You / We / They", forme: "were", exemple: "You were right." },
        { pronom: "négation", forme: "wasn't / weren't", exemple: "It wasn't easy. They weren't there." },
        { pronom: "question", forme: "Was…? / Were…?", exemple: "Was it good? Were you there?" },
      ],
      exercices: [
        { type: "conjugaison", verbe: "to be (passé)", q: "She ___ at work.", r: "was", explication: "she → was." },
        { type: "conjugaison", verbe: "to be (passé)", q: "We ___ at the party.", r: "were", explication: "we → were." },
        { type: "conjugaison", verbe: "to be (passé)", q: "It ___ not cold. (forme courte)", r: "was", accepte: ["wasn't"], explication: "it → was ; « it wasn't cold »." },
        { type: "traduction", sens: "fr-en", q: "Étais-tu à la maison hier ?", r: "were you at home yesterday", accepte: ["were you at home yesterday?"], explication: "Question : Were you…?" },
      ],
    },
    dialogue: {
      titre: "C'était comment, hier ?",
      contexte: "Emma veut tout savoir de ta soirée d'hier.",
      lignes: [
        { role: "Emma", en: "Where were you last night?", fr: "Où étais-tu hier soir ?" },
        { role: "Toi", en: "I was at Sarah's party!", fr: "J'étais à la fête de Sarah !" },
        { role: "Emma", en: "Oh! Was it good?", fr: "Oh ! C'était bien ?" },
        { role: "Toi", en: "Yes, it was great. The music was perfect.", fr: "Oui, c'était génial. La musique était parfaite." },
        { role: "Emma", en: "Were there many people?", fr: "Il y avait beaucoup de monde ?" },
        { role: "Toi", en: "Yes! But today I am very tired…", fr: "Oui ! Mais aujourd'hui je suis très fatiguée…" },
      ],
      aToi: [
        { consigne: "Dis « J'étais à la fête »", r: "i was at the party", explication: "« I was at the party »." },
        { consigne: "Demande « C'était bien ? »", r: "was it good", accepte: ["was it good?"], explication: "« Was it good? »." },
        { consigne: "Dis « C'était génial, la musique était parfaite »", r: "it was great, the music was perfect", accepte: ["it was great and the music was perfect", "it was great the music was perfect"], explication: "Deux « was » dans la même phrase !" },
      ],
    },
    prononciation: {
      son: "oz",
      titre: "was [woz] et were [weur]",
      explication:
        "« was » se prononce [woz] (un o court, pas « ouasse »), et « were » [weur], comme « beurre » avec un w. Dans une phrase rapide, ils deviennent tout légers : I was [aï-weuz] tired.",
      technique: "Dis « ouoz » d'un coup sec, puis « oueur ». Ensuite : I was tired, you were right, en liant tout.",
      mots: [
        { en: "was", phon: "[WOZ]" },
        { en: "were", phon: "[WEUR]" },
        { en: "wasn't", phon: "[WO-zeunt]" },
        { en: "yesterday", phon: "[YÈS-teur-dèï]" },
      ],
      phrase: "Yesterday I was tired, but you were fine.",
    },
    bilan: {
      resume: [
        "was (singulier) / were (pluriel + you) : le passé de be.",
        "Les marqueurs du passé : yesterday, last night, last week, ago.",
        "wasn't / weren't, et les questions Was it…? Were you…?",
      ],
      conseil: "Décris ta journée d'hier en trois phrases avec was/were : où tu étais, avec qui, comment c'était.",
      motivation: "Bienvenue dans le passé ! À partir de maintenant, tu peux RACONTER. C'est un super-pouvoir. 🕰️✨",
    },
  },
  // ==================== JOUR 45 · 9 JUILLET — LE PASSÉ EN -ED ====================
  {
    jour: 45,
    date: "9 juillet",
    mois: "juillet",
    titre: "Le passé en -ed",
    emoji: "📖",
    objectif: "Mettre n'importe quel verbe régulier au passé avec -ed.",
    intro:
      "Aujourd'hui, la machine à remonter le temps s'agrandit ! 📖 Pour la plupart des verbes, le passé est d'une simplicité folle : on ajoute -ed, et c'est pareil pour TOUT le monde. I worked, she worked, they worked. Zéro exception de personne !",
    vocabulaire: {
      intro: "Huit verbes réguliers très fréquents, avec leur passé.",
      mots: [
        { id: "j45-worked", en: "worked", phon: "[weurkt]", fr: "travaillé (passé)", exemple: "I worked yesterday.", exempleFr: "J'ai travaillé hier." },
        { id: "j45-watched", en: "watched", phon: "[wotcht]", fr: "regardé (passé)", exemple: "We watched a film.", exempleFr: "Nous avons regardé un film." },
        { id: "j45-played", en: "played", phon: "[plèïd]", fr: "joué (passé)", exemple: "They played tennis.", exempleFr: "Ils ont joué au tennis." },
        { id: "j45-visited", en: "visited", phon: "[vi-zi-tid]", fr: "visité (passé)", exemple: "She visited a flat.", exempleFr: "Elle a visité un appartement." },
        { id: "j45-cooked", en: "cooked", phon: "[koukt]", fr: "cuisiné (passé)", exemple: "I cooked pasta.", exempleFr: "J'ai cuisiné des pâtes." },
        { id: "j45-listened", en: "listened", phon: "[li-seund]", fr: "écouté (passé)", exemple: "He listened to music.", exempleFr: "Il a écouté de la musique." },
        { id: "j45-walked", en: "walked", phon: "[wokt]", fr: "marché (passé)", exemple: "We walked in the park.", exempleFr: "Nous avons marché dans le parc." },
        { id: "j45-stayed", en: "stayed", phon: "[stèïd]", fr: "resté (passé)", exemple: "I stayed at home.", exempleFr: "Je suis restée à la maison." },
      ],
    },
    grammaire: {
      titre: "verbe + -ed = passé, pour toutes les personnes",
      regle:
        "Le passé simple des verbes réguliers : verbe + -ed. I worked, you worked, she worked, we worked… LA MÊME forme pour tous ! Petites règles d'écriture : live → lived (déjà un e), study → studied (y → ied), stop → stopped (consonne doublée).",
      analogie:
        "En français : j'ai travaillé, tu as travaillé, elle a travaillé… l'anglais dit juste worked partout. Un seul mot à apprendre par verbe. Le passé anglais est un cadeau !",
      exemples: [
        { en: "I worked yesterday.", fr: "J'ai travaillé hier." },
        { en: "She visited two flats.", fr: "Elle a visité deux appartements." },
        { en: "We watched a film last night.", fr: "On a regardé un film hier soir." },
        { en: "They stayed at home.", fr: "Ils sont restés à la maison." },
      ],
      exercices: [
        { type: "trou", phrase: "I ___ yesterday. (travailler, passé)", r: "worked", explication: "work + -ed = worked." },
        { type: "trou", phrase: "She ___ two flats. (visiter, passé)", r: "visited", explication: "Pas de -s au passé : she visited." },
        { type: "traduction", sens: "fr-en", q: "Nous avons regardé un film hier soir.", r: "we watched a film last night", accepte: ["we watched a movie last night", "last night we watched a film"], explication: "watched + last night." },
        { type: "vraiFaux", affirmation: "Au passé, la 3e personne prend un -s : « she workeds ».", r: false, explication: "Non ! Le passé est identique pour tous : she worked." },
        { type: "trou", phrase: "study → ___ (au passé)", r: "studied", explication: "y → ied : studied." },
        { type: "traduction", sens: "fr-en", q: "Hier, j'ai cuisiné des pâtes et j'ai écouté de la musique.", r: "yesterday i cooked pasta and i listened to music", accepte: ["yesterday i cooked pasta and listened to music", "i cooked pasta and i listened to music yesterday"], explication: "Deux verbes en -ed reliés par and." },
      ],
    },
    conjugaison: {
      titre: "Écrire le -ed sans se tromper",
      explication:
        "Quatre cas : 1) normal → +ed (work → worked). 2) finit par e → +d (live → lived, dance → danced). 3) consonne + y → -ied (study → studied). 4) voyelle courte + consonne → on double (stop → stopped, plan → planned).",
      tableau: [
        { pronom: "normal", forme: "+ ed", exemple: "walk → walked" },
        { pronom: "finit en e", forme: "+ d", exemple: "live → lived" },
        { pronom: "consonne + y", forme: "y → ied", exemple: "study → studied" },
        { pronom: "voyelle + consonne", forme: "double + ed", exemple: "stop → stopped" },
      ],
      exercices: [
        { type: "trou", phrase: "live → ___ (au passé)", r: "lived", explication: "Déjà un e → lived." },
        { type: "trou", phrase: "stop → ___ (au passé)", r: "stopped", explication: "On double le p : stopped." },
        { type: "conjugaison", verbe: "to play", q: "They ___ tennis yesterday.", r: "played", explication: "voyelle + y → played (pas de ied)." },
        { type: "conjugaison", verbe: "to stay", q: "I ___ at home last night.", r: "stayed", explication: "stay → stayed." },
      ],
    },
    dialogue: {
      titre: "Hier soir, chacune son programme",
      contexte: "Emma et toi comparez vos soirées d'hier.",
      lignes: [
        { role: "Emma", en: "I stayed at home and I cooked. And you?", fr: "Je suis restée à la maison et j'ai cuisiné. Et toi ?" },
        { role: "Toi", en: "I watched a film with Leo.", fr: "J'ai regardé un film avec Leo." },
        { role: "Emma", en: "Nice! And after the film?", fr: "Sympa ! Et après le film ?" },
        { role: "Toi", en: "We listened to music and we talked.", fr: "On a écouté de la musique et on a discuté." },
        { role: "Emma", en: "You never stop!", fr: "Vous ne vous arrêtez jamais !" },
        { role: "Toi", en: "Ha! And this morning I walked to work.", fr: "Ha ! Et ce matin, je suis allée au travail à pied." },
      ],
      aToi: [
        { consigne: "Dis « J'ai regardé un film hier soir »", r: "i watched a film last night", accepte: ["i watched a movie last night", "last night i watched a film"], explication: "watched + last night." },
        { consigne: "Dis « On a écouté de la musique »", r: "we listened to music", explication: "listened TO music." },
        { consigne: "Dis « Je suis restée à la maison »", r: "i stayed at home", explication: "« I stayed at home »." },
      ],
    },
    prononciation: {
      son: "t/d/id",
      titre: "Les trois sons du -ed",
      explication:
        "Le -ed a TROIS prononciations : [t] après un son dur → worked [weurkt], watched [wotcht] ; [d] après un son doux → played [plèïd], listened [liseund] ; [id] seulement après t ou d → visited [vi-zi-tid], wanted [won-tid].",
      technique: "Ne dis JAMAIS « work-ède » : le e ne s'entend que dans visited/wanted. Essaie : workt, wotcht, plèïd, vi-zi-tid.",
      mots: [
        { en: "worked", phon: "[WEURKT] — ed = t" },
        { en: "played", phon: "[PLÈÏD] — ed = d" },
        { en: "visited", phon: "[VI-zi-tid] — ed = id" },
        { en: "cooked", phon: "[KOUKT] — ed = t" },
      ],
      phrase: "I worked, I cooked, then I visited a friend.",
    },
    bilan: {
      resume: [
        "Verbe + -ed = passé, identique pour toutes les personnes.",
        "Orthographe : lived, studied, stopped.",
        "Prononciation du -ed : [t], [d], ou [id] (après t/d seulement).",
      ],
      conseil: "Raconte ta soirée d'hier avec trois verbes en -ed : I watched…, I cooked…, I stayed…",
      motivation: "Tu conjugues déjà au passé la majorité des verbes anglais. En UN jour. Réalise ! 📖🔥",
    },
  },

  // ==================== JOUR 46 · 10 JUILLET — IRRÉGULIERS 1 ====================
  {
    jour: 46,
    date: "10 juillet",
    mois: "juillet",
    titre: "Verbes irréguliers, épisode 1",
    emoji: "🦸",
    objectif: "Mémoriser les 8 passés irréguliers les plus utiles.",
    intro:
      "Les verbes les plus fréquents ont un passé… rebelle ! 🦸 go → went, see → saw, have → had. Bonne nouvelle : ce sont toujours les mêmes, et il en faut peu pour beaucoup parler. Aujourd'hui : le top 8.",
    vocabulaire: {
      intro: "Le top 8 des passés irréguliers — à connaître par cœur.",
      mots: [
        { id: "j46-went", en: "went", phon: "[wènt]", fr: "allé (go)", exemple: "I went to Paris.", exempleFr: "Je suis allée à Paris." },
        { id: "j46-saw", en: "saw", phon: "[so]", fr: "vu (see)", exemple: "I saw a beautiful house.", exempleFr: "J'ai vu une belle maison." },
        { id: "j46-had", en: "had", phon: "[had]", fr: "eu (have)", exemple: "We had a good day.", exempleFr: "Nous avons passé une bonne journée." },
        { id: "j46-ate", en: "ate", phon: "[éït]", fr: "mangé (eat)", exemple: "She ate a pizza.", exempleFr: "Elle a mangé une pizza." },
        { id: "j46-came", en: "came", phon: "[kéïm]", fr: "venu (come)", exemple: "He came late.", exempleFr: "Il est venu en retard." },
        { id: "j46-took", en: "took", phon: "[touk]", fr: "pris (take)", exemple: "I took the bus.", exempleFr: "J'ai pris le bus." },
        { id: "j46-made", en: "made", phon: "[méïd]", fr: "fait (make)", exemple: "You made a cake!", exempleFr: "Tu as fait un gâteau !" },
        { id: "j46-got", en: "got", phon: "[got]", fr: "eu / reçu (get)", exemple: "I got a message.", exempleFr: "J'ai reçu un message." },
      ],
    },
    grammaire: {
      titre: "Les irréguliers : une forme à apprendre, pour tous",
      regle:
        "Certains verbes ne prennent pas -ed : leur passé change de forme. go → went, see → saw, have → had, eat → ate, come → came, take → took, make → made, get → got. Comme le -ed, la forme est LA MÊME pour toutes les personnes : I went, she went, they went.",
      analogie:
        "C'est comme les verbes français « aller → je suis allé » : irrégulier mais ultra-fréquent, donc on le retient vite à force de l'utiliser. 8 verbes = 80 % de tes récits !",
      exemples: [
        { en: "I went to the beach.", fr: "Je suis allée à la plage." },
        { en: "She saw her friends.", fr: "Elle a vu ses amis." },
        { en: "We had a great weekend.", fr: "On a passé un super weekend." },
        { en: "He took the train.", fr: "Il a pris le train." },
      ],
      exercices: [
        { type: "trou", phrase: "I ___ to Paris last week. (aller, passé)", r: "went", explication: "go → went." },
        { type: "trou", phrase: "She ___ a beautiful flat. (voir, passé)", r: "saw", explication: "see → saw." },
        { type: "traduction", sens: "fr-en", q: "Nous avons passé une bonne journée.", r: "we had a good day", explication: "have → had." },
        { type: "trou", phrase: "He ___ the bus this morning. (prendre, passé)", r: "took", explication: "take → took." },
        { type: "traduction", sens: "fr-en", q: "Hier, je suis allée à la plage et j'ai vu mes amis.", r: "yesterday i went to the beach and i saw my friends", accepte: ["yesterday i went to the beach and saw my friends", "i went to the beach and i saw my friends yesterday"], explication: "went + saw : deux irréguliers." },
        { type: "vraiFaux", affirmation: "Le passé de « go » est « goed ».", r: false, explication: "Non : go → went. C'est un irrégulier." },
      ],
    },
    conjugaison: {
      titre: "Le mini-tableau des 8 héros",
      explication:
        "Répète-les comme une comptine : go-went, see-saw, have-had, eat-ate, come-came, take-took, make-made, get-got. Trente secondes par jour, et ils sont à toi pour la vie.",
      tableau: [
        { pronom: "go / see", forme: "went / saw", exemple: "I went out. I saw Emma." },
        { pronom: "have / eat", forme: "had / ate", exemple: "She had lunch. She ate pasta." },
        { pronom: "come / take", forme: "came / took", exemple: "He came home. He took a shower." },
        { pronom: "make / get", forme: "made / got", exemple: "We made a cake. We got a gift." },
      ],
      exercices: [
        { type: "conjugaison", verbe: "to eat", q: "She ___ a pizza last night.", r: "ate", explication: "eat → ate." },
        { type: "conjugaison", verbe: "to come", q: "He ___ late yesterday.", r: "came", explication: "come → came." },
        { type: "conjugaison", verbe: "to make", q: "You ___ a cake!", r: "made", explication: "make → made." },
        { type: "conjugaison", verbe: "to get", q: "I ___ your message.", r: "got", explication: "get → got." },
      ],
    },
    dialogue: {
      titre: "Raconte ton weekend !",
      contexte: "Emma veut le récit complet de ton dernier weekend.",
      lignes: [
        { role: "Emma", en: "What did your weekend look like? Tell me everything!", fr: "Il ressemblait à quoi, ton weekend ? Raconte-moi tout !" },
        { role: "Toi", en: "Saturday, I went to the sea with Leo.", fr: "Samedi, je suis allée à la mer avec Leo." },
        { role: "Emma", en: "Lovely! What did you do there?", fr: "Adorable ! Qu'avez-vous fait là-bas ?" },
        { role: "Toi", en: "We saw the sunset and we ate a pizza.", fr: "On a vu le coucher de soleil et on a mangé une pizza." },
        { role: "Emma", en: "And Sunday?", fr: "Et dimanche ?" },
        { role: "Toi", en: "I stayed at home and I made a cake!", fr: "Je suis restée à la maison et j'ai fait un gâteau !" },
      ],
      aToi: [
        { consigne: "Dis « Je suis allée à la mer »", r: "i went to the sea", accepte: ["i went to the seaside"], explication: "go → went." },
        { consigne: "Dis « On a mangé une pizza »", r: "we ate a pizza", explication: "eat → ate." },
        { consigne: "Dis « J'ai fait un gâteau »", r: "i made a cake", explication: "make → made." },
      ],
    },
    prononciation: {
      son: "o",
      titre: "saw [so] : le O long et profond",
      explication:
        "« saw » se dit [so] avec un O long et grave, la bouche bien ronde — pas « saou » ! On retrouve ce son dans « walk » [wok] et « bought ». Le a + w fait [o] profond.",
      technique: "Fais un O de surprise (« oh ! ») et tiens-le : sooo. Puis : I saw, we walked.",
      mots: [
        { en: "saw", phon: "[SO] — o long" },
        { en: "walk", phon: "[WOK] — l muet" },
        { en: "went", phon: "[WÈNT]" },
        { en: "came", phon: "[KÉÏM]" },
      ],
      phrase: "I saw the sea and we walked.",
    },
    bilan: {
      resume: [
        "8 irréguliers en poche : went, saw, had, ate, came, took, made, got.",
        "Une seule forme pour toutes les personnes, comme -ed.",
        "La comptine go-went / see-saw à répéter chaque matin.",
      ],
      conseil: "Raconte ton dernier weekend en quatre phrases : went, saw, ate, made. À voix haute !",
      motivation: "Avec 8 petits mots, tu peux raconter ta vie entière au passé. Quel bond ! 🦸‍♀️",
    },
  },

  // ==================== JOUR 47 · 11 JUILLET — DID ====================
  {
    jour: 47,
    date: "11 juillet",
    mois: "juillet",
    titre: "Questions au passé : did",
    emoji: "❓",
    objectif: "Poser des questions et dire non au passé avec did / didn't.",
    intro:
      "Tu sais raconter — maintenant tu vas pouvoir INTERROGER ! ❓ Le mot magique du passé, c'est DID : Did you sleep well? I didn't go out. Un seul mot pour toutes les questions et négations du passé.",
    vocabulaire: {
      intro: "Des verbes pour questionner et répondre au passé.",
      mots: [
        { id: "j47-ask", en: "to ask", phon: "[ask]", fr: "demander", exemple: "Can I ask a question?", exempleFr: "Puis-je poser une question ?" },
        { id: "j47-answer", en: "to answer", phon: "[an-seur]", fr: "répondre", exemple: "Answer me, please!", exempleFr: "Réponds-moi, s'il te plaît !" },
        { id: "j47-remember", en: "to remember", phon: "[ri-mèm-beur]", fr: "se souvenir", exemple: "I remember that day.", exempleFr: "Je me souviens de ce jour." },
        { id: "j47-forget", en: "to forget", phon: "[for-guèt]", fr: "oublier", exemple: "Don't forget your keys!", exempleFr: "N'oublie pas tes clés !" },
        { id: "j47-sleep", en: "to sleep", phon: "[sliip]", fr: "dormir", exemple: "Did you sleep well?", exempleFr: "As-tu bien dormi ?" },
        { id: "j47-lastmonth", en: "last month", phon: "[last month]", fr: "le mois dernier", exemple: "Last month I was in Nice.", exempleFr: "Le mois dernier, j'étais à Nice." },
        { id: "j47-thismorning", en: "this morning", phon: "[dhiss mor-ningue]", fr: "ce matin", exemple: "This morning I got up late.", exempleFr: "Ce matin, je me suis levée tard." },
        { id: "j47-well", en: "well", phon: "[wèl]", fr: "bien", exemple: "I slept well.", exempleFr: "J'ai bien dormi." },
      ],
    },
    grammaire: {
      titre: "did + verbe de base = question ; didn't = négation",
      regle:
        "Question : Did + sujet + VERBE DE BASE → Did you sleep well? Did she visit the flat? Négation : didn't + verbe de base → I didn't go out. ATTENTION au piège : avec did/didn't, le verbe redevient NEUTRE (pas de went, pas de -ed !) : Did you GO (pas « did you went »).",
      analogie:
        "« did » prend le passé pour lui, comme « does » prenait le -s. Une fois que did est là, le verbe se repose : Did you see? I didn't see.",
      exemples: [
        { en: "Did you sleep well?", fr: "As-tu bien dormi ?" },
        { en: "Did she visit the flat?", fr: "A-t-elle visité l'appartement ?" },
        { en: "I didn't go out.", fr: "Je ne suis pas sortie." },
        { en: "We didn't watch TV.", fr: "On n'a pas regardé la télé." },
      ],
      exercices: [
        { type: "trou", phrase: "___ you sleep well? (question passé)", r: "Did", accepte: ["did"], explication: "Question au passé → Did." },
        { type: "trou", phrase: "Did you ___ the film? (voir — attention au piège)", r: "see", explication: "Après did → verbe de base : see (pas saw !)." },
        { type: "traduction", sens: "fr-en", q: "Je ne suis pas sortie hier soir.", r: "i didn't go out last night", accepte: ["i did not go out last night"], explication: "didn't + go (base)." },
        { type: "vraiFaux", affirmation: "On dit « Did you went to Paris? ».", r: false, explication: "Non ! did + base : Did you GO to Paris?" },
        { type: "traduction", sens: "fr-en", q: "As-tu visité l'appartement ce matin ?", r: "did you visit the flat this morning", accepte: ["did you visit the flat this morning?", "did you visit the apartment this morning"], explication: "Did you visit… (pas visited)." },
        { type: "traduction", sens: "fr-en", q: "Elle n'a pas oublié tes clés.", r: "she didn't forget your keys", accepte: ["she did not forget your keys"], explication: "didn't + forget." },
      ],
    },
    conjugaison: {
      titre: "La mécanique de did",
      explication:
        "Affirmatif : I went. Question : Did you go? Négation : I didn't go. Réponses courtes : Yes, I did. / No, I didn't. Le verbe principal reste TOUJOURS à la base après did.",
      tableau: [
        { pronom: "affirmatif", forme: "verbe au passé", exemple: "I went out." },
        { pronom: "question", forme: "Did + base", exemple: "Did you go out?" },
        { pronom: "négation", forme: "didn't + base", exemple: "I didn't go out." },
        { pronom: "réponse courte", forme: "Yes, I did / No, I didn't", exemple: "Did you eat? — Yes, I did." },
      ],
      exercices: [
        { type: "trou", phrase: "Did she ___ the bus? (prendre)", r: "take", explication: "did + take (pas took)." },
        { type: "trou", phrase: "Yes, I ___. (réponse courte à « Did you eat? »)", r: "did", explication: "« Yes, I did »." },
        { type: "conjugaison", verbe: "to sleep", q: "I ___ well last night. (affirmatif, passé)", r: "slept", explication: "sleep → slept (irrégulier)." },
        { type: "traduction", sens: "fr-en", q: "Non, je n'ai pas mangé.", r: "no, i didn't eat", accepte: ["no i didn't eat", "no, i did not eat"], explication: "didn't + eat." },
      ],
    },
    dialogue: {
      titre: "Le petit interrogatoire du matin",
      contexte: "Emma te cuisine (gentiment) sur ta soirée.",
      lignes: [
        { role: "Emma", en: "Did you sleep well?", fr: "As-tu bien dormi ?" },
        { role: "Toi", en: "Yes, I did! I slept nine hours.", fr: "Oui ! J'ai dormi neuf heures." },
        { role: "Emma", en: "Did you go out last night?", fr: "Es-tu sortie hier soir ?" },
        { role: "Toi", en: "No, I didn't. I stayed at home.", fr: "Non. Je suis restée à la maison." },
        { role: "Emma", en: "Did you watch the film?", fr: "As-tu regardé le film ?" },
        { role: "Toi", en: "Yes! But I didn't see the end… I slept!", fr: "Oui ! Mais je n'ai pas vu la fin… J'ai dormi !" },
      ],
      aToi: [
        { consigne: "Demande « As-tu bien dormi ? »", r: "did you sleep well", accepte: ["did you sleep well?"], explication: "« Did you sleep well? »." },
        { consigne: "Dis « Non, je ne suis pas sortie »", r: "no, i didn't go out", accepte: ["no i didn't go out", "no, i did not go out"], explication: "didn't + go out." },
        { consigne: "Dis « Je n'ai pas vu la fin »", r: "i didn't see the end", accepte: ["i did not see the end"], explication: "didn't + see (base)." },
      ],
    },
    prononciation: {
      son: "dnt",
      titre: "didn't : deux petits coups de langue",
      explication:
        "« didn't » se dit [DI-deunt], presque [didnt] en avalant le e : la langue tape deux fois derrière les dents. En vitesse : I didn't go [aï-didnt-gô].",
      technique: "Dis « di-dent » puis avale le « e » : didnt. Enchaîne : I didn't see, I didn't go.",
      mots: [
        { en: "didn't", phon: "[DI-deunt]" },
        { en: "did you", phon: "[di-djou] — liés !" },
        { en: "slept", phon: "[SLÈPT]" },
        { en: "asked", phon: "[ASKT]" },
      ],
      phrase: "Did you sleep? No, I didn't.",
    },
    bilan: {
      resume: [
        "Did + base pour les questions : Did you go?",
        "didn't + base pour les négations : I didn't see.",
        "Réponses courtes : Yes, I did. / No, I didn't.",
      ],
      conseil: "Pose trois questions en Did you…? à quelqu'un (ou à ton miroir !) sur sa journée d'hier.",
      motivation: "Questions, négations, récits : le passé n'a plus AUCUN secret pour toi. 🔎",
    },
  },

  // ==================== JOUR 48 · 12 JUILLET — HIER À L'AGENCE ====================
  {
    jour: 48,
    date: "12 juillet",
    mois: "juillet",
    titre: "Ma journée d'hier à l'agence",
    emoji: "🏢",
    objectif: "Raconter une journée de travail au passé — spécial immobilier.",
    intro:
      "Aujourd'hui, on mélange ton passé tout neuf et ton MÉTIER ! 🏢 Tu vas raconter une journée d'agence immobilière : les visites, les appels, les clients. C'est exactement ce qu'on te demandera en BTS et en entretien.",
    vocabulaire: {
      intro: "Le récit d'une journée d'agence, au passé.",
      mots: [
        { id: "j48-office", en: "office", phon: "[o-fiss]", fr: "bureau", exemple: "I arrived at the office at nine.", exempleFr: "Je suis arrivée au bureau à neuf heures." },
        { id: "j48-client", en: "client", phon: "[klaï-eunt]", fr: "client·e", exemple: "I called a client.", exempleFr: "J'ai appelé un client." },
        { id: "j48-showed", en: "showed", phon: "[chôd]", fr: "montré (show)", exemple: "I showed the flat.", exempleFr: "J'ai fait visiter l'appartement." },
        { id: "j48-called", en: "called", phon: "[kold]", fr: "appelé (call)", exemple: "She called the agency.", exempleFr: "Elle a appelé l'agence." },
        { id: "j48-meeting", en: "meeting", phon: "[mii-tingue]", fr: "réunion", exemple: "We had a meeting.", exempleFr: "Nous avons eu une réunion." },
        { id: "j48-appointment", en: "appointment", phon: "[e-poïnt-meunt]", fr: "rendez-vous", exemple: "I had an appointment at two.", exempleFr: "J'avais un rendez-vous à quatorze heures." },
        { id: "j48-keys", en: "keys", phon: "[kiiz]", fr: "clés", exemple: "I took the keys.", exempleFr: "J'ai pris les clés." },
        { id: "j48-signed", en: "signed", phon: "[saïnd]", fr: "signé (sign)", exemple: "The client signed!", exempleFr: "Le client a signé !" },
      ],
    },
    grammaire: {
      titre: "Raconter dans l'ordre : first, then, after that, finally",
      regle:
        "Pour un récit clair, on enchaîne avec : First (d'abord), Then (ensuite), After that (après ça), Finally (enfin). First I called the client, then I took the keys, after that we visited the flat, and finally he signed!",
      analogie:
        "Ce sont les panneaux indicateurs de ton récit. En français tu dis « d'abord, ensuite, après, enfin » — même logique, mêmes places dans la phrase.",
      exemples: [
        { en: "First, I checked my emails.", fr: "D'abord, j'ai regardé mes e-mails." },
        { en: "Then I called a client.", fr: "Ensuite j'ai appelé un client." },
        { en: "After that, we visited the flat.", fr: "Après ça, on a visité l'appartement." },
        { en: "Finally, he signed.", fr: "Enfin, il a signé." },
      ],
      exercices: [
        { type: "trou", phrase: "___, I checked my emails. (d'abord)", r: "First", accepte: ["first"], explication: "« First » = d'abord." },
        { type: "trou", phrase: "___ I called a client. (ensuite)", r: "Then", accepte: ["then"], explication: "« Then » = ensuite." },
        { type: "traduction", sens: "fr-en", q: "Enfin, le client a signé !", r: "finally, the client signed", accepte: ["finally the client signed", "finally, the client signed!"], explication: "« Finally » = enfin." },
        { type: "traduction", sens: "fr-en", q: "D'abord j'ai pris les clés, ensuite j'ai montré l'appartement.", r: "first i took the keys, then i showed the flat", accepte: ["first i took the keys then i showed the flat", "first i took the keys, then i showed the apartment"], explication: "took (irrégulier) + showed (-ed)." },
        { type: "traduction", sens: "fr-en", q: "Nous avons eu une réunion ce matin.", r: "we had a meeting this morning", explication: "have → had." },
      ],
    },
    conjugaison: {
      titre: "Passé mixte : -ed et irréguliers ensemble",
      explication:
        "Dans un vrai récit, les deux familles se mélangent : arrived, called, showed, signed (-ed) avec had, took, went, saw (irréguliers). C'est le moment de jongler !",
      tableau: [
        { pronom: "réguliers", forme: "-ed", exemple: "arrived, called, showed, signed" },
        { pronom: "irréguliers", forme: "forme spéciale", exemple: "had, took, went, saw" },
        { pronom: "question", forme: "Did + base", exemple: "Did you show the flat?" },
        { pronom: "négation", forme: "didn't + base", exemple: "He didn't sign." },
      ],
      exercices: [
        { type: "conjugaison", verbe: "to arrive", q: "I ___ at the office at nine.", r: "arrived", explication: "arrive → arrived." },
        { type: "conjugaison", verbe: "to take", q: "I ___ the keys.", r: "took", explication: "take → took." },
        { type: "conjugaison", verbe: "to show", q: "She ___ the flat to a client.", r: "showed", explication: "show → showed." },
        { type: "traduction", sens: "fr-en", q: "Il n'a pas signé hier.", r: "he didn't sign yesterday", accepte: ["he did not sign yesterday"], explication: "didn't + sign." },
      ],
    },
    dialogue: {
      titre: "Debrief de ta journée d'agence",
      contexte: "Emma joue ta collègue anglaise : raconte-lui ta journée d'hier.",
      lignes: [
        { role: "Emma", en: "So, how was your day yesterday?", fr: "Alors, comment était ta journée hier ?" },
        { role: "Toi", en: "Busy! First, I arrived at the office at nine.", fr: "Chargée ! D'abord, je suis arrivée au bureau à neuf heures." },
        { role: "Emma", en: "And then?", fr: "Et ensuite ?" },
        { role: "Toi", en: "Then I called two clients and I took the keys.", fr: "Ensuite j'ai appelé deux clients et j'ai pris les clés." },
        { role: "Emma", en: "Did you visit the flat?", fr: "Avez-vous visité l'appartement ?" },
        { role: "Toi", en: "Yes! I showed the flat at two o'clock.", fr: "Oui ! J'ai fait visiter à quatorze heures." },
        { role: "Emma", en: "And…? Did the client like it?", fr: "Et… ? Le client a aimé ?" },
        { role: "Toi", en: "He loved it. Finally, he signed!", fr: "Il a adoré. Et à la fin, il a signé !" },
      ],
      aToi: [
        { consigne: "Dis « Je suis arrivée au bureau à neuf heures »", r: "i arrived at the office at nine", accepte: ["i arrived at the office at nine o'clock", "i arrived at the office at 9"], explication: "arrived + at the office." },
        { consigne: "Dis « J'ai appelé deux clients »", r: "i called two clients", explication: "called = appelé." },
        { consigne: "Dis « J'ai fait visiter l'appartement »", r: "i showed the flat", accepte: ["i showed the apartment"], explication: "« to show » = montrer / faire visiter." },
        { consigne: "Dis « Enfin, il a signé ! »", r: "finally, he signed", accepte: ["finally he signed", "finally he signed!"], explication: "« Finally, he signed! »." },
      ],
    },
    prononciation: {
      son: "aï",
      titre: "client, signed : le [aï] caché",
      explication:
        "« client » se dit [KLAÏ-eunt] (pas « clian » !) et « signed » [SAÏND] — le g est muet, le i se dit [aï]. Même son dans « arrive » [e-RAÏV] et « final » [FAÏ-neul].",
      technique: "Pense « aïe ! » : kl-AÏ-eunt, s-AÏ-nd. Le mot « sign » ne fait qu'une syllabe.",
      mots: [
        { en: "client", phon: "[KLAÏ-eunt]" },
        { en: "signed", phon: "[SAÏND] — g muet" },
        { en: "arrived", phon: "[e-RAÏVD]" },
        { en: "finally", phon: "[FAÏ-neu-li]" },
      ],
      phrase: "Finally, my client signed!",
    },
    bilan: {
      resume: [
        "Le récit pro : first, then, after that, finally.",
        "Vocabulaire d'agence au passé : arrived, called, showed, signed, had a meeting.",
        "Réguliers et irréguliers mélangés dans un vrai récit.",
      ],
      conseil: "Raconte (à voix haute !) ta dernière journée de travail ou de cours en quatre étapes : First… Then… After that… Finally…",
      motivation: "Tu viens de faire ton premier debrief professionnel en anglais. En entretien, ça fera mouche ! 🏢🌟",
    },
  },

  // ==================== JOUR 49 · 13 JUILLET — VACANCES PASSÉES ====================
  {
    jour: 49,
    date: "13 juillet",
    mois: "juillet",
    titre: "Mes dernières vacances",
    emoji: "🧳",
    objectif: "Raconter un voyage au passé — et 6 nouveaux irréguliers.",
    intro:
      "Parlons vacances ! 🧳 Raconter un voyage, c'est LE sujet de conversation universel. Au passage, tu gagnes 6 nouveaux verbes irréguliers super utiles : flew, swam, bought, slept, spoke, wrote.",
    vocabulaire: {
      intro: "Le kit du récit de voyage.",
      mots: [
        { id: "j49-holiday", en: "holiday", phon: "[ho-li-dèï]", fr: "vacances", exemple: "I was on holiday.", exempleFr: "J'étais en vacances." },
        { id: "j49-flew", en: "flew", phon: "[flou]", fr: "pris l'avion (fly)", exemple: "We flew to Spain.", exempleFr: "Nous sommes allés en Espagne en avion." },
        { id: "j49-swam", en: "swam", phon: "[swam]", fr: "nagé (swim)", exemple: "I swam every day.", exempleFr: "J'ai nagé tous les jours." },
        { id: "j49-bought", en: "bought", phon: "[bot]", fr: "acheté (buy)", exemple: "She bought a souvenir.", exempleFr: "Elle a acheté un souvenir." },
        { id: "j49-slept", en: "slept", phon: "[slèpt]", fr: "dormi (sleep)", exemple: "We slept in a small hotel.", exempleFr: "Nous avons dormi dans un petit hôtel." },
        { id: "j49-spoke", en: "spoke", phon: "[spôk]", fr: "parlé (speak)", exemple: "I spoke English!", exempleFr: "J'ai parlé anglais !" },
        { id: "j49-wrote", en: "wrote", phon: "[rôt]", fr: "écrit (write)", exemple: "He wrote a postcard.", exempleFr: "Il a écrit une carte postale." },
        { id: "j49-amazing", en: "amazing", phon: "[e-méï-zingue]", fr: "incroyable", exemple: "The view was amazing.", exempleFr: "La vue était incroyable." },
      ],
    },
    grammaire: {
      titre: "Le récit de voyage : was + passés + adjectifs",
      regle:
        "Un bon récit de vacances mélange : le décor avec was/were (The hotel was small, the view was amazing), les actions au passé (we flew, I swam, she bought), et des adjectifs qui donnent vie (amazing, beautiful, perfect).",
      analogie:
        "Comme en français : « c'était » pour l'ambiance (it was), « on a fait » pour les actions (we swam, we visited). Décor + action = récit vivant.",
      exemples: [
        { en: "Last summer, we flew to Spain.", fr: "L'été dernier, on est allés en Espagne en avion." },
        { en: "The hotel was small but nice.", fr: "L'hôtel était petit mais sympa." },
        { en: "I swam every morning.", fr: "Je nageais chaque matin." },
        { en: "It was amazing!", fr: "C'était incroyable !" },
      ],
      exercices: [
        { type: "trou", phrase: "We ___ to Spain. (prendre l'avion, passé)", r: "flew", explication: "fly → flew." },
        { type: "trou", phrase: "I ___ every day. (nager, passé)", r: "swam", explication: "swim → swam." },
        { type: "traduction", sens: "fr-en", q: "Elle a acheté un souvenir.", r: "she bought a souvenir", explication: "buy → bought." },
        { type: "traduction", sens: "fr-en", q: "La vue était incroyable.", r: "the view was amazing", explication: "was + amazing." },
        { type: "traduction", sens: "fr-en", q: "Nous avons dormi dans un petit hôtel et j'ai parlé anglais.", r: "we slept in a small hotel and i spoke english", explication: "slept + spoke : deux irréguliers." },
        { type: "vraiFaux", affirmation: "Le passé de « buy » est « buyed ».", r: false, explication: "Non : buy → bought [bot]." },
      ],
    },
    conjugaison: {
      titre: "6 nouveaux irréguliers (épisode 2)",
      explication:
        "La comptine s'allonge : fly-flew, swim-swam, buy-bought, sleep-slept, speak-spoke, write-wrote. Avec les 8 d'avant, te voilà à 14 — de quoi raconter presque tout !",
      tableau: [
        { pronom: "fly / swim", forme: "flew / swam", exemple: "We flew. I swam." },
        { pronom: "buy / sleep", forme: "bought / slept", exemple: "She bought a bag. We slept well." },
        { pronom: "speak / write", forme: "spoke / wrote", exemple: "I spoke English. He wrote a card." },
        { pronom: "question", forme: "Did you fly…?", exemple: "Did you fly to Spain? — Yes, we did." },
      ],
      exercices: [
        { type: "conjugaison", verbe: "to speak", q: "I ___ English on holiday.", r: "spoke", explication: "speak → spoke." },
        { type: "conjugaison", verbe: "to write", q: "He ___ a postcard.", r: "wrote", explication: "write → wrote." },
        { type: "conjugaison", verbe: "to sleep", q: "We ___ in a hotel.", r: "slept", explication: "sleep → slept." },
        { type: "trou", phrase: "Did you ___ in the sea? (nager — après did)", r: "swim", explication: "Après did → base : swim." },
      ],
    },
    dialogue: {
      titre: "Souvenirs de voyage",
      contexte: "Emma et toi comparez vos dernières vacances.",
      lignes: [
        { role: "Emma", en: "Where did you go on holiday last year?", fr: "Où es-tu partie en vacances l'an dernier ?" },
        { role: "Toi", en: "We flew to Spain, near the sea.", fr: "On est allés en Espagne en avion, près de la mer." },
        { role: "Emma", en: "Nice! What did you do there?", fr: "Sympa ! Qu'as-tu fait là-bas ?" },
        { role: "Toi", en: "I swam every morning and we visited a lot.", fr: "Je nageais chaque matin et on a beaucoup visité." },
        { role: "Emma", en: "Did you speak English?", fr: "As-tu parlé anglais ?" },
        { role: "Toi", en: "Yes, I did! And I bought too many souvenirs…", fr: "Oui ! Et j'ai acheté trop de souvenirs…" },
        { role: "Emma", en: "Ha! Was it a good trip?", fr: "Ha ! C'était un beau voyage ?" },
        { role: "Toi", en: "It was amazing!", fr: "C'était incroyable !" },
      ],
      aToi: [
        { consigne: "Dis « On est allés en Espagne en avion »", r: "we flew to spain", explication: "fly → flew." },
        { consigne: "Dis « Je nageais chaque matin »", r: "i swam every morning", explication: "swim → swam." },
        { consigne: "Dis « J'ai parlé anglais ! »", r: "i spoke english", accepte: ["i spoke english!"], explication: "speak → spoke." },
        { consigne: "Dis « C'était incroyable ! »", r: "it was amazing", accepte: ["it was amazing!"], explication: "« It was amazing! »." },
      ],
    },
    prononciation: {
      son: "gh",
      titre: "bought : le « gh » fantôme",
      explication:
        "En anglais, « gh » est souvent MUET : bought [bot], night [naït], right [raït], flight [flaït]. Quatre lettres écrites, zéro son ! « bought » ne fait qu'une syllabe : [bot].",
      technique: "Écris « bought » dans ta tête, mais dis juste [bot]. Puis : naït, raït, flaït.",
      mots: [
        { en: "bought", phon: "[BOT] — gh muet" },
        { en: "night", phon: "[NAÏT]" },
        { en: "flight", phon: "[FLAÏT]" },
        { en: "wrote", phon: "[RÔT] — w muet" },
      ],
      phrase: "Last night, I bought a flight ticket.",
    },
    bilan: {
      resume: [
        "Le récit de voyage : was/were pour le décor, passés pour l'action.",
        "6 nouveaux irréguliers : flew, swam, bought, slept, spoke, wrote.",
        "Les lettres fantômes : bought [bot], night [naït], wrote [rôt].",
      ],
      conseil: "Raconte tes dernières vraies vacances en cinq phrases. Décor (it was…) puis actions (we went, I swam…).",
      motivation: "14 verbes irréguliers, un récit de voyage complet… tu tiens une VRAIE conversation de vacances ! 🧳☀️",
    },
  },

  // ==================== JOUR 50 · 14 JUILLET — RÉVISION PASSÉ ====================
  {
    jour: 50,
    date: "14 juillet",
    mois: "juillet",
    titre: "14 juillet : tout le passé en fête",
    emoji: "🎆",
    objectif: "Consolider TOUT le passé — was/were, -ed, irréguliers, did.",
    intro:
      "Joyeux 14 juillet ! 🎆 Jour de fête nationale… et jour 50 de ton parcours ! Pour marquer le coup, grande révision du passé : was/were, -ed, les 14 irréguliers et did. Et ce soir, feux d'artifice — fireworks !",
    vocabulaire: {
      intro: "Le 14 juillet en anglais — pour raconter TA fête nationale.",
      mots: [
        { id: "j50-fireworks", en: "fireworks", phon: "[faï-eur-weurks]", fr: "feu d'artifice", exemple: "We watched the fireworks.", exempleFr: "On a regardé le feu d'artifice." },
        { id: "j50-national", en: "national day", phon: "[na-cheu-neul dèï]", fr: "fête nationale", exemple: "July 14th is the French national day.", exempleFr: "Le 14 juillet est la fête nationale française." },
        { id: "j50-parade", en: "parade", phon: "[pe-réïd]", fr: "défilé", exemple: "There was a parade.", exempleFr: "Il y avait un défilé." },
        { id: "j50-flag", en: "flag", phon: "[flag]", fr: "drapeau", exemple: "The French flag is blue, white and red.", exempleFr: "Le drapeau français est bleu, blanc, rouge." },
        { id: "j50-crowd", en: "crowd", phon: "[kraoud]", fr: "foule", exemple: "There was a big crowd.", exempleFr: "Il y avait une grande foule." },
        { id: "j50-danced", en: "danced", phon: "[danst]", fr: "dansé (dance)", exemple: "We danced all night.", exempleFr: "On a dansé toute la nuit." },
        { id: "j50-celebrated", en: "celebrated", phon: "[sè-lè-bréï-tid]", fr: "fêté (celebrate)", exemple: "We celebrated with friends.", exempleFr: "On a fêté ça avec des amis." },
        { id: "j50-sky", en: "sky", phon: "[skaï]", fr: "ciel", exemple: "The sky was full of colours.", exempleFr: "Le ciel était plein de couleurs." },
      ],
    },
    grammaire: {
      titre: "Le grand récap du passé",
      regle:
        "Quatre outils, un seul passé : 1) was/were pour être ; 2) verbe + -ed pour les réguliers ; 3) les irréguliers (went, saw, had, ate, came, took, made, got, flew, swam, bought, slept, spoke, wrote) ; 4) did/didn't + base pour questions et négations.",
      analogie:
        "C'est ta boîte à outils complète : le décor (was), les actions (-ed / irréguliers), les questions (did). Avec ça, tu racontes n'importe quel souvenir.",
      exemples: [
        { en: "Last year, we watched the fireworks.", fr: "L'an dernier, on a regardé le feu d'artifice." },
        { en: "The sky was full of colours.", fr: "Le ciel était plein de couleurs." },
        { en: "We danced all night!", fr: "On a dansé toute la nuit !" },
        { en: "Did you see the parade?", fr: "As-tu vu le défilé ?" },
      ],
      exercices: [
        { type: "traduction", sens: "fr-en", q: "On a regardé le feu d'artifice hier soir.", r: "we watched the fireworks last night", accepte: ["last night we watched the fireworks"], explication: "watched + last night." },
        { type: "trou", phrase: "The sky ___ full of colours. (était)", r: "was", explication: "the sky = it → was." },
        { type: "trou", phrase: "___ you see the parade? (question passé)", r: "Did", accepte: ["did"], explication: "Did you see…?" },
        { type: "traduction", sens: "fr-en", q: "Il y avait une grande foule et on a dansé toute la nuit.", r: "there was a big crowd and we danced all night", explication: "there was + danced." },
        { type: "traduction", sens: "fr-en", q: "Je n'ai pas vu le défilé, mais j'ai vu le feu d'artifice.", r: "i didn't see the parade, but i saw the fireworks", accepte: ["i didn't see the parade but i saw the fireworks"], explication: "didn't see / saw : les deux formes !" },
        { type: "vraiFaux", affirmation: "« There was a parade » veut dire « il y avait un défilé ».", r: true, explication: "Oui : there is → there was au passé." },
      ],
    },
    conjugaison: {
      titre: "there was / there were : il y avait",
      explication:
        "Le « there is / there are » de juin passe au passé : There WAS a parade (singulier), There WERE fireworks (pluriel). Négation : there wasn't / there weren't.",
      tableau: [
        { pronom: "singulier", forme: "there was", exemple: "There was a big crowd." },
        { pronom: "pluriel", forme: "there were", exemple: "There were many people." },
        { pronom: "négation", forme: "there wasn't / weren't", exemple: "There wasn't a parade." },
        { pronom: "question", forme: "Was there…?", exemple: "Was there music? — Yes, there was!" },
      ],
      exercices: [
        { type: "trou", phrase: "There ___ a parade this morning. (il y avait)", r: "was", explication: "Singulier → there was." },
        { type: "trou", phrase: "There ___ many people. (il y avait, pluriel)", r: "were", explication: "Pluriel → there were." },
        { type: "conjugaison", verbe: "to dance", q: "We ___ all night.", r: "danced", explication: "dance → danced." },
        { type: "conjugaison", verbe: "to celebrate", q: "They ___ with friends.", r: "celebrated", explication: "celebrate → celebrated." },
      ],
    },
    dialogue: {
      titre: "Raconter le 14 juillet à Emma",
      contexte: "Emma, curieuse, te demande comment les Français fêtent le 14 juillet.",
      lignes: [
        { role: "Emma", en: "So, what did you do for the national day?", fr: "Alors, qu'as-tu fait pour la fête nationale ?" },
        { role: "Toi", en: "We celebrated with friends near the sea.", fr: "On a fêté ça avec des amis près de la mer." },
        { role: "Emma", en: "Did you watch the fireworks?", fr: "Avez-vous regardé le feu d'artifice ?" },
        { role: "Toi", en: "Yes! The sky was full of colours. It was amazing.", fr: "Oui ! Le ciel était plein de couleurs. C'était incroyable." },
        { role: "Emma", en: "Was there a big crowd?", fr: "Il y avait beaucoup de monde ?" },
        { role: "Toi", en: "Yes, there were many people, and we danced all night!", fr: "Oui, il y avait plein de gens, et on a dansé toute la nuit !" },
      ],
      aToi: [
        { consigne: "Dis « On a fêté ça avec des amis »", r: "we celebrated with friends", explication: "celebrated = fêté." },
        { consigne: "Dis « Le ciel était plein de couleurs »", r: "the sky was full of colours", accepte: ["the sky was full of colors"], explication: "was + full of colours." },
        { consigne: "Dis « Il y avait plein de gens »", r: "there were many people", accepte: ["there were a lot of people"], explication: "Pluriel → there were." },
        { consigne: "Dis « On a dansé toute la nuit ! »", r: "we danced all night", accepte: ["we danced all night!"], explication: "danced + all night." },
      ],
    },
    prononciation: {
      son: "🎆",
      titre: "Les sons du passé, en feu d'artifice",
      explication:
        "Bouquet final des sons de la semaine : le -ed [t/d/id] (danced, celebrated), le [o] de saw/bought, le gh muet de night, le [aï] de sky/fireworks.",
      technique: "Dis la phrase du jour comme un mini-feu d'artifice : chaque mot compte, chaque son claque.",
      mots: [
        { en: "fireworks", phon: "[FAÏ-eur-weurks]" },
        { en: "danced", phon: "[DANST] — ed = t" },
        { en: "night", phon: "[NAÏT] — gh muet" },
        { en: "sky", phon: "[SKAÏ]" },
      ],
      phrase: "Last night, the fireworks danced in the sky.",
    },
    bilan: {
      resume: [
        "TOUT le passé révisé : was/were, -ed, 14 irréguliers, did/didn't.",
        "there was / there were = il y avait.",
        "Tu peux raconter une fête entière en anglais !",
      ],
      conseil: "Ce soir, raconte ta journée du 14 juillet en anglais — c'est le sujet parfait pour tout utiliser.",
      motivation: "Jour 50 un 14 juillet : double feu d'artifice ! Le passé est à toi. La semaine prochaine : LE FUTUR. 🎆🚀",
    },
  },

  // ==================== JOUR 51 · 15 JUILLET — GOING TO ====================
  {
    jour: 51,
    date: "15 juillet",
    mois: "juillet",
    titre: "Demain : going to",
    emoji: "🚀",
    objectif: "Parler de tes projets avec be going to.",
    intro:
      "Après le passé… le FUTUR ! 🚀 Pour parler de tes projets, l'anglais adore « be going to » : I'm going to visit a flat tomorrow. Tu connais déjà be + -ing, donc tu as fait 90 % du chemin !",
    vocabulaire: {
      intro: "Les mots qui regardent devant.",
      mots: [
        { id: "j51-tomorrow", en: "tomorrow", phon: "[tou-mo-rô]", fr: "demain", exemple: "See you tomorrow!", exempleFr: "À demain !" },
        { id: "j51-nextweek", en: "next week", phon: "[nèxt wiik]", fr: "la semaine prochaine", exemple: "Next week I'm going to rest.", exempleFr: "La semaine prochaine, je vais me reposer." },
        { id: "j51-nextmonth", en: "next month", phon: "[nèxt month]", fr: "le mois prochain", exemple: "Next month we move.", exempleFr: "Le mois prochain, on déménage." },
        { id: "j51-soon", en: "soon", phon: "[soun]", fr: "bientôt", exemple: "See you soon!", exempleFr: "À bientôt !" },
        { id: "j51-plan", en: "plan", phon: "[plan]", fr: "projet / plan", exemple: "What are your plans?", exempleFr: "Quels sont tes projets ?" },
        { id: "j51-weekend", en: "weekend", phon: "[wii-kènd]", fr: "week-end", exemple: "This weekend, I'm going to relax.", exempleFr: "Ce week-end, je vais me détendre." },
        { id: "j51-relax", en: "to relax", phon: "[ri-lax]", fr: "se détendre", exemple: "I just want to relax.", exempleFr: "Je veux juste me détendre." },
        { id: "j51-move", en: "to move", phon: "[mouv]", fr: "déménager / bouger", exemple: "They are going to move.", exempleFr: "Ils vont déménager." },
      ],
    },
    grammaire: {
      titre: "be going to + verbe : le futur des projets",
      regle:
        "Pour un projet ou une intention : be + going to + verbe de base. I'm going to visit a flat. She's going to call the client. Négation : I'm not going to work. Question : Are you going to come?",
      analogie:
        "Le français dit pareil : « je VAIS visiter ». be going to = « aller » + infinitif. C'est le futur le plus naturel pour tout ce qui est prévu.",
      exemples: [
        { en: "I'm going to visit a flat tomorrow.", fr: "Je vais visiter un appartement demain." },
        { en: "She's going to call the client.", fr: "Elle va appeler le client." },
        { en: "We're going to move next month.", fr: "On va déménager le mois prochain." },
        { en: "Are you going to come?", fr: "Tu vas venir ?" },
      ],
      exercices: [
        { type: "trou", phrase: "I'm ___ to visit a flat. (futur proche)", r: "going", explication: "be going to + base." },
        { type: "traduction", sens: "fr-en", q: "Elle va appeler le client.", r: "she is going to call the client", accepte: ["she's going to call the client"], explication: "she's going to + call." },
        { type: "traduction", sens: "fr-en", q: "On va déménager le mois prochain.", r: "we are going to move next month", accepte: ["we're going to move next month"], explication: "going to move + next month." },
        { type: "trou", phrase: "___ you going to come? (question)", r: "Are", accepte: ["are"], explication: "Are you going to…?" },
        { type: "traduction", sens: "fr-en", q: "Je ne vais pas travailler ce week-end.", r: "i'm not going to work this weekend", accepte: ["i am not going to work this weekend"], explication: "I'm not going to + base." },
        { type: "traduction", sens: "fr-en", q: "Demain, je vais me lever tôt et je vais nager.", r: "tomorrow i'm going to get up early and i'm going to swim", accepte: ["tomorrow i am going to get up early and i am going to swim", "tomorrow i'm going to get up early and swim"], explication: "Deux projets enchaînés." },
      ],
    },
    conjugaison: {
      titre: "Conjuguer be going to",
      explication:
        "Seul « be » se conjugue : I'm going to…, she's going to…, they're going to… Le verbe derrière reste à la base. Astuce : à l'oral rapide, « going to » devient « gonna » [go-na] — tu l'entendras partout dans les films !",
      tableau: [
        { pronom: "I", forme: "am going to", exemple: "I'm going to sleep." },
        { pronom: "She / He / It", forme: "is going to", exemple: "She's going to sign." },
        { pronom: "You / We / They", forme: "are going to", exemple: "They're going to move." },
        { pronom: "oral rapide", forme: "gonna", exemple: "I'm gonna call you. (très familier)" },
      ],
      exercices: [
        { type: "conjugaison", verbe: "to be", q: "She ___ going to sign tomorrow.", r: "is", explication: "she → is going to." },
        { type: "conjugaison", verbe: "to be", q: "They ___ going to move.", r: "are", explication: "they → are going to." },
        { type: "trou", phrase: "I'm going to ___ early. (se lever)", r: "get up", explication: "going to + get up (base)." },
        { type: "vraiFaux", affirmation: "« gonna » est la version orale familière de « going to ».", r: true, explication: "Oui — à comprendre partout, à utiliser entre amis." },
      ],
    },
    dialogue: {
      titre: "Projets de week-end",
      contexte: "Emma et toi préparez le week-end qui arrive.",
      lignes: [
        { role: "Emma", en: "What are your plans for the weekend?", fr: "Quels sont tes projets pour le week-end ?" },
        { role: "Toi", en: "Saturday, I'm going to visit a flat with a client.", fr: "Samedi, je vais faire visiter un appartement à un client." },
        { role: "Emma", en: "On a Saturday? You work too much!", fr: "Un samedi ? Tu travailles trop !" },
        { role: "Toi", en: "Ha! But Sunday, I'm going to relax at the beach.", fr: "Ha ! Mais dimanche, je vais me détendre à la plage." },
        { role: "Emma", en: "Good idea. Are you going to swim?", fr: "Bonne idée. Tu vas nager ?" },
        { role: "Toi", en: "Of course! And I'm not going to think about work!", fr: "Bien sûr ! Et je ne vais pas penser au travail !" },
      ],
      aToi: [
        { consigne: "Dis « Je vais visiter un appartement samedi »", r: "i'm going to visit a flat on saturday", accepte: ["i am going to visit a flat on saturday", "i'm going to visit a flat saturday", "on saturday i'm going to visit a flat"], explication: "going to visit + on Saturday." },
        { consigne: "Dis « Dimanche, je vais me détendre à la plage »", r: "sunday, i'm going to relax at the beach", accepte: ["on sunday i'm going to relax at the beach", "sunday i am going to relax at the beach"], explication: "going to relax." },
        { consigne: "Dis « Je ne vais pas penser au travail ! »", r: "i'm not going to think about work", accepte: ["i am not going to think about work", "i'm not going to think about work!"], explication: "I'm not going to + think." },
      ],
    },
    prononciation: {
      son: "ou-e",
      titre: "tomorrow, soon : les O qui changent",
      explication:
        "« tomorrow » se dit [tou-MO-rô] (premier o = ou, dernier = ô), « soon » [SOUN] avec un ou long. Le même O s'écrit pareil mais se dit autrement — écoute plutôt que de lire !",
      technique: "Découpe : tou-MO-rô. Accent au milieu. Puis soon avec un « ou » qui dure : souun.",
      mots: [
        { en: "tomorrow", phon: "[tou-MO-rô]" },
        { en: "soon", phon: "[SOUN] — ou long" },
        { en: "going to", phon: "[GO-ingue tou]" },
        { en: "gonna", phon: "[GO-na] — version rapide" },
      ],
      phrase: "Tomorrow I'm going to see you soon — well, very soon!",
    },
    bilan: {
      resume: [
        "be going to + base = le futur des projets et intentions.",
        "Marqueurs du futur : tomorrow, next week, soon, this weekend.",
        "« gonna » = going to à l'oral (films, chansons).",
      ],
      conseil: "Dis tes trois projets du week-end avec I'm going to… — et un truc que tu ne vas PAS faire !",
      motivation: "Passé ✓, présent ✓, futur ✓ : tu navigues maintenant dans les TROIS dimensions du temps ! 🚀",
    },
  },

  // ==================== JOUR 52 · 16 JUILLET — WILL ====================
  {
    jour: 52,
    date: "16 juillet",
    mois: "juillet",
    titre: "will : promesses et prédictions",
    emoji: "🔮",
    objectif: "Utiliser will pour les promesses, décisions et prédictions.",
    intro:
      "Deuxième façon de parler du futur : WILL ! 🔮 C'est le futur des promesses (I will help you), des décisions prises sur le moment (I'll take it!) et des prédictions (It will rain). Encore plus simple que going to.",
    vocabulaire: {
      intro: "Le vocabulaire des promesses et de l'avenir.",
      mots: [
        { id: "j52-promise", en: "to promise", phon: "[pro-miss]", fr: "promettre", exemple: "I promise!", exempleFr: "Je te le promets !" },
        { id: "j52-probably", en: "probably", phon: "[pro-be-bli]", fr: "probablement", exemple: "It will probably rain.", exempleFr: "Il va probablement pleuvoir." },
        { id: "j52-sure", en: "sure", phon: "[chour]", fr: "sûr·e", exemple: "Are you sure?", exempleFr: "Tu es sûre ?" },
        { id: "j52-future", en: "future", phon: "[fiou-tcheur]", fr: "futur / avenir", exemple: "The future is bright.", exempleFr: "L'avenir est radieux." },
        { id: "j52-hope", en: "to hope", phon: "[hôp]", fr: "espérer", exemple: "I hope you will come.", exempleFr: "J'espère que tu viendras." },
        { id: "j52-think", en: "to think", phon: "[think]", fr: "penser", exemple: "I think it will be sunny.", exempleFr: "Je pense qu'il fera soleil." },
        { id: "j52-oneday", en: "one day", phon: "[wan dèï]", fr: "un jour", exemple: "One day, I will speak English perfectly.", exempleFr: "Un jour, je parlerai anglais parfaitement." },
        { id: "j52-help", en: "to help", phon: "[hèlp]", fr: "aider", exemple: "I will help you.", exempleFr: "Je t'aiderai." },
      ],
    },
    grammaire: {
      titre: "will + verbe de base : le futur en un mot",
      regle:
        "will + base, pareil pour tous : I will help, she will come, it will rain. Forme courte : 'll → I'll, she'll. Négation : will not → won't : It won't rain. Question : Will you come?",
      analogie:
        "will = notre futur simple (« j'aiderai, il pleuvra ») + nos décisions instantanées (« bon, je le prends ! » → I'll take it!). going to = prévu d'avance ; will = décidé maintenant ou prédit.",
      exemples: [
        { en: "I will help you, I promise.", fr: "Je t'aiderai, promis." },
        { en: "It will probably rain tomorrow.", fr: "Il pleuvra probablement demain." },
        { en: "I'll take it!", fr: "Je le prends ! (décision sur le moment)" },
        { en: "Don't worry, it won't be difficult.", fr: "Ne t'inquiète pas, ce ne sera pas difficile." },
      ],
      exercices: [
        { type: "trou", phrase: "I ___ help you, I promise. (futur)", r: "will", explication: "will + base : will help." },
        { type: "traduction", sens: "fr-en", q: "Il pleuvra probablement demain.", r: "it will probably rain tomorrow", accepte: ["it'll probably rain tomorrow"], explication: "will + probably + rain." },
        { type: "trou", phrase: "It ___ rain. (ne pleuvra pas — forme courte)", r: "won't", accepte: ["wont"], explication: "will not → won't." },
        { type: "traduction", sens: "fr-en", q: "Un jour, je parlerai anglais parfaitement.", r: "one day, i will speak english perfectly", accepte: ["one day i will speak english perfectly", "one day i'll speak english perfectly"], explication: "one day + will speak." },
        { type: "trou", phrase: "___ you come to the party? (question futur)", r: "Will", accepte: ["will"], explication: "Will you come?" },
        { type: "traduction", sens: "fr-en", q: "Je pense que ce sera facile.", r: "i think it will be easy", accepte: ["i think it'll be easy"], explication: "I think + it will be." },
      ],
    },
    conjugaison: {
      titre: "will / won't : le tableau (ultra) simple",
      explication:
        "will ne change JAMAIS : I will, you will, she will, we will… Formes courtes : I'll, you'll, she'll. Négation unique : won't [wônt]. C'est le temps le plus simple de tout l'anglais !",
      tableau: [
        { pronom: "tous", forme: "will + base", exemple: "She will come. They will sign." },
        { pronom: "forme courte", forme: "'ll", exemple: "I'll call you tonight." },
        { pronom: "négation", forme: "won't", exemple: "It won't be easy — but you'll do it!" },
        { pronom: "question", forme: "Will…?", exemple: "Will you help me? — Yes, I will!" },
      ],
      exercices: [
        { type: "conjugaison", verbe: "to call", q: "I'll ___ you tonight.", r: "call", explication: "'ll + base : call." },
        { type: "conjugaison", verbe: "to be", q: "It will ___ sunny tomorrow.", r: "be", explication: "will + be." },
        { type: "vraiFaux", affirmation: "On dit « she wills come ».", r: false, explication: "will est invariable : she will come." },
        { type: "traduction", sens: "fr-en", q: "Je t'appellerai ce soir.", r: "i'll call you tonight", accepte: ["i will call you tonight"], explication: "I'll call you tonight." },
      ],
    },
    dialogue: {
      titre: "Promis, juré !",
      contexte: "Tu doutes un peu de ton anglais. Emma te fait des prédictions (et des promesses).",
      lignes: [
        { role: "Toi", en: "English is hard… Will I really speak one day?", fr: "L'anglais c'est dur… Est-ce qu'un jour je parlerai vraiment ?" },
        { role: "Emma", en: "Yes, you will! I'm sure.", fr: "Oui ! J'en suis sûre." },
        { role: "Toi", en: "It won't be easy…", fr: "Ce ne sera pas facile…" },
        { role: "Emma", en: "Maybe, but I will help you every day. I promise.", fr: "Peut-être, mais je t'aiderai chaque jour. Promis." },
        { role: "Toi", en: "Then one day, I will speak with your clients in English!", fr: "Alors un jour, je parlerai avec tes clients en anglais !" },
        { role: "Emma", en: "You will. And that day, we'll celebrate!", fr: "Tu le feras. Et ce jour-là, on fêtera ça !" },
      ],
      aToi: [
        { consigne: "Dis « Je t'aiderai, promis »", r: "i will help you, i promise", accepte: ["i'll help you i promise", "i will help you i promise"], explication: "will help + I promise." },
        { consigne: "Dis « Ce ne sera pas facile »", r: "it won't be easy", accepte: ["it will not be easy"], explication: "won't + be." },
        { consigne: "Dis « Un jour, je parlerai anglais »", r: "one day, i will speak english", accepte: ["one day i will speak english", "one day i'll speak english"], explication: "One day, I will speak English." },
      ],
    },
    prononciation: {
      son: "'ll",
      titre: "I'll, she'll, won't : les contractions du futur",
      explication:
        "I'll = [aïl] (une seule syllabe !), she'll = [chiil], we'll = [wiil], won't = [wônt]. Attention : won't [wônt] ≠ want [wont] — le premier a un ô fermé.",
      technique: "Dis « aïe » + « L » : aïl. Puis enchaîne : I'll call, I'll help, I'll see you.",
      mots: [
        { en: "I'll", phon: "[AÏL]" },
        { en: "she'll", phon: "[CHIIL]" },
        { en: "won't", phon: "[WÔNT] — ô fermé" },
        { en: "will", phon: "[WIL]" },
      ],
      phrase: "I'll call you — it won't be long!",
    },
    bilan: {
      resume: [
        "will + base : promesses, décisions instantanées, prédictions.",
        "I'll / she'll / won't : les contractions à l'oral.",
        "going to (prévu) vs will (décidé maintenant / prédit).",
      ],
      conseil: "Fais-toi trois promesses en anglais pour la semaine : I will…, I will…, I won't… !",
      motivation: "« One day, I will speak English » — sauf que ce jour est déjà en train d'arriver. 🔮💪",
    },
  },
  // ==================== JOUR 53 · 17 JUILLET — L'AGENDA ====================
  {
    jour: 53,
    date: "17 juillet",
    mois: "juillet",
    titre: "Mon agenda de la semaine",
    emoji: "🗓️",
    objectif: "Organiser ta semaine en anglais : rendez-vous, visites, réunions.",
    intro:
      "Sors ton agenda ! 🗓️ Aujourd'hui tu apprends LA subtilité pro : pour un rendez-vous déjà calé, l'anglais utilise le présent continu : « I'm meeting a client tomorrow ». Ton planning d'agence, en anglais.",
    vocabulaire: {
      intro: "Le vocabulaire du planning professionnel.",
      mots: [
        { id: "j53-diary", en: "diary", phon: "[daï-e-ri]", fr: "agenda", exemple: "Let me check my diary.", exempleFr: "Laisse-moi regarder mon agenda." },
        { id: "j53-schedule", en: "schedule", phon: "[skè-djoul]", fr: "planning / emploi du temps", exemple: "My schedule is full.", exempleFr: "Mon planning est plein." },
        { id: "j53-meet", en: "to meet", phon: "[miit]", fr: "rencontrer", exemple: "I'm meeting a client at ten.", exempleFr: "Je rencontre un client à dix heures." },
        { id: "j53-sign", en: "to sign", phon: "[saïn]", fr: "signer", exemple: "We sign on Friday.", exempleFr: "On signe vendredi." },
        { id: "j53-contract", en: "contract", phon: "[kon-trakt]", fr: "contrat", exemple: "The contract is ready.", exempleFr: "Le contrat est prêt." },
        { id: "j53-visit", en: "visit", phon: "[vi-zit]", fr: "visite", exemple: "The visit is at three.", exempleFr: "La visite est à quinze heures." },
        { id: "j53-free", en: "free", phon: "[frii]", fr: "libre", exemple: "Are you free on Thursday?", exempleFr: "Es-tu libre jeudi ?" },
        { id: "j53-cancel", en: "to cancel", phon: "[kan-seul]", fr: "annuler", exemple: "I have to cancel the meeting.", exempleFr: "Je dois annuler la réunion." },
      ],
    },
    grammaire: {
      titre: "Le présent continu pour un futur DÉJÀ calé",
      regle:
        "Pour un rendez-vous fixé (dans l'agenda !), l'anglais utilise be + -ing avec une date future : I'm meeting a client tomorrow. She's visiting the flat on Friday. C'est le futur « officiel » des plannings.",
      analogie:
        "En français aussi on dit « demain je RENCONTRE un client » (présent) pour un truc calé. L'anglais fait pareil avec son présent continu. Si c'est dans l'agenda → -ing !",
      exemples: [
        { en: "I'm meeting a client tomorrow at ten.", fr: "Je rencontre un client demain à dix heures." },
        { en: "We're signing the contract on Friday.", fr: "On signe le contrat vendredi." },
        { en: "She's visiting two flats next week.", fr: "Elle visite deux appartements la semaine prochaine." },
        { en: "What are you doing on Thursday?", fr: "Que fais-tu jeudi ?" },
      ],
      exercices: [
        { type: "trou", phrase: "I'm ___ a client tomorrow. (rencontrer)", r: "meeting", explication: "RDV calé → présent continu : meeting." },
        { type: "traduction", sens: "fr-en", q: "On signe le contrat vendredi.", r: "we're signing the contract on friday", accepte: ["we are signing the contract on friday", "we sign the contract on friday"], explication: "RDV daté → we're signing." },
        { type: "traduction", sens: "fr-en", q: "Es-tu libre jeudi ?", r: "are you free on thursday", accepte: ["are you free on thursday?", "are you free thursday"], explication: "free + on Thursday." },
        { type: "traduction", sens: "fr-en", q: "Elle visite deux appartements la semaine prochaine.", r: "she's visiting two flats next week", accepte: ["she is visiting two flats next week", "she's visiting two apartments next week"], explication: "Agenda → she's visiting." },
        { type: "vraiFaux", affirmation: "« I'm meeting a client tomorrow » est correct pour un rendez-vous prévu.", r: true, explication: "Oui : présent continu + date future = RDV calé." },
        { type: "traduction", sens: "fr-en", q: "Je dois annuler la réunion de lundi.", r: "i have to cancel the monday meeting", accepte: ["i have to cancel monday's meeting", "i have to cancel the meeting on monday"], explication: "have to + cancel." },
      ],
    },
    conjugaison: {
      titre: "Trois futurs, trois nuances",
      explication:
        "1) Agenda / RDV fixé → présent continu : I'm meeting Tom at ten. 2) Intention / projet → going to : I'm going to learn Spanish. 3) Décision immédiate / promesse / prédiction → will : I'll call you back!",
      tableau: [
        { pronom: "RDV calé", forme: "présent continu", exemple: "I'm meeting a client at ten." },
        { pronom: "projet", forme: "going to", exemple: "I'm going to change my car." },
        { pronom: "décision immédiate", forme: "will", exemple: "OK, I'll call him now!" },
        { pronom: "prédiction", forme: "will", exemple: "The visit will be short." },
      ],
      exercices: [
        { type: "trou", phrase: "OK, I ___ call him right now! (décision immédiate)", r: "will", accepte: ["'ll"], explication: "Décision sur le moment → will." },
        { type: "trou", phrase: "I'm ___ to change my car next year. (projet)", r: "going", explication: "Projet → going to." },
        { type: "conjugaison", verbe: "to meet", q: "She is ___ the client at ten. (RDV calé)", r: "meeting", explication: "Agenda → is meeting." },
        { type: "traduction", sens: "fr-en", q: "La visite sera courte.", r: "the visit will be short", accepte: ["the visit'll be short"], explication: "Prédiction → will be." },
      ],
    },
    dialogue: {
      titre: "Caler la semaine avec ta collègue",
      contexte: "Emma joue ta collègue : vous synchronisez vos agendas.",
      lignes: [
        { role: "Emma", en: "What does your week look like?", fr: "Elle ressemble à quoi, ta semaine ?" },
        { role: "Toi", en: "Busy! I'm meeting a client on Tuesday at ten.", fr: "Chargée ! Je rencontre un client mardi à dix heures." },
        { role: "Emma", en: "And the Rossi contract?", fr: "Et le contrat Rossi ?" },
        { role: "Toi", en: "We're signing on Friday morning.", fr: "On signe vendredi matin." },
        { role: "Emma", en: "Great. Are you free on Thursday for the team meeting?", fr: "Super. Tu es libre jeudi pour la réunion d'équipe ?" },
        { role: "Toi", en: "Yes, I'm free after three o'clock.", fr: "Oui, je suis libre après quinze heures." },
        { role: "Emma", en: "Perfect, I'll book the room!", fr: "Parfait, je réserve la salle !" },
      ],
      aToi: [
        { consigne: "Dis « Je rencontre un client mardi à dix heures »", r: "i'm meeting a client on tuesday at ten", accepte: ["i am meeting a client on tuesday at ten", "i'm meeting a client tuesday at ten"], explication: "RDV calé → I'm meeting." },
        { consigne: "Dis « On signe vendredi matin »", r: "we're signing on friday morning", accepte: ["we are signing on friday morning", "we're signing friday morning"], explication: "we're signing + on Friday morning." },
        { consigne: "Dis « Je suis libre après quinze heures »", r: "i'm free after three o'clock", accepte: ["i am free after three o'clock", "i'm free after three"], explication: "free after three (o'clock)." },
      ],
    },
    prononciation: {
      son: "dj",
      titre: "schedule, diary : les mots de bureau pièges",
      explication:
        "« schedule » se dit [SKÈ-djoul] (US) — les Britanniques disent [CHÈ-dioul], les deux sont OK ! « diary » = [DAÏ-e-ri] (3 syllabes). « busy » = [BI-zi], le u se fait passer pour un i.",
      technique: "skè-djoul, daï-e-ri, bi-zi : trois mots à répéter trois fois chacun, lentement puis vite.",
      mots: [
        { en: "schedule", phon: "[SKÈ-djoul]" },
        { en: "diary", phon: "[DAÏ-e-ri]" },
        { en: "busy", phon: "[BI-zi]" },
        { en: "contract", phon: "[KON-trakt]" },
      ],
      phrase: "My schedule is busy — check my diary!",
    },
    bilan: {
      resume: [
        "RDV calé → présent continu : I'm meeting a client tomorrow.",
        "Trois futurs : -ing (agenda), going to (projet), will (décision/prédiction).",
        "Le vocabulaire du planning : diary, schedule, contract, free, cancel.",
      ],
      conseil: "Ouvre ton agenda réel et dis tes trois prochains rendez-vous en anglais avec I'm …-ing.",
      motivation: "Tu gères ton planning en anglais comme une pro de l'international. Sérieusement stylé ! 🗓️✨",
    },
  },

  // ==================== JOUR 54 · 18 JUILLET — COMPARATIF ====================
  {
    jour: 54,
    date: "18 juillet",
    mois: "juillet",
    titre: "Comparer : bigger, better",
    emoji: "⚖️",
    objectif: "Comparer deux choses — l'outil n°1 de l'agent immobilier.",
    intro:
      "Compétence CLÉ du métier aujourd'hui : COMPARER ! ⚖️ « Cet appartement est plus grand, mais l'autre est moins cher… » En anglais : bigger, cheaper, more expensive. Tes clients vont adorer.",
    vocabulaire: {
      intro: "Les adjectifs pour décrire et comparer des biens.",
      mots: [
        { id: "j54-bigger", en: "bigger", phon: "[bi-gueur]", fr: "plus grand", exemple: "This flat is bigger.", exempleFr: "Cet appartement est plus grand." },
        { id: "j54-smaller", en: "smaller", phon: "[smo-leur]", fr: "plus petit", exemple: "The kitchen is smaller.", exempleFr: "La cuisine est plus petite." },
        { id: "j54-cheaper", en: "cheaper", phon: "[tchii-peur]", fr: "moins cher", exemple: "This one is cheaper.", exempleFr: "Celui-ci est moins cher." },
        { id: "j54-expensive", en: "expensive", phon: "[ex-pèn-siv]", fr: "cher", exemple: "It's more expensive.", exempleFr: "C'est plus cher." },
        { id: "j54-bright", en: "bright", phon: "[braït]", fr: "lumineux", exemple: "The living room is very bright.", exempleFr: "Le salon est très lumineux." },
        { id: "j54-quiet", en: "quiet", phon: "[kwaï-eut]", fr: "calme", exemple: "A quiet street.", exempleFr: "Une rue calme." },
        { id: "j54-modern", en: "modern", phon: "[mo-deurn]", fr: "moderne", exemple: "A modern kitchen.", exempleFr: "Une cuisine moderne." },
        { id: "j54-than", en: "than", phon: "[dhan]", fr: "que (comparaison)", exemple: "Bigger than the other one.", exempleFr: "Plus grand que l'autre." },
      ],
    },
    grammaire: {
      titre: "Le comparatif : -er than / more … than",
      regle:
        "Adjectif COURT (1-2 syllabes) → +er : big → bigger, cheap → cheaper, quiet → quieter. Adjectif LONG (3+ syllabes) → more + adjectif : more expensive, more modern. Puis « than » = que. Exceptions stars : good → better, bad → worse.",
      analogie:
        "Le français dit toujours « plus … que » ; l'anglais colle -er aux petits mots (bigger) et met more devant les grands (more expensive). Petit mot → petit suffixe ; grand mot → mot devant !",
      exemples: [
        { en: "This flat is bigger than the other one.", fr: "Cet appartement est plus grand que l'autre." },
        { en: "This one is more expensive.", fr: "Celui-ci est plus cher." },
        { en: "The street is quieter.", fr: "La rue est plus calme." },
        { en: "This kitchen is better!", fr: "Cette cuisine est mieux !" },
      ],
      exercices: [
        { type: "trou", phrase: "This flat is ___ than the other one. (plus grand)", r: "bigger", explication: "big → bigger (g doublé)." },
        { type: "trou", phrase: "It's ___ expensive. (plus)", r: "more", explication: "Adjectif long → more expensive." },
        { type: "traduction", sens: "fr-en", q: "Celui-ci est moins cher que l'autre.", r: "this one is cheaper than the other one", accepte: ["this one is cheaper than the other"], explication: "cheaper than." },
        { type: "trou", phrase: "good → ___ (comparatif)", r: "better", explication: "good → better (exception)." },
        { type: "trou", phrase: "bad → ___ (comparatif)", r: "worse", explication: "bad → worse (exception)." },
        { type: "traduction", sens: "fr-en", q: "Cette rue est plus calme mais l'appartement est plus petit.", r: "this street is quieter but the flat is smaller", accepte: ["this street is quieter but the apartment is smaller"], explication: "quieter + smaller." },
      ],
    },
    conjugaison: {
      titre: "Fabriquer le comparatif sans faute",
      explication:
        "1) court → +er (small → smaller). 2) finit en e → +r (nice → nicer). 3) voyelle + consonne → double (big → bigger, hot → hotter). 4) finit en y → -ier (happy → happier, easy → easier). 5) long → more devant.",
      tableau: [
        { pronom: "court", forme: "+ er", exemple: "small → smaller" },
        { pronom: "finit en e", forme: "+ r", exemple: "nice → nicer" },
        { pronom: "consonne doublée", forme: "big → bigger", exemple: "hot → hotter" },
        { pronom: "finit en y", forme: "y → ier", exemple: "easy → easier" },
      ],
      exercices: [
        { type: "trou", phrase: "nice → ___ (comparatif)", r: "nicer", explication: "Finit en e → nicer." },
        { type: "trou", phrase: "easy → ___ (comparatif)", r: "easier", explication: "y → ier : easier." },
        { type: "trou", phrase: "hot → ___ (comparatif)", r: "hotter", explication: "On double le t : hotter." },
        { type: "vraiFaux", affirmation: "On dit « more big » pour « plus grand ».", r: false, explication: "big est court → bigger." },
      ],
    },
    dialogue: {
      titre: "Deux appartements, un choix",
      contexte: "Tu conseilles un client anglais qui hésite entre deux appartements.",
      lignes: [
        { role: "Emma", en: "So, flat A or flat B? Help me choose!", fr: "Alors, appartement A ou B ? Aide-moi à choisir !" },
        { role: "Toi", en: "Flat A is bigger and brighter than flat B.", fr: "Le A est plus grand et plus lumineux que le B." },
        { role: "Emma", en: "But it's more expensive, right?", fr: "Mais il est plus cher, non ?" },
        { role: "Toi", en: "Yes, but the street is quieter and the kitchen is more modern.", fr: "Oui, mais la rue est plus calme et la cuisine plus moderne." },
        { role: "Emma", en: "Hmm… and flat B?", fr: "Hmm… et le B ?" },
        { role: "Toi", en: "Flat B is cheaper, but it's smaller and darker.", fr: "Le B est moins cher, mais plus petit et plus sombre." },
        { role: "Emma", en: "OK. Flat A is better for me!", fr: "OK. Le A est mieux pour moi !" },
      ],
      aToi: [
        { consigne: "Dis « Cet appartement est plus grand et plus lumineux »", r: "this flat is bigger and brighter", accepte: ["this apartment is bigger and brighter"], explication: "bigger + brighter." },
        { consigne: "Dis « Mais il est plus cher »", r: "but it's more expensive", accepte: ["but it is more expensive"], explication: "more expensive." },
        { consigne: "Dis « La rue est plus calme »", r: "the street is quieter", explication: "quiet → quieter." },
        { consigne: "Dis « Celui-ci est mieux pour toi »", r: "this one is better for you", explication: "good → better." },
      ],
    },
    prononciation: {
      son: "dhan",
      titre: "than [dhan] ≠ then [dhèn]",
      explication:
        "Deux jumeaux à ne pas confondre : « than » [dhan] = que (comparaison) et « then » [dhèn] = ensuite. Les deux avec le TH doux qui vibre. Bigger THAN me ; THEN we visited.",
      technique: "a ouvert pour than (comme « âne »), è fermé pour then. dhan / dhèn, dix fois.",
      mots: [
        { en: "than", phon: "[DHAN] — comparaison" },
        { en: "then", phon: "[DHÈN] — ensuite" },
        { en: "bigger", phon: "[BI-gueur]" },
        { en: "quiet", phon: "[KWAÏ-eut] — 2 syllabes" },
      ],
      phrase: "This flat is bigger than mine — then let's visit it!",
    },
    bilan: {
      resume: [
        "Court → -er than (bigger than) ; long → more … than (more expensive than).",
        "Exceptions : good → better, bad → worse.",
        "Orthographe : bigger, nicer, easier, hotter.",
      ],
      conseil: "Compare ton logement avec celui de tes rêves : trois phrases avec -er ou more.",
      motivation: "Comparer des biens en anglais : tu viens de gagner une compétence PRO. Tes futurs clients disent merci ! ⚖️🏡",
    },
  },

  // ==================== JOUR 55 · 19 JUILLET — SUPERLATIF ====================
  {
    jour: 55,
    date: "19 juillet",
    mois: "juillet",
    titre: "Le top du top : superlatifs",
    emoji: "🏆",
    objectif: "Dire « le plus » et « le meilleur » — pour vendre du rêve.",
    intro:
      "Après « plus grand que », voici « LE plus grand » ! 🏆 Le superlatif, c'est l'arme secrète des annonces immobilières : the biggest rooms, the best location, the most beautiful view. Vendre du rêve, en anglais.",
    vocabulaire: {
      intro: "Les mots des annonces qui font rêver.",
      mots: [
        { id: "j55-best", en: "the best", phon: "[dheu bèst]", fr: "le meilleur", exemple: "The best location in town.", exempleFr: "Le meilleur emplacement de la ville." },
        { id: "j55-worst", en: "the worst", phon: "[dheu weurst]", fr: "le pire", exemple: "The worst day of my life!", exempleFr: "Le pire jour de ma vie !" },
        { id: "j55-view", en: "view", phon: "[viou]", fr: "vue", exemple: "The flat has a sea view.", exempleFr: "L'appartement a vue sur la mer." },
        { id: "j55-location", en: "location", phon: "[lo-kéï-cheun]", fr: "emplacement", exemple: "Location is everything.", exempleFr: "L'emplacement, c'est tout." },
        { id: "j55-floor", en: "floor", phon: "[flor]", fr: "étage / sol", exemple: "On the top floor.", exempleFr: "Au dernier étage." },
        { id: "j55-price", en: "price", phon: "[praïss]", fr: "prix", exemple: "The best price.", exempleFr: "Le meilleur prix." },
        { id: "j55-area", en: "area", phon: "[è-ri-a]", fr: "quartier / zone", exemple: "The nicest area of the city.", exempleFr: "Le plus joli quartier de la ville." },
        { id: "j55-intown", en: "in town", phon: "[in taoun]", fr: "en ville", exemple: "The best flat in town.", exempleFr: "Le meilleur appartement de la ville." },
      ],
    },
    grammaire: {
      titre: "Le superlatif : the …-est / the most …",
      regle:
        "Court → the + adjectif-est : the biggest, the cheapest, the nicest. Long → the most + adjectif : the most expensive, the most beautiful. Exceptions (les mêmes !) : good → the best, bad → the worst. Toujours avec THE devant.",
      analogie:
        "Comparatif : on compare deux (bigger than). Superlatif : on couronne LE champion (the biggest). Le « the » est la couronne — ne l'oublie jamais !",
      exemples: [
        { en: "It's the biggest flat in the building.", fr: "C'est le plus grand appartement de l'immeuble." },
        { en: "The most beautiful view in town.", fr: "La plus belle vue de la ville." },
        { en: "This is the best price.", fr: "C'est le meilleur prix." },
        { en: "The cheapest option.", fr: "L'option la moins chère." },
      ],
      exercices: [
        { type: "trou", phrase: "It's the ___ flat in the building. (le plus grand)", r: "biggest", explication: "the + biggest." },
        { type: "trou", phrase: "The ___ beautiful view in town. (la plus)", r: "most", explication: "Adjectif long → the most beautiful." },
        { type: "trou", phrase: "good → the ___ (superlatif)", r: "best", explication: "good → the best." },
        { type: "traduction", sens: "fr-en", q: "C'est le meilleur prix.", r: "it's the best price", accepte: ["this is the best price", "it is the best price"], explication: "the best price." },
        { type: "traduction", sens: "fr-en", q: "C'est le plus joli quartier de la ville.", r: "it's the nicest area of the city", accepte: ["it's the nicest area in the city", "it is the nicest area of the city", "it's the nicest area in town"], explication: "the nicest area." },
        { type: "vraiFaux", affirmation: "On dit « the most big » pour « le plus grand ».", r: false, explication: "big est court → the biggest." },
      ],
    },
    conjugaison: {
      titre: "Comparatif et superlatif côte à côte",
      explication:
        "La famille au complet : big → bigger → the biggest ; cheap → cheaper → the cheapest ; expensive → more expensive → the most expensive ; good → better → the best ; bad → worse → the worst.",
      tableau: [
        { pronom: "big", forme: "bigger / the biggest", exemple: "The biggest room." },
        { pronom: "expensive", forme: "more / the most expensive", exemple: "The most expensive area." },
        { pronom: "good", forme: "better / the best", exemple: "The best agency in town!" },
        { pronom: "bad", forme: "worse / the worst", exemple: "The worst weather." },
      ],
      exercices: [
        { type: "trou", phrase: "cheap → the ___ (superlatif)", r: "cheapest", explication: "the cheapest." },
        { type: "trou", phrase: "bad → the ___ (superlatif)", r: "worst", explication: "bad → the worst." },
        { type: "trou", phrase: "happy → the ___ (superlatif)", r: "happiest", explication: "y → iest : the happiest." },
        { type: "traduction", sens: "fr-en", q: "C'est la pièce la plus lumineuse.", r: "it's the brightest room", accepte: ["it is the brightest room", "this is the brightest room"], explication: "the brightest." },
      ],
    },
    dialogue: {
      titre: "L'annonce parfaite",
      contexte: "Avec Emma, tu rédiges (à l'oral) l'annonce d'un superbe appartement.",
      lignes: [
        { role: "Emma", en: "Describe the new flat like in an advert!", fr: "Décris le nouvel appartement comme dans une annonce !" },
        { role: "Toi", en: "It's the brightest flat in the building.", fr: "C'est l'appartement le plus lumineux de l'immeuble." },
        { role: "Emma", en: "More! Sell the dream!", fr: "Encore ! Vends du rêve !" },
        { role: "Toi", en: "It has the most beautiful view in town…", fr: "Il a la plus belle vue de la ville…" },
        { role: "Emma", en: "And the price?", fr: "Et le prix ?" },
        { role: "Toi", en: "The best price in the area — and the nicest kitchen!", fr: "Le meilleur prix du quartier — et la plus jolie cuisine !" },
        { role: "Emma", en: "Sold! You're the best agent ever.", fr: "Vendu ! Tu es la meilleure agente du monde." },
      ],
      aToi: [
        { consigne: "Dis « C'est l'appartement le plus lumineux de l'immeuble »", r: "it's the brightest flat in the building", accepte: ["it is the brightest flat in the building", "it's the brightest apartment in the building"], explication: "the brightest + in the building." },
        { consigne: "Dis « Il a la plus belle vue de la ville »", r: "it has the most beautiful view in town", accepte: ["it has the most beautiful view in the city"], explication: "the most beautiful view." },
        { consigne: "Dis « Le meilleur prix du quartier »", r: "the best price in the area", explication: "the best price." },
      ],
    },
    prononciation: {
      son: "eust",
      titre: "-est : la finale discrète",
      explication:
        "Le -est du superlatif se dit [ist/eust] très léger : biggest [BI-guist], nicest [NAÏ-cist], cheapest [TCHII-pist]. L'accent reste sur le début du mot, la fin s'efface.",
      technique: "Frappe la première syllabe, murmure la fin : BI-guist, NAÏ-cist. Jamais « bigg-EST » !",
      mots: [
        { en: "biggest", phon: "[BI-guist]" },
        { en: "nicest", phon: "[NAÏ-cist]" },
        { en: "the best", phon: "[dheu BÈST]" },
        { en: "area", phon: "[È-ri-a] — 3 syllabes" },
      ],
      phrase: "The biggest, the nicest, the best — this area has it all!",
    },
    bilan: {
      resume: [
        "the …-est (court) / the most … (long) : the biggest, the most beautiful.",
        "the best / the worst : les superlatifs stars.",
        "Le vocabulaire de l'annonce : view, location, area, floor, price.",
      ],
      conseil: "Rédige (dans ta tête ou sur papier) l'annonce de TON logement idéal, avec trois superlatifs.",
      motivation: "« The best agent ever » — c'est toi, et en plus maintenant tu sais le dire en anglais ! 🏆🌟",
    },
  },

  // ==================== JOUR 56 · 20 JUILLET — SUGGESTIONS ====================
  {
    jour: 56,
    date: "20 juillet",
    mois: "juillet",
    titre: "Et si on… ? Proposer et suggérer",
    emoji: "🤝",
    objectif: "Proposer, suggérer, accepter et refuser poliment.",
    intro:
      "« Et si on allait à la plage ? » 🤝 Aujourd'hui, tu apprends à PROPOSER : Let's go!, Shall we…?, Why don't we…?, What about…? — et à répondre : Good idea! / Sorry, I can't. La vie sociale en anglais commence ici.",
    vocabulaire: {
      intro: "Les tournures pour proposer (et répondre).",
      mots: [
        { id: "j56-lets", en: "let's", phon: "[lèts]", fr: "allons / faisons (proposition)", exemple: "Let's go to the beach!", exempleFr: "Allons à la plage !" },
        { id: "j56-shallwe", en: "shall we…?", phon: "[chal wi]", fr: "et si on… ?", exemple: "Shall we start?", exempleFr: "On commence ?" },
        { id: "j56-whydont", en: "why don't we…?", phon: "[waï dônt wi]", fr: "pourquoi ne pas… ?", exemple: "Why don't we visit it today?", exempleFr: "Pourquoi ne pas le visiter aujourd'hui ?" },
        { id: "j56-whatabout", en: "what about…?", phon: "[wot e-baout]", fr: "et que dis-tu de… ?", exemple: "What about Saturday?", exempleFr: "Et samedi, ça te dit ?" },
        { id: "j56-goodidea", en: "good idea", phon: "[goud aï-di-e]", fr: "bonne idée", exemple: "Good idea!", exempleFr: "Bonne idée !" },
        { id: "j56-cant", en: "I can't", phon: "[aï kant]", fr: "je ne peux pas", exemple: "Sorry, I can't today.", exempleFr: "Désolée, je ne peux pas aujourd'hui." },
        { id: "j56-join", en: "to join", phon: "[djoïn]", fr: "rejoindre", exemple: "Do you want to join us?", exempleFr: "Tu veux te joindre à nous ?" },
        { id: "j56-picnic", en: "picnic", phon: "[pik-nik]", fr: "pique-nique", exemple: "Let's have a picnic!", exempleFr: "Faisons un pique-nique !" },
      ],
    },
    grammaire: {
      titre: "Quatre façons de proposer",
      regle:
        "1) Let's + base : Let's go! (Allons-y !) 2) Shall we + base ? : Shall we start? 3) Why don't we + base ? : Why don't we visit it? 4) What about + -ing/nom ? : What about going to the sea? / What about Saturday? Répondre : Good idea! / Great! / Sorry, I can't.",
      analogie:
        "Let's = « allons-y » direct ; Shall we = « on… ? » tout doux ; Why don't we = « pourquoi pas » ; What about = « et que dis-tu de ». Quatre niveaux de délicatesse pour la même envie !",
      exemples: [
        { en: "Let's have a picnic!", fr: "Faisons un pique-nique !" },
        { en: "Shall we start the visit?", fr: "On commence la visite ?" },
        { en: "Why don't we call the owner?", fr: "Pourquoi ne pas appeler le propriétaire ?" },
        { en: "What about going to the sea?", fr: "Et si on allait à la mer ?" },
      ],
      exercices: [
        { type: "trou", phrase: "___ go to the beach! (allons)", r: "Let's", accepte: ["let's", "lets"], explication: "Let's + base." },
        { type: "trou", phrase: "___ we start? (et si on… ?)", r: "Shall", accepte: ["shall"], explication: "Shall we + base ?" },
        { type: "traduction", sens: "fr-en", q: "Pourquoi ne pas le visiter aujourd'hui ?", r: "why don't we visit it today", accepte: ["why don't we visit it today?"], explication: "Why don't we + base." },
        { type: "trou", phrase: "What about ___ to the sea? (aller)", r: "going", explication: "What about + -ing." },
        { type: "traduction", sens: "fr-en", q: "Bonne idée ! Allons-y !", r: "good idea! let's go!", accepte: ["good idea let's go", "good idea! let's go"], explication: "Good idea! Let's go!" },
        { type: "traduction", sens: "fr-en", q: "Désolée, je ne peux pas aujourd'hui. Et demain ?", r: "sorry, i can't today. what about tomorrow", accepte: ["sorry i can't today what about tomorrow", "sorry, i can't today. what about tomorrow?"], explication: "I can't + What about tomorrow?" },
      ],
    },
    conjugaison: {
      titre: "Let's et l'impératif : ordonner gentiment",
      explication:
        "L'impératif anglais = le verbe tout nu : Come! Look! Listen! Négatif : Don't + base : Don't worry! Don't forget! « Let's » ajoute le « nous » : Let's go = allons-y ; Let's not panic = ne paniquons pas.",
      tableau: [
        { pronom: "impératif", forme: "base", exemple: "Come here! Look!" },
        { pronom: "négatif", forme: "Don't + base", exemple: "Don't worry!" },
        { pronom: "avec nous", forme: "Let's + base", exemple: "Let's start!" },
        { pronom: "négatif nous", forme: "Let's not + base", exemple: "Let's not be late." },
      ],
      exercices: [
        { type: "trou", phrase: "___ worry! (ne t'inquiète pas)", r: "Don't", accepte: ["don't", "dont"], explication: "Don't + worry." },
        { type: "trou", phrase: "___ forget the keys! (n'oublie pas)", r: "Don't", accepte: ["don't", "dont"], explication: "Don't forget." },
        { type: "traduction", sens: "fr-en", q: "Ne soyons pas en retard !", r: "let's not be late", accepte: ["let's not be late!"], explication: "Let's not + be." },
        { type: "traduction", sens: "fr-en", q: "Écoute ! Viens ici !", r: "listen! come here!", accepte: ["listen come here"], explication: "Impératif : Listen! Come here!" },
      ],
    },
    dialogue: {
      titre: "On organise le dimanche",
      contexte: "Emma et toi cherchez quoi faire dimanche.",
      lignes: [
        { role: "Emma", en: "I'm free on Sunday. Shall we do something?", fr: "Je suis libre dimanche. On fait un truc ?" },
        { role: "Toi", en: "Yes! Why don't we go to the sea?", fr: "Oui ! Pourquoi pas aller à la mer ?" },
        { role: "Emma", en: "Hmm, the weather will be bad…", fr: "Hmm, il fera mauvais…" },
        { role: "Toi", en: "OK. What about a picnic in the park?", fr: "OK. Et un pique-nique au parc ?" },
        { role: "Emma", en: "Good idea! Let's invite Leo!", fr: "Bonne idée ! Invitons Leo !" },
        { role: "Toi", en: "Perfect. Let's meet at noon — and don't forget the cake!", fr: "Parfait. Retrouvons-nous à midi — et n'oublie pas le gâteau !" },
      ],
      aToi: [
        { consigne: "Propose « Pourquoi pas aller à la mer ? »", r: "why don't we go to the sea", accepte: ["why don't we go to the sea?"], explication: "Why don't we + go." },
        { consigne: "Propose « Et un pique-nique au parc ? »", r: "what about a picnic in the park", accepte: ["what about a picnic in the park?"], explication: "What about + nom." },
        { consigne: "Dis « Retrouvons-nous à midi »", r: "let's meet at noon", explication: "Let's meet at noon." },
        { consigne: "Dis « N'oublie pas le gâteau ! »", r: "don't forget the cake", accepte: ["don't forget the cake!"], explication: "Don't forget…" },
      ],
    },
    prononciation: {
      son: "ch",
      titre: "shall [chal] et le retour du SH",
      explication:
        "« shall » se dit [CHAL] avec le sh doux (comme « chut »). Attention à la paire : shall [chal] / « chal » doux ≠ « tchal ». Retrouve le sh dans sure [chour] et le tch dans picture, question [kwès-tcheun].",
      technique: "« Chut » → sh. Puis : shall we, sure, wash. Et la paire : shall / child (sh vs tch).",
      mots: [
        { en: "shall", phon: "[CHAL]" },
        { en: "sure", phon: "[CHOUR]" },
        { en: "join", phon: "[DJOÏN]" },
        { en: "idea", phon: "[aï-DI-e]" },
      ],
      phrase: "Shall we join them? Sure, good idea!",
    },
    bilan: {
      resume: [
        "Proposer : Let's…, Shall we…?, Why don't we…?, What about…?",
        "L'impératif : Come! / Don't worry! / Let's not be late.",
        "Répondre : Good idea! / Sorry, I can't. What about…?",
      ],
      conseil: "Propose trois activités à quelqu'un aujourd'hui avec trois tournures différentes.",
      motivation: "Proposer, inviter, organiser : tu es devenue le moteur social du groupe — en anglais ! 🤝☀️",
    },
  },

  // ==================== JOUR 57 · 21 JUILLET — RÉVISION SEMAINE 3 ====================
  {
    jour: 57,
    date: "21 juillet",
    mois: "juillet",
    titre: "Révision : futur, comparaisons, propositions",
    emoji: "🔁",
    objectif: "Consolider going to, will, les comparatifs et les suggestions.",
    intro:
      "Troisième semaine de juillet dans la poche ! 🔁 Au menu de la révision : les trois futurs, bigger/the biggest, et l'art de proposer. On mélange tout, comme dans la vraie vie.",
    vocabulaire: {
      intro: "Les mots-clés de la semaine, pour le grand mélange.",
      mots: [
        { id: "j57-tomorrow2", en: "tomorrow", phon: "[tou-mo-rô]", fr: "demain", exemple: "Tomorrow, I'm going to rest.", exempleFr: "Demain, je vais me reposer." },
        { id: "j57-plans", en: "plans", phon: "[planz]", fr: "projets", exemple: "Any plans for tonight?", exempleFr: "Des projets pour ce soir ?" },
        { id: "j57-promise2", en: "promise", phon: "[pro-miss]", fr: "promesse", exemple: "A promise is a promise!", exempleFr: "Une promesse est une promesse !" },
        { id: "j57-cheaper2", en: "cheaper", phon: "[tchii-peur]", fr: "moins cher", exemple: "This one is cheaper.", exempleFr: "Celui-ci est moins cher." },
        { id: "j57-best2", en: "the best", phon: "[dheu bèst]", fr: "le meilleur", exemple: "You're the best!", exempleFr: "Tu es la meilleure !" },
        { id: "j57-idea", en: "idea", phon: "[aï-di-e]", fr: "idée", exemple: "What a good idea!", exempleFr: "Quelle bonne idée !" },
        { id: "j57-maybe2", en: "maybe", phon: "[méï-bi]", fr: "peut-être", exemple: "Maybe next week.", exempleFr: "Peut-être la semaine prochaine." },
        { id: "j57-together", en: "together", phon: "[tou-guè-dheur]", fr: "ensemble", exemple: "Let's go together!", exempleFr: "Allons-y ensemble !" },
      ],
    },
    grammaire: {
      titre: "Le grand récap de la semaine 3",
      regle:
        "1) going to = projet ; will = décision/promesse/prédiction ; présent continu = RDV calé. 2) Comparatif : bigger than / more expensive than ; superlatif : the biggest / the most expensive ; better-best, worse-worst. 3) Proposer : Let's, Shall we, Why don't we, What about.",
      analogie:
        "Trois boîtes : DEMAIN (les futurs), MIEUX/MOINS BIEN (les comparaisons), ET SI ON… (les propositions). Toute conversation d'ami·e·s tient dans ces trois boîtes !",
      exemples: [
        { en: "Tomorrow I'm going to visit my parents.", fr: "Demain je vais voir mes parents." },
        { en: "This café is nicer than the other one.", fr: "Ce café est plus sympa que l'autre." },
        { en: "It's the best bakery in town.", fr: "C'est la meilleure boulangerie de la ville." },
        { en: "Shall we go together?", fr: "On y va ensemble ?" },
      ],
      exercices: [
        { type: "trou", phrase: "Tomorrow I'm ___ to visit my parents. (futur proche)", r: "going", explication: "Projet → going to." },
        { type: "trou", phrase: "Don't worry, I ___ help you. (promesse)", r: "will", accepte: ["'ll"], explication: "Promesse → will." },
        { type: "traduction", sens: "fr-en", q: "Ce café est plus sympa que l'autre.", r: "this café is nicer than the other one", accepte: ["this cafe is nicer than the other one", "this café is nicer than the other"], explication: "nicer than." },
        { type: "traduction", sens: "fr-en", q: "C'est le meilleur quartier de la ville.", r: "it's the best area in town", accepte: ["it is the best area in town", "it's the best area of the city", "it's the best area in the city"], explication: "the best + in town." },
        { type: "traduction", sens: "fr-en", q: "Et si on visitait l'appartement demain ?", r: "why don't we visit the flat tomorrow", accepte: ["why don't we visit the flat tomorrow?", "shall we visit the flat tomorrow", "what about visiting the flat tomorrow"], explication: "Why don't we / Shall we / What about -ing." },
        { type: "vraiFaux", affirmation: "« I'm meeting the client at ten tomorrow » est une erreur.", r: false, explication: "C'est correct : présent continu = RDV calé." },
      ],
    },
    conjugaison: {
      titre: "Quiz éclair : quel futur ?",
      explication:
        "Projet réfléchi → going to. Décision à l'instant / promesse / prédiction → will. RDV noté dans l'agenda → présent continu. Trois nuances, trois outils — teste-toi !",
      tableau: [
        { pronom: "projet", forme: "going to", exemple: "We're going to repaint the flat." },
        { pronom: "décision immédiate", forme: "will", exemple: "The phone? I'll answer!" },
        { pronom: "promesse", forme: "will", exemple: "I'll always help you." },
        { pronom: "agenda", forme: "présent continu", exemple: "I'm signing at nine tomorrow." },
      ],
      exercices: [
        { type: "trou", phrase: "The phone is ringing — I ___ answer! (décision immédiate)", r: "will", accepte: ["'ll"], explication: "Décision sur le moment → will." },
        { type: "trou", phrase: "We're ___ to repaint the kitchen next month. (projet)", r: "going", explication: "Projet → going to." },
        { type: "conjugaison", verbe: "to sign", q: "I'm ___ the contract at nine tomorrow. (agenda)", r: "signing", explication: "RDV calé → I'm signing." },
        { type: "trou", phrase: "hot → ___ → the hottest (les trois formes)", r: "hotter", explication: "hot, hotter, the hottest." },
      ],
    },
    dialogue: {
      titre: "Le programme du week-end parfait",
      contexte: "Emma et toi montez le plan du week-end en mélangeant tout ce que tu sais.",
      lignes: [
        { role: "Emma", en: "Any plans for the weekend?", fr: "Des projets pour le week-end ?" },
        { role: "Toi", en: "Saturday morning, I'm visiting a flat with a client.", fr: "Samedi matin, je fais visiter un appartement à un client." },
        { role: "Emma", en: "And after that?", fr: "Et après ?" },
        { role: "Toi", en: "After that, I'm free. Why don't we go to the new café?", fr: "Après, je suis libre. Pourquoi pas le nouveau café ?" },
        { role: "Emma", en: "The one near the port? It's more expensive…", fr: "Celui près du port ? Il est plus cher…" },
        { role: "Toi", en: "Yes, but it's the best in town! I'll pay!", fr: "Oui, mais c'est le meilleur de la ville ! J'invite !" },
        { role: "Emma", en: "Deal! You really are the best.", fr: "Marché conclu ! Tu es vraiment la meilleure." },
      ],
      aToi: [
        { consigne: "Dis « Samedi matin, je fais visiter un appartement »", r: "saturday morning, i'm visiting a flat", accepte: ["on saturday morning i'm visiting a flat", "saturday morning i am visiting a flat"], explication: "Agenda → I'm visiting." },
        { consigne: "Propose « Pourquoi pas le nouveau café ? »", r: "why don't we go to the new café", accepte: ["why don't we go to the new cafe", "why don't we go to the new café?"], explication: "Why don't we go…" },
        { consigne: "Dis « C'est le meilleur de la ville ! J'invite ! »", r: "it's the best in town! i'll pay!", accepte: ["it's the best in town i'll pay", "it is the best in town i will pay"], explication: "the best + I'll pay (décision immédiate)." },
      ],
    },
    prononciation: {
      son: "🔁",
      titre: "Récap sons : than, I'll, shall, -est",
      explication:
        "Les sons de la semaine : than [dhan] vs then [dhèn], la contraction I'll [aïl], shall [chal], et le -est discret [ist]. Une phrase pour tout faire tenir ensemble.",
      technique: "Phrase du jour lentement, trois fois, puis à vitesse réelle en gardant chaque son propre.",
      mots: [
        { en: "than", phon: "[DHAN]" },
        { en: "I'll", phon: "[AÏL]" },
        { en: "shall", phon: "[CHAL]" },
        { en: "biggest", phon: "[BI-guist]" },
      ],
      phrase: "Shall we go? I'll take the biggest — it's better than mine!",
    },
    bilan: {
      resume: [
        "Trois futurs maîtrisés : going to, will, présent continu d'agenda.",
        "Comparer et couronner : bigger than, the biggest, better/the best.",
        "Proposer avec Let's, Shall we, Why don't we, What about.",
      ],
      conseil: "Planifie ton week-end idéal à voix haute : un projet (going to), un RDV (-ing), une promesse (will) et une proposition (Shall we…?).",
      motivation: "Trois semaines de juillet, trois superpouvoirs. La dernière ligne droite du mois sera 100 % vie pratique ! 🔁💪",
    },
  },

  // ==================== JOUR 58 · 22 JUILLET — DIRECTIONS ====================
  {
    jour: 58,
    date: "22 juillet",
    mois: "juillet",
    titre: "En ville : demander son chemin",
    emoji: "🧭",
    objectif: "Demander et donner un itinéraire simple.",
    intro:
      "Semaine « vie pratique », c'est parti ! 🧭 Aujourd'hui : ne plus JAMAIS être perdue. Demander son chemin, comprendre la réponse, et même guider quelqu'un — y compris un client vers ton agence !",
    vocabulaire: {
      intro: "Les mots de l'itinéraire.",
      mots: [
        { id: "j58-left", en: "left", phon: "[lèft]", fr: "gauche", exemple: "Turn left.", exempleFr: "Tourne à gauche." },
        { id: "j58-right", en: "right", phon: "[raït]", fr: "droite", exemple: "Turn right at the bank.", exempleFr: "Tourne à droite à la banque." },
        { id: "j58-straight", en: "straight on", phon: "[stréït on]", fr: "tout droit", exemple: "Go straight on.", exempleFr: "Continue tout droit." },
        { id: "j58-cross", en: "to cross", phon: "[kross]", fr: "traverser", exemple: "Cross the street.", exempleFr: "Traverse la rue." },
        { id: "j58-nextto", en: "next to", phon: "[nèxt tou]", fr: "à côté de", exemple: "It's next to the bakery.", exempleFr: "C'est à côté de la boulangerie." },
        { id: "j58-opposite", en: "opposite", phon: "[o-pe-zit]", fr: "en face de", exemple: "Opposite the station.", exempleFr: "En face de la gare." },
        { id: "j58-corner", en: "corner", phon: "[kor-neur]", fr: "coin (de rue)", exemple: "At the corner of the street.", exempleFr: "Au coin de la rue." },
        { id: "j58-far", en: "far", phon: "[far]", fr: "loin", exemple: "Is it far? — No, five minutes.", exempleFr: "C'est loin ? — Non, cinq minutes." },
      ],
    },
    grammaire: {
      titre: "L'impératif de l'itinéraire + Excuse me…",
      regle:
        "Demander : Excuse me, where is the station? / How do I get to the agency? Répondre à l'impératif : Go straight on. Turn left. Cross the street. It's next to the bakery, opposite the bank. Distance : Is it far? — It's a five-minute walk.",
      analogie:
        "Un GPS parle à l'impératif : « tournez à gauche » → Turn left. Toi aussi ! Sujet inutile, verbe direct — c'est l'itinéraire le plus simple du monde.",
      exemples: [
        { en: "Excuse me, where is the station?", fr: "Excusez-moi, où est la gare ?" },
        { en: "Go straight on, then turn left.", fr: "Allez tout droit, puis tournez à gauche." },
        { en: "It's opposite the bank.", fr: "C'est en face de la banque." },
        { en: "It's a five-minute walk.", fr: "C'est à cinq minutes à pied." },
      ],
      exercices: [
        { type: "trou", phrase: "Turn ___ at the bank. (à gauche)", r: "left", explication: "Turn left." },
        { type: "trou", phrase: "Go ___ on. (tout droit)", r: "straight", explication: "Go straight on." },
        { type: "traduction", sens: "fr-en", q: "Excusez-moi, où est la gare ?", r: "excuse me, where is the station", accepte: ["excuse me where is the station", "excuse me, where is the station?"], explication: "Excuse me, where is…?" },
        { type: "traduction", sens: "fr-en", q: "C'est à côté de la boulangerie.", r: "it's next to the bakery", accepte: ["it is next to the bakery"], explication: "next to = à côté de." },
        { type: "traduction", sens: "fr-en", q: "Traversez la rue et tournez à droite.", r: "cross the street and turn right", explication: "Cross + turn : impératifs enchaînés." },
        { type: "vraiFaux", affirmation: "« opposite » veut dire « à côté de ».", r: false, explication: "Non : opposite = en face de ; next to = à côté de." },
      ],
    },
    conjugaison: {
      titre: "How do I get to…? : LA question d'itinéraire",
      explication:
        "« How do I get to + lieu ? » = comment aller à… ? How do I get to the station? How do I get to your agency? Réponse : You go…, you turn…, ou à l'impératif direct. « get to » = atteindre un lieu.",
      tableau: [
        { pronom: "question", forme: "How do I get to…?", exemple: "How do I get to the port?" },
        { pronom: "réponse", forme: "impératif", exemple: "Take the first street on the left." },
        { pronom: "distance", forme: "Is it far?", exemple: "Is it far? — No, it's very close." },
        { pronom: "durée", forme: "a …-minute walk", exemple: "It's a ten-minute walk." },
      ],
      exercices: [
        { type: "trou", phrase: "How do I ___ to the station? (aller/atteindre)", r: "get", explication: "How do I get to…?" },
        { type: "trou", phrase: "Is it ___? — No, five minutes. (loin)", r: "far", explication: "Is it far?" },
        { type: "traduction", sens: "fr-en", q: "Comment aller à ton agence ?", r: "how do i get to your agency", accepte: ["how do i get to your agency?"], explication: "How do I get to your agency?" },
        { type: "traduction", sens: "fr-en", q: "C'est à dix minutes à pied.", r: "it's a ten-minute walk", accepte: ["it is a ten minute walk", "it's a ten minute walk"], explication: "a ten-minute walk." },
      ],
    },
    dialogue: {
      titre: "Guider un client vers l'agence",
      contexte: "Un client anglais (Emma) t'appelle : il est perdu, guide-le jusqu'à l'agence.",
      lignes: [
        { role: "Emma", en: "Hello! I'm a bit lost… How do I get to your agency?", fr: "Bonjour ! Je suis un peu perdu… Comment aller à votre agence ?" },
        { role: "Toi", en: "No problem! Where are you now?", fr: "Pas de souci ! Où êtes-vous, là ?" },
        { role: "Emma", en: "I'm at the station.", fr: "Je suis à la gare." },
        { role: "Toi", en: "Perfect. Go straight on and cross the big street.", fr: "Parfait. Allez tout droit et traversez la grande rue." },
        { role: "Emma", en: "OK… and then?", fr: "OK… et ensuite ?" },
        { role: "Toi", en: "Turn left at the bakery. The agency is opposite the bank.", fr: "Tournez à gauche à la boulangerie. L'agence est en face de la banque." },
        { role: "Emma", en: "Is it far?", fr: "C'est loin ?" },
        { role: "Toi", en: "No, it's a five-minute walk. See you soon!", fr: "Non, c'est à cinq minutes à pied. À tout de suite !" },
      ],
      aToi: [
        { consigne: "Dis « Allez tout droit et traversez la rue »", r: "go straight on and cross the street", accepte: ["go straight and cross the street"], explication: "Go straight on + cross." },
        { consigne: "Dis « Tournez à gauche à la boulangerie »", r: "turn left at the bakery", explication: "Turn left at…" },
        { consigne: "Dis « L'agence est en face de la banque »", r: "the agency is opposite the bank", explication: "opposite = en face de." },
        { consigne: "Dis « C'est à cinq minutes à pied »", r: "it's a five-minute walk", accepte: ["it is a five minute walk", "it's a five minute walk"], explication: "a five-minute walk." },
      ],
    },
    prononciation: {
      son: "stréït",
      titre: "straight : 8 lettres, 5 sons",
      explication:
        "« straight » se dit [STRÉÏT] — aigh = [éï], comme dans eight [éït] ! Et « opposite » = [O-pe-zit], accent au début. « corner » = [KOR-neur].",
      technique: "str + éït : colle les trois consonnes du début sans mettre de « e » entre elles (pas « seutréït » !).",
      mots: [
        { en: "straight", phon: "[STRÉÏT]" },
        { en: "eight", phon: "[ÉÏT] — pareil !" },
        { en: "opposite", phon: "[O-pe-zit]" },
        { en: "corner", phon: "[KOR-neur]" },
      ],
      phrase: "Go straight on — it's at the corner, opposite number eight.",
    },
    bilan: {
      resume: [
        "Demander : Excuse me, where is…? / How do I get to…?",
        "Guider : go straight on, turn left/right, cross, next to, opposite.",
        "Distance : Is it far? — It's a five-minute walk.",
      ],
      conseil: "Guide mentalement quelqu'un de chez toi à ta boulangerie, en anglais, virage par virage.",
      motivation: "Tu peux te repérer ET guider les autres dans n'importe quelle ville du monde. Liberté totale ! 🧭🌍",
    },
  },

  // ==================== JOUR 59 · 23 JUILLET — LES BOUTIQUES ====================
  {
    jour: 59,
    date: "23 juillet",
    mois: "juillet",
    titre: "Faire les boutiques",
    emoji: "🛍️",
    objectif: "Acheter des vêtements : taille, essayage, prix.",
    intro:
      "Séance shopping ! 🛍️ Demander une taille, essayer, trouver que c'est trop grand ou trop cher… Aujourd'hui tu apprends le rituel complet de la boutique — soldes d'été obligent !",
    vocabulaire: {
      intro: "Le kit de survie en boutique.",
      mots: [
        { id: "j59-size", en: "size", phon: "[saïz]", fr: "taille", exemple: "What size are you?", exempleFr: "Quelle taille faites-vous ?" },
        { id: "j59-tryon", en: "to try on", phon: "[traï on]", fr: "essayer (un vêtement)", exemple: "Can I try it on?", exempleFr: "Puis-je l'essayer ?" },
        { id: "j59-fittingroom", en: "fitting room", phon: "[fi-tingue roum]", fr: "cabine d'essayage", exemple: "The fitting room is there.", exempleFr: "La cabine est là-bas." },
        { id: "j59-toobig", en: "too big", phon: "[tou big]", fr: "trop grand", exemple: "It's too big for me.", exempleFr: "C'est trop grand pour moi." },
        { id: "j59-fit", en: "to fit", phon: "[fit]", fr: "aller (taille)", exemple: "It fits perfectly!", exempleFr: "C'est parfaitement à ma taille !" },
        { id: "j59-sales", en: "the sales", phon: "[dheu séïlz]", fr: "les soldes", exemple: "I love the summer sales.", exempleFr: "J'adore les soldes d'été." },
        { id: "j59-receipt", en: "receipt", phon: "[ri-siit]", fr: "ticket de caisse", exemple: "Here is your receipt.", exempleFr: "Voici votre ticket." },
        { id: "j59-card", en: "by card", phon: "[baï kard]", fr: "par carte", exemple: "I'll pay by card.", exempleFr: "Je paierai par carte." },
      ],
    },
    grammaire: {
      titre: "too + adjectif : trop…",
      regle:
        "« too » + adjectif = trop : too big (trop grand), too small (trop petit), too expensive (trop cher). Contraire : not … enough = pas assez : not big enough. Attention : too = trop (problème !) ≠ very = très (neutre).",
      analogie:
        "too, c'est le « trop » qui râle : too expensive ! not enough, c'est le « pas assez » : not big enough — remarque qu'enough se place APRÈS l'adjectif.",
      exemples: [
        { en: "It's too big for me.", fr: "C'est trop grand pour moi." },
        { en: "It's too expensive!", fr: "C'est trop cher !" },
        { en: "It's not big enough.", fr: "Ce n'est pas assez grand." },
        { en: "This dress is very nice.", fr: "Cette robe est très jolie. (very = très)" },
      ],
      exercices: [
        { type: "trou", phrase: "It's ___ big for me. (trop)", r: "too", explication: "too = trop." },
        { type: "traduction", sens: "fr-en", q: "C'est trop cher !", r: "it's too expensive", accepte: ["it is too expensive", "it's too expensive!"], explication: "too expensive." },
        { type: "trou", phrase: "It's not big ___. (pas assez grand)", r: "enough", explication: "enough APRÈS l'adjectif." },
        { type: "vraiFaux", affirmation: "« too » et « very » veulent dire la même chose.", r: false, explication: "very = très (neutre) ; too = trop (problème)." },
        { type: "traduction", sens: "fr-en", q: "La robe est trop petite, avez-vous une taille plus grande ?", r: "the dress is too small, do you have a bigger size", accepte: ["the dress is too small do you have a bigger size", "the dress is too small, do you have a bigger size?"], explication: "too small + a bigger size (comparatif d'hier !)." },
      ],
    },
    conjugaison: {
      titre: "Can I…? / Could I…? : demander poliment en boutique",
      explication:
        "Can I try it on? (Puis-je l'essayer ?) — poli et courant. Could I…? — encore plus poli. Et pour payer : Can I pay by card? Le vendeur te dira : Of course! / Sure! / The fitting room is over there.",
      tableau: [
        { pronom: "demander", forme: "Can I + base ?", exemple: "Can I try it on?" },
        { pronom: "plus poli", forme: "Could I + base ?", exemple: "Could I see the blue one?" },
        { pronom: "payer", forme: "Can I pay by…?", exemple: "Can I pay by card?" },
        { pronom: "réponse", forme: "Of course! / Sure!", exemple: "Of course! Over there." },
      ],
      exercices: [
        { type: "trou", phrase: "___ I try it on? (puis-je)", r: "Can", accepte: ["can", "could"], explication: "Can I try it on?" },
        { type: "traduction", sens: "fr-en", q: "Puis-je payer par carte ?", r: "can i pay by card", accepte: ["can i pay by card?", "could i pay by card"], explication: "Can I pay by card?" },
        { type: "traduction", sens: "fr-en", q: "Pourrais-je voir le bleu ?", r: "could i see the blue one", accepte: ["could i see the blue one?", "can i see the blue one"], explication: "Could I see the blue one?" },
        { type: "conjugaison", verbe: "to fit", q: "It ___ perfectly! (aller, taille)", r: "fits", explication: "it → fits." },
      ],
    },
    dialogue: {
      titre: "La robe des soldes",
      contexte: "Tu craques pour une robe en soldes. Emma joue la vendeuse.",
      lignes: [
        { role: "Emma", en: "Hello! Can I help you?", fr: "Bonjour ! Je peux vous aider ?" },
        { role: "Toi", en: "Yes, I love this dress. Can I try it on?", fr: "Oui, j'adore cette robe. Puis-je l'essayer ?" },
        { role: "Emma", en: "Of course! What size are you?", fr: "Bien sûr ! Quelle taille faites-vous ?" },
        { role: "Toi", en: "Medium. Where is the fitting room?", fr: "Medium. Où est la cabine ?" },
        { role: "Emma", en: "Over there, on the left. …So?", fr: "Là-bas, à gauche. …Alors ?" },
        { role: "Toi", en: "It's too big. Do you have a smaller size?", fr: "Elle est trop grande. Avez-vous une taille en dessous ?" },
        { role: "Emma", en: "Yes! Here — and it's 30% off.", fr: "Oui ! Tenez — et elle est à -30 %." },
        { role: "Toi", en: "Perfect, it fits! I'll take it. Can I pay by card?", fr: "Parfait, elle me va ! Je la prends. Je peux payer par carte ?" },
      ],
      aToi: [
        { consigne: "Demande « Puis-je l'essayer ? »", r: "can i try it on", accepte: ["can i try it on?", "could i try it on"], explication: "Can I try it on?" },
        { consigne: "Dis « Elle est trop grande. Avez-vous une taille en dessous ? »", r: "it's too big. do you have a smaller size", accepte: ["it's too big do you have a smaller size", "it is too big, do you have a smaller size?"], explication: "too big + smaller size." },
        { consigne: "Dis « Je la prends ! » (décision immédiate)", r: "i'll take it", accepte: ["i'll take it!", "i will take it"], explication: "Décision immédiate → I'll take it!" },
        { consigne: "Demande « Je peux payer par carte ? »", r: "can i pay by card", accepte: ["can i pay by card?"], explication: "Can I pay by card?" },
      ],
    },
    prononciation: {
      son: "p muet",
      titre: "receipt : le P invisible",
      explication:
        "« receipt » se dit [ri-SIIT] — le P est complètement muet ! L'anglais adore les lettres décoratives. De même : island [AÏ-leund] (s muet), know [NÔ] (k muet).",
      technique: "Oublie le p : ri-siit. Puis les autres espions : aï-leund, nô.",
      mots: [
        { en: "receipt", phon: "[ri-SIIT] — p muet" },
        { en: "size", phon: "[SAÏZ]" },
        { en: "clothes", phon: "[KLÔDHZ] — 1 syllabe" },
        { en: "enough", phon: "[i-NEUF] — gh = f !" },
      ],
      phrase: "Here's the receipt for the clothes — that's enough shopping!",
    },
    bilan: {
      resume: [
        "too + adjectif = trop ; not … enough = pas assez.",
        "Can I try it on? / Can I pay by card? : les questions de boutique.",
        "size, fitting room, sales, receipt : le décor du shopping.",
      ],
      conseil: "La prochaine fois que tu t'habilles, commente en anglais : too big? too small? it fits?",
      motivation: "Les soldes de Londres ou New York n'ont plus aucun secret pour toi. Shopping international débloqué ! 🛍️✨",
    },
  },

  // ==================== JOUR 60 · 24 JUILLET — LE TÉLÉPHONE ====================
  {
    jour: 60,
    date: "24 juillet",
    mois: "juillet",
    titre: "Au téléphone comme une pro",
    emoji: "☎️",
    objectif: "Répondre, faire patienter, prendre un rendez-vous au téléphone.",
    intro:
      "Jour 60, et un grand pas pro : LE TÉLÉPHONE ! ☎️ C'est l'exercice le plus impressionnant… et le plus codifié : les phrases sont toujours les mêmes. Apprends le script, et tu sauras répondre à n'importe quel client anglophone.",
    vocabulaire: {
      intro: "Les formules magiques du téléphone.",
      mots: [
        { id: "j60-call", en: "to call", phon: "[kol]", fr: "appeler", exemple: "I'll call you back.", exempleFr: "Je vous rappelle." },
        { id: "j60-speaking", en: "speaking", phon: "[spii-kingue]", fr: "elle-même / lui-même (au tél.)", exemple: "This is Emma speaking.", exempleFr: "Emma à l'appareil." },
        { id: "j60-hold", en: "to hold", phon: "[hôld]", fr: "patienter", exemple: "Can you hold, please?", exempleFr: "Pouvez-vous patienter ?" },
        { id: "j60-message", en: "message", phon: "[mè-sidj]", fr: "message", exemple: "Can I leave a message?", exempleFr: "Puis-je laisser un message ?" },
        { id: "j60-callback", en: "to call back", phon: "[kol bak]", fr: "rappeler", exemple: "She will call you back.", exempleFr: "Elle vous rappellera." },
        { id: "j60-moment", en: "one moment", phon: "[wan mo-meunt]", fr: "un instant", exemple: "One moment, please.", exempleFr: "Un instant, s'il vous plaît." },
        { id: "j60-number", en: "phone number", phon: "[fôn nam-beur]", fr: "numéro de téléphone", exemple: "What is your phone number?", exempleFr: "Quel est votre numéro ?" },
        { id: "j60-available", en: "available", phon: "[e-véï-le-beul]", fr: "disponible", exemple: "Are you available on Monday?", exempleFr: "Êtes-vous disponible lundi ?" },
      ],
    },
    grammaire: {
      titre: "Le script du téléphone pro",
      regle:
        "Répondre : Good morning, [Agence], Emma speaking. How can I help you? — Demander qui : Who's calling, please? — Faire patienter : One moment, please. Can you hold? — Absent·e : I'm sorry, she's not available. Can I take a message? — Finir : Thank you for calling. Goodbye!",
      analogie:
        "C'est une pièce de théâtre : les répliques ne changent jamais. Apprends ton rôle une fois, et tu seras à l'aise pour la vie. Les Anglais suivent EXACTEMENT ce script.",
      exemples: [
        { en: "Good morning, Sunny Homes, Emma speaking.", fr: "Bonjour, Sunny Homes, Emma à l'appareil." },
        { en: "How can I help you?", fr: "Comment puis-je vous aider ?" },
        { en: "One moment, please.", fr: "Un instant, s'il vous plaît." },
        { en: "Can I take a message?", fr: "Puis-je prendre un message ?" },
      ],
      exercices: [
        { type: "trou", phrase: "Good morning, Emma ___. (à l'appareil)", r: "speaking", explication: "« Emma speaking » = Emma à l'appareil." },
        { type: "traduction", sens: "fr-en", q: "Comment puis-je vous aider ?", r: "how can i help you", accepte: ["how can i help you?"], explication: "How can I help you?" },
        { type: "trou", phrase: "Can you ___, please? (patienter)", r: "hold", explication: "Can you hold?" },
        { type: "traduction", sens: "fr-en", q: "Puis-je prendre un message ?", r: "can i take a message", accepte: ["can i take a message?"], explication: "Can I take a message?" },
        { type: "traduction", sens: "fr-en", q: "Elle n'est pas disponible, elle vous rappellera.", r: "she's not available, she will call you back", accepte: ["she is not available she will call you back", "she's not available she'll call you back"], explication: "not available + will call back." },
        { type: "vraiFaux", affirmation: "« This is Emma speaking » veut dire « Emma est en train de parler fort ».", r: false, explication: "Non : c'est la formule « Emma à l'appareil »." },
      ],
    },
    conjugaison: {
      titre: "I'll : le futur au téléphone",
      explication:
        "Le téléphone vit au futur immédiat : I'll call you back (je vous rappelle), I'll put you through (je vous passe le poste), I'll check (je vérifie), He'll be back at two (il revient à 14 h). Chaque promesse au client = will !",
      tableau: [
        { pronom: "rappeler", forme: "I'll call you back", exemple: "I'll call you back in ten minutes." },
        { pronom: "transférer", forme: "I'll put you through", exemple: "One moment, I'll put you through." },
        { pronom: "vérifier", forme: "I'll check", exemple: "I'll check his diary." },
        { pronom: "retour", forme: "He'll be back at…", exemple: "He'll be back at two o'clock." },
      ],
      exercices: [
        { type: "trou", phrase: "I'll call you ___ in ten minutes. (rappeler)", r: "back", explication: "call you back = vous rappeler." },
        { type: "traduction", sens: "fr-en", q: "Je vérifie son agenda.", r: "i'll check his diary", accepte: ["i'll check her diary", "i will check his diary"], explication: "I'll check…" },
        { type: "traduction", sens: "fr-en", q: "Il sera de retour à quatorze heures.", r: "he'll be back at two o'clock", accepte: ["he will be back at two", "he'll be back at two"], explication: "He'll be back at two." },
        { type: "trou", phrase: "One moment, I'll put you ___. (je vous le passe)", r: "through", explication: "put you through = transférer l'appel." },
      ],
    },
    dialogue: {
      titre: "Un client anglais appelle l'agence",
      contexte: "Tu es à l'agence, le téléphone sonne : M. Brown veut visiter un appartement.",
      lignes: [
        { role: "Toi", en: "Good morning, Azur Immo, how can I help you?", fr: "Bonjour, Azur Immo, comment puis-je vous aider ?" },
        { role: "Emma", en: "Hello! This is Mr Brown. I'm calling about the flat on Rose Street.", fr: "Bonjour ! Ici M. Brown. J'appelle au sujet de l'appartement de la rue des Roses." },
        { role: "Toi", en: "Of course! Are you available on Thursday at ten?", fr: "Bien sûr ! Êtes-vous disponible jeudi à dix heures ?" },
        { role: "Emma", en: "Thursday… one moment, please… Yes, perfect!", fr: "Jeudi… un instant, s'il vous plaît… Oui, parfait !" },
        { role: "Toi", en: "Great. Can I have your phone number?", fr: "Super. Puis-je avoir votre numéro ?" },
        { role: "Emma", en: "It's 06 12 34 56 78.", fr: "C'est le 06 12 34 56 78." },
        { role: "Toi", en: "Thank you! I'll send you the address. See you on Thursday!", fr: "Merci ! Je vous envoie l'adresse. À jeudi !" },
        { role: "Emma", en: "Thank you for your help. Goodbye!", fr: "Merci pour votre aide. Au revoir !" },
      ],
      aToi: [
        { consigne: "Réponds « Bonjour, Azur Immo, comment puis-je vous aider ? »", r: "good morning, azur immo, how can i help you", accepte: ["good morning azur immo how can i help you", "good morning, azur immo, how can i help you?"], explication: "Le script d'ouverture complet." },
        { consigne: "Demande « Êtes-vous disponible jeudi à dix heures ? »", r: "are you available on thursday at ten", accepte: ["are you available on thursday at ten?", "are you available thursday at ten"], explication: "available + on Thursday at ten." },
        { consigne: "Demande « Puis-je avoir votre numéro de téléphone ? »", r: "can i have your phone number", accepte: ["can i have your phone number?"], explication: "Can I have your phone number?" },
        { consigne: "Dis « Je vous envoie l'adresse »", r: "i'll send you the address", accepte: ["i will send you the address"], explication: "Promesse → I'll send you…" },
      ],
    },
    prononciation: {
      son: "liaison",
      titre: "« Can I » = [ke-naï] : l'art de lier",
      explication:
        "Au téléphone, tout s'enchaîne : Can I → [ke-naï], one moment → [wan-mo-meunt], call you → [ko-liou]. Les mots se donnent la main — c'est ça qui fait « fluide » à l'oreille.",
      technique: "Dis « Can I help you? » comme UN seul mot : kenaïhelpiou. Lentement d'abord, puis à vitesse téléphone.",
      mots: [
        { en: "Can I", phon: "[ke-NAÏ] — liés" },
        { en: "call you back", phon: "[ko-liou-BAK]" },
        { en: "available", phon: "[e-VÉÏ-le-beul]" },
        { en: "through", phon: "[THROU] — gh muet" },
      ],
      phrase: "Can I help you? I'll call you back!",
    },
    bilan: {
      resume: [
        "Le script : …speaking / How can I help you? / One moment / Can I take a message?",
        "will partout : I'll call you back, I'll put you through, he'll be back.",
        "Prendre un RDV client au téléphone : c'est fait !",
      ],
      conseil: "Joue la scène toute seule à voix haute : décroche un appel imaginaire et déroule le script complet.",
      motivation: "Répondre en anglais au téléphone de l'agence : voilà une ligne en or sur ton CV. Tu l'as ! ☎️💼",
    },
  },
  // ==================== JOUR 61 · 25 JUILLET — L'E-MAIL ====================
  {
    jour: 61,
    date: "25 juillet",
    mois: "juillet",
    titre: "Écrire un e-mail simple",
    emoji: "📧",
    objectif: "Écrire un e-mail professionnel court, avec les bonnes formules.",
    intro:
      "Après le téléphone, l'écrit ! 📧 Un e-mail pro en anglais, c'est un squelette fixe : ouverture, message, clôture. Aujourd'hui tu apprends le squelette — ensuite tu n'auras plus qu'à changer le milieu.",
    vocabulaire: {
      intro: "Les briques de l'e-mail professionnel.",
      mots: [
        { id: "j61-dear", en: "Dear", phon: "[di-eur]", fr: "Cher / Chère (e-mail)", exemple: "Dear Mr Brown,", exempleFr: "Cher M. Brown," },
        { id: "j61-subject", en: "subject", phon: "[seub-djèkt]", fr: "objet (du mail)", exemple: "Subject: visit on Thursday", exempleFr: "Objet : visite de jeudi" },
        { id: "j61-send", en: "to send", phon: "[sènd]", fr: "envoyer", exemple: "I'll send the photos.", exempleFr: "J'enverrai les photos." },
        { id: "j61-receive", en: "to receive", phon: "[ri-siiv]", fr: "recevoir", exemple: "I received your email.", exempleFr: "J'ai bien reçu votre e-mail." },
        { id: "j61-reply", en: "to reply", phon: "[ri-plaï]", fr: "répondre (à l'écrit)", exemple: "Please reply before Friday.", exempleFr: "Merci de répondre avant vendredi." },
        { id: "j61-attached", en: "attached", phon: "[e-tatcht]", fr: "en pièce jointe", exemple: "Please find attached the contract.", exempleFr: "Veuillez trouver le contrat en pièce jointe." },
        { id: "j61-regards", en: "Best regards", phon: "[bèst ri-gardz]", fr: "Cordialement", exemple: "Best regards, Emma", exempleFr: "Cordialement, Emma" },
        { id: "j61-forward", en: "to look forward to", phon: "[louk for-weurd tou]", fr: "avoir hâte de", exemple: "I look forward to meeting you.", exempleFr: "J'ai hâte de vous rencontrer." },
      ],
    },
    grammaire: {
      titre: "Le squelette de l'e-mail pro",
      regle:
        "1) Ouverture : Dear Mr Brown, / Dear Madam, / Hello Sarah,. 2) Premier contact : I am writing about… (je vous écris au sujet de…) ou Thank you for your email. 3) Le cœur : courte phrase claire. 4) Clôture : I look forward to meeting you. + Best regards / Kind regards + ton prénom.",
      analogie:
        "Comme une lettre française : « Madame, … Cordialement » — mais en plus simple ! Pas de « veuillez agréer l'expression de mes salutations distinguées » : Best regards suffit. L'anglais pro est DIRECT.",
      exemples: [
        { en: "Dear Mr Brown,", fr: "Cher M. Brown," },
        { en: "I am writing about the flat on Rose Street.", fr: "Je vous écris au sujet de l'appartement de la rue des Roses." },
        { en: "Please find attached the photos.", fr: "Veuillez trouver les photos en pièce jointe." },
        { en: "Best regards, Emma", fr: "Cordialement, Emma" },
      ],
      exercices: [
        { type: "trou", phrase: "___ Mr Brown, (formule d'ouverture)", r: "Dear", accepte: ["dear"], explication: "Dear + nom = Cher…" },
        { type: "traduction", sens: "fr-en", q: "Je vous écris au sujet de l'appartement.", r: "i am writing about the flat", accepte: ["i'm writing about the flat", "i am writing about the apartment"], explication: "I am writing about…" },
        { type: "trou", phrase: "Please find ___ the contract. (en pièce jointe)", r: "attached", explication: "Please find attached…" },
        { type: "traduction", sens: "fr-en", q: "Merci pour votre e-mail.", r: "thank you for your email", explication: "Thank you for your email." },
        { type: "traduction", sens: "fr-en", q: "J'ai hâte de vous rencontrer.", r: "i look forward to meeting you", explication: "look forward to + -ing !" },
        { type: "vraiFaux", affirmation: "« Best regards » se place au début de l'e-mail.", r: false, explication: "Non : c'est la formule de clôture, à la fin." },
      ],
    },
    conjugaison: {
      titre: "Could you…? / I would like… : la politesse écrite",
      explication:
        "À l'écrit pro, on adoucit tout : Could you send me…? (pourriez-vous m'envoyer), I would like to visit… (je voudrais visiter), Would it be possible to…? (serait-il possible de). Le conditionnel, c'est le sourire de l'e-mail.",
      tableau: [
        { pronom: "demander", forme: "Could you + base ?", exemple: "Could you send me the photos?" },
        { pronom: "souhaiter", forme: "I would like to + base", exemple: "I would like to visit the flat." },
        { pronom: "possible ?", forme: "Would it be possible to…?", exemple: "Would it be possible to come on Monday?" },
        { pronom: "hâte", forme: "I look forward to + -ing", exemple: "I look forward to hearing from you." },
      ],
      exercices: [
        { type: "trou", phrase: "___ you send me the photos? (pourriez-vous)", r: "Could", accepte: ["could"], explication: "Could you…?" },
        { type: "traduction", sens: "fr-en", q: "Je voudrais visiter l'appartement samedi.", r: "i would like to visit the flat on saturday", accepte: ["i'd like to visit the flat on saturday", "i would like to visit the apartment on saturday"], explication: "I would like to + visit." },
        { type: "trou", phrase: "I look forward to ___ from you. (avoir de vos nouvelles)", r: "hearing", explication: "look forward to + -ing : hearing." },
        { type: "traduction", sens: "fr-en", q: "Serait-il possible de venir lundi ?", r: "would it be possible to come on monday", accepte: ["would it be possible to come on monday?"], explication: "Would it be possible to…?" },
      ],
    },
    dialogue: {
      titre: "L'e-mail au client, ligne par ligne",
      contexte: "Emma t'aide à écrire ta réponse à M. Brown après sa visite. Tu dictes, elle corrige.",
      lignes: [
        { role: "Emma", en: "OK, start your email!", fr: "OK, commence ton e-mail !" },
        { role: "Toi", en: "Dear Mr Brown, thank you for your visit this morning.", fr: "Cher M. Brown, merci pour votre visite de ce matin." },
        { role: "Emma", en: "Perfect. Now the info.", fr: "Parfait. Maintenant, les infos." },
        { role: "Toi", en: "Please find attached the photos and the price list.", fr: "Veuillez trouver en pièce jointe les photos et la liste des prix." },
        { role: "Emma", en: "Great. A question for him?", fr: "Super. Une question pour lui ?" },
        { role: "Toi", en: "Would it be possible to call you on Monday?", fr: "Serait-il possible de vous appeler lundi ?" },
        { role: "Emma", en: "And the ending?", fr: "Et la fin ?" },
        { role: "Toi", en: "I look forward to hearing from you. Best regards!", fr: "Dans l'attente de votre retour. Cordialement !" },
      ],
      aToi: [
        { consigne: "Écris l'ouverture : « Cher M. Brown, merci pour votre visite »", r: "dear mr brown, thank you for your visit", accepte: ["dear mr brown thank you for your visit"], explication: "Dear + merci." },
        { consigne: "Écris « Veuillez trouver les photos en pièce jointe »", r: "please find attached the photos", accepte: ["please find the photos attached"], explication: "Please find attached…" },
        { consigne: "Écris la clôture : « Dans l'attente de votre retour. Cordialement »", r: "i look forward to hearing from you. best regards", accepte: ["i look forward to hearing from you best regards"], explication: "look forward to hearing + Best regards." },
      ],
    },
    prononciation: {
      son: "silencieux",
      titre: "L'écrit se prononce aussi !",
      explication:
        "Même à l'écrit, tu liras tes mails dans ta tête — autant bien les entendre : subject [SEUB-djèkt], receive [ri-SIIV] (« i before e »…), reply [ri-PLAÏ], regards [ri-GARDZ].",
      technique: "Lis ton e-mail imaginaire à voix haute, comme si tu le dictais à quelqu'un.",
      mots: [
        { en: "subject", phon: "[SEUB-djèkt]" },
        { en: "receive", phon: "[ri-SIIV]" },
        { en: "reply", phon: "[ri-PLAÏ]" },
        { en: "regards", phon: "[ri-GARDZ]" },
      ],
      phrase: "Please reply — best regards!",
    },
    bilan: {
      resume: [
        "Le squelette : Dear… / I am writing about… / Please find attached… / Best regards.",
        "La politesse écrite : Could you…?, I would like…, Would it be possible…?",
        "look forward to + -ing : I look forward to hearing from you.",
      ],
      conseil: "Écris un vrai mini-mail (3 phrases) à un client imaginaire — sur papier ou dans ta tête, mais en entier.",
      motivation: "Téléphone ✓, e-mail ✓ : tu couvres maintenant les DEUX canaux du métier en anglais. Impressionnant ! 📧🌟",
    },
  },

  // ==================== JOUR 62 · 26 JUILLET — MON MÉTIER ====================
  {
    jour: 62,
    date: "26 juillet",
    mois: "juillet",
    titre: "Parler de mon métier",
    emoji: "💼",
    objectif: "Te présenter professionnellement : métier, missions, parcours.",
    intro:
      "« What do you do? » — LA question qu'on te posera toujours. 💼 Aujourd'hui, tu construis ta présentation pro : ton métier d'agent immobilier, ton alternance, tes missions. Ton pitch, en anglais.",
    vocabulaire: {
      intro: "Les mots de ta vie professionnelle.",
      mots: [
        { id: "j62-job", en: "job", phon: "[djob]", fr: "métier / emploi", exemple: "I love my job.", exempleFr: "J'adore mon métier." },
        { id: "j62-estateagent", en: "estate agent", phon: "[is-téït éï-djeunt]", fr: "agent immobilier", exemple: "I am an estate agent.", exempleFr: "Je suis agente immobilière." },
        { id: "j62-trainee", en: "trainee", phon: "[tréï-nii]", fr: "alternante / stagiaire", exemple: "I am a trainee at an agency.", exempleFr: "Je suis alternante dans une agence." },
        { id: "j62-studies", en: "studies", phon: "[steu-diz]", fr: "études", exemple: "My studies are about real estate.", exempleFr: "Mes études portent sur l'immobilier." },
        { id: "j62-colleague", en: "colleague", phon: "[ko-liig]", fr: "collègue", exemple: "My colleagues are nice.", exempleFr: "Mes collègues sont sympas." },
        { id: "j62-boss", en: "boss", phon: "[boss]", fr: "patron·ne", exemple: "My boss trusts me.", exempleFr: "Ma patronne me fait confiance." },
        { id: "j62-task", en: "task", phon: "[task]", fr: "tâche / mission", exemple: "My favourite task is the visits.", exempleFr: "Ma mission préférée, ce sont les visites." },
        { id: "j62-customer", en: "customer", phon: "[keus-teu-meur]", fr: "client·e (commerce)", exemple: "The customer is happy.", exempleFr: "Le client est content." },
      ],
    },
    grammaire: {
      titre: "Se présenter pro : I work as… / I am training to be…",
      regle:
        "Le pitch : I am an estate agent (métier) — I work as a trainee in an agency (poste) — I am studying real estate (études en cours → continu !) — I show flats, I call customers and I write adverts (missions → présent simple). Mélange les temps à bon escient !",
      analogie:
        "Ton pitch français : « je suis…, je travaille comme…, je fais… ». Même structure, avec la nuance : études EN COURS → I am studying (continu), missions HABITUELLES → I show, I call (simple).",
      exemples: [
        { en: "I am an estate agent.", fr: "Je suis agente immobilière." },
        { en: "I work as a trainee in an agency.", fr: "Je travaille comme alternante en agence." },
        { en: "I am studying real estate.", fr: "J'étudie l'immobilier (en ce moment)." },
        { en: "I show flats and I call customers.", fr: "Je fais visiter des appartements et j'appelle les clients." },
      ],
      exercices: [
        { type: "trou", phrase: "I work ___ a trainee. (comme)", r: "as", explication: "work as + métier." },
        { type: "traduction", sens: "fr-en", q: "Je suis agente immobilière.", r: "i am an estate agent", accepte: ["i'm an estate agent"], explication: "AN estate agent (voyelle !)." },
        { type: "traduction", sens: "fr-en", q: "J'étudie l'immobilier en ce moment.", r: "i am studying real estate", accepte: ["i'm studying real estate", "i am studying real estate at the moment"], explication: "Études en cours → continu." },
        { type: "traduction", sens: "fr-en", q: "Je fais visiter des appartements et j'appelle les clients.", r: "i show flats and i call customers", accepte: ["i show apartments and i call customers", "i show flats and call customers"], explication: "Missions habituelles → présent simple." },
        { type: "vraiFaux", affirmation: "On dit « I am a estate agent ».", r: false, explication: "Non : estate commence par une voyelle → AN estate agent." },
        { type: "traduction", sens: "fr-en", q: "Ma mission préférée, ce sont les visites.", r: "my favourite task is the visits", accepte: ["my favorite task is the visits", "my favourite task is visits"], explication: "my favourite task is…" },
      ],
    },
    conjugaison: {
      titre: "Le pitch en trois temps",
      explication:
        "Ton parcours utilise les trois temps de juillet ! Passé : I started last year (j'ai commencé l'an dernier). Présent : I work in an agency. Futur : I am going to open my own agency one day (un jour j'ouvrirai la mienne) !",
      tableau: [
        { pronom: "passé", forme: "I started…", exemple: "I started my studies last year." },
        { pronom: "présent", forme: "I work…", exemple: "I work in an agency in Nice." },
        { pronom: "présent continu", forme: "I am studying…", exemple: "I am studying for my diploma." },
        { pronom: "futur", forme: "I am going to…", exemple: "I'm going to open my own agency!" },
      ],
      exercices: [
        { type: "conjugaison", verbe: "to start", q: "I ___ my studies last year.", r: "started", explication: "Passé : started." },
        { type: "conjugaison", verbe: "to work", q: "She ___ in an agency in Nice.", r: "works", explication: "Présent : works." },
        { type: "trou", phrase: "One day, I'm going to ___ my own agency! (ouvrir)", r: "open", explication: "going to + open." },
        { type: "traduction", sens: "fr-en", q: "J'ai commencé l'année dernière et j'adore mon métier.", r: "i started last year and i love my job", explication: "started (passé) + love (présent)." },
      ],
    },
    dialogue: {
      titre: "Ton pitch en entretien",
      contexte: "Emma joue une recruteuse anglaise. Présente-toi !",
      lignes: [
        { role: "Emma", en: "So, tell me about yourself. What do you do?", fr: "Alors, parlez-moi de vous. Que faites-vous ?" },
        { role: "Toi", en: "I am a trainee estate agent. I work in an agency in Nice.", fr: "Je suis agente immobilière en alternance. Je travaille dans une agence à Nice." },
        { role: "Emma", en: "Interesting! What are your tasks?", fr: "Intéressant ! Quelles sont vos missions ?" },
        { role: "Toi", en: "I show flats, I call customers and I write adverts.", fr: "Je fais visiter, j'appelle les clients et je rédige des annonces." },
        { role: "Emma", en: "And your studies?", fr: "Et vos études ?" },
        { role: "Toi", en: "I am studying real estate. I started last year.", fr: "J'étudie l'immobilier. J'ai commencé l'an dernier." },
        { role: "Emma", en: "What about the future?", fr: "Et pour l'avenir ?" },
        { role: "Toi", en: "One day, I am going to open my own agency!", fr: "Un jour, je vais ouvrir ma propre agence !" },
      ],
      aToi: [
        { consigne: "Dis « Je suis agente immobilière en alternance »", r: "i am a trainee estate agent", accepte: ["i'm a trainee estate agent"], explication: "a trainee estate agent." },
        { consigne: "Dis « Je fais visiter, j'appelle les clients et je rédige des annonces »", r: "i show flats, i call customers and i write adverts", accepte: ["i show flats i call customers and i write adverts", "i show apartments, i call customers and i write ads"], explication: "Trois missions au présent simple." },
        { consigne: "Dis « J'ai commencé l'an dernier »", r: "i started last year", explication: "started = passé." },
        { consigne: "Dis « Un jour, je vais ouvrir ma propre agence ! »", r: "one day, i am going to open my own agency", accepte: ["one day i'm going to open my own agency", "one day i am going to open my own agency!"], explication: "going to + my own agency." },
      ],
    },
    prononciation: {
      son: "accents",
      titre: "colleague, customer : l'accent au bon endroit",
      explication:
        "Les mots pro ont leur accent tonique au DÉBUT : COLleague [KO-liig], CUStomer [KEUS-teu-meur], Estate agent [is-TÉÏT ÉÏ-djeunt] (estate s'accentue sur TÉÏT !). Frapper la bonne syllabe, c'est 50 % de la compréhension.",
      technique: "Tape dans tes mains sur la syllabe forte : KO-liig, KEUS-teu-meur, is-TÉÏT.",
      mots: [
        { en: "colleague", phon: "[KO-liig]" },
        { en: "customer", phon: "[KEUS-teu-meur]" },
        { en: "estate", phon: "[is-TÉÏT]" },
        { en: "trainee", phon: "[tréï-NII] — accent à la fin !" },
      ],
      phrase: "My colleague helps the customer — I'm the trainee estate agent.",
    },
    bilan: {
      resume: [
        "Le pitch : I am… / I work as… / I am studying… / I'm going to…",
        "Tes missions au présent simple : I show, I call, I write.",
        "Ton parcours en trois temps : started (passé), work (présent), going to open (futur).",
      ],
      conseil: "Récite ton pitch complet (6 phrases) à voix haute. C'est LE truc à savoir par cœur pour un entretien.",
      motivation: "Tu sais te présenter professionnellement en anglais. En entretien, 90 % des candidats ne savent pas le faire. Toi, si. 💼🔥",
    },
  },

  // ==================== JOUR 63 · 27 JUILLET — LA VISITE DU BIEN ====================
  {
    jour: 63,
    date: "27 juillet",
    mois: "juillet",
    titre: "La grande visite du bien",
    emoji: "🏠",
    objectif: "Mener une visite immobilière complète en anglais, du hall à l'offre.",
    intro:
      "LE grand jour du métier : la VISITE complète ! 🏠 Accueillir le client, faire le tour des pièces, vanter les atouts, répondre aux questions, parler prix. Tout ce que tu as appris en juillet sert aujourd'hui.",
    vocabulaire: {
      intro: "Les mots de la visite guidée.",
      mots: [
        { id: "j63-welcome", en: "to welcome", phon: "[wèl-keum]", fr: "accueillir", exemple: "Welcome! Please come in.", exempleFr: "Bienvenue ! Entrez, je vous prie." },
        { id: "j63-hall", en: "entrance hall", phon: "[èn-treunss hol]", fr: "entrée / hall", exemple: "This is the entrance hall.", exempleFr: "Voici l'entrée." },
        { id: "j63-spacious", en: "spacious", phon: "[spéï-cheuss]", fr: "spacieux", exemple: "The living room is very spacious.", exempleFr: "Le salon est très spacieux." },
        { id: "j63-storage", en: "storage", phon: "[sto-ridj]", fr: "rangements", exemple: "There is a lot of storage.", exempleFr: "Il y a beaucoup de rangements." },
        { id: "j63-heating", en: "heating", phon: "[hii-tingue]", fr: "chauffage", exemple: "The heating is brand new.", exempleFr: "Le chauffage est tout neuf." },
        { id: "j63-renovated", en: "renovated", phon: "[rè-no-véï-tid]", fr: "rénové", exemple: "It was renovated last year.", exempleFr: "Il a été rénové l'an dernier." },
        { id: "j63-offer", en: "to make an offer", phon: "[méïk eun o-feur]", fr: "faire une offre", exemple: "I want to make an offer.", exempleFr: "Je veux faire une offre." },
        { id: "j63-available2", en: "available", phon: "[e-véï-le-beul]", fr: "disponible", exemple: "The flat is available in September.", exempleFr: "L'appartement est disponible en septembre." },
      ],
    },
    grammaire: {
      titre: "Le fil de la visite : accueillir, guider, conclure",
      regle:
        "Accueillir : Welcome! Please come in. — Guider : This is the kitchen. Here is the bathroom. As you can see… (comme vous pouvez le voir) — Vanter : It's the brightest room. It was renovated last year. — Conclure : What do you think? Would you like to make an offer?",
      analogie:
        "La visite est un mini-spectacle en trois actes : l'entrée (Welcome), le tour (This is… / Here is…), le final (What do you think?). Tu es la guide ET la vendeuse.",
      exemples: [
        { en: "Welcome! Please come in.", fr: "Bienvenue ! Entrez, je vous prie." },
        { en: "This is the living room.", fr: "Voici le salon." },
        { en: "As you can see, it's very bright.", fr: "Comme vous voyez, c'est très lumineux." },
        { en: "What do you think?", fr: "Qu'en pensez-vous ?" },
      ],
      exercices: [
        { type: "trou", phrase: "Welcome! Please come ___. (entrez)", r: "in", explication: "Please come in." },
        { type: "trou", phrase: "___ is the kitchen. (voici)", r: "This", accepte: ["this", "here"], explication: "This is / Here is = voici." },
        { type: "traduction", sens: "fr-en", q: "Comme vous voyez, le salon est très spacieux.", r: "as you can see, the living room is very spacious", accepte: ["as you can see the living room is very spacious"], explication: "As you can see…" },
        { type: "traduction", sens: "fr-en", q: "Il a été rénové l'an dernier.", r: "it was renovated last year", explication: "was renovated = a été rénové." },
        { type: "traduction", sens: "fr-en", q: "Qu'en pensez-vous ?", r: "what do you think", accepte: ["what do you think?"], explication: "What do you think?" },
        { type: "traduction", sens: "fr-en", q: "Voulez-vous faire une offre ?", r: "would you like to make an offer", accepte: ["would you like to make an offer?", "do you want to make an offer"], explication: "Would you like to make an offer?" },
      ],
    },
    conjugaison: {
      titre: "Toute la visite, tous les temps",
      explication:
        "Une vraie visite jongle avec tout : présent (This is the kitchen), passé (It was renovated in 2024), comparatif (This room is bigger than the other one), futur (You will love the view!). C'est l'exercice total.",
      tableau: [
        { pronom: "présent", forme: "This is…", exemple: "This is the main bedroom." },
        { pronom: "passé", forme: "It was renovated…", exemple: "It was renovated last year." },
        { pronom: "comparatif", forme: "bigger than…", exemple: "This room is bigger than the office." },
        { pronom: "futur", forme: "You will love…", exemple: "You will love the view!" },
      ],
      exercices: [
        { type: "trou", phrase: "It ___ renovated in 2024. (a été)", r: "was", explication: "was renovated." },
        { type: "traduction", sens: "fr-en", q: "Vous allez adorer la vue !", r: "you will love the view", accepte: ["you'll love the view", "you will love the view!"], explication: "will love." },
        { type: "conjugaison", verbe: "to have", q: "The flat ___ a lot of storage.", r: "has", explication: "it → has." },
        { type: "traduction", sens: "fr-en", q: "Cette chambre est plus lumineuse que l'autre.", r: "this bedroom is brighter than the other one", accepte: ["this room is brighter than the other one", "this bedroom is brighter than the other"], explication: "brighter than." },
      ],
    },
    dialogue: {
      titre: "La visite complète, en vrai",
      contexte: "M. Brown (Emma) arrive pour la visite de l'appartement de la rue des Roses. À toi de jouer !",
      lignes: [
        { role: "Toi", en: "Mr Brown? Welcome! Please come in.", fr: "M. Brown ? Bienvenue ! Entrez, je vous prie." },
        { role: "Emma", en: "Thank you! Oh, nice entrance hall.", fr: "Merci ! Oh, jolie entrée." },
        { role: "Toi", en: "This is the living room. As you can see, it's very bright.", fr: "Voici le salon. Comme vous voyez, très lumineux." },
        { role: "Emma", en: "Beautiful! Is the kitchen new?", fr: "Magnifique ! La cuisine est neuve ?" },
        { role: "Toi", en: "Yes, it was renovated last year. And there is a lot of storage.", fr: "Oui, rénovée l'an dernier. Et il y a beaucoup de rangements." },
        { role: "Emma", en: "What about the heating?", fr: "Et le chauffage ?" },
        { role: "Toi", en: "The heating is brand new. You will love the view — come and see!", fr: "Le chauffage est tout neuf. Vous allez adorer la vue — venez voir !" },
        { role: "Emma", en: "Wow… OK. I think I want to make an offer!", fr: "Waouh… OK. Je crois que je veux faire une offre !" },
      ],
      aToi: [
        { consigne: "Accueille : « Bienvenue ! Entrez, je vous prie »", r: "welcome! please come in", accepte: ["welcome please come in"], explication: "Welcome! Please come in." },
        { consigne: "Dis « Voici le salon. Comme vous voyez, très lumineux »", r: "this is the living room. as you can see, it's very bright", accepte: ["this is the living room as you can see it's very bright", "this is the living room. as you can see, it is very bright"], explication: "This is… + As you can see…" },
        { consigne: "Dis « La cuisine a été rénovée l'an dernier »", r: "the kitchen was renovated last year", explication: "was renovated." },
        { consigne: "Dis « Vous allez adorer la vue »", r: "you will love the view", accepte: ["you'll love the view"], explication: "will love." },
      ],
    },
    prononciation: {
      son: "cheuss",
      titre: "spacious, delicious : la finale [cheuss]",
      explication:
        "La finale -cious / -tious se dit [cheuss] : spacious [SPÉÏ-cheuss], delicious [di-LI-cheuss]. Et -age se dit [idj] : storage [STO-ridj], message [MÈ-sidj], garage [gue-RADJ ou GA-ridj].",
      technique: "spéï + cheuss : deux syllabes, pas plus ! Puis sto-ridj (pas « sto-râge » à la française).",
      mots: [
        { en: "spacious", phon: "[SPÉÏ-cheuss]" },
        { en: "storage", phon: "[STO-ridj]" },
        { en: "heating", phon: "[HII-tingue]" },
        { en: "renovated", phon: "[RÈ-no-véï-tid]" },
      ],
      phrase: "A spacious flat with new heating and a lot of storage.",
    },
    bilan: {
      resume: [
        "Le fil de la visite : Welcome → This is… → As you can see… → What do you think?",
        "Les arguments : spacious, bright, renovated, storage, heating, view.",
        "Tous les temps mélangés au service de la vente.",
      ],
      conseil: "Fais visiter TON logement à un client imaginaire, pièce par pièce, à voix haute. Du hall au « What do you think? ».",
      motivation: "Tu viens de mener une visite immobilière complète en anglais. Relis cette phrase. C'est ÉNORME. 🏠🏆",
    },
  },

  // ==================== JOUR 64 · 28 JUILLET — RÉVISION SEMAINE 4 ====================
  {
    jour: 64,
    date: "28 juillet",
    mois: "juillet",
    titre: "Révision : l'anglais pratique",
    emoji: "🔁",
    objectif: "Consolider directions, boutiques, téléphone, e-mail et métier.",
    intro:
      "Quelle semaine ! 🔁 Directions, shopping, téléphone, e-mail, pitch pro, visite complète… Aujourd'hui on remet tout à plat et on ancre. C'est ta boîte à outils « vie réelle » — elle doit briller.",
    vocabulaire: {
      intro: "Le best-of de la semaine pratique.",
      mots: [
        { id: "j64-turnleft", en: "turn left", phon: "[teurn lèft]", fr: "tourner à gauche", exemple: "Turn left at the bank.", exempleFr: "Tournez à gauche à la banque." },
        { id: "j64-tryon2", en: "to try on", phon: "[traï on]", fr: "essayer (vêtement)", exemple: "Can I try it on?", exempleFr: "Puis-je l'essayer ?" },
        { id: "j64-hold2", en: "to hold", phon: "[hôld]", fr: "patienter (tél.)", exemple: "Can you hold, please?", exempleFr: "Pouvez-vous patienter ?" },
        { id: "j64-attached2", en: "attached", phon: "[e-tatcht]", fr: "en pièce jointe", exemple: "Please find attached…", exempleFr: "Veuillez trouver ci-joint…" },
        { id: "j64-trainee2", en: "trainee", phon: "[tréï-nii]", fr: "alternante", exemple: "I am a trainee.", exempleFr: "Je suis alternante." },
        { id: "j64-spacious2", en: "spacious", phon: "[spéï-cheuss]", fr: "spacieux", exemple: "A spacious living room.", exempleFr: "Un salon spacieux." },
        { id: "j64-offer2", en: "offer", phon: "[o-feur]", fr: "offre", exemple: "He made an offer.", exempleFr: "Il a fait une offre." },
        { id: "j64-helpyou", en: "How can I help you?", phon: "[haou kèn aï hèlp you]", fr: "comment puis-je vous aider ?", exemple: "Good morning! How can I help you?", exempleFr: "Bonjour ! Comment puis-je vous aider ?" },
      ],
    },
    grammaire: {
      titre: "Les scripts de la semaine, en accéléré",
      regle:
        "RUE : Excuse me, how do I get to…? / Turn left, go straight on. BOUTIQUE : Can I try it on? It's too big. TÉLÉPHONE : Emma speaking. Can I take a message? E-MAIL : Dear… / Best regards. PITCH : I work as… VISITE : Welcome! This is…",
      analogie:
        "Six situations, six scripts. La magie : ils ne changent JAMAIS. Ce ne sont pas des règles à comprendre mais des chorégraphies à danser. Tu les connais déjà — aujourd'hui on enchaîne les six.",
      exemples: [
        { en: "How do I get to the station?", fr: "Comment aller à la gare ?" },
        { en: "It's too expensive!", fr: "C'est trop cher !" },
        { en: "Can I take a message?", fr: "Puis-je prendre un message ?" },
        { en: "I look forward to hearing from you.", fr: "Dans l'attente de votre retour." },
      ],
      exercices: [
        { type: "traduction", sens: "fr-en", q: "Excusez-moi, comment aller à la gare ?", r: "excuse me, how do i get to the station", accepte: ["excuse me how do i get to the station", "excuse me, how do i get to the station?"], explication: "How do I get to…?" },
        { type: "trou", phrase: "It's ___ expensive for me. (trop)", r: "too", explication: "too = trop." },
        { type: "traduction", sens: "fr-en", q: "Elle n'est pas disponible. Puis-je prendre un message ?", r: "she's not available. can i take a message", accepte: ["she is not available can i take a message", "she's not available, can i take a message?"], explication: "Le script du téléphone." },
        { type: "trou", phrase: "Please find ___ the photos. (ci-joint)", r: "attached", explication: "Please find attached." },
        { type: "traduction", sens: "fr-en", q: "Je travaille comme alternante dans une agence.", r: "i work as a trainee in an agency", explication: "work as…" },
        { type: "traduction", sens: "fr-en", q: "Bienvenue ! Voici le salon.", r: "welcome! this is the living room", accepte: ["welcome this is the living room"], explication: "Welcome! This is…" },
      ],
    },
    conjugaison: {
      titre: "Les politesses : Can / Could / Would",
      explication:
        "L'échelle de la politesse : Can I…? (courant) → Could I / Could you…? (poli) → Would you like…? / Would it be possible…? (très poli). En pro, vise le milieu : Could you est parfait presque partout.",
      tableau: [
        { pronom: "courant", forme: "Can I…?", exemple: "Can I try it on?" },
        { pronom: "poli", forme: "Could you…?", exemple: "Could you send me the contract?" },
        { pronom: "très poli", forme: "Would you like…?", exemple: "Would you like to make an offer?" },
        { pronom: "souhait", forme: "I would like…", exemple: "I would like to visit the flat." },
      ],
      exercices: [
        { type: "trou", phrase: "___ you send me the photos, please? (poli)", r: "Could", accepte: ["could", "can"], explication: "Could you…?" },
        { type: "traduction", sens: "fr-en", q: "Voudriez-vous visiter l'appartement ?", r: "would you like to visit the flat", accepte: ["would you like to visit the flat?", "would you like to visit the apartment"], explication: "Would you like to…?" },
        { type: "trou", phrase: "I ___ like to make an offer. (voudrais)", r: "would", accepte: ["'d"], explication: "I would like to…" },
        { type: "traduction", sens: "fr-en", q: "Puis-je laisser un message ?", r: "can i leave a message", accepte: ["can i leave a message?", "could i leave a message"], explication: "Can I leave a message?" },
      ],
    },
    dialogue: {
      titre: "La journée pratique totale",
      contexte: "Une journée entière : tu guides un client, il visite, il appelle, tout s'enchaîne.",
      lignes: [
        { role: "Emma", en: "Hello! I have a visit at your agency, but I'm lost!", fr: "Bonjour ! J'ai une visite à votre agence, mais je suis perdu !" },
        { role: "Toi", en: "No problem! Go straight on and turn right at the bakery.", fr: "Pas de problème ! Tout droit puis à droite à la boulangerie." },
        { role: "Emma", en: "OK, I'm here! So, this is the flat?", fr: "Ça y est, je suis là ! Alors, c'est ça l'appartement ?" },
        { role: "Toi", en: "Welcome! Yes — as you can see, it's spacious and bright.", fr: "Bienvenue ! Oui — comme vous voyez, spacieux et lumineux." },
        { role: "Emma", en: "I love it. Could you send me the price list by email?", fr: "J'adore. Pourriez-vous m'envoyer les prix par e-mail ?" },
        { role: "Toi", en: "Of course. I'll send it tonight, with the photos attached.", fr: "Bien sûr. Je vous envoie ça ce soir, photos en pièce jointe." },
        { role: "Emma", en: "Perfect. I'll call you tomorrow!", fr: "Parfait. Je vous appelle demain !" },
        { role: "Toi", en: "Great! Thank you for your visit — speak soon!", fr: "Super ! Merci pour votre visite — à très vite !" },
      ],
      aToi: [
        { consigne: "Dis « Tout droit, puis à droite à la boulangerie »", r: "go straight on and turn right at the bakery", accepte: ["go straight on then turn right at the bakery", "go straight and turn right at the bakery"], explication: "Directions enchaînées." },
        { consigne: "Dis « Comme vous voyez, c'est spacieux et lumineux »", r: "as you can see, it's spacious and bright", accepte: ["as you can see it's spacious and bright", "as you can see it is spacious and bright"], explication: "As you can see + adjectifs." },
        { consigne: "Dis « Je vous envoie ça ce soir, avec les photos en pièce jointe »", r: "i'll send it tonight, with the photos attached", accepte: ["i'll send it tonight with the photos attached", "i will send it tonight with the photos attached"], explication: "I'll send + attached." },
      ],
    },
    prononciation: {
      son: "🔁",
      titre: "Récap sons pratiques",
      explication:
        "Les pièges de la semaine : straight [stréït], receipt [ri-siit] (p muet), through [throu], spacious [spéï-cheuss], colleague [ko-liig]. Cinq mots, cinq pièges déjoués.",
      technique: "Dis les cinq mots pièges d'affilée, puis la phrase du jour sans te presser.",
      mots: [
        { en: "straight", phon: "[STRÉÏT]" },
        { en: "receipt", phon: "[ri-SIIT]" },
        { en: "through", phon: "[THROU]" },
        { en: "spacious", phon: "[SPÉÏ-cheuss]" },
      ],
      phrase: "Go straight through — the spacious flat is on the right.",
    },
    bilan: {
      resume: [
        "Six scripts au point : rue, boutique, téléphone, e-mail, pitch, visite.",
        "L'échelle de politesse Can → Could → Would.",
        "Tu es opérationnelle dans la vraie vie ET au travail.",
      ],
      conseil: "Choisis LE script le moins naturel pour toi et rejoue-le trois fois à voix haute aujourd'hui.",
      motivation: "Il ne reste que trois jours en juillet — et ils vont être beaux : place au grand final ! 🔁🌟",
    },
  },

  // ==================== JOUR 65 · 29 JUILLET — LES TROIS TEMPS ====================
  {
    jour: 65,
    date: "29 juillet",
    mois: "juillet",
    titre: "Hier, aujourd'hui, demain",
    emoji: "🎯",
    objectif: "Jongler entre passé, présent et futur dans une même conversation.",
    intro:
      "Le grand jonglage ! 🎯 Une vraie conversation saute sans arrêt du passé (hier j'ai…) au présent (là je…) au futur (demain je vais…). Aujourd'hui, tu t'entraînes à changer de temps SANS réfléchir.",
    vocabulaire: {
      intro: "Les marqueurs de temps : tes panneaux indicateurs.",
      mots: [
        { id: "j65-yesterday2", en: "yesterday", phon: "[yès-teur-dèï]", fr: "hier", exemple: "Yesterday I worked.", exempleFr: "Hier, j'ai travaillé." },
        { id: "j65-lastnight2", en: "last night", phon: "[last naït]", fr: "hier soir", exemple: "Last night we went out.", exempleFr: "Hier soir, on est sortis." },
        { id: "j65-today2", en: "today", phon: "[tou-dèï]", fr: "aujourd'hui", exemple: "Today I am resting.", exempleFr: "Aujourd'hui, je me repose." },
        { id: "j65-rightnow2", en: "right now", phon: "[raït naou]", fr: "là, maintenant", exemple: "Right now, I'm reading.", exempleFr: "Là, je lis." },
        { id: "j65-tomorrow3", en: "tomorrow", phon: "[tou-mo-rô]", fr: "demain", exemple: "Tomorrow I'll call you.", exempleFr: "Demain, je t'appellerai." },
        { id: "j65-nextyear", en: "next year", phon: "[nèxt yi-eur]", fr: "l'année prochaine", exemple: "Next year, we are going to move.", exempleFr: "L'an prochain, on va déménager." },
        { id: "j65-already", en: "already", phon: "[ol-rè-di]", fr: "déjà", exemple: "I already called him.", exempleFr: "Je l'ai déjà appelé." },
        { id: "j65-yet", en: "not yet", phon: "[not yèt]", fr: "pas encore", exemple: "Not yet!", exempleFr: "Pas encore !" },
      ],
    },
    grammaire: {
      titre: "Le marqueur commande le temps",
      regle:
        "Lis le marqueur, choisis le temps : yesterday / last night / ago → PASSÉ (worked, went, was). now / right now / Look! → PRÉSENT CONTINU (I'm working). every day / usually → PRÉSENT SIMPLE (I work). tomorrow / next year / soon → FUTUR (I'll work / I'm going to work).",
      analogie:
        "Le marqueur de temps est un feu de signalisation : il s'allume AVANT que tu choisisses ton verbe. Prends l'habitude de le repérer d'abord, le reste suit tout seul.",
      exemples: [
        { en: "Yesterday I visited a flat.", fr: "Hier, j'ai visité un appartement." },
        { en: "Right now, I am writing an email.", fr: "Là, j'écris un e-mail." },
        { en: "I call my clients every day.", fr: "J'appelle mes clients tous les jours." },
        { en: "Tomorrow, I'm going to sign a contract.", fr: "Demain, je vais signer un contrat." },
      ],
      exercices: [
        { type: "trou", phrase: "Yesterday I ___ a flat. (visiter)", r: "visited", explication: "yesterday → passé : visited." },
        { type: "trou", phrase: "Right now, I ___ writing an email. (suis)", r: "am", accepte: ["'m"], explication: "right now → continu : am writing." },
        { type: "trou", phrase: "Tomorrow, I'm ___ to sign a contract. (futur)", r: "going", explication: "tomorrow → going to." },
        { type: "traduction", sens: "fr-en", q: "Hier j'ai travaillé, aujourd'hui je me repose.", r: "yesterday i worked, today i am resting", accepte: ["yesterday i worked today i'm resting", "yesterday i worked and today i am resting"], explication: "Passé puis continu." },
        { type: "traduction", sens: "fr-en", q: "Je l'ai déjà appelé, je le verrai demain.", r: "i already called him, i'll see him tomorrow", accepte: ["i already called him i will see him tomorrow", "i already called him and i'll see him tomorrow"], explication: "already + passé ; tomorrow + will." },
        { type: "traduction", sens: "fr-en", q: "L'année prochaine, nous allons déménager.", r: "next year, we are going to move", accepte: ["next year we're going to move", "next year we are going to move"], explication: "next year → going to move." },
      ],
    },
    conjugaison: {
      titre: "to be dans les trois dimensions",
      explication:
        "Le verbe-roi sous toutes ses formes : PASSÉ was/were → I was tired. PRÉSENT am/is/are → I am fine. FUTUR will be → I will be there. Un seul verbe, trois époques — si tu tiens be, tu tiens tout.",
      tableau: [
        { pronom: "passé", forme: "was / were", exemple: "I was at the agency." },
        { pronom: "présent", forme: "am / is / are", exemple: "I am at home." },
        { pronom: "futur", forme: "will be", exemple: "I will be there at ten." },
        { pronom: "futur proche", forme: "am going to be", exemple: "I'm going to be late!" },
      ],
      exercices: [
        { type: "conjugaison", verbe: "to be", q: "Yesterday I ___ at the agency.", r: "was", explication: "yesterday → was." },
        { type: "conjugaison", verbe: "to be", q: "Right now I ___ at home.", r: "am", explication: "présent → am." },
        { type: "conjugaison", verbe: "to be", q: "Tomorrow I will ___ there at ten.", r: "be", explication: "will + be." },
        { type: "traduction", sens: "fr-en", q: "Je vais être en retard !", r: "i'm going to be late", accepte: ["i am going to be late", "i'm going to be late!"], explication: "going to be late." },
      ],
    },
    dialogue: {
      titre: "Trois jours en une conversation",
      contexte: "Emma te fait raconter hier, commenter aujourd'hui et annoncer demain — sans filet !",
      lignes: [
        { role: "Emma", en: "Quick game! What did you do yesterday?", fr: "Petit jeu ! Qu'as-tu fait hier ?" },
        { role: "Toi", en: "Yesterday I showed a flat and the client made an offer!", fr: "Hier j'ai fait visiter un appartement et le client a fait une offre !" },
        { role: "Emma", en: "Amazing! And what are you doing right now?", fr: "Génial ! Et là, tu fais quoi ?" },
        { role: "Toi", en: "Right now I'm drinking a tea and talking to you.", fr: "Là, je bois un thé et je te parle." },
        { role: "Emma", en: "And tomorrow?", fr: "Et demain ?" },
        { role: "Toi", en: "Tomorrow we're signing the contract. I'm going to be ready!", fr: "Demain on signe le contrat. Je vais être prête !" },
        { role: "Emma", en: "You will be perfect, I'm sure.", fr: "Tu seras parfaite, j'en suis sûre." },
      ],
      aToi: [
        { consigne: "Dis « Hier, j'ai fait visiter un appartement »", r: "yesterday i showed a flat", accepte: ["yesterday i showed an apartment"], explication: "yesterday + showed." },
        { consigne: "Dis « Là, je bois un thé »", r: "right now i'm drinking a tea", accepte: ["right now i am drinking a tea", "right now i'm drinking tea"], explication: "right now + continu." },
        { consigne: "Dis « Demain, on signe le contrat »", r: "tomorrow we're signing the contract", accepte: ["tomorrow we are signing the contract"], explication: "Agenda → we're signing." },
        { consigne: "Dis « Je vais être prête ! »", r: "i'm going to be ready", accepte: ["i am going to be ready", "i'm going to be ready!"], explication: "going to be ready." },
      ],
    },
    prononciation: {
      son: "rythme",
      titre: "Le rythme : les mots-outils s'effacent",
      explication:
        "En anglais, les mots importants (verbes, noms) sont FORTS, les petits mots (am, to, the, at) s'effacent : « I'm going to the agency » → [aïm-gone-te-dhi-ÉÏ-djeun-si]. C'est le secret du « son » anglais.",
      technique: "Dis la phrase en tapant du pied sur les mots forts seulement : I'm GOING to the AGENCY.",
      mots: [
        { en: "I'm going to", phon: "[aïm-GO-ingue-te]" },
        { en: "at the", phon: "[eut-dheu] — effacés" },
        { en: "yesterday", phon: "[YÈS-teur-dèï] — accent fort" },
        { en: "already", phon: "[ol-RÈ-di]" },
      ],
      phrase: "Yesterday I worked — tomorrow I'm going to the agency.",
    },
    bilan: {
      resume: [
        "Le marqueur commande : yesterday → passé, now → continu, tomorrow → futur.",
        "to be en trois dimensions : was, am, will be.",
        "already (déjà) / not yet (pas encore).",
      ],
      conseil: "Raconte : une chose d'hier, une chose de maintenant, une chose de demain. En trois phrases, tous les jours.",
      motivation: "Passé-présent-futur dans la même conversation : c'est exactement ça, « parler anglais ». Et tu le fais. 🎯🔥",
    },
  },

  // ==================== JOUR 66 · 30 JUILLET — LA GRANDE CONVERSATION 2.0 ====================
  {
    jour: 66,
    date: "30 juillet",
    mois: "juillet",
    titre: "La grande conversation 2.0",
    emoji: "💬",
    objectif: "Tenir une conversation riche : opinions, réactions, trois temps.",
    intro:
      "Souviens-toi du 29 juin : ta première « grande conversation ». 💬 Un mois plus tard, la version 2.0 : tu donnes ton avis (I think…), tu réagis (Really? That's great!), tu racontes ET tu projettes. Écoute-toi parler : tout a changé.",
    vocabulaire: {
      intro: "Les mots qui font vivre une conversation.",
      mots: [
        { id: "j66-ithink", en: "I think", phon: "[aï think]", fr: "je pense", exemple: "I think it's a good idea.", exempleFr: "Je pense que c'est une bonne idée." },
        { id: "j66-opinion", en: "in my opinion", phon: "[in maï o-pi-nieun]", fr: "à mon avis", exemple: "In my opinion, it's too expensive.", exempleFr: "À mon avis, c'est trop cher." },
        { id: "j66-really", en: "Really?", phon: "[ri-li]", fr: "Ah bon ? / Vraiment ?", exemple: "Really? Tell me more!", exempleFr: "Vraiment ? Raconte !" },
        { id: "j66-actually", en: "actually", phon: "[ak-tchou-e-li]", fr: "en fait", exemple: "Actually, I prefer tea.", exempleFr: "En fait, je préfère le thé." },
        { id: "j66-ofcourse", en: "of course", phon: "[ov korss]", fr: "bien sûr", exemple: "Of course you can!", exempleFr: "Bien sûr que tu peux !" },
        { id: "j66-bytheway", en: "by the way", phon: "[baï dheu wèï]", fr: "au fait", exemple: "By the way, how is Leo?", exempleFr: "Au fait, comment va Leo ?" },
        { id: "j66-agree", en: "to agree", phon: "[e-grii]", fr: "être d'accord", exemple: "I agree with you.", exempleFr: "Je suis d'accord avec toi." },
        { id: "j66-thatsgreat", en: "That's great!", phon: "[dhats gréït]", fr: "C'est génial !", exemple: "That's great news!", exempleFr: "C'est une super nouvelle !" },
      ],
    },
    grammaire: {
      titre: "Donner son avis et réagir",
      regle:
        "Avis : I think (that)… / In my opinion… / For me… Accord : I agree. / Me too! / You're right. Désaccord doux : I'm not sure… / Actually, I prefer… Réactions : Really? / That's great! / Oh no! / No way! (pas possible !). Relance : And you? / What about you?",
      analogie:
        "Une conversation, c'est un match de ping-pong : avis (service), réaction (renvoi), relance (nouvel échange). Sans réactions, la balle tombe. Avec, ça vit !",
      exemples: [
        { en: "I think this flat is perfect.", fr: "Je pense que cet appartement est parfait." },
        { en: "I agree with you!", fr: "Je suis d'accord avec toi !" },
        { en: "Actually, I prefer the other one.", fr: "En fait, je préfère l'autre." },
        { en: "Really? That's great news!", fr: "Vraiment ? C'est une super nouvelle !" },
      ],
      exercices: [
        { type: "trou", phrase: "I ___ it's a good idea. (pense)", r: "think", explication: "I think (that)…" },
        { type: "traduction", sens: "fr-en", q: "Je suis d'accord avec toi.", r: "i agree with you", explication: "agree WITH you." },
        { type: "trou", phrase: "___, I prefer tea. (en fait)", r: "Actually", accepte: ["actually"], explication: "Actually = en fait." },
        { type: "traduction", sens: "fr-en", q: "À mon avis, c'est trop cher.", r: "in my opinion, it's too expensive", accepte: ["in my opinion it's too expensive", "in my opinion it is too expensive"], explication: "In my opinion…" },
        { type: "traduction", sens: "fr-en", q: "Vraiment ? C'est génial !", r: "really? that's great", accepte: ["really that's great", "really? that's great!"], explication: "Really? That's great!" },
        { type: "traduction", sens: "fr-en", q: "Au fait, comment va ta sœur ?", r: "by the way, how is your sister", accepte: ["by the way how is your sister", "by the way, how is your sister?"], explication: "By the way…" },
      ],
    },
    conjugaison: {
      titre: "I think + tous les temps",
      explication:
        "« I think » ouvre la porte à tout : I think it IS perfect (présent), I think it WAS a mistake (passé), I think it WILL be sunny (futur), I think we SHOULD visit it (conseil). Ton avis voyage dans le temps !",
      tableau: [
        { pronom: "présent", forme: "I think it is…", exemple: "I think it's perfect." },
        { pronom: "passé", forme: "I think it was…", exemple: "I think it was a mistake." },
        { pronom: "futur", forme: "I think it will…", exemple: "I think it will rain." },
        { pronom: "conseil", forme: "I think we should…", exemple: "I think we should call him." },
      ],
      exercices: [
        { type: "trou", phrase: "I think it ___ rain tomorrow. (futur)", r: "will", explication: "I think + will." },
        { type: "trou", phrase: "I think it ___ a mistake. (était)", r: "was", explication: "I think + was." },
        { type: "traduction", sens: "fr-en", q: "Je pense que nous devrions l'appeler.", r: "i think we should call him", explication: "I think we should…" },
        { type: "traduction", sens: "fr-en", q: "Je pense que c'était une bonne journée.", r: "i think it was a good day", explication: "I think it was…" },
      ],
    },
    dialogue: {
      titre: "La conversation libre",
      contexte: "Emma et toi papotez de tout : boulot, projets, avis. Comme deux amies.",
      lignes: [
        { role: "Emma", en: "So! How was your month?", fr: "Alors ! C'était comment, ton mois ?" },
        { role: "Toi", en: "Amazing. I think it was my best month ever.", fr: "Incroyable. Je pense que c'était mon meilleur mois." },
        { role: "Emma", en: "Really? Tell me more!", fr: "Vraiment ? Raconte !" },
        { role: "Toi", en: "I learned the past, the future… and my client made an offer!", fr: "J'ai appris le passé, le futur… et mon client a fait une offre !" },
        { role: "Emma", en: "That's great news! And what's next?", fr: "Super nouvelle ! Et la suite ?" },
        { role: "Toi", en: "In my opinion, August is going to be even better.", fr: "À mon avis, août va être encore mieux." },
        { role: "Emma", en: "I agree! By the way… shall we celebrate?", fr: "Je suis d'accord ! Au fait… on fête ça ?" },
        { role: "Toi", en: "Of course! Let's go — I'll pay!", fr: "Bien sûr ! Allons-y — j'invite !" },
      ],
      aToi: [
        { consigne: "Dis « Je pense que c'était mon meilleur mois »", r: "i think it was my best month", accepte: ["i think it was my best month ever"], explication: "I think + was + my best." },
        { consigne: "Réagis « Vraiment ? C'est une super nouvelle ! »", r: "really? that's great news", accepte: ["really that's great news", "really? that's great news!"], explication: "Really? That's great news!" },
        { consigne: "Dis « À mon avis, août va être encore mieux »", r: "in my opinion, august is going to be even better", accepte: ["in my opinion august is going to be even better"], explication: "In my opinion + going to be." },
        { consigne: "Dis « Bien sûr ! Allons-y — j'invite ! »", r: "of course! let's go — i'll pay", accepte: ["of course let's go i'll pay", "of course! let's go, i'll pay!"], explication: "Of course + Let's + I'll." },
      ],
    },
    prononciation: {
      son: "mélodie",
      titre: "La mélodie des réactions",
      explication:
        "Les réactions vivent par leur mélodie : Really? ↗ monte très haut (surprise), That's great! ↘ descend avec énergie (enthousiasme), Oh no… ↘ descend doucement (déception). La musique EST le message.",
      technique: "Exagère comme au théâtre : RII-li?? ↗ / DHATS GRÉÏT! ↘ Trois fois chacune, avec le sourire.",
      mots: [
        { en: "Really? ↗", phon: "[RI-li] — monte" },
        { en: "That's great! ↘", phon: "[dhats GRÉÏT]" },
        { en: "Of course!", phon: "[ov KORSS]" },
        { en: "actually", phon: "[AK-tchou-e-li]" },
      ],
      phrase: "Really? That's great! Of course I agree!",
    },
    bilan: {
      resume: [
        "Ton avis : I think…, In my opinion…, Actually…",
        "Tes réactions : Really? That's great! I agree! Of course!",
        "Une conversation riche sur les trois temps — la 2.0 est là.",
      ],
      conseil: "Aujourd'hui, réagis en anglais dans ta tête à trois nouvelles qu'on te donne : Really? / That's great! / Oh no…",
      motivation: "Compare-toi au 29 juin : avis, réactions, passé, futur… Ce n'est plus la même personne qui parle. 💬🌸",
    },
  },

  // ==================== JOUR 67 · 31 JUILLET — GRANDE RÉVISION FINALE ====================
  {
    jour: 67,
    date: "31 juillet",
    mois: "juillet",
    titre: "Grande révision finale de juillet",
    emoji: "🏆",
    objectif: "Rassembler TOUT juillet — et mesurer le chemin parcouru.",
    intro:
      "Dernier jour de juillet ! 🏆 En un mois : l'heure, deux présents, TOUT le passé, TROIS futurs, les comparaisons, et l'anglais pratique de ton métier. Aujourd'hui, on assemble le puzzle. Prête pour le tour d'honneur ?",
    vocabulaire: {
      intro: "Les 8 mots-symboles du mois — un par grande étape.",
      mots: [
        { id: "j67-oclock3", en: "o'clock", phon: "[o-klok]", fr: "… heures", exemple: "The visit is at ten o'clock.", exempleFr: "La visite est à dix heures." },
        { id: "j67-always2", en: "always", phon: "[ol-wéïz]", fr: "toujours", exemple: "I always do my best.", exempleFr: "Je fais toujours de mon mieux." },
        { id: "j67-went2", en: "went", phon: "[wènt]", fr: "allé (go)", exemple: "I went to the agency.", exempleFr: "Je suis allée à l'agence." },
        { id: "j67-will2", en: "will", phon: "[wil]", fr: "(futur)", exemple: "I will succeed.", exempleFr: "Je réussirai." },
        { id: "j67-better2", en: "better", phon: "[bè-teur]", fr: "meilleur / mieux", exemple: "Every day, my English is better.", exempleFr: "Chaque jour, mon anglais est meilleur." },
        { id: "j67-speaking2", en: "speaking", phon: "[spii-kingue]", fr: "à l'appareil", exemple: "Good morning, Emma speaking!", exempleFr: "Bonjour, Emma à l'appareil !" },
        { id: "j67-offer3", en: "offer", phon: "[o-feur]", fr: "offre", exemple: "He made an offer on the flat.", exempleFr: "Il a fait une offre sur l'appartement." },
        { id: "j67-proud", en: "proud", phon: "[praoud]", fr: "fier / fière", exemple: "I am so proud of you!", exempleFr: "Je suis si fière de toi !" },
      ],
    },
    grammaire: {
      titre: "Le récap TOTAL de juillet",
      regle:
        "(1) L'heure : It's half past two, at ten o'clock. (2) Fréquence : always/never AVANT le verbe. (3) -ing : I love reading ; I am reading. (4) Passé : was/were, -ed, irréguliers, did/didn't. (5) Futur : going to, will, présent continu d'agenda. (6) Comparaisons : bigger than, the best. (7) Pratique : directions, too big, Can I…?, Dear…, Welcome!",
      analogie:
        "Sept étages construits en un mois, sur les fondations de juin. Regarde l'immeuble : il est solide, il est à toi, et il n'attend que l'ascenseur d'août.",
      exemples: [
        { en: "Yesterday I visited three flats.", fr: "Hier, j'ai visité trois appartements." },
        { en: "Right now, I'm learning English.", fr: "En ce moment, j'apprends l'anglais." },
        { en: "Tomorrow, I'll do even better.", fr: "Demain, je ferai encore mieux." },
        { en: "It was the best month!", fr: "C'était le meilleur mois !" },
      ],
      exercices: [
        { type: "trou", phrase: "The visit is ___ ten o'clock. (à)", r: "at", explication: "at + heure." },
        { type: "trou", phrase: "She ___ works on Sunday. (jamais)", r: "never", explication: "never avant le verbe." },
        { type: "traduction", sens: "fr-en", q: "Hier, j'ai visité trois appartements.", r: "yesterday i visited three flats", accepte: ["yesterday i visited three apartments", "i visited three flats yesterday"], explication: "yesterday + visited." },
        { type: "trou", phrase: "___ you go to the meeting yesterday? (question passé)", r: "Did", accepte: ["did"], explication: "Did you go…?" },
        { type: "traduction", sens: "fr-en", q: "Demain, je vais signer mon premier contrat !", r: "tomorrow, i'm going to sign my first contract", accepte: ["tomorrow i am going to sign my first contract", "tomorrow i'm going to sign my first contract!"], explication: "going to sign." },
        { type: "traduction", sens: "fr-en", q: "C'est le plus bel appartement de la ville, et le prix est meilleur.", r: "it's the most beautiful flat in town, and the price is better", accepte: ["it's the most beautiful flat in town and the price is better", "it is the most beautiful apartment in the city and the price is better"], explication: "the most beautiful + better." },
        { type: "vraiFaux", affirmation: "Après « did », le verbe reste à la base : Did you see?", r: true, explication: "Oui ! did porte le passé, le verbe se repose." },
      ],
    },
    conjugaison: {
      titre: "Tous tes verbes, toutes tes époques",
      explication:
        "Le grand huit final : be (was/am/will be), have (had/has/will have), go (went/goes/is going to go), et les 14 irréguliers du mois. Si tu boucles ce tableau, tu boucles juillet.",
      tableau: [
        { pronom: "to be", forme: "was → am → will be", exemple: "I was shy, I am confident, I will be fluent!" },
        { pronom: "to have", forme: "had → has → will have", exemple: "She had a visit, she has a client, she'll have an offer." },
        { pronom: "to go", forme: "went → goes → is going to go", exemple: "He went home. He goes by bus." },
        { pronom: "les 14 irréguliers", forme: "went, saw, had, ate…", exemple: "…came, took, made, got, flew, swam, bought, slept, spoke, wrote." },
      ],
      exercices: [
        { type: "conjugaison", verbe: "to be", q: "I ___ shy in May, but now I am confident!", r: "was", explication: "En mai → was." },
        { type: "conjugaison", verbe: "to buy", q: "She ___ a flat last month.", r: "bought", explication: "buy → bought." },
        { type: "conjugaison", verbe: "to speak", q: "One day, I will ___ English perfectly.", r: "speak", explication: "will + base." },
        { type: "conjugaison", verbe: "to make", q: "Yesterday, the client ___ an offer.", r: "made", explication: "make → made." },
      ],
    },
    dialogue: {
      titre: "Le tour d'honneur",
      contexte: "Dernière conversation du mois : Emma te fait faire le tour complet de tout ce que tu sais.",
      lignes: [
        { role: "Emma", en: "Last day of July! How do you feel?", fr: "Dernier jour de juillet ! Comment te sens-tu ?" },
        { role: "Toi", en: "Proud! Two months ago, I didn't speak English at all.", fr: "Fière ! Il y a deux mois, je ne parlais pas anglais du tout." },
        { role: "Emma", en: "And now? Tell me what you can do!", fr: "Et maintenant ? Dis-moi ce que tu sais faire !" },
        { role: "Toi", en: "I can talk about my day, my past and my future plans.", fr: "Je peux parler de ma journée, de mon passé et de mes projets." },
        { role: "Emma", en: "What was the best moment of July?", fr: "Le meilleur moment de juillet ?" },
        { role: "Toi", en: "The property visit! My client loved the flat and made an offer.", fr: "La visite ! Mon client a adoré l'appartement et a fait une offre." },
        { role: "Emma", en: "And in August, you will speak even better.", fr: "Et en août, tu parleras encore mieux." },
        { role: "Toi", en: "I think August is going to be the best month ever. Thank you, Emma!", fr: "Je pense qu'août va être le meilleur mois de tous. Merci Emma !" },
      ],
      aToi: [
        { consigne: "Dis « Il y a deux mois, je ne parlais pas anglais du tout »", r: "two months ago, i didn't speak english at all", accepte: ["two months ago i didn't speak english at all", "two months ago i did not speak english at all"], explication: "ago + didn't speak." },
        { consigne: "Dis « Je peux parler de mon passé et de mes projets »", r: "i can talk about my past and my future plans", accepte: ["i can talk about my past and my plans"], explication: "can talk about…" },
        { consigne: "Dis « Mon client a adoré l'appartement et a fait une offre »", r: "my client loved the flat and made an offer", accepte: ["my client loved the apartment and made an offer"], explication: "loved + made : passé mixte." },
        { consigne: "Dis « Je pense qu'août va être le meilleur mois »", r: "i think august is going to be the best month", accepte: ["i think august is going to be the best month ever"], explication: "I think + going to be + the best." },
      ],
    },
    prononciation: {
      son: "🏆",
      titre: "Le best-of des sons de juillet",
      explication:
        "Ton florilège du mois : hour (h muet), worked [t], bought (gh muet), I'll [aïl], than [dhan], straight [stréït], receipt (p muet), spacious [cheuss]. Huit pièges — tous déjoués.",
      technique: "Lis la phrase finale lentement, en savourant. C'est TA phrase de fin de mois.",
      mots: [
        { en: "bought", phon: "[BOT]" },
        { en: "I'll", phon: "[AÏL]" },
        { en: "straight", phon: "[STRÉÏT]" },
        { en: "proud", phon: "[PRAOUD]" },
      ],
      phrase: "I worked for an hour every day — and I'll be proud forever!",
    },
    bilan: {
      resume: [
        "Juillet complet : heure, deux présents, tout le passé, trois futurs, comparaisons, anglais pratique et pro.",
        "14 verbes irréguliers, 6 scripts de la vraie vie, la visite immobilière en entier.",
        "Tu tiens une conversation sur les trois temps, avec ton avis et tes réactions.",
      ],
      conseil: "Refais le dialogue du tour d'honneur sans regarder. Puis ferme les yeux et mesure : 26 mai → 31 juillet.",
      motivation: "Il y a 67 jours, tu ne savais pas dire « hello ». Aujourd'hui tu vends des appartements en anglais. Je n'ai jamais été aussi fière. À très vite pour août — le mois de la conversation totale ! 🌸🏆☀️",
    },
  },
]
