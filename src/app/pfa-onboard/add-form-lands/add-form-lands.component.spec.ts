import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddFormLandsComponent } from './add-form-lands.component';

describe('AddFormLandsComponent', () => {
  let component: AddFormLandsComponent;
  let fixture: ComponentFixture<AddFormLandsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddFormLandsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddFormLandsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
