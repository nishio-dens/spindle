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
        this.images[v.key].width = img.width
        this.images[v.key].height = img.height

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
      this.canvasContext.fillStyle = 'black'
      this.canvasContext.fillRect(0, 0, this.canvasWidth, this.canvasHeight)

      const rect = this._fitWindowRect(this.currentImage, this.canvasWidth, this.canvasHeight)
      this.canvasContext.drawImage(
        this.currentImage.image,
        rect.x, rect.y,
        rect.width, rect.height
      )
    } else {
      this.canvasContext.fillStyle = 'black'
      this.canvasContext.fillRect(0, 0, this.canvasWidth, this.canvasHeight)
    }
  }

  _fitWindowRect(iobj, canvasWidth, canvasHeight) {
    let { width, height } = iobj
    let drawWidth, drawHeight, x, y

    if ( width < height ) {
      drawWidth = width * (canvasHeight / height)
      drawHeight = canvasHeight
      if (drawWidth > canvasWidth) {
        drawWidth = drawWidth
        drawHeight = drawHeight * (canvasHeight / drawHeight)
        x = 0
        y = (canvasHeight - drawHeight) / 2.0
      } else {
        x = (canvasWidth - drawWidth) / 2.0
        y = 0
      }
    } else {
      drawWidth = canvasWidth
      drawHeight = height * (canvasWidth / width)
      if (drawHeight > canvasHeight) {
        drawWidth = drawWidth * (canvasHeight / drawHeight)
        drawHeight = canvasHeight
        x = (canvasWidth - drawWidth) / 2.0
        y = 0
      } else {
        x = 0
        y = (canvasHeight - drawHeight) / 2.0
      }
    }

    return {
      x: x,
      y: y,
      width: drawWidth,
      height: drawHeight
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