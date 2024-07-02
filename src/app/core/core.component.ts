import { Component } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { TranslateService } from '@ngx-translate/core';
import { LangTranslateService } from "src/app/shared/services/lang-translate/lang-translate.service";

@Component({
  selector: 'app-core',
  templateUrl: './core.component.html',
  styleUrls: ['./core.component.scss']
})
export class CoreComponent {
  currentLanguage:string;

  menuItems: any[] = [
    {id:'home',title:'Home',titleNp:'घर',route:'/core/home'},
    { id: 'dashboard', title: 'Dashboard',titleNp:'ड्यासबोर्ड', route: '/core/dashboard' },
    { id: 'user', title: 'User',titleNp:'प्रयोगकर्ता', route: '/core/user' }
  ];
  constructor(private sanitizer:DomSanitizer,private translate:TranslateService,private languageTranslateService:LangTranslateService ) { 
    this.currentLanguage = this.translate.currentLang || this.translate.defaultLang;

    this.translate.onLangChange.subscribe((evt:any)=>{
      this.currentLanguage = evt?.lang;
    })
  }

  changeLanguage():void{
    const changeLang = this.currentLanguage==='en'?'np':'en';
    // this.translate.use(changeLang);
    this.languageTranslateService.useLanguage(changeLang);
  }


}
