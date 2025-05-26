import React, { useState, useEffect } from 'react';
import styles from './SignupForm.module.scss';

export default function SignupForm() {
  const [role, setRole] = useState('');
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  useEffect(() => {
    const stored = localStorage.getItem('selectedRole');
    setRole(stored || 'engineer');
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

const handleSubmit = async (e) => {
  e.preventDefault();

  if (formData.password !== formData.confirmPassword) {
    alert('Passwords do not match.');
    return;
  }

  try {
    const response = await fetch('http://localhost:5000/api/auth/signup', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        username: formData.username,
        email: formData.email,
        password: formData.password,
        role
      })
    });

    const data = await response.json();

    if (!response.ok) {
      alert(data.message || 'Signup failed');
      return;
    }

    localStorage.setItem('token', data.token);
    localStorage.setItem('user', JSON.stringify(data.user));

    alert('Signup successful');
    window.location.href = `/dashboard/${role}`;
  } catch (err) {
    console.error(err);
    alert('Signup error');
  }
};


  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <h1>Create Your {role.charAt(0).toUpperCase() + role.slice(1)} Account</h1>

      <input
        type="text"
        name="username"
        placeholder="Username"
        required
        value={formData.username}
        onChange={handleChange}
      />

      <input
        type="email"
        name="email"
        placeholder="Email"
        required
        value={formData.email}
        onChange={handleChange}
      />

      <input
        type="password"
        name="password"
        placeholder="Password"
        required
        value={formData.password}
        onChange={handleChange}
      />

      <input
        type="password"
        name="confirmPassword"
        placeholder="Confirm Password"
        required
        value={formData.confirmPassword}
        onChange={handleChange}
      />

      <button type="submit">Create Account</button>
    </form>
  );
}
