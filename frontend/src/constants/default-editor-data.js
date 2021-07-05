const editorData = {
  time: 1625419654206,
  blocks: [
    {
      id: "Gk3lLmtUKK",
      type: "header",
      data: {
        text: "Editor.js",
        level: 2,
      },
    },
    {
      id: "EbMFruqFkj",
      type: "paragraph",
      data: {
        text: "Hey. Meet the new Editor. On this page you can see it in action — try to edit this text.",
      },
    },
    {
      id: "wkMOfchCyK",
      type: "header",
      data: {
        text: "Key features",
        level: 3,
      },
    },
    {
      id: "LI9ac5KDMr",
      type: "header",
      data: {
        text: "What does it mean «block-styled editor»",
        level: 3,
      },
    },
    {
      id: "sCLaihn1Kh",
      type: "paragraph",
      data: {
        text: 'Workspace in classic editors is made of a single contenteditable element, used to create different HTML markups. Editor.js <mark class="cdx-marker">workspace consists of separate Blocks: paragraphs, headings, images, lists, quotes, etc</mark>. Each of them is an independent contenteditable element (or more complex structure) provided by Plugin and united by Editor\'s Core.',
      },
    },
    {
      id: "1mmpnunFTw",
      type: "paragraph",
      data: {
        text: 'There are dozens of <a href="https://github.com/editor-js">ready-to-use Blocks</a> and the <a href="https://editorjs.io/creating-a-block-tool">simple API</a> for creation any Block you need. For example, you can implement Blocks for Tweets, Instagram posts, surveys and polls, CTA-buttons and even games.',
      },
    },
    {
      id: "DUY2eFIYTo",
      type: "header",
      data: {
        text: "What does it mean clean data output",
        level: 3,
      },
    },
    {
      id: "2kPOjEGdef",
      type: "paragraph",
      data: {
        text: "Classic WYSIWYG-editors produce raw HTML-markup with both content data and content appearance. On the contrary, Editor.js outputs JSON object with data of each Block. You can see an example below",
      },
    },
    {
      id: "2unMr2VF3A",
      type: "paragraph",
      data: {
        text: 'Given data can be used as you want: render with HTML for <code class="inline-code">Web clients</code>, render natively for <code class="inline-code">mobile apps</code>, create markup for <code class="inline-code">Facebook Instant Articles</code> or <code class="inline-code">Google AMP</code>, generate an <code class="inline-code">audio version</code> and so on.',
      },
    },
    {
      id: "WIXvieq9qd",
      type: "paragraph",
      data: {
        text: "Clean data is useful to sanitize, validate and process on the backend.",
      },
    },
    {
      id: "bIWF7IHMxJ",
      type: "paragraph",
      data: {
        text: "We have been working on this project more than three years. Several large media projects help us to test and debug the Editor, to make it's core more stable. At the same time we significantly improved the API. Now, it can be used to create any plugin for any task. Hope you enjoy. 😏",
      },
    },
  ],
  version: "2.22.0",
};

export const DEFAULT_INITIAL_DATA = () => {
    return {
      time: new Date().getTime(),
      blocks: [
        {
          type: "header",
          data: {
            text: "🛠 Edit your heading here",
          },
        },
        {
          type: "image",
          data: {
            file: {
              url: "https://dl.airtable.com/.attachments/a14fd3e7d48d08d16ce0d239fef8fe4a/22bba894/Frame1.png",
            },
            caption: "🎮 Happy Hacking! 🕹",
            withBorder: false,
            stretched: false,
            withBackground: false,
          },
        },
        {
          type: "paragraph",
          data: {
            text: "Start typing your content and have fun writing 😉 ... ",
          },
        },
        {
          type: "paragraph",
          data: {
            text: "👋 Welcome! Here is everything you need to know about hacking at HackMoney. We are really excited to have you here with us! Please feel free to reach out to us via 📧 hello@ethglobal.co if you are unable to stake for any valid financial reasons. We are happy to discuss a solution for you!",
          },
        },
      ],
    };
  };


export default editorData;