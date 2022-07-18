import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PfaHeaderComponent } from './pfa-header.component';

describe('PfaHeaderComponent', () => {
  let component: PfaHeaderComponent;
  let fixture: ComponentFixture<PfaHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PfaHeaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PfaHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
