
import { Component, OnInit } from '@angular/core';;
import { Student } from 'src/app/models/Student';
import { StudentService } from 'src/app/services/student.service';

@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.css']
})
export class AddStudentComponent implements OnInit {


  constructor(private studentService: StudentService) {

  }

  ngOnInit(): void {
  }

  addStudent(idForm: String, firstNameForm: String, lastNameForm: String, ageForm: String) {
    var student: Student = {
      id: Number(idForm),
      firstName: firstNameForm,
      lastName: lastNameForm,
      age: Number(ageForm)
    };
    this.studentService.addStudent(student).subscribe(response=>
      console.log(response))
    alert("Student added!");
    this.studentService.getStudents();
  }


}
