
import { getPostApi, addPostApi, delPostApi } from "../apis/blogApi"

export const SHOW_POST = 'SHOW_POST'
export const ADD_POST = 'ADD_POST'
export const DEL_POST = 'DEL_POST'

//action Get Data
export function showPost(data) {
  
    return {
        type: SHOW_POST,
        payload: data
    }
}

//action THUNK Get Data

export function thunkPost(){
    return (dispatch) => {
        return getPostApi()
        .then((data) => {
            dispatch(showPost(data))
        })
    }
}

//action Add Data
export function addPost(data) {
  
    return {
        type: ADD_POST,
        payload: data
    }
}

//action THUNK Add Data

export function thunkAddPost(data){
    return (dispatch) => {
        return addPostApi(data)
        .then((post) => {
            dispatch(addPost(post))
        })
    }
}

//action Delete Data
export function delPost(id) {
  
    return {
        type: DEL_POST,
        payload: id,
    }
}

//action THUNK Delete Data

export function thunkDelPost(id){
    return (dispatch) => {
        return delPostApi(id)
        .then(() => {
            dispatch(delPost(id))
        })
    }
}