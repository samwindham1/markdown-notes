import React, { Component } from 'react';
import Editor from './Editor';

class Main extends Component {
  render() {
    const mainStyle = {
      position: 'absolute',
      top: 72,
      bottom: 0,
      left: 0,
      right: 0,
      overflowY: 'auto'
    }
    const containerStyle = {
      width: '85%',
      margin: '0 auto',
    }

    return (
      <div id="main" style={mainStyle}>
        <div className="container" style={containerStyle}>
          <Editor />
        </div>
      </div>
    )
  }
}

export default Main;