import { Component, Input, inject } from '@angular/core';
import { APOD } from '../../interfaces/APOD.interface';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { ModalController } from '@ionic/angular';
import { ApodModalComponent } from '../apod-modal/apod-modal.component';

@Component({
  selector: 'app-apod-card',
  templateUrl: './apod-card.component.html',
  styleUrls: ['./apod-card.component.scss'],
})
export class ApodCardComponent {
  @Input() apodData: APOD;

  public imageLoading: boolean = true;

  private sanitizer = inject(DomSanitizer);
  private modalController = inject(ModalController);

  public onImageLoaded(event: CustomEvent): void {
    this.imageLoading = false;
    console.log('Image load', event);
  }

  public getYouTubeEmbedUrl(url: string): SafeResourceUrl {
    const videoId = this.extractVideoId(url);
    const embedUrl = `https://www.youtube.com/embed/${videoId}`;
    return this.sanitizer.bypassSecurityTrustResourceUrl(embedUrl);
  }

  public async onOpenHDImageModal(): Promise<void> {
    const apodModal = await this.modalController.create({
      component: ApodModalComponent,
      componentProps: { data: this.apodData.hdurl },
      cssClass: 'apod-modal',
    });

    await apodModal.present();
  }

  private extractVideoId(url: string): string | null {
    const regex =
      /(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/(?:[^\/\n\s]+\/\S+\/|(?:v|e(?:mbed)?)\/|\S*?[?&]v=)|youtu\.be\/)([a-zA-Z0-9_-]{11})/;
    const match = url.match(regex);
    return match ? match[1] : null;
  }
}
