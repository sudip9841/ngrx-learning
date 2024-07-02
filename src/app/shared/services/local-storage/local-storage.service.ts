import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  constructor() { }

  setLanguageKey(key:string):void{
    localStorage.setItem('lang',key);
  }

  getLanguageKey():string{
    return localStorage.getItem('lang') ?? '';
  }
}
