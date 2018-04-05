import React, { Component } from 'react';

class Sidebar extends Component {
  render() {
    const style = {
      float: 'left',
      borderRight: 'solid 1px #eee',
      backgroundColor: '#fafafa',
      height: '100%',
      width: 72,
    }

    return (
      <div id="sidebar" style={style}>
      </div>
    )
  }
}

export default Sidebar;