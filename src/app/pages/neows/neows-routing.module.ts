import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NeowsPage } from './neows.page';
import { NeoDetailsComponent } from './components/neo-details/neo-details.component';

const routes: Routes = [
  {
    path: '',
    component: NeowsPage,
  },
  {
    path: ':id',
    component: NeoDetailsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NeowsPageRoutingModule {}
