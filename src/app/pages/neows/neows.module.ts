import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NeowsPageRoutingModule } from './neows-routing.module';

import { NeowsPage } from './neows.page';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NeowsPageRoutingModule,
    SharedModule,
  ],
  declarations: [NeowsPage],
})
export class NeowsPageModule {}
