import React, { Component } from "react";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";

class Editor extends Component {
  render() {
    return (
      <div className="App">
        <CKEditor
          editor={ClassicEditor}
          onReady={(editor) => {
            // You can store the "editor" and use when it is needed.

            console.log(this.props);
            editor.setData(this.props.content || this.props.contentText);
          }}
          onChange={(event, editor) => {
            const data = editor.getData();
            // contentText
            this.props.onChange(data);
          }}
          onBlur={(event, editor) => {}}
          onFocus={(event, editor) => {}}
        />
      </div>
    );
  }
}

export default Editor;
