import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SolarSystemPage } from './solar-system.page';

describe('SolarSystemPage', () => {
  let component: SolarSystemPage;
  let fixture: ComponentFixture<SolarSystemPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(SolarSystemPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
