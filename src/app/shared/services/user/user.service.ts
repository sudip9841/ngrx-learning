import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, map, throwError } from 'rxjs';
import { User } from 'src/app/store/models/user.model';
import { environment } from 'src/environments/environment';
import { IMangeColumns } from '../../module/data-table/data-table/data-table.component';
import { DataTableService } from '../../module/data-table/data-table.service';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private url = `${environment.api_url}/users`;

  constructor(private http: HttpClient, private dataTableService:DataTableService) {}

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(`${this.url}`);
  }

  /**
   * sdfgfdsadfdsadf
   * @param user takes user and if test
   * @returns 
   */
  addUser(user: User): Observable<User> {
    const { id, ...restData } = user;
    return this.http.post<User>(`${this.url}`, restData);
  }

  updateUser(user: User): Observable<User> {
    return this.http.put<User>(`${this.url}/${user?.id}`, user);
  }

  deleteUser(id: string | number): Observable<User> {
    return this.http.delete<User>(`${this.url}/${id}`);
  }

  //for testing

  multipleTwoNumbers(a: number, b: number): number {
    return a * b;
  }

  displayName(): string {
    return 'Sudip';
  }

  getUserById(id: number): Observable<any> {
    return this.http.get(`${this.url}/${id}`).pipe(
      map((res: any) => res.filter((ele: any) => ele?.id === id)[0]),
      catchError((err: any) => throwError(() => err))
    );
  }

  getDummyDataSource():any[]{
    let data = [
      {position: 1, firstName:'ss1', name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
      {position: 2, firstName:'ss2', name: 'Helium', weight: 4.0026, symbol: 'He'},
      {position: 3, firstName:'ss3', name: 'Lithium', weight: 6.941, symbol: 'Li'},
      {position: 4, firstName:'ss4', name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
      {position: 5, firstName:'ss5', name: 'Boron', weight: 10.811, symbol: 'B'},
      {position: 6, firstName:'ss6', name: 'Carbon', weight: 12.0107, symbol: 'C'},
      {position: 7, firstName:'ss7', name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
      {position: 8, firstName:'ss8', name: 'Oxygen', weight: 15.9994, symbol: 'O'},
      {position: 9, firstName:'ss9', name: 'Fluorine', weight: 18.9984, symbol: 'F'},
      {position: 10,firstName:'ss10', name: 'Neon', weight: 20.1797, symbol: 'Ne'},
    ];
    return data;
  }

  manageColumns():IMangeColumns[]{
    let columns:IMangeColumns[] =  [
      this.dataTableService.manageEachColumns('Position','position'),
      this.dataTableService.manageEachColumns('Name','',[
        this.dataTableService.manageEachColumns('First','firstName'),
        this.dataTableService.manageEachColumns('Last','name'),

      ],false,[],
        (row:any)=>{
        return `<button id=${row?.position} class="btn btn-sm btn-primary">${row?.name}</button>`;
      },(row:any)=>{
        alert(row?.name)
      }),
      this.dataTableService.manageEachColumns('Weight','weight',[],false,[],(row:any)=>{
        let data = row?.weight;
        // return data;
        if(data>10) return `greater than 10`
          return `less than 10`
      }),
      this.dataTableService.manageEachColumns('Symbol','symbol'),
      this.dataTableService.manageEachColumns('Action','action',[],true,[
        {actionType:'edit',buttonPermission:''},
        {actionType:'delete',buttonPermission:''},
      ])
    ];
    return columns;
  }
}
