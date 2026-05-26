import { useState } from 'react'
import { Link } from 'react-router-dom'
import { JOURS_REVISION } from '../data/revision.js'
import { STORAGE_KEYS } from '../data/storage.js'
import { useLocalStorage } from '../hooks/useLocalStorage.js'
import Quiz from '../components/Quiz.jsx'
import '../styles/revision.css'

function motEmma(score, total) {
  const r = total ? score / total : 0
  if (r === 1) return '« Sans aucune faute ! Cette journée est parfaitement ancrée. Bravo. 🌟 »'
  if (r >= 0.7) return '« Très solide ! Encore une petite révision et ce sera impeccable. 💪 »'
  if (r >= 0.4) return '« C’est en train de rentrer. Relis les corrections et retente : tu progresses. 🌱 »'
  return '« On débute, c’est normal. Reprends ce jour tranquillement, sans te juger. Je suis là. 🤍 »'
}

export default function Revision() {
  const [jours, setJours] = useLocalStorage(STORAGE_KEYS.revisionJours, {})
  const [jourId, setJourId] = useState(null)
  const [bilan, setBilan] = useState(null) // { score, total }

  const jour = JOURS_REVISION.find((j) => j.jour === jourId)

  const ouvrir = (id) => { setJourId(id); setBilan(null) }

  // --- Sélection du jour ---
  if (!jour) {
    return (
      <div className="rev">
        <header className="rev-entete">
          <div className="kicker">Entraînement libre · Révision</div>
          <h1>10 jours de <em>révision</em></h1>
          <p>Un quiz mélangé par jour (8 à 10 questions). Choisis ton jour. 🌷</p>
        </header>
        <div className="jour-grille">
          {JOURS_REVISION.map((j) => {
            const fait = jours[j.jour]
            return (
              <button key={j.jour} className={`jour-carte ${fait ? 'fait' : ''}`} onClick={() => ouvrir(j.jour)}>
                {fait && (
                  <span className="score-tag">
                    {fait.meilleur === fait.total ? '★ ' : ''}{fait.meilleur}/{fait.total}
                  </span>
                )}
                <span className="num">— Jour {j.jour}</span>
                <span className="emoji" aria-hidden="true">{j.emoji}</span>
                <h3>{j.titre}</h3>
                <div className="focus">
                  {j.focus.map((f) => (<span key={f}>{f}</span>))}
                </div>
              </button>
            )
          })}
        </div>
      </div>
    )
  }

  // --- Bilan ---
  if (bilan) {
    const enreg = jours[jour.jour]
    const record = enreg && enreg.meilleur === bilan.score && bilan.score > 0
    return (
      <div className="rev">
        <div className="rev-bilan">
          <div className="score-cercle">
            <div>
              <div className="chiffre">{bilan.score}</div>
              <div className="sur">sur {bilan.total}</div>
            </div>
          </div>
          <h2>Jour {jour.jour} terminé 🎉</h2>
          {record && <div className="record">🏅 Nouveau record !</div>}
          <p className="mot-emma">{motEmma(bilan.score, bilan.total)}</p>
          <div className="actions">
            <button className="btn btn-primaire" onClick={() => ouvrir(jour.jour)}>↻ Refaire ce jour</button>
            <button className="btn btn-doux" onClick={() => setJourId(null)}>Choisir un autre jour</button>
            <Link to="/" className="btn btn-doux">Accueil</Link>
          </div>
        </div>
      </div>
    )
  }

  // --- Quiz ---
  return (
    <div className="rev">
      <header className="rev-entete">
        <div className="kicker">{jour.emoji} Jour {jour.jour} · {jour.titre}</div>
      </header>
      <Quiz
        questions={jour.questions}
        labelFin="Voir mon score 🌷"
        onDone={(score, total) => {
          setJours((prev) => {
            const prec = prev[jour.jour]?.meilleur ?? -1
            return { ...prev, [jour.jour]: { meilleur: Math.max(prec, score), total, fait: new Date().toISOString() } }
          })
          setBilan({ score, total })
        }}
      />
    </div>
  )
}
