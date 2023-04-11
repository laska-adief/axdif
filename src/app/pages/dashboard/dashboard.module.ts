import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { OverviewComponent } from './overview/overview.component';
import { EmployeeStatComponent } from './employee-stat/employee-stat.component';
import { ProfileCardComponent } from './overview/profile-card/profile-card.component';
import { SummaryComponent } from './overview/summary/summary.component';
import { TodayAttendanceComponent } from './overview/today-attendance/today-attendance.component';
import { TaskDueComponent } from './overview/task-due/task-due.component';
import { PrimengModule } from 'src/app/modules/primeng.module';
import { AttendanceSummaryComponent } from './employee-stat/attendance-summary/attendance-summary.component';
import { TaskCompletionComponent } from './employee-stat/task-completion/task-completion.component';
import { LeaveRecapComponent } from './employee-stat/leave-recap/leave-recap.component';
import { AttendanceCompletenessComponent } from './employee-stat/attendance-completeness/attendance-completeness.component';
import { OverallTaskProgressComponent } from './employee-stat/overall-task-progress/overall-task-progress.component';

@NgModule({
  declarations: [
    OverviewComponent,
    EmployeeStatComponent,
    ProfileCardComponent,
    SummaryComponent,
    TodayAttendanceComponent,
    TaskDueComponent,
    AttendanceSummaryComponent,
    TaskCompletionComponent,
    LeaveRecapComponent,
    AttendanceCompletenessComponent,
    OverallTaskProgressComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    PrimengModule,
  ]
})
export class DashboardModule { }
