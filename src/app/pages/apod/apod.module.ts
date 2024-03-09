import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ApodPageRoutingModule } from './apod-routing.module';

import { ApodPage } from './apod.page';
import { SharedModule } from 'src/app/shared/shared.module';
import { ApodCardComponent } from './components/apod-card/apod-card.component';
import { ApodModalComponent } from './components/apod-modal/apod-modal.component';

import { PinchZoomModule } from '@meddv/ngx-pinch-zoom';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ApodPageRoutingModule,
    SharedModule,
    PinchZoomModule,
  ],
  declarations: [ApodPage, ApodCardComponent, ApodModalComponent],
})
export class ApodPageModule {}
