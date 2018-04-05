import React, { Component } from 'react';
import BackButton from './BackButton';
import Title from './Title';

class Header extends Component {
  render() {
    const headerStyle = {
      borderBottom: 'solid 1px black',
      height: '72px',
      width: '100%',
      position: 'absolute',
      top: '0',
      left: '0',
      zIndex: 100
    }

    return (
      <header id="header" style={headerStyle}>
        <BackButton/>
        <Title text="Note Title"/>
      </header>
    )
  }
}

export default Header;