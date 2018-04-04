import React, { Component } from 'react';
import Button from '../Components/Button';

class BackButton extends Component {
  render() {
    const style = {
      position: 'relative',
      float: 'left',
      marginLeft: 24,
      marginTop: 7,
      fontSize: 36
    }
    const icon = <i class="fa fa-chevron-left"></i>;

    function handleClick() {
      console.log('Back Clicked!');
    }

    return (
      <div id="back" style={style} onClick={handleClick}>
        <Button label={icon}/>
      </div>
    )
  }
}

export default BackButton;