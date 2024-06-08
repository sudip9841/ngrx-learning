import { createReducer, on } from "@ngrx/store";
import { addUser, deleteUser, updateUser } from "../actions/user.action";
import { User } from "../models/user.model";

export interface UserState{
    users: User[];
}

export const initialState:UserState = {
    users:[
        {
            id:1,
            name:'ram',
            age:30
        },
        {
            id:2,
            name:'shyam',
            age:40
        },
        {
            id:1,
            name:'hari',
            age:50
        },
    ]
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
    })
)