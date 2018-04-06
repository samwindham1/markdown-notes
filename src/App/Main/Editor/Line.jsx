import React, { Component } from 'react';
import style from './Line.css';
import marked from 'marked';

class Line extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: this.props.text,
      html: this.parseMarkdown(this.props.text)
    };
    this.focusLine = this.focusLine.bind(this);
    this.blurLine = this.blurLine.bind(this);
    this.keypress = this.keypress.bind(this);
    this.clickLine = this.clickLine.bind(this);
  }

  parseMarkdown(line) {
    return line ? marked(line.replace(/<br\/?>/ig, '\n')) : '<br/>';
  }
  parseText(line) {
    return line.replace(/\n/ig, '<br/>');
  }

  keypress(event) {
    if(event.keyCode == 40) {
      console.log("down");
      this.blurLine(event);
      event.target.blur();
    }
  }
  clickLine(event) {
    event.preventDefault();
    event.stopPropagation();
  }

  keepFocus(target) {
    target.focus();
  }
  focusLine(event) {
    event.preventDefault();
    event.stopPropagation();
    this.setState({ html: this.parseText(this.state.text)});
  }
  blurLine(event) {
    this.setState({
      text: event.target.innerHTML,
      html: this.parseMarkdown(event.target.innerHTML)
    });
  }


  render() {
    return (
      <div className={style.line} dangerouslySetInnerHTML={{__html: this.state.html}}
        onFocus={this.focusLine} onBlur={this.blurLine} onKeyDown={this.keypress} onClick={this.clickLine}
        tabIndex="0"
      >
      </div>
    )
  }
}

export default Line;