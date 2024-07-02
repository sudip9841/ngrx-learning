import { Component } from '@angular/core';
import { LocalStorageService } from './shared/services/local-storage/local-storage.service';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  // private currentLanguage:string;
  title = 'tab-system';
  constructor(private localStorageService:LocalStorageService,private translate:TranslateService){
    // const language = this.localStorageService.getLanguageKey();
    // if(language){
    //   this.translate.use(language);
    // }
    // this.currentLanguage = this.translate.currentLang || this.translate.defaultLang;

    // this.translate.onLangChange.subscribe((evt:any)=>{
    //   this.currentLanguage = evt?.lang;
    //   this.localStorageService.setLanguageKey(this.currentLanguage);
    //   this.translate.use(this.currentLanguage);
    // })
  }
}
