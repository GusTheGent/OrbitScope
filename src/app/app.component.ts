import { Component, inject } from '@angular/core';
import { ThemeSwitchService } from './shared/services/theme-switch.service';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public themeSwitchService = inject(ThemeSwitchService);
}
