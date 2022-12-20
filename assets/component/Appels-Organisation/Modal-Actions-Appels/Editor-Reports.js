import React, { useRef, useEffect } from "react";
import SunEditor, { buttonList } from "suneditor-react";
import plugins from "suneditor/src/plugins";
import { templates } from "suneditor/src/plugins";
import "suneditor/src/assets/css/suneditor.css";

const Editor = (props) => {
  const editor = useRef();

  const defaultValueRapport = "";
  // The sunEditor parameter will be set to the core suneditor instance when this function is called
  const handleOnResizeEditor = (height, prevHeight) => {
    console.log(height, prevHeight);
  };

  const onChangeEditor = (contents, core) => {
    console.log(contents, core);
    props.onChange(contents);
  };
  return (
    <div>
      <SunEditor
        code="fr"
        defaultValue={props.content ? props.content : defaultValueRapport}
        lang="fr"
        onChange={onChangeEditor}
        setOptions={{
          height: 200,
          plugins: plugins,
          buttonList: [
            ["undo", "redo"],
            ["font", "fontSize", "formatBlock"],
            ["paragraphStyle", "blockquote"],
            [
              "bold",
              "underline",
              "italic",
              // "strike",
              // "subscript",
              // "superscript",
            ],
            ["fontColor", "hiliteColor", "textStyle"],
            // ["removeFormat"],
            // "/", // Line break
            // ["outdent", "indent"],
            // ["align", "horizontalRule", "list", "lineHeight"],
            // ["table", "link", "image", "audio" /** ,'math' */], // You must add the 'katex' library at options to use the 'math' plugin.
            /** ['imageGallery'] */ // You must add the "imageGalleryUrl".
            ["fullScreen"],
            ["print"],
            // ["save", "template"],
            /** ['dir', 'dir_ltr', 'dir_rtl'] */ // "dir": Toggle text direction, "dir_ltr": Right to Left, "dir_rtl": Left to Right
          ],
        }}
        setAllPlugins={true}
        setDefaultStyle="font-family: Arial; font-size: 15px;"
        onResizeEditor={handleOnResizeEditor}
      />
    </div>
  );
};
export default Editor;
