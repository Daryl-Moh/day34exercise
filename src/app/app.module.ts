import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule} from '@angular/common/http'

import { AppComponent } from './app.component';
import { NewsComponent } from './components/news.component';
import { NewsDisplayComponent } from './components/news-display.component';
import { NewsService } from './news.service';


@NgModule({
  declarations: [
    AppComponent,
    NewsComponent,
    NewsDisplayComponent
  ],
  imports: [
    BrowserModule, ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [NewsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
