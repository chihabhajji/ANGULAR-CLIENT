import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LeaveRoutingModule } from './leave-routing.module';
import { LeaveRequestsComponent } from './pages/leave-requests/leave-requests.component';
import { AddLeaveRequestsComponent } from './pages/add-leave-requests/add-leave-requests.component';
import { EditLeaveRequestsComponent } from './pages/edit-leave-requests/edit-leave-requests.component';
import { LeaveTypesComponent } from './pages/leave-types/leave-types.component';


@NgModule({
  declarations: [
    LeaveRequestsComponent,
    AddLeaveRequestsComponent,
    EditLeaveRequestsComponent,
    LeaveTypesComponent
  ],
  imports: [
    CommonModule,
    LeaveRoutingModule
  ]
})
export class LeaveModule { }
