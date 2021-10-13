import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AttendanceRoutingModule } from './attendance-routing.module';
import { TodayAttendanceComponent } from './pages/today-attendance/today-attendance.component';
import { EmployeeAttendanceComponent } from './pages/employee-attendance/employee-attendance.component';


@NgModule({
  declarations: [
    TodayAttendanceComponent,
    EmployeeAttendanceComponent
  ],
  imports: [
    CommonModule,
    AttendanceRoutingModule
  ]
})
export class AttendanceModule { }
