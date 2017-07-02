import React from 'react'

export default class Drawer extends React.Component {
  constructor(props) {
    super(props)

    this.canvasWidth = 300
    this.canvasHeight = 300
    this.currentImage = null
    this.images = {}
  }

  componentDidMount() {
    this.drawerCanvas = document.getElementById('drawer-canvas')
    this.canvasContext = this.drawerCanvas.getContext('2d')
  }

  updateWindowSize(width, height) {
    this.canvasWidth = width
    this.canvasHeight = height
    this.drawerCanvas.setAttribute('width', width.toString())
    this.drawerCanvas.setAttribute('height', height.toString())

    this.drawImage()
  }

  // Preload Images
  // @params image
  // [{ key: "KEY", path: Path }]
  loadImages(imgs, onComplete = null) {
    for (let v of imgs) {
      let img = new Image()
      this.images[v.key] = {
        path: v.path,
        image: img,
        loaded: false
      }
      img.src = v.path

      img.onload = () => {
        this.images[v.key].loaded = true
        console.log("Loaded " + v.key)

        if (Object.keys(this.images).every(k => this.images[k].loaded === true)) {
          if (onComplete) {
            onComplete()
          }
        }
      }
    }
  }

  clearPreloadImages() {
    this.images = {}
  }

  drawTargetImage(key) {
    let image = this.images[key]
    if (!image) {
      console.log("Image Not Found " + key)
      return
    }

    this.currentImage = image
    this.drawImage()
  }

  drawImage() {
    if (this.currentImage) {
      this.canvasContext.drawImage(this.currentImage.image, 0, 0, this.canvasWidth, this.canvasHeight)
    }
  }

  render() {
    return (
      <div>
        <canvas id="drawer-canvas"></canvas>
      </div>
    )
  }
}