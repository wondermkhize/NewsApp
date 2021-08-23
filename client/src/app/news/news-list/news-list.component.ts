import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-news-list',
  templateUrl: './news-list.component.html',
  styleUrls: ['./news-list.component.css']
})
export class NewsListComponent implements OnInit {
  newsStories: any = {};
  selectedOption: any = '';
  options = [
    { name: "United Arab Emirates", value: 'ae' },
    { name: "Argentina", value: 'ar' },
    { name: "Austria", value: 'at' },
    { name: "Australia", value: 'au' },
    { name: "Belgium", value: 'be' },
    { name: "Bulgaria", value: 'bg' },
    { name: "Brazil", value: 'br' },
    { name: "Canada", value: 'ca' },
    { name: "Switzerland", value: 'ch' },
    { name: "China", value: 'cn' },
    { name: "Colombia", value: 'co' },
    { name: "Cuba", value: 'cu' },
    { name: "Germany", value: 'de' },
    { name: "Egypt", value: 'eg' },
    { name: "France", value: 'fr' },
    { name: "United Kingdom	", value: 'gb' },
    { name: "Greece", value: 'gr' },
    { name: "Hong Kong", value: 'hk' },
    { name: "Hungary", value: 'hu' },
    { name: "Indonesia", value: 'id' },
    { name: "Ireland", value: 'ie' },
    { name: "Israel", value: 'il' },
    { name: "India", value: 'in' },
    { name: "Italy", value: 'it' },
    { name: "Japan", value: 'jp' },
    { name: "Korea, Republic", value: 'kr' },
    { name: "Latvia", value: 'lv' },
    { name: "Morocco", value: 'ma' },
    { name: "Mexico", value: 'mx' },
    { name: "Malaysia", value: 'my' },
    { name: "Nigeria", value: 'ng' },
    { name: "Netherlands", value: 'nl' },
    { name: "Norway", value: 'no' },
    { name: "New Zealand	", value: 'nz' },
    { name: "Philippines", value: 'ph' },
    { name: "Poland", value: 'pl' },
    { name: "Portugal", value: 'pt' },
    { name: "Romania", value: 'ro' },
    { name: "Republic of Serbia", value: 'rs' },
    { name: "Russian Federation", value: 'ru' },
    { name: "Saudi Arabia	", value: 'sa' },
    { name: "Sweden", value: 'se' },
    { name: "Singapore", value: 'sg' },
    { name: "Slovenia", value: 'si' },
    { name: "Thailand", value: 'th' },
    { name: "Turkey", value: 'tr' },
    { name: "Taiwan", value: 'tw' },
    { name: "Ukraine", value: 'ua' },
    { name: "United States", value: 'us' },
    { name: "Venezuela", value: 've' },
    { name: "South Africa", value: 'za' }
]

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  }

  selected(event?: any){
    this.selectedOption = event.target?.value;
    this.http.get('https://newsapi.org/v2/top-headlines?country='+this.selectedOption+'&apiKey=3a42748fd1be4d22aa0b025569ed39f3').subscribe(newsStories => this.newsStories = newsStories);
 }

}
