import Immutable from 'immutable'

const FileGroupRecord = Immutable.Record({
  name: "",
  image_files: Immutable.List([])
});

export default class FileGroup extends FileGroupRecord {
  constructor(args) {
    super(args);
  }
}