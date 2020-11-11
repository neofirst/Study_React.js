1. Route
   import {Route} from 'react-router-dom';
   <Route />

2. Redux

import {createAction, handleActions} from 'redux-actions';

src/modules/auth.js

import {Provider} from 'react-redux';
import {createStore} from 'redux';

const store = createStore(rootReducer, composeWithDevTools());

ReactDOM.render(
<Provider store={store}>
<BrowserRouter>
<App />
</BrowserRouter>
</Provider>,
document.getElementById('root')
);

src/containers/auth/LoginForm.js
import {useDispatch, useSelector} from 'react-redux';

src/modules/loading.js
import {createAction, handleActions} from 'redux-actions';

src/modules/auth.js
import {takeLatest} from 'redux-saga/effect';

src/modules/index.js
import {all} from 'redux-saga/effects';

src/index.js saga 등록
import {createStore, applyMiddleware} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import rootReducer from './modules';
import createSagaMiddleware from 'redux-saga';
const sagaMiddleware = createSagaMiddleware();
const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(sagaMiddleware)));
sagaMiddleware.run(rootSaga);

src/containers/auth/RegisterForm.js, LoginForm
import {withRouter} from 'react-router-dom';

로그인 유지
src/containers/auth/LoginForm.js
localStorage.setItem('user',JSON.stringify(user));

로그인 상태가 아니면 안되게 처리
src/index.js
function loadUser(){
try{
const suer = localStorage.getItem('user');
if(!user) return;
store.dispatch()
}
}
