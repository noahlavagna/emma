import { Link } from 'react-router-dom'
import { PROGRAMME, raisonVerrou } from '../data/programme.js'
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
  const [admin] = useLocalStorage(STORAGE_KEYS.admin, false)
  const nbFaits = PROGRAMME.filter((j) => progres[j.jour]).length
  const pct = Math.round((nbFaits / PROGRAMME.length) * 100)

  // Regroupe les jours par mois, en conservant l'ordre du parcours.
  const groupes = []
  for (const j of PROGRAMME) {
    let g = groupes.find((x) => x.mois === j.mois)
    if (!g) { g = { mois: j.mois, jours: [] }; groupes.push(g) }
    g.jours.push(j)
  }

  const renderCarte = (j, i = 0) => {
    const fait = progres[j.jour]
    const verrou = raisonVerrou(j.jour, progres, admin)
    const reveal = String((i % 3) + 1)

    // Jour verrouillé → carte non cliquable avec cadenas.
    if (verrou) {
      const message =
        verrou === 'date'
          ? `Cette leçon s’ouvrira le ${j.date}. Reviens ce jour-là ! 🌱`
          : `Termine d’abord le jour ${j.jour - 1} pour débloquer cette leçon.`
      return (
        <div key={j.jour} className="parcours-carte verrou" aria-disabled="true" data-reveal data-reveal-delay={reveal}>
          <span className="etat lock">{verrou === 'date' ? '📅' : '🔒'}</span>
          <span className="num">— Jour {j.jour}</span>
          <span className="date">{j.date}</span>
          <span className="emoji" aria-hidden="true">{j.emoji}</span>
          <h3>{j.titre}</h3>
          <p className="obj">{message}</p>
        </div>
      )
    }

    return (
      <Link key={j.jour} to={`/jour/${j.jour}`} className={`parcours-carte ${fait ? 'fait' : ''}`} data-reveal data-reveal-delay={reveal}>
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
        <div className="kicker fade-up">Du 26 mai au 30 juin · Les bases</div>
        <h1 className="fade-up" style={{ animationDelay: '0.08s' }}>Ton parcours en <em>3 mois</em></h1>
        <p className="fade-up" style={{ animationDelay: '0.16s' }}>Une leçon par jour : vocabulaire, grammaire, conjugaison, dialogue, prononciation, puis quiz.</p>
      </header>

      <div className="parcours-barre fade-up" style={{ animationDelay: '0.24s' }}>
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
              {g.jours.map((j, i) => renderCarte(j, i))}
            </div>
          </section>
        )
      })}
    </div>
  )
}
