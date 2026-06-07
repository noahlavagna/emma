import { useState } from 'react'
import { STORAGE_KEYS } from '../../data/storage.js'
import { useLocalStorage } from '../../hooks/useLocalStorage.js'
import { bonneReponse } from '../../lib/texte.js'
import '../../styles/quiz.css'

const MAX_GEL = 3

const consigneDe = (q) =>
  q.type === 'trou'
    ? 'Complète la phrase :'
    : q.sens === 'en-fr'
      ? 'Traduis en français :'
      : 'Traduis en anglais :'

const enonceDe = (q) => (q.type === 'trou' ? q.phrase : q.q)

const MESSAGE_GAIN = {
  recompense: '✅ Bravo ! Tu gagnes un gel de série ❄️',
  plein: '✅ Réussi ! Mais ton inventaire est plein (3/3) — utilise un gel, puis reviens le regagner.',
  revele: '✅ Correct — mais la réponse avait été révélée : pas de gel cette fois.',
  deja: '✅ Correct ! Tu as déjà gagné le gel de cette question.',
}

/**
 * Le « Défi du jour » : 2 questions DURES, un cran au-dessus de la leçon.
 * Réussir une question du premier coup (sans révéler la réponse) fait gagner
 * un gel de série (« streak freeze »), plafonné à 3 en inventaire.
 * Étape bonus et optionnelle : on peut filer au bilan quand on veut.
 */
export default function DefiJour({ defis, onTermine }) {
  const [gel, setGel] = useLocalStorage(STORAGE_KEYS.serieGel, { stock: 0, geles: [], reussis: [] })
  const stock = Math.min(MAX_GEL, Number(gel.stock) || 0)
  const reussis = Array.isArray(gel.reussis) ? gel.reussis : []

  const [etats, setEtats] = useState(
    defis.map(() => ({ saisie: '', statut: null, revele: false, gain: null })),
  )

  const maj = (i, patch) =>
    setEtats((arr) => arr.map((e, j) => (j === i ? { ...e, ...patch } : e)))

  const valider = (i) => {
    const q = defis[i]
    const e = etats[i]
    if (e.statut === 'juste') return
    const ok = bonneReponse(e.saisie, q.r, q.accepte)
    if (!ok) {
      maj(i, { statut: 'faux', revele: true })
      return
    }
    // Bonne réponse : on décide de la récompense.
    let gain
    if (reussis.includes(q.id)) gain = 'deja'
    else if (e.revele) gain = 'revele'
    else if (stock >= MAX_GEL) gain = 'plein'
    else {
      gain = 'recompense'
      setGel((prev) => {
        const dejaGagnes = Array.isArray(prev.reussis) ? prev.reussis : []
        if (dejaGagnes.includes(q.id)) return prev
        return {
          stock: Math.min(MAX_GEL, (Number(prev.stock) || 0) + 1),
          geles: Array.isArray(prev.geles) ? prev.geles : [],
          reussis: [...dejaGagnes, q.id],
        }
      })
    }
    maj(i, { statut: 'juste', gain })
  }

  const tousFaits = etats.every((e) => e.statut === 'juste')

  return (
    <div>
      <div className="section-tete" data-reveal>
        <span className="picto" aria-hidden="true">🥇</span>
        <div className="surtitre">Défi du jour · optionnel</div>
        <h2>Les questions <em>dures</em></h2>
        <p className="intro">
          Deux questions un cran au-dessus. Réussis-en une <strong>du premier coup</strong>{' '}
          (sans révéler la réponse) et tu gagnes un <strong>gel de série ❄️</strong> : il sauve
          ta flamme un jour où tu n’as rien fait. Maximum 3 en réserve.
        </p>
      </div>

      <div className="defi-inventaire" aria-label={`Gels de série : ${stock} sur ${MAX_GEL}`}>
        <span className="defi-inv-label">Tes gels de série</span>
        <span className="defi-inv-jauge" aria-hidden="true">
          {Array.from({ length: MAX_GEL }).map((_, k) => (
            <span key={k} className={`flocon ${k < stock ? 'plein' : 'vide'}`}>❄️</span>
          ))}
        </span>
        <span className="defi-inv-nb">{stock} / {MAX_GEL}</span>
      </div>

      {defis.map((q, i) => {
        const e = etats[i]
        const gagne = reussis.includes(q.id)
        return (
          <div className="q-carte defi-carte" key={q.id}>
            <span className="q-type defi-tag">
              🔥 Question dure {i + 1}{gagne ? ' · gel déjà gagné' : ''}
            </span>
            <p className="q-consigne">{consigneDe(q)}</p>
            <div className="q-enonce">{enonceDe(q)}</div>

            <form
              className="q-form"
              onSubmit={(ev) => {
                ev.preventDefault()
                if (e.statut === 'faux') maj(i, { saisie: '', statut: null })
                else valider(i)
              }}
            >
              <input
                type="text"
                autoCapitalize="off"
                autoCorrect="off"
                spellCheck="false"
                placeholder="ta réponse…"
                value={e.saisie}
                disabled={e.statut === 'juste'}
                className={e.statut || ''}
                onChange={(ev) => maj(i, { saisie: ev.target.value })}
                aria-label={`Réponse à la question dure ${i + 1}`}
              />
              {e.statut !== 'juste' && (
                <button type="submit" className="btn btn-primaire" disabled={!e.saisie.trim() && e.statut !== 'faux'}>
                  {e.statut === 'faux' ? 'Réessayer' : 'Valider'}
                </button>
              )}
            </form>

            {e.statut === 'juste' && (
              <div className={`q-feedback juste ${e.gain === 'recompense' ? 'defi-gagne' : ''}`}>
                {MESSAGE_GAIN[e.gain] || '✅ Bonne réponse !'}
                <span className="expli">{q.explication}</span>
              </div>
            )}
            {e.statut === 'faux' && (
              <div className="q-feedback faux">
                ❌ Presque ! La bonne réponse : <span className="bonne">{q.r}</span>.
                <span className="expli">{q.explication} · Réponse révélée → pas de gel sur cette question cette fois.</span>
              </div>
            )}
          </div>
        )
      })}

      <div className="section-nav">
        <button className="btn btn-rose" onClick={onTermine}>
          {tousFaits ? 'Voir mon bilan 🎉' : 'Passer au bilan →'}
        </button>
      </div>
    </div>
  )
}
