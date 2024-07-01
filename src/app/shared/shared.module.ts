import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DatepickerComponent } from './components/datepicker/datepicker.component';
import { DatePickerDirective } from './directives/date-picker.directive';
import { TranslateModule } from '@ngx-translate/core';



@NgModule({
  declarations: [
    DatepickerComponent,
    DatePickerDirective
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    TranslateModule
  ],
  exports:[
    FormsModule,
    ReactiveFormsModule,
    DatepickerComponent,
    DatePickerDirective,
    TranslateModule
  ]
})
export class SharedModule { }
