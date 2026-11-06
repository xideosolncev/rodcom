import { Routes, Route, Navigate } from 'react-router-dom';
import Layout from './components/Layout.jsx';
import NewsPage from './pages/NewsPage.jsx';
import MembersPage from './pages/MembersPage.jsx';
import FundPage from './pages/FundPage.jsx';

/** Route table: every section lives inside the shared Layout (navbar + hero + footer). */
export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Navigate to="/news" replace />} />
        <Route path="news" element={<NewsPage />} />
        <Route path="members" element={<MembersPage />} />
        <Route path="fund" element={<FundPage />} />
        <Route path="*" element={<Navigate to="/news" replace />} />
      </Route>
    </Routes>
  );
}
