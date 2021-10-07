import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ErrorComponent } from '@app/shared/components/error/error.component';

import {AuthService} from "@app/shared/_services/auth.service";
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {JwtInterceptor} from "@app/shared/_helpers/jwt.interceptor";
import {ErrorInterceptor} from "@app/shared/_helpers/error.interceptor";
import {HttpRequestInterceptor} from "@app/shared/_helpers/http-request.interceptor";
import {AppRoutingModule} from "@app/app-routing.module";
import {NgxSpinnerModule} from "ngx-spinner";
@NgModule({
  declarations: [
    AppComponent,
    ErrorComponent
  ],
  imports: [
    HttpClientModule,
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    NgxSpinnerModule,
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: HttpRequestInterceptor, multi: true },
    AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
