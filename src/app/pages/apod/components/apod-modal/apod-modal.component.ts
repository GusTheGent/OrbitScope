import { Component, OnInit, inject } from '@angular/core';
import { ModalController, NavParams } from '@ionic/angular';

@Component({
  selector: 'app-apod-modal',
  templateUrl: './apod-modal.component.html',
  styleUrls: ['./apod-modal.component.scss'],
})
export class ApodModalComponent implements OnInit {
  private modalController = inject(ModalController);
  private navParams = inject(NavParams);
  public data: string;
  public isLoading: boolean;

  ngOnInit(): void {
    this.data = this.navParams.get('data');
  }
  public onCloseModal(): void {
    this.modalController.dismiss(null, 'dismissed');
  }

  public willLoad(event: any): void {
    this.isLoading = true;
    console.log(['willLoad'], event);
  }
  public didLoad(event: any): void {
    this.isLoading = false;
    console.log(['didLoad'], event);
  }
}
