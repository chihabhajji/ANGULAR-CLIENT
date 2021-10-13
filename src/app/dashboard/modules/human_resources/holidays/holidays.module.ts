import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HolidaysRoutingModule } from './holidays-routing.module';
import { AllHolidaysComponent } from './pages/all-holidays/all-holidays.component';
import { AddHolidaysComponent } from './pages/add-holidays/add-holidays.component';
import { EditHolidaysComponent } from './pages/edit-holidays/edit-holidays.component';


@NgModule({
  declarations: [
    AllHolidaysComponent,
    AddHolidaysComponent,
    EditHolidaysComponent
  ],
  imports: [
    CommonModule,
    HolidaysRoutingModule
  ]
})
export class HolidaysModule { }
