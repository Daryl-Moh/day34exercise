import { Component, Input, OnInit } from '@angular/core';
import { Article } from '../models';
import { NewsService } from '../news.service';

@Component({
  selector: 'app-news-display',
  templateUrl: './news-display.component.html',
  styleUrls: ['./news-display.component.css']
})
export class NewsDisplayComponent implements OnInit{

  articles$!: Promise<Article[]>
  
  @Input()
  articles: Article[] = []

  constructor(private newsSvc: NewsService) { }

  ngOnInit(): void {
      
    this.newsSvc.onNewArticles.subscribe(
      p => {
        this.articles$ = p
      }
    )
  }
}
