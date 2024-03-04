import { Component, OnInit, inject } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { PageInfoModalComponent } from 'src/app/components/page-info-modal/page-info-modal.component';
import { APOD_PAGE_INFO_DATA } from './helper/pageInfoData';
import { formatDate } from '@angular/common';
import { ApodService } from './services/apod.service';
import { EMPTY, Observable, catchError, finalize } from 'rxjs';
import { APOD } from './interfaces/APOD.interface';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-apod',
  templateUrl: './apod.page.html',
  styleUrls: ['./apod.page.scss'],
})
export class ApodPage implements OnInit {
  private modalController = inject(ModalController);
  private apodService = inject(ApodService);

  public datePickerValue = this.formatDate(new Date());
  public apod$: Observable<APOD>;
  public isLoading: boolean = true;
  public errorMessage: string;

  ngOnInit(): void {
    this.fetchApodData();
  }

  public async onViewPageInfo(): Promise<void> {
    const pageInfo = await this.modalController.create({
      component: PageInfoModalComponent,
      componentProps: { data: APOD_PAGE_INFO_DATA },
      cssClass: 'page-info-modal',
    });

    await pageInfo.present();
  }

  public onDateSelection(event: CustomEvent): void {
    this.isLoading = true;
    this.datePickerValue = event.detail.value;
    this.fetchApodData();
    if (this.apod$) this.errorMessage = '';
  }

  private fetchApodData(): void {
    this.apod$ = this.apodService.getPlanetaryAPOD(this.datePickerValue).pipe(
      catchError((error: HttpErrorResponse) => {
        this.errorMessage = error.error.msg;
        return EMPTY;
      }),
      finalize(() => {
        this.isLoading = false;
      })
    );
  }

  private formatDate(date: Date): string {
    return formatDate(date, 'yyyy-MM-dd', 'en-US');
  }
}
