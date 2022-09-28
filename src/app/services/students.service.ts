import { Injectable } from '@angular/core';
import { Student } from '../model/student';

@Injectable({
  providedIn: 'root'
})
export class StudentsService {

  constructor() { }
  
  students : Student [] = [
    {id : 1, name: 'Carol', age: 25, nota1: 8, nota2: 8},
    {id : 2, name: 'Matheus', age: 23, nota1: 6, nota2: 7},
    {id : 3, name: 'Alysson', age: 22, nota1: 8, nota2: 8},
    {id : 4, name: 'Iury', age: 21, nota1: 8, nota2: 8},
    {id : 5, name: 'Karla', age: 26, nota1: 8, nota2: 8},
    {id : 6, name: 'Rangel', age: 28, nota1: 8, nota2: 8},
    {id : 7, name: 'David', age: 20, nota1: 10, nota2: 10},
    {id : 8, name: 'Ana', age: 25, nota1: 8, nota2: 8},
    {id : 9, name: 'Antonia', age: 25, nota1: 8, nota2: 8},
    {id : 10, name: 'Tonia', age: 24, nota1: 5, nota2: 5},
  ];

  getStudents(): Student []  {
    return this.students
  }
}
