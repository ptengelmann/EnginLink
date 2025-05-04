// App.jsx
import React from 'react';
import AppRoutes from './routes/routes';
import Navbar from './components/Navbar';
import RoleSelection from './pages/RoleSelection';

export default function App() {
  return (
    <>
      <Navbar />
            <AppRoutes />
    </>
  );
}
