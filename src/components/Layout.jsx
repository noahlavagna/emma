import { Link, useLocation } from 'react-router-dom'
import ScrollManager from './ScrollManager.jsx'
import '../styles/layout.css'

export default function Layout({ children }) {
  const { pathname } = useLocation()
  const surAccueil = pathname === '/'

  return (
    <>
      <ScrollManager />
      <nav className="barre">
        <Link to="/" className="marque" viewTransition>
          <span className="pastille" aria-hidden="true">🌸</span>
          Emma
        </Link>
        {!surAccueil && (
          <Link to="/" className="lien-retour" viewTransition>
            <span aria-hidden="true">←</span> Accueil
          </Link>
        )}
      </nav>

      {/* key = pathname → rejoue le fondu d'entrée (fallback sans View Transitions) */}
      <main>
        <div className="route-shell" key={pathname}>{children}</div>
      </main>

      <footer className="pied">
        Fait avec <span className="coeur">♥</span> pour septembre 2026
      </footer>
    </>
  )
}
