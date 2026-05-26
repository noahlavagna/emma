import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { getJourProgramme, PROGRAMME, raisonVerrou } from '../data/programme.js'
import { getJour } from '../data/revision.js'
import { STORAGE_KEYS } from '../data/storage.js'
import { useLocalStorage } from '../hooks/useLocalStorage.js'
import Quiz from '../components/Quiz.jsx'
import SectionVocabulaire from '../components/lecon/SectionVocabulaire.jsx'
import SectionGrammaire from '../components/lecon/SectionGrammaire.jsx'
import SectionConjugaison from '../components/lecon/SectionConjugaison.jsx'
import SectionDialogue from '../components/lecon/SectionDialogue.jsx'
import SectionPrononciation from '../components/lecon/SectionPrononciation.jsx'
import '../styles/jour.css'

const STEPS = [
  { key: 'intro', label: 'Intro' },
  { key: 'vocabulaire', label: 'Vocab' },
  { key: 'grammaire', label: 'Gram.' },
  { key: 'conjugaison', label: 'Conj.' },
  { key: 'dialogue', label: 'Dialogue' },
  { key: 'prononciation', label: 'Prono.' },
  { key: 'revision', label: 'Quiz' },
  { key: 'bilan', label: 'Bilan' },
]

const hautDePage = () => {
  if (window.__lenis) window.__lenis.scrollTo(0, { immediate: true })
  else window.scrollTo(0, 0)
}

export default function Jour() {
  const { n } = useParams()
  const jour = getJourProgramme(n)
  const quizRevision = getJour(n)

  const [progres, setProgres] = useLocalStorage(STORAGE_KEYS.programmeJours, {})
  const [admin] = useLocalStorage(STORAGE_KEYS.admin, false)
  const [step, setStep] = useState(0)
  const [scoreQuiz, setScoreQuiz] = useState(null)

  // Remonte en haut à chaque changement d'étape.
  useEffect(() => { hautDePage() }, [step])

  if (!jour) {
    return (
      <div className="jour" style={{ textAlign: 'center', paddingTop: '4rem' }}>
        <h1>Jour introuvable</h1>
        <p style={{ color: 'var(--texte-doux)', margin: '1rem 0 1.6rem' }}>
          Ce jour n’existe pas encore dans le parcours.
        </p>
        <Link to="/parcours" className="btn btn-primaire">Voir le parcours</Link>
      </div>
    )
  }

  // Jour verrouillé : soit la date n'est pas arrivée, soit le précédent n'est pas fini.
  const verrou = raisonVerrou(jour.jour, progres, admin)
  if (verrou === 'date') {
    return (
      <div className="jour" style={{ textAlign: 'center', paddingTop: '4rem' }}>
        <div style={{ fontSize: '3rem' }} aria-hidden="true">📅</div>
        <h1>Jour {jour.jour} pas encore ouvert</h1>
        <p style={{ color: 'var(--texte-doux)', margin: '1rem 0 1.6rem' }}>
          Cette leçon s’ouvrira le <strong>{jour.date}</strong>. Une leçon par jour, le vrai jour : ça laisse le temps de bien ancrer. Reviens ce jour-là ! 🌱
        </p>
        <div className="jour-actions">
          <Link to="/parcours" className="btn btn-primaire">Voir le parcours</Link>
          <Link to="/session/exercices" className="btn btn-doux">En attendant, t’entraîner librement →</Link>
        </div>
      </div>
    )
  }
  if (verrou === 'sequence') {
    return (
      <div className="jour" style={{ textAlign: 'center', paddingTop: '4rem' }}>
        <div style={{ fontSize: '3rem' }} aria-hidden="true">🔒</div>
        <h1>Jour {jour.jour} verrouillé</h1>
        <p style={{ color: 'var(--texte-doux)', margin: '1rem 0 1.6rem' }}>
          Termine d’abord le <strong>jour {jour.jour - 1}</strong> pour débloquer cette leçon. On avance pas à pas ! 🌸
        </p>
        <div className="jour-actions">
          <Link to={`/jour/${jour.jour - 1}`} className="btn btn-primaire">
            Aller au jour {jour.jour - 1} →
          </Link>
          <Link to="/parcours" className="btn btn-doux">Voir le parcours</Link>
        </div>
      </div>
    )
  }

  const avancer = () => setStep((s) => Math.min(STEPS.length - 1, s + 1))
  const cle = STEPS[step].key
  const jourSuivant = PROGRAMME.find((j) => j.jour === jour.jour + 1)

  const terminerJour = (score, total) => {
    setScoreQuiz({ score, total })
    setProgres((prev) => ({
      ...prev,
      [jour.jour]: { fait: new Date().toISOString(), score, total },
    }))
    avancer()
  }

  return (
    <div className="jour">
      <div className="jour-stepper" aria-hidden="true">
        {STEPS.map((s, i) => (
          <span key={s.key} className={`etape ${i === step ? 'actif' : ''} ${i < step ? 'fait' : ''}`}>
            {i < step ? '✓' : i + 1} {s.label}
          </span>
        ))}
      </div>
      <div className="jour-titre-mini">
        Jour {jour.jour} · {jour.date} · {jour.emoji} {jour.titre}
      </div>

      {cle === 'intro' && (
        <div>
          <div className="section-tete" data-reveal>
            <span className="picto" aria-hidden="true">{jour.emoji}</span>
            <div className="surtitre">Jour {jour.jour} · {jour.date}</div>
            <h2>{jour.titre}</h2>
            <p className="intro"><strong>🎯 Objectif :</strong> {jour.objectif}</p>
          </div>
          <div className="lecon-carte" data-reveal>
            <p className="regle" style={{ fontStyle: 'italic' }}>👩🏻‍🏫 {jour.intro}</p>
          </div>
          <div className="section-nav">
            <button className="btn btn-primaire" onClick={avancer}>Commencer la leçon →</button>
          </div>
        </div>
      )}

      {cle === 'vocabulaire' && <SectionVocabulaire data={jour.vocabulaire} onTermine={avancer} />}
      {cle === 'grammaire' && <SectionGrammaire data={jour.grammaire} onTermine={avancer} />}
      {cle === 'conjugaison' && <SectionConjugaison data={jour.conjugaison} onTermine={avancer} />}
      {cle === 'dialogue' && <SectionDialogue data={jour.dialogue} onTermine={avancer} />}
      {cle === 'prononciation' && <SectionPrononciation data={jour.prononciation} onTermine={avancer} />}

      {cle === 'revision' && (
        <div>
          <div className="section-tete" data-reveal>
            <span className="picto" aria-hidden="true">🌷</span>
            <div className="surtitre">Révision</div>
            <h2>Le quiz du <em>jour</em></h2>
            <p className="intro">On vérifie que tout est bien ancré avant le bilan.</p>
          </div>
          {quizRevision ? (
            <Quiz questions={quizRevision.questions} labelFin="Voir mon bilan 🎉" onDone={terminerJour} />
          ) : (
            <div className="section-nav">
              <button className="btn btn-primaire" onClick={() => terminerJour(0, 0)}>
                Aller au bilan →
              </button>
            </div>
          )}
        </div>
      )}

      {cle === 'bilan' && (
        <div className="jour-bilan">
          <div className="medaille" data-reveal>🏅</div>
          <h2 data-reveal>Jour {jour.jour} terminé !</h2>
          {scoreQuiz && scoreQuiz.total > 0 && (
            <div className="score-ligne" data-reveal>
              Quiz : {scoreQuiz.score} / {scoreQuiz.total}
            </div>
          )}
          <ul className="bilan-resume">
            {jour.bilan.resume.map((r, i) => (
              <li key={i} data-reveal>{r}</li>
            ))}
          </ul>
          <div className="bilan-conseil" data-reveal>
            <strong>💡 Le conseil d’Emma :</strong> {jour.bilan.conseil}
          </div>
          <p className="mot-emma" data-reveal>« {jour.bilan.motivation} »</p>
          <div className="jour-actions">
            {jourSuivant ? (
              <Link to={`/jour/${jourSuivant.jour}`} className="btn btn-primaire">
                Jour {jourSuivant.jour} : {jourSuivant.titre} →
              </Link>
            ) : (
              <Link to="/" className="btn btn-primaire">🎓 Parcours mai–juin terminé !</Link>
            )}
            <Link to="/parcours" className="btn btn-doux">Le parcours</Link>
            <button
              className="btn btn-doux"
              onClick={() => { setStep(0); setScoreQuiz(null); hautDePage() }}
            >
              ↻ Refaire ce jour
            </button>
          </div>
        </div>
      )}
    </div>
  )
}
