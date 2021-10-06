import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {User} from "@app/shared/models/User";
import {environment} from "@environments/environment";
import {PaginationFilter} from "@app/shared/models/_ui/PaginationFilter";

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  constructor(private httpClient: HttpClient) { }
  public paginatedUsers(filter: PaginationFilter): Observable<User[]> {
    return this.httpClient.post<User[]>(`${environment.gateway}users/paginated`, filter);
  }
  getUserById(id: string){
    return this.httpClient.get<User>(`${environment.gateway}users?id=${id}`);
  }

}