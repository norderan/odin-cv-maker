import React from 'react';

export default function ExperienceForm({ data, onChange }) {
  return (
    <form>
      <div>
        <label>Company Name:</label>
        <input
          type="text"
          value={data.company}
          onChange={e => onChange({ ...data, company: e.target.value })}
          placeholder="e.g., Google"
        />
      </div>
      <div>
        <label>Position Title:</label>
        <input
          type="text"
          value={data.position}
          onChange={e => onChange({ ...data, position: e.target.value })}
          placeholder="e.g., Software Engineer"
        />
      </div>
      <div>
        <label>Start Date:</label>
        <input
          type="date"
          value={data.startDate}
          onChange={e => onChange({ ...data, startDate: e.target.value })}
        />
      </div>
      <div>
        <label>End Date:</label>
        <input
          type="date"
          value={data.endDate}
          onChange={e => onChange({ ...data, endDate: e.target.value })}
        />
      </div>
      <div>
        <label>Location (optional):</label>
        <input
          type="text"
          value={data.location}
          onChange={e => onChange({ ...data, location: e.target.value })}
          placeholder="e.g., New York, USA"
        />
      </div>
      <div>
        <label>Description (optional):</label>
        <textarea
          value={data.description}
          onChange={e => onChange({ ...data, description: e.target.value })}
          placeholder="Describe your responsibilities or achievements..."
        />
      </div>
    </form>
  );
}
