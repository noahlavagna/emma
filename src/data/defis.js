// =====================================================================
//  LES DÉFIS — 2 « questions dures » par jour du parcours.
//  Un cran AU-DESSUS de la leçon du jour : phrases complètes, cumulatives,
//  qui combinent plusieurs points déjà vus. Difficiles mais faisables.
//
//  Réussir une question dure du PREMIER coup (sans révéler la réponse)
//  fait gagner un GEL DE SÉRIE (« streak freeze »), max 3 en inventaire.
//  Un gel sauve ta flamme un jour manqué (voir lib/serie.js).
//
//  Types : 'traduction' (q, sens, r, accepte?, explication) et 'trou'.
//  Chaque défi porte un `id` unique (pour ne pas le récompenser deux fois).
// =====================================================================

export const DEFIS = {
  1: [
    { id: 'dur-j1-1', type: 'traduction', sens: 'fr-en', q: "Ce n'est pas un taxi.", r: "it's not a taxi", accepte: ['it is not a taxi', "it isn't a taxi"], explication: "« It's not a taxi » — la forme négative de « it's »." },
    { id: 'dur-j1-2', type: 'traduction', sens: 'fr-en', q: "C'est le grand hôtel.", r: "it's the big hotel", accepte: ['it is the big hotel'], explication: "« It's the big hotel » — l'adjectif « big » avant le nom." },
  ],
  2: [
    { id: 'dur-j2-1', type: 'traduction', sens: 'fr-en', q: "Comment épelles-tu ton nom ?", r: 'how do you spell your name', accepte: ['how do you spell your name?'], explication: "« How do you spell your name? »." },
    { id: 'dur-j2-2', type: 'traduction', sens: 'fr-en', q: "Quel est ton nom ?", r: 'what is your name', accepte: ["what's your name", 'what is your name?'], explication: "« What is your name? » (vu dans le dialogue du jour)." },
  ],
  3: [
    { id: 'dur-j3-1', type: 'traduction', sens: 'fr-en', q: "Peux-tu m'aider, s'il te plaît ?", r: 'can you help me, please', accepte: ['can you help me please'], explication: "« Can you help me, please? »." },
    { id: 'dur-j3-2', type: 'traduction', sens: 'fr-en', q: "Désolée, je ne comprends pas.", r: "sorry, i don't understand", accepte: ["sorry i don't understand", 'sorry, i do not understand'], explication: "« Sorry, I don't understand »." },
  ],
  4: [
    { id: 'dur-j4-1', type: 'traduction', sens: 'fr-en', q: "Aujourd'hui, c'est lundi.", r: "today is monday", accepte: ["it's monday today", 'it is monday today'], explication: "« Today is Monday » — Monday prend une majuscule." },
    { id: 'dur-j4-2', type: 'traduction', sens: 'fr-en', q: "On se voit vendredi.", r: 'see you on friday', accepte: ['see you on friday!'], explication: "« See you on Friday » — « on » devant le jour." },
  ],
  5: [
    { id: 'dur-j5-1', type: 'traduction', sens: 'fr-en', q: "J'ai vingt ans.", r: 'i am twenty years old', accepte: ["i'm twenty years old", 'i am 20 years old', "i'm 20 years old"], explication: "L'âge se dit avec « to be » : I am … years old." },
    { id: 'dur-j5-2', type: 'traduction', sens: 'fr-en', q: "Quel âge as-tu ?", r: 'how old are you', accepte: ['how old are you?'], explication: "« How old are you? » — littéralement « combien vieux es-tu ? »." },
  ],
  6: [
    { id: 'dur-j6-1', type: 'traduction', sens: 'fr-en', q: "J'ai douze ans et c'est lundi.", r: "i am twelve years old and it's monday", accepte: ["i'm twelve years old and it's monday", 'i am twelve years old and it is monday'], explication: "On relie deux idées avec « and »." },
    { id: 'dur-j6-2', type: 'traduction', sens: 'en-fr', q: 'How old are you?', r: 'quel âge as-tu', accepte: ['quel age as tu', 'tu as quel âge', 'quel âge avez-vous'], explication: "« How old are you? » = quel âge as-tu ?" },
  ],
  7: [
    { id: 'dur-j7-1', type: 'traduction', sens: 'fr-en', q: "Elle est mon amie.", r: 'she is my friend', accepte: ["she's my friend"], explication: "« She is my friend » — he/she/it → is." },
    { id: 'dur-j7-2', type: 'traduction', sens: 'fr-en', q: "Nous sommes prêts.", r: 'we are ready', accepte: ["we're ready"], explication: "« We are ready » — we → are." },
  ],
  8: [
    { id: 'dur-j8-1', type: 'traduction', sens: 'fr-en', q: "Merci beaucoup, tu es très gentille.", r: 'thank you very much, you are very kind', accepte: ["thank you very much you're very kind", 'thank you very much you are very kind'], explication: "« Thank you very much, you are very kind »." },
    { id: 'dur-j8-2', type: 'traduction', sens: 'fr-en', q: "C'est un animal.", r: "it's an animal", accepte: ['it is an animal'], explication: "« an » devant un son voyelle : an animal." },
  ],
  9: [
    { id: 'dur-j9-1', type: 'traduction', sens: 'fr-en', q: "La voiture rouge est grande.", r: 'the red car is big', explication: "Adjectif avant le nom (red car) + to be." },
    { id: 'dur-j9-2', type: 'traduction', sens: 'fr-en', q: "Le chat noir est petit.", r: 'the black cat is small', explication: "« The black cat is small »." },
  ],
  10: [
    { id: 'dur-j10-1', type: 'traduction', sens: 'fr-en', q: "J'ai trois chats et deux chiens.", r: 'i have three cats and two dogs', explication: "Pluriel en -s + « and »." },
    { id: 'dur-j10-2', type: 'traduction', sens: 'fr-en', q: "Elle a cinq livres.", r: 'she has five books', explication: "he/she/it → has." },
  ],
  11: [
    { id: 'dur-j11-1', type: 'traduction', sens: 'fr-en', q: "Comment t'appelles-tu et d'où viens-tu ?", r: 'what is your name and where are you from', accepte: ["what's your name and where are you from", 'what is your name and where are you from?'], explication: "Deux questions reliées par « and »." },
    { id: 'dur-j11-2', type: 'traduction', sens: 'fr-en', q: "Enchantée ! Je viens d'Italie.", r: "nice to meet you! i am from italy", accepte: ["nice to meet you i'm from italy", "nice to meet you! i'm from italy"], explication: "« Nice to meet you! I am from Italy »." },
  ],
  12: [
    { id: 'dur-j12-1', type: 'traduction', sens: 'fr-en', q: "C'est le frère de ma mère.", r: "it's my mother's brother", accepte: ["it is my mother's brother", "it's my mothers brother"], explication: "Possession avec 's : my mother's brother." },
    { id: 'dur-j12-2', type: 'traduction', sens: 'fr-en', q: "Mon père a une grande famille.", r: 'my father has a big family', explication: "has + possessif." },
  ],
  13: [
    { id: 'dur-j13-1', type: 'traduction', sens: 'fr-en', q: "Elle habite à Paris et elle travaille tous les jours.", r: 'she lives in paris and she works every day', explication: "Présent simple 3e pers. (lives, works) + « and »." },
    { id: 'dur-j13-2', type: 'traduction', sens: 'fr-en', q: "Il mange du pain tous les jours.", r: 'he eats bread every day', explication: "he → eats (+ -s)." },
  ],
  14: [
    { id: 'dur-j14-1', type: 'traduction', sens: 'fr-en', q: "Où habite ton frère ?", r: 'where does your brother live', accepte: ['where does your brother live?'], explication: "he/she → Does + verbe sans -s." },
    { id: 'dur-j14-2', type: 'traduction', sens: 'fr-en', q: "Qu'est-ce que tu manges le matin ?", r: 'what do you eat in the morning', accepte: ['what do you eat in the morning?'], explication: "« What do you eat in the morning? »." },
  ],
  15: [
    { id: 'dur-j15-1', type: 'traduction', sens: 'fr-en', q: "Elle ne travaille pas et elle n'habite pas ici.", r: "she doesn't work and she doesn't live here", accepte: ['she does not work and she does not live here'], explication: "doesn't + verbe sans -s, deux fois." },
    { id: 'dur-j15-2', type: 'traduction', sens: 'fr-en', q: "Je ne comprends pas la question.", r: "i don't understand the question", accepte: ['i do not understand the question'], explication: "« I don't understand the question »." },
  ],
  16: [
    { id: 'dur-j16-1', type: 'traduction', sens: 'fr-en', q: "Elle aime le thé mais elle n'aime pas le café.", r: "she likes tea but she doesn't like coffee", accepte: ['she likes tea but she does not like coffee'], explication: "Présent + négation reliés par « but »." },
    { id: 'dur-j16-2', type: 'traduction', sens: 'fr-en', q: "Est-ce que tu as une grande famille ?", r: 'do you have a big family', accepte: ['do you have a big family?'], explication: "« Do you have a big family? »." },
  ],
  17: [
    { id: 'dur-j17-1', type: 'traduction', sens: 'fr-en', q: "Elle mange une pomme et un œuf tous les matins.", r: 'she eats an apple and an egg every morning', explication: "an apple, an egg (son voyelle) + 3e pers." },
    { id: 'dur-j17-2', type: 'traduction', sens: 'fr-en', q: "Je ne mange pas de viande, mais j'aime le poisson.", r: "i don't eat meat but i like fish", accepte: ['i do not eat meat but i like fish'], explication: "Négation + « but »." },
  ],
  18: [
    { id: 'dur-j18-1', type: 'traduction', sens: 'fr-en', q: "Je voudrais un café chaud et un verre d'eau, s'il te plaît.", r: 'i would like a hot coffee and a glass of water, please', accepte: ["i'd like a hot coffee and a glass of water please", 'i would like a hot coffee and a glass of water please'], explication: "I would like … and …, please." },
    { id: 'dur-j18-2', type: 'traduction', sens: 'fr-en', q: "Est-ce que je peux avoir un thé au lait ?", r: 'can i have a tea with milk', accepte: ['can i have a tea with milk?'], explication: "« Can I have a tea with milk? »." },
  ],
  19: [
    { id: 'dur-j19-1', type: 'traduction', sens: 'fr-en', q: "Elle porte une robe rouge et des chaussures noires.", r: 'she wears a red dress and black shoes', explication: "wears + adjectifs avant les noms." },
    { id: 'dur-j19-2', type: 'traduction', sens: 'fr-en', q: "Je ne porte pas de chapeau aujourd'hui.", r: "i don't wear a hat today", accepte: ['i do not wear a hat today'], explication: "« I don't wear a hat today »." },
  ],
  20: [
    { id: 'dur-j20-1', type: 'traduction', sens: 'fr-en', q: "Il y a deux chambres et une grande cuisine dans la maison.", r: 'there are two bedrooms and a big kitchen in the house', explication: "There are … and … in the house." },
    { id: 'dur-j20-2', type: 'traduction', sens: 'fr-en', q: "Il y a un lit et une fenêtre dans ma chambre.", r: 'there is a bed and a window in my bedroom', accepte: ["there's a bed and a window in my bedroom"], explication: "There is … in my bedroom." },
  ],
  21: [
    { id: 'dur-j21-1', type: 'traduction', sens: 'fr-en', q: "Elle est mon amie, elle a une grande maison et elle est très gentille.", r: 'she is my friend, she has a big house and she is very kind', accepte: ["she's my friend she has a big house and she's very kind", 'she is my friend she has a big house and she is very kind'], explication: "to be + to have, reliés par « and »." },
    { id: 'dur-j21-2', type: 'traduction', sens: 'fr-en', q: "Je suis contente et j'ai une grande famille.", r: 'i am happy and i have a big family', accepte: ["i'm happy and i have a big family"], explication: "« I am happy and I have a big family »." },
  ],
  22: [
    { id: 'dur-j22-1', type: 'traduction', sens: 'fr-en', q: "Il fait soleil et chaud, mais il y a du vent.", r: "it's sunny and hot, but it's windy", accepte: ["it's sunny and hot but it's windy", 'it is sunny and hot but it is windy'], explication: "It's … but it's … (météo)." },
    { id: 'dur-j22-2', type: 'traduction', sens: 'fr-en', q: "Aujourd'hui il pleut et il fait froid.", r: "today it's rainy and cold", accepte: ['today it is rainy and cold', "it's rainy and cold today"], explication: "« Today it's rainy and cold »." },
  ],
  23: [
    { id: 'dur-j23-1', type: 'traduction', sens: 'fr-en', q: "Elle a de longs cheveux et de grands yeux.", r: 'she has long hair and big eyes', explication: "has ; hair (singulier), eyes (pluriel)." },
    { id: 'dur-j23-2', type: 'traduction', sens: 'fr-en', q: "J'ai mal à la tête et aux pieds.", r: 'my head and my feet hurt', accepte: ['my head and feet hurt'], explication: "feet = pluriel irrégulier de foot." },
  ],
  24: [
    { id: 'dur-j24-1', type: 'traduction', sens: 'fr-en', q: "Le chien court dans le jardin et le chat dort.", r: 'the dog runs in the garden and the cat sleeps', explication: "3e pers. (runs, sleeps) + « and »." },
    { id: 'dur-j24-2', type: 'traduction', sens: 'fr-en', q: "Mon chat ne mange pas de poisson.", r: "my cat doesn't eat fish", accepte: ['my cat does not eat fish'], explication: "Négation 3e pers. : doesn't eat." },
  ],
  25: [
    { id: 'dur-j25-1', type: 'traduction', sens: 'fr-en', q: "J'aime lire et dessiner, mais je n'aime pas cuisiner.", r: "i like to read and draw but i don't like to cook", accepte: ["i like reading and drawing but i don't like cooking", 'i like to read and draw but i do not like to cook'], explication: "like to … + but + don't like." },
    { id: 'dur-j25-2', type: 'traduction', sens: 'fr-en', q: "Elle adore chanter et danser.", r: 'she loves to sing and dance', accepte: ['she loves singing and dancing'], explication: "loves to … / loves …-ing." },
  ],
  26: [
    { id: 'dur-j26-1', type: 'traduction', sens: 'fr-en', q: "On se voit à sept heures du soir.", r: "see you at seven o'clock in the evening", accepte: ['see you at seven in the evening'], explication: "at + heure + in the evening." },
    { id: 'dur-j26-2', type: 'traduction', sens: 'fr-en', q: "à huit heures du matin", r: "at eight o'clock in the morning", accepte: ['at eight in the morning'], explication: "« at eight o'clock in the morning »." },
  ],
  27: [
    { id: 'dur-j27-1', type: 'traduction', sens: 'fr-en', q: "Elle n'habite pas ici et elle ne travaille pas le lundi.", r: "she doesn't live here and she doesn't work on monday", accepte: ['she does not live here and she does not work on monday'], explication: "doesn't (×2) + « on Monday »." },
    { id: 'dur-j27-2', type: 'traduction', sens: 'fr-en', q: "Où est-ce que ton frère travaille ?", r: 'where does your brother work', accepte: ['where does your brother work?'], explication: "Where does … work?" },
  ],
  28: [
    { id: 'dur-j28-1', type: 'traduction', sens: 'fr-en', q: "Excuse-moi, où est la gare, s'il te plaît ?", r: 'excuse me, where is the station, please', accepte: ['excuse me where is the station please'], explication: "« Excuse me, where is the station, please? »." },
    { id: 'dur-j28-2', type: 'traduction', sens: 'fr-en', q: "Il y a un marché et un parc près de l'école.", r: 'there is a market and a park near the school', accepte: ["there's a market and a park near the school"], explication: "There is … near the school." },
  ],
  29: [
    { id: 'dur-j29-1', type: 'traduction', sens: 'fr-en', q: "Les pommes sont trop chères pour moi.", r: 'the apples are too expensive for me', explication: "« too expensive » = trop cher." },
    { id: 'dur-j29-2', type: 'traduction', sens: 'fr-en', q: "Je voudrais acheter du pain et du fromage.", r: 'i would like to buy bread and cheese', accepte: ["i'd like to buy bread and cheese"], explication: "I would like to buy … and …" },
  ],
  30: [
    { id: 'dur-j30-1', type: 'traduction', sens: 'fr-en', q: "Je vais à l'école en bus et elle y va à pied.", r: 'i go to school by bus and she goes on foot', explication: "by bus / on foot ; goes (3e pers.)." },
    { id: 'dur-j30-2', type: 'traduction', sens: 'fr-en', q: "Comment vas-tu au travail ?", r: 'how do you go to work', accepte: ['how do you go to work?'], explication: "« How do you go to work? »." },
  ],
  31: [
    { id: 'dur-j31-1', type: 'traduction', sens: 'fr-en', q: "C'est la voiture de mon oncle et le vélo de ma tante.", r: "it's my uncle's car and my aunt's bike", accepte: ["it is my uncle's car and my aunt's bike"], explication: "Deux possessions avec 's." },
    { id: 'dur-j31-2', type: 'traduction', sens: 'fr-en', q: "Ma grand-mère a deux chats et un chien.", r: 'my grandmother has two cats and a dog', explication: "has + pluriel + « and »." },
  ],
  32: [
    { id: 'dur-j32-1', type: 'traduction', sens: 'fr-en', q: "Mon meilleur ami est grand, gentil et très drôle.", r: 'my best friend is tall, kind and very funny', accepte: ['my best friend is tall kind and very funny'], explication: "Plusieurs adjectifs reliés par « and »." },
    { id: 'dur-j32-2', type: 'traduction', sens: 'fr-en', q: "Elles sont jeunes et sympas.", r: 'they are young and nice', accepte: ["they're young and nice"], explication: "Pluriel → are ; adjectif sans accord." },
  ],
  33: [
    { id: 'dur-j33-1', type: 'traduction', sens: 'fr-en', q: "Elle se réveille à sept heures et elle va à l'école en bus.", r: 'she wakes up at seven and she goes to school by bus', explication: "wakes up + goes (3e pers.) + by bus." },
    { id: 'dur-j33-2', type: 'traduction', sens: 'fr-en', q: "Je me lève, je mange et je vais au travail.", r: 'i get up, i eat and i go to work', accepte: ['i get up i eat and i go to work'], explication: "Routine reliée par « and »." },
  ],
  34: [
    { id: 'dur-j34-1', type: 'traduction', sens: 'fr-en', q: "Il y a deux chiens dans le jardin et ils dorment toute la journée.", r: 'there are two dogs in the garden and they sleep all day', explication: "There are … and they sleep …" },
    { id: 'dur-j34-2', type: 'traduction', sens: 'fr-en', q: "Elle va au marché en vélo.", r: 'she goes to the market by bike', explication: "goes (3e pers.) + by bike." },
  ],
  35: [
    { id: 'dur-j35-1', type: 'traduction', sens: 'fr-en', q: "Je suis fatiguée, mais je suis contente parce qu'il fait soleil.", r: "i'm tired, but i'm happy because it's sunny", accepte: ['i am tired but i am happy because it is sunny', "i'm tired but i'm happy because it's sunny"], explication: "but + because reliés." },
    { id: 'dur-j35-2', type: 'traduction', sens: 'fr-en', q: "J'aime l'été parce qu'il fait chaud, et j'adore la mer.", r: "i like summer because it's warm, and i love the sea", accepte: ['i like summer because it is warm and i love the sea'], explication: "because … and …" },
  ],
  36: [
    { id: 'dur-j36-1', type: 'traduction', sens: 'fr-en', q: "Bonjour ! Je m'appelle Lea, je viens de France et j'ai deux frères.", r: "hello! my name is lea, i'm from france and i have two brothers", accepte: ['hello my name is lea i am from france and i have two brothers', "hello! my name is lea, i am from france and i have two brothers"], explication: "Présentation complète reliée par « and »." },
    { id: 'dur-j36-2', type: 'traduction', sens: 'fr-en', q: "Il fait soleil, donc je suis contente et je vais à la plage.", r: "it's sunny, so i am happy and i go to the beach", accepte: ["it's sunny so i'm happy and i go to the beach", 'it is sunny so i am happy and i go to the beach'], explication: "so = donc ; reliés par « and »." },
  ],
}

export const getDefi = (n) => DEFIS[Number(n)] || []
