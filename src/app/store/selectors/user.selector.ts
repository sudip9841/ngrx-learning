import { createSelector, createFeatureSelector } from "@ngrx/store";
import { UserState } from "../reducers/user.reducre";
import { User } from "../models/user.model";

export const selectUserState = createFeatureSelector<UserState>('users');

export const selectAllUser = createSelector(selectUserState,(state:UserState)=>state.users);

export const selectUserById = (id:number)=>createSelector(selectAllUser,(users:User[])=>users.find(user=>user.id===id));

export const selectLoading = createSelector(
    selectUserState,
    (state:UserState)=>state.loading
)