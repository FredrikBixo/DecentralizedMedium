import { default as React } from "react";
import PropTypes from 'prop-types';
import EditorJs from "react-editor-js";
import Header from "@editorjs/header";
import Link from "@editorjs/link";
import RawTool from "@editorjs/raw";
import SimpleImage from "@editorjs/simple-image";
import Quote from "@editorjs/quote";
import Embed from "@editorjs/embed";
import Table from "@editorjs/table";
import Paragraph from "@editorjs/paragraph";
import Underline from "@editorjs/underline";
import defaultData from "../../constants/default-editor-data";

const tools = {
  header: Header,
  paragraph: {
    class: Paragraph,
    inlineToolbar: true,
  },
  link: Link,
  raw: RawTool,
  image: SimpleImage,
  quote: Quote,
  embed: {
    class: Embed,
    config: {
      services: {
        youtube: true,
        coub: true,
      },
    },
  },
  table: {
    class: Table,
    inlineToolbar: true,
    config: {
      rows: 2,
      cols: 3,
    },
  },
  underline: Underline,
  /**
   * We won't be integrating images as yet. This will requires us to first store the image in ipfs,
   * get the hash and then use that hash in the blocks. Hence for now, we will just go with plain text integration
   */
  // image: {
  //   class: ImageTool,
  //   config: {
  //     endpoints: {
  //       byFile: "http://localhost:8008/uploadFile",
  //       byUrl: "http://localhost:8008/fetchUrl",
  //     },
  //   },
  // },
};

const Editor = ({ ejInstance }) => {
  const [editorData, setEditorData] = React.useState(defaultData);

  const onChangeHandler = async () => {
    const content = await ejInstance.current?.saver?.save();
    console.log(content, "***");
    setEditorData(content);
  };

  return (
    <EditorJs
      autofocus
      instanceRef={(instance) => (ejInstance.current = instance)}
      data={editorData}
      onChange={onChangeHandler}
      tools={tools}
    />
  );
};

Editor.propTypes = {
  ejInstance: PropTypes.objectOf(PropTypes.shape).isRequired,
}

export default Editor;
