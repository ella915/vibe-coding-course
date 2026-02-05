import { Routes, Route } from 'react-router-dom';
import { Layout } from './components/layout/Layout';
import { HomePage } from './pages/HomePage';
import { ModulePage } from './pages/ModulePage';
import { QuizPage } from './pages/QuizPage';
import { GlossaryPage } from './pages/GlossaryPage';
import { CompletionPage } from './pages/CompletionPage';

function App() {
  return (
    <Layout>
      <Routes>
        {/* Home */}
        <Route path="/" element={<HomePage />} />

        {/* Module overview */}
        <Route path="/module/:moduleId" element={<ModulePage />} />

        {/* Module section */}
        <Route path="/module/:moduleId/section/:sectionId" element={<ModulePage />} />

        {/* Module quiz */}
        <Route path="/module/:moduleId/quiz" element={<QuizPage />} />

        {/* Glossary */}
        <Route path="/glossary" element={<GlossaryPage />} />

        {/* Course completion */}
        <Route path="/completion" element={<CompletionPage />} />

        {/* Fallback - redirect to home */}
        <Route path="*" element={<HomePage />} />
      </Routes>
    </Layout>
  );
}

export default App;
