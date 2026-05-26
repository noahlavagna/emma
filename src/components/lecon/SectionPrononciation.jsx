import { parler, voixDispo } from '../../lib/voix.js'

export default function SectionPrononciation({ data, onTermine }) {
  const audio = voixDispo()

  return (
    <div>
      <div className="section-tete" data-reveal>
        <span className="picto" aria-hidden="true">🎵</span>
        <div className="surtitre">Prononciation</div>
        <h2>{data.titre}</h2>
      </div>

      <div className="lecon-carte" data-reveal>
        <div className="prono-son" aria-hidden="true">{data.son}</div>
        <p className="regle">{data.explication}</p>
        <div className="analogie">
          <strong>🛠 Technique :</strong> {data.technique}
        </div>

        <div className="prono-mots">
          {data.mots.map((m, i) => (
            <button
              key={i}
              className="prono-mot"
              onClick={() => audio && parler(m.en)}
              aria-label={audio ? `Écouter ${m.en}` : m.en}
            >
              {audio && <span aria-hidden="true">🔊</span>}
              {m.en} <span className="ph">{m.phon}</span>
            </button>
          ))}
        </div>

        <div className="prono-phrase">
          “{data.phrase}”
          {audio && (
            <div>
              <button className="btn btn-doux" onClick={() => parler(data.phrase)}>
                🔊 Écouter la phrase
              </button>
            </div>
          )}
        </div>
      </div>

      <div className="section-nav">
        <button className="btn btn-rose" onClick={onTermine}>
          J’ai compris, on continue →
        </button>
      </div>
    </div>
  )
}
