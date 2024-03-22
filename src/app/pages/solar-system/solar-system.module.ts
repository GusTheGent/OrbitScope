import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SolarSystemPageRoutingModule } from './solar-system-routing.module';

import { SolarSystemPage } from './solar-system.page';
import { PlanetCardComponent } from './components/planet-card/planet-card.component';
import { PlanetDetailsComponent } from './components/planet-details/planet-details.component';
import { OverviewComponent } from './components/planet-details/components/overview/overview.component';
import { DetailsComponent } from './components/planet-details/components/details/details.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SolarSystemPageRoutingModule,
  ],
  declarations: [
    SolarSystemPage,
    PlanetCardComponent,
    PlanetDetailsComponent,
    OverviewComponent,
    DetailsComponent,
  ],
})
export class SolarSystemPageModule {}
