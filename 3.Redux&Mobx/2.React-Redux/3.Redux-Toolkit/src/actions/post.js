const { createAsyncThunk } = require('@reduxjs/toolkit')

//테스트용
const delay = (time, value) => new Promise((resolve, reject)=>{
  setTimeout(()=>{
    resolve(value);
  }, time);
});

const addPost = createAsyncThunk('post/add', async(data, thunkAPI)=>{
  console.log(data);
  const result = await delay(500,{
    title: 'add post',
    content:' new Post'
  })
  return result
})

module.exports = {
  addPost,
};
