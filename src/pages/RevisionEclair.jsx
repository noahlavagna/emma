import { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import { JOURS_REVISION } from '../data/revision.js'
import { STORAGE_KEYS } from '../data/storage.js'
import { useLocalStorage } from '../hooks/useLocalStorage.js'
import { cleJour } from '../lib/serie.js'
import Quiz from '../components/Quiz.jsx'
import '../styles/revision.css'

const NB_QUESTIONS = 8

function motEmma(score, total) {
  const r = total ? score / total : 0
  if (r === 1) return '« Sans faute, et en 5 minutes ! Tout est bien ancré. 🌟 »'
  if (r >= 0.7) return '« Belle révision express ! Quelques détails à revoir et c’est parfait. 💪 »'
  if (r >= 0.4) return '« Ça travaille en douceur. Refais-en une autre quand tu veux. 🌱 »'
  return '« Pas grave, c’est justement à ça que sert la révision. On y retourne tranquillement. 🤍 »'
}

// Mélange (Fisher-Yates) une copie du tableau.
function melanger(arr) {
  const a = [...arr]
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[a[i], a[j]] = [a[j], a[i]]
  }
  return a
}

export default function RevisionEclair() {
  const [progres] = useLocalStorage(STORAGE_KEYS.programmeJours, {})
  const [admin] = useLocalStorage(STORAGE_KEYS.admin, false)
  const [eclair, setEclair] = useLocalStorage(STORAGE_KEYS.eclair, {})

  const [demarre, setDemarre] = useState(false)
  const [bilan, setBilan] = useState(null) // { score, total } | null
  const [graine, setGraine] = useState(0) // change → nouveau tirage

  // Toutes les questions des jours déjà vus (ou tous les jours en mode test).
  const reservoir = useMemo(() => {
    const joursVus = admin
      ? JOURS_REVISION
      : JOURS_REVISION.filter((j) => progres[j.jour])
    return joursVus.flatMap((j) => j.questions)
  }, [progres, admin])

  // Tirage mélangé, régénéré à chaque nouvelle partie (graine).
  const tirage = useMemo(() => {
    void graine
    return melanger(reservoir).slice(0, NB_QUESTIONS)
  }, [reservoir, graine])

  const lancer = () => { setBilan(null); setDemarre(true); setGraine((g) => g + 1) }
  const rejouer = () => { setBilan(null); setGraine((g) => g + 1) }

  const terminer = (score, total) => {
    setEclair((prev) => {
      const journal = Array.isArray(prev.journal) ? prev.journal : []
      const aujourdhui = cleJour(new Date())
      return {
        dernier: new Date().toISOString(),
        sessions: (prev.sessions || 0) + 1,
        journal: journal.includes(aujourdhui) ? journal : [...journal, aujourdhui].slice(-90),
      }
    })
    setBilan({ score, total })
    setDemarre(false)
  }

  // --- Rien de débloqué encore ---
  if (reservoir.length === 0) {
    return (
      <div className="rev">
        <header className="rev-entete">
          <div className="kicker fade-up">Révision express · 5 minutes</div>
          <h1 className="fade-up" style={{ animationDelay: '0.08s' }}>Bientôt disponible 🌱</h1>
          <p className="fade-up" style={{ animationDelay: '0.16s' }}>
            La révision express pioche dans tout ce que tu as déjà vu. Termine au moins
            un jour de ton parcours et elle s’ouvrira toute seule. 🌷
          </p>
        </header>
        <div className="actions" style={{ justifyContent: 'center' }}>
          <Link to="/parcours" className="btn btn-primaire">Voir le parcours →</Link>
        </div>
      </div>
    )
  }

  // --- Bilan ---
  if (bilan) {
    return (
      <div className="rev">
        <div className="rev-bilan">
          <div className="score-cercle">
            <div>
              <div className="chiffre">{bilan.score}</div>
              <div className="sur">sur {bilan.total}</div>
            </div>
          </div>
          <h2>Révision express terminée 🎉</h2>
          <p className="mot-emma">{motEmma(bilan.score, bilan.total)}</p>
          <div className="actions">
            <button className="btn btn-primaire" onClick={rejouer}>↻ Une autre (5 min)</button>
            <Link to="/" className="btn btn-doux">Accueil</Link>
          </div>
        </div>
      </div>
    )
  }

  // --- Quiz en cours ---
  if (demarre) {
    return (
      <div className="rev">
        <header className="rev-entete">
          <div className="kicker">⚡ Révision express</div>
        </header>
        <Quiz questions={tirage} labelFin="Voir mon score ⚡" onDone={terminer} />
      </div>
    )
  }

  // --- Intro ---
  return (
    <div className="rev">
      <header className="rev-entete">
        <div className="kicker fade-up">Révision express · 5 minutes</div>
        <h1 className="fade-up" style={{ animationDelay: '0.08s' }}>Une révision <em>éclair</em> ⚡</h1>
        <p className="fade-up" style={{ animationDelay: '0.16s' }}>
          {tirage.length} questions mélangées, tirées au hasard dans tout ce que tu as déjà
          appris. L’idéal pour entretenir ta mémoire chaque jour, en 5 minutes. 🌷
        </p>
      </header>
      <div className="actions" style={{ justifyContent: 'center' }}>
        <button className="btn btn-primaire" onClick={lancer}>Commencer ⚡</button>
        <Link to="/" className="btn btn-doux">Plus tard</Link>
      </div>
    </div>
  )
}
