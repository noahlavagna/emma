import { Link } from 'react-router-dom'
import { PROGRAMME, estDebloque } from '../data/programme.js'
import { STORAGE_KEYS } from '../data/storage.js'
import { useLocalStorage } from '../hooks/useLocalStorage.js'
import '../styles/parcours.css'

// Métadonnées d'affichage par mois (ordre = ordre du parcours).
const MOIS = {
  mai: { emoji: '🌸', label: 'Mai', sous: 'Mise en route, en douceur' },
  juin: { emoji: '🌿', label: 'Juin', sous: 'Les bases' },
}

export default function Parcours() {
  const [progres] = useLocalStorage(STORAGE_KEYS.programmeJours, {})
  const nbFaits = PROGRAMME.filter((j) => progres[j.jour]).length
  const pct = Math.round((nbFaits / PROGRAMME.length) * 100)

  // Regroupe les jours par mois, en conservant l'ordre du parcours.
  const groupes = []
  for (const j of PROGRAMME) {
    let g = groupes.find((x) => x.mois === j.mois)
    if (!g) { g = { mois: j.mois, jours: [] }; groupes.push(g) }
    g.jours.push(j)
  }

  const renderCarte = (j) => {
    const fait = progres[j.jour]
    const debloque = estDebloque(j.jour, progres)

    // Jour verrouillé → carte non cliquable avec cadenas.
    if (!debloque) {
      return (
        <div key={j.jour} className="parcours-carte verrou" aria-disabled="true">
          <span className="etat lock">🔒</span>
          <span className="num">— Jour {j.jour}</span>
          <span className="date">{j.date}</span>
          <span className="emoji" aria-hidden="true">{j.emoji}</span>
          <h3>{j.titre}</h3>
          <p className="obj">Termine d’abord le jour {j.jour - 1} pour débloquer cette leçon.</p>
        </div>
      )
    }

    return (
      <Link key={j.jour} to={`/jour/${j.jour}`} viewTransition className={`parcours-carte ${fait ? 'fait' : ''}`}>
        <span className={`etat ${fait ? 'ok' : 'todo'}`}>
          {fait ? (fait.total ? `✓ ${fait.score}/${fait.total}` : '✓ fait') : 'à faire'}
        </span>
        <span className="num">— Jour {j.jour}</span>
        <span className="date">{j.date}</span>
        <span className="emoji" aria-hidden="true">{j.emoji}</span>
        <h3>{j.titre}</h3>
        <p className="obj">{j.objectif}</p>
        <span className="commencer">
          {fait ? 'Revoir' : 'Commencer'} <span aria-hidden="true">→</span>
        </span>
      </Link>
    )
  }

  return (
    <div className="parcours">
      <header className="parcours-entete">
        <div className="kicker">Du 26 mai au 10 juin · Les bases</div>
        <h1>Ton parcours en <em>{PROGRAMME.length} jours</em></h1>
        <p>Une leçon par jour : vocabulaire, grammaire, conjugaison, dialogue, prononciation, puis quiz.</p>
      </header>

      <div className="parcours-barre">
        <div className="piste"><span style={{ width: `${pct}%` }} /></div>
        <div className="compteur">{nbFaits} / {PROGRAMME.length} jours terminés</div>
      </div>

      {groupes.map((g) => {
        const m = MOIS[g.mois] || { emoji: '📅', label: g.mois, sous: '' }
        return (
          <section key={g.mois}>
            <div className="parcours-mois">
              <span className="mois-emoji" aria-hidden="true">{m.emoji}</span>
              <h2>{m.label}</h2>
              {m.sous && <span className="mois-sous">— {m.sous}</span>}
            </div>
            <div className="parcours-grille">
              {g.jours.map(renderCarte)}
            </div>
          </section>
        )
      })}
    </div>
  )
}
