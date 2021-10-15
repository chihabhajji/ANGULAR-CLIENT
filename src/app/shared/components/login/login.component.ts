import {Component, OnInit} from '@angular/core';
import {AuthService} from "@services/auth.service";
import {Router} from "@angular/router";
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {MaterialOverlayComponentsService} from "@services/material-overlay-components.service";
import {LoginRequest, SignUpRequest} from "@models/User";
import {EnterTriggerAnimation} from '@shared/_animations/animations'

@Component({
	selector: 'app-login',
	templateUrl: './login.component.html',
	styleUrls: ['./login.component.scss'],
	animations: [
		EnterTriggerAnimation
	],
	providers: [AuthService]
})
export class LoginComponent implements OnInit {
	userName: FormControl = new FormControl(null, [Validators.required, Validators.nullValidator,Validators.minLength(6), Validators.maxLength(255)]);
	email: FormControl = new FormControl(null, [Validators.required, Validators.nullValidator,Validators.minLength(10), Validators.email, Validators.maxLength(255)]);
	password: FormControl = new FormControl(null, [Validators.required, Validators.nullValidator,Validators.minLength(8)]);
	loginFormGroup: FormGroup;
	registerFormGroup: FormGroup;
	toggleForms: boolean = true;

	constructor(private authService: AuthService, private router: Router, private fb: FormBuilder, private os: MaterialOverlayComponentsService) {
		if (localStorage.getItem('token') && authService.currentUserValue) {
			os._snackbar.open('Redirecting to dashboard')._dismissAfter(2000);
			setTimeout(() => this.router.navigate(['../dashboard']).then(() => null),2000)
		}
		this.loginFormGroup = this.fb.group([this.email, this.password]);
		this.registerFormGroup = this.fb.group([this.userName, this.email, this.password]);
	}

	ngOnInit(): void {}

	async register(): Promise<void> {
		await this.authService.attemptToRegister(new SignUpRequest(this.userName.value, this.email.value, this.password.value))
			.then(value => console.log(value));
	}

	async login(): Promise<void> {
		await this.authService.attemptToLogin(new LoginRequest(this.email.value, this.password.value))
			.then(value => console.log(value));
	}

}
