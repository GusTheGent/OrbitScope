import { Component, OnDestroy, OnInit, inject } from '@angular/core';
import { SolarSystemService } from './services/solar-system.service';
import { BODY } from './interfaces/BODY.interface';
import { Subscription } from 'rxjs';
import {
  trigger,
  state,
  style,
  animate,
  transition,
} from '@angular/animations';

@Component({
  selector: 'app-solar-system',
  templateUrl: './solar-system.page.html',
  styleUrls: ['./solar-system.page.scss'],
  animations: [
    trigger('fadeInSlideUp', [
      state('void', style({ opacity: 0, transform: 'translateY(20px)' })),
      transition(':enter', [
        animate(
          '1s ease-in-out',
          style({ opacity: 1, transform: 'translateY(0)' })
        ),
      ]),
    ]),
  ],
})
export class SolarSystemPage implements OnInit, OnDestroy {
  private solarSystemService = inject(SolarSystemService);
  private subscription: Subscription;

  public planets: BODY[];
  public isLoading: boolean = true;

  ngOnInit(): void {
    this.subscription = this.solarSystemService
      .getPlanets()
      .subscribe((planets) => {
        this.planets = planets.bodies;
        this.isLoading = false;
        console.log(['PLANETS'], this.planets);
      });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
