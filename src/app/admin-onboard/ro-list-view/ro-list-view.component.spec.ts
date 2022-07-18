import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoListViewComponent } from './ro-list-view.component';

describe('RoListViewComponent', () => {
  let component: RoListViewComponent;
  let fixture: ComponentFixture<RoListViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RoListViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RoListViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
