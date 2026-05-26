import { Link } from 'react-router-dom'
import { SESSIONS } from '../data/sessions.js'
import { DECKS } from '../data/vocabulaire.js'
import { JOURS_REVISION } from '../data/revision.js'
import { PROGRAMME } from '../data/programme.js'
import { EXERCICES } from '../data/exercices.js'
import { STORAGE_KEYS } from '../data/storage.js'
import { useLocalStorage } from '../hooks/useLocalStorage.js'
import { collecterJours, serieActuelle, serieRecord, actifAujourdhui } from '../lib/serie.js'
import '../styles/accueil.css'

const TOTAL_MOTS = DECKS.reduce((n, d) => n + d.mots.length, 0)
const TOTAL_JOURS = JOURS_REVISION.length
const TOTAL_PARCOURS = PROGRAMME.length
const TOTAL_EXOS = EXERCICES.length

export default function Accueil() {
  const [appris] = useLocalStorage(STORAGE_KEYS.vocabAppris, {})
  const [joursRevises] = useLocalStorage(STORAGE_KEYS.revisionJours, {})
  const [progres] = useLocalStorage(STORAGE_KEYS.programmeJours, {})
  const [scoresExos] = useLocalStorage(STORAGE_KEYS.exercices, {})
  const [eclair] = useLocalStorage(STORAGE_KEYS.eclair, {})
  const [admin] = useLocalStorage(STORAGE_KEYS.admin, false)
  const exosDispo = admin ? TOTAL_EXOS : EXERCICES.filter((e) => progres[e.jourRequis]).length

  const nbAppris = Object.keys(appris).length
  const nbJoursRev = Object.keys(joursRevises).length
  const nbFaits = PROGRAMME.filter((j) => progres[j.jour]).length

  // Série (streak) : jours consécutifs avec une activité, toutes sources confondues.
  const joursActifs = collecterJours({
    progres, revisions: joursRevises, exercices: scoresExos, vocab: appris, eclair,
  })
  const serie = serieActuelle(joursActifs)
  const record = serieRecord(joursActifs)
  const faitAujourdhui = actifAujourdhui(joursActifs)
  const peutReviser = nbFaits > 0 || admin
  const pct = Math.round((nbFaits / TOTAL_PARCOURS) * 100)
  const prochain = PROGRAMME.find((j) => !progres[j.jour]) // premier jour non terminé

  // Cartes d'entraînement libre (vocabulaire + révision déjà prêtes).
  const sessionsLibres = SESSIONS.filter((s) => s.pret)
  const etiquette = (s) => {
    if (s.slug === 'vocabulaire' && nbAppris > 0) return `${nbAppris}/${TOTAL_MOTS} appris`
    if (s.slug === 'revision' && nbJoursRev > 0) return `${nbJoursRev}/${TOTAL_JOURS} jours`
    return 'Prêt'
  }

  const ctaTexte = nbFaits === 0
    ? 'Commencer le jour 1 →'
    : prochain
      ? `Continuer : jour ${prochain.jour} →`
      : 'Revoir le parcours →'
  const ctaLien = prochain ? `/jour/${prochain.jour}` : '/parcours'

  return (
    <div className="page">
      <header className="hero">
        <div className="tagline fade-up">UNE PROF · TROIS MOIS · UN OBJECTIF</div>
        <h1 className="fade-up" style={{ animationDelay: '0.1s' }}>
          Apprends l’anglais <br />
          <em>en douceur</em> <span className="fleur">🌸</span>
        </h1>
        <p className="sous-titre fade-up" style={{ animationDelay: '0.2s' }}>
          Salut, moi c’est Emma. Je t’accompagne de zéro jusqu’au niveau A2/B1
          en sessions courtes de 20 à 30 minutes, à ton rythme.
        </p>
        <div className="badge fade-up" style={{ animationDelay: '0.3s' }}>
          🌱 En cours : 26 mai → 30 juin · Les bases
        </div>
      </header>

      {/* ---------- Série (streak) + révision express ---------- */}
      <section className="ruban-serie fade-up" style={{ animationDelay: '0.4s' }}>
        <div className="serie-info">
          <span className={`serie-flamme ${serie > 0 ? '' : 'eteinte'}`} aria-hidden="true">🔥</span>
          <div>
            <div className="serie-nb">
              {serie > 0
                ? `${serie} jour${serie > 1 ? 's' : ''} d’affilée`
                : 'Allume ta série aujourd’hui'}
            </div>
            <div className="serie-sous">
              {serie > 0
                ? faitAujourdhui
                  ? 'C’est fait pour aujourd’hui, bravo ! 🌸'
                  : 'Une activité aujourd’hui pour garder la flamme 🌱'
                : 'Une petite activité par jour, et elle s’allume 🌱'}
              {record > 1 && record > serie ? ` · record : ${record}` : ''}
            </div>
          </div>
        </div>
        {peutReviser && (
          <Link to="/revision-eclair" className="btn btn-rose serie-cta">
            ⚡ Révision express · 5 min
          </Link>
        )}
      </section>

      {/* ---------- Le parcours, en vedette ---------- */}
      <section className="parcours-hero" data-reveal>
        <div className="pastille-jour">Le cœur de ta progression</div>
        <h2>Ton parcours en <em>3 mois</em></h2>
        <p>
          Une vraie leçon complète par jour, du 26 mai au 30 juin : vocabulaire,
          grammaire, conjugaison, dialogue, prononciation, puis un quiz pour ancrer.
        </p>
        <div className="piste"><span style={{ width: `${pct}%` }} /></div>
        <div className="compteur">{nbFaits} / {TOTAL_PARCOURS} jours terminés</div>
        <div className="actions">
          <Link to={ctaLien} className="btn btn-primaire">{ctaTexte}</Link>
          <Link to="/parcours" className="btn btn-doux">Voir le parcours</Link>
        </div>
        <p className="note">
          La grammaire, la conjugaison, le dialogue et la prononciation sont travaillés
          jour après jour, ici. 🌿
        </p>
      </section>

      {/* ---------- Entraînement libre ---------- */}
      <section className="sessions-wrap">
        <div className="label-section">
          <div className="ligne">Quand tu veux réviser seule</div>
          <h2>Entraînement <em>libre</em></h2>
        </div>

        {/* Atelier d'exercices — la grande boîte à exercices, en vedette */}
        <Link to="/session/exercices" className="atelier-vedette fade-up">
          <div className="atelier-vedette-txt">
            <span className="puce-etat">{exosDispo}/{TOTAL_EXOS} débloqués</span>
            <span className="icone" aria-hidden="true">🎯</span>
            <h3>L’atelier d’exercices</h3>
            <p>
              {TOTAL_EXOS} exercices de tous types — compréhension écrite et orale,
              expression orale, dictées, exercices mélangés — classés par difficulté
              et débloqués au fil de ton parcours.
            </p>
            <span className="commencer">Ouvrir l’atelier <span aria-hidden="true">→</span></span>
          </div>
          <div className="atelier-vedette-deco" aria-hidden="true">📖🎧🗣️✍️🧩</div>
        </Link>

        <div className="grille">
          {sessionsLibres.map((s, i) => (
            <Link
              key={s.slug}
              to={`/session/${s.slug}`}
              className={`carte ${s.accent} fade-up`}
              style={{ animationDelay: `${0.1 + i * 0.08}s` }}
            >
              <div className="blob" aria-hidden="true" />
              <span className="puce-etat">{etiquette(s)}</span>
              <div className="numero">— {s.numero}</div>
              <span className="icone" aria-hidden="true">{s.icone}</span>
              <h3>{s.titre}</h3>
              <p>{s.description}</p>
              <span className="commencer">
                Commencer <span aria-hidden="true">→</span>
              </span>
            </Link>
          ))}
        </div>
      </section>

      <section className="emma-bloc" data-reveal>
        <div className="emma-bulle">
          <div className="emma-avatar" aria-hidden="true">🌸</div>
          <div className="nom">— Emma</div>
          <p className="message">
            « Tu pars de zéro ? <em>Parfait.</em><br />
            On va y aller pas à pas, ensemble,<br />
            et tu vas te surprendre toi-même. »
          </p>
        </div>
      </section>

      <section className="progression" data-reveal>
        <h3>Ton parcours en <em>3 mois</em></h3>
        <div className="mois-grid">
          <div className="mois actif">
            <div className="point-actif" aria-hidden="true" />
            <div className="nom-mois">Juin</div>
            <div className="theme">Les bases absolues : alphabet, salutations, chiffres, « to be »…</div>
          </div>
          <div className="mois">
            <div className="nom-mois">Juillet</div>
            <div className="theme">La vie quotidienne : famille, maison, questions, présent simple…</div>
          </div>
          <div className="mois">
            <div className="nom-mois">Août</div>
            <div className="theme">La conversation : passé, futur, dialogues complets, révisions…</div>
          </div>
        </div>
      </section>
    </div>
  )
}
