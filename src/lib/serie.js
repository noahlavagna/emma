// Calcul de la « série » (streak) : nombre de jours consécutifs avec une activité.
// Dérivé des dates déjà enregistrées (parcours, révisions, exercices, vocab,
// révision éclair) — aucune écriture supplémentaire, on lit ce qui existe.

const pad = (n) => String(n).padStart(2, '0')

// Clé jour locale « YYYY-MM-DD » (fuseau de l'appareil) à partir d'une Date.
export const cleJour = (d) => `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}`

const cleDepuisISO = (iso) => {
  if (!iso) return null
  const d = new Date(iso)
  return Number.isNaN(d.getTime()) ? null : cleJour(d)
}

// Rassemble l'ensemble des jours actifs (Set de clés « YYYY-MM-DD »).
// Chaque source est une map dont les valeurs portent une date `fait` ou `dernier`.
export function collecterJours({ progres, revisions, exercices, vocab, eclair } = {}) {
  const set = new Set()
  const ajouterMap = (map, champ) => {
    if (!map) return
    for (const v of Object.values(map)) {
      const k = cleDepuisISO(v?.[champ])
      if (k) set.add(k)
    }
  }
  ajouterMap(progres, 'fait')
  ajouterMap(revisions, 'fait')
  ajouterMap(exercices, 'fait')
  ajouterMap(vocab, 'dernier')
  // La révision éclair tient son propre journal de jours.
  if (Array.isArray(eclair?.journal)) for (const k of eclair.journal) if (k) set.add(k)
  const kEclair = cleDepuisISO(eclair?.dernier)
  if (kEclair) set.add(kEclair)
  return set
}

const reculer = (d, n = 1) => {
  const x = new Date(d)
  x.setDate(x.getDate() - n)
  return x
}

// Série en cours : jours consécutifs jusqu'à aujourd'hui. Tolérance d'un jour —
// si rien aujourd'hui mais quelque chose hier, la série est encore « vivante ».
export function serieActuelle(setJours, maintenant = new Date()) {
  if (!setJours.size) return 0
  let curseur = new Date(maintenant)
  if (!setJours.has(cleJour(curseur))) {
    curseur = reculer(curseur)
    if (!setJours.has(cleJour(curseur))) return 0
  }
  let serie = 0
  while (setJours.has(cleJour(curseur))) {
    serie++
    curseur = reculer(curseur)
  }
  return serie
}

// Vrai si une activité a déjà eu lieu aujourd'hui.
export const actifAujourdhui = (setJours, maintenant = new Date()) =>
  setJours.has(cleJour(maintenant))

// Plus longue série jamais réalisée (record).
export function serieRecord(setJours) {
  const cles = [...setJours].sort()
  let best = 0
  let cur = 0
  let prev = null
  for (const c of cles) {
    if (prev && cleJour(reculer(new Date(`${c}T00:00:00`))) === prev) cur++
    else cur = 1
    if (cur > best) best = cur
    prev = c
  }
  return best
}
