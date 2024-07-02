import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoreRoutingModule } from './core-routing.module';
import { CoreComponent } from './core.component';
import { NbCardModule, NbTableModule, NbTabsetModule } from '@nebular/theme';
import { SharedModule } from '../shared/shared.module';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateLoaderFactor } from '../utils/language-translate/common-translate-loader';
import { HttpClient } from '@angular/common/http';
import { CommonTranslateSubscriber } from '../utils/language-translate/common-translate-subscriber';


@NgModule({
  declarations: [
    CoreComponent
  ],
  imports: [
    CommonModule,
    CoreRoutingModule,
    NbTableModule,
    NbCardModule,
    NbTabsetModule,
    SharedModule,
    TranslateModule.forChild({
      loader:{
        provide:TranslateLoader,
        useClass:TranslateLoaderFactor.forModule(),
        deps:[HttpClient],
      },
      isolate:false,
      extend:true
    })
  ]
})
export class CoreModule { 
  constructor(private commonTranslateSubscriber: CommonTranslateSubscriber) {
  }
}
