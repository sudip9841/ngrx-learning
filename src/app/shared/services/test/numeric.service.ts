import { Injectable } from '@angular/core';
import { UserService } from '../user/user.service';

@Injectable({
  providedIn: 'root'
})
export class NumericService {

  constructor(private userService:UserService) { }

  multipleOfTwo(a:number,b:number):number{
    this.userService.displayName();
    return a*b;
  }
}
