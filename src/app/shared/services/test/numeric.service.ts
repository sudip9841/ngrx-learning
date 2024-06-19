import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NumericService {

  constructor() { }

  multipleOfTwo(a:number,b:number):number{
    return a*b;
  }
}
