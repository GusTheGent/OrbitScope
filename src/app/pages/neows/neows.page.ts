import { Component, OnInit, inject } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { PageInfoModalComponent } from 'src/app/components/page-info-modal/page-info-modal.component';
import { NEOWS_PAGE_INFO_DATA } from './helper/pageInfoData';

@Component({
  selector: 'app-neows',
  templateUrl: './neows.page.html',
  styleUrls: ['./neows.page.scss'],
})
export class NeowsPage {
  private modalController = inject(ModalController);

  public async onViewPageInfo(): Promise<void> {
    const pageInfo = await this.modalController.create({
      component: PageInfoModalComponent,
      componentProps: { data: NEOWS_PAGE_INFO_DATA },
      cssClass: 'page-info-modal',
    });

    await pageInfo.present();
  }
}
