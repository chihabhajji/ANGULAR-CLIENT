import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { JobRoutingModule } from './job-routing.module';
import { AddJobComponent } from './pages/add-job/add-job.component';
import { RequirementsComponent } from './pages/requirements/requirements.component';
import { ApplicantListComponent } from './pages/applicant-list/applicant-list.component';

@NgModule({
  declarations: [
    AddJobComponent,
    RequirementsComponent,
    ApplicantListComponent
  ],
  imports: [CommonModule, JobRoutingModule],
})
export class JobModule {}
