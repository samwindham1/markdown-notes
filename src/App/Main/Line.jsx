import React, { Component } from 'react';

class Line extends Component {
  render() {
    const style = {
      marginTop: 6,
      marginBottom: 6
    }
    const line = this.props.text.length ? this.props.text: <span>&nbsp;</span>;

    return (
      <div style={style}>
        {line}
      </div>
    )
  }
}

export default Line;