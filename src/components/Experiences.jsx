import React, { useState } from 'react';
import ExperienceForm from './ExperienceForm';

export default function Experiences() {
  const [experiences, setExperiences] = useState([]);
  const [editingId, setEditingId] = useState(null);

  const handleAdd = () => {
    const newExp = {
      id: crypto.randomUUID(),
      company: '',
      position: '',
      startDate: '',
      endDate: '',
      location: '',
      description: ''
    };
    setExperiences([...experiences, newExp]);
    setEditingId(newExp.id);
  };

  const handleChange = (id, updatedExp) => {
    setExperiences(experiences.map(exp => (exp.id === id ? { ...updatedExp, id } : exp)));
  };

  const handleDelete = id => {
    setExperiences(experiences.filter(exp => exp.id !== id));
    if (editingId === id) setEditingId(null);
  };

  return (
    <div>
      <h2>Experience</h2>
      {experiences.map(exp =>
        editingId === exp.id ? (
          <div key={exp.id}>
            <ExperienceForm
              data={exp}
              onChange={updated => handleChange(exp.id, updated)}
            />
            <button onClick={() => setEditingId(null)}>Save</button>
          </div>
        ) : (
          <div key={exp.id}>
            <p>
              <strong>{exp.position}</strong> at {exp.company}<br />
              {exp.startDate} – {exp.endDate} {exp.location && `, ${exp.location}`}<br />
              {exp.description}
            </p>
            <button onClick={() => setEditingId(exp.id)}>Edit</button>
            <button onClick={() => handleDelete(exp.id)}>Delete</button>
          </div>
        )
      )}
      <button onClick={handleAdd}>Add Experience</button>
    </div>
  );
}
