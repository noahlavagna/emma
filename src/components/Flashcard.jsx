import { useState, useEffect } from 'react'
import { parler, voixDispo } from '../lib/voix.js'

export default function Flashcard({ mot }) {
  const [retournee, setRetournee] = useState(false)
  const audioDispo = voixDispo()

  // Remet la carte côté "avant" quand on change de mot.
  useEffect(() => setRetournee(false), [mot.id])

  return (
    <div className={`flashcard ${retournee ? 'retournee' : ''}`}>
      <div
        className="flashcard-inner"
        role="button"
        tabIndex={0}
        aria-label={retournee ? 'Voir le mot anglais' : 'Voir la traduction'}
        onClick={() => setRetournee((v) => !v)}
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault()
            setRetournee((v) => !v)
          }
        }}
      >
        {/* AVANT : mot anglais + prononciation */}
        <div className="flashcard-face avant">
          {audioDispo && (
            <button
              type="button"
              className="btn-voix"
              aria-label={`Écouter « ${mot.en} »`}
              onClick={(e) => {
                e.stopPropagation()
                parler(mot.en)
              }}
            >
              🔊
            </button>
          )}
          <div className="mot">{mot.en}</div>
          <div className="phon">{mot.phon}</div>
          <div className="indice">Touche la carte pour la retourner ↻</div>
        </div>

        {/* ARRIÈRE : traduction + exemple (en anglais, donc écoutable aussi) */}
        <div className="flashcard-face arriere">
          {audioDispo && mot.exemple && (
            <button
              type="button"
              className="btn-voix"
              aria-label={`Écouter « ${mot.exemple} »`}
              onClick={(e) => {
                e.stopPropagation()
                parler(mot.exemple)
              }}
            >
              🔊
            </button>
          )}
          <div className="trad">{mot.fr}</div>
          <div className="exemple">{mot.exemple}</div>
          <div className="exemple-fr">{mot.exempleFr}</div>
          <div className="indice">Touche pour revenir ↻</div>
        </div>
      </div>
    </div>
  )
}
