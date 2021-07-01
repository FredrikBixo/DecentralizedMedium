import { default as React, useEffect, useRef } from 'react';
import EditorJS from '@editorjs/editorjs';
import Header from '@editorjs/header';
import Link from '@editorjs/link';
import RawTool from '@editorjs/raw'; 
import SimpleImage from '@editorjs/simple-image';
import List from '@editorjs/list';
import Quote from '@editorjs/quote';
import Embed from '@editorjs/embed';
import Table from '@editorjs/table';
import Paragraph from '@editorjs/paragraph';
import Underline from '@editorjs/underline';
import ImageTool from '@editorjs/image';


const DEFAULT_INITIAL_DATA = () => {
  return {
    "time": new Date().getTime(),
    "blocks": [
      {
        "type": "header",
        "data": {
          "text": "🛠 Edit your heading here",
        }
      },
      {
        "type" : "image",
            "data" : {
                "file" : {
                    "url" : "https://dl.airtable.com/.attachments/a14fd3e7d48d08d16ce0d239fef8fe4a/22bba894/Frame1.png"
                },
                "caption" : "🎮 Happy Hacking! 🕹",
                "withBorder" : false,
                "stretched" : false,
                "withBackground" : false
            }
      },
      {
        "type": "paragraph",
        "data": {
          "text": "Start typing your content and have fun writing 😉 ... ",
        }
      },
      {
        "type": "paragraph",
        "data": {
          "text": "👋 Welcome! Here is everything you need to know about hacking at HackMoney. We are really excited to have you here with us! Please feel free to reach out to us via 📧 hello@ethglobal.co if you are unable to stake for any valid financial reasons. We are happy to discuss a solution for you!",
        }
      },
    ]
  }
}

const Editor = (props) => {
  const ejInstance = useRef();
  const [editorData, setEditorData] = React.useState(DEFAULT_INITIAL_DATA);
 
  useEffect(() => {
    if (!ejInstance.current) {
      initEditor();
    }
    return () => {
      ejInstance.current.destroy();
      ejInstance.current = null;
    }
  }, []);
 

  const initEditor = () => {
    const editor = new EditorJS({
      holder: 'EDITTOR_HOLDER_ID',
      logLevel: "ERROR",
      data: editorData,
      onReady: () => {
        ejInstance.current = editor;
      },
      onChange: async () => {
        let content = await this.editorjs.saver.save();
        // Put your logic here to save this data to your DB
        setEditorData(content);
      },
      autofocus: true,
      tools: { 
        header: Header, 
        paragraph: {
          class: Paragraph,
          inlineToolbar: true,},
        link: Link,
        raw: RawTool,
        image: SimpleImage,
        list: {
          class: List,
          inlineToolbar: true,},
        quote: Quote,
        embed: {
          class: Embed,
          config: {
            services: {
              youtube: true,
              coub: true}}},
        table: {
          class: Table,
          inlineToolbar: true,
          config: {
            rows: 2,
            cols: 3,}},
        underline: Underline,
        image: {
          class: ImageTool,
          config: {
            endpoints: {
              byFile: 'http://localhost:8008/uploadFile', 
              byUrl: 'http://localhost:8008/fetchUrl',
            }
          }
        }
      }, 
    });
  };
 
  return (
    <React.Fragment>
      <div id={'EDITTOR_HOLDER_ID'} />
    </React.Fragment>
  );
}

let btnSaves = document.getElementById("btnSaves");
btnSaves.addEventListener("click", () => {
  editor.save().then(outputData => {
    console.log(outputData);
  });
});

export default Editor;