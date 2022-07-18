import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PfaListViewComponent } from './pfa-list-view.component';

describe('PfaListViewComponent', () => {
  let component: PfaListViewComponent;
  let fixture: ComponentFixture<PfaListViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PfaListViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PfaListViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
