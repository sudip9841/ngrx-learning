import { createReducer, on } from "@ngrx/store";
import { addUser, deleteUser, updateUser } from "../actions/user.action";
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
    })),
    on(updateUser,(state,{user})=>{
        return {...state,users:[...state.users?.filter((item:User)=>item?.id!==user?.id),user]}
    }),
    on(deleteUser,(state,{id})=>{
        return {...state,users:[...state.users?.filter((user:User)=>user?.id!==id)]};
    })
)