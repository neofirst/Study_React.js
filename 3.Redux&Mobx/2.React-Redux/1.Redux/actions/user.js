//ACTION CREATOR
//sync
// const login = (data) => {
//   return{
//     //action
//     type:'LOG_IN',
//     data,
//   }
// }

const logout = () => {
  return{
    //action
    type:'LOG_OUT',
  }
}

//async await
const login = (data) =>{
  return (dispatch, getState)=>{
    dispatch(loginRequest(data));
    try{
      setTimeout(()=>{
        dispatch(loginSuccess({
          id:1,
          name:'test'
        }));
      }, 2000);
    }
    catch(e){
      dispatch(loginFailure(e));
    }
  }
}

const loginRequest = (data) =>{
  return{
    type:'LOG_IN_REQUEST',
    data,
  }
}

const loginSuccess = () =>{
  return{
    type:'LOG_IN_SUCCESS',
  }
}

const loginFailure = (error) =>{
  return{
    type:'LOG_IN_FAILURE',
    error
  }
}

module.exports = {
  login, logout
}