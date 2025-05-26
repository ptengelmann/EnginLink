import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from '../components/Layout/Layout';
import Landing from '../pages/Landing/Landing';
import RoleSelection from '../pages/RoleSelection/RoleSelection';
import Signup from '../pages/Signup/Signup';
import DashboardEngineer from '../features/DashboardEngineer/DashboardEngineer';
import DashboardRecruiter from '../features/DashboardRecruiter/DashboardRecruiter'; 
import Login from '../pages/Login/Login';

// Import global styles
import '../styles/globals.scss';

export default function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/join" element={<RoleSelection />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/dashboard/engineer" element={<DashboardEngineer />} />
          <Route path="/dashboard/recruiter" element={<DashboardRecruiter />} />
          <Route path="/login" element={<Login />} />
          {/* Add more routes as needed */}
        </Routes>
      </Layout>
    </Router>
  );
}