import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {DashboardRoutingModule} from './dashboard-routing.module';
import {DashboardComponent} from './dashboard.component';
import {RouterModule} from "@angular/router";
import {LayoutModule} from "@angular/cdk/layout";
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatButtonModule} from "@angular/material/button";
import {MatSidenavModule} from "@angular/material/sidenav";
import {MatIconModule} from "@angular/material/icon";
import {MatListModule} from "@angular/material/list";
import {MatGridListModule} from "@angular/material/grid-list";
import {MatCardModule} from "@angular/material/card";
import {MatMenuModule} from "@angular/material/menu";
import {MatTreeModule} from "@angular/material/tree";
import {MatBadgeModule} from "@angular/material/badge";
import {MatProgressBarModule} from "@angular/material/progress-bar";
import {DashboardNavigationComponent} from "@dashboard/_navigation/dashboard-navigation.component";
import {FlatRoutesTree} from "@dashboard/_navigation/flat-routes-tree/flat-routes-tree";
import {LoadingBarRouterModule} from "@ngx-loading-bar/router";
import {RSocketRxjsModule, RSocketService} from "ng-rsocket-rxjs";
import {NotificationService} from "@services/notification.service";
import {MatFormFieldModule} from "@angular/material/form-field";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatInputModule} from "@angular/material/input";
import {MatSlideToggleModule} from "@angular/material/slide-toggle";
import {BreadcrumbModule} from "@shared/components/breadcrumb/breadcrumb.module";
import {StatPreviewCardsComponent} from "@app/dashboard/dashboard_components/stat-preview/stat-preview-cards.component";
import {ChartComponent} from "@app/dashboard/dashboard_components/chart/chart.component";
import {UserProfileComponent} from "@dashboard/shared/current-user-profile/user_profile.component";
import {NgbModule} from "@ng-bootstrap/ng-bootstrap";
import {MatProgressSpinnerModule} from "@angular/material/progress-spinner";
import {MatTooltipModule} from "@angular/material/tooltip";
import { ChatComponent } from './shared/chat/chat.component';
import {MaterialOverlayComponentsService} from "@services/material-overlay-components.service";
import {MatSelectModule} from "@angular/material/select";



@NgModule({
  declarations: [
    DashboardComponent,
    DashboardNavigationComponent,
    FlatRoutesTree,
    StatPreviewCardsComponent,
    ChartComponent,
    UserProfileComponent,
    ChatComponent
  ],
	imports: [
		CommonModule,
		DashboardRoutingModule,
		RouterModule,
		LayoutModule,
		MatToolbarModule,
		MatButtonModule,
		MatSidenavModule,
		MatIconModule,
		MatListModule,
		MatGridListModule,
		MatCardModule,
		MatMenuModule,
		MatTreeModule,
		MatBadgeModule,
		MatProgressBarModule,
		LoadingBarRouterModule,
		MatSelectModule,
		MatFormFieldModule,
		MatInputModule,
		FormsModule,
		MatSlideToggleModule,
		ReactiveFormsModule,
		RSocketRxjsModule.forRoot({
			url: "ws://localhost:7000/rs",
			connectMappingData: 1,
			builderCustomizer: builder => {
				builder.automaticReconnect(4000);
			}
		}),
		BreadcrumbModule,
		NgbModule,
		MatProgressSpinnerModule,
		MatTooltipModule,
	],
  providers: [
    NotificationService, RSocketService, MaterialOverlayComponentsService
  ],
  bootstrap: [
    DashboardNavigationComponent
  ]
})
export class DashboardModule {}
