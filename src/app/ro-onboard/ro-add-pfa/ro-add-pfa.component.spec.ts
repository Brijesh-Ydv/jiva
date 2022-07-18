import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoAddPfaComponent } from './ro-add-pfa.component';

describe('RoAddPfaComponent', () => {
  let component: RoAddPfaComponent;
  let fixture: ComponentFixture<RoAddPfaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RoAddPfaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RoAddPfaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
