import { Component, OnInit, inject } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { PageInfoModalComponent } from 'src/app/components/page-info-modal/page-info-modal.component';
import { MARS_WEATHER_PAGE_INFO_DATA } from './helper/pageInfoData';

@Component({
  selector: 'app-mars-weather',
  templateUrl: './mars-weather.page.html',
  styleUrls: ['./mars-weather.page.scss'],
})
export class MarsWeatherPage {
  private modalController = inject(ModalController);

  public async onViewPageInfo(): Promise<void> {
    const pageInfo = await this.modalController.create({
      component: PageInfoModalComponent,
      componentProps: { data: MARS_WEATHER_PAGE_INFO_DATA },
      cssClass: 'page-info-modal',
    });

    await pageInfo.present();
  }
}
