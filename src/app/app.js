import React, { Component } from 'react';

import Header from './header/header';
import Main from './main/main';
import Footer from './footer/footer';

class App extends Component {
  render() {
    const appStyle = {
      height: '100%',
      width: '100%',
      position: 'relative'
    }
    return (
      <div id="app" style={appStyle}>
        <Header/>
        <Main/>
        <Footer/>
      </div>
    )
  }
}

export default App;