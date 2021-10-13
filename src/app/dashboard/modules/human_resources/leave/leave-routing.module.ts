import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddLeaveRequestsComponent } from './pages/add-leave-requests/add-leave-requests.component';
import { EditLeaveRequestsComponent } from './pages/edit-leave-requests/edit-leave-requests.component';
import { LeaveRequestsComponent } from './pages/leave-requests/leave-requests.component';
import { LeaveTypesComponent } from './pages/leave-types/leave-types.component';

const routes: Routes = [
  { path: 'leave-types', component: LeaveTypesComponent },
  { path: 'leave-requests', component: LeaveRequestsComponent },
  { path: 'add-leave', component: AddLeaveRequestsComponent },
  { path: 'edit-leave', component: EditLeaveRequestsComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LeaveRoutingModule { }
