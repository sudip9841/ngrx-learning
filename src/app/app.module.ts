import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NbThemeModule, NbLayoutModule } from '@nebular/theme';
import { NbEvaIconsModule } from '@nebular/eva-icons';
import { StoreModule } from '@ngrx/store';
import { userReducer } from './store/reducers/user.reducre';
import { EffectsModule } from '@ngrx/effects';
import {HttpClient, HttpClientModule} from '@angular/common/http'
import { UserEffect } from './store/effects/user.effect';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import { TranslateLoaderFactor } from './utils/language-translate/common-translate-loader';
import { SharedModule } from './shared/shared.module';
import { CommonTranslateSubscriber } from './utils/language-translate/common-translate-subscriber';

export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, '../assets/i18n/', '.json');
}

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    BrowserAnimationsModule,
    NbThemeModule.forRoot({ name: 'default' }),
    StoreModule.forRoot(({
      users:userReducer
    })),
    EffectsModule.forRoot([UserEffect]),
    SharedModule,
    TranslateModule.forRoot({
      defaultLanguage:'en',
      loader: {
        provide: TranslateLoader,
        useClass: TranslateLoaderFactor.forModule(),
        deps: [HttpClient]
      },
      isolate: false,
      extend: true
    }),
    NbLayoutModule,
    NbEvaIconsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(private commonTranslateSubscriber: CommonTranslateSubscriber) {
  }
 }
