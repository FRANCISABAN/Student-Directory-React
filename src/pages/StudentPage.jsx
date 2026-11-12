import { useState }from "react";
import Header from "../COMPONENTS/Header";
import StudentForm from "../COMPONENTS/StudentForm";
import StudentList from "../COMPONENTS/StudentList";

const StudentPage = () => {
   const [data, setData] = useState([]);


        const getData = async () => {
          const response = await fetch('http://127.0.0.1:3000/student/all');

          if (!response.ok) {
          throw new Error(response.status);
        }
            const data = await response.json();
            return data;
        }

        getData().then((result) => {
           setData(result);
        }).catch((e) => {
            console.log(e);
        });

            return (
        <>
            <Header />
            <StudentForm />
            <StudentList data={data} deleteStudent={() => {}} />

        </>
    )
}
export default StudentPage;
