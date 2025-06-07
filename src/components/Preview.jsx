import React from 'react';
import '../styles/Preview.css'; // Assuming your CSS file is in a 'styles' directory relative to 'src'
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaGraduationCap, FaBriefcase, FaCalendarAlt } from 'react-icons/fa'; // Import desired icons

export default function Preview({ personalInfo, educations, experiences }) {
  return (
    <div className="cv-preview">
      {/* Personal Information Section */}
      <section className="personal-info">
        <h1 className="name">{personalInfo.name}</h1>
        <div className="contact-details">
          {personalInfo.email && (
            <p className="email">
              <FaEnvelope className="icon" /> {personalInfo.email}
            </p>
          )}
          {personalInfo.phone && (
            <p className="phone">
              <FaPhone className="icon" /> {personalInfo.phone}
            </p>
          )}
          {personalInfo.address && (
            <p className="address">
              <FaMapMarkerAlt className="icon" /> {personalInfo.address}
            </p>
          )}
        </div>
      </section>

      {/* Education Section */}
      {educations.length > 0 && (
        <section className="education-section">
          <h2 className="section-title">Education</h2>
          {educations.map(edu => (
            <div key={edu.id} className="education-item">
              <h3 className="school-degree">
                <FaGraduationCap className="icon" /> {edu.schoolDegree}
              </h3>
              <p className="edu-dates">
                <FaCalendarAlt className="icon" /> {edu.startDate} – {edu.endDate}
              </p>
              {edu.location && (
                <p className="edu-location">
                  <FaMapMarkerAlt className="icon" /> {edu.location}
                </p>
              )}
            </div>
          ))}
        </section>
      )}

      {/* Experience Section */}
      {experiences.length > 0 && (
        <section className="experience-section">
          <h2 className="section-title">Experience</h2>
          {experiences.map(exp => (
            <div key={exp.id} className="experience-item">
              <h3 className="position">
                <FaBriefcase className="icon" /> {exp.position} at {exp.company}
              </h3>
              <p className="exp-dates">
                <FaCalendarAlt className="icon" /> {exp.startDate} – {exp.endDate}
              </p>
              {exp.location && (
                <p className="exp-location">
                  <FaMapMarkerAlt className="icon" /> {exp.location}
                </p>
              )}
              {exp.description && <p className="exp-description">{exp.description}</p>}
            </div>
          ))}
        </section>
      )}
    </div>
  );
}