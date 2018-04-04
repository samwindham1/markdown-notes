import React, { Component } from 'react';
import Note from './Note';

class Main extends Component {
  render() {
    const mainStyle = {
      position: 'absolute',
      top: 72,
      bottom: 0,
      left: 0,
      right: 0,
    }
    const containerStyle = {
      height: '100%',
      width: '85%',
      margin: '0 auto'
    }

    return (
      <div id="main" style={mainStyle}>
        <div className="container" style={containerStyle}>
          <Note />
        </div>
      </div>
    )
  }
}

export default Main;