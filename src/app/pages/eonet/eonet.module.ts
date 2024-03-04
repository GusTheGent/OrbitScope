import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EonetPageRoutingModule } from './eonet-routing.module';

import { EonetPage } from './eonet.page';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EonetPageRoutingModule,
    SharedModule,
  ],
  declarations: [EonetPage],
})
export class EonetPageModule {}
