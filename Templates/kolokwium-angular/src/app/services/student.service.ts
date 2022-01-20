import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Student } from '../models/Student';

const API_URL = "http://localhost:5000/student"

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor(private http:HttpClient) { }


  addStudent(student:Student):Observable<Student>{
    return this.http.post<Student>(API_URL,student);
  }
  
  editStudent(student:Student):Observable<Student>{
    return this.http.put<Student>(API_URL,student);
  }
}
