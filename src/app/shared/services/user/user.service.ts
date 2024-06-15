import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from 'src/app/store/models/user.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private url = `${environment.api_url}/users`;

  constructor(private http:HttpClient) { }

  getUsers():Observable<User[]>{
    return this.http.get<User[]>(`${this.url}`)
  }

  addUser(user:User):Observable<User>{
    const {id,...restData} = user;
    return this.http.post<User>(`${this.url}`,restData);
  }

  updateUser(user:User):Observable<User>{
    return this.http.put<User>(`${this.url}/${user?.id}`,user);
  }

  deleteUser(id:string | number):Observable<User>{
    return this.http.delete<User>(`${this.url}/${id}`);
  }
}
