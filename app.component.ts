import { Component } from '@angular/core';
import { MyserviceService } from './myservice.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'MT1_Products_Routing';
  todayDate: any;
  componentProperty: any;

  logo:string = "assets/images/logo.png";

  constructor(private myservice:MyserviceService) {}

  ngOnInt(){
    this.todayDate = this.myservice.showTodayDate();
    console.log(this.myservice.serviceproperty);
    this.myservice.serviceproperty = " component created";
    this.componentProperty = this.myservice.serviceproperty;
  }
}
