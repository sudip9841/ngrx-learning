import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataTableComponent } from './data-table/data-table.component';
import { CdkTableModule } from '@angular/cdk/table';



@NgModule({
  declarations: [
    DataTableComponent
  ],
  imports: [
    CommonModule,
    CdkTableModule
  ],
  exports:[DataTableComponent]
})
export class DataTableModule { }
