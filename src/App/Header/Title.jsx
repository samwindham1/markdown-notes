import React, { Component } from 'react';

class Title extends Component {
  render() {
    const style = {
      fontSize: 36,
      marginLeft: 72,
      height: '100%',
      lineHeight: '72px',
      textAlign: 'center'
    }

    return (
      <div id="title" style={style}>
        {this.props.text}
      </div>
    )
  }
}

export default Title;