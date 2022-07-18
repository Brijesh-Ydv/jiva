import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoProfileComponent } from './ro-profile.component';

describe('RoProfileComponent', () => {
  let component: RoProfileComponent;
  let fixture: ComponentFixture<RoProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RoProfileComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RoProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
