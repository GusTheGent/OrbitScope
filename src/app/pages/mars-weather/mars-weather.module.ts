import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MarsWeatherPageRoutingModule } from './mars-weather-routing.module';

import { MarsWeatherPage } from './mars-weather.page';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MarsWeatherPageRoutingModule,
    SharedModule,
  ],
  declarations: [MarsWeatherPage],
})
export class MarsWeatherPageModule {}
