import { Injectable } from '@angular/core';
import { Student } from '../model/student';

@Injectable({
  providedIn: 'root'
})
export class StudentsService {

  constructor() { }
  
  students : Student [] = [
    {id : 1, name: 'Caroline Gomes', age: 25, nota1: 8, nota2: 8},
    {id : 2, name: 'Matheus Paula', age: 23, nota1: 6, nota2: 7},
    {id : 3, name: 'Alysson Iury', age: 22, nota1: 8, nota2: 8},
    {id : 4, name: 'Iury Alysson', age: 21, nota1: 8, nota2: 8},
    {id : 5, name: 'Karla Karoliny', age: 26, nota1: 8, nota2: 8},
    {id : 6, name: 'Rangel Gomes', age: 28, nota1: 8, nota2: 8},
    {id : 7, name: 'David Nogueira', age: 20, nota1: 10, nota2: 10},
    {id : 8, name: 'Ana Karoline', age: 25, nota1: 3, nota2: 8},
    {id : 9, name: 'Antonia Maria', age: 25, nota1: 8, nota2: 8},
    {id : 10, name: 'Tonia Ramos', age: 24, nota1: 5, nota2: 5},
  ];
  
  averageCalculation(): Student [] {
    this.students.map(( student )=>{
      student.media = (student.nota1 + student.nota2) / 2
    })
    return this.students;
  }
  status(): Student [] {
    this.students.map(( student )=> {
      const media = (student.nota1 + student.nota2) / 2
      if (media >= 6) {
        student.status = 'Aprovado'
      }
      else {
        student.status = 'Reprovado'
      }
    })
    return this.students
  }

  getStudents(): Student []  {
    return this.students
  }
}
