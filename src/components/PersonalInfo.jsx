import React from "react";

function PersonalInfo({ data, setData }) {
  return (
    <div style={{ marginBottom: "20px" }}>
      <h2>Personal Info</h2>

      <input
        type="text"
        placeholder="Full Name"
        value={data.name}
        onChange={(e) => setData({ ...data, name: e.target.value })}
      />
      <br />

      <input
        type="email"
        placeholder="Email"
        value={data.email}
        onChange={(e) => setData({ ...data, email: e.target.value })}
      />
      <br />

      <input
        type="tel"
        placeholder="Phone"
        value={data.phone}
        onChange={(e) => setData({ ...data, phone: e.target.value })}
      />
      <br />
    </div>
  );
}

export default PersonalInfo;