import { useState } from 'react'
import Quiz from '../Quiz.jsx'
import { parler, voixDispo } from '../../lib/voix.js'

export default function SectionDialogue({ data, onTermine }) {
  const [phase, setPhase] = useState('lecture') // lecture | exo
  const audio = voixDispo()

  const questions = data.aToi.map((a) => ({
    type: 'traduction',
    sens: 'fr-en',
    q: a.consigne,
    r: a.r,
    accepte: a.accepte,
    explication: a.explication,
  }))

  if (phase === 'lecture') {
    return (
      <div>
        <div className="section-tete" data-reveal>
          <span className="picto" aria-hidden="true">💬</span>
          <div className="surtitre">Dialogue</div>
          <h2>{data.titre}</h2>
        </div>

        <div className="dialogue-contexte" data-reveal>🎬 {data.contexte}</div>

        {data.lignes.map((l, i) => {
          const moi = l.role === 'Toi'
          return (
            <div className={`bulle ${moi ? 'toi' : 'emma'}`} key={i} data-reveal>
              <span className="qui">{l.role}</span>
              {!moi && audio && (
                <button
                  className="lire"
                  aria-label={`Écouter : ${l.en}`}
                  onClick={() => parler(l.en)}
                >
                  🔊
                </button>
              )}
              <div className="en">{l.en}</div>
              <div className="fr">{l.fr}</div>
            </div>
          )
        })}

        <div className="section-nav">
          <button className="btn btn-rose" onClick={() => setPhase('exo')}>
            À toi de jouer 🎭
          </button>
        </div>
      </div>
    )
  }

  return (
    <div>
      <div className="section-tete" data-reveal>
        <span className="picto" aria-hidden="true">🎭</span>
        <div className="surtitre">Dialogue</div>
        <h2>À toi de <em>répondre</em></h2>
        <p className="intro">Écris en anglais ce qu’on te demande de dire.</p>
      </div>
      <Quiz questions={questions} labelFin="Section terminée →" onDone={onTermine} />
    </div>
  )
}
