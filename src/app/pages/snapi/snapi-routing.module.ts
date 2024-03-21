import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SnapiPage } from './snapi.page';
import { ArticleDetailsComponent } from './components/article-details/article-details.component';

const routes: Routes = [
  {
    path: '',
    component: SnapiPage,
  },
  {
    path: 'articles/:articleId',
    component: ArticleDetailsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SnapiPageRoutingModule {}
