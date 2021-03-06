import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-emplist2',
  templateUrl: './emplist2.component.html',
  styleUrls: ['./emplist2.component.css']
})
export class Emplist2Component implements OnInit {

  empFetch!: any[];

  constructor( private employeeservice: EmployeeService) { }

  ngOnInit(): void {
    this.empFetch = this.employeeservice.empList();
  }
}
