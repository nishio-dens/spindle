import React from 'react';

import {} from '../styles/global.scss';
import Drawer from '../lib/drawer';

const remote = require('electron').remote;

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.updateWindowSize = this.updateWindowSize.bind(this);
    this.initializeDragAndDrop = this.props.initializeDragAndDrop.bind(this)
  }

  componentDidMount() {
    this.drawer = this.refs.drawer;

    this.initializeDragAndDrop();

    window.addEventListener('resize', this.updateWindowSize);
    this.updateWindowSize();

    this.initializeMenu();
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateWindowSize);
  }

  initializeMenu () {
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
      e.preventDefault();
      menu.popup(remote.getCurrentWindow())
    }, false)
  }

  updateWindowSize() {
    const mainWindow = document.getElementById('main-window-content');
    const sidebarWidth = 220; // FIXME
    let width, height;
    width = mainWindow.offsetWidth - sidebarWidth;
    height = mainWindow.offsetHeight;
    this.drawer.updateWindowSize(width, height);
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
              <Drawer ref="drawer" />
            </div>
          </div>
        </div>
      </div>
   )
  }
}
