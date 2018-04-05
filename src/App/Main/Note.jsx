import React, { Component } from 'react';
import Line from './Line';
import ApiService  from '../Services/api.service';

class Note extends Component {
  render() {
    const id = 'note-1';
    const data = ApiService.get(id);
    console.log(data);
    var lines = [];
    data.lines.map(line => {
      lines.push(<Line text={line}/>);
    });

    const noteStyle = {
      width: '100%',
      padding: 12
    }
    return (
      <div id="main" style={noteStyle}>
        {lines}
      </div>
    )
  }
}

export default Note;