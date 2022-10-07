import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Main from '@/layouts/Main/Main';
import HomePage from '@/pages/HomePage';

export default function AppRouter() {
  return (
    <Router>
      <Routes>
        <Route element={<Main />}>
          <Route
            path="/"
            element={
              <HomePage />
            }
          />
          <Route
            path="/loadmap"
            element={
              <div>loadMap</div>
            }
          />
          <Route
            path="/career"
            element={
              <div>career</div>
            }
          />
          <Route
            path="/board"
            element={
              <div>board</div>
            }
          />
          <Route
            path="/bookmark"
            element={
              <div>bookmark</div>
            }
          />
          <Route
            path="/profile"
            element={
              <div>profile</div>
            }
          />
        </Route>
        <Route path="*" element={<div>NotFound</div>} />
      </Routes>
    </Router>
  );
};
