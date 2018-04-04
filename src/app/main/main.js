import React, { Component } from 'react';

class Main extends Component {
  render() {
    const mainStyle = {
      position: 'absolute',
      top: '72px',
      bottom: '72px',
      left: '0',
      right: '0'
    }
    const containerStyle = {
      height: '100%',
      width: '85%',
      margin: '0 auto',
      borderLeft: 'solid 1px black',
      borderRight: 'solid 1px black',
    }

    return (
      <div id="main" style={mainStyle}>
        <div className="container" style={containerStyle}>
          Main
        </div>
      </div>
    )
  }
}

export default Main;