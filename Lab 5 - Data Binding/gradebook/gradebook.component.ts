import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gradebook',
  templateUrl: './gradebook.component.html',
  styleUrls: ['./gradebook.component.css']
})
export class GradebookComponent implements OnInit {

  imageUrl:string="assets/image/header2.jpg";

  //Two-way data binding
  studName="";
  prelim=0;
  midterm=0;
  final=0;

  //ngif 1
  isLogin:boolean=true;
  isLogout:boolean=false;

  //ngFor 1
  list = [1,2,3,4,5];

  //ngFor 2 trackby
  studentArr: any[]= [
    {"id": 1, "name": "student1"},
    {"id": 2, "name": "student2"},
    {"id": 3, "name": "student3"},
    {"id": 4, "name": "student4"}];

    trackByData(index: number, studArr:any): number
    {
      return studArr.id;
    }

  staff = [
    { firstName: "James", lastName: 'Bond', email: 'jamesbond32@gmail.com', role: 'User'},
    { firstName: "Jacob", lastName: 'Fray', email: 'frayjacob@gmail.com', role: 'Admin'},
    { firstName: "Djuan", lastName: 'Enonli', email: 'djuanenonli.69@gmail.com', role: 'Admin'},
    { firstName: "George", lastName: 'Miller', email: 'georji.pguy@gmail.com', role: 'User'},
    { firstName: "Matt", lastName: 'Choman', email: 'Mattchoman@gmail.com', role: 'User'},
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
