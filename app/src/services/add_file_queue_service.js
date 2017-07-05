import Immutable from "immutable";

import {addFileGroup} from '../actions/files';
import ImageFile from "../models/image_file";
import FileGroup from "../models/file_group";

const nodePath = require('path');

export default class AddFileQueueService {
  constructor(dispatch) {
    this.dispatch = dispatch;
  }

  execute(files) {
    for (var file of files) {
      // TODO:
      // support dir
      // support zip
      let filePath = new ImageFile({ path: nodePath.resolve(file.path) });
      let group = new FileGroup({
        name: file.name,
        image_files: Immutable.List([filePath])
      });

      this.dispatch(addFileGroup(group));
    }
  }
}