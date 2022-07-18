import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PfaAddComponent } from './pfa-add.component';

describe('PfaAddComponent', () => {
  let component: PfaAddComponent;
  let fixture: ComponentFixture<PfaAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PfaAddComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PfaAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
