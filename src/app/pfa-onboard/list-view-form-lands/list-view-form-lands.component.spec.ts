import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListViewFormLandsComponent } from './list-view-form-lands.component';

describe('ListViewFormLandsComponent', () => {
  let component: ListViewFormLandsComponent;
  let fixture: ComponentFixture<ListViewFormLandsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListViewFormLandsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListViewFormLandsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
