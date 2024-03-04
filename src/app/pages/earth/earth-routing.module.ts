import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EarthPage } from './earth.page';

const routes: Routes = [
  {
    path: '',
    component: EarthPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EarthPageRoutingModule {}
