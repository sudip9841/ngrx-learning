import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { addUser, updateUser, deleteUser, loadUsers } from 'src/app/store/actions/user.action';
import { User } from 'src/app/store/models/user.model';
import { UserState } from 'src/app/store/reducers/user.reducre';
import { selectAllUser, selectLoading, selectUserById } from 'src/app/store/selectors/user.selector';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  
  userList: User[] = []

  users$ = Observable<User[]>;
  loading$ = Observable<boolean>;

  userForm:FormGroup;
  constructor(private store:Store<{users:UserState}>,private formBuilder:FormBuilder) {
    this.userForm = this.formBuilder.group({
      id:[''],
      name:['',[Validators.required]],
      age:['',[Validators.required]]
    });

    this.users$ = this.store.pipe(select(selectAllUser));
    this.loading$ = this.store.pipe(select(selectLoading));
    
   }

  ngOnInit(): void {
    this.loadUsers();
    // this.store.select('users').subscribe((user:any)=>{
    //   this.userList = user?.users;
    //   console.log(this.userList);
    // });

    // this.store.pipe(select(selectUserById(2))).subscribe(res=>{
    //   console.log("user",res);
    // })
  }

  onAddUser():void{
    if(!this.userForm.valid){
      this.userForm.markAllAsTouched();
      return;
    }
    const {id} = this.userForm.value;
    const user:User = {...this.userForm.value,id:id?id:this.userList?.length+1};
    this.userForm.reset();
    if(id){
      this.store.dispatch(updateUser({user:user}));
      return;
    }
    this.store.dispatch(addUser({user:user}));
  }

  editUser(user:User):void{
    this.userForm.patchValue(user);
  }

  deleteUser(user:User):void{
    this.store.dispatch(deleteUser({id:user?.id}));
  }

  loadUsers():void{
    this.store.dispatch(loadUsers());
  }
}
