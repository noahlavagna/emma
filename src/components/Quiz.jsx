import { useState } from 'react'
import { bonneReponse } from '../lib/texte.js'
import '../styles/quiz.css'

const LIBELLE_TYPE = {
  traduction: 'Traduction',
  trou: 'Texte à trous',
  conjugaison: 'Conjugaison',
  vraiFaux: 'Vrai ou faux',
}

const consigneDe = (q) => {
  switch (q.type) {
    case 'traduction':
      return q.sens === 'en-fr' ? 'Traduis en français :' : 'Traduis en anglais :'
    case 'trou':
      return 'Complète la phrase :'
    case 'conjugaison':
      return `Conjugue le verbe « ${q.verbe} » :`
    case 'vraiFaux':
      return 'Vrai ou faux ?'
    default:
      return ''
  }
}

const enonceDe = (q) => {
  if (q.type === 'trou') return q.phrase
  if (q.type === 'vraiFaux') return q.affirmation
  return q.q
}

const estChoix = (q) => q.type === 'vraiFaux'

/**
 * Moteur de quiz : enchaîne les questions (4 types), validation immédiate
 * avec explication, puis appelle onDone(score, total) à la fin.
 */
export default function Quiz({ questions, onDone, labelFin = 'Terminer' }) {
  const [idx, setIdx] = useState(0)
  const [saisie, setSaisie] = useState('')
  const [choix, setChoix] = useState(null)
  const [statut, setStatut] = useState(null) // null | 'juste' | 'faux'
  const [resultats, setResultats] = useState([])

  const q = questions[idx]
  const dernier = idx === questions.length - 1

  const appliquer = (ok) => {
    setStatut(ok ? 'juste' : 'faux')
    setResultats((r) => [...r, ok])
  }
  const validerTexte = () => {
    if (statut) return
    appliquer(bonneReponse(saisie, q.r, q.accepte))
  }
  const validerChoix = (valeur) => {
    if (statut) return
    setChoix(valeur)
    appliquer(valeur === q.r)
  }
  const suivant = () => {
    if (dernier) {
      onDone(resultats.filter(Boolean).length, questions.length)
      return
    }
    setIdx((i) => i + 1)
    setSaisie('')
    setChoix(null)
    setStatut(null)
  }

  return (
    <div>
      <div className="quiz-progress">
        <span style={{ width: `${((idx + 1) / questions.length) * 100}%` }} />
      </div>
      <div className="quiz-compteur">Question {idx + 1} / {questions.length}</div>

      <div className="q-carte">
        <span className="q-type">{LIBELLE_TYPE[q.type]}</span>
        <p className="q-consigne">{consigneDe(q)}</p>
        <div className="q-enonce">{enonceDe(q)}</div>

        {estChoix(q) ? (
          <div className="vf-boutons">
            <button
              className={`btn btn-doux ${
                statut && choix === true ? (q.r === true ? 'choisi-juste' : 'choisi-faux') : ''
              }`}
              disabled={!!statut}
              onClick={() => validerChoix(true)}
            >
              ✓ Vrai
            </button>
            <button
              className={`btn btn-doux ${
                statut && choix === false ? (q.r === false ? 'choisi-juste' : 'choisi-faux') : ''
              }`}
              disabled={!!statut}
              onClick={() => validerChoix(false)}
            >
              ✗ Faux
            </button>
          </div>
        ) : (
          <form
            className="q-form"
            onSubmit={(e) => {
              e.preventDefault()
              statut ? suivant() : validerTexte()
            }}
          >
            <input
              type="text"
              autoFocus
              autoCapitalize="off"
              autoCorrect="off"
              spellCheck="false"
              placeholder="ta réponse…"
              value={saisie}
              disabled={!!statut}
              className={statut || ''}
              onChange={(e) => setSaisie(e.target.value)}
              aria-label="Ta réponse"
            />
            {!statut && (
              <button type="submit" className="btn btn-primaire" disabled={!saisie.trim()}>
                Valider
              </button>
            )}
          </form>
        )}

        {statut === 'juste' && (
          <div className="q-feedback juste">
            ✅ Bonne réponse !
            <span className="expli">{q.explication}</span>
          </div>
        )}
        {statut === 'faux' && (
          <div className="q-feedback faux">
            {estChoix(q) ? (
              <>❌ La bonne réponse était <span className="bonne">{q.r ? 'Vrai' : 'Faux'}</span>.</>
            ) : (
              <>❌ Presque ! La bonne réponse est <span className="bonne">{q.r}</span>.</>
            )}
            <span className="expli">{q.explication}</span>
          </div>
        )}

        {statut && (
          <div className="q-suite">
            <button className="btn btn-rose" onClick={suivant}>
              {dernier ? labelFin : 'Question suivante →'}
            </button>
          </div>
        )}
      </div>
    </div>
  )
}
