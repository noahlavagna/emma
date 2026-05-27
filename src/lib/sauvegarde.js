// Sauvegarde / restauration de la progression (sans backend).
//   • Fichier .json  : pour archiver et restaurer plus tard.
//   • Code de transfert : texte à copier-coller d'un appareil à l'autre.
import { CLES_SAUVEGARDE, STORAGE_KEYS } from '../data/storage.js'

const VERSION = 1
const MARQUE = 'emma-progression'

// Rassemble la progression locale en un objet sérialisable.
export function lireProgression() {
  const donnees = {}
  for (const cle of CLES_SAUVEGARDE) {
    try {
      const brut = window.localStorage.getItem(cle)
      if (brut != null) donnees[cle] = JSON.parse(brut)
    } catch {
      /* clé corrompue : on l'ignore */
    }
  }
  return { marque: MARQUE, version: VERSION, date: new Date().toISOString(), donnees }
}

// Vrai si aucune progression n'est encore enregistrée localement (appareil vierge).
export function progressionVide() {
  for (const cle of CLES_SAUVEGARDE) {
    try {
      const brut = window.localStorage.getItem(cle)
      if (brut == null) continue
      const v = JSON.parse(brut)
      if (v && typeof v === 'object' && Object.keys(v).length > 0) return false
      if (v && typeof v !== 'object') return false
    } catch {
      /* clé illisible : on l'ignore */
    }
  }
  return true
}

// Écrit la progression dans le localStorage. `remplacer` = on vide d'abord les
// clés gérées (sinon on fusionne par-dessus l'existant). Renvoie le nb de clés.
export function ecrireProgression(paquet, { remplacer = true } = {}) {
  if (!paquet || paquet.marque !== MARQUE || typeof paquet.donnees !== 'object') {
    throw new Error('Fichier de sauvegarde non reconnu.')
  }
  let n = 0
  for (const cle of CLES_SAUVEGARDE) {
    const presente = Object.prototype.hasOwnProperty.call(paquet.donnees, cle)
    if (presente) {
      window.localStorage.setItem(cle, JSON.stringify(paquet.donnees[cle]))
      n++
    } else if (remplacer) {
      window.localStorage.removeItem(cle)
    }
  }
  return n
}

// ---- Fusion de deux progressions (synchro cloud multi-appareils) ----
// Principe : on ne PERD jamais de progrès. On prend l'union des entrées ; en cas
// de conflit on garde l'enregistrement le plus récent, tout en remontant les
// compteurs cumulés (meilleur score, nombre de fois) au maximum des deux.

const horodatage = (rec) => (rec && (rec.dernier || rec.fait)) || ''
const CHAMPS_MAX = ['meilleur', 'fois', 'sessions']

function fusionnerEnreg(a, b) {
  if (!a) return b
  if (!b) return a
  const recent = horodatage(b) >= horodatage(a) ? b : a
  const fusion = { ...recent }
  for (const champ of CHAMPS_MAX) {
    const va = typeof a[champ] === 'number' ? a[champ] : undefined
    const vb = typeof b[champ] === 'number' ? b[champ] : undefined
    if (va !== undefined || vb !== undefined) {
      fusion[champ] = Math.max(va ?? -Infinity, vb ?? -Infinity)
    }
  }
  return fusion
}

// Map { id: enregistrement } (vocab, jours, exercices…).
function fusionnerMap(a = {}, b = {}) {
  const out = { ...a }
  for (const [id, vb] of Object.entries(b)) out[id] = fusionnerEnreg(out[id], vb)
  return out
}

// Objet unique de la révision éclair { dernier, sessions, journal[] }.
function fusionnerEclair(a, b) {
  if (!a) return b
  if (!b) return a
  const journal = Array.from(new Set([...(a.journal || []), ...(b.journal || [])])).sort()
  return {
    dernier: horodatage(a) >= horodatage(b) ? a.dernier : b.dernier,
    sessions: Math.max(a.sessions || 0, b.sessions || 0),
    journal,
  }
}

// Fusionne deux paquets de progression et renvoie un nouveau paquet complet.
export function fusionnerProgression(local, distant) {
  const dL = local?.donnees || {}
  const dD = distant?.donnees || {}
  const donnees = {}
  for (const cle of CLES_SAUVEGARDE) {
    const a = dL[cle]
    const b = dD[cle]
    if (a === undefined && b === undefined) continue
    donnees[cle] = cle === STORAGE_KEYS.eclair ? fusionnerEclair(a, b) : fusionnerMap(a, b)
  }
  return { marque: MARQUE, version: VERSION, date: new Date().toISOString(), donnees }
}

const nomFichier = () => {
  const d = new Date()
  const p = (x) => String(x).padStart(2, '0')
  return `emma-progression-${d.getFullYear()}-${p(d.getMonth() + 1)}-${p(d.getDate())}.json`
}

// Déclenche le téléchargement du fichier de sauvegarde.
export function telechargerSauvegarde() {
  const blob = new Blob([JSON.stringify(lireProgression(), null, 2)], {
    type: 'application/json',
  })
  const url = URL.createObjectURL(blob)
  const a = document.createElement('a')
  a.href = url
  a.download = nomFichier()
  document.body.appendChild(a)
  a.click()
  a.remove()
  URL.revokeObjectURL(url)
}

// Lit un fichier .json choisi par l'utilisateur (renvoie le paquet parsé).
export function lireFichier(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader()
    reader.onload = () => {
      try {
        resolve(JSON.parse(String(reader.result)))
      } catch {
        reject(new Error('Ce fichier n’est pas une sauvegarde Emma valide.'))
      }
    }
    reader.onerror = () => reject(new Error('Impossible de lire le fichier.'))
    reader.readAsText(file)
  })
}

// ---- Code de transfert (copier-coller entre appareils) ----
// Encodage base64 tolérant l'UTF-8 (accents, emojis).
const enBase64 = (str) =>
  btoa(String.fromCharCode(...new TextEncoder().encode(str)))
const deBase64 = (b64) =>
  new TextDecoder().decode(Uint8Array.from(atob(b64), (c) => c.charCodeAt(0)))

export const genererCode = () => enBase64(JSON.stringify(lireProgression()))

export function decoderCode(code) {
  let json
  try {
    json = deBase64(code.trim())
  } catch {
    throw new Error('Code de transfert illisible.')
  }
  let paquet
  try {
    paquet = JSON.parse(json)
  } catch {
    throw new Error('Code de transfert invalide.')
  }
  return paquet
}
