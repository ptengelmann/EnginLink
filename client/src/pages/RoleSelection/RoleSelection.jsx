import React from 'react';
import styles from './RoleSelection.module.scss';

const roles = [
  {
    id: 'engineer',
    title: 'Engineer',
    headline: 'Show what you’ve built.',
    description:
      'Upload real projects, prove your skillset through tools you’ve used, and get hired based on work — not buzzwords.',
  },
  {
    id: 'recruiter',
    title: 'Recruiter',
    headline: 'Find engineers by what they’ve done.',
    description:
      'Source pre-validated engineering talent filtered by tools, certifications, and real project portfolios.',
  }
];

export default function RoleSelection() {
  const handleSelect = (roleId) => {
    localStorage.setItem('selectedRole', roleId);
    window.location.href = '/signup';
  };

  return (
    <section className={styles.rolePage}>
      <div className={styles.intro}>
        <h1>Choose How You’ll Use EnginLink</h1>
        <p>
          Whether you’re building your career or sourcing technical talent, we’ll tailor your
          experience around your role.
        </p>
      </div>

      <div className={styles.grid}>
        {roles.map((role) => (
          <div key={role.id} className={styles.card} onClick={() => handleSelect(role.id)}>
            <div className={styles.cardContent}>
              <h2>{role.title}</h2>
              <h3>{role.headline}</h3>
              <p>{role.description}</p>
            </div>
            <button className={styles.selectBtn}>Continue as {role.title}</button>
          </div>
        ))}
      </div>
    </section>
  );
}
