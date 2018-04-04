import React, { Component } from 'react';

class Footer extends Component {
  render() {
    const footerStyle = {
      borderTop: 'solid 1px black',
      height: '72px',
      width: '100%',
      position: 'absolute',
      bottom: '0',
      left: '0'
    }

    return (
      <header id="header" style={footerStyle}>
        Footer
      </header>
    )
  }
}

export default Footer;