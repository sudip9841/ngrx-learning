import { DataSource } from '@angular/cdk/collections';
import { Component, OnInit } from '@angular/core';
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
export class DataTableComponent implements OnInit {

  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol','action'];
  dataSource = [
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

  manageColumns:IMangeColumns[];

  constructor(private sanitizer:DomSanitizer) {
    this.manageColumns = [
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
      {title:"Action",key:'',action:true,actionList:[
        {actionType:'edit',buttonPermission:''},
        {actionType:'delete',buttonPermission:''},
      ]}
    ]
   }
  ngOnInit(): void {
  }

  domSanitize(element:string|undefined){
    if(!element) return '';
    return this.sanitizer.bypassSecurityTrustHtml(element);
  }

}
