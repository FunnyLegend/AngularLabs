import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ActiveUsersComponent } from './ActiveUsers.component';
import { UnactiveUser } from './UnactiveUsers.component';

@NgModule({
  declarations: [
    AppComponent,
    ActiveUsersComponent,
    UnactiveUser
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
