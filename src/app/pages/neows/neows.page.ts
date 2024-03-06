import { Component, OnInit, inject } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { PageInfoModalComponent } from 'src/app/components/page-info-modal/page-info-modal.component';
import { NEOWS_PAGE_INFO_DATA } from './helper/pageInfoData';
import { NeowsService } from './services/neows.service';
import { NEO_FEED } from './interfaces/NEO_FEED.interface';
import { Router } from '@angular/router';
import { EMPTY, Observable, catchError, finalize } from 'rxjs';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-neows',
  templateUrl: './neows.page.html',
  styleUrls: ['./neows.page.scss'],
})
export class NeowsPage implements OnInit {
  private modalController = inject(ModalController);
  private neowsService = inject(NeowsService);
  private router = inject(Router);

  public neoFeed$: Observable<NEO_FEED>;
  public isLoading: boolean = true;
  public errorMessage: string = '';

  ngOnInit(): void {
    this.neoFeed$ = this.neowsService.getNEO_Feed().pipe(
      catchError((error: HttpErrorResponse) => {
        this.errorMessage = error.error.error_message;
        console.log(this.errorMessage);

        return EMPTY;
      }),
      finalize(() => {
        this.isLoading = false;
      })
    );
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

  public getPrevious(previousLink: string): void {
    this.isLoading = true;
    this.neoFeed$ = this.neowsService.getPreviousFeed(previousLink).pipe(
      catchError((error: HttpErrorResponse) => {
        this.errorMessage = error.error.msg;
        return EMPTY;
      }),
      finalize(() => {
        this.isLoading = false;
      })
    );
  }

  public getNext(nextLink: string): void {
    this.isLoading = true;
    this.neoFeed$ = this.neowsService.getNextFeed(nextLink).pipe(
      catchError((error: HttpErrorResponse) => {
        this.errorMessage = error.error.msg;
        return EMPTY;
      }),
      finalize(() => {
        this.isLoading = false;
      })
    );
  }
}
