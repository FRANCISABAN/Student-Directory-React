import { useState } from 'react';
import Header from './COMPONENTS/Header';
import StudentForm from './COMPONENTS/StudentForm';
import StudentList from './COMPONENTS/StudentList';
import './App.css';

function App() {
  const [students, setStudents] = useState([
    {id: 1, name: 'FRANCIS ABAN', program:'Bachelor of Science in Information Technology'},
    {id: 2, name: 'JOHN RISEL ERMITA', program:'Bachelor of Science in Information Technology'},
    {id: 3, name: 'RAFHAEL VILLALOBOS', program:'Bachelor of Science in Information Technology'},
    {id: 4, name: 'REIVEN GABRIEL', program:'Bachelor of Science in Information Technology'},
    {id: 5, name: 'JULIUS QUIJANO', program:'Bachelor of Science in Information Technology'},
  ]);

  const addStudent = (name, program) => {
    const newStudent = {
      id: students.length ? Math.max(...students.map(s => s.id)) + 1 : 1,
      name,
      program
    };

    setStudents([...students, newStudent]);
  };

  const deleteStudent = (id) => {
    setStudents(students.filter((s) => s.id !== id));
  };

  return (
    <>
      <Header />
      <StudentForm addStudent={addStudent} />
      <StudentList students={students} deleteStudent={deleteStudent} />
    </>
  );
}

export default App;