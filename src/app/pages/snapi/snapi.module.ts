import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SnapiPageRoutingModule } from './snapi-routing.module';

import { SnapiPage } from './snapi.page';
import { ArticleComponent } from './components/article/article.component';
import { ArticleDetailsComponent } from './components/article-details/article-details.component';

@NgModule({
  imports: [CommonModule, FormsModule, IonicModule, SnapiPageRoutingModule],
  declarations: [SnapiPage, ArticleComponent, ArticleDetailsComponent],
})
export class SnapiPageModule {}
