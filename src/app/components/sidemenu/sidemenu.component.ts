import { Component, inject } from '@angular/core';
import { routeItems } from './routes/routeItems';
import { ThemeSwitchService } from 'src/app/shared/services/theme-switch.service';

@Component({
  selector: 'app-sidemenu',
  templateUrl: './sidemenu.component.html',
  styleUrls: ['./sidemenu.component.scss'],
})
export class SidemenuComponent {
  public routeItems = routeItems;
  public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];
  public themeSwitchService = inject(ThemeSwitchService);

  public themeSwitcher(): void {
    this.themeSwitchService.lightMode = !this.themeSwitchService.lightMode;
  }
}
