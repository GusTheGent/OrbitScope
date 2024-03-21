import { Component, OnInit, inject } from '@angular/core';
import { SnapiService } from './services/snapi.service';
import { ARTICLE_FEED } from './interfaces/ARTICLE_FEED.interface';
import { Observable, finalize } from 'rxjs';

@Component({
  selector: 'app-snapi',
  templateUrl: './snapi.page.html',
  styleUrls: ['./snapi.page.scss'],
})
export class SnapiPage implements OnInit {
  private snapiService = inject(SnapiService);
  public articles$: Observable<ARTICLE_FEED>;
  public isLoading: boolean = true;

  ngOnInit() {
    this.articles$ = this.snapiService
      .getArticleFeed()
      .pipe(finalize(() => (this.isLoading = false)));
  }

  public getNextArticleFeed(url: string): void {
    this.isLoading = true;
    this.articles$ = this.snapiService
      .getNextArticleFeed(url)
      .pipe(finalize(() => (this.isLoading = false)));
  }

  public getPreviousArticleFeed(url: string): void {
    this.isLoading = true;
    this.articles$ = this.snapiService
      .getPreviousArticleFeed(url)
      .pipe(finalize(() => (this.isLoading = false)));
  }
}
