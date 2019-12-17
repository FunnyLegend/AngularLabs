import { Component, ViewChild, ViewContainerRef, ComponentRef, ComponentFactoryResolver } from '@angular/core';
import { OddComponent } from './Odd.component';
import { EvenComponent } from './Even.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular';

@ViewChild('content', {read: ViewContainerRef, static: false}) target: ViewContainerRef;
  private componentRef: ComponentRef<any>;

  constructor(private componentFactoryResolver: ComponentFactoryResolver) {

  }

  timerEmitted(event) {
    if (event % 2 != 0) {
      let Odd = this.componentFactoryResolver.resolveComponentFactory(OddComponent);
      this.componentRef = this.target.createComponent(Odd);
    }
    else {
      let Even = this.componentFactoryResolver.resolveComponentFactory(EvenComponent);
      this.componentRef = this.target.createComponent(Even);
    }
  }
}