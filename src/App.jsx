import React, { useState } from 'react';
import PersonalInfoForm from './components/PersonalInfoForm';
import Educations from './components/Educations';
import Experiences from './components/Experiences'; 

export default function App() {
  const [personalInfo, setPersonalInfo] = useState({ name: '', email: '', phone: '', address: '' });


  // Education management
  const [educations, setEducations] = useState([]);
  const [editingEducationId, setEditingEducationId] = useState(null);  

  const handleAddEducation = () => { 
    const newEdu = {
      id: crypto.randomUUID(),
      schoolDegree: '',
      startDate: '',
      endDate: '',
      location: ''
    };
    setEducations([...educations, newEdu]);
    setEditingEducationId(newEdu.id);
  };

  const handleChangeEducation = (id, updatedEdu) => { 
    setEducations(educations.map(edu => (edu.id === id ? updatedEdu : edu)));
  };

  const handleDeleteEducation = id => { 
    setEducations(educations.filter(edu => edu.id !== id));
    if (editingEducationId === id) setEditingEducationId(null);
  };


  // Experience management
  const [experiences, setExperiences] = useState([]);
  const [editingExperienceId, setEditingExperienceId] = useState(null); 

  const handleAddExperience = () => {
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
    setEditingExperienceId(newExp.id);
  };

  const handleChangeExperience = (id, updatedExp) => {
    setExperiences(experiences.map(exp => (exp.id === id ? { ...updatedExp, id } : exp)));
  };

  const handleDeleteExperience = id => {
    setExperiences(experiences.filter(exp => exp.id !== id));
    if (editingExperienceId === id) setEditingExperienceId(null);
  };

  return (
    <>
      <div>
        <h1>CV Maker</h1>
        <PersonalInfoForm data={personalInfo} onChange={setPersonalInfo} />

        <Educations
          educations={educations}
          editingId={editingEducationId}
          setEditingId={setEditingEducationId}
          handleAdd={handleAddEducation}
          handleChange={handleChangeEducation}
          handleDelete={handleDeleteEducation}
        />

        <Experiences
          experiences={experiences}
          editingId={editingExperienceId}
          setEditingId={setEditingExperienceId}
          handleAdd={handleAddExperience}
          handleChange={handleChangeExperience}
          handleDelete={handleDeleteExperience}
        />
      </div>

      <div>
        <h2>Preview</h2>
        <div>
          <h3>{personalInfo.name}</h3>
          <p>Email: {personalInfo.email}</p>
          <p>Phone: {personalInfo.phone}</p>
          <p>Address: {personalInfo.address}</p>
        </div>
        <div>
          <h3>Education</h3>
          {educations.map((edu) => (
            <div key={edu.id}>
              <p>School: {edu.schoolDegree}</p> 
              <p>Start Date: {edu.startDate}</p>
              <p>End Date: {edu.endDate}</p>
              <p>Location: {edu.location}</p>
            </div>
          ))}
        </div>
        <div>
          <h3>Experience</h3>
          {experiences.map((exp) => (
            <div key={exp.id}>
              <p><strong>{exp.position}</strong> at {exp.company}</p>
              <p>{exp.startDate} – {exp.endDate} {exp.location && `, ${exp.location}`}</p>
              <p>{exp.description}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}