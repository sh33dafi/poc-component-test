import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'poc-component-testing-toggler',
  standalone: true,
  imports: [CommonModule],
  template: `<div *ngIf="toggledState; else toggleOff">TOGGLE ON</div>
  <button (click)="toggle()">Toggle</button>
  <ng-template  #toggleOff>
    <div>TOGGLE OFF</div>
  </ng-template>`,
})
export class TogglerComponent {
  
  protected toggledState = false;
  
  toggle() {
    this.toggledState = !this.toggledState;
  }
}
