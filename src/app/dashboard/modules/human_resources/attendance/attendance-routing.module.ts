import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeAttendanceComponent } from './pages/employee-attendance/employee-attendance.component';
import { TodayAttendanceComponent } from './pages/today-attendance/today-attendance.component';

const routes: Routes = [
  { path: 'today-attendance', component: TodayAttendanceComponent },
  { path: 'employee-attendance', component: EmployeeAttendanceComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AttendanceRoutingModule { }
