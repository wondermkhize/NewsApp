import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NewsDetailComponent } from './news/news-detail/news-detail.component';
import { NewsListComponent } from './news/news-list/news-list.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'news', component: NewsListComponent},
  {path: 'news/:id', component: NewsDetailComponent},
  {path: '**', component: HomeComponent, pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
