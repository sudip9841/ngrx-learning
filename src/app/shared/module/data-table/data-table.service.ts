import { Injectable } from '@angular/core';
import { IActionList, IMangeColumns } from './data-table/data-table.component';

@Injectable({
  providedIn: 'root'
})
export class DataTableService {

  constructor() { }

  manageEachColumns(title:string,key:string,subHeaders:IMangeColumns[]=[],action:boolean=false,actionList?:IActionList[],renderCell?:(row:any)=>string,postRenderCell?:(row:any)=>void):IMangeColumns{
    return {
      title:title,
      key:key,
      subHeaders:subHeaders,
      action:action,
      actionList:actionList,
      renderCell:renderCell,
      postRenderCell:postRenderCell
    }
  }
}
