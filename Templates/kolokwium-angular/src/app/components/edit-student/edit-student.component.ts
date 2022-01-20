import { Component, OnInit } from '@angular/core';
import { Student } from 'src/app/models/Student';
import { StudentService } from 'src/app/services/student.service';

@Component({
  selector: 'app-edit-student',
  templateUrl: './edit-student.component.html',
  styleUrls: ['./edit-student.component.css']
})
export class EditStudentComponent implements OnInit {

  constructor(private studentService:StudentService) { }

  ngOnInit(): void {
  }

  editStudent(id:String,firstName:String,lastName:String,age:String){
    var student:Student={
      id:Number(id),
      firstName:firstName,
      lastName:lastName,
      age:Number(age)
    }
    console.log(student);
    this.studentService.editStudent(student).subscribe(
      data=>{console.log(data)}
    )
    alert("Student edited!");
  }
}
