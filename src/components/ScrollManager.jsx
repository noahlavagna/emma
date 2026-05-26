import { useEffect, useRef } from 'react'
import { useLocation } from 'react-router-dom'
import Lenis from 'lenis'

const reduitMouvement = () =>
  typeof window !== 'undefined' &&
  window.matchMedia('(prefers-reduced-motion: reduce)').matches

/**
 * Gère le « feel » global, calqué sur le portfolio :
 *  - scroll fluide Lenis (même config),
 *  - retour en haut de page à chaque changement de route,
 *  - apparition au scroll des éléments [data-reveal].
 * Tout est désactivé proprement si l'utilisateur préfère moins d'animations.
 */
export default function ScrollManager() {
  const { pathname } = useLocation()
  const lenisRef = useRef(null)

  // Lenis : init unique (mêmes réglages que le portfolio).
  useEffect(() => {
    if (reduitMouvement()) return
    const lenis = new Lenis({
      duration: 1.4,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      wheelMultiplier: 0.9,
      touchMultiplier: 1.8,
      syncTouch: false,
    })
    lenisRef.current = lenis
    window.__lenis = lenis // exposé pour remonter en haut entre les étapes d'une leçon
    let id
    const raf = (time) => {
      lenis.raf(time)
      id = requestAnimationFrame(raf)
    }
    id = requestAnimationFrame(raf)
    return () => {
      cancelAnimationFrame(id)
      lenis.destroy()
      lenisRef.current = null
      if (window.__lenis === lenis) delete window.__lenis
    }
  }, [])

  // Retour en haut + (re)scan des éléments à révéler à chaque changement de page.
  useEffect(() => {
    if (lenisRef.current) lenisRef.current.scrollTo(0, { immediate: true })
    else window.scrollTo(0, 0)

    if (reduitMouvement()) return
    // Laisse le DOM de la nouvelle page se peindre avant d'observer.
    const t = setTimeout(() => {
      const cibles = document.querySelectorAll('[data-reveal]:not(.revealed)')
      const obs = new IntersectionObserver(
        (entries) => {
          entries.forEach((e) => {
            if (e.isIntersecting) {
              e.target.classList.add('revealed')
              obs.unobserve(e.target)
            }
          })
        },
        { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
      )
      cibles.forEach((el) => obs.observe(el))
    }, 60)
    return () => clearTimeout(t)
  }, [pathname])

  return null
}
