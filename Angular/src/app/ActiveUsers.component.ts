import { Component,OnInit } from '@angular/core';
import { User } from './User';
import { UserService } from './user-service.service';
import { CounterService } from './counter-service.service';
@Component({
  selector: 'activeUser',
  template: `
  <h1>Active users:</h1>
<ul>
    <li *ngFor="let user of users" (click)="onSelect(user)" [class.selected]="user === selectedUser">
        {{user.name}}
    </li>
</ul>
<button (click)="setToInactive()">Set to inactive</button> 
`
})

export class ActiveUsersComponent {
    users: User[] = [];
    selectedUser: User;
    constructor(private userSevice: UserService, private counterService: CounterService) { }
    ngOnInit() {
        this.users = this.userSevice.activeUsers;
      }
    
      onSelect(user: User) {
        this.selectedUser = user;
      }
    
      setToInactive() {
        if (this.selectedUser != null){
          this.userSevice.setToInactive(this.selectedUser);
          this.counterService.increment();
          this.selectedUser = null;
        }
      }
}
