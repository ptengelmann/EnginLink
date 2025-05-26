import React from 'react';
import styles from './PlatformOverview.module.scss';

const features = [
  {
    title: 'Engineer-Centric Profiles',
    description:
      'Your profile showcases what matters: tools you’ve used, projects you’ve built, and certifications you’ve earned — not vague experience bullets.'
  },
  {
    title: 'Project-Based Proof',
    description:
      'Upload CADs, PDFs, code links, simulations — your work becomes the portfolio. Every project is tagged with tools and skills.'
  },
  {
    title: 'Tool-Driven Hiring',
    description:
      'Recruiters filter by specific technical tools, fields, or certifications. No keyword gaming — just skill-based discovery.'
  },
  {
    title: 'EnginLink Academy (Coming Soon)',
    description:
      'Earn certifications from project-based learning and simulations. Progress is verified, not watched.'
  }
];

export default function PlatformOverview() {
  return (
    <section className={styles.section}>
      <div className={styles.intro}>
        <h2>Built for Engineers. Built on Proof.</h2>
        <p>
          EnginLink is not a social network. It’s a precision-built ecosystem where engineering
          students, professionals, mentors, and recruiters interact through skills, projects,
          and real output.
        </p>
      </div>

      <div className={styles.grid}>
        {features.map((item, index) => (
          <div key={index} className={styles.card}>
            <h3>{item.title}</h3>
            <p>{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
