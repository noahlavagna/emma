import { useEffect, useRef } from 'react'
import { cloudDispo, lireCodeSync, recupererCloud, envoyerCloud } from '../lib/cloud.js'
import {
  lireProgression,
  ecrireProgression,
  progressionVide,
  fusionnerProgression,
} from '../lib/sauvegarde.js'

/**
 * Synchronisation cloud silencieuse (si un code de synchro est défini) :
 *  - au démarrage, on RÉCUPÈRE le cloud et on le FUSIONNE avec le local (union
 *    des progrès, sans jamais en perdre) ; si la fusion change le local on
 *    recharge pour que l'app reparte sur l'état à jour ;
 *  - ensuite, à chaque mise à jour de progression (et avant fermeture / passage
 *    en arrière-plan), on ENVOIE la progression vers le cloud (debounce).
 * On n'envoie jamais une progression vide (anti-écrasement du cloud).
 */
export default function CloudSync() {
  const fusionFaite = useRef(false)
  // On n'autorise les envois qu'une fois la fusion initiale terminée, pour ne
  // pas écraser un cloud plus complet avec le local d'avant fusion.
  const pretAPousser = useRef(false)

  // Récupération + fusion au démarrage.
  useEffect(() => {
    if (!cloudDispo() || fusionFaite.current) return
    fusionFaite.current = true
    const code = lireCodeSync()
    if (!code) {
      pretAPousser.current = true
      return
    }
    recupererCloud(code)
      .then((distant) => {
        const local = lireProgression()
        const fusion = fusionnerProgression(local, distant)
        // La fusion apporte du nouveau au local → on écrit et on recharge.
        if (JSON.stringify(fusion.donnees) !== JSON.stringify(local.donnees)) {
          ecrireProgression(fusion)
          window.location.reload()
          return
        }
        // Local déjà à jour : si le cloud est en retard, on le rattrape.
        pretAPousser.current = true
        const distantStr = JSON.stringify(distant?.donnees ?? {})
        if (!progressionVide() && JSON.stringify(fusion.donnees) !== distantStr) {
          envoyerCloud(code, local).catch(() => {})
        }
      })
      .catch(() => {
        // Cloud injoignable : on reste sur le local et on s'autorise à pousser
        // plus tard (la prochaine fusion réconciliera).
        pretAPousser.current = true
      })
  }, [])

  // Envoi (debounce) à chaque mise à jour de progression.
  useEffect(() => {
    if (!cloudDispo()) return
    let t
    const pousser = () => {
      clearTimeout(t)
      t = setTimeout(() => {
        if (!pretAPousser.current) return
        const code = lireCodeSync()
        if (code && !progressionVide()) envoyerCloud(code, lireProgression()).catch(() => {})
      }, 1200)
    }
    window.addEventListener('emma:progression-maj', pousser)
    return () => {
      clearTimeout(t)
      window.removeEventListener('emma:progression-maj', pousser)
    }
  }, [])

  // Envoi immédiat avant fermeture / passage en arrière-plan (mobile surtout).
  useEffect(() => {
    if (!cloudDispo()) return
    const push = () => {
      if (!pretAPousser.current) return
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
