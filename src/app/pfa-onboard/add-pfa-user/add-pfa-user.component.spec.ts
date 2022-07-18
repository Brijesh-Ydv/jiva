import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddPfaUserComponent } from './add-pfa-user.component';

describe('AddPfaUserComponent', () => {
  let component: AddPfaUserComponent;
  let fixture: ComponentFixture<AddPfaUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddPfaUserComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddPfaUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
