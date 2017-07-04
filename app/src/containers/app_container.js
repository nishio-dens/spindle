import { connect } from 'react-redux'

import App from '../components/app'
import AddFileQueueService from '../services/add_file_queue_service'

const nodePath = require('path')

const mapStateToProps = state => {
  return {
  }
}

const mapDispatchToProps = dispatch => ({
  initializeDragAndDrop() {
    // stop global drag and drop
    document.ondragover = document.ondrop = (e) => {
      e.preventDefault()
      return false
    }
    // setup image panel drag and drop
    let imagePanel = document.getElementById('main-window-image-panel')
    imagePanel.ondragover = () => { return false }
    imagePanel.onDragend = () => { return false }
    let that = this
    imagePanel.ondrop = (e) => {
      e.preventDefault()
      if (e.dataTransfer.files.length <= 0) {
        return
      }

      // FIXME: load files
      let preloadImages = []
      for (let i = 0; i < e.dataTransfer.files.length; i++) {
        const file = e.dataTransfer.files[i]
        preloadImages.push({
          key: nodePath.resolve(file.path),
          path: nodePath.resolve(file.path)
        })
      }
      const firstFile = e.dataTransfer.files[0]
      this.refs.drawer.loadImages(preloadImages, () => {
        let firstFileKey = nodePath.resolve(firstFile.path)
        that.refs.drawer.drawTargetImage(firstFileKey)
      })

      // FIXME:
      new AddFileQueueService(dispatch).execute(e.dataTransfer.files)
      return false
    }
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(App)