import { createReducer, on } from "@ngrx/store";
import { addUser, deleteUser, updateUser, loadUsers, loadUsersSuccess, loadUsersFailure } from "../actions/user.action";
import { User } from "../models/user.model";

export interface UserState{
    users: User[];
    loading:boolean;
    error:any;
}

export const initialState:UserState = {
    users:[],
    loading:false,
    error:null
}

export const userReducer = createReducer(
    initialState,
    on(addUser,(state,{user})=>({
        ...state,users:[...state.users,user]
    })),
    on(updateUser,(state,{user})=>{
        return {...state,users: state.users.map(item => item.id === user.id ? { ...item, ...user } : item)}
    }),
    on(deleteUser,(state,{id})=>{
        return {...state,users:state.users?.filter((user:User)=>user?.id!==id)};
    }),
    on(loadUsersSuccess,state=>({
        ...state, loading:true
    })),
    on(loadUsersSuccess,(state,{users})=>({
        ...state,users,loading:false
    })),
    on(loadUsersFailure,(state,{error})=>({
        ...state,error,loading:false
    }))
)