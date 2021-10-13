import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'attendance',
    loadChildren: () => import('@dashboard/modules/human_resources/attendance/attendance.module').then(m => m.AttendanceModule)
  },
  {
    path: 'clients',
    loadChildren: () => import('@dashboard/modules/human_resources/client/client.module').then(m => m.ClientModule)
  },
  {
    path: 'departments',
    loadChildren: () => import('@dashboard/modules/human_resources/department/department.module').then(m => m.DepartmentModule)
  },
  {
    path: 'employees',
    loadChildren: () => import('@dashboard/modules/human_resources/employee/employee.module').then(m => m.EmployeeModule)
  },
  {
    path: 'holidays',
    loadChildren: () => import('@dashboard/modules/human_resources/holidays/holidays.module').then(m => m.HolidaysModule)
  },
  {
    path: 'jobs',
    loadChildren: () => import('@dashboard/modules/human_resources/job/job.module').then(m => m.JobModule)
  },
  {
    path: 'leaves',
    loadChildren: () => import('@dashboard/modules/human_resources/leave/leave.module').then(m => m.LeaveModule)
  },
  {
    path: 'projects',
    loadChildren: () => import('@dashboard/modules/human_resources/project/project.module').then(m => m.ProjectModule)
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HumanResourcesRoutingModule { }
