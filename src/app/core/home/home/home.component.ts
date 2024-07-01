import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { TranslateService } from '@ngx-translate/core';
import { Observable } from 'rxjs';
import { loadUsers } from 'src/app/store/actions/user.action';
import { User } from 'src/app/store/models/user.model';
import { UserState } from 'src/app/store/reducers/user.reducre';
import { selectAllUser } from 'src/app/store/selectors/user.selector';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  currentLanguage:string;
  usersList$:Observable<User[]>;
  constructor(private store:Store<{users:UserState}>,private translate: TranslateService) { 
    this.usersList$ = this.store.pipe(select(selectAllUser));
    this.translate.use('en')
    this.currentLanguage = this.translate.currentLang || this.translate.defaultLang;

    this.translate.onLangChange.subscribe((evt:any)=>{
      this.currentLanguage = evt?.lang;
    })
  }

  ngOnInit(): void {
    this.store.dispatch(loadUsers());
  }

  changeLanguage():void{
    const changeLang = this.currentLanguage==='en'?'np':'en';
    this.translate.use(changeLang);
  }

}
