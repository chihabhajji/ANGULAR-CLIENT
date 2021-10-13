import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddHolidaysComponent } from './pages/add-holidays/add-holidays.component';
import { AllHolidaysComponent } from './pages/all-holidays/all-holidays.component';
import { EditHolidaysComponent } from './pages/edit-holidays/edit-holidays.component';

const routes: Routes = [
  { path: 'holidays', component: AllHolidaysComponent },
  { path: 'add-holiday', component: AddHolidaysComponent },
  { path: 'edit-holiday', component: EditHolidaysComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HolidaysRoutingModule {}
