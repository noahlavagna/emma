import { useState } from 'react'
import { Link } from 'react-router-dom'
import { STORAGE_KEYS } from '../data/storage.js'
import { useLocalStorage } from '../hooks/useLocalStorage.js'
import '../styles/admin.css'

// 🔑 Identifiants du mode test. À changer ici si besoin.
const ADMIN_CODE = 'emma'
const ADMIN_MDP = 'prof2026'

export default function Admin() {
  const [admin, setAdmin] = useLocalStorage(STORAGE_KEYS.admin, false)
  const [code, setCode] = useState('')
  const [mdp, setMdp] = useState('')
  const [erreur, setErreur] = useState(false)

  const connecter = (e) => {
    e.preventDefault()
    if (code.trim().toLowerCase() === ADMIN_CODE && mdp === ADMIN_MDP) {
      setAdmin(true)
      setErreur(false)
      setCode(''); setMdp('')
    } else {
      setErreur(true)
    }
  }

  if (admin) {
    return (
      <div className="admin">
        <div className="admin-carte">
          <div className="admin-picto" aria-hidden="true">🔓</div>
          <h1>Mode test activé</h1>
          <p>
            Tous les jours du parcours et tous les exercices de l’atelier sont
            <strong> débloqués</strong> — les verrous de date et de progression sont ignorés.
          </p>
          <div className="admin-actions">
            <Link to="/parcours" className="btn btn-primaire">Voir le parcours →</Link>
            <Link to="/session/exercices" className="btn btn-doux">Atelier d’exercices →</Link>
          </div>
          <button className="admin-off" onClick={() => setAdmin(false)}>
            Désactiver le mode test
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className="admin">
      <form className="admin-carte" onSubmit={connecter}>
        <div className="admin-picto" aria-hidden="true">🔐</div>
        <h1>Mode test</h1>
        <p>Réservé pour tester l’appli : débloque tous les niveaux et tous les exercices.</p>

        <label className="admin-champ">
          <span>Code</span>
          <input
            type="text"
            autoCapitalize="off"
            autoCorrect="off"
            spellCheck="false"
            value={code}
            onChange={(e) => { setCode(e.target.value); setErreur(false) }}
            placeholder="code…"
          />
        </label>
        <label className="admin-champ">
          <span>Mot de passe</span>
          <input
            type="password"
            value={mdp}
            onChange={(e) => { setMdp(e.target.value); setErreur(false) }}
            placeholder="mot de passe…"
          />
        </label>

        {erreur && <p className="admin-erreur">❌ Code ou mot de passe incorrect.</p>}

        <button type="submit" className="btn btn-primaire" disabled={!code.trim() || !mdp}>
          Déverrouiller
        </button>
        <Link to="/" className="admin-retour">← Retour à l’accueil</Link>
      </form>
    </div>
  )
}
