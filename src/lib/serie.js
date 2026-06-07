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

// Fusionne les jours réellement actifs et les jours « gelés » (couverts par un
// gel de série). Un jour gelé compte comme un jour actif pour le calcul.
const avecGel = (setJours, geles) =>
  geles && geles.size ? new Set([...setJours, ...geles]) : setJours

// Série en cours : jours consécutifs jusqu'à aujourd'hui. Tolérance d'un jour —
// si rien aujourd'hui mais quelque chose hier, la série est encore « vivante ».
// `geles` : Set de jours couverts par un gel de série (comptés comme actifs).
export function serieActuelle(setJours, maintenant = new Date(), geles = null) {
  const jours = avecGel(setJours, geles)
  if (!jours.size) return 0
  let curseur = new Date(maintenant)
  if (!jours.has(cleJour(curseur))) {
    curseur = reculer(curseur)
    if (!jours.has(cleJour(curseur))) return 0
  }
  let serie = 0
  while (jours.has(cleJour(curseur))) {
    serie++
    curseur = reculer(curseur)
  }
  return serie
}

// Vrai si une activité a déjà eu lieu aujourd'hui.
export const actifAujourdhui = (setJours, maintenant = new Date()) =>
  setJours.has(cleJour(maintenant))

// Gel de série (« streak freeze ») : si la série a été interrompue par un trou
// récent (jours sans activité juste avant aujourd'hui), on dépense des gels du
// stock pour combler ce trou — mais SEULEMENT si le stock permet de le combler
// entièrement. Les jours comblés sont mémorisés dans `geles` (consommation
// définitive). Aujourd'hui n'est jamais gelé (la tolérance d'un jour suffit).
//
// `etat` = { stock: number, geles: string[] }. Renvoie un nouvel état + `change`.
export function calculerGel(setJours, etat = {}, maintenant = new Date()) {
  let stock = Math.min(3, Math.max(0, Number(etat.stock) || 0))
  const geles = new Set(Array.isArray(etat.geles) ? etat.geles : [])
  const inchange = { stock, geles: [...geles], change: false }

  const jours = avecGel(setJours, geles)
  if (!jours.size || stock === 0) return inchange

  const aujourdHui = cleJour(maintenant)
  const hier = cleJour(reculer(maintenant))
  // Série déjà vivante (activité aujourd'hui ou hier) : rien à geler.
  if (jours.has(aujourdHui) || jours.has(hier)) return inchange

  // On remonte depuis hier pour mesurer le trou jusqu'à la dernière activité.
  const manques = []
  let d = reculer(maintenant) // hier
  for (let i = 0; i <= stock; i++) {
    const k = cleJour(d)
    if (jours.has(k)) {
      // Trou identifié : on le comble s'il tient dans le stock.
      if (manques.length >= 1 && manques.length <= stock) {
        for (const m of manques) geles.add(m)
        return { stock: stock - manques.length, geles: [...geles], change: true }
      }
      return inchange
    }
    manques.push(k)
    d = reculer(d)
  }
  return inchange // trou trop grand pour le stock disponible
}

// Plus longue série jamais réalisée (record), gels inclus.
export function serieRecord(setJours, geles = null) {
  const cles = [...avecGel(setJours, geles)].sort()
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
