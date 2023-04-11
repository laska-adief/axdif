import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskCompletionComponent } from './task-completion.component';

describe('TaskCompletionComponent', () => {
  let component: TaskCompletionComponent;
  let fixture: ComponentFixture<TaskCompletionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TaskCompletionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TaskCompletionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
