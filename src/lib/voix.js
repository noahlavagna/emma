// Une épellation : lettres isolées séparées par des espaces / tirets / virgules
// (« A », « L - E - A », « A, E, I, O, U »). Une vraie phrase contient des mots
// (lettres collées), donc elle ne correspond pas.
const ESTLETTRES = /^[A-Za-z]([\s,.-]+[A-Za-z])*[.\s]*$/

// Lecture d'un texte anglais via la synthèse vocale du navigateur (Web Speech API).
export function parler(texte, lang = 'en-US') {
  if (typeof window === 'undefined' || !('speechSynthesis' in window)) return
  let t = String(texte ?? '')
  // Sur une lettre majuscule isolée, le moteur annonce « Capital A ». En
  // minuscules, il prononce simplement le nom de la lettre.
  if (ESTLETTRES.test(t.trim())) t = t.toLowerCase()
  window.speechSynthesis.cancel()
  const u = new SpeechSynthesisUtterance(t)
  u.lang = lang
  u.rate = 0.85
  window.speechSynthesis.speak(u)
}

export const voixDispo = () =>
  typeof window !== 'undefined' && 'speechSynthesis' in window
