import { Routes, Route, Navigate } from 'react-router-dom'
import Layout from './components/Layout.jsx'
import Accueil from './pages/Accueil.jsx'
import Vocabulaire from './pages/Vocabulaire.jsx'
import Revision from './pages/Revision.jsx'
import Parcours from './pages/Parcours.jsx'
import Jour from './pages/Jour.jsx'
import Atelier from './pages/Atelier.jsx'
import Immobilier from './pages/Immobilier.jsx'
import RevisionEclair from './pages/RevisionEclair.jsx'
import Donnees from './pages/Donnees.jsx'
import Admin from './pages/Admin.jsx'
import SessionPlaceholder from './components/SessionPlaceholder.jsx'
import { SESSIONS } from './data/sessions.js'

export default function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Accueil />} />

        {/* Le parcours jour par jour */}
        <Route path="/parcours" element={<Parcours />} />
        <Route path="/jour/:n" element={<Jour />} />

        {/* Entraînement libre */}
        <Route path="/session/vocabulaire" element={<Vocabulaire />} />
        <Route path="/session/revision" element={<Revision />} />
        <Route path="/session/exercices" element={<Atelier />} />
        <Route path="/immobilier" element={<Immobilier />} />
        <Route path="/revision-eclair" element={<RevisionEclair />} />

        {/* Sauvegarde / restauration de la progression */}
        <Route path="/donnees" element={<Donnees />} />

        {/* Mode admin / test */}
        <Route path="/admin" element={<Admin />} />

        {/* Sessions pas encore implémentées en libre → placeholder élégant */}
        {SESSIONS.filter((s) => !s.pret).map((s) => (
          <Route
            key={s.slug}
            path={`/session/${s.slug}`}
            element={<SessionPlaceholder session={s} />}
          />
        ))}

        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Layout>
  )
}
