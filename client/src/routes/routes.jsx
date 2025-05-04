import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import LandingPage from '../pages/LandingPage';
import RoleSelection from '../pages/RoleSelection';
import SignupPage from '../pages/SignupPage';


export default function AppRoutes() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/select-role" element={<RoleSelection />} />
        <Route path="/signup" element={<SignupPage />} />
      </Routes>
    </Router>
  );
}
