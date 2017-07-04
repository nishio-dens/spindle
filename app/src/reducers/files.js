import Immutable from "immutable"

import {
  FILE_GROUP_ADD
} from '../actions/files'

const initialState = Immutable.Map()

export default function files(state = initialState, action) {
  switch(action.type) {
    case FILE_GROUP_ADD:
      // TODO: FIXME
      return state
    default:
      return state
  }
}