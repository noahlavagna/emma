// Synchronisation cloud via Supabase (RPC PostgREST, sans dépendance).
// La clé `anon` est PUBLIQUE par nature : la sécurité tient au verrou RLS de la
// base (accès direct interdit) + au code de synchro secret de l'utilisatrice.
import { STORAGE_KEYS } from '../data/storage.js'

const BASE_URL = 'https://cedvavcvxaqoieubmurv.supabase.co'
const ANON_KEY =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNlZHZhdmN2eGFxb2lldWJtdXJ2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3Nzk4MTMwMzksImV4cCI6MjA5NTM4OTAzOX0.e5pTZdnGRTjZQV62EzvylBdIA01ZqSEB2525AqRZVas'

export const cloudDispo = () => Boolean(BASE_URL && ANON_KEY)

const rpc = (fn, body, opts = {}) =>
  fetch(`${BASE_URL}/rest/v1/rpc/${fn}`, {
    method: 'POST',
    headers: {
      apikey: ANON_KEY,
      Authorization: `Bearer ${ANON_KEY}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body),
    ...opts,
  })

// Récupère le paquet de progression associé à un code (ou null si rien).
export async function recupererCloud(code) {
  const res = await rpc('get_progression', { p_code: code })
  if (!res.ok) throw new Error('Échec de la récupération depuis le cloud.')
  return res.json() // paquet { marque, version, date, donnees } ou null
}

// Envoie (insert/update) le paquet de progression sous ce code.
export async function envoyerCloud(code, paquet, opts = {}) {
  const res = await rpc('save_progression', { p_code: code, p_data: paquet }, opts)
  if (!res.ok) throw new Error('Échec de l’envoi vers le cloud.')
  return true
}

// ---- Code de synchro (propre à l'appareil) ----
export const lireCodeSync = () => {
  try {
    return window.localStorage.getItem(STORAGE_KEYS.syncCode) || ''
  } catch {
    return ''
  }
}

export const ecrireCodeSync = (code) => {
  try {
    if (code) window.localStorage.setItem(STORAGE_KEYS.syncCode, code)
    else window.localStorage.removeItem(STORAGE_KEYS.syncCode)
  } catch {
    /* stockage bloqué : on ignore */
  }
}

// Code lisible, sans caractères ambigus (I/O/0/1), groupé par 4 : ABCD-EFGH-…
export function genererCodeSync() {
  const alpha = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789'
  const n = 20
  const arr = new Uint32Array(n)
  crypto.getRandomValues(arr)
  let out = ''
  for (let i = 0; i < n; i++) {
    out += alpha[arr[i] % alpha.length]
    if (i % 4 === 3 && i !== n - 1) out += '-'
  }
  return out
}
