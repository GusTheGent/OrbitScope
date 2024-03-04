import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ApodPage } from './apod.page';

describe('ApodPage', () => {
  let component: ApodPage;
  let fixture: ComponentFixture<ApodPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ApodPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
