import { useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import {
  telechargerSauvegarde,
  lireFichier,
  lireProgression,
  ecrireProgression,
  genererCode,
  decoderCode,
} from '../lib/sauvegarde.js'
import {
  cloudDispo,
  lireCodeSync,
  ecrireCodeSync,
  genererCodeSync,
  recupererCloud,
  envoyerCloud,
} from '../lib/cloud.js'
import '../styles/donnees.css'

export default function Donnees() {
  const fichierRef = useRef(null)
  const [code, setCode] = useState('') // code à coller pour restaurer
  const [genere, setGenere] = useState('') // code généré à copier
  const [msg, setMsg] = useState(null) // { ok: boolean, texte }

  // Synchro cloud
  const [syncCode, setSyncCode] = useState(lireCodeSync())
  const [lienInput, setLienInput] = useState('')
  const [occupe, setOccupe] = useState(false)

  const dire = (ok, texte) => setMsg({ ok, texte })

  // Applique un paquet restauré puis recharge pour rafraîchir toute l'app.
  const appliquer = (paquet) => {
    const n = ecrireProgression(paquet, { remplacer: true })
    dire(true, `Progression restaurée (${n} catégorie${n > 1 ? 's' : ''}). Rechargement…`)
    setTimeout(() => window.location.reload(), 900)
  }

  const exporter = () => {
    try {
      telechargerSauvegarde()
      dire(true, 'Sauvegarde téléchargée. Garde ce fichier en lieu sûr. 🌷')
    } catch {
      dire(false, 'Le téléchargement a échoué.')
    }
  }

  const choisirFichier = async (e) => {
    const file = e.target.files?.[0]
    if (!file) return
    try {
      const paquet = await lireFichier(file)
      if (!window.confirm('Restaurer cette sauvegarde ? Ta progression actuelle sera remplacée.')) {
        e.target.value = ''
        return
      }
      appliquer(paquet)
    } catch (err) {
      dire(false, err.message || 'Fichier illisible.')
    } finally {
      e.target.value = ''
    }
  }

  const genererTransfert = async () => {
    const c = genererCode()
    setGenere(c)
    try {
      await navigator.clipboard.writeText(c)
      dire(true, 'Code copié ! Colle-le sur ton autre appareil. 📋')
    } catch {
      dire(true, 'Code généré ci-dessous — sélectionne-le et copie-le.')
    }
  }

  const appliquerCode = () => {
    if (!code.trim()) return
    try {
      const paquet = decoderCode(code)
      if (!window.confirm('Restaurer depuis ce code ? Ta progression actuelle sera remplacée.')) return
      appliquer(paquet)
    } catch (err) {
      dire(false, err.message || 'Code invalide.')
    }
  }

  // ---- Synchro cloud ----
  const activerSync = async () => {
    const c = genererCodeSync()
    ecrireCodeSync(c)
    setSyncCode(c)
    dire(true, 'Synchro activée ! Note ce code et saisis-le sur tes autres appareils. 🔐')
    try { await envoyerCloud(c, lireProgression()) } catch { /* premier envoi best-effort */ }
  }

  const recupererSync = async (c = syncCode) => {
    if (!c) return
    setOccupe(true)
    try {
      const paquet = await recupererCloud(c)
      if (!paquet || !paquet.donnees) {
        dire(false, 'Aucune progression trouvée dans le cloud pour ce code.')
        return
      }
      if (!window.confirm('Remplacer la progression de cet appareil par celle du cloud ?')) return
      ecrireProgression(paquet, { remplacer: true })
      dire(true, 'Progression récupérée du cloud. Rechargement…')
      setTimeout(() => window.location.reload(), 900)
    } catch (err) {
      dire(false, err.message || 'Échec de la récupération.')
    } finally {
      setOccupe(false)
    }
  }

  const envoyerSync = async () => {
    if (!syncCode) return
    setOccupe(true)
    try {
      await envoyerCloud(syncCode, lireProgression())
      dire(true, 'Progression envoyée vers le cloud. ☁️ ✓')
    } catch (err) {
      dire(false, err.message || 'Échec de l’envoi.')
    } finally {
      setOccupe(false)
    }
  }

  const lierAppareil = () => {
    const c = lienInput.trim().toUpperCase()
    if (!c) return
    ecrireCodeSync(c)
    setSyncCode(c)
    setLienInput('')
    recupererSync(c) // on propose de récupérer la progression liée à ce code
  }

  const delierAppareil = () => {
    ecrireCodeSync('')
    setSyncCode('')
    dire(true, 'Synchro désactivée sur cet appareil (tes données locales restent là).')
  }

  const copierSync = async () => {
    try {
      await navigator.clipboard.writeText(syncCode)
      dire(true, 'Code de synchro copié. 📋')
    } catch {
      dire(false, 'Copie impossible — sélectionne le code à la main.')
    }
  }

  return (
    <div className="donnees">
      <header className="donnees-entete">
        <div className="kicker fade-up">Sauvegarde</div>
        <h1 className="fade-up" style={{ animationDelay: '0.08s' }}>Mes <em className="serif italic">données</em></h1>
        <p className="fade-up" style={{ animationDelay: '0.16s' }}>
          Ta progression vit sur cet appareil. Garde-la en sûreté, et retrouve-la
          sur tous tes écrans. 🌸
        </p>
      </header>

      {cloudDispo() && (
        <section className="donnees-cloud fade-up" style={{ animationDelay: '0.24s' }}>
          <div className="dc-tete">
            <span className="dc-icone" aria-hidden="true">☁️</span>
            <div className="dc-titres">
              <h2>Synchronisation cloud</h2>
              <span className={`dc-statut ${syncCode ? 'on' : 'off'}`}>
                {syncCode ? '● Activée' : '○ Inactive'}
              </span>
            </div>
          </div>

          {!syncCode ? (
            <>
              <p className="dc-desc">
                Retrouve ta progression sur tous tes appareils, automatiquement.
                Tu obtiens un code secret à saisir une seule fois sur chacun.
              </p>
              <div className="dc-actions">
                <button className="btn btn-primaire" onClick={activerSync} disabled={occupe}>
                  Activer la synchro
                </button>
              </div>
              <div className="dc-sep"><span>déjà un code ?</span></div>
              <div className="dc-lier">
                <input
                  className="donnees-champ"
                  aria-label="Code de synchro existant"
                  placeholder="Saisis ton code…"
                  value={lienInput}
                  onChange={(e) => setLienInput(e.target.value)}
                />
                <button className="btn btn-rose" onClick={lierAppareil} disabled={!lienInput.trim() || occupe}>
                  Lier
                </button>
              </div>
            </>
          ) : (
            <>
              <p className="dc-desc">
                Active sur cet appareil — ta progression part dans le cloud après chaque
                activité. Saisis ce code sur tes autres écrans pour les relier :
              </p>
              <div className="code-secret">
                <span className="code-secret-label">Ton code de synchro</span>
                <div className="code-secret-valeur">{syncCode}</div>
                <button className="code-copier" onClick={copierSync}>📋 Copier</button>
              </div>
              <div className="dc-actions">
                <button className="btn btn-primaire" onClick={envoyerSync} disabled={occupe}>
                  Envoyer maintenant
                </button>
                <button className="btn btn-doux" onClick={() => recupererSync()} disabled={occupe}>
                  Récupérer du cloud
                </button>
              </div>
              <div className="dc-bas">
                <span className="dc-garde">🔐 Code secret : qui l’a peut voir et modifier ta progression.</span>
                <button className="dc-delier" onClick={delierAppareil}>Désactiver ici</button>
              </div>
            </>
          )}
        </section>
      )}

      <div className="donnees-duo">
        <section className="carte-mini fade-up" style={{ animationDelay: '0.32s' }}>
          <span className="cm-icone" aria-hidden="true">💾</span>
          <h3>Fichier de sauvegarde</h3>
          <p>Télécharge un fichier avec toute ta progression, ou restaure-le plus tard.</p>
          <div className="cm-actions">
            <button className="btn btn-primaire" onClick={exporter}>Télécharger</button>
            <button className="btn btn-doux" onClick={() => fichierRef.current?.click()}>Restaurer…</button>
            <input
              ref={fichierRef}
              type="file"
              accept="application/json,.json"
              onChange={choisirFichier}
              style={{ display: 'none' }}
            />
          </div>
        </section>

        <section className="carte-mini fade-up" style={{ animationDelay: '0.4s' }}>
          <span className="cm-icone" aria-hidden="true">📲</span>
          <h3>Code de transfert</h3>
          <p>Génère un code, colle-le sur un autre appareil. Sans fichier.</p>
          <div className="cm-actions">
            <button className="btn btn-doux" onClick={genererTransfert}>Générer un code</button>
          </div>
          {genere && <div className="code-bloc">{genere}</div>}
          <textarea
            className="donnees-champ"
            style={{ marginTop: '0.8rem' }}
            aria-label="Coller un code de transfert"
            placeholder="…ou colle un code reçu ici"
            value={code}
            onChange={(e) => setCode(e.target.value)}
          />
          <div className="cm-actions" style={{ marginTop: '0.7rem' }}>
            <button className="btn btn-rose" onClick={appliquerCode} disabled={!code.trim()}>
              Restaurer ce code
            </button>
          </div>
        </section>
      </div>

      {msg && <p className={`donnees-message ${msg.ok ? 'ok' : 'ko'}`}>{msg.texte}</p>}

      <p className="donnees-note">
        Astuce : télécharge une sauvegarde de temps en temps — surtout avant de vider
        le cache de ton navigateur.
      </p>
      <Link to="/" className="donnees-retour">← Retour à l’accueil</Link>
    </div>
  )
}
