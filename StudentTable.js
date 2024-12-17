import React from "react";
import "./StudentManagement.css"

function StudentTable({ students, setSelectedStudent, deleteStudent }) {
  return (
    <table class="center">
      <thead>
        <tr>
          <th>Student Name</th>
          <th>Email</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {students.map((student) => (
          <tr key={student.id}>
            <td>{student.name}</td>
            <td>{student.email}</td>
            <td>
              <button onClick={() => setSelectedStudent(student)}>Update</button>
              <button onClick={() => deleteStudent(student.id)}>Delete</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default StudentTable;
