import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SolarSystemPage } from './solar-system.page';
import { PlanetDetailsComponent } from './components/planet-details/planet-details.component';
import { OverviewComponent } from './components/planet-details/components/overview/overview.component';
import { DetailsComponent } from './components/planet-details/components/details/details.component';

const routes: Routes = [
  {
    path: '',
    component: SolarSystemPage,
  },
  {
    path: ':id',
    component: PlanetDetailsComponent,
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'overview',
      },
      {
        path: 'overview',
        component: OverviewComponent,
      },
      {
        path: 'details',
        component: DetailsComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SolarSystemPageRoutingModule {}
