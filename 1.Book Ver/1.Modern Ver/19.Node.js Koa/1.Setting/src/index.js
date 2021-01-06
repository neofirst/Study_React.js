const Koa = require('koa');

const app = new Koa();

// http://localhost:4000/
// http://localhost:4000/?authorized=1
// next는 Promise 반환 then 후 처리 가능
// app.use((ctx,next)=>{
//   console.log(ctx.url);
//   console.log(1);
//   if(ctx.query.authorized !== '1'){
//     ctx.status=401;
//     return;
//   }
//   next().then(()=>{
//     console.log('Promise Call')
//   });
// })

// Promise 대신 async/await 사용
app.use(async(ctx,next)=>{
  console.log(ctx.url);
  console.log(1);
  if(ctx.query.authorized !== '1'){
    ctx.status=401;
    return;
  }
  await next();
  console.log('Promise Call');
})

app.use((ctx,next)=>{
  console.log(2);
  next();
  ctx.body='hello world';
})

app.use(ctx=>{
  ctx.body='hello world';
})

app.listen(4000,()=>{
  console.log('Listening port 4000');
})