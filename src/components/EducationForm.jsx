import React from 'react';

export default function EducationForm({ data, onChange }) {
  return (
    <form>
      <div>
        <label>School / Degree:</label>
        <input
          type="text"
          value={data.schoolDegree}
          onChange={e => onChange({ ...data, schoolDegree: e.target.value })}
          placeholder="e.g., B.Sc. Computer Science"
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
        <label>Location:</label>
        <input
          type="text"
          value={data.location}
          onChange={e => onChange({ ...data, location: e.target.value })}
          placeholder="e.g., Berlin, Germany"
        />
      </div>
    </form>
  );
}
