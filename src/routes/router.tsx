import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate
} from 'react-router-dom';

import { AuthRouter } from './AuthRouter';

import Main from '@/layouts/Main/Main';
import HomePage from '@/pages/HomePage/HomePage';
import AuthPage from '@/pages/AuthPage/AuthPage';
import BoardPage from '@/pages/BoardPage/BoardPage';
import BoardDetailPage from '@/pages/BoardDetailPage/BoardDetailPage';
import CareerPage from '@/pages/CareerPage/CareerPage';

export default function AppRouter() {
  return (
    <Router>
      <Routes>
        <Route element={<Main />}>
          <Route
            path="/"
            element={
              <Navigate to="/roadmap" />
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
              <HomePage />
            }
          />
          <Route
            path="/career"
            element={
              <CareerPage />
            }
          />
          <Route
            path="/boards"
            element={
              <BoardPage />
            }
          />
          <Route
            path="/board/:boardId"
            element={
              <BoardDetailPage />
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
