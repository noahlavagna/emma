import { Link, useLocation } from 'react-router-dom'
import ScrollManager from './ScrollManager.jsx'
import CloudSync from './CloudSync.jsx'
import emmaPhoto from '../assets/emma.jpg'
import { STORAGE_KEYS } from '../data/storage.js'
import { useLocalStorage } from '../hooks/useLocalStorage.js'
import '../styles/layout.css'

export default function Layout({ children }) {
  const { pathname } = useLocation()
  const surAccueil = pathname === '/'
  const [admin] = useLocalStorage(STORAGE_KEYS.admin, false)

  return (
    <>
      <ScrollManager />
      <CloudSync />
      <nav className="barre">
        <Link to="/" className="marque">
          <span className="pastille">
            <img src={emmaPhoto} alt="" />
          </span>
          Emma
        </Link>
        <div className="barre-droite">
          {admin && (
            <Link to="/admin" className="badge-admin">🔓 Mode test</Link>
          )}
          {!surAccueil && (
            <Link to="/" className="lien-retour">
              <span aria-hidden="true">←</span> Accueil
            </Link>
          )}
        </div>
      </nav>

      {/* key = pathname → rejoue le fondu d'entrée (fallback sans View Transitions) */}
      <main>
        <div className="route-shell" key={pathname}>{children}</div>
      </main>

      <footer className="pied">
        <div className="pied-liens">
          <Link to="/donnees" className="pied-lien">🛟 Sauvegarder ma progression</Link>
        </div>
        Fait avec <span className="coeur">♥</span> pour septembre 2026
        <Link to="/admin" className="pied-admin" aria-label="Mode test">·</Link>
      </footer>
    </>
  )
}
