import { createReducer, on } from "@ngrx/store";
import { addUser } from "../actions/user.action";
import { User } from "../models/user.model";

export interface UserState{
    users: User[];
}

export const initialState:UserState = {
    users:[]
}

export const userReducer = createReducer(
    initialState,
    on(addUser,(state,{user})=>({
        ...state,users:[...state.users,user]
    }))
)