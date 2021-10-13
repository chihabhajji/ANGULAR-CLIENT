import {AfterViewInit, Component, HostBinding, OnDestroy, OnInit} from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import {BehaviorSubject, Observable, Subject, Subscriber} from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import {AuthService} from "@services/auth.service";
import {NotificationService} from "@services/notification.service";
import {FormControl} from "@angular/forms";
import {OverlayContainer} from "@angular/cdk/overlay";
import {MaterialOverlayComponentsService} from "@services/material-overlay-components.service";
import {GatewayService} from "@services/gateway.service";
import {Title} from "@angular/platform-browser";
@Component({
  selector: 'app-navigation',
  templateUrl: './dashboard-navigation.component.html',
  styleUrls: ['./dashboard-navigation.component.scss']
})
export class DashboardNavigationComponent implements OnInit, AfterViewInit, OnDestroy{
  notificationFetchPage: BehaviorSubject<number> = new BehaviorSubject<number>(0);
  darkClassName = 'darkMode';
  lightClassName = 'light';
	public activeInitialTitle: string = this.titleService.getTitle();
  @HostBinding('class') className = localStorage.getItem('theme') ?? this.lightClassName ;
  toggleControl = new FormControl(this.className === this.darkClassName);
  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset).pipe(map(result => result.matches), shareReplay());
	searchFieldValue: string = "";
	fetching: boolean = false;
	isChatOpen: boolean = false;
  constructor(private breakpointObserver: BreakpointObserver, public authService: AuthService, public notificationService: NotificationService,private overlay: OverlayContainer, private materialOverlayComponents: MaterialOverlayComponentsService,public gatewayService: GatewayService, private titleService: Title) {

  }

  async logout(): Promise<void> {
     await this.authService.logout();
  }

	ngOnDestroy(): void {
		this.notificationFetchPage.unsubscribe();
	}
	async ngAfterViewInit(): Promise<void> {
		await this.gatewayService.ping();
	}
  async ngOnInit() {
    await this.notificationService.countUnreadNotifications();
    await this.notificationService.fetchNotifications(0);
		this.notificationService.notifications$.subscribe((value) => {
			if(!this.fetching) {
				this.notificationService.notificationCount.next(this.notificationService.notificationCount.value+1);
				this.titleService.setTitle(`(${this.notificationService.notificationCount.value}) ${this.activeInitialTitle}`);
				this.materialOverlayComponents._snackbar.open('New notification recieved',undefined,{
					politeness: 'assertive',
					horizontalPosition: 'left',
					announcementMessage: 'New notification recieved'
				})._dismissAfter(6000);
			}
		});
    this.notificationFetchPage.subscribe(async value => {
			if(this.fetching)
				await this.notificationService.fetchNotifications(value).then(() => this.fetching = false);
		});
    this.toggleControl.valueChanges.subscribe((darkMode) => {
      this.className = darkMode ? this.darkClassName : this.lightClassName;
      if (darkMode) {
        this.overlay.getContainerElement().classList.add(this.darkClassName);
      } else {
        this.overlay.getContainerElement().classList.remove(this.darkClassName);
      }
      localStorage.setItem('theme', this.className);
    });
  }
  loadMore($event: MouseEvent) {
    $event.stopPropagation();
		this.fetching = true;
    this.notificationFetchPage.next(this.notificationFetchPage.value + 1);
  }
	toggleChat() {
		this.isChatOpen = !this.isChatOpen;
	}
}



