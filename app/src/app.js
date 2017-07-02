import React, {Component} from 'react'
import {} from './styles/global.scss'

const remote = require('electron').remote
const nodePath = require('path')

export default class App extends Component {
  constructor(props) {
    super(props)

    this.updateWindowSize = this.updateWindowSize.bind(this)
  }

  componentDidMount() {
    // stop drag and drop
    document.ondragover = document.ondrop = (e) => {
      e.preventDefault()
      return false
    }

    // drag
    let imagePanel = document.getElementById('main-window-image-panel')
    imagePanel.ondragover = () => {
      return false
    }
    imagePanel.onDragend = () => {
      return false
    }
    let that = this
    imagePanel.ondrop = (e) => {
      e.preventDefault()
      const file = e.dataTransfer.files[0]
      const path = nodePath.resolve(file.path)
      console.log(path)

      let canvas = document.getElementById('main-window-canvas')
      var ctx = canvas.getContext('2d')
      var img = new Image()
      img.src = path
      that.img = img
      img.onload = () => {
        ctx.drawImage(img, 0, 0, 300, 150)
      }

      return false
    }
    this.openMenu()

    // resize
    window.addEventListener('resize', this.updateWindowSize)
    this.updateWindowSize()
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateWindowSize)
  }

  openMenu() {
    const Menu = remote.Menu;
    const MenuItem = remote.MenuItem;
    var menu = new Menu();
    menu.append(new MenuItem({
      label: 'Menu',
      accelerator: '1',
      click: function() {
        alert('Hello Menu');
      }
    }));
    menu.append(new MenuItem({
      label: 'SubMenu',
      submenu: [
        {
          label: '1'
        },
      ]
    }));

    document.getElementById('main-window-sidebar-queue').addEventListener('contextmenu', function (e) {
      e.preventDefault()
      menu.popup(remote.getCurrentWindow())
    }, false)
  }

  updateWindowSize() {
    const mainWindow = document.getElementById('main-window-content')
    const canvas = document.getElementById('main-window-canvas')
    let { offsetWidth, offsetHeight } = mainWindow
    offsetWidth = offsetWidth - 220 // TODO: fixme
    console.log(`${offsetWidth} ${offsetHeight}`)
    canvas.setAttribute('width', offsetWidth.toString())
    canvas.setAttribute('height', offsetHeight.toString())

    let ctx = canvas.getContext('2d')
    ctx.fillStyle = 'black'
    ctx.fillRect(0, 0, canvas.width, canvas.height)

    console.log(`canvas size ${canvas.width} ${canvas.height}`)

    ctx.drawImage(this.img, 0, 0, offsetWidth, offsetHeight)
  }

  render() {
    return (
      <div className="window">
        <header className="toolbar toolbar-header draggable">
          <h1 className="title">Spindle</h1>

          <div className="toolbar-actions">

            <div className="btn-group">
              <button className="btn btn-default active">
                <span className="icon icon-database icon-text"></span>
                Queue
              </button>
            </div>

            <div className="btn-group">
              <button className="btn btn-default">
                <span className="icon icon-up-bold"></span>
              </button>
              <button className="btn btn-default">
                <span className="icon icon-down-bold"></span>
              </button>
              <button className="btn btn-default">
                <span className="icon icon-to-start"></span>
              </button>
              <button className="btn btn-default">
                <span className="icon icon-fast-backward"></span>
              </button>
              <button className="btn btn-default">
                <span className="icon icon-left-bold"></span>
              </button>
              <button className="btn btn-default">
                <span className="icon icon-right-bold"></span>
              </button>
              <button className="btn btn-default">
                <span className="icon icon-fast-forward"></span>
              </button>
              <button className="btn btn-default">
                <span className="icon icon-to-end"></span>
              </button>
            </div>
          </div>
        </header>

        <div className="window-content" id="main-window-content">
          <div className="pane-group">
            <div className="pane-sm sidebar">
              <div className="pane">
                <table className="table-striped" id="main-window-sidebar-queue">
                  <thead>
                  <tr>
                    <th>Filename</th>
                  </tr>
                  </thead>
                  <tbody>
                  <tr>
                    <td>photon.css</td>
                  </tr>
                  <tr>
                    <td>photon.css</td>
                  </tr>
                  <tr>
                    <td>photon.css</td>
                  </tr>
                  <tr>
                    <td>photon.cssテスト日本語とても長い文章.testtest.jpg</td>
                  </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div className="pane hidden-pane" id="main-window-image-panel">
              <canvas id="main-window-canvas"></canvas>
            </div>
          </div>
        </div>

        <footer className="toolbar toolbar-footer">
          <h1 className="title">Footer</h1>
        </footer>

      </div>
   )
  }
}
