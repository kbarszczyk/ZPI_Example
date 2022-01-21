
import { useEffect, useState } from 'react';
import './App.css';
import { Student } from './Student';
import { StudentList } from './StudentList';

function App() {

  const [studentState, setStudentState] = useState<Student[]>([] as Student[]);

  useEffect(() => {
    fetch('http://localhost:5000/student')
      .then((res) => res.json())
      .then((res: Student[]) => {
        setStudentState(res);
      });
  });


  return (
    <div className="App">
      <h2>Students:</h2>
      {!!studentState && <StudentList students={studentState}/>}
    </div>
  );
}

export default App;
