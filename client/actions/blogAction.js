
import { getPostApi, addPostApi } from "../apis/blogApi"

export const SHOW_POST = 'SHOW_POST'
export const ADD_POST = 'ADD_POST'

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
            console.log(data, 'from thunk')
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

export function thunkAddPost(){
    return (dispatch) => {
        return addPostApi()
        .then((data) => {
            // console.log(data, 'from thunk')
            dispatch(addPost(data))
        })
    }
}