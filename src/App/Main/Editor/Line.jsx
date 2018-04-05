import React, { Component } from 'react';
import style from './Line.css';
import marked from 'marked';

class Line extends Component {
  render() {
    const line = this.props.text ? marked(this.props.text): '<br/>';

    return (
      <div className={style.line} dangerouslySetInnerHTML={{__html: line}}></div>
    )
  }
}

export default Line;