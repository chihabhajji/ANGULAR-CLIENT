import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClientRoutingModule } from './client-routing.module';
import { ClientsComponent } from './pages/clients/clients.component';
import { AddClientComponent } from './pages/add-client/add-client.component';
import { EditClientComponent } from './pages/edit-client/edit-client.component';


@NgModule({
  declarations: [
    ClientsComponent,
    AddClientComponent,
    EditClientComponent
  ],
  imports: [
    CommonModule,
    ClientRoutingModule
  ]
})
export class ClientModule { }
