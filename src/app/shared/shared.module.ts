import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DatepickerComponent } from './components/datepicker/datepicker.component';
import { DatePickerDirective } from './directives/date-picker.directive';
import { TranslateModule } from '@ngx-translate/core';
import { LocalLangChangePipe } from './pipes/local-lang-change/local-lang-change.pipe';
import { HttpClientModule } from '@angular/common/http';
import { EngToNepNumberPipe } from './pipes/eng-to-nep-number/eng-to-nep-number.pipe';
import { TabIframeComponent } from './components/tab-iframe/tab-iframe.component';



@NgModule({
  declarations: [
    DatepickerComponent,
    DatePickerDirective,
    LocalLangChangePipe,
    EngToNepNumberPipe,
    TabIframeComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    // TranslateModule
    HttpClientModule
  ],
  exports:[
    FormsModule,
    ReactiveFormsModule,
    DatepickerComponent,
    DatePickerDirective,
    // TranslateModule,
    LocalLangChangePipe,
    HttpClientModule,
    EngToNepNumberPipe,
    TabIframeComponent
  ]
})
export class SharedModule { }
