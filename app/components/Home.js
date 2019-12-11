// @flow
import React, { Component } from 'react';
import { Editor, EditorState } from 'draft-js';
import { Link } from 'react-router-dom';

type Props = {};

export default class Home extends Component<Props> {
  constructor(props) {
    super(props);
    this.state = { editorState: EditorState.createEmpty() };
  }

  handleChange = editorState => {
    this.setState({ editorState });
  };

  render() {
    return (
      <div style={{ height: '500px' }}>
        <Link style={{ color: 'black  ' }} to="/notes">
          all notes
        </Link>
        <Editor
          // eslint-disable-next-line
          editorState={this.state.editorState}
          onChange={this.handleChange}
        />
      </div>
    );
  }
}
