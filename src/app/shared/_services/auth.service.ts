import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable} from "rxjs";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Router} from "@angular/router";
import { environment } from '@environments/environment';
import {Role, User} from "@app/shared/models/User";
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

  auth(username: string, password: string) {
    const headers = new HttpHeaders();
    headers.append('Content-Type', 'application/x-www-form-urlencoded');
    const urlSearchParams = new URLSearchParams();
    urlSearchParams.set('grant_type', 'password');
    urlSearchParams.set('username', username);
    urlSearchParams.set('password', password);
    const body = urlSearchParams.toString();
    return this.http.post<any>(`${environment.authGateway}`, body, {headers}).subscribe(jwtPromise => {
      if (jwtPromise.access_token) {
        this.http.get<User>( `${environment.gateway}account/info`, {
          headers: {
            Authorization: `Bearer ${jwtPromise.access_token}`
          }
        }).subscribe(user => {
          user.token = jwtPromise.access_token;
          localStorage.setItem('token', jwtPromise.access_token);
          localStorage.setItem('currentUser', JSON.stringify(user));
          this.currentUserSubject.next(user);
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
    this.http.post(`${environment.gateway}Logout`, null).subscribe();
    await this.router.navigate(['login']);
  }
}
