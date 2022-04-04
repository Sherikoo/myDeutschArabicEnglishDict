import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { NavbarComponent } from './nav/nav.component';
import { appRoutes } from './routes';
import { AddWordComponent } from './words/add-word.component';
import { IndvWordComponent } from './words/indv-word/indv-word.component';
import { WordRowComponent } from './words/word-row.component';
import { WordsComponent } from './words/words.component';
import { WordsService } from './words/words.service';

@NgModule({
  declarations: [
    AppComponent,
    WordsComponent,
    NavbarComponent,
    WordRowComponent,
    IndvWordComponent,
    AddWordComponent,
  ],
  imports: [BrowserModule, RouterModule.forRoot(appRoutes), FormsModule],
  providers: [WordsService],
  bootstrap: [AppComponent],
})
export class AppModule {}
