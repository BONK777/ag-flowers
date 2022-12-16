import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-inp',
  template: `
    <div>
      <input type="text" [(ngModel)]="w" (change)="upd()">
      <p>{{w}}</p>
    </div>
  `
  
})
export class WordComponent {
  @Input() w: string = ''
  @Output() change = new EventEmitter<string>()
  upd() {
    this.change.emit(this.w)
  }
}
