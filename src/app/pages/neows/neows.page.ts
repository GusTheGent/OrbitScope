import { Component, OnInit, inject } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { PageInfoModalComponent } from 'src/app/components/page-info-modal/page-info-modal.component';
import { NEOWS_PAGE_INFO_DATA } from './helper/pageInfoData';
import { NeowsService } from './services/neows.service';
import { NEO_FEED } from './interfaces/NEO_FEED.interface';
import { Router } from '@angular/router';

@Component({
  selector: 'app-neows',
  templateUrl: './neows.page.html',
  styleUrls: ['./neows.page.scss'],
})
export class NeowsPage implements OnInit {
  private modalController = inject(ModalController);
  private neowsService = inject(NeowsService);
  private router = inject(Router);

  neoFeed: NEO_FEED;

  ngOnInit(): void {
    this.neowsService.getNEO_Feed().subscribe((res) => {
      this.neoFeed = res;
      console.log('Count', res.element_count);
      console.log('Links', res.links);
      console.log('neos', res.near_earth_objects);
    });
  }

  public async onViewPageInfo(): Promise<void> {
    const pageInfo = await this.modalController.create({
      component: PageInfoModalComponent,
      componentProps: { data: NEOWS_PAGE_INFO_DATA },
      cssClass: 'page-info-modal',
    });

    await pageInfo.present();
  }

  public navigateToDetails(id: string): void {
    this.router.navigate([`neows/${id}`]);
  }
}
