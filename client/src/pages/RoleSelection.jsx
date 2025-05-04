import React from 'react';
import RoleCard from '../components/RoleCard';
import './RoleSelection.scss';

const roles = [
  {
    id: 'student',
    title: 'Student',
    description: 'Learn, build a portfolio, and gain mentorship from real engineers.',
  },
  {
    id: 'engineer',
    title: 'Engineer',
    description: 'Showcase your projects, validate your skills, and grow your career.',
  },
  {
    id: 'mentor',
    title: 'Mentor',
    description: 'Guide the next generation of engineers and share your expertise.',
  },
  {
    id: 'recruiter',
    title: 'Recruiter',
    description: 'Find verified engineering talent by tools, not titles.',
  },
];

export default function RoleSelection() {
  const handleSelect = (role) => {
    localStorage.setItem('selectedRole', role);
    window.location.href = '/signup';
  };

  return (
    <div className="role-selection">
      <h1>Select Your Role</h1>
      <div className="role-selection__grid">
        {roles.map((role) => (
          <RoleCard
            key={role.id}
            title={role.title}
            description={role.description}
            onClick={() => handleSelect(role.id)}
          />
        ))}
      </div>
    </div>
  );
}
