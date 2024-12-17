import React, { useState, useEffect } from "react";
import axios from "axios";
import StudentTable from "./StudentTable";
import AddStudent from "./AddStudent";
import UpdateStudent from "./UpdateStudent";

const API_URL = "http://localhost:8080/api/students";

function App() {
  const [students, setStudents] = useState([]);
  const [selectedStudent, setSelectedStudent] = useState(null);
  const [isAdding, setIsAdding] = useState(false);

  // Fetch students from backend
  useEffect(() => {
    axios.get(API_URL).then((response) => {
      setStudents(response.data);
    });
  }, [students]);

  // Add student
  const addStudent = (student) => {
    axios.post(API_URL, student).then(() => {
      setIsAdding(false); // Close the form
    });
  };

  // Update student
  const updateStudent = (id, updatedStudent) => {
    axios.put(`${API_URL}/${id}`, updatedStudent).then(() => {
      setSelectedStudent(null); // Close the update form
    });
  };

  // Delete student
  const deleteStudent = (id) => {
    axios.delete(`${API_URL}/${id}`).then(() => {
      setStudents(students.filter((student) => student.id !== id));
    });
  };

  return (
    <div>
      <h1>Student Management System</h1>
      <button onClick={() => setIsAdding(true)}>Add Student</button>

      {isAdding && <AddStudent addStudent={addStudent} />}
      {selectedStudent && (
        <UpdateStudent
          student={selectedStudent}
          updateStudent={updateStudent}
          closeModal={() => setSelectedStudent(null)}
        />
      )}

      <StudentTable
        students={students}
        setSelectedStudent={setSelectedStudent}
        deleteStudent={deleteStudent}
      />
    </div>
  );
}

export default App;
