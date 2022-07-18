import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PfaProfileComponent } from './pfa-profile.component';

describe('PfaProfileComponent', () => {
  let component: PfaProfileComponent;
  let fixture: ComponentFixture<PfaProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PfaProfileComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PfaProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
