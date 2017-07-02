import React from 'react'

export default class Drawer extends React.Component {
  constructor(props) {
    super(props)

    this.canvasWidth = 300
    this.canvasHeight = 300
  }

  componentDidMount() {
    this.drawerCanvas = document.getElementById('drawer-canvas')
  }

  updateWindowSize(width, height) {
    this.canvasWidth = width
    this.canvasHeight = height
    this.drawerCanvas.setAttribute('width', width.toString())
    this.drawerCanvas.setAttribute('height', height.toString())

    this.drawImage()
  }

  loadImage(imagePath) {
  }

  preloadImages(imagePaths) {
  }

  clearImages() {
  }

  drawImage() {
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