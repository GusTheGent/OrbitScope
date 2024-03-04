import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ThemeSwitchService {
  lightMode: boolean = true;
  constructor() {}
}
