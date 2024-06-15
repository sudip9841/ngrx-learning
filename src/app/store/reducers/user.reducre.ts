import { createReducer, on } from "@ngrx/store";
import { addUser, deleteUser, updateUser, loadUsers, loadUsersSuccess, loadUsersFailure, addUserSuccess, updateUserSuccesss, updateUserFailure, deleteUserSuccess, deleteUserFailure } from "../actions/user.action";
import { User } from "../models/user.model";

export interface UserState{
    users: User[];
    loading:boolean;
    error:any;
}

export const initialState:UserState = {
    users:[],
    loading:true,
    error:null
}

export const userReducer = createReducer(
    initialState,
    // on(addUser,(state,{user})=>({
    //     ...state,users:[...state.users,user],loading:false
    // })),
    // on(updateUser,(state,{user})=>{
    //     return {...state,user,loading:true}
    // }),
    on(deleteUser,(state,{id})=>{
        return {...state,users:state.users?.filter((user:User)=>user?.id!==id),loading:false};
    }),
    on(loadUsers,state=>({
        ...state, loading:true
    })),
    on(loadUsersSuccess,(state,{users})=>({
        ...state,users,loading:false
    })),
    on(loadUsersFailure,(state,{error})=>({
        ...state,error,loading:false
    })),
    on(addUserSuccess, (state, { user }) => ({
        ...state,
        users: [...state.users, user],
        loading:false
      })),
    on(updateUserSuccesss,(state,{user})=>({
        ...state,
        users:state.users.map((item:User)=>(user?.id==item?.id ?user:item)),
        loading:false
    })),
    on(updateUserFailure,(state,{error})=>({
        ...state,error,loading:false
    })),
    on(deleteUserSuccess,(state,{user})=>({
        ...state,
        users:state.users?.filter((item:User)=>item?.id!=user?.id),
        loading:false
    })),
    on(deleteUserFailure,(state,{error})=>({
        ...state,
        error,
        loading:false
    }))
)