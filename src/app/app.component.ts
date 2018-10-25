import { Component } from '@angular/core';

// Decorator 
@Component({
  selector: 'app-root', // selector 
  templateUrl: './app.component.html',   //html 
  styleUrls: ['./app.component.css'] // css 
})
export class AppComponent {
  


  //PROP
  personName = "Vijay";

}
