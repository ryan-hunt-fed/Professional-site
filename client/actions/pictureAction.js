import { getDogImageApi } from "../apis/pictureApi"

export const SHOW_DOG = 'SHOW_DOG'

//action
export function showDog(data) {
  
    return {
        type: SHOW_DOG,
        payload: data
    }
}

//action THUNK

export function thunkDog(){
    return (dispatch) => {
        return getDogImageApi()
        .then((data) => {
            console.log(data, 'from thunk')
            dispatch(showDog(data))
        })
    }
}