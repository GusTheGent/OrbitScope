import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ApodPageRoutingModule } from './apod-routing.module';

import { ApodPage } from './apod.page';
import { SharedModule } from 'src/app/shared/shared.module';
import { ApodCardComponent } from './components/apod-card/apod-card.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ApodPageRoutingModule,
    SharedModule,
  ],
  declarations: [ApodPage, ApodCardComponent],
})
export class ApodPageModule {}
