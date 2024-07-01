import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, map, throwError } from 'rxjs';
import { User } from 'src/app/store/models/user.model';
import { environment } from 'src/environments/environment';

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
}
