import { useMemo, useState } from 'react'
import Flashcard from '../Flashcard.jsx'
import Quiz from '../Quiz.jsx'
import { STORAGE_KEYS } from '../../data/storage.js'
import { useLocalStorage } from '../../hooks/useLocalStorage.js'

export default function SectionVocabulaire({ data, onTermine }) {
  const [, setAppris] = useLocalStorage(STORAGE_KEYS.vocabAppris, {})
  const [phase, setPhase] = useState('cartes') // cartes | exo
  const [idx, setIdx] = useState(0)

  const mots = data.mots
  const dernier = idx === mots.length - 1

  // Exercice de fin de section. Cas particulier des LETTRES (alphabet) : « traduis
  // la lettre J » → « J » n'a aucun sens (la réponse est dans la question). On
  // demande plutôt de reconnaître la lettre à sa prononciation. Sinon : traduire
  // le mot français en anglais.
  const questions = useMemo(() => {
    const estLettre = (m) => /^[A-Za-z]$/.test(m.en.trim())
    const melanger = (arr) => {
      const a = [...arr]
      for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1))
        ;[a[i], a[j]] = [a[j], a[i]]
      }
      return a
    }
    return mots.map((m) => {
      if (estLettre(m)) {
        const son = m.phon.replace(/[[\]]/g, '')
        const autres = melanger(mots.filter((x) => x.en !== m.en).map((x) => x.en)).slice(0, 3)
        return {
          type: 'qcm',
          enonce: `Quelle lettre se prononce « ${son} » ?`,
          options: melanger([m.en, ...autres]),
          r: m.en,
          explication: `La lettre « ${m.en} » se dit ${m.phon}.`,
        }
      }
      return {
        type: 'traduction',
        sens: 'fr-en',
        q: m.fr,
        r: m.en,
        explication: `« ${m.en} » ${m.phon} = ${m.fr}.`,
      }
    })
  }, [mots])

  if (phase === 'cartes') {
    return (
      <div>
        <div className="section-tete" data-reveal>
          <span className="picto" aria-hidden="true">📚</span>
          <div className="surtitre">Vocabulaire</div>
          <h2>Les <em>mots</em> du jour</h2>
          <p className="intro">{data.intro}</p>
        </div>

        <div className="quiz-compteur">Carte {idx + 1} / {mots.length}</div>
        <Flashcard mot={mots[idx]} />

        <div className="section-nav">
          <button
            className="btn btn-doux"
            disabled={idx === 0}
            onClick={() => setIdx((i) => Math.max(0, i - 1))}
          >
            ← Précédent
          </button>
          {dernier ? (
            <button className="btn btn-rose" onClick={() => setPhase('exo')}>
              À l’exercice ✍️
            </button>
          ) : (
            <button className="btn btn-primaire" onClick={() => setIdx((i) => i + 1)}>
              Suivant →
            </button>
          )}
        </div>
      </div>
    )
  }

  const exoLettres = questions.every((q) => q.type === 'qcm')

  return (
    <div>
      <div className="section-tete" data-reveal>
        <span className="picto" aria-hidden="true">✍️</span>
        <div className="surtitre">Vocabulaire</div>
        <h2>À toi de <em>{exoLettres ? 'jouer' : 'traduire'}</em></h2>
        <p className="intro">
          {exoLettres
            ? 'Retrouve la lettre à partir de sa prononciation.'
            : 'Écris le mot anglais correspondant.'}
        </p>
      </div>
      <Quiz
        questions={questions}
        labelFin="Section terminée →"
        onDone={() => {
          // Tous les mots vus comptent comme « appris ».
          setAppris((prev) => {
            const maj = { ...prev }
            for (const m of mots) {
              maj[m.id] = { fois: (prev[m.id]?.fois || 0) + 1, dernier: new Date().toISOString() }
            }
            return maj
          })
          onTermine()
        }}
      />
    </div>
  )
}
