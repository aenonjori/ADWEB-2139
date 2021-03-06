import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-emplist3',
  templateUrl: './emplist3.component.html',
  styleUrls: ['./emplist3.component.css']
})
export class Emplist3Component implements OnInit {

  empFetch!: any[];

  constructor( private employeeservice: EmployeeService) { }

  ngOnInit(): void {
    this.empFetch = this.employeeservice.empList();
  }
}
