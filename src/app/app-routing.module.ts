import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'apod',
    pathMatch: 'full',
  },
  {
    path: 'apod',
    loadChildren: () =>
      import('./pages/apod/apod.module').then((m) => m.ApodPageModule),
  },
  {
    path: 'mars-weather',
    loadChildren: () =>
      import('./pages/mars-weather/mars-weather.module').then(
        (m) => m.MarsWeatherPageModule
      ),
  },
  {
    path: 'neows',
    loadChildren: () =>
      import('./pages/neows/neows.module').then((m) => m.NeowsPageModule),
  },
  {
    path: 'eonet',
    loadChildren: () =>
      import('./pages/eonet/eonet.module').then((m) => m.EonetPageModule),
  },
  {
    path: 'earth',
    loadChildren: () =>
      import('./pages/earth/earth.module').then((m) => m.EarthPageModule),
  },
  {
    path: 'donki',
    loadChildren: () =>
      import('./pages/donki/donki.module').then((m) => m.DonkiPageModule),
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
