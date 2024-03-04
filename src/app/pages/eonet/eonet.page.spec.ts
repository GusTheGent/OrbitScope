import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EonetPage } from './eonet.page';

describe('EonetPage', () => {
  let component: EonetPage;
  let fixture: ComponentFixture<EonetPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(EonetPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
