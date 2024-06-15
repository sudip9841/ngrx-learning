import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
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

  usersList$:Observable<User[]>;
  constructor(private store:Store<{users:UserState}>) { 
    this.usersList$ = this.store.pipe(select(selectAllUser));
  }

  ngOnInit(): void {
    this.store.dispatch(loadUsers());
  }

}
