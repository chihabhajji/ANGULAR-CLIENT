import {DataSource} from '@angular/cdk/collections';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {map} from 'rxjs/operators';
import {merge, Observable, of as observableOf} from 'rxjs';
import {AuthProvider, Role, User} from "@models/User";

// TODO: Replace this with your own data model type


// TODO: replace this with real data from your application
const EXAMPLE_DATA: User[] = [
  {id: '123123123', email: 'chihab.hajji@esprit.tn', name: 'chihab.hajji', firstName:'chihab', lastName: 'hajji', roles: [Role.SUPER_ADMIN], emailVerified: true,joinDate: new Date(), provider: AuthProvider.local, providerId: "123123123"},
	{id: '123123123', email: 'chihab.hajji@esprit.tn', name: 'chihab.hajji', firstName:'chihab', lastName: 'hajji', roles: [Role.SUPER_ADMIN], emailVerified: true,joinDate: new Date(), provider: AuthProvider.local, providerId: "123123123"},
	{id: '123123123', email: 'chihab.hajji@esprit.tn', name: 'chihab.hajji', firstName:'chihab', lastName: 'hajji', roles: [Role.SUPER_ADMIN], emailVerified: true,joinDate: new Date(), provider: AuthProvider.local, providerId: "123123123"},
	{id: '123123123', email: 'chihab.hajji@esprit.tn', name: 'chihab.hajji', firstName:'chihab', lastName: 'hajji', roles: [Role.SUPER_ADMIN], emailVerified: true,joinDate: new Date(), provider: AuthProvider.local, providerId: "123123123"},
	{id: '123123123', email: 'chihab.hajji@esprit.tn', name: 'chihab.hajji', firstName:'chihab', lastName: 'hajji', roles: [Role.SUPER_ADMIN], emailVerified: true,joinDate: new Date(), provider: AuthProvider.local, providerId: "123123123"},
	{id: '123123123', email: 'chihab.hajji@esprit.tn', name: 'chihab.hajji', firstName:'chihab', lastName: 'hajji', roles: [Role.SUPER_ADMIN], emailVerified: true,joinDate: new Date(), provider: AuthProvider.local, providerId: "123123123"},
	{id: '123123123', email: 'chihab.hajji@esprit.tn', name: 'chihab.hajji', firstName:'chihab', lastName: 'hajji', roles: [Role.SUPER_ADMIN], emailVerified: true,joinDate: new Date(), provider: AuthProvider.local, providerId: "123123123"},
	{id: '123123123', email: 'chihab.hajji@esprit.tn', name: 'chihab.hajji', firstName:'chihab', lastName: 'hajji', roles: [Role.SUPER_ADMIN], emailVerified: true,joinDate: new Date(), provider: AuthProvider.local, providerId: "123123123"},
	{id: '123123123', email: 'chihab.hajji@esprit.tn', name: 'chihab.hajji', firstName:'chihab', lastName: 'hajji', roles: [Role.SUPER_ADMIN], emailVerified: true,joinDate: new Date(), provider: AuthProvider.local, providerId: "123123123"},
	{id: '123123123', email: 'chihab.hajji@esprit.tn', name: 'chihab.hajji', firstName:'chihab', lastName: 'hajji', roles: [Role.SUPER_ADMIN], emailVerified: true,joinDate: new Date(), provider: AuthProvider.local, providerId: "123123123"},
	{id: '123123123', email: 'chihab.hajji@esprit.tn', name: 'chihab.hajji', firstName:'chihab', lastName: 'hajji', roles: [Role.SUPER_ADMIN], emailVerified: true,joinDate: new Date(), provider: AuthProvider.local, providerId: "123123123"},
	{id: '123123123', email: 'chihab.hajji@esprit.tn', name: 'chihab.hajji', firstName:'chihab', lastName: 'hajji', roles: [Role.SUPER_ADMIN], emailVerified: true,joinDate: new Date(), provider: AuthProvider.local, providerId: "123123123"},
	{id: '123123123', email: 'chihab.hajji@esprit.tn', name: 'chihab.hajji', firstName:'chihab', lastName: 'hajji', roles: [Role.SUPER_ADMIN], emailVerified: true,joinDate: new Date(), provider: AuthProvider.local, providerId: "123123123"},
	{id: '123123123', email: 'chihab.hajji@esprit.tn', name: 'chihab.hajji', firstName:'chihab', lastName: 'hajji', roles: [Role.SUPER_ADMIN], emailVerified: true,joinDate: new Date(), provider: AuthProvider.local, providerId: "123123123"},
	{id: '123123123', email: 'chihab.hajji@esprit.tn', name: 'chihab.hajji', firstName:'chihab', lastName: 'hajji', roles: [Role.SUPER_ADMIN], emailVerified: true,joinDate: new Date(), provider: AuthProvider.local, providerId: "123123123"},
	{id: '123123123', email: 'chihab.hajji@esprit.tn', name: 'chihab.hajji', firstName:'chihab', lastName: 'hajji', roles: [Role.SUPER_ADMIN], emailVerified: true,joinDate: new Date(), provider: AuthProvider.local, providerId: "123123123"},
	{id: '123123123', email: 'chihab.hajji@esprit.tn', name: 'chihab.hajji', firstName:'chihab', lastName: 'hajji', roles: [Role.SUPER_ADMIN], emailVerified: true,joinDate: new Date(), provider: AuthProvider.local, providerId: "123123123"},
	{id: '123123123', email: 'chihab.hajji@esprit.tn', name: 'chihab.hajji', firstName:'chihab', lastName: 'hajji', roles: [Role.SUPER_ADMIN], emailVerified: true,joinDate: new Date(), provider: AuthProvider.local, providerId: "123123123"},
	{id: '123123123', email: 'chihab.hajji@esprit.tn', name: 'chihab.hajji', firstName:'chihab', lastName: 'hajji', roles: [Role.SUPER_ADMIN], emailVerified: true,joinDate: new Date(), provider: AuthProvider.local, providerId: "123123123"},
	{id: '123123123', email: 'chihab.hajji@esprit.tn', name: 'chihab.hajji', firstName:'chihab', lastName: 'hajji', roles: [Role.SUPER_ADMIN], emailVerified: true,joinDate: new Date(), provider: AuthProvider.local, providerId: "123123123"},
	{id: '123123123', email: 'chihab.hajji@esprit.tn', name: 'chihab.hajji', firstName:'chihab', lastName: 'hajji', roles: [Role.SUPER_ADMIN], emailVerified: true,joinDate: new Date(), provider: AuthProvider.local, providerId: "123123123"},
	{id: '123123123', email: 'chihab.hajji@esprit.tn', name: 'chihab.hajji', firstName:'chihab', lastName: 'hajji', roles: [Role.SUPER_ADMIN], emailVerified: true,joinDate: new Date(), provider: AuthProvider.local, providerId: "123123123"},
	{id: '123123123', email: 'chihab.hajji@esprit.tn', name: 'chihab.hajji', firstName:'chihab', lastName: 'hajji', roles: [Role.SUPER_ADMIN], emailVerified: true,joinDate: new Date(), provider: AuthProvider.local, providerId: "123123123"},
	{id: '123123123', email: 'chihab.hajji@esprit.tn', name: 'chihab.hajji', firstName:'chihab', lastName: 'hajji', roles: [Role.SUPER_ADMIN], emailVerified: true,joinDate: new Date(), provider: AuthProvider.local, providerId: "123123123"},

];

/**
 * Data source for the UsersList view. This class should
 * encapsulate all logic for fetching and manipulating the displayed data
 * (including sorting, pagination, and filtering).
 */
export class UsersListDataSource extends DataSource<User> {
  data: User[] = EXAMPLE_DATA;
  paginator: MatPaginator | undefined;
  sort: MatSort | undefined;

  constructor() {
    super();
  }

  /**
   * Connect this data source to the table. The table will only update when
   * the returned stream emits new items.
   * @returns A stream of the items to be rendered.
   */
  connect(): Observable<User[]> {
    if (this.paginator && this.sort) {
      // Combine everything that affects the rendered data into one update
      // stream for the data-table to consume.
      return merge(observableOf(this.data), this.paginator.page, this.sort.sortChange)
        .pipe(map(() => {
          return this.getPagedData(this.getSortedData([...this.data ]));
        }));
    } else {
      throw Error('Please set the paginator and sort on the data source before connecting.');
    }
  }

  /**
   *  Called when the table is being destroyed. Use this function, to clean up
   * any open connections or free any held resources that were set up during connect.
   */
  disconnect(): void {}

  /**
   * Paginate the data (client-side). If you're using server-side pagination,
   * this would be replaced by requesting the appropriate data from the server.
   */
  private getPagedData(data: User[]): User[] {
    if (this.paginator) {
      const startIndex = this.paginator.pageIndex * this.paginator.pageSize;
      return data.splice(startIndex, this.paginator.pageSize);
    } else {
      return data;
    }
  }

  /**
   * Sort the data (client-side). If you're using server-side sorting,
   * this would be replaced by requesting the appropriate data from the server.
   */
  private getSortedData(data: User[]): User[] {
    if (!this.sort || !this.sort.active || this.sort.direction === '') {
      return data;
    }
    return data.sort((a, b) => {
      const isAsc = this.sort?.direction === 'asc';
      switch (this.sort?.active) {
        case 'email': return compare(a.email, b.email, isAsc);
        case 'name': return compare(a.name, b.name, isAsc);
        default: return 0;
      }
    });
  }
}

/** Simple sort comparator for example ID/Name columns (for client-side sorting). */
function compare(a: string | number, b: string | number, isAsc: boolean): number {
  return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}
