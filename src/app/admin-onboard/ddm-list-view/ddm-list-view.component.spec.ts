import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DdmListViewComponent } from './ddm-list-view.component';

describe('DdmListViewComponent', () => {
  let component: DdmListViewComponent;
  let fixture: ComponentFixture<DdmListViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DdmListViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DdmListViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
