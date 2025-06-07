// src/data/initialCvData.js

// Using 'export const' allows you to import these individually by name
export const initialPersonalInfo = {
  name: 'Jane Doe',
  email: 'jane.doe@example.com',
  phone: '+1 (555) 123-4567',
  address: '123 Main St, Anytown, USA 12345',
};

export const initialEducations = [
  {
    id: 'edu-1',
    schoolDegree: 'Master of Science in Computer Science, University of Tech',
    startDate: 'Sept 2023',
    endDate: 'May 2025',
    location: 'Tech City, USA',
  },
  {
    id: 'edu-2',
    schoolDegree: 'Bachelor of Arts in Design, State University',
    startDate: 'Sept 2019',
    endDate: 'May 2023',
    location: 'State Capital, USA',
  },
];

export const initialExperiences = [
  {
    id: 'exp-1',
    company: 'Innovate Corp',
    position: 'Senior Software Engineer',
    startDate: 'June 2023',
    endDate: 'Present',
    location: 'Remote',
    description:
      'Led development of scalable web applications; Mentored junior engineers; Implemented CI/CD pipelines.',
  },
  {
    id: 'exp-2',
    company: 'Startup X',
    position: 'Junior Developer',
    startDate: 'Jan 2022',
    endDate: 'May 2023',
    location: 'Innovation Hub, USA',
    description:
      'Developed and maintained front-end features using React; Collaborated with design team.',
  },
];
