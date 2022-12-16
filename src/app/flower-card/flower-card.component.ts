import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-flower-card',
  templateUrl: './flower-card.component.html',
  styles: [`
    .card{
      padding: 30px;
      border: 1px solid;
      border-radius: 8px;
      display: grid;
      gap: 20px;
      justify-content: center;
      font-family: sans-serif;
    }
    i{
      font-size: 2rem;
      text-align: center;
    }
  `]
})
export class FlowerCardComponent {
  @Input() plantName: string = "Plant";
  @Input() plantCat: string = "cat1";
  @Input() plantIcon: string = "fa-solid fa-leaf";
}
