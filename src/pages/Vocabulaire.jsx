import { useMemo, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { DECKS } from '../data/vocabulaire.js'
import { STORAGE_KEYS } from '../data/storage.js'
import { useLocalStorage } from '../hooks/useLocalStorage.js'
import { bonneReponse } from '../lib/texte.js'
import Flashcard from '../components/Flashcard.jsx'
import '../styles/vocabulaire.css'

function motEmma(score, total) {
  const r = score / total
  if (r === 1) return '« Sans faute ! Tu maîtrises ce thème, je suis fière de toi. 🌟 »'
  if (r >= 0.7) return '« Très beau travail. Quelques mots à revoir et ce sera parfait. 💪 »'
  if (r >= 0.4) return '« Bon début ! Refais les flashcards une fois, puis retente : tu vas voir, ça rentre. 🌱 »'
  return '« Pas de panique, c’est tout nouveau. On reprend les cartes tranquillement, sans pression. 🤍 »'
}

export default function Vocabulaire() {
  const [appris, setAppris] = useLocalStorage(STORAGE_KEYS.vocabAppris, {})

  const [deckId, setDeckId] = useState(null)
  const [etape, setEtape] = useState('flashcards') // flashcards | exercice | bilan
  const [idxCarte, setIdxCarte] = useState(0)
  const [idxExo, setIdxExo] = useState(0)
  const [saisie, setSaisie] = useState('')
  const [statut, setStatut] = useState(null) // null | 'juste' | 'faux'
  const [resultats, setResultats] = useState([])
  const inputRef = useRef(null)

  const deck = useMemo(() => DECKS.find((d) => d.id === deckId), [deckId])

  // --- Écran de choix du thème ---
  if (!deck) {
    return (
      <div className="voc">
        <header className="voc-entete">
          <div className="kicker">Session 01 · Vocabulaire</div>
          <h1>Choisis un <em>thème</em></h1>
          <p>6 à 8 mots par thème. On découvre, puis on s’entraîne. 📚</p>
        </header>
        <div className="deck-grille">
          {DECKS.map((d) => {
            const sus = d.mots.filter((m) => appris[m.id]).length
            const pct = Math.round((sus / d.mots.length) * 100)
            return (
              <button
                key={d.id}
                className="deck-carte"
                onClick={() => {
                  setDeckId(d.id)
                  setEtape('flashcards')
                  setIdxCarte(0)
                  setIdxExo(0)
                  setSaisie('')
                  setStatut(null)
                  setResultats([])
                }}
              >
                <span className="emoji" aria-hidden="true">{d.emoji}</span>
                <h3>{d.titre}</h3>
                <div className="meta">{d.mois} · {d.mots.length} mots · {sus} appris</div>
                <div className="barre-mini"><span style={{ width: `${pct}%` }} /></div>
              </button>
            )
          })}
        </div>
      </div>
    )
  }

  const mots = deck.mots
  const reset = () => {
    setDeckId(null)
    setEtape('flashcards')
  }

  // --- Phase flashcards ---
  if (etape === 'flashcards') {
    const mot = mots[idxCarte]
    const dernier = idxCarte === mots.length - 1
    return (
      <div className="voc">
        <header className="voc-entete">
          <div className="kicker">{deck.emoji} {deck.titre}</div>
          <h1>Découverte</h1>
          <p>Lis, écoute, puis retourne la carte pour la traduction.</p>
        </header>

        <div className="voc-progress">
          <span style={{ width: `${((idxCarte + 1) / mots.length) * 100}%` }} />
        </div>
        <div className="voc-compteur">Carte {idxCarte + 1} / {mots.length}</div>

        <Flashcard mot={mot} />

        <div className="voc-nav">
          <button
            className="btn btn-doux"
            disabled={idxCarte === 0}
            onClick={() => setIdxCarte((i) => Math.max(0, i - 1))}
          >
            ← Précédent
          </button>
          {dernier ? (
            <button className="btn btn-rose" onClick={() => setEtape('exercice')}>
              Passer à l’exercice ✍️
            </button>
          ) : (
            <button className="btn btn-primaire" onClick={() => setIdxCarte((i) => i + 1)}>
              Suivant →
            </button>
          )}
        </div>
      </div>
    )
  }

  // --- Phase exercice ---
  if (etape === 'exercice') {
    const mot = mots[idxExo]
    const dernier = idxExo === mots.length - 1

    const valider = () => {
      if (statut) return // déjà validé
      const ok = bonneReponse(saisie, mot.en)
      setStatut(ok ? 'juste' : 'faux')
      setResultats((r) => [...r, ok])
    }

    const suivant = () => {
      if (dernier) {
        // Marque comme « appris » les mots réussis et termine.
        const reussis = mots.filter((_, i) => resultats[i])
        setAppris((prev) => {
          const maj = { ...prev }
          for (const m of reussis) {
            maj[m.id] = { fois: (prev[m.id]?.fois || 0) + 1, dernier: new Date().toISOString() }
          }
          return maj
        })
        setEtape('bilan')
        return
      }
      setIdxExo((i) => i + 1)
      setSaisie('')
      setStatut(null)
      // refocus le champ pour le mot suivant
      requestAnimationFrame(() => inputRef.current?.focus())
    }

    return (
      <div className="voc">
        <header className="voc-entete">
          <div className="kicker">{deck.emoji} {deck.titre}</div>
          <h1>Mémorisation</h1>
        </header>

        <div className="voc-progress">
          <span style={{ width: `${((idxExo + 1) / mots.length) * 100}%` }} />
        </div>
        <div className="voc-compteur">Mot {idxExo + 1} / {mots.length}</div>

        <div className="exo">
          <p className="consigne">Traduis ce mot en anglais :</p>
          <div className="a-traduire">{mot.fr}</div>
          {statut && <div className="phon-aide">{mot.phon}</div>}

          <form
            className="exo-form"
            onSubmit={(e) => {
              e.preventDefault()
              statut ? suivant() : valider()
            }}
          >
            <input
              ref={inputRef}
              type="text"
              autoFocus
              autoCapitalize="off"
              autoCorrect="off"
              spellCheck="false"
              placeholder="en anglais…"
              value={saisie}
              disabled={!!statut}
              className={statut || ''}
              onChange={(e) => setSaisie(e.target.value)}
              aria-label={`Traduction anglaise de ${mot.fr}`}
            />
            {!statut ? (
              <button type="submit" className="btn btn-primaire" disabled={!saisie.trim()}>
                Valider
              </button>
            ) : (
              <button type="submit" className="btn btn-rose">
                {dernier ? 'Voir mon score 🌷' : 'Suivant →'}
              </button>
            )}
          </form>

          {statut === 'juste' && (
            <div className="feedback juste">✅ Bravo ! <span className="bonne">{mot.en}</span> — {mot.exemple}</div>
          )}
          {statut === 'faux' && (
            <div className="feedback faux">
              ❌ Presque ! La bonne réponse est <span className="bonne">{mot.en}</span>.<br />
              {mot.exemple} — <em>{mot.exempleFr}</em>
            </div>
          )}
        </div>
      </div>
    )
  }

  // --- Bilan ---
  const score = resultats.filter(Boolean).length
  const total = mots.length
  return (
    <div className="voc">
      <div className="bilan">
        <div className="score-cercle">
          <div>
            <div className="chiffre">{score}</div>
            <div className="sur">sur {total}</div>
          </div>
        </div>
        <h2>Session terminée 🎉</h2>
        <p className="mot-emma">{motEmma(score, total)}</p>
        <div className="actions">
          <button
            className="btn btn-primaire"
            onClick={() => {
              setEtape('flashcards')
              setIdxCarte(0)
              setIdxExo(0)
              setSaisie('')
              setStatut(null)
              setResultats([])
            }}
          >
            ↻ Refaire ce thème
          </button>
          <button className="btn btn-doux" onClick={reset}>
            Choisir un autre thème
          </button>
          <Link to="/" className="btn btn-doux">Accueil</Link>
        </div>
      </div>
    </div>
  )
}
