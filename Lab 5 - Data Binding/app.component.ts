import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  //Interpolakat
  appName ="This is a Interpolation";

  //Property Binding
  clientName:string = "Aenon";

  //Style Binding
  appliedCSSClass = "yellow";
  notappliedCSSClass = false;
  myColor = 'red';

  getData(data:any)
  {
    console.warn(data);
  }

  //Event Binding
  showData($event:any){
    console.log("Button is clicked"); if($event){
      console.log($event.target);
    }
  }
}
