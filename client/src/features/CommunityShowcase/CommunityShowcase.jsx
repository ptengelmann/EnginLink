import React from 'react';
import styles from './CommunityShowcase.module.scss';

const users = [
  {
    name: 'Olivia Zhang',
    role: 'Mechanical Engineer',
    project: 'Modular prosthetic joint system using FEA + SolidWorks',
    field: 'Biomechanics'
  },
  {
    name: 'Carlos Mendes',
    role: 'Civil Engineer',
    project: 'Dynamic load bridge simulation — real-time deformation visualization',
    field: 'Structural Simulation'
  },
  {
    name: 'Sara Lee',
    role: 'Aerospace Student',
    project: 'Low-drag winglet optimization using OpenFOAM + MATLAB',
    field: 'Fluid Dynamics'
  },
  {
    name: 'Dev Patel',
    role: 'Recruiter',
    project: 'Sourcing simulation-focused talent for EV R&D team',
    field: 'Mobility & Energy'
  }
];

export default function CommunityShowcase() {
  return (
    <section className={styles.community}>
      <div className={styles.intro}>
        <h2>Explore the Engineering Community</h2>
        <p>
          EnginLink isn’t just a tool — it’s a network of engineers, students, and technical teams
          proving what they can do. Here’s a glimpse.
        </p>
      </div>

      <div className={styles.cards}>
        {users.map((user, i) => (
          <div key={i} className={styles.card}>
            <h3>{user.name}</h3>
            <p className={styles.role}>{user.role}</p>
            <p className={styles.project}>{user.project}</p>
            <p className={styles.field}>{user.field}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
