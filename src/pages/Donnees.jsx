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
        <h1 className="fade-up" style={{ animationDelay: '0.08s' }}>Mes données</h1>
        <p className="fade-up" style={{ animationDelay: '0.16s' }}>
          Ta progression est enregistrée sur cet appareil. Sauvegarde-la pour ne jamais
          la perdre, ou transfère-la sur ton téléphone / ordinateur. 🌸
        </p>
      </header>

      {cloudDispo() && (
        <section className="donnees-bloc donnees-cloud">
          <h2>☁️ Synchronisation cloud</h2>
          {!syncCode ? (
            <>
              <p>
                Active la synchro pour retrouver ta progression sur tous tes appareils,
                automatiquement. Tu obtiens un <strong>code secret</strong> à saisir une
                fois sur chaque appareil.
              </p>
              <div className="donnees-actions">
                <button className="btn btn-primaire" onClick={activerSync} disabled={occupe}>
                  Activer la synchro
                </button>
              </div>
              <p style={{ margin: '1.1rem 0 0.5rem' }}>Tu as déjà un code sur un autre appareil ?</p>
              <input
                className="donnees-zone"
                style={{ minHeight: 'auto', fontSize: '0.95rem' }}
                placeholder="Saisis ton code de synchro…"
                value={lienInput}
                onChange={(e) => setLienInput(e.target.value)}
              />
              <div className="donnees-actions" style={{ marginTop: '0.8rem' }}>
                <button className="btn btn-rose" onClick={lierAppareil} disabled={!lienInput.trim() || occupe}>
                  Lier cet appareil
                </button>
              </div>
            </>
          ) : (
            <>
              <p>
                Synchro <strong>active</strong> sur cet appareil. Ta progression part dans le cloud
                après chaque activité. Saisis ce code sur tes autres appareils pour les relier :
              </p>
              <textarea
                className="donnees-zone"
                style={{ minHeight: 'auto', fontWeight: 700, letterSpacing: '0.05em' }}
                readOnly
                rows={1}
                value={syncCode}
                onFocus={(e) => e.target.select()}
              />
              <div className="donnees-actions" style={{ marginTop: '0.8rem' }}>
                <button className="btn btn-doux" onClick={copierSync}>📋 Copier le code</button>
                <button className="btn btn-primaire" onClick={envoyerSync} disabled={occupe}>
                  Envoyer maintenant
                </button>
                <button className="btn btn-rose" onClick={() => recupererSync()} disabled={occupe}>
                  Récupérer du cloud
                </button>
              </div>
              <button className="donnees-delier" onClick={delierAppareil}>Désactiver la synchro ici</button>
              <p className="donnees-garde">
                🔐 Garde ce code secret : toute personne qui l’a peut voir et modifier ta progression.
              </p>
            </>
          )}
        </section>
      )}

      <section className="donnees-bloc">
        <h2>💾 Sauvegarder (fichier)</h2>
        <p>Télécharge un fichier avec tous tes mots appris, scores et jours terminés.</p>
        <div className="donnees-actions">
          <button className="btn btn-primaire" onClick={exporter}>Télécharger ma sauvegarde</button>
        </div>
      </section>

      <section className="donnees-bloc">
        <h2>♻️ Restaurer un fichier</h2>
        <p>Tu as un fichier de sauvegarde ? Recharge-le ici (remplace la progression actuelle).</p>
        <div className="donnees-actions">
          <button className="btn btn-doux" onClick={() => fichierRef.current?.click()}>
            Choisir un fichier…
          </button>
          <input
            ref={fichierRef}
            type="file"
            accept="application/json,.json"
            onChange={choisirFichier}
            style={{ display: 'none' }}
          />
        </div>
      </section>

      <section className="donnees-bloc">
        <h2>📲 Transférer entre appareils</h2>
        <p>
          Génère un code sur cet appareil, puis colle-le sur l’autre. Pratique pour passer
          du téléphone à l’ordinateur sans fichier.
        </p>
        <div className="donnees-actions" style={{ marginBottom: '0.9rem' }}>
          <button className="btn btn-doux" onClick={genererTransfert}>Générer un code de transfert</button>
        </div>
        {genere && (
          <textarea className="donnees-zone" readOnly value={genere} onFocus={(e) => e.target.select()} />
        )}
        <p style={{ margin: '1rem 0 0.6rem' }}>Sur l’autre appareil, colle le code ici :</p>
        <textarea
          className="donnees-zone"
          placeholder="Colle ton code de transfert…"
          value={code}
          onChange={(e) => setCode(e.target.value)}
        />
        <div className="donnees-actions" style={{ marginTop: '0.8rem' }}>
          <button className="btn btn-rose" onClick={appliquerCode} disabled={!code.trim()}>
            Restaurer depuis ce code
          </button>
        </div>
      </section>

      {msg && <p className={`donnees-message ${msg.ok ? 'ok' : 'ko'}`}>{msg.texte}</p>}

      <p className="donnees-note">
        Astuce : pense à télécharger une sauvegarde de temps en temps — surtout avant de
        vider le cache de ton navigateur.
      </p>
      <Link to="/" className="donnees-retour">← Retour à l’accueil</Link>
    </div>
  )
}
