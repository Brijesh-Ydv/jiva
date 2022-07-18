import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PfaSidenavComponent } from './pfa-sidenav.component';

describe('PfaSidenavComponent', () => {
  let component: PfaSidenavComponent;
  let fixture: ComponentFixture<PfaSidenavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PfaSidenavComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PfaSidenavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
