import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AttendanceCompletenessComponent } from './attendance-completeness.component';

describe('AttendanceCompletenessComponent', () => {
  let component: AttendanceCompletenessComponent;
  let fixture: ComponentFixture<AttendanceCompletenessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AttendanceCompletenessComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AttendanceCompletenessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
