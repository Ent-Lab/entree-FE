import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Main from '@/layouts/Main/Main';

export default function AppRouter() {
  return (
    <Router>
      <Routes>
        <Route element={<Main />}>
          <Route
            path="/"
            element={
              <div>HOME</div>
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
