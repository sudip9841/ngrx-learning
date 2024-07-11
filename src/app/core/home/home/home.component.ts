import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { TranslateService } from '@ngx-translate/core';
import { Observable } from 'rxjs';
import { LocalStorageService } from 'src/app/shared/services/local-storage/local-storage.service';
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
  src = 'http://localhost:9000/core/dashboard'
  usersList$:Observable<User[]>;
  constructor(private store:Store<{users:UserState}>,private translate: TranslateService,
    private localStorageService:LocalStorageService
  ) { 
    this.usersList$ = this.store.pipe(select(selectAllUser));
  }

  ngOnInit(): void {
    this.store.dispatch(loadUsers());
  }
}
