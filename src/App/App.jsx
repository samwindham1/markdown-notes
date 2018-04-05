import React, { Component } from 'react';

import Sidebar from './Sidebar/Sidebar';
import Main from './Main/Main';

class App extends Component {
  render() {
    const appStyle = {
      height: '100%',
      width: '100%',
      display: 'flex'
    }
    return (
      <div id="app" style={appStyle}>
        <Sidebar/>
        <Main/>
      </div>
    )
  }
}

export default App;