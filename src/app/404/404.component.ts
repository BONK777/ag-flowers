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
      background-image: linear-gradient(plum,orchid,purple,indigo);
      z-index: -1;
      font-size: 3rem;
      font-weight: bold;
      font-family: monospace;
    }
  `]
})
export class ErrComponent {

}
