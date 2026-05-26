import { useState } from 'react'
import { parler, voixDispo } from '../lib/voix.js'
import Quiz from './Quiz.jsx'

/**
 * Compréhension écrite : un texte anglais reste affiché en haut (avec audio et
 * traduction optionnelle), et les questions du <Quiz> s'enchaînent en dessous.
 */
export default function Lecture({ exercice, onDone, labelFin }) {
  const [trad, setTrad] = useState(false)
  const audioDispo = voixDispo()
  const { texte = [], traduction = [], glossaire = [], questions } = exercice

  return (
    <div>
      <div className="lecture-texte">
        <div className="lecture-tete">
          <span className="lecture-pastille">📖 Le texte</span>
          <div className="lecture-actions">
            {audioDispo && (
              <button type="button" className="q-audio" onClick={() => parler(texte.join(' '))}>
                🔊 Écouter
              </button>
            )}
            {traduction.length > 0 && (
              <button type="button" className="lecture-toggle" onClick={() => setTrad((v) => !v)}>
                {trad ? 'Cacher la traduction' : 'Voir la traduction'}
              </button>
            )}
          </div>
        </div>

        <div className="lecture-corps">
          {texte.map((ligne, i) => (
            <p key={i} className="lecture-ligne">
              {ligne}
              {trad && traduction[i] && <span className="lecture-trad"> — {traduction[i]}</span>}
            </p>
          ))}
        </div>

        {glossaire.length > 0 && (
          <div className="lecture-glossaire">
            {glossaire.map((g) => (
              <span key={g.en}><strong>{g.en}</strong> : {g.fr}</span>
            ))}
          </div>
        )}
      </div>

      <p className="lecture-consigne">Le texte reste là : tu peux y revenir pour répondre. 👇</p>
      <Quiz questions={questions} onDone={onDone} labelFin={labelFin} />
    </div>
  )
}
