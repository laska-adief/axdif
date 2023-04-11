import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OverallTaskProgressComponent } from './overall-task-progress.component';

describe('OverallTaskProgressComponent', () => {
  let component: OverallTaskProgressComponent;
  let fixture: ComponentFixture<OverallTaskProgressComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OverallTaskProgressComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OverallTaskProgressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
