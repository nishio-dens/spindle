import React from 'react'

export default class Drawer extends React.Component {
  constructor(props) {
    super(props)

    this.canvasWidth = 300
    this.canvasHeight = 300
    this.currentImage = null
    this.images = null
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
  preloadImages(imgs) {
    if (this.images === null) {
      this.images = {}
    }
    for (let v of imgs) {
      let img = new Image()
      img.path = img
      this.images[v.key] = {
        path: v.path,
        image: image,
        loaded: false
      }
      img.onload = () => {
        this.images[v.key].loaded = true
      }
    }
  }

  clearPreloadImages() {
    this.images = null
  }

  drawImage(key) {
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
      this.canvasContext.drawImage(image.image, 0, 0, 300, 300)
    }
    console.log("DRAW " + this.canvasWidth + " " + this.canvasHeight)
  }

  render() {
    return (
      <div>
        <canvas id="drawer-canvas"></canvas>
      </div>
    )
  }
}