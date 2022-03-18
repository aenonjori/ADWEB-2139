import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-emplist1',
  templateUrl: './emplist1.component.html',
  styleUrls: ['./emplist1.component.css']
})
export class Emplist1Component implements OnInit {

  empFetch!: any[];

  constructor( private employeeservice: EmployeeService) { }

  ngOnInit(): void {
    this.empFetch = this.employeeservice.empList();
  }
}
