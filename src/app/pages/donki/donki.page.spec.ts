import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DonkiPage } from './donki.page';

describe('DonkiPage', () => {
  let component: DonkiPage;
  let fixture: ComponentFixture<DonkiPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(DonkiPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
