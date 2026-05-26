import { useEffect, useState } from 'react'
import { parler, voixDispo } from '../lib/voix.js'

/**
 * Expression orale auto-validée : on écoute le modèle, on répète à voix haute,
 * puis on confirme soi-même (« Je l'ai dit »). Pas de note : c'est de la pratique.
 * Appelle onDone(null, total) à la fin (le bilan affiche un message, pas un score).
 */
export default function Oral({ phrases, onDone }) {
  const [idx, setIdx] = useState(0)
  const audioDispo = voixDispo()
  const phrase = phrases[idx]
  const dernier = idx === phrases.length - 1

  // Lit le modèle automatiquement à chaque nouvelle phrase.
  useEffect(() => {
    if (audioDispo) parler(phrase.en)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [idx])

  const suivant = () => {
    if (dernier) { onDone(null, phrases.length); return }
    setIdx((i) => i + 1)
  }

  return (
    <div>
      <div className="quiz-progress">
        <span style={{ width: `${((idx + 1) / phrases.length) * 100}%` }} />
      </div>
      <div className="quiz-compteur">Phrase {idx + 1} / {phrases.length}</div>

      <div className="q-carte oral-carte">
        <span className="q-type">À toi de parler</span>
        <p className="q-consigne">Lis cette phrase à voix haute :</p>
        <div className="oral-fr">{phrase.fr}</div>

        <div className="oral-modele">
          <div className="oral-en">{phrase.en}</div>
          <div className="oral-phon">{phrase.phon}</div>
        </div>

        {audioDispo && (
          <button type="button" className="q-audio" onClick={() => parler(phrase.en)}>
            🔊 Réécouter le modèle
          </button>
        )}

        <p className="oral-aide">Dis-la à voix haute, à ton rythme. Puis continue. 🌸</p>

        <div className="oral-nav">
          {idx > 0 && (
            <button className="btn btn-doux" onClick={() => setIdx((i) => i - 1)}>← Précédent</button>
          )}
          <button className="btn btn-rose" onClick={suivant}>
            {dernier ? 'Terminer 🎉' : "Je l'ai dit ✓"}
          </button>
        </div>
      </div>
    </div>
  )
}
