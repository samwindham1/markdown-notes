import React, { Component } from 'react';

class Title extends Component {
  render() {
    const style = {
      width: '100%',
      fontSize: 28,
      height: 72,
      lineHeight: '72px',
    }

    return (
      <div id="title" className="col-8">
        <div style={style}>
          {this.props.text}
        </div>
      </div>
    )
  }
}

export default Title;