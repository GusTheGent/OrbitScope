import { Component, OnInit, inject } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { PageInfoModalComponent } from 'src/app/components/page-info-modal/page-info-modal.component';
import { MARS_WEATHER_PAGE_INFO_DATA } from './helper/pageInfoData';
import { MarsWeatherService } from './services/mars-weather.service';

@Component({
  selector: 'app-mars-weather',
  templateUrl: './mars-weather.page.html',
  styleUrls: ['./mars-weather.page.scss'],
})
export class MarsWeatherPage implements OnInit {
  private modalController = inject(ModalController);
  private marsWeatherService = inject(MarsWeatherService);

  ngOnInit(): void {
    this.marsWeatherService.getWeather().subscribe((res) => {
      const { sol_keys, validity_checks, ...rest } = res;
      console.log(rest);
      console.log(sol_keys);
      console.log(validity_checks);
    });
  }

  public async onViewPageInfo(): Promise<void> {
    const pageInfo = await this.modalController.create({
      component: PageInfoModalComponent,
      componentProps: { data: MARS_WEATHER_PAGE_INFO_DATA },
      cssClass: 'page-info-modal',
    });

    await pageInfo.present();
  }
}
