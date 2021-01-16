import { Dispatch } from 'redux';
import { getUserProfile } from "../../api/github";
import { getUserProfileAsync } from "./actions";
import createAsyncThunk from "../../lib/createAsyncThunk";

// export const getUserProfileThunk = (username:string) =>{
//   return async (dispatch: Dispatch) => {
//     const { request, success, failure} = getUserProfileAsync;
//     dispatch(request());
//     try{
//       const userProfile = await getUserProfile(username);
//       dispatch(success(userProfile));
//     }catch(e){
//       dispatch(failure(e));
//     }
//   }
// }

//lib 참고
export const getUserProfileThunk = createAsyncThunk(
  getUserProfileAsync,
  getUserProfile
);