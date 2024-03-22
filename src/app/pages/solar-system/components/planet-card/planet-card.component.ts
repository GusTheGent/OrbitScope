import { Component, Input, inject } from '@angular/core';
import { BODY } from '../../interfaces/BODY.interface';
import { Router } from '@angular/router';

@Component({
  selector: 'app-planet-card',
  templateUrl: './planet-card.component.html',
  styleUrls: ['./planet-card.component.scss'],
})
export class PlanetCardComponent {
  private router = inject(Router);
  @Input() planet: BODY;

  public navigateToDetails(id: string): void {
    this.router.navigate([`solar-system/${id}`]);
  }
}
