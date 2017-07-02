import React, {Component} from 'react'
import {} from './styles/global.scss'

export default class App extends Component {
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

        <div className="window-content">
          <div className="pane-group">
            <div className="pane-sm sidebar">
              <div className="pane">
                <table className="table-striped">
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

            <div className="pane">
              Main
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
