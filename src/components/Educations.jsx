import React from 'react';
import EducationForm from './EducationForm';

export default function Educations({
  educations,
  editingId,
  setEditingId,
  handleAdd,
  handleChange,
  handleDelete,
}) {
  return (
    <div>
      <h2>Education</h2>
      {educations.map(edu =>
        editingId === edu.id ? (
          <div key={edu.id}>
            <EducationForm
              data={edu}
              onChange={updated => handleChange(edu.id, { ...updated, id: edu.id })}
            />
            <button onClick={() => setEditingId(null)}>Save</button>
          </div>
        ) : (
          <div key={edu.id}>
            <p>
              <strong>{edu.degree}</strong> at {edu.school}<br />
              {edu.startDate} – {edu.endDate}, {edu.location}
            </p>
            <button onClick={() => setEditingId(edu.id)}>Edit</button>
            <button onClick={() => handleDelete(edu.id)}>Delete</button>
          </div>
        )
      )}
      <button onClick={handleAdd}>Add Education</button>
    </div>
  );
}
