import { Component } from '@angular/core';
import { ArticleCardComponent } from '../article-card/article-card.component';

@Component({
  selector: 'app-article-list',
  standalone: true,
  templateUrl: './article-list.component.html',
  styleUrl: './article-list.component.scss',
  imports: [ArticleCardComponent],
})
export class ArticleListComponent {
  articles: any = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
}
