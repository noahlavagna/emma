import { useEffect, useRef } from 'react'
import { useLocation } from 'react-router-dom'
import { cloudDispo, lireCodeSync, recupererCloud, envoyerCloud } from '../lib/cloud.js'
import { lireProgression, ecrireProgression, progressionVide } from '../lib/sauvegarde.js'

/**
 * Synchronisation cloud silencieuse (si un code de synchro est défini) :
 *  - au démarrage, si l'appareil est vierge → on récupère la progression du cloud ;
 *  - on envoie la progression vers le cloud à chaque navigation (debounce) et
 *    quand l'onglet passe en arrière-plan / se ferme.
 * On n'envoie jamais une progression vide (anti-écrasement du cloud).
 */
export default function CloudSync() {
  const { pathname } = useLocation()
  const pullFait = useRef(false)

  // Récupération initiale (appareil vierge uniquement → aucun risque d'écraser du local).
  useEffect(() => {
    if (!cloudDispo() || pullFait.current) return
    pullFait.current = true
    const code = lireCodeSync()
    if (!code || !progressionVide()) return
    recupererCloud(code)
      .then((paquet) => {
        if (paquet && paquet.donnees) {
          ecrireProgression(paquet)
          window.location.reload()
        }
      })
      .catch(() => {})
  }, [])

  // Envoi à chaque changement de page (laisse le temps au localStorage d'être à jour).
  useEffect(() => {
    if (!cloudDispo()) return
    const code = lireCodeSync()
    if (!code || progressionVide()) return
    const t = setTimeout(() => {
      envoyerCloud(code, lireProgression()).catch(() => {})
    }, 1200)
    return () => clearTimeout(t)
  }, [pathname])

  // Envoi avant fermeture / passage en arrière-plan (mobile surtout).
  useEffect(() => {
    if (!cloudDispo()) return
    const push = () => {
      const code = lireCodeSync()
      if (code && !progressionVide()) {
        envoyerCloud(code, lireProgression(), { keepalive: true }).catch(() => {})
      }
    }
    const onVis = () => { if (document.visibilityState === 'hidden') push() }
    document.addEventListener('visibilitychange', onVis)
    window.addEventListener('pagehide', push)
    return () => {
      document.removeEventListener('visibilitychange', onVis)
      window.removeEventListener('pagehide', push)
    }
  }, [])

  return null
}
