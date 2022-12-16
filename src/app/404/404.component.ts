import { Component } from '@angular/core';

@Component({
  selector: 'app-404',
  template: `
    <div class="err">404 Page not found</div>
  `,
  styles: [`
    .err {
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      display: flex;
      justify-content: center;
      align-items: center;
      background-image: linear-gradient(#516c46, #48653c, #203218, #131e0e);
      z-index: -1;
      font-size: 3rem;
      font-weight: bold;
      color: #fff;
      font-family: monospace;
    }
  `]
})
export class ErrComponent {

}
