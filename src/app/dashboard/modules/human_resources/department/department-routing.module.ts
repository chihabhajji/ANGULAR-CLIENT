import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddDepatmentComponent } from './pages/add-depatment/add-depatment.component';
import { AllDepartmentsComponent } from './pages/all-departments/all-departments.component';
import { EditDepartmentComponent } from './pages/edit-department/edit-department.component';

const routes: Routes = [
  { path: 'departments', component: AllDepartmentsComponent },
  { path: 'add-department', component: AddDepatmentComponent },
  { path: 'edit-department', component: EditDepartmentComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DepartmentRoutingModule {}
