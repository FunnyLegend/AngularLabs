import { Component,OnInit } from '@angular/core';
import { User } from './User';
import { UserService } from './user-service.service';
import { CounterService } from './counter-service.service';
@Component({
    selector: 'UnactiveUser',
    template: `
    <h1>Unactive users:</h1>
<ul>
    <li *ngFor="let user of users" (click)="onSelect(user)" [class.selected]="user === selectedUser">
        {{user.name}}
    </li>
</ul>
<button (click)="setToActive()">Set to active</button> 
  `
  })
  export class UnactiveUser{
    users: User[] = [];
    selectedUser: User;
  
    constructor(private userSevice: UserService, private counterService: CounterService) { }
  
    ngOnInit() {
      this.users = this.userSevice.inactiveUsers;
    }
  
    onSelect(user: User) {
      this.selectedUser = user;
    }
  
    setToActive() {
      if (this.selectedUser != null) {
        this.userSevice.setToActive(this.selectedUser);
        this.counterService.increment();
        this.selectedUser = null;
      }
    }
  }