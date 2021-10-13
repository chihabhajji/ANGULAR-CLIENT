import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DepartmentRoutingModule } from './department-routing.module';
import { AllDepartmentsComponent } from './pages/all-departments/all-departments.component';
import { AddDepatmentComponent } from './pages/add-depatment/add-depatment.component';
import { EditDepartmentComponent } from './pages/edit-department/edit-department.component';


@NgModule({
  declarations: [
    AllDepartmentsComponent,
    AddDepatmentComponent,
    EditDepartmentComponent
  ],
  imports: [CommonModule, DepartmentRoutingModule],
})
export class DepartmentModule {}
