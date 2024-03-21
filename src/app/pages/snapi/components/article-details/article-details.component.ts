import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SnapiService } from '../../services/snapi.service';
import { Observable } from 'rxjs';
import { ARTICLE } from '../../interfaces/ARTICLE.interface';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-article-details',
  templateUrl: './article-details.component.html',
  styleUrls: ['./article-details.component.scss'],
})
export class ArticleDetailsComponent implements OnInit {
  private activatedRoute = inject(ActivatedRoute);
  private snapiService = inject(SnapiService);
  public article$: Observable<ARTICLE>;

  constructor() {}

  ngOnInit(): void {
    const articleId = this.activatedRoute.snapshot.paramMap.get('articleId');
    if (articleId) {
      this.article$ = this.snapiService.getArticleById(articleId);
    }
  }

  public openSource(url: string) {
    window.open(url, '_blank');
  }
}
