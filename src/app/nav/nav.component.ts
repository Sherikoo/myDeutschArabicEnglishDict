import { Component } from '@angular/core';

@Component({
  selector: 'nav-bar',
  templateUrl: 'nav.component.html',
  styles: [
    `
      li > a.active {
        color: #f97924;
        font-weight: bold;
      }

      li > a {
        font-weight: bold;
        font-size: 14px;
        font-family: Arial;
      }
    `,
  ],
})
export class NavbarComponent {
  deutsch?: string = 'cart';
}
