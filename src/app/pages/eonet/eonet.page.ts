import { Component, OnInit, inject } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { PageInfoModalComponent } from 'src/app/components/page-info-modal/page-info-modal.component';
import { EONET_PAGE_INFO_DATA } from './helper/pageInfoData';

@Component({
  selector: 'app-eonet',
  templateUrl: './eonet.page.html',
  styleUrls: ['./eonet.page.scss'],
})
export class EonetPage {
  private modalController = inject(ModalController);

  public async onViewPageInfo(): Promise<void> {
    const pageInfo = await this.modalController.create({
      component: PageInfoModalComponent,
      componentProps: { data: EONET_PAGE_INFO_DATA },
      cssClass: 'page-info-modal',
    });

    await pageInfo.present();
  }
}
