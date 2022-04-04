import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <nav-bar></nav-bar>

    <router-outlet></router-outlet>
  `,
  styles: [
    `
      h2 {
        font-family: Helvetica, sans-serif, Arial;
        font-weight: bold;
      }
    `,
  ],
})
export class AppComponent {}
