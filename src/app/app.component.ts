import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  user = 'Ekrem';
  items=[
    { description:"Kahvaltı" ,action:"No"},
    { description:"Yemek" ,action:"No"},
    { description:"Spor" ,action:"No"},
    { description:"Film" ,action:"No"}
  ]
}
