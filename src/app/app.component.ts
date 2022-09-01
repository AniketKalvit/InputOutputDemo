import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'InputOutputDemo';
  myMsg="Hello student";

  getChildData(data:string){
    console.log(data);
  }
}
