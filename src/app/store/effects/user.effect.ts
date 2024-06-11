import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { loadUsersFailure, loadUsers, loadUsersSuccess } from "../actions/user.action";
import { catchError, exhaustMap, map, of } from "rxjs";
import { User } from "../models/user.model";

@Injectable()
export class UserEffect{
    constructor(private actions$:Actions, private http:HttpClient){}

    loadUsers$ = createEffect(()=>
        this.actions$.pipe(
            ofType(loadUsers),
            exhaustMap(()=>this.http.get<User[]>('http://localhost:3000/users').pipe(
                map(users=>loadUsersSuccess({users})),
                catchError(error=>of(loadUsersFailure({error})))
            ))
        )
    )
}