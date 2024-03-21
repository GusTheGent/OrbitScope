import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SnapiPage } from './snapi.page';

describe('SnapiPage', () => {
  let component: SnapiPage;
  let fixture: ComponentFixture<SnapiPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(SnapiPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
