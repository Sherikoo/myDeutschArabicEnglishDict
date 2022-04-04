import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { WordsService } from '../words.service';
import { IWord } from '../word.model';

@Component({
  templateUrl: 'indv-word.component.html',
  styleUrls: ['indv-word.component.css'],
})
export class IndvWordComponent implements OnInit {
  deutsch?: string;
  word?: IWord;
  constructor(
    private wordsService: WordsService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.word = this.wordsService.getEvent(
      this.route.snapshot.params['deutsch']
    );
  }

  saveEdit(formValues: IWord) {
    this.router.navigate(['/words']);
  }

  deleteWord(wordToBeDeleted: IWord | undefined) {
    this.wordsService.deleteThisWord(wordToBeDeleted);
    this.router.navigate(['/words']);
  }

  cancel() {
    this.router.navigate(['/words']);
  }
}
