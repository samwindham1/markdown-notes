import React, { Component } from 'react';
import style from './Main.css';
import Editor from './Editor/Editor';

class Main extends Component {
  render() {

    return (
      <div id="main" className={style.main}>
        <div className="container" className={style.container}>
          <Editor />
        </div>
      </div>
    )
  }
}

export default Main;