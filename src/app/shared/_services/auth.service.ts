import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable} from "rxjs";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Router} from "@angular/router";
import { environment } from '@environments/environment';
import {displayRole, LoginRequest, Role, SignUpRequest, User} from "@models/User";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public currentUserSubject: BehaviorSubject<User>;
  public currentUser: Observable<User>;

  constructor(private http: HttpClient, private router: Router) {
    this.currentUserSubject = new BehaviorSubject<User>(JSON.parse(<string>localStorage.getItem('currentUser')));
    this.currentUser = this.currentUserSubject.asObservable();
  }

  public get currentUserValue(): User {
    return this.currentUserSubject.value;
  }

  public inRole(role: Role): boolean {
    return this.currentUserSubject.value.roles.indexOf(role) !== -1;
  }
	displayRole(role: Role): string{
		return displayRole(role);
	}
  async attemptToLogin(loginRequest: LoginRequest) {
     // const headers = new HttpHeaders();
     // headers.append('Content-Type', 'application/x-www-form-urlencoded');
    // const urlSearchParams = new URLSearchParams();
    // urlSearchParams.set('grant_type', 'password');
    // urlSearchParams.set('username', loginRequest.email);
    // urlSearchParams.set('password', password);
    // const body = urlSearchParams.toString();
		// Headers in options {headers}
    return this.http.post<any>(`${environment.gateway}auth/login`, loginRequest).subscribe(jwtPromise => {
			console.log(jwtPromise);
			if (jwtPromise.accessToken) {
				localStorage.setItem('bearer', jwtPromise.tokenType);
				localStorage.setItem('token',jwtPromise.accessToken);
        this.http.get( `${environment.gateway}user/me`).subscribe(user => {
          // user.token = jwtPromise.access_token;
          localStorage.setItem('token', jwtPromise.access_token);
          localStorage.setItem('currentUser', JSON.stringify(user));
					console.log(user);
        });
        return true;
      } else {
        return false;
      }
    });
  }

  async logout(): Promise<void> {
    localStorage.removeItem('currentUser');
    localStorage.removeItem('token');
    // @ts-ignore
    this.currentUserSubject.next(null);
    this.http.post(`${environment.gateway}auth/logout`, null).subscribe();
    await this.router.navigate(['../home/authentication']);
  }

	async attemptToRegister(signupRequest: SignUpRequest): Promise<Observable<any>> {
		return this.http.post(`${environment.gateway}auth/register`,signupRequest);
	}
}
