import React, {useState} from 'react';
import Counter from './Counter';
import Info from './Info';
import UseReducerCounter from './UseReducerCounter';
import UseReducerInfo from './UseReducerInfo';
import UseMemoSample from './UseMemoSample';
import UseCallBackSample from './UseCallBackSample';
import UseRefSample from './UseRefSample';
import CustomHooksInfo from './CustomHooksInfo';

const App = () => {
  const [visible, setVisible] = useState(false);
    return(
      <div>
        <Counter/>
        <hr/>
        <button onClick={()=>{
          setVisible(!visible);
        }}>{visible?'숨기기' : '보이기'}</button>
        <Info/>
        <hr/>
        <UseReducerCounter/>
        <hr/>
        <UseReducerInfo/>
        <hr/>
        <UseMemoSample/>
        <hr/>
        <UseCallBackSample/>
        <hr/>
        <UseRefSample/>
        <hr/>
        <CustomHooksInfo/>
      </div>
    )
}

export default App;
