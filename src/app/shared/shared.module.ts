import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { SidemenuComponent } from '../components/sidemenu/sidemenu.component';
import { RouterModule } from '@angular/router';
import { PageInfoComponent } from '../components/page-info/page-info.component';
import { PageInfoModalComponent } from '../components/page-info-modal/page-info-modal.component';

const components = [
  SidemenuComponent,
  PageInfoComponent,
  PageInfoModalComponent,
];

@NgModule({
  declarations: [...components],
  imports: [CommonModule, IonicModule, RouterModule],
  exports: [...components],
})
export class SharedModule {}
