import { combineReducers } from 'redux'

// import stuff from './stuff'
import picture from './pictureRedu'
import blog from './blogRedu'
import auth from './auth'

export default combineReducers({
  // stuff
  picture,
  blog,
  auth

})
