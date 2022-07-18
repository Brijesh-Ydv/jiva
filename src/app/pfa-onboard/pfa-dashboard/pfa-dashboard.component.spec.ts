import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PfaDashboardComponent } from './pfa-dashboard.component';

describe('PfaDashboardComponent', () => {
  let component: PfaDashboardComponent;
  let fixture: ComponentFixture<PfaDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PfaDashboardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PfaDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
