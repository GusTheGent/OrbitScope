import { Component, OnInit, inject } from '@angular/core';
import { ModalController, NavParams } from '@ionic/angular';
import { IPageInfoData } from 'src/app/shared/interfaces/PageInfoData.interface';

@Component({
  selector: 'app-page-info-modal',
  templateUrl: './page-info-modal.component.html',
  styleUrls: ['./page-info-modal.component.scss'],
})
export class PageInfoModalComponent implements OnInit {
  public data!: IPageInfoData;
  private modalController = inject(ModalController);
  private navParams = inject(NavParams);

  ngOnInit(): void {
    this.data = this.navParams.get('data');
  }

  public onCloseInfoModal(): void {
    this.modalController.dismiss(null, 'dismissed');
  }
}
