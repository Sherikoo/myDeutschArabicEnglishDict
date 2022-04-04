import { Routes } from '@angular/router';
import { AddWordComponent } from './words/add-word.component';
import { IndvWordComponent } from './words/indv-word/indv-word.component';
import { WordsComponent } from './words/words.component';

export const appRoutes: Routes = [
  { path: 'words/new', component: AddWordComponent },
  { path: 'words', component: WordsComponent },
  { path: 'words/:deutsch', component: IndvWordComponent },
  { path: '', redirectTo: 'words', pathMatch: 'full' },
];
