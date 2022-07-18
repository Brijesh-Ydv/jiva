import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoSidenavComponent } from './ro-sidenav.component';

describe('RoSidenavComponent', () => {
  let component: RoSidenavComponent;
  let fixture: ComponentFixture<RoSidenavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RoSidenavComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RoSidenavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
