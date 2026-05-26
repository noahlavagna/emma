// Lecture d'un texte anglais via la synthèse vocale du navigateur (Web Speech API).
export function parler(texte, lang = 'en-US') {
  if (typeof window === 'undefined' || !('speechSynthesis' in window)) return
  window.speechSynthesis.cancel()
  const u = new SpeechSynthesisUtterance(texte)
  u.lang = lang
  u.rate = 0.85
  window.speechSynthesis.speak(u)
}

export const voixDispo = () =>
  typeof window !== 'undefined' && 'speechSynthesis' in window
