import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MarsWeatherPage } from './mars-weather.page';

const routes: Routes = [
  {
    path: '',
    component: MarsWeatherPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MarsWeatherPageRoutingModule {}
