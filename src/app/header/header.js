import React, { Component } from 'react';

class Header extends Component {
  render() {
    const headerStyle = {
      borderBottom: 'solid 1px black',
      height: '72px',
      width: '100%',
      position: 'absolute',
      top: '0',
      left: '0'
    }

    return (
      <header id="header" style={headerStyle}>
        Header
      </header>
    )
  }
}

export default Header;