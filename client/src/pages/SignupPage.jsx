import React, { useState, useEffect } from 'react';
import './SignupPage.scss';

export default function SignupPage() {
  const [role, setRole] = useState('');
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
    consent: false,
    marketing: false,
  });

  useEffect(() => {
    const selected = localStorage.getItem('selectedRole');
    setRole(selected || 'user');
  }, []);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

 const handleSubmit = async (e) => {
  e.preventDefault();
  if (formData.password !== formData.confirmPassword) {
    alert('Passwords do not match');
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
        role,
        marketing: formData.marketing
      }),
    });

    const data = await response.json();

    if (!response.ok) {
      alert(data.message || 'Signup failed');
      return;
    }

    alert('Signup successful!');
    window.location.href = '/dashboard'; // or wherever your user should go next
  } catch (err) {
    console.error('Signup error:', err);
    alert('An error occurred. Please try again.');
  }
};


  return (
    <section className="signup">
      <h1>Sign Up as a {role.charAt(0).toUpperCase() + role.slice(1)}</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="username"
          placeholder="Username"
          value={formData.username}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
          required
        />
        <input
          type="password"
          name="confirmPassword"
          placeholder="Re-type Password"
          value={formData.confirmPassword}
          onChange={handleChange}
          required
        />

        <label className="checkbox">
          <input
            type="checkbox"
            name="consent"
            checked={formData.consent}
            onChange={handleChange}
            required
          />
          I agree to the use of my data as described in EnginLink’s policy.
        </label>

        <label className="checkbox">
          <input
            type="checkbox"
            name="marketing"
            checked={formData.marketing}
            onChange={handleChange}
          />
          I agree to receive occasional updates and news.
        </label>

        <button type="submit">Create Account</button>
      </form>
    </section>
  );
}
