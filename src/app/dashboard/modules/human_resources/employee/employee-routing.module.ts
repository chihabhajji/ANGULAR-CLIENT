import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddEmployeesComponent } from './pages/add-employees/add-employees.component';
import { AllEmployeesComponent } from './pages/all-employees/all-employees.component';
import { EditEmployeesComponent } from './pages/edit-employees/edit-employees.component';


const routes: Routes = [
  { path: 'employees', component: AllEmployeesComponent },
  { path: 'add-employee', component: AddEmployeesComponent },
  { path: 'edit-employee', component: EditEmployeesComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmployeeRoutingModule { }
