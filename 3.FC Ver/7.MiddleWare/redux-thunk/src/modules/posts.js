import * as api from '../api/posts';
import { reducerUtils, createPromiseThunk, handleAsyncActions, createPromiseThunkById, handleAsyncActionsById } from '../lib/asyncUtils';

//액션
const GET_POSTS = 'GET_POSTS';
const GET_POSTS_SUCCESS = 'GET_POSTS_SUCCESS';
const GET_POSTS_ERROR = 'GET_POSTS_ERROR';

const GET_POST = 'GET_POST';
const GET_POST_SUCCESS = 'GET_POST_SUCCESS';
const GET_POST_ERROR = 'GET_POST_ERROR';

const CLEAR_POST = 'CLEAR_POST';

export const getPosts = createPromiseThunk(GET_POSTS, api.getPosts);
export const getPost = createPromiseThunkById(GET_POST, api.getPost);
export const goToHome = () => (dispatch, getState, {history}) =>{
  history.push('/')
}

//lib/asyncUtils
const initialState = {
  posts: reducerUtils.initial(),
  post: {},
}

// eslint-disable-next-line no-use-before-define
const getPostsReducer = handleAsyncActions(GET_POSTS, 'posts', true);
const getPostReducer = handleAsyncActionsById(GET_POST, 'post', true);

const posts = (state = initialState, action) =>{
  switch(action.type){
    case GET_POSTS:
    case GET_POSTS_SUCCESS:
    case GET_POSTS_ERROR:
      return getPostsReducer(state, action);
    case GET_POST:
    case GET_POST_SUCCESS:
    case GET_POST_ERROR:
      return getPostReducer(state, action);
    case CLEAR_POST:
      return{
        ...state,
        post: reducerUtils.initial()
      }
    default:
      return state;
  }
}
export default posts;


// import * as api from '../api/posts';
// import { reducerUtils, createPromiseThunk } from '../lib/asyncUtils';

// //액션
// const GET_POSTS = 'GET_POSTS';
// const GET_POSTS_SUCCESS = 'GET_POSTS_SUCCESS';
// const GET_POSTS_ERROR = 'GET_POSTS_ERROR';

// const GET_POST = 'GET_POST';
// const GET_POST_SUCCESS = 'GET_POST_SUCCESS';
// const GET_POST_ERROR = 'GET_POST_ERROR';

// // export const getPosts = () => async dispatch =>{
// //   dispatch({type:GET_POSTS});
// //   try{
// //     const response = await api.getPosts();
// //     dispatch({type:GET_POSTS_SUCCESS, payload: response.data})
// //   }
// //   catch(e){
// //     dispatch({type:GET_POSTS_ERROR, payload:e})
// //     throw e;
// //   }
// // }

// export const getPosts = createPromiseThunk(GET_POSTS, api.getPosts);

// // export const getPost = id => async dispatch =>{
// //   dispatch({type:GET_POST});
// //   try{
// //     const response = await api.getPost(id);
// //     dispatch({type:GET_POST_SUCCESS, payload: response.data})
// //   }
// //   catch(e){
// //     dispatch({type:GET_POST_ERROR, payload:e})
// //     throw e;
// //   }
// // }
// export const getPost = createPromiseThunk(GET_POST, api.getPost);

// // export const post = (state = initialState, action) =>{
// //   switch(action.type){
// //     case GET_POSTS:
// //       return{        
// //         ...state,
// //         posts: reducerUtiles.loading(),
// //       }
// //     case GET_POSTS_SUCCESS:
// //       return{        
// //         ...state,
// //         posts: reducerUtiles.success(action.payload),
// //       }
// //     case GET_POSTS_ERROR:
// //       return{        
// //         ...state,
// //         posts: reducerUtiles.error(action.payload),
// //       }
// //     case GET_POST:
// //       return{        
// //         ...state,
// //         post: reducerUtiles.loading(),
// //       }
// //     case GET_POST_SUCCESS:
// //       return{        
// //         ...state,
// //         post: reducerUtiles.success(action.payload),
// //       }
// //     case GET_POST_ERROR:
// //       return{        
// //         ...state,
// //         post: reducerUtiles.error(action.payload),
// //       }
// //     default:
// //       return state;
// //   }
// // }


// //lib/asyncUtils
// const initialState = {
//   posts: reducerUtils.initial(),
//   post: reducerUtils.initial(),
// }

// export const handleAsyncActions = (type, key) => {
//   const [SUCCESS, ERROR] = [`${type}_SUCCESS`, `${type}_ERROR`];
//   const reducer = (state, action) =>{
//     switch(action.type){
//       case type:
//         return{
//           ...state,
//           [key] : reducerUtils.loading(),
//         }
//       case SUCCESS:
//         return{
//           ...state,
//           [key] : reducerUtils.success(action.payload),
//         }
//       case ERROR:
//         return{
//           ...state,
//           [key] : reducerUtils.error(action.payload),
//         }
//       default:
//         return state;
//     }
//   }
//   return reducer;
// }

// // eslint-disable-next-line no-use-before-define
// const getPostsReducer = handleAsyncActions(GET_POSTS, 'posts');
// // eslint-disable-next-line no-use-before-define
// const getPostReducer = handleAsyncActions(GET_POST, 'post');

// const posts = (state = initialState, action) =>{
//   switch(action.type){
//     case GET_POSTS:
//     case GET_POSTS_SUCCESS:
//     case GET_POSTS_ERROR:
//       return getPostsReducer(state, action);
//     case GET_POST:
//     case GET_POST_SUCCESS:
//     case GET_POST_ERROR:
//       return getPostReducer(state, action);
//     default:
//       return state;
//   }
// }
// export default posts;
