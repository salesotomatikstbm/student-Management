import React, { useState } from "react";

function AddStudent({ addStudent }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = () => {
    const student = { name, email };
    addStudent(student);
  };

  return (
    <div>
      <h3>Add New Student</h3>
      <div id="add">
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Student Name"
      /><br></br>
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Student Email"
      /><br></br>
      <button onClick={handleSubmit}>Add Student</button>
      </div>
    </div>
  );
}

export default AddStudent;
