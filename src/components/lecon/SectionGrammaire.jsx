import Quiz from '../Quiz.jsx'

export default function SectionGrammaire({ data, onTermine }) {
  return (
    <div>
      <div className="section-tete" data-reveal>
        <span className="picto" aria-hidden="true">🌿</span>
        <div className="surtitre">Grammaire</div>
        <h2>{data.titre}</h2>
      </div>

      <div className="lecon-carte" data-reveal>
        <p className="regle">{data.regle}</p>
        <div className="analogie">
          <strong>💡 En français :</strong> {data.analogie}
        </div>
        <div className="exemples">
          {data.exemples.map((ex, i) => (
            <div className="ligne" key={i}>
              <span className="en">{ex.en}</span>
              <span className="fr">{ex.fr}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="a-toi-titre" data-reveal>À toi de jouer ✍️</div>
      <Quiz questions={data.exercices} labelFin="Section terminée →" onDone={onTermine} />
    </div>
  )
}
