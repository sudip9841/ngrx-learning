import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { UserComponent } from './user/user.component';
import { NbTabsetModule } from '@nebular/theme';
import { SharedModule } from 'src/app/shared/shared.module';
import { HomeModule } from '../home/home.module';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateLoaderFactor } from 'src/app/utils/language-translate/common-translate-loader';
import { HttpClient } from '@angular/common/http';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { CommonTranslateSubscriber } from 'src/app/utils/language-translate/common-translate-subscriber';

export function createTranslateLoader(http: HttpClient) {
  console.log("inside create transation loader")
  return new TranslateHttpLoader(http, '../../../assets/i18n/user/', '.json');
}


@NgModule({
  declarations: [
    UserComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    NbTabsetModule,
    SharedModule,
    HomeModule,
    TranslateModule.forChild({
      loader: {
        provide: TranslateLoader,
        useFactory: TranslateLoaderFactor.forModule('user'),
        deps: [HttpClient]
      },
      isolate: false,
      extend: true
    }),
  ]
})
export class UserModule {
  constructor(private commonTranslateSubscriber: CommonTranslateSubscriber) {
  }
 }
