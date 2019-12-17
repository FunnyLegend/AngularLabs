import { Component, EventEmitter, Output } from '@angular/core';
//import { clearInterval } from 'timers';

@Component({
  selector: 'gamecontrol',
  template: `
    <button (click)="start()">Start game</button>
    <button (click)="stop()">End game</button>
  `
})
export class GameControlComponent {
  interval;
  @Output()
  secEvent = new EventEmitter();
  start() {
    this.interval = setInterval(() => {
      this.secEvent.emit(Math.floor(Math.random() * 1000));
    }, 1000)
  }

  stop() {
    clearInterval(this.interval)
  }
}