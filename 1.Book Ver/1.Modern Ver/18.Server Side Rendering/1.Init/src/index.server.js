// css이전
// import React from 'react';
// import ReactDomServer from 'react-dom/server';
// import express from 'express';
// import {StaticRouter} from 'react-router-dom';
// import App from './App';
// //css 정적 파일 제공
// import path from 'path';
// import fs from 'fs';

// const app = express();

// const serverRender=(req,res,next)=>{
//   const context={};
//   const jsx=(
//     <StaticRouter location={req.url} context={context}>
//       <App/>
//     </StaticRouter>
//   )
//   const root = ReactDomServer.renderToString(jsx)
//   res.send(root);
// }

// //무조건 이 위치 순서
// const serve = express.static(path.resolve('./butild'),{
//   index:false// "/"경로 index.html 안보여주기 위함
// })
// app.use(serve);
// app.use(serverRender);

// app.listen(5000,()=>{
//   console.log('Server Start');
// })

// css 적용
import React from 'react';
import ReactDomServer from 'react-dom/server';
import express from  'express';
import {StaticRouter} from 'react-router-dom';
import App from './App';
import path from 'path';
import fs from 'fs';

const manifest = JSON.parse(
  fs.readFileSync(path.resolve('./build/asset-manifest.json'), 'utf-8')
);

const chunks = Object.keys(manifest.files)
  .filter(key => /chunk\.js$/.exec(key)) // chunk.js로 끝나는 키를 찾아서
  .map(key => `<script src="${manifest.files[key]}"></script>`) // 스크립트 태그로 변환하고
  .join(''); // 합침

function createPage(root, tags) {
  return `<!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="utf-8" />
      <link rel="shortcut icon" href="/favicon.ico" />
      <meta
        name="viewport"
        content="width=device-width,initial-scale=1,shrink-to-fit=no"
      />
      <meta name="theme-color" content="#000000" />
      <title>React App</title>
      <link href="${manifest.files['main.css']}" rel="stylesheet" />
    </head>
    <body>
      <noscript>You need to enable JavaScript to run this app.</noscript>
      <div id="root">
        ${root}
      </div>
      <script src="${manifest.files['runtime-main.js']}"></script>
      ${chunks}
      <script src="${manifest.files['main.js']}"></script>
    </body>
    </html>
      `;
}

const app = express();

const serverRender=(req,res,err)=>{
  const context={};
  const jsx =(
    <StaticRouter location={req.url} context={context}>
      <App/>
    </StaticRouter>
  )
  const root = ReactDomServer.renderToString(jsx);
  //res.send(root);
  res.send(createPage(root));
}

//static 미들웨어 사용하여 서버 통하여 build js,css파일 접근
const serve = express.static(path.resolve('./build'),{
  index:false// "/"경로 index.html 안보이도록 설정
})

app.use(serve);
app.use(serverRender);

app.listen(5000,()=>{
  console.log('Running on http://localhost:5000');
})
