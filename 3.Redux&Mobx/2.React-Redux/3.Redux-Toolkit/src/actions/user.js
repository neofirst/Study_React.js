const { createAsyncThunk } = require('@reduxjs/toolkit')

//테스트용
const delay = (time, value) => new Promise((resolve, reject)=>{
  setTimeout(()=>{
    resolve(value);
  }, time);
});

const logIn = createAsyncThunk('user/logIn', async(data, thunkAPI) =>{
  // const state = thunkAPI.getState();
  // pending, fulfilled, rejected=>thunk 용어
  // loading, success, failure
  // axios 대용
  console.log(data);
  const result = await delay(500,{
    userId:1,
    nickname:'test id'
  })
  return result
})

const logInRequest = (data) => {
  return {
    type: 'LOG_IN_REQUEST',
    data,
  }
};

const logInSuccess = (data) => {
  return {
    type: 'LOG_IN_SUCCESS',
    data,
  }
};

const logInFailure = (error) => {
  return {
    type: 'LOG_IN_FAILURE',
    error,
  }
};

module.exports = {
  logIn,
};
