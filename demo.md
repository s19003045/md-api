```
npx create-react-app MD-PREVIEWER
cd MD-PREVIEWER
npm start
```

```
// with npm
npm install @material-ui/core
npm install @material-ui/icons

// with yarn
yarn add @material-ui/core
yarn add @material-ui/icons

```

```
// markdown parser
npm install markdown-it

// highlight.js => highlight markdown 中的程式碼
npm install highlight.js

// HTML to React parser => 把 html 文字格式轉成 html
// 格式嵌入在 React component 中
npm install html-react-parser

// 用來 fetch API
npm install axios

```

```jsx
// import markdown-it
import MarkdownIt from "markdown-it";
// import highlight.js
import hljs from "highlight.js";

// 設定 markdown-it 的參數
export const mdOpt = {
    html: true, // markdown 文字中可以放入 html tag
    xhtmlOut: false,
    breaks: true, // 遇到 "\n" 會轉成 <br>
    langPrefix: "language-", // CSS language prefix.
    // 這設定會結合 highlight 一起使用, 程式碼區塊的 className
    // 會像 "language-javascript", "language-html" 等
    linkify: true,
    typographer: true,
    quotes: "“”‘’",
    // highlight: highlight 程式碼, 使用 hljs 來 highlight.
    // 依據偵測到的 language(程式語言) 來套用特定的 className
    highlight: function (str, lang) {
        if (lang && hljs.getLanguage(lang)) {
            try {
                return hljs.highlight(lang, str).value;
            } catch (__) {}
        }

        return "";
    },
};

// 載入參數，設定實例
const md = MarkdownIt(mdOpt);
```

```javascript
//mdText.js
export const text = `

# Markdown syntax guide

## Headers

# This is a Heading h1
## This is a Heading h2 
###### This is a Heading h6

## Emphasis

*This text will be italic*  
_This will also be italic_

**This text will be bold**  
__This will also be bold__

_You **can** combine them_

## Lists

### Unordered

* Item 1
* Item 2
* Item 2a
* Item 2b

### Ordered

1. Item 1
1. Item 2
1. Item 3
  1. Item 3a
  1. Item 3b

## Blockquotes

> Markdown is a lightweight markup language

>> Markdown is often used to format readme files


## Bold
I am thin **I am bold** I am thin.


## Mark text with HTML tag 
I am thin \<mark\>I ame bold\<\/mark\>


## Line break
I am the first line.  
I am the second line .  


## Paragraph
I am first paragraph.

I ame the second paragraph.


## Javascript code

\`\`\`javascript
    let message = 'Hello world';
    alert(message);
\`\`\`


## HTML code

# safsdfad

\`\`\`html
    \<h1\>Hello world\<\/h1\>
\`\`\`

## Inline code

This web site is using \`markedjs/marked\`.

`;
```

```jsx

import MarkdownIt from "markdown-it";
import hljs from "highlight.js";
import parse from "html-react-parser";
// 載入 markdown 文字
import { text } from "./md/mdText";

// 把 markdown-it 的 config 搬到 config.js, 程式碼會乾淨一點
import { mdOpt } from "./config";
// 設定參數，建立 markdown-it 實例
const md = MarkdownIt(mdOpt);
// 將 markdown 文字 parse to html
const result = md.render(text);


// React function component
const MdDemo = () => {
    return (
        ...
            // 使用 parse() 把 html 文字轉成 html tag
            <div>{parse(result)}</div>
        ...
    )
}

export default MdDemo
```

```jsx
import MarkdownIt from "markdown-it";
import hljs from "highlight.js";
import parse from "html-react-parser";
import { text } from "./md/mdText";
// css
import "highlight.js/styles/github-dark.css";
```

```css
/* darTheme.css */
pre {
    background-color: #0d1117;
    padding: 30px 20px;
    border-radius: 10px;
}

code {
    color: #fff;
}
```

```css
/* md.css */
blockquote p {
    border-left: 5px grey solid;
    padding-left: 30px;
    font-weight: bold;
}
```

```jsx
// import css
import "highlight.js/styles/github-dark.css";
import "../../style/md/darkTheme.css";
import "../../style/md/md.css";
```
