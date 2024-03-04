import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ApodPage } from './apod.page';

const routes: Routes = [
  {
    path: '',
    component: ApodPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ApodPageRoutingModule {}
