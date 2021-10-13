import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AccountRoutingModule } from './account-routing.module';
import { AuthentificationComponent } from './pages/authentification/authentification.component';
import {MatButtonModule} from "@angular/material/button";


@NgModule({
  declarations: [
    AuthentificationComponent,
  ],
    imports: [
        CommonModule,
        AccountRoutingModule,
        MatButtonModule,
    ]
})
export class AccountModule { }
