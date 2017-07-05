import Immutable from "immutable";

import {
  FILE_GROUP_ADD
} from '../actions/files'

const initialState = Immutable.Map({
  groups: Immutable.List()
});

export default function files(state = initialState, action) {
  switch(action.type) {
    case FILE_GROUP_ADD:
      return state.update('groups', list => {
        let newItems = list.concat(Immutable.List([action.group]));
        return newItems;
      });
    default:
      return state;
  }
}