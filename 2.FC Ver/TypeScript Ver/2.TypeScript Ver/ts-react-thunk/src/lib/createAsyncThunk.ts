import { Dispatch } from 'redux';
import { AsyncActionCreatorBuilder } from 'typesafe-actions';

type AnyAsyncActionCreator = AsyncActionCreatorBuilder<any, any, any>;
type AnyPromiseCreator = (...parmas:any[]) => Promise<any>;

const createAsyncThunk = <A extends AnyAsyncActionCreator, F extends AnyPromiseCreator>(
        asyncActionCreator: A,
        promiseCreator: F
      ) => {
        type Params = Parameters<F>;
        return function thunk(...params: Params) {
          return async (dispatch: Dispatch) => {
            const { request, success, failure } = asyncActionCreator;
            dispatch(request(undefined)); 
            try {
              const result = await promiseCreator(...params);
              dispatch(success(result));
            } catch (e) {
              dispatch(failure(e));
            }
          };
        };
      }

export default createAsyncThunk;