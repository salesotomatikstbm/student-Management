import React, { useState, useEffect } from "react";

function UpdateStudent({ student, updateStudent, closeModal }) {
  const [name, setName] = useState(student.name);
  const [email, setEmail] = useState(student.email);

  const handleUpdate = () => {
    const updatedStudent = { name, email };
    updateStudent(student.id, updatedStudent);
  };

  useEffect(() => {
    setName(student.name);
    setEmail(student.email);
  }, [student]);

  return (
    <div>
      <h3>Update Student</h3>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Student Name"
      />
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Student Email"
      />
      <button onClick={handleUpdate}>Update</button>
      <button onClick={closeModal}>Cancel</button>
    </div>
  );
}

export default UpdateStudent;
