import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {AppComponent} from './app.component';
import {ErrorComponent} from '@app/shared/components/error/error.component';

import {AuthService} from "@app/shared/_services/auth.service";

import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {JwtInterceptor} from "@app/shared/_helpers/jwt.interceptor";
import {ErrorInterceptor} from "@app/shared/_helpers/error.interceptor";
import {HttpRequestInterceptor} from "@app/shared/_helpers/http-request.interceptor";

import {AppRoutingModule} from "@app/app-routing.module";
import {MatButtonModule} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";
import {MatSnackBarModule} from "@angular/material/snack-bar";
import {MatBottomSheetModule} from "@angular/material/bottom-sheet";
import {MatDialogModule} from "@angular/material/dialog";

import {MaterialOverlayComponentsService} from "@services/material-overlay-components.service";
import {MatProgressSpinnerModule} from "@angular/material/progress-spinner";
import {MatProgressBarModule} from "@angular/material/progress-bar";

import {NgxSpinnerModule} from "ngx-spinner";
import {TranslateModule} from "@ngx-translate/core";
import {MatTooltipModule} from "@angular/material/tooltip";
import {ReactiveFormsModule} from "@angular/forms";
@NgModule({
  declarations: [
    AppComponent,
  ],
	imports: [
		HttpClientModule,
		AppRoutingModule,
		BrowserModule,
		BrowserAnimationsModule,
		NgxSpinnerModule,
		MatButtonModule,
		MatIconModule,
		MatSnackBarModule,
		MatBottomSheetModule,
		MatDialogModule,
		MatProgressSpinnerModule,
		MatProgressBarModule,
		MatTooltipModule,
		ReactiveFormsModule
	],
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true},
    {provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true},
    {provide: HTTP_INTERCEPTORS, useClass: HttpRequestInterceptor, multi: true},
    AuthService, MaterialOverlayComponentsService],
  bootstrap: [AppComponent]
})
export class AppModule {}
