import { Component, Input, inject } from '@angular/core';
import { ARTICLE } from '../../interfaces/ARTICLE.interface';
import { Router } from '@angular/router';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss'],
})
export class ArticleComponent {
  @Input() article: ARTICLE;
  private router = inject(Router);

  public navigateToDetails(articleId: number): void {
    this.router.navigate([`snapi/articles/${articleId}`]);
  }
}
