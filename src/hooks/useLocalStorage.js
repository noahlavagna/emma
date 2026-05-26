import { useCallback, useEffect, useState } from 'react'

/**
 * État synchronisé avec localStorage.
 * Tolère un localStorage indisponible (navigation privée) et un JSON corrompu.
 *
 * @param {string} cle  clé de stockage
 * @param {*} valeurInitiale  valeur par défaut si rien n'est stocké
 */
export function useLocalStorage(cle, valeurInitiale) {
  const [valeur, setValeur] = useState(() => {
    try {
      const brut = window.localStorage.getItem(cle)
      return brut != null ? JSON.parse(brut) : valeurInitiale
    } catch {
      return valeurInitiale
    }
  })

  useEffect(() => {
    try {
      window.localStorage.setItem(cle, JSON.stringify(valeur))
    } catch {
      /* quota plein ou stockage bloqué : on ignore silencieusement */
    }
  }, [cle, valeur])

  // setter stable, accepte une valeur ou une fonction (comme useState)
  const set = useCallback((maj) => setValeur(maj), [])

  return [valeur, set]
}
