import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { WordsService } from './words.service';

@Component({
  template: `
    <h2>My Deutsch-Arabic-English Dict</h2>
    <hr />
    <h3>Add a new word:</h3>
    <hr />
    <div class="col-md-4">
      <form
        autocomplete="off"
        #addWordForm="ngForm"
        (ngSubmit)="onSubmit(addWordForm.value)"
      >
        <div class="form-group">
          <label for="deutsch">Deutsch:</label>
          <em *ngIf="deutsch.invalid && deutsch.touched">Required</em>
          <input
            id="deutsch"
            name="deutsch"
            type="text"
            class="form-control"
            placeholder="Deutsch Word..."
            (ngModel)="(deutsch)"
            required
            #deutsch="ngModel"
          />
        </div>
        <div class="form-group">
          <label for="arabic">Arabic:</label>
          <em *ngIf="arabic.invalid && arabic.touched">Required</em>
          <input
            id="arabic"
            type="text"
            class="form-control"
            placeholder="Arabic Word..."
            required
            (ngModel)="(arabic)"
            name="arabic"
            #arabic="ngModel"
          />
        </div>
        <div class="form-group">
          <label for="english">English:</label>
          <em *ngIf="english.invalid && english.touched">Required</em>
          <input
            id="english"
            name="english"
            type="text"
            class="form-control"
            placeholder="English Word..."
            required
            (ngModel)="(english)"
            #english="ngModel"
          />
        </div>

        <button
          type="submit"
          class="btn btn-primary"
          [disabled]="addWordForm.invalid"
        >
          Add
        </button>
        <button type="button" class="btn btn-default" (click)="cancel()">
          Cancel
        </button>
      </form>
    </div>
  `,
  styles: [
    `
      h3 {
        font-family: Arial;
        color: #f97924;
        font-weight: bold;
      }
      label {
        font-size: 16px;
      }

      em {
        float: right;
        color: #c42b4f;
      }
    `,
  ],
})
export class AddWordComponent {
  deutsch?: string;
  arabic?: string;
  english?: string;

  constructor(private router: Router, private wordsService: WordsService) {}

  onSubmit(formValues: any) {
    this.wordsService.addWord(formValues);
    this.router.navigate(['/words']);
  }

  cancel() {
    this.router.navigate(['/words']);
  }
}
