import { Component, OnInit } from '@angular/core';
import { WordsService } from './words.service';
import { IWord } from './word.model';

@Component({
  template: `
    <h2>My Deutsch-Arabic-English Dict</h2>

    <input
      type="text"
      placeholder="Filter words by any language..."
      [(ngModel)]="wordFilter"
    />

    <hr />

    <div class="well row">
      <div class="col-md-4 cell">Deutsch</div>
      <div class="col-md-4 cell">عربي</div>
      <div class="col-md-4 cell">English</div>
    </div>
    <hr />
    <div *ngFor="let word of filteredWords">
      <word-row [word]="word"></word-row>
    </div>
  `,
  styles: [
    `
      div.cell {
        background-color: #ebebeb;
        color: #2b3e50;
        font-weight: bold;
      }
      input {
        width: 230px;
        height: 40px;
        display: flex;
        float: right;
      }

      h2 {
        display: inline;
      }
    `,
  ],
})
export class WordsComponent implements OnInit {
  words: IWord[] = [];

  private _wordFilter: string = '';
  get wordFilter(): string {
    return this._wordFilter;
  }
  set wordFilter(value: string) {
    this._wordFilter = value;
    this.filteredWords = this.performFilter(value);
  }
  filteredWords: IWord[] = [];
  sortedWords: IWord[] = [];

  constructor(private wordsService: WordsService) {}

  ngOnInit(): void {
    this.words = this.wordsService.getWords();
    this.sortedWords = this.words.sort(sortByDeutschAsc);
    this.filteredWords = this.words;
  }

  performFilter(filterBy: string): IWord[] {
    filterBy = filterBy.toLocaleLowerCase();
    return this.words.filter(
      (word: IWord) =>
        word.deutsch.toLocaleLowerCase().includes(filterBy) ||
        word.english.toLocaleLowerCase().includes(filterBy) ||
        word.arabic.toLocaleLowerCase().includes(filterBy)
    );
  }
}

function sortByDeutschAsc(s1: IWord, s2: IWord) {
  if (s1.deutsch > s2.deutsch) return 1;
  else if (s1.deutsch === s2.deutsch) return 0;
  else return -1;
}
