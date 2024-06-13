import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DatepickerComponent } from './components/datepicker/datepicker.component';
import { DatePickerDirective } from './directives/date-picker.directive';



@NgModule({
  declarations: [
    DatepickerComponent,
    DatePickerDirective
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports:[
    FormsModule,
    ReactiveFormsModule,
    DatepickerComponent,
    DatePickerDirective
  ]
})
export class SharedModule { }
