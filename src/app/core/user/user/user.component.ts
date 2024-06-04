import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { addUser, updateUser, deleteUser } from 'src/app/store/actions/user.action';
import { User } from 'src/app/store/models/user.model';
import { UserState } from 'src/app/store/reducers/user.reducre';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  
  userList: User[] = []

  userForm:FormGroup;
  constructor(private store:Store<UserState>,private formBuilder:FormBuilder) {
    this.userForm = this.formBuilder.group({
      id:[''],
      name:['',[Validators.required]],
      age:['',[Validators.required]]
    })
   }

  ngOnInit(): void {
    this.store.select('users').subscribe((user:any)=>{
      this.userList = user?.users;
      console.log(this.userList);
    });
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
}
