import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EonetPage } from './eonet.page';

const routes: Routes = [
  {
    path: '',
    component: EonetPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EonetPageRoutingModule {}
