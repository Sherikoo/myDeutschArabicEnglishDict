import { Component, Input } from '@angular/core';

@Component({
  selector: 'word-row',
  template: ` <div
    [routerLink]="['/words', word.deutsch]"
    class="well hoverwell row"
  >
    <div class="col-md-4 cell ">{{ word.deutsch }}</div>
    <div class="col-md-4 cell ">{{ word.arabic }}</div>
    <div class="col-md-4 cell ">{{ word.english }}</div>
  </div>`,
  styles: [
    `
      .pad-left {
        margin-left: 10px;
      }
    `,
  ],
})
export class WordRowComponent {
  @Input() word: any;
}
