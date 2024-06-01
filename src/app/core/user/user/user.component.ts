import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { addUser } from 'src/app/store/actions/user.action';
import { User } from 'src/app/store/models/user.model';
import { UserState } from 'src/app/store/reducers/user.reducre';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  
 userList: User[] = []

  constructor(private store:Store<UserState>) { }

  ngOnInit(): void {
    this.store.select('users').subscribe((user:any)=>{
      this.userList = user?.users;
      console.log(this.userList);
    });
  }

  onAddUser():void{
    const user:User = {
      id:1,
      name:'Sudip Tamang',
      age:24
    }
    this.store.dispatch(addUser({user:user}));
  }

}
