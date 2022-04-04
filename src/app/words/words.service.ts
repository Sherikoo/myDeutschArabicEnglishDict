import { Injectable } from '@angular/core';
import { IWord } from './word.model';

@Injectable()
export class WordsService {
  getWords(): IWord[] {
    return WORDS;
  }

  getEvent(deutsch: string): IWord | undefined {
    return WORDS.find((word) => word.deutsch === deutsch);
  }

  addWord(word: IWord) {
    WORDS.push(word);
  }

  deleteThisWord(theWord?: IWord) {
    const foundWord: IWord | undefined = WORDS.find(
      (word) => word?.deutsch === theWord?.deutsch
    );
    if (foundWord) {
      const index = WORDS.indexOf(foundWord);
      WORDS.splice(index, 1);
    }
  }
}

let WORDS: IWord[] = [
  { deutsch: 'Hund', arabic: 'كلب', english: 'dog' },
  { deutsch: 'Katze', arabic: 'قطة', english: 'cat' },
  { deutsch: 'Pferd', arabic: 'حصان', english: 'horse' },
  { deutsch: 'Kuh', arabic: 'بقرة', english: 'cow' },
  { deutsch: 'Auto', arabic: 'سيارة', english: 'car' },
  { deutsch: 'Tisch', arabic: 'منضدة', english: 'table' },
  { deutsch: 'Wand', arabic: 'حائط', english: 'wall' },
];
