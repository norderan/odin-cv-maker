import React, { useState } from 'react';
import EducationForm from './EducationForm';


export default function Educations() {
  const [educations, setEducations] = useState([]);
  const [editingId, setEditingId] = useState(null);

  const handleAdd = () => {
    const newEdu = {
      id: crypto.randomUUID(),
      school: '',
      degree: '',
      startDate: '',
      endDate: '',
      location: ''
    };
    setEducations([...educations, newEdu]);
    setEditingId(newEdu.id);
  };

  const handleChange = (id, updatedEdu) => {
    setEducations(educations.map(edu => (edu.id === id ? updatedEdu : edu)));
  };

  const handleDelete = id => {
    setEducations(educations.filter(edu => edu.id !== id));
    if (editingId === id) setEditingId(null);
  };

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
