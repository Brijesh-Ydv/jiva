import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListViewPfaUserComponent } from './list-view-pfa-user.component';

describe('ListViewPfaUserComponent', () => {
  let component: ListViewPfaUserComponent;
  let fixture: ComponentFixture<ListViewPfaUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListViewPfaUserComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListViewPfaUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
