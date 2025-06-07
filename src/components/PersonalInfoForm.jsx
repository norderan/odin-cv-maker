import React from 'react';

export default function PersonalInfoForm({ data, onChange }) {
  return (
    <form>
      <div>
        <label>Name:</label>
        <input
          type="text"
          value={data.name}
          onChange={e => onChange({ ...data, name: e.target.value })}
          placeholder="Your full name"
        />
      </div>
      <div>
        <label>Email:</label>
        <input
          type="email"
          value={data.email}
          onChange={e => onChange({ ...data, email: e.target.value })}
          placeholder="you@example.com"
        />
      </div>
      <div>
        <label>Phone:</label>
        <input
          type="tel"
          value={data.phone}
          onChange={e => onChange({ ...data, phone: e.target.value })}
          placeholder="Your phone number"
        />
      </div>
      <div>
        <label>Address:</label>
        <input
          type="text"
          value={data.address}
          onChange={e => onChange({ ...data, address: e.target.value })}
          placeholder="Your address"
        />
      </div>
    </form>
  );
}
