import { useState } from 'react'
import { Link } from 'react-router-dom'
import { EXERCICES, NIVEAUX, TYPES, getExercice } from '../data/exercices.js'
import { getJourProgramme } from '../data/programme.js'
import { STORAGE_KEYS } from '../data/storage.js'
import { useLocalStorage } from '../hooks/useLocalStorage.js'
import Quiz from '../components/Quiz.jsx'
import Lecture from '../components/Lecture.jsx'
import Oral from '../components/Oral.jsx'
import '../styles/exercices.css'

function motEmma(score, total) {
  const r = total ? score / total : 0
  if (r === 1) return '« Sans faute ! C’est parfaitement ancré. Je suis fière de toi. 🌟 »'
  if (r >= 0.7) return '« Très solide ! Encore une petite révision et ce sera impeccable. 💪 »'
  if (r >= 0.4) return '« Ça rentre ! Relis les corrections et retente : tu progresses. 🌱 »'
  return '« On débute ce thème, c’est normal. Reprends-le tranquillement, sans te juger. 🤍 »'
}

export default function Atelier() {
  const [progres] = useLocalStorage(STORAGE_KEYS.programmeJours, {})
  const [admin] = useLocalStorage(STORAGE_KEYS.admin, false)
  const [scores, setScores] = useLocalStorage(STORAGE_KEYS.exercices, {})
  const [exId, setExId] = useState(null)
  const [bilan, setBilan] = useState(null) // { score, total } | null

  const ex = getExercice(exId)
  const estDispo = (e) => admin || Boolean(progres[e.jourRequis])

  const ouvrir = (id) => { setExId(id); setBilan(null) }
  const fermer = () => { setExId(null); setBilan(null) }

  const terminer = (score, total) => {
    if (score !== null) {
      setScores((prev) => {
        const prec = prev[exId]?.meilleur ?? -1
        return { ...prev, [exId]: { meilleur: Math.max(prec, score), total, fait: new Date().toISOString() } }
      })
    }
    setBilan({ score, total })
  }

  // ---------- Catalogue ----------
  if (!ex) {
    const total = EXERCICES.length
    const debloques = EXERCICES.filter(estDispo).length
    return (
      <div className="atelier">
        <header className="atelier-entete">
          <div className="kicker">Entraînement libre · Atelier</div>
          <h1>{total} exercices, <em>tous types</em></h1>
          <p>
            Compréhension écrite, orale, expression orale, dictées, exercices mélangés…
            Classés par difficulté. Chaque exercice se débloque quand tu as fait le jour qu’il
            faut dans ton parcours. 🌷
          </p>
          <div className="atelier-compteur">{debloques} / {total} débloqués pour l’instant</div>
        </header>

        {NIVEAUX.map((niv) => {
          const liste = EXERCICES.filter((e) => e.niveau === niv.id)
          if (!liste.length) return null
          return (
            <section key={niv.id} className="atelier-niveau">
              <div className={`niveau-tete ${niv.accent}`}>
                <span className="niveau-emoji" aria-hidden="true">{niv.emoji}</span>
                <div>
                  <h2>{niv.label}</h2>
                  <span className="niveau-sous">{niv.sous}</span>
                </div>
              </div>
              <div className="exo-grille">
                {liste.map((e) => {
                  const t = TYPES[e.type]
                  const dispo = estDispo(e)
                  const meilleur = scores[e.id]

                  if (!dispo) {
                    const jourReq = getJourProgramme(e.jourRequis)
                    return (
                      <div key={e.id} className="exo-carte verrou" aria-disabled="true">
                        <span className="exo-cadenas">🔒</span>
                        <div className="exo-type">{t.icone} {t.label}</div>
                        <h3>{e.titre}</h3>
                        <p className="exo-deblocage">
                          Débloqué après le jour {e.jourRequis}
                          {jourReq ? ` (${jourReq.date})` : ''}.
                        </p>
                      </div>
                    )
                  }

                  return (
                    <button key={e.id} className={`exo-carte ${niv.accent}`} onClick={() => ouvrir(e.id)}>
                      {meilleur && (
                        <span className="exo-score">
                          {meilleur.total && meilleur.meilleur === meilleur.total ? '★ ' : ''}
                          {meilleur.total ? `${meilleur.meilleur}/${meilleur.total}` : '✓'}
                        </span>
                      )}
                      <div className="exo-type">{t.icone} {t.label}</div>
                      <span className="exo-emoji" aria-hidden="true">{e.emoji}</span>
                      <h3>{e.titre}</h3>
                      <p className="exo-intro">{e.intro}</p>
                      <span className="exo-pied">
                        <span className="exo-duree">⏱ {e.duree}</span>
                        <span className="exo-go">Commencer →</span>
                      </span>
                    </button>
                  )
                })}
              </div>
            </section>
          )
        })}
      </div>
    )
  }

  // ---------- Bilan ----------
  if (bilan) {
    const oral = bilan.score === null
    const enreg = scores[exId]
    const record = !oral && enreg && enreg.meilleur === bilan.score && bilan.score > 0
    return (
      <div className="atelier">
        <div className="exo-bilan">
          {oral ? (
            <div className="bilan-emoji" aria-hidden="true">🗣️</div>
          ) : (
            <div className="score-cercle">
              <div>
                <div className="chiffre">{bilan.score}</div>
                <div className="sur">sur {bilan.total}</div>
              </div>
            </div>
          )}
          <h2>{ex.titre} — terminé 🎉</h2>
          {record && <div className="record">🏅 Nouveau record !</div>}
          <p className="mot-emma">
            {oral
              ? '« Tu as parlé anglais à voix haute — c’est comme ça qu’on progresse vraiment. Bravo ! 🌟 »'
              : motEmma(bilan.score, bilan.total)}
          </p>
          <div className="actions">
            <button className="btn btn-primaire" onClick={() => ouvrir(exId)}>↻ Refaire</button>
            <button className="btn btn-doux" onClick={fermer}>Choisir un autre exercice</button>
            <Link to="/" className="btn btn-doux">Accueil</Link>
          </div>
        </div>
      </div>
    )
  }

  // ---------- Exercice en cours ----------
  const t = TYPES[ex.type]
  return (
    <div className="atelier">
      <header className="atelier-entete compact">
        <button className="exo-retour" onClick={fermer}>← Tous les exercices</button>
        <div className="kicker">{t.icone} {t.label}</div>
        <h1>{ex.titre}</h1>
        <p className="exo-consigne-haut">👩🏻‍🏫 {ex.intro}</p>
      </header>

      {ex.type === 'lecture' && (
        <Lecture exercice={ex} onDone={terminer} labelFin="Voir mon bilan 🎉" />
      )}
      {ex.type === 'oral' && (
        <Oral phrases={ex.phrases} onDone={terminer} />
      )}
      {(ex.type === 'ecoute' || ex.type === 'dictee' || ex.type === 'quiz') && (
        <Quiz questions={ex.questions} onDone={terminer} labelFin="Voir mon bilan 🎉" />
      )}
    </div>
  )
}
