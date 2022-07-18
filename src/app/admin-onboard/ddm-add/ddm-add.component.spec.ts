import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DdmAddComponent } from './ddm-add.component';

describe('DdmAddComponent', () => {
  let component: DdmAddComponent;
  let fixture: ComponentFixture<DdmAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DdmAddComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DdmAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
