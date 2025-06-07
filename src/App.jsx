import React, { useState } from 'react';
import PersonalInfoForm from './components/PersonalInfoForm';
import EducationForm from './components/EducationForm';
import ExperienceForm from './components/ExperienceForm';
import Educations from './components/Educations';
import Experiences from './components/Experiences';
export default function App() {
  const [personalInfo, setPersonalInfo] = useState({ name: '', email: '', phone: '' , address: ''});

  const [education, setEducation] = useState({
    schoolDegree: '',
    startDate: '',
    endDate: '',
    location: ''
  });

  const [experience, setExperience] = useState({
    company: '',
    position: '',
    startDate: '',
    endDate: '',
    location: '',
    description: ''
  });
  
  return (
    <div>
      <h1>CV Maker</h1>
      <PersonalInfoForm data={personalInfo} onChange={setPersonalInfo} />
      <Educations />
      <Experiences />
    </div>
  );
}
