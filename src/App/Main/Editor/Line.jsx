import React, { Component } from 'react';
import style from './Line.css';

class Line extends Component {
  render() {
    const line = this.props.text ? this.props.text: <span>&nbsp;</span>;

    return (
      <div className={style.line}>
        {line}
      </div>
    )
  }
}

export default Line;