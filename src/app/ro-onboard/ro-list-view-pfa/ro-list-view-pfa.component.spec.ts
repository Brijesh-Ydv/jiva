import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoListViewPfaComponent } from './ro-list-view-pfa.component';

describe('RoListViewPfaComponent', () => {
  let component: RoListViewPfaComponent;
  let fixture: ComponentFixture<RoListViewPfaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RoListViewPfaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RoListViewPfaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
