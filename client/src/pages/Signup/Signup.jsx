import React, { useEffect, useState } from 'react';
import styles from './Signup.module.scss';
import SignupForm from '../../features/SignupForm/SignupForm';

export default function Signup() {
  const [role, setRole] = useState('');

  useEffect(() => {
    const savedRole = localStorage.getItem('selectedRole');
    setRole(savedRole || 'user');
  }, []);

  return (
    <section className={styles.signup}>
      <h1>Sign up as a {role.charAt(0).toUpperCase() + role.slice(1)}</h1>
      <SignupForm />
    </section>
  );
}
