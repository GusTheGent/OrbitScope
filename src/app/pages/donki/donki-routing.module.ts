import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DonkiPage } from './donki.page';

const routes: Routes = [
  {
    path: '',
    component: DonkiPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DonkiPageRoutingModule {}
