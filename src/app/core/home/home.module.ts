import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { HomeRoutingModule } from './home-routing.module';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { HttpClient } from '@angular/common/http';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { TranslateLoaderFactor } from 'src/app/utils/language-translate/common-translate-loader';
import { SharedModule } from 'src/app/shared/shared.module';

export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, '../../../assets/i18n/', '.json');
}


@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    SharedModule,
    TranslateModule.forChild({
      defaultLanguage:'en',
      loader: {
          provide: TranslateLoader,
          useClass: TranslateLoaderFactor.forModule(),
          deps: [HttpClient]
      },
      isolate: false,
      extend: true
  })
  ],
  exports:[
    HomeComponent
  ]
})
export class HomeModule { }
