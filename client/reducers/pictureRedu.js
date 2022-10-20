import { SHOW_DOG } from '../actions/pictureAction'

export default function reducer(state = [], action) {
  const { type, payload } = action
  switch (type) {
    case SHOW_DOG:
      return payload
    default:
      return state
  }
}