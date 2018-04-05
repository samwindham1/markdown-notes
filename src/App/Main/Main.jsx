import React, { Component } from 'react';
import style from './Main.css';
import Title from './Title';
import Editor from './Editor/Editor';

class Main extends Component {
  render() {
    return (
      <div id="main" className={style.main}>
        <Title text={'Note 1'} />
        <div className="container" className={style.container}>
          <Editor />
        </div>
      </div>
    )
  }
}

export default Main;