import React, { Component } from 'react';
import Line from './Line';
import style from './Editor.css';
import ApiService  from '../Services/api.service';

class Editor extends Component {
  render() {
    const id = 'note-1';
    const data = ApiService.get(id);
    console.log(data);
    var lines = [];
    data.lines.map((line, i) => {
      lines.push(<Line text={line} key={i}/>);
    });

    return (
      <div id={'editor__' + data.id} className={style.editor} contentEditable="true" suppressContentEditableWarning="true">
        {lines}
        <Line />
      </div>
    )
  }
}

export default Editor;