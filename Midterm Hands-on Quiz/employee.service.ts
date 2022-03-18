import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor() { }

  empList() {
    return[
      {id:100, fname: 'Aenon Jorish', lname: 'Santiago', email: 'assantiago@student.hau.edu.ph'},
      {id:101, fname: 'Joseph', lname: 'Dizon', email: 'jdizon@hau.edu.ph'},
      {id:102, fname: 'James', lname: 'Atienza', email: 'jatienza@hau.edu.ph'},
      {id:103, fname: 'John', lname: 'Cena', email: 'jcena@hau.edu.ph'},
      {id:104, fname: 'Robert', lname: 'Quintana', email: 'rquintana@hau.edu.ph'},
    ]
  }
}
