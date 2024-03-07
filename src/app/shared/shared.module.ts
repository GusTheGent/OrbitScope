import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { SidemenuComponent } from '../components/sidemenu/sidemenu.component';
import { RouterModule } from '@angular/router';
import { PageInfoComponent } from '../components/page-info/page-info.component';
import { PageInfoModalComponent } from '../components/page-info-modal/page-info-modal.component';
import { OrbitalDataPipe } from './pipes/OrbitalData.pipe';
import { CloseApproachDataPipe } from './pipes/CloseApproachData.pipe';

const components = [
  SidemenuComponent,
  PageInfoComponent,
  PageInfoModalComponent,
];

const pipes = [OrbitalDataPipe, CloseApproachDataPipe]

@NgModule({
  declarations: [...components, ...pipes],
  imports: [CommonModule, IonicModule, RouterModule],
  exports: [...components, ...pipes],
})
export class SharedModule {}
