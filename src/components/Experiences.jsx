import React from 'react'; // No longer need useState here
import ExperienceForm from './ExperienceForm';

// Accept props from the parent (App component)
export default function Experiences({
  experiences,
  editingId,
  setEditingId,
  handleAdd,
  handleChange,
  handleDelete,
}) {
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