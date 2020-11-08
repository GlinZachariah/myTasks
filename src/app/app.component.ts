import { Component } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'myTasks';

  toggleMenu(menu:MatSidenav){
    console.log("Toggle menu");
    menu.toggle();

  }
}
