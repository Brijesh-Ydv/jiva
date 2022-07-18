import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoDashboardComponent } from './ro-dashboard.component';

describe('RoDashboardComponent', () => {
  let component: RoDashboardComponent;
  let fixture: ComponentFixture<RoDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RoDashboardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RoDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
