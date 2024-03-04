import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NeowsPage } from './neows.page';

describe('NeowsPage', () => {
  let component: NeowsPage;
  let fixture: ComponentFixture<NeowsPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(NeowsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
