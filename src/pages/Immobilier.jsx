import { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import { IMMO_DECKS, IMMO_PHRASES, IMMO_DIALOGUES, IMMO_FICHES } from '../data/immobilier.js'
import { STORAGE_KEYS } from '../data/storage.js'
import { useLocalStorage } from '../hooks/useLocalStorage.js'
import { parler, voixDispo } from '../lib/voix.js'
import Flashcard from '../components/Flashcard.jsx'
import Quiz from '../components/Quiz.jsx'
import '../styles/immobilier.css'

const ONGLETS = [
  { id: 'vocab', label: 'Vocabulaire', emoji: '📚' },
  { id: 'phrases', label: 'Phrases pro', emoji: '💬' },
  { id: 'dialogues', label: 'Dialogues', emoji: '🎭' },
  { id: 'fiches', label: 'Fiches & modèles', emoji: '📄' },
]

const TOTAL_MOTS = IMMO_DECKS.reduce((n, d) => n + d.mots.length, 0)

function motEmma(score, total) {
  const r = score / total
  if (r === 1) return '« Sans faute ! Tu maîtrises ce thème pro. Bravo. 🌟 »'
  if (r >= 0.7) return '« Très solide. Encore deux ou trois mots et c’est parfait. 💪 »'
  if (r >= 0.4) return '« Bon début. Refais les cartes une fois, puis retente. 🌱 »'
  return '« Pas de panique, c’est du vocabulaire pointu. On reprend les cartes tranquillement. 🤍 »'
}

// ----- Petit lecteur de phrase EN avec bouton audio (réutilisé partout) -----
function LigneEN({ en, fr, phon, role }) {
  const audio = voixDispo()
  return (
    <div className={`immo-ligne ${role ? `role-${role.toLowerCase()}` : ''}`}>
      {role && <span className="immo-role">{role}</span>}
      <div className="immo-ligne-corps">
        <div className="immo-en">
          {en}
          {audio && (
            <button
              type="button"
              className="immo-lire"
              aria-label={`Écouter : ${en}`}
              onClick={() => parler(en)}
            >
              🔊
            </button>
          )}
        </div>
        {phon && <div className="immo-phon">{phon}</div>}
        <div className="immo-fr">{fr}</div>
      </div>
    </div>
  )
}

export default function Immobilier() {
  const [appris, setAppris] = useLocalStorage(STORAGE_KEYS.vocabAppris, {})
  const [onglet, setOnglet] = useState('vocab')

  // --- état du sous-module vocabulaire ---
  const [deckId, setDeckId] = useState(null)
  const [mode, setMode] = useState('cartes') // cartes | quiz | bilan
  const [idxCarte, setIdxCarte] = useState(0)
  const [score, setScore] = useState({ bon: 0, total: 0 })

  const deck = useMemo(() => IMMO_DECKS.find((d) => d.id === deckId), [deckId])

  const ouvrirDeck = (id) => {
    setDeckId(id)
    setMode('cartes')
    setIdxCarte(0)
    setScore({ bon: 0, total: 0 })
  }

  const questionsDeck = (d) =>
    d.mots.map((m) => ({
      type: 'traduction',
      sens: 'fr-en',
      q: m.fr,
      r: m.en,
      accepte: m.accepte,
      explication: `${m.en} — ${m.exemple}`,
    }))

  const terminerQuiz = (bon, total) => {
    // marque tout le deck comme « vu » (au moins survolé) — comme la page Vocabulaire.
    setAppris((prev) => {
      const maj = { ...prev }
      for (const m of deck.mots) {
        maj[m.id] = { fois: (prev[m.id]?.fois || 0) + 1, dernier: new Date().toISOString() }
      }
      return maj
    })
    setScore({ bon, total })
    setMode('bilan')
  }

  // ============================ EN-TÊTE + ONGLETS ============================
  const entete = (
    <header className="immo-hero">
      <div className="immo-kicker fade-up">Pôle pro · BTS immobilier</div>
      <h1 className="fade-up" style={{ animationDelay: '0.08s' }}>
        L’anglais de l’<em>immobilier</em> 🏡
      </h1>
      <p className="fade-up" style={{ animationDelay: '0.16s' }}>
        Tout le vocabulaire, les phrases et les dialogues d’un agent immobilier :
        vocabulaire métier, expressions par situation, conversations complètes et
        modèles d’annonces et d’emails. À étudier et à réutiliser au travail.
      </p>
      <nav className="immo-onglets fade-up" style={{ animationDelay: '0.24s' }}>
        {ONGLETS.map((o) => (
          <button
            key={o.id}
            className={`immo-onglet ${onglet === o.id ? 'actif' : ''}`}
            onClick={() => {
              setOnglet(o.id)
              setDeckId(null)
            }}
          >
            <span aria-hidden="true">{o.emoji}</span> {o.label}
          </button>
        ))}
      </nav>
    </header>
  )

  // ============================ ONGLET VOCABULAIRE ============================
  if (onglet === 'vocab' && deck) {
    // --- Cartes ---
    if (mode === 'cartes') {
      const mot = deck.mots[idxCarte]
      const dernier = idxCarte === deck.mots.length - 1
      return (
        <div className="immo">
          {entete}
          <div className="immo-bloc-actif">
            <div className="immo-sous-tete">
              <button className="immo-retour" onClick={() => setDeckId(null)}>← Thèmes</button>
              <div className="immo-sous-titre">{deck.emoji} {deck.titre}</div>
            </div>
            <div className="immo-progress"><span style={{ width: `${((idxCarte + 1) / deck.mots.length) * 100}%` }} /></div>
            <div className="immo-compteur">Carte {idxCarte + 1} / {deck.mots.length}</div>
            <Flashcard mot={mot} />
            <div className="immo-nav">
              <button className="btn btn-doux" disabled={idxCarte === 0} onClick={() => setIdxCarte((i) => Math.max(0, i - 1))}>← Précédent</button>
              {dernier ? (
                <button className="btn btn-rose" onClick={() => setMode('quiz')}>S’entraîner ✍️</button>
              ) : (
                <button className="btn btn-primaire" onClick={() => setIdxCarte((i) => i + 1)}>Suivant →</button>
              )}
            </div>
          </div>
        </div>
      )
    }
    // --- Quiz ---
    if (mode === 'quiz') {
      return (
        <div className="immo">
          {entete}
          <div className="immo-bloc-actif">
            <div className="immo-sous-tete">
              <button className="immo-retour" onClick={() => setMode('cartes')}>← Cartes</button>
              <div className="immo-sous-titre">{deck.emoji} {deck.titre}</div>
            </div>
            <Quiz questions={questionsDeck(deck)} labelFin="Voir mon score 🌷" onDone={terminerQuiz} />
          </div>
        </div>
      )
    }
    // --- Bilan ---
    return (
      <div className="immo">
        {entete}
        <div className="immo-bloc-actif immo-bilan">
          <div className="immo-score">{score.bon}<span>/ {score.total}</span></div>
          <h2>Thème terminé 🎉</h2>
          <p className="immo-mot-emma">{motEmma(score.bon, score.total)}</p>
          <div className="immo-actions">
            <button className="btn btn-primaire" onClick={() => ouvrirDeck(deck.id)}>↻ Refaire ce thème</button>
            <button className="btn btn-doux" onClick={() => setDeckId(null)}>Choisir un autre thème</button>
          </div>
        </div>
      </div>
    )
  }

  if (onglet === 'vocab') {
    return (
      <div className="immo">
        {entete}
        <p className="immo-intro-onglet">
          {IMMO_DECKS.length} thèmes · {TOTAL_MOTS} mots. On découvre en cartes, puis on s’entraîne. 📚
        </p>
        <div className="immo-grille">
          {IMMO_DECKS.map((d, i) => {
            const sus = d.mots.filter((m) => appris[m.id]).length
            const pct = Math.round((sus / d.mots.length) * 100)
            return (
              <button
                key={d.id}
                className="immo-carte fade-up"
                style={{ animationDelay: `${0.05 + Math.min(i, 10) * 0.05}s` }}
                onClick={() => ouvrirDeck(d.id)}
              >
                <span className="immo-carte-emoji" aria-hidden="true">{d.emoji}</span>
                <h3>{d.titre}</h3>
                <div className="immo-carte-meta">{d.mots.length} mots · {sus} appris</div>
                <div className="immo-barre-mini"><span style={{ width: `${pct}%` }} /></div>
              </button>
            )
          })}
        </div>
      </div>
    )
  }

  // ============================ ONGLET PHRASES ============================
  if (onglet === 'phrases') {
    return (
      <div className="immo">
        {entete}
        <p className="immo-intro-onglet">
          Des phrases prêtes à l’emploi, classées par moment de la relation client.
          Touche 🔊 pour écouter. 💬
        </p>
        <div className="immo-accordeon">
          {IMMO_PHRASES.map((g) => (
            <section key={g.id} className="immo-groupe fade-up">
              <div className="immo-groupe-tete">
                <span className="immo-groupe-emoji" aria-hidden="true">{g.emoji}</span>
                <div>
                  <h3>{g.titre}</h3>
                  <p>{g.intro}</p>
                </div>
              </div>
              <div className="immo-lignes">
                {g.phrases.map((p, i) => (
                  <LigneEN key={i} en={p.en} fr={p.fr} phon={p.phon} />
                ))}
              </div>
            </section>
          ))}
        </div>
      </div>
    )
  }

  // ============================ ONGLET DIALOGUES ============================
  if (onglet === 'dialogues') {
    return (
      <div className="immo">
        {entete}
        <p className="immo-intro-onglet">
          Des conversations complètes agent ↔ client. Lis, écoute, et imagine-toi à la place de l’agent. 🎭
        </p>
        <div className="immo-accordeon">
          {IMMO_DIALOGUES.map((d) => (
            <section key={d.id} className="immo-groupe fade-up">
              <div className="immo-groupe-tete">
                <span className="immo-groupe-emoji" aria-hidden="true">{d.emoji}</span>
                <div>
                  <h3>{d.titre}</h3>
                  <p className="immo-contexte">🎬 {d.contexte}</p>
                </div>
              </div>
              <div className="immo-lignes">
                {d.lignes.map((l, i) => (
                  <LigneEN key={i} en={l.en} fr={l.fr} role={l.role} />
                ))}
              </div>
            </section>
          ))}
        </div>
      </div>
    )
  }

  // ============================ ONGLET FICHES ============================
  return (
    <div className="immo">
      {entete}
      <p className="immo-intro-onglet">
        Des modèles à recopier et adapter : annonce de bien et emails pro. 📄
      </p>
      <div className="immo-accordeon">
        {IMMO_FICHES.map((f) => (
          <section key={f.id} className="immo-groupe immo-fiche fade-up">
            <div className="immo-groupe-tete">
              <span className="immo-groupe-emoji" aria-hidden="true">{f.emoji}</span>
              <div>
                <h3>{f.titre}</h3>
                <p>{f.intro}</p>
              </div>
            </div>
            <div className="immo-modele">
              {f.blocs.map((b, i) => (
                <div key={i} className="immo-modele-bloc">
                  <div className="immo-modele-en">
                    {b.en}
                    {voixDispo() && (
                      <button
                        type="button"
                        className="immo-lire"
                        aria-label={`Écouter : ${b.en}`}
                        onClick={() => parler(b.en.replace(/^Subject:\s*/i, ''))}
                      >
                        🔊
                      </button>
                    )}
                  </div>
                  <div className="immo-modele-fr">{b.fr}</div>
                </div>
              ))}
            </div>
          </section>
        ))}
      </div>
      <div className="immo-pied">
        <Link to="/" className="btn btn-doux">← Retour à l’accueil</Link>
      </div>
    </div>
  )
}
