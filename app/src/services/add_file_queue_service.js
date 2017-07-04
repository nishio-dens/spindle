import {addFileGroup} from '../actions/files'

export default class AddFileQueueService {
  constructor(dispatch) {
    this.dispatch = dispatch
  }

  execute(files) {
    // TODO:
    // support dir
    // support zip
    // implements file group
    for (var file of files) {
      this.dispatch(addFileGroup(file))
    }
  }
}