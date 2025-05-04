import React from 'react';
import './RoleCard.scss';

export default function RoleCard({ title, description, onClick }) {
  return (
    <div className="role-card" onClick={onClick}>
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
  );
}
