import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Landing from '../pages/Landing/Landing';
import RoleSelection from '../pages/RoleSelection/RoleSelection';
import Signup from '../pages/Signup/Signup';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/join" element={<RoleSelection />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </Router>
  );
}
