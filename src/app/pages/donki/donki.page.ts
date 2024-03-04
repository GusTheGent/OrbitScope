import { Component, inject } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { PageInfoModalComponent } from 'src/app/components/page-info-modal/page-info-modal.component';
import { DONKI_PAGE_INFO_DATA } from './helper/pageInfoData';

@Component({
  selector: 'app-donki',
  templateUrl: './donki.page.html',
  styleUrls: ['./donki.page.scss'],
})
export class DonkiPage {
  private modalController = inject(ModalController);

  public async onViewPageInfo(): Promise<void> {
    const pageInfo = await this.modalController.create({
      component: PageInfoModalComponent,
      componentProps: { data: DONKI_PAGE_INFO_DATA },
      cssClass: 'page-info-modal',
    });

    await pageInfo.present();
  }
}
