import React, { Component } from 'react';
import { Editor, EditorState, ContentState, convertFromHTML, RichUtils, Modifier } from 'draft-js';
import marked from 'marked';

import ApiService from 'Services/api.service';

import style from './MdEditor.css';

class MdEditor extends Component {
  constructor(props) {
    super(props);

    this.data = ApiService.get(props.id);
    this.markup = marked(this.data.text, {'gfm': true});
    console.log(props.id, this.data, this.markup);

    this.state = { editorState: this.parseContent() };
    this.onChange = this.onChange.bind(this);
  }

  onChange(editorState) {
    const selectionState = editorState.getSelection();
    const startKey = selectionState.getStartKey();

    const currentContent = editorState.getCurrentContent();

    const blockIndex = currentContent.getBlockMap()
      .keySeq().findIndex(k => k == startKey);

    const markupText = this.data.text.split('\n').filter(line => {
      return line !== '';
    })[blockIndex];

    editorState = RichUtils.toggleBlockType(editorState, 'unstyled');
    // console.log(markupText);
    // const entityKey = currentContent.getBlockForKey(startKey).getText();
    const contentState = Modifier.replaceText(currentContent, selectionState, markupText);
    // const currentEntity = currentContent.getEntity(entityKey);
    // const contentState = currentContent.replaceEntityData(entityKey, {text: markupText})
    editorState = EditorState.push(editorState, contentState);
    this.setState({ editorState });
  }

  parseContent() {
    const blocksFromHTML = convertFromHTML(this.markup);
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