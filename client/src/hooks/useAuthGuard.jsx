import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export default function useAuthGuard() {
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('token');
    const user = localStorage.getItem('user');

    if (!token || !user) {
      console.warn('[AUTH][GUARD] Unauthorized access attempt — redirecting to /login');
      navigate('/login');
    }
  }, [navigate]);
}
