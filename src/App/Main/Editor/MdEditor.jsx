import React, { Component } from 'react';
import { Editor, EditorState, ContentState, convertFromHTML } from 'draft-js';
import marked from 'marked';

import ApiService from 'Services/api.service';

import style from './MdEditor.css';

class MdEditor extends Component {
  constructor(props) {
    super(props);

    this.data = ApiService.get(props.id);
    console.log(props.id, this.data);

    this.state = { editorState: this.parseContent() };
    this.onChange = (editorState) => this.setState({editorState})
  }

  parseContent() {
    const markup = marked(this.data.text);
    const blocksFromHTML = convertFromHTML(markup);
    const state = ContentState.createFromBlockArray(
      blocksFromHTML.contentBlocks,
      blocksFromHTML.entityMap
    )
    const eState = EditorState.createWithContent(state);

    return eState;
  }

  render() {
    return (
      <div className='col-8' >
        <div className={style.editor} >
          <Editor editorState={this.state.editorState} onChange={this.onChange} />
        </div>
      </div>
    )
  }
}

export default MdEditor;