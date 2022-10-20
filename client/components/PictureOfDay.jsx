import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'


import { thunkDog } from '../actions/pictureAction'



function PictureOfDay() {

    const picture = useSelector((store)=> store.picture)
    console.log(picture, 'from day component')
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(thunkDog)
    })

  return (
    <>
   
    <div>
        <p>Using some external Apis here is a range of images for today</p>
    </div>
    <div >
        <img src={picture?.message} alt='dog'/>

    </div>
    </>
  )
}

export default PictureOfDay