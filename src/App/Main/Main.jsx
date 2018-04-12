import React, { Component } from 'react';
import style from './Main.css';
import Title from './Title';
import MdEditor from './Editor/MdEditor';

class Main extends Component {
  constructor() {
    super();
    this.state = {note: 'note-1'}
  }

  render() {
    return (
      <div id="main" className={style.main}>
        <Title text={'Note 1'} />
        <div className={style.container}>
          <MdEditor id={this.state.note}/>
        </div>
      </div>
    )
  }
}

export default Main;