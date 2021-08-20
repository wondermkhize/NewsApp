import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-news-list',
  templateUrl: './news-list.component.html',
  styleUrls: ['./news-list.component.css']
})
export class NewsListComponent implements OnInit {
  newsStories: any = {};

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.getNewsHeadlines();
  }


  getNewsHeadlines() {
    this.http.get('https://newsapi.org/v2/top-headlines?country=us&apiKey=3a42748fd1be4d22aa0b025569ed39f3').subscribe(newsStories => this.newsStories = newsStories);
  }
}
