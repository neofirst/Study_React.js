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

export const createPromiseThunk = (type, PromiseCreator) => {
  const [SUCCESS, ERROR] = [`${type}_SUCCESS`, `${type}_ERROR`];

  const thunkCreator = param => async dispatch =>{
    dispatch({type})
    try{
      const payload = await PromiseCreator(param);
      dispatch({
        type:SUCCESS,
        payload
      })
    }
    catch(e){
      dispatch({
        type: ERROR,
        payload: e,
        error: true,
      })
    }
  }
  return thunkCreator;
}

const defaultIdSelector = param => param;
export const createPromiseThunkById = (type, PromiseCreator, idSelector = defaultIdSelector) => {
  const [SUCCESS, ERROR] = [`${type}_SUCCESS`, `${type}_ERROR`];

  const ThunkByIdCreator = param => async dispatch =>{
    const id = idSelector(param);
    dispatch({type, meta: id})
    try{
      const payload = await PromiseCreator(param);
      dispatch({
        type:SUCCESS,
        payload,
        meta: id
      })
    }
    catch(e){
      dispatch({
        type: ERROR,
        payload: e,
        error: true,
        meta: id
      })
    }
  }
  return ThunkByIdCreator;
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
