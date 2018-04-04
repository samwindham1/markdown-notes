import React, { Component } from 'react';

class Note extends Component {
  render() {
    const noteStyle = {
      width: '100%',
      height: '100%'
    }
    return (
      <div id="main" style={noteStyle}>
        <span>Note</span>
      </div>
    )
  }
}

export default Note;