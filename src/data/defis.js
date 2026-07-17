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

  // ---------- JUILLET · vitesse supérieure ----------
  37: [
    { id: 'dur-j37-1', type: 'traduction', sens: 'fr-en', q: "La réunion est à neuf heures et quart, ne sois pas en retard !", r: "the meeting is at quarter past nine, don't be late", accepte: ["the meeting is at quarter past nine don't be late", "the meeting is at a quarter past nine, don't be late"], explication: "at quarter past nine + Don't be late." },
    { id: 'dur-j37-2', type: 'traduction', sens: 'fr-en', q: "À quelle heure finis-tu le travail le vendredi ?", r: "what time do you finish work on friday", accepte: ["what time do you finish work on fridays", "what time do you finish work on friday?"], explication: "What time do you…? + on Friday." },
  ],
  38: [
    { id: 'dur-j38-1', type: 'traduction', sens: 'fr-en', q: "Elle se lève à six heures et demie et elle prend une douche.", r: "she gets up at half past six and she takes a shower", accepte: ["she gets up at half past six and takes a shower"], explication: "gets up / takes : le -s partout." },
    { id: 'dur-j38-2', type: 'traduction', sens: 'fr-en', q: "Je me brosse les dents puis je pars de chez moi à neuf heures.", r: "i brush my teeth then i leave home at nine", accepte: ["i brush my teeth and then i leave home at nine", "i brush my teeth then i leave home at nine o'clock"], explication: "my teeth + then + leave home." },
  ],
  39: [
    { id: 'dur-j39-1', type: 'traduction', sens: 'fr-en', q: "D'habitude je bois du café, mais je ne bois jamais de thé le soir.", r: "i usually drink coffee, but i never drink tea in the evening", accepte: ["i usually drink coffee but i never drink tea in the evening", "usually i drink coffee but i never drink tea in the evening"], explication: "usually / never avant le verbe." },
    { id: 'dur-j39-2', type: 'traduction', sens: 'fr-en', q: "Il est toujours en retard mais il ne s'excuse jamais.", r: "he is always late but he never says sorry", accepte: ["he's always late but he never says sorry", "he is always late but he never apologizes"], explication: "is always (après be) + never says." },
  ],
  40: [
    { id: 'dur-j40-1', type: 'traduction', sens: 'fr-en', q: "J'adore nager et lire, mais je déteste courir.", r: "i love swimming and reading, but i hate running", accepte: ["i love swimming and reading but i hate running"], explication: "Trois -ing dans la même phrase." },
    { id: 'dur-j40-2', type: 'traduction', sens: 'fr-en', q: "Ma sœur adore danser mais elle n'aime pas cuisiner.", r: "my sister loves dancing but she doesn't like cooking", accepte: ["my sister loves dancing but she does not like cooking"], explication: "loves + doesn't like + -ing." },
  ],
  41: [
    { id: 'dur-j41-1', type: 'traduction', sens: 'fr-en', q: "Je ne peux pas parler, je suis en train de cuisiner.", r: "i can't talk, i am cooking", accepte: ["i can't talk i'm cooking", "i cannot talk i am cooking", "i can't speak, i'm cooking"], explication: "can't + présent continu." },
    { id: 'dur-j41-2', type: 'traduction', sens: 'fr-en', q: "Qu'est-ce que tu fais ? Il pleut et tu n'as pas de manteau !", r: "what are you doing? it's raining and you don't have a coat", accepte: ["what are you doing it's raining and you don't have a coat", "what are you doing? it is raining and you do not have a coat"], explication: "What are you doing? + it's raining." },
  ],
  42: [
    { id: 'dur-j42-1', type: 'traduction', sens: 'fr-en', q: "D'habitude elle travaille à l'agence, mais aujourd'hui elle travaille à la maison.", r: "she usually works at the agency, but today she is working at home", accepte: ["she usually works at the agency but today she's working at home"], explication: "usually works / today she is working." },
    { id: 'dur-j42-2', type: 'traduction', sens: 'fr-en', q: "Chut ! Le bébé dort et j'écoute la radio.", r: "quiet! the baby is sleeping and i am listening to the radio", accepte: ["quiet the baby is sleeping and i'm listening to the radio", "shh! the baby is sleeping and i am listening to the radio"], explication: "Deux continus : is sleeping + am listening." },
  ],
  43: [
    { id: 'dur-j43-1', type: 'traduction', sens: 'fr-en', q: "Je me lève toujours à sept heures, mais aujourd'hui je me repose.", r: "i always get up at seven, but today i am resting", accepte: ["i always get up at seven but today i'm resting"], explication: "always + simple / today + continu." },
    { id: 'dur-j43-2', type: 'traduction', sens: 'fr-en', q: "Elle adore lire et en ce moment elle lit un très bon livre.", r: "she loves reading and right now she is reading a very good book", accepte: ["she loves reading and right now she's reading a very good book", "she loves reading and at the moment she is reading a very good book"], explication: "loves reading (goût) + is reading (maintenant)." },
  ],
  44: [
    { id: 'dur-j44-1', type: 'traduction', sens: 'fr-en', q: "Où étais-tu hier soir ? La fête était géniale !", r: "where were you last night? the party was great", accepte: ["where were you last night the party was great", "where were you last night? the party was great!"], explication: "Were you + was great." },
    { id: 'dur-j44-2', type: 'traduction', sens: 'fr-en', q: "Il y a deux jours, nous étions à Paris et il ne faisait pas froid.", r: "two days ago, we were in paris and it wasn't cold", accepte: ["two days ago we were in paris and it wasn't cold", "two days ago we were in paris and it was not cold"], explication: "ago + were + wasn't." },
  ],
  45: [
    { id: 'dur-j45-1', type: 'traduction', sens: 'fr-en', q: "Hier, j'ai travaillé, j'ai cuisiné et j'ai regardé un film.", r: "yesterday i worked, i cooked and i watched a film", accepte: ["yesterday i worked i cooked and i watched a film", "yesterday i worked, cooked and watched a film"], explication: "Trois -ed d'affilée." },
    { id: 'dur-j45-2', type: 'traduction', sens: 'fr-en', q: "Elle a visité deux appartements et elle est restée au bureau jusqu'à sept heures.", r: "she visited two flats and she stayed at the office until seven", accepte: ["she visited two apartments and she stayed at the office until seven", "she visited two flats and stayed at the office until seven"], explication: "visited + stayed + until seven." },
  ],
  46: [
    { id: 'dur-j46-1', type: 'traduction', sens: 'fr-en', q: "Samedi, je suis allée à la mer, j'ai vu le coucher de soleil et j'ai mangé une pizza.", r: "on saturday, i went to the sea, i saw the sunset and i ate a pizza", accepte: ["on saturday i went to the sea i saw the sunset and i ate a pizza", "saturday i went to the sea, i saw the sunset and i ate a pizza"], explication: "went, saw, ate : trois irréguliers." },
    { id: 'dur-j46-2', type: 'traduction', sens: 'fr-en', q: "Il a pris le train, il est venu chez moi et on a fait un gâteau.", r: "he took the train, he came to my place and we made a cake", accepte: ["he took the train he came to my place and we made a cake", "he took the train, came to my place and we made a cake"], explication: "took, came, made." },
  ],
  47: [
    { id: 'dur-j47-1', type: 'traduction', sens: 'fr-en', q: "As-tu bien dormi ? Non, je n'ai pas dormi du tout !", r: "did you sleep well? no, i didn't sleep at all", accepte: ["did you sleep well no i didn't sleep at all", "did you sleep well? no, i did not sleep at all"], explication: "Did you sleep + didn't sleep + at all." },
    { id: 'dur-j47-2', type: 'traduction', sens: 'fr-en', q: "Pourquoi n'es-tu pas venue ? Je n'ai pas oublié, j'ai raté le bus !", r: "why didn't you come? i didn't forget, i missed the bus", accepte: ["why didn't you come i didn't forget i missed the bus", "why did you not come? i didn't forget, i missed the bus"], explication: "Why didn't you…? + didn't forget + missed." },
  ],
  48: [
    { id: 'dur-j48-1', type: 'traduction', sens: 'fr-en', q: "D'abord j'ai appelé le client, ensuite j'ai pris les clés et enfin on a visité l'appartement.", r: "first i called the client, then i took the keys and finally we visited the flat", accepte: ["first i called the client then i took the keys and finally we visited the flat", "first i called the client, then i took the keys and finally we visited the apartment"], explication: "first / then / finally + passés mélangés." },
    { id: 'dur-j48-2', type: 'traduction', sens: 'fr-en', q: "Nous avons eu une réunion ce matin et le client a signé le contrat.", r: "we had a meeting this morning and the client signed the contract", accepte: ["this morning we had a meeting and the client signed the contract"], explication: "had + signed." },
  ],
  49: [
    { id: 'dur-j49-1', type: 'traduction', sens: 'fr-en', q: "Nous sommes allés en Espagne en avion et nous avons dormi dans un petit hôtel.", r: "we flew to spain and we slept in a small hotel", accepte: ["we flew to spain and slept in a small hotel"], explication: "flew + slept." },
    { id: 'dur-j49-2', type: 'traduction', sens: 'fr-en', q: "J'ai parlé anglais, j'ai nagé tous les jours et j'ai acheté trop de souvenirs !", r: "i spoke english, i swam every day and i bought too many souvenirs", accepte: ["i spoke english i swam every day and i bought too many souvenirs"], explication: "spoke, swam, bought + too many." },
  ],
  50: [
    { id: 'dur-j50-1', type: 'traduction', sens: 'fr-en', q: "Il y avait une grande foule, le ciel était plein de couleurs et on a dansé toute la nuit.", r: "there was a big crowd, the sky was full of colours and we danced all night", accepte: ["there was a big crowd the sky was full of colours and we danced all night", "there was a big crowd, the sky was full of colors and we danced all night"], explication: "there was + was + danced." },
    { id: 'dur-j50-2', type: 'traduction', sens: 'fr-en', q: "Je n'ai pas vu le défilé parce que je suis arrivée trop tard.", r: "i didn't see the parade because i arrived too late", accepte: ["i did not see the parade because i arrived too late"], explication: "didn't see + because + arrived." },
  ],
  51: [
    { id: 'dur-j51-1', type: 'traduction', sens: 'fr-en', q: "Demain, je vais me lever tôt parce que je vais faire visiter un appartement.", r: "tomorrow, i'm going to get up early because i'm going to show a flat", accepte: ["tomorrow i'm going to get up early because i'm going to show a flat", "tomorrow i am going to get up early because i am going to show a flat"], explication: "Deux going to + because." },
    { id: 'dur-j51-2', type: 'traduction', sens: 'fr-en', q: "Ils ne vont pas déménager cette année, ils vont attendre l'été prochain.", r: "they aren't going to move this year, they are going to wait for next summer", accepte: ["they are not going to move this year they are going to wait for next summer", "they're not going to move this year, they're going to wait for next summer"], explication: "Négation + going to wait." },
  ],
  52: [
    { id: 'dur-j52-1', type: 'traduction', sens: 'fr-en', q: "Ne t'inquiète pas, ce ne sera pas difficile et je t'aiderai chaque jour.", r: "don't worry, it won't be difficult and i will help you every day", accepte: ["don't worry it won't be difficult and i'll help you every day"], explication: "won't be + will help." },
    { id: 'dur-j52-2', type: 'traduction', sens: 'fr-en', q: "Je pense qu'il pleuvra demain, donc je resterai à la maison.", r: "i think it will rain tomorrow, so i will stay at home", accepte: ["i think it'll rain tomorrow so i'll stay at home", "i think it will rain tomorrow so i will stay at home"], explication: "I think + will + so." },
  ],
  53: [
    { id: 'dur-j53-1', type: 'traduction', sens: 'fr-en', q: "Je rencontre un client mardi à dix heures et on signe le contrat vendredi.", r: "i'm meeting a client on tuesday at ten and we're signing the contract on friday", accepte: ["i am meeting a client on tuesday at ten and we are signing the contract on friday"], explication: "Présent continu pour deux RDV calés." },
    { id: 'dur-j53-2', type: 'traduction', sens: 'fr-en', q: "Mon planning est plein : je dois annuler la réunion de lundi.", r: "my schedule is full: i have to cancel the monday meeting", accepte: ["my schedule is full i have to cancel the monday meeting", "my schedule is full, i have to cancel monday's meeting", "my schedule is full so i have to cancel the meeting on monday"], explication: "schedule + have to cancel." },
  ],
  54: [
    { id: 'dur-j54-1', type: 'traduction', sens: 'fr-en', q: "Cet appartement est plus grand et plus lumineux, mais il est plus cher que l'autre.", r: "this flat is bigger and brighter, but it is more expensive than the other one", accepte: ["this flat is bigger and brighter but it's more expensive than the other one", "this apartment is bigger and brighter but it is more expensive than the other one"], explication: "bigger, brighter + more expensive than." },
    { id: 'dur-j54-2', type: 'traduction', sens: 'fr-en', q: "La rue est plus calme et la cuisine est plus moderne : c'est mieux pour vous.", r: "the street is quieter and the kitchen is more modern: it's better for you", accepte: ["the street is quieter and the kitchen is more modern it's better for you", "the street is quieter and the kitchen is more modern, it is better for you"], explication: "quieter + more modern + better." },
  ],
  55: [
    { id: 'dur-j55-1', type: 'traduction', sens: 'fr-en', q: "C'est l'appartement le plus lumineux de l'immeuble, avec la plus belle vue de la ville.", r: "it's the brightest flat in the building, with the most beautiful view in town", accepte: ["it's the brightest flat in the building with the most beautiful view in town", "it is the brightest apartment in the building with the most beautiful view in the city"], explication: "the brightest + the most beautiful." },
    { id: 'dur-j55-2', type: 'traduction', sens: 'fr-en', q: "C'est le meilleur prix du quartier et le pire moment pour attendre !", r: "it's the best price in the area and the worst moment to wait", accepte: ["it is the best price in the area and the worst moment to wait", "it's the best price in the area and the worst time to wait"], explication: "the best / the worst." },
  ],
  56: [
    { id: 'dur-j56-1', type: 'traduction', sens: 'fr-en', q: "Pourquoi ne pas faire un pique-nique dimanche ? Invitons Leo !", r: "why don't we have a picnic on sunday? let's invite leo", accepte: ["why don't we have a picnic on sunday let's invite leo", "why don't we have a picnic on sunday? let's invite leo!"], explication: "Why don't we + Let's." },
    { id: 'dur-j56-2', type: 'traduction', sens: 'fr-en', q: "Retrouvons-nous à midi, et n'oublie pas le gâteau !", r: "let's meet at noon, and don't forget the cake", accepte: ["let's meet at noon and don't forget the cake", "let's meet at noon, and don't forget the cake!"], explication: "Let's meet + Don't forget." },
  ],
  57: [
    { id: 'dur-j57-1', type: 'traduction', sens: 'fr-en', q: "Demain je vais visiter le nouvel appartement : je pense que ce sera le meilleur du quartier.", r: "tomorrow i'm going to visit the new flat: i think it will be the best in the area", accepte: ["tomorrow i'm going to visit the new flat i think it will be the best in the area", "tomorrow i am going to visit the new apartment, i think it'll be the best in the area"], explication: "going to + will be + the best." },
    { id: 'dur-j57-2', type: 'traduction', sens: 'fr-en', q: "Et si on y allait ensemble ? Ce sera plus sympa qu'y aller seule.", r: "shall we go together? it will be nicer than going alone", accepte: ["shall we go together it will be nicer than going alone", "shall we go together? it'll be nicer than going alone"], explication: "Shall we + nicer than + -ing." },
  ],
  58: [
    { id: 'dur-j58-1', type: 'traduction', sens: 'fr-en', q: "Allez tout droit, traversez la grande rue et tournez à gauche à la boulangerie.", r: "go straight on, cross the big street and turn left at the bakery", accepte: ["go straight on cross the big street and turn left at the bakery", "go straight, cross the big street and turn left at the bakery"], explication: "Trois impératifs d'itinéraire." },
    { id: 'dur-j58-2', type: 'traduction', sens: 'fr-en', q: "L'agence est en face de la banque, à côté du café. Ce n'est pas loin.", r: "the agency is opposite the bank, next to the café. it's not far", accepte: ["the agency is opposite the bank next to the cafe it's not far", "the agency is opposite the bank, next to the cafe. it is not far"], explication: "opposite + next to + not far." },
  ],
  59: [
    { id: 'dur-j59-1', type: 'traduction', sens: 'fr-en', q: "La robe est trop grande : avez-vous une taille plus petite ?", r: "the dress is too big: do you have a smaller size", accepte: ["the dress is too big do you have a smaller size", "the dress is too big, do you have a smaller size?"], explication: "too big + a smaller size." },
    { id: 'dur-j59-2', type: 'traduction', sens: 'fr-en', q: "Elle me va parfaitement, je la prends ! Je peux payer par carte ?", r: "it fits perfectly, i'll take it! can i pay by card", accepte: ["it fits perfectly i'll take it can i pay by card", "it fits perfectly, i will take it. can i pay by card?"], explication: "fits + I'll take it + pay by card." },
  ],
  60: [
    { id: 'dur-j60-1', type: 'traduction', sens: 'fr-en', q: "Elle n'est pas disponible pour le moment ; puis-je prendre un message ?", r: "she's not available at the moment; can i take a message", accepte: ["she is not available at the moment can i take a message", "she's not available at the moment, can i take a message?"], explication: "not available + take a message." },
    { id: 'dur-j60-2', type: 'traduction', sens: 'fr-en', q: "Un instant s'il vous plaît, je vous le passe — ou je vous rappelle dans dix minutes.", r: "one moment please, i'll put you through — or i'll call you back in ten minutes", accepte: ["one moment please i'll put you through or i'll call you back in ten minutes", "one moment, please. i'll put you through or i will call you back in ten minutes"], explication: "put you through + call you back." },
  ],
  61: [
    { id: 'dur-j61-1', type: 'traduction', sens: 'fr-en', q: "Cher M. Brown, merci pour votre visite. Veuillez trouver les photos en pièce jointe.", r: "dear mr brown, thank you for your visit. please find attached the photos", accepte: ["dear mr brown thank you for your visit please find attached the photos", "dear mr brown, thank you for your visit. please find the photos attached"], explication: "Dear + Please find attached." },
    { id: 'dur-j61-2', type: 'traduction', sens: 'fr-en', q: "Serait-il possible de visiter lundi ? Dans l'attente de votre retour.", r: "would it be possible to visit on monday? i look forward to hearing from you", accepte: ["would it be possible to visit on monday i look forward to hearing from you"], explication: "Would it be possible + look forward to hearing." },
  ],
  62: [
    { id: 'dur-j62-1', type: 'traduction', sens: 'fr-en', q: "Je travaille comme alternante dans une agence : je fais visiter des appartements et j'appelle les clients.", r: "i work as a trainee in an agency: i show flats and i call customers", accepte: ["i work as a trainee in an agency i show flats and i call customers", "i work as a trainee in an agency, i show apartments and i call customers"], explication: "work as + missions au présent simple." },
    { id: 'dur-j62-2', type: 'traduction', sens: 'fr-en', q: "J'ai commencé mes études l'an dernier et un jour je vais ouvrir ma propre agence.", r: "i started my studies last year and one day i'm going to open my own agency", accepte: ["i started my studies last year and one day i am going to open my own agency"], explication: "started (passé) + going to open (futur)." },
  ],
  63: [
    { id: 'dur-j63-1', type: 'traduction', sens: 'fr-en', q: "Bienvenue ! Comme vous voyez, le salon est très spacieux et la cuisine a été rénovée l'an dernier.", r: "welcome! as you can see, the living room is very spacious and the kitchen was renovated last year", accepte: ["welcome as you can see the living room is very spacious and the kitchen was renovated last year"], explication: "As you can see + was renovated." },
    { id: 'dur-j63-2', type: 'traduction', sens: 'fr-en', q: "Vous allez adorer la vue ! Voulez-vous faire une offre ?", r: "you will love the view! would you like to make an offer", accepte: ["you'll love the view would you like to make an offer", "you will love the view. would you like to make an offer?"], explication: "will love + make an offer." },
  ],
  64: [
    { id: 'dur-j64-1', type: 'traduction', sens: 'fr-en', q: "Pourriez-vous m'envoyer la liste des prix par e-mail ? Je vous la transmets ce soir, photos en pièce jointe.", r: "could you send me the price list by email? i'll send it tonight, with the photos attached", accepte: ["could you send me the price list by email i'll send it tonight with the photos attached"], explication: "Could you + I'll send + attached." },
    { id: 'dur-j64-2', type: 'traduction', sens: 'fr-en', q: "Tournez à droite à la boulangerie : l'agence est en face de la banque, et je suis disponible toute la matinée.", r: "turn right at the bakery: the agency is opposite the bank, and i am available all morning", accepte: ["turn right at the bakery the agency is opposite the bank and i'm available all morning"], explication: "Itinéraire + opposite + available." },
  ],
  65: [
    { id: 'dur-j65-1', type: 'traduction', sens: 'fr-en', q: "Hier j'ai fait visiter un appartement, là je bois un thé, et demain on signe le contrat.", r: "yesterday i showed a flat, right now i'm drinking a tea, and tomorrow we're signing the contract", accepte: ["yesterday i showed a flat right now i'm drinking a tea and tomorrow we're signing the contract", "yesterday i showed an apartment, right now i am drinking tea, and tomorrow we are signing the contract"], explication: "Les trois temps dans une seule phrase !" },
    { id: 'dur-j65-2', type: 'traduction', sens: 'fr-en', q: "Je l'ai déjà appelé ce matin, mais je le verrai demain à dix heures.", r: "i already called him this morning, but i'll see him tomorrow at ten", accepte: ["i already called him this morning but i will see him tomorrow at ten"], explication: "already + passé, puis will." },
  ],
  66: [
    { id: 'dur-j66-1', type: 'traduction', sens: 'fr-en', q: "À mon avis, c'était ton meilleur mois, et août va être encore mieux !", r: "in my opinion, it was your best month, and august is going to be even better", accepte: ["in my opinion it was your best month and august is going to be even better"], explication: "In my opinion + was + going to be + even better." },
    { id: 'dur-j66-2', type: 'traduction', sens: 'fr-en', q: "Vraiment ? C'est une super nouvelle ! Je suis d'accord avec toi, fêtons ça !", r: "really? that's great news! i agree with you, let's celebrate", accepte: ["really that's great news i agree with you let's celebrate", "really? that's great news! i agree with you, let's celebrate!"], explication: "Really? + That's great news + I agree + Let's." },
  ],
  67: [
    { id: 'dur-j67-1', type: 'traduction', sens: 'fr-en', q: "Il y a deux mois, je ne parlais pas anglais ; aujourd'hui je fais visiter des appartements et demain je vais signer mon premier contrat !", r: "two months ago, i didn't speak english; today i show flats and tomorrow i'm going to sign my first contract", accepte: ["two months ago i didn't speak english today i show flats and tomorrow i'm going to sign my first contract", "two months ago i did not speak english, today i show apartments and tomorrow i am going to sign my first contract"], explication: "Le récap ultime : passé, présent, futur." },
    { id: 'dur-j67-2', type: 'traduction', sens: 'fr-en', q: "Je pense que c'est la plus belle réussite de ma vie, et je suis très fière de moi.", r: "i think it's the most beautiful success of my life, and i am very proud of myself", accepte: ["i think it is the most beautiful success of my life and i'm very proud of myself"], explication: "the most beautiful + proud of myself. Et tu peux l'être !" },
  ],
}

export const getDefi = (n) => DEFIS[Number(n)] || []
