import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeaveRecapComponent } from './leave-recap.component';

describe('LeaveRecapComponent', () => {
  let component: LeaveRecapComponent;
  let fixture: ComponentFixture<LeaveRecapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LeaveRecapComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LeaveRecapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
