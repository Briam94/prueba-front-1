import { Component, OnInit } from '@angular/core';
import { ServiceService } from './services/service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Prueba Front End # 1.';
  users: any = [];
  showUsers: boolean = false;

  constructor(private service: ServiceService) {}
  
  listUsers() {
    this.service.getUsers().subscribe( data =>{
      if (data) {
        this.users = data;
        this.showUsers = true;
      }
      console.log('users', this.users)
    })
  }

  hideUsers() {
    this.showUsers = false;
  }
}
