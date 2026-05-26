import { Link } from 'react-router-dom'

export default function SessionPlaceholder({ session }) {
  return (
    <div className="page" style={{ maxWidth: 620, textAlign: 'center', padding: '4rem 1.5rem' }}>
      <div style={{ fontSize: '3.5rem', marginBottom: '1rem' }} aria-hidden="true">
        {session.icone}
      </div>
      <h1 style={{ fontSize: 'clamp(2rem, 5vw, 2.8rem)', marginBottom: '0.8rem' }}>
        {session.titre}
      </h1>
      <p style={{ color: 'var(--texte-doux)', fontSize: '1.05rem', marginBottom: '1.6rem' }}>
        {session.description}
      </p>
      <div
        className="bloc"
        style={{ padding: '1.6rem', marginBottom: '2rem', textAlign: 'left' }}
      >
        <p style={{ fontFamily: "'Fraunces', serif", fontStyle: 'italic', fontSize: '1.05rem' }}>
          « Cette session arrive bientôt 🌷 En attendant, commence par le{' '}
          <strong>Vocabulaire</strong> : c’est la base de tout. » — Emma
        </p>
      </div>
      <div style={{ display: 'flex', gap: '0.8rem', justifyContent: 'center', flexWrap: 'wrap' }}>
        <Link to="/session/vocabulaire" className="btn btn-primaire">
          Faire du vocabulaire 📚
        </Link>
        <Link to="/" className="btn btn-doux">
          ← Retour à l’accueil
        </Link>
      </div>
    </div>
  )
}
