const { createSlice } = require('@reduxjs/toolkit');
const { addPost } = require('../actions/post');

const initialState = {
  data:[],
};

const postSlice = createSlice({
  name:'post',
  initialState,
  reducers:{
    clearPost(state, action){
      state.data=[];
    }
  },
  // extraReducers:{
  //   [addPost.pending](state, action){
      
  //   },
  //   [addPost.fulfilled](state, action){
  //     state.data.push(action.payload);
  //   },
  //   [addPost.rejected](state, action){
      
  //   }
  // }
  //typesctip 처리 시 타입 추론 위한 방법
  extraReducers:(builder)=>builder
  .addCase(addPost.pending, (state, action) =>{
      
  })
  .addCase(addPost.rejected, (state, action) =>{
    state.data.push(action.payload);
  })
  .addCase(addPost.fulfilled, (state, action) =>{
      
  })
  .addMatcher((action)=>{//공통인 부분 처리
    return action.type.includes('/pending');
  },(state, action)=>{
    state.isLoading=true;
  })
  .addDefaultCase((state, action)=>{

  }),
});

module.exports = postSlice;

