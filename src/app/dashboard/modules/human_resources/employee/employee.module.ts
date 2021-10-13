import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmployeeRoutingModule } from './employee-routing.module';
import { RouterModule } from '@angular/router';
import { AllEmployeesComponent } from './pages/all-employees/all-employees.component';
import { AddEmployeesComponent } from './pages/add-employees/add-employees.component';
import { EditEmployeesComponent } from './pages/edit-employees/edit-employees.component';

@NgModule({
  declarations: [
    AllEmployeesComponent,
    AddEmployeesComponent,
    EditEmployeesComponent,
  ],
  imports: [CommonModule, EmployeeRoutingModule,RouterModule],
})
export class EmployeeModule {}
