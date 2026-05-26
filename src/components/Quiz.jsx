import { useEffect, useState } from 'react'
import { bonneReponse } from '../lib/texte.js'
import { parler, voixDispo } from '../lib/voix.js'
import '../styles/quiz.css'

const LIBELLE_TYPE = {
  traduction: 'Traduction',
  trou: 'Texte à trous',
  conjugaison: 'Conjugaison',
  vraiFaux: 'Vrai ou faux',
  qcm: 'Choisis la bonne réponse',
  ecoute: 'Compréhension orale',
  dictee: 'Dictée',
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
    case 'qcm':
      return q.audio ? 'Écoute, puis choisis la bonne réponse :' : 'Choisis la bonne réponse :'
    case 'ecoute':
      return 'Écoute, puis choisis la bonne réponse :'
    case 'dictee':
      return 'Écoute, puis écris la phrase en anglais :'
    default:
      return ''
  }
}

const enonceDe = (q) => {
  if (q.type === 'trou') return q.phrase
  if (q.type === 'vraiFaux') return q.affirmation
  if (q.type === 'dictee') return '🎧' // pas de texte : on écoute
  if (q.type === 'qcm' || q.type === 'ecoute') return q.enonce ?? q.q
  return q.q
}

const estVraiFaux = (q) => q.type === 'vraiFaux'
const estQcm = (q) => q.type === 'qcm' || q.type === 'ecoute'

/**
 * Moteur de quiz / exercices. Types gérés :
 *  - texte libre : traduction, trou, conjugaison, dictee
 *  - boutons     : vraiFaux (Vrai/Faux), qcm / ecoute (choix multiples)
 *  - audio       : toute question avec `audio` (texte EN) lit + bouton 🔊
 * Valide chaque question avec explication, puis appelle onDone(score, total).
 */
export default function Quiz({ questions, onDone, labelFin = 'Terminer' }) {
  const [idx, setIdx] = useState(0)
  const [saisie, setSaisie] = useState('')
  const [choix, setChoix] = useState(null)
  const [statut, setStatut] = useState(null) // null | 'juste' | 'faux'
  const [resultats, setResultats] = useState([])

  const q = questions[idx]
  const dernier = idx === questions.length - 1
  const audioDispo = voixDispo()

  // Lecture automatique du son pour les questions d'écoute / dictée.
  useEffect(() => {
    if (q.audio && audioDispo) parler(q.audio)
    // on relit seulement quand on change de question
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [idx])

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

  // Libellé lisible de la bonne réponse pour le feedback "faux".
  const bonneAffichee = () => {
    if (estVraiFaux(q)) return q.r ? 'Vrai' : 'Faux'
    return q.r
  }

  return (
    <div>
      <div className="quiz-progress">
        <span style={{ width: `${((idx + 1) / questions.length) * 100}%` }} />
      </div>
      <div className="quiz-compteur">Question {idx + 1} / {questions.length}</div>

      <div className="q-carte">
        <span className="q-type">{LIBELLE_TYPE[q.type] || 'Question'}</span>
        <p className="q-consigne">{consigneDe(q)}</p>

        {q.audio && audioDispo && (
          <button
            type="button"
            className="q-audio"
            onClick={() => parler(q.audio)}
            aria-label="Réécouter"
          >
            🔊 Réécouter
          </button>
        )}

        <div className={`q-enonce ${q.type === 'dictee' ? 'q-enonce-audio' : ''}`}>
          {enonceDe(q)}
        </div>

        {estVraiFaux(q) ? (
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
        ) : estQcm(q) ? (
          <div className="qcm-options">
            {q.options.map((opt) => {
              let cls = ''
              if (statut) {
                if (opt === q.r) cls = 'choisi-juste'
                else if (opt === choix) cls = 'choisi-faux'
              }
              return (
                <button
                  key={opt}
                  className={`btn btn-doux qcm-opt ${cls}`}
                  disabled={!!statut}
                  onClick={() => validerChoix(opt)}
                >
                  {opt}
                </button>
              )
            })}
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
            ❌ La bonne réponse était <span className="bonne">{bonneAffichee()}</span>.
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
