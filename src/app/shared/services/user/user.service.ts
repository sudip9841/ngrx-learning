import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, map, throwError } from 'rxjs';
import { User } from 'src/app/store/models/user.model';
import { environment } from 'src/environments/environment';
import { IMangeColumns } from '../../module/data-table/data-table/data-table.component';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private url = `${environment.api_url}/users`;

  constructor(private http: HttpClient) {}

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
      {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
      {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
      {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
      {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
      {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
      {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
      {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
      {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
      {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
      {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
    ];
    return data;
  }

  manageColumns():IMangeColumns[]{
    let columns:IMangeColumns[] =  [
      {title:'Position',key:'position'},
      {title:'Name',key:'name',renderCell:(row:any)=>{
        console.log("in name row",row)
        return `<button id=${row?.position} class="btn btn-sm btn-primary">${row?.name}</button>`;
      },
      postRenderCell:(row:any)=>{
        alert(row?.name)
      }
    },
      {title:'Weight',key:'weight', renderCell:(row:any)=>{
        let data = row?.weight;
        // return data;
        if(data>10){
          return `greater than 10`
        }else{
          return `less than 10`
        }
      },postRenderCell:(row:any)=>{
        alert(row?.weight)
      }},
      {title:'Symbol',key:'symbol'},
      {title:"Action",key:'action',action:true,actionList:[
        {actionType:'edit',buttonPermission:''},
        {actionType:'delete',buttonPermission:''},
      ]}
    ];
    return columns;
  }
}
