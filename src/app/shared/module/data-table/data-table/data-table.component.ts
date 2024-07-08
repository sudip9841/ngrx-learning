import { DataSource } from '@angular/cdk/collections';
import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { BehaviorSubject, Observable } from 'rxjs';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
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

export interface IActionList{
  actionType:'view'|'edit'|'delete';
  buttonPermission:string;
}

export interface IMangeColumns{
  title:string;
  key:string;
  action?:boolean;
  actionList?:IActionList[];
  renderCell?:(row:any)=>string;
  postRenderCell?:(row:any)=>void;
}

@Component({
  selector: 'app-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.scss']
})
export class DataTableComponent implements OnInit, OnChanges {

  @Input() dataSource: any[] = [];
  @Input() manageColumns:IMangeColumns[] = [];

  displayedColumns: string[] = [];
 
  constructor(private sanitizer:DomSanitizer) {

   }

  ngOnInit(): void {

  }

  ngOnChanges(changes: SimpleChanges): void {
    if(changes?.['dataSource']?.currentValue){
      this.dataSource = changes?.['dataSource']?.currentValue;
    }
    if(changes?.['manageColumns']?.currentValue){
      this.manageColumns = changes?.['manageColumns']?.currentValue;
      this.displayedColumns = this.manageColumns?.map((item:any)=>(item?.key))
    }
  }


  domSanitize(element:string|undefined){
    if(!element) return '';
    return this.sanitizer.bypassSecurityTrustHtml(element);
  }

}
