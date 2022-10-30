import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { AuthRouter } from './AuthRouter';

import Main from '@/layouts/Main/Main';
import HomePage from '@/pages/HomePage/HomePage';
import AuthPage from '@/pages/AuthPage/AuthPage';
import BoardPage from '@/pages/BoardPage/BoardPage';

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
            path="/login"
            element={
              <AuthPage />
            }
          />
          <Route
            path="/register"
            element={
              <div>register</div>
            }
          />
          <Route
            path="/roadmap"
            element={
              <div>RoadMap</div>
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
              <BoardPage />
            }
          />
          <Route
            path="/bookmark"
            element={
              <AuthRouter>
                <div>bookmark</div>
              </AuthRouter>
            }
          />
          <Route
            path="/profile"
            element={
              <AuthRouter>
                <div>profile</div>
              </AuthRouter>
            }
          />
        </Route>
        <Route path="*" element={<div>NotFound</div>} />
      </Routes>
    </Router>
  );
};
