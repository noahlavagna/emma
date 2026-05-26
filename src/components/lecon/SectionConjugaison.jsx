import Quiz from '../Quiz.jsx'

export default function SectionConjugaison({ data, onTermine }) {
  return (
    <div>
      <div className="section-tete" data-reveal>
        <span className="picto" aria-hidden="true">✨</span>
        <div className="surtitre">Conjugaison</div>
        <h2>{data.titre}</h2>
      </div>

      <div className="lecon-carte" data-reveal>
        <p className="regle">{data.explication}</p>
        <div className="conj-table">
          {data.tableau.map((row, i) => (
            <div className="row" key={i}>
              <span className="pronom">{row.pronom}</span>
              <span className="forme">{row.forme}</span>
              <span className="ex">{row.exemple}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="a-toi-titre" data-reveal>À toi de jouer ✍️</div>
      <Quiz questions={data.exercices} labelFin="Section terminée →" onDone={onTermine} />
    </div>
  )
}
