/**
 * Structure of `personalInfo` state:
 * @typedef {Object} PersonalInfo
 * @property {string} name - The name of the individual.
 * @property {string} email - The email address of the individual.
 * @property {string} phone - The phone number of the individual.
 * @property {string} address - The address of the individual.
 */

/**
 * Structure of an education entry in `educations` state:
 * @typedef {Object} Education
 * @property {string} id - Unique identifier for the education entry.
 * @property {string} schoolDegree - The name of the school or degree obtained.
 * @property {string} startDate - The start date of the education.
 * @property {string} endDate - The end date of the education.
 * @property {string} location - The location of the school or institution.
 */

/**
 * Structure of an experience entry in `experiences` state:
 * @typedef {Object} Experience
 * @property {string} id - Unique identifier for the experience entry.
 * @property {string} company - The name of the company.
 * @property {string} position - The position held at the company.
 * @property {string} startDate - The start date of the experience.
 * @property {string} endDate - The end date of the experience.
 * @property {string} location - The location of the company or job.
 * @property {string} description - A description of the responsibilities or achievements in the role.
 */
import React, { useState } from 'react';
import PersonalInfoForm from './components/PersonalInfoForm';
import Educations from './components/Educations';
import Experiences from './components/Experiences'; 
import Preview from './components/Preview';
import './App.css';
import {
  initialPersonalInfo,
  initialEducations,
  initialExperiences,
} from './data/initialCvData';

export default function App() {
  const [personalInfo, setPersonalInfo] = useState(initialPersonalInfo);
  const [educations, setEducations] = useState(initialEducations);
  const [editingEducationId, setEditingEducationId] = useState(null);

  const handleAddEducation = () => {
    const newEdu = {
      id: crypto.randomUUID(),
      schoolDegree: '',
      startDate: '',
      endDate: '',
      location: '',
    };
    setEducations([...educations, newEdu]);
    setEditingEducationId(newEdu.id);
  };

  const handleChangeEducation = (id, updatedEdu) => {
    setEducations(educations.map(edu => (edu.id === id ? updatedEdu : edu)));
  };

  const handleDeleteEducation = (id) => {
    setEducations(educations.filter(edu => edu.id !== id));
    if (editingEducationId === id) setEditingEducationId(null);
  };


  // Experience management
  const [experiences, setExperiences] = useState(initialExperiences);
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
    <div className="app-container"> {/* Optional: Add a container for overall layout */}
        <div className="editor-section"> {/* Optional: A section for the input forms */}
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

        {/* Render the Preview component here */}
        <div className="preview-section"> {/* Optional: A section for the preview */}
          <Preview
            personalInfo={personalInfo}
            educations={educations}
            experiences={experiences}
          />
        </div>
      </div>
  );
}

