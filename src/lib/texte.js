// Comparaison tolérante des réponses libres (casse, espaces, accents, ponctuation).

const ACCENTS = /[̀-ͯ]/g // marques diacritiques combinantes (é → e)

export const normaliser = (s) =>
  (s ?? '')
    .toLowerCase()
    .normalize('NFD')
    .replace(ACCENTS, '')
    .replace(/[’']/g, "'")
    .replace(/[,;:.!?]/g, ' ') // ponctuation optionnelle (« Hi! » = « Hi ! » = « Hi »)
    .replace(/\s+/g, ' ')
    .trim()

// Vrai si `saisie` correspond à la réponse attendue ou à une variante acceptée.
export const bonneReponse = (saisie, attendu, accepte = []) => {
  const n = normaliser(saisie)
  return [attendu, ...accepte].some((a) => normaliser(a) === n)
}
