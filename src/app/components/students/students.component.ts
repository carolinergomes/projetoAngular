import { StudentsService } from './../../services/students.service';
import { Student } from '../../model/student';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: "app-students",
  templateUrl: "./students.component.html",
  styleUrls: ["./students.component.css"],
})

export class StudentsComponent implements OnInit {

  displayedColumns = ['id', 'name', 'age', 'nota1', 'nota2'];
  dataSource: Student[] = [];
  clickedRows = new Set<Student>();

  constructor( private studentsService: StudentsService ) { }

  // eslint-disable-next-line @angular-eslint/no-empty-lifecycle-method
  ngOnInit(): void {
    this.getStudents()
  }
  getStudents(): void {
    this.dataSource = [...this.studentsService.getStudents()]
  }
}
