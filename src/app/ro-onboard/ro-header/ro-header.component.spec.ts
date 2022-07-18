import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoHeaderComponent } from './ro-header.component';

describe('RoHeaderComponent', () => {
  let component: RoHeaderComponent;
  let fixture: ComponentFixture<RoHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RoHeaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RoHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
