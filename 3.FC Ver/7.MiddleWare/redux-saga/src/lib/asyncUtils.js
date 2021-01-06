import {put, call} from 'redux-saga/effects';

export const reducerUtils = {
  initial: (data = null) =>({
    data,
    loading: false,
    error: null,
  }),
  loading:(preState=null)=>({
    data:preState,
    loading:true,
    error:null
  }),
  success:(data)=>({
    data,
    loading:false,
    error:null
  }),
  error:(error)=>({
    data:null,
    loading:false,
    error:error
  }),
}

export const createPromiseSaga = (type, PromiseCreator) => {
  const [SUCCESS, ERROR] = [`${type}_SUCCESS`, `${type}_ERROR`];
  return function* saga(action){
    try{
      const result = yield call(PromiseCreator, action.payload);
      yield put({
        type:SUCCESS,
        payload: result
      })
    }
    catch(e){
      yield put({
        type:ERROR,
        payload: e,
        error: true,
      })
    }
  }
}

export const createPromiseSagaById = (type, PromiseCreator) => {
  const [SUCCESS, ERROR] = [`${type}_SUCCESS`, `${type}_ERROR`];
  return function* saga(action){
    const id = action.meta;
    try{
      const result = yield call(PromiseCreator, action.payload);
      yield put({
        type:SUCCESS,
        payload: result,
        meta: id,
      })
    }
    catch(e){
      yield put({
        type:ERROR,
        payload: e,
        error: true,
        meta: id,
      })
    }
  }
}


export const handleAsyncActions = (type, key, keepData) => {
  const [SUCCESS, ERROR] = [`${type}_SUCCESS`, `${type}_ERROR`];
  const reducer = (state, action) =>{
    switch(action.type){
      case type:
        return{
          ...state,
          [key] : reducerUtils.loading(keepData ? state[key].data : null),
        }
      case SUCCESS:
        return{
          ...state,
          [key] : reducerUtils.success(action.payload),
        }
      case ERROR:
        return{
          ...state,
          [key] : reducerUtils.error(action.payload),
        }
      default:
        return state;
    }
  }
  return reducer;
}

export const handleAsyncActionsById = (type, key, keepData) => {
  const [SUCCESS, ERROR] = [`${type}_SUCCESS`, `${type}_ERROR`];
  const reducer = (state, action) =>{
    const id = action.meta;
    switch(action.type){
      case type:
        return{
          ...state,
          [key] : {
            ...state[key],
            [id]: reducerUtils.loading(keepData ? (state[key][id] && state[key][id].data) : null),
          }
        }
      case SUCCESS:
        return{
          ...state,
          [key] : {
            ...state[key],
            [id]: reducerUtils.success(action.payload),
          }
        }
      case ERROR:
        return{
          ...state,
          [key] : {
            ...state[key],
            [id]: reducerUtils.success(action.payload),
          }
        }
      default:
        return state;
    }
  }
  return reducer;
}
