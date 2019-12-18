import { Component } from '@angular/core';
import{UserService} from './user-service.service'
import {CounterService} from './counter-service.service'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

 export class AppComponent{
  constructor(private userSevice: UserService, private counterService:CounterService) { }

  onAdd(name: string, status: string) {
    if (name !=''&& status!='')
    {
    this.userSevice.createUser(name, status);
    }
 }
}