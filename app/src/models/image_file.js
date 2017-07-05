import Immutable from 'immutable'

const ImageFileRecord = Immutable.Record({
  path: "",
  image: null,
  loaded: false
});

export default class ImageFile extends ImageFileRecord {
  constructor(args) {
    super(args)
  }
}
