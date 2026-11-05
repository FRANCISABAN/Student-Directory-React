function StudentList({ students, deleteStudent }) {
  return (
    <section id="studentList">
      {students.map((student) => (
        <article className="list-item" key={student.id}>
          <h2>{student.name}</h2>
          <p>{student.program}</p>

          <button onClick={() => deleteStudent(student.id)}>
            Delete
          </button>
        </article>
      ))}
    </section>
  );
}

export default StudentList;