import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {TranslateService} from '@ngx-translate/core';
import {BehaviorSubject, take} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LangTranslateService {
  private lang = localStorage.getItem('lang');
  public currentLang$ = new BehaviorSubject(this.lang ? this.lang : 'en');

  constructor() {
  }

  /**
   * fn. to switch languages
   * @param lang : preferred language ('np'|'en')
   */
  public useLanguage(lang: string) {
    this.currentLang$.next(lang);
  }
}
