import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { loadUsersFailure, loadUsers, loadUsersSuccess, addUser, addUserSuccess, addUserFailure, updateUser, updateUserSuccesss, updateUserFailure, deleteUser, deleteUserSuccess, deleteUserFailure } from "../actions/user.action";
import { catchError, exhaustMap, map, mergeMap, of, tap } from "rxjs";
import { User } from "../models/user.model";
import { UserService } from "src/app/shared/services/user/user.service";
import { Store } from "@ngrx/store";
import { UserState } from "../reducers/user.reducre";

@Injectable()
export class UserEffect{
    constructor(private actions$:Actions, private userService:UserService, private store: Store<UserState>){}

    loadUsers$ = createEffect(()=>
        this.actions$.pipe(
            ofType(loadUsers),
            exhaustMap(()=>this.userService.getUsers().pipe(
                map(users=>loadUsersSuccess({users})),
                catchError(error=>of(loadUsersFailure({error})))
            ))
        )
    )

    addUser$ = createEffect(()=>
        this.actions$.pipe(
            ofType(addUser),
            exhaustMap(action=>this.userService.addUser(action.user).pipe(
                map((user:User)=>addUserSuccess({user})),
                catchError((error:any)=>of(addUserFailure({error})))
            ))
        ))

    // addUser$ = createEffect(() =>
    //     this.actions$.pipe(
    //       ofType(addUser),
    //       mergeMap(action =>
    //         this.userService.addUser(action.user).pipe(
    //           tap(() => {
    //             this.store.dispatch(loadUsers());
    //           }),
    //           map(() => {
    //             return addUserSuccess({ user: action.user });
    //           }),
    //           catchError(error => of(addUserFailure({ error })))
    //         )
    //       )
    //     )
    //   );


    updateUser$ = createEffect(()=>
    this.actions$.pipe(
      ofType(updateUser),
      exhaustMap(action=>this.userService.updateUser(action?.user).pipe(
        map((user:User)=>updateUserSuccesss({user})),
        catchError((error:any)=>of(updateUserFailure({error})))
      ))
    ))

    deleteUser$ = createEffect(()=>
    this.actions$.pipe(
      ofType(deleteUser),
      exhaustMap(action=>this.userService.deleteUser(action?.id).pipe(
        map((user:User)=>deleteUserSuccess({user})),
        catchError((error:any)=>of(deleteUserFailure({error})))
      ))
    ))
}