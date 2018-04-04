import React, { Component } from 'react';

import Header from './Header/Header';
import Main from './Main/Main';

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
      </div>
    )
  }
}

export default App;