import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OverviewComponent } from './overview/overview.component';
import { EmployeeStatComponent } from './employee-stat/employee-stat.component';
import { DashboardComponent } from './dashboard.component';

const routes: Routes = [
  { path:'', redirectTo:'overview', pathMatch:'full' },
  { path:'', 
    component: DashboardComponent,
    children:[
      { path:'overview', component:OverviewComponent },
      { path:'employee-stat', component:EmployeeStatComponent }
    ] 
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
