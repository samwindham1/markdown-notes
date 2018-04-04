import React, { Component } from 'react';
import btn from './Button.css';

class Button extends Component {

  render() {
    return (
      <div className={this.props.border? btn.border: btn.default}>
        {this.props.label}
      </div>
    )
  }
}

export default Button;